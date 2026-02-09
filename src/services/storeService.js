/**
 * ========================================
 * storeService.js - 매장 관리 API 서비스
 * ========================================
 * Firebase Firestore를 사용한 매장 관리
 */

import { 
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  query,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const USE_FIREBASE = true; // true: Firebase, false: LocalStorage
const STORAGE_KEY = 'cocoichibanya_stores';
const COLLECTION_NAME = 'stores';

// ========================================
// Firebase Firestore 구현
// ========================================
class FirebaseStoreService {
  async getAllStores() {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy('displayOrder', 'asc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString(),
        updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString()
      }));
    } catch (error) {
      console.error('매장 목록 불러오기 실패:', error);
      throw error;
    }
  }

  async createStore(store) {
    try {
      const newStore = {
        ...store,
        displayOrder: store.displayOrder ?? 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, COLLECTION_NAME), newStore);
      
      return {
        id: docRef.id,
        ...newStore,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('매장 생성 실패:', error);
      throw error;
    }
  }

  async updateStore(id, updatedData) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const updateData = {
        ...updatedData,
        updatedAt: Timestamp.now()
      };
      
      await updateDoc(docRef, updateData);
      
      const docSnap = await getDoc(docRef);
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString(),
        updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString()
      };
    } catch (error) {
      console.error('매장 수정 실패:', error);
      throw error;
    }
  }

  async deleteStore(id) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return { success: true };
    } catch (error) {
      console.error('매장 삭제 실패:', error);
      throw error;
    }
  }

  async getStoreById(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        throw new Error('매장을 찾을 수 없습니다.');
      }
      
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString(),
        updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString()
      };
    } catch (error) {
      console.error('매장 조회 실패:', error);
      throw error;
    }
  }
}

// ========================================
// LocalStorage 구현 (백업용)
// ========================================
class LocalStorageStoreService {
  async getAllStores() {
    const stores = localStorage.getItem(STORAGE_KEY);
    const parsed = stores ? JSON.parse(stores) : [];
    return parsed.sort((a, b) => {
      const orderA = a.displayOrder ?? 9999;
      const orderB = b.displayOrder ?? 9999;
      return orderA - orderB;
    });
  }

  async createStore(store) {
    const stores = await this.getAllStores();
    const newStore = {
      ...store,
      id: `store-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    stores.push(newStore);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stores));
    return newStore;
  }

  async updateStore(id, updatedData) {
    const stores = await this.getAllStores();
    const index = stores.findIndex(s => s.id === id);
    if (index === -1) throw new Error('매장을 찾을 수 없습니다.');
    
    stores[index] = {
      ...stores[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stores));
    return stores[index];
  }

  async deleteStore(id) {
    const stores = await this.getAllStores();
    const filtered = stores.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return { success: true };
  }

  async getStoreById(id) {
    const stores = await this.getAllStores();
    return stores.find(s => s.id === id);
  }
}

// ========================================
// Export
// ========================================
const storeService = USE_FIREBASE 
  ? new FirebaseStoreService() 
  : new LocalStorageStoreService();

export default storeService;

// ========================================
// 초기 데이터 설정
// ========================================
export const initializeStores = async () => {
  try {
    const existing = await storeService.getAllStores();
    if (existing.length > 0) return;

    console.log('🏪 매장 초기 데이터 생성 중...');

    const initialStores = [
      {
        name: '강남역점',
        address: '서울특별시 강남구 강남대로 396',
        phone: '02-1234-5678',
        hours: '11:00 - 22:00',
        lat: 37.4979,
        lng: 127.0276,
        features: ['주차가능', '배달가능', '포장가능'],
        images: ['/images/stores/gangnam.jpg'],
        displayOrder: 1
      },
      {
        name: '홍대입구점',
        address: '서울특별시 마포구 양화로 160',
        phone: '02-2345-6789',
        hours: '11:00 - 23:00',
        lat: 37.5563,
        lng: 126.9234,
        features: ['배달가능', '포장가능', '단체석'],
        images: ['/images/stores/hongdae.jpg'],
        displayOrder: 2
      }
    ];

    for (const store of initialStores) {
      await storeService.createStore(store);
    }

    console.log('✅ 매장 초기 데이터 생성 완료!');
  } catch (error) {
    console.error('매장 초기화 실패:', error);
  }
};
