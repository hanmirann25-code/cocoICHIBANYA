/**
 * ========================================
 * menuService.js - 메뉴 관리 API 서비스
 * ========================================
 * Firebase Firestore를 사용한 메뉴 관리
 * 카레 메뉴, 토핑, 사이드, 음료 관리
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

const USE_FIREBASE = true;
const STORAGE_KEY_CURRY = 'cocoichibanya_curry_menus';
const STORAGE_KEY_TOPPING = 'cocoichibanya_toppings';
const STORAGE_KEY_SIDE = 'cocoichibanya_sides';
const STORAGE_KEY_DRINK = 'cocoichibanya_drinks';

// ========================================
// Firebase Firestore 구현
// ========================================
class FirebaseMenuService {
  // === 카레 메뉴 ===
  async getAllCurryMenus() {
    return this._getCollection('curry_menus');
  }

  async createCurryMenu(menu) {
    return this._createDocument('curry_menus', menu);
  }

  async updateCurryMenu(id, updatedData) {
    return this._updateDocument('curry_menus', id, updatedData);
  }

  async deleteCurryMenu(id) {
    return this._deleteDocument('curry_menus', id);
  }

  // === 토핑 ===
  async getAllToppings() {
    return this._getCollection('toppings');
  }

  async createTopping(topping) {
    return this._createDocument('toppings', topping);
  }

  async updateTopping(id, updatedData) {
    return this._updateDocument('toppings', id, updatedData);
  }

  async deleteTopping(id) {
    return this._deleteDocument('toppings', id);
  }

  // === 사이드 ===
  async getAllSides() {
    return this._getCollection('sides');
  }

  async createSide(side) {
    return this._createDocument('sides', side);
  }

  async updateSide(id, updatedData) {
    return this._updateDocument('sides', id, updatedData);
  }

  async deleteSide(id) {
    return this._deleteDocument('sides', id);
  }

  // === 음료 ===
  async getAllDrinks() {
    return this._getCollection('drinks');
  }

  async createDrink(drink) {
    return this._createDocument('drinks', drink);
  }

  async updateDrink(id, updatedData) {
    return this._updateDocument('drinks', id, updatedData);
  }

  async deleteDrink(id) {
    return this._deleteDocument('drinks', id);
  }

  // === 공통 메서드 ===
  async _getCollection(collectionName) {
    try {
      const q = query(
        collection(db, collectionName),
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
      console.error(`${collectionName} 불러오기 실패:`, error);
      throw error;
    }
  }

  async _createDocument(collectionName, data) {
    try {
      const newData = {
        ...data,
        displayOrder: data.displayOrder ?? 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, collectionName), newData);
      
      return {
        id: docRef.id,
        ...newData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    } catch (error) {
      console.error(`${collectionName} 생성 실패:`, error);
      throw error;
    }
  }

  async _updateDocument(collectionName, id, updatedData) {
    try {
      const docRef = doc(db, collectionName, id);
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
      console.error(`${collectionName} 수정 실패:`, error);
      throw error;
    }
  }

  async _deleteDocument(collectionName, id) {
    try {
      await deleteDoc(doc(db, collectionName, id));
      return { success: true };
    } catch (error) {
      console.error(`${collectionName} 삭제 실패:`, error);
      throw error;
    }
  }
}

// ========================================
// LocalStorage 구현 (백업용)
// ========================================
class LocalStorageMenuService {
  // === 카레 메뉴 ===
  async getAllCurryMenus() {
    return this._getFromStorage(STORAGE_KEY_CURRY);
  }

  async createCurryMenu(menu) {
    return this._createInStorage(STORAGE_KEY_CURRY, menu, 'curry');
  }

  async updateCurryMenu(id, updatedData) {
    return this._updateInStorage(STORAGE_KEY_CURRY, id, updatedData);
  }

  async deleteCurryMenu(id) {
    return this._deleteFromStorage(STORAGE_KEY_CURRY, id);
  }

  // === 토핑 ===
  async getAllToppings() {
    return this._getFromStorage(STORAGE_KEY_TOPPING);
  }

  async createTopping(topping) {
    return this._createInStorage(STORAGE_KEY_TOPPING, topping, 'topping');
  }

  async updateTopping(id, updatedData) {
    return this._updateInStorage(STORAGE_KEY_TOPPING, id, updatedData);
  }

  async deleteTopping(id) {
    return this._deleteFromStorage(STORAGE_KEY_TOPPING, id);
  }

  // === 사이드 ===
  async getAllSides() {
    return this._getFromStorage(STORAGE_KEY_SIDE);
  }

  async createSide(side) {
    return this._createInStorage(STORAGE_KEY_SIDE, side, 'side');
  }

  async updateSide(id, updatedData) {
    return this._updateInStorage(STORAGE_KEY_SIDE, id, updatedData);
  }

  async deleteSide(id) {
    return this._deleteFromStorage(STORAGE_KEY_SIDE, id);
  }

  // === 음료 ===
  async getAllDrinks() {
    return this._getFromStorage(STORAGE_KEY_DRINK);
  }

  async createDrink(drink) {
    return this._createInStorage(STORAGE_KEY_DRINK, drink, 'drink');
  }

  async updateDrink(id, updatedData) {
    return this._updateInStorage(STORAGE_KEY_DRINK, id, updatedData);
  }

  async deleteDrink(id) {
    return this._deleteFromStorage(STORAGE_KEY_DRINK, id);
  }

  // === 공통 메서드 ===
  _getFromStorage(key) {
    const items = localStorage.getItem(key);
    const parsed = items ? JSON.parse(items) : [];
    return parsed.sort((a, b) => {
      const orderA = a.displayOrder ?? 9999;
      const orderB = b.displayOrder ?? 9999;
      return orderA - orderB;
    });
  }

  _createInStorage(key, data, prefix) {
    const items = this._getFromStorage(key);
    const newItem = {
      ...data,
      id: `${prefix}-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    items.push(newItem);
    localStorage.setItem(key, JSON.stringify(items));
    return newItem;
  }

  _updateInStorage(key, id, updatedData) {
    const items = this._getFromStorage(key);
    const index = items.findIndex(item => item.id === id);
    if (index === -1) throw new Error('항목을 찾을 수 없습니다.');
    
    items[index] = {
      ...items[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(items));
    return items[index];
  }

  _deleteFromStorage(key, id) {
    const items = this._getFromStorage(key);
    const filtered = items.filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(filtered));
    return { success: true };
  }
}

// ========================================
// Export
// ========================================
const menuService = USE_FIREBASE 
  ? new FirebaseMenuService() 
  : new LocalStorageMenuService();

export default menuService;

// ========================================
// 초기 데이터 설정
// ========================================
export const initializeMenus = async () => {
  try {
    // 카레 메뉴 초기화
    const curryMenus = await menuService.getAllCurryMenus();
    if (curryMenus.length === 0) {
      console.log('🍛 카레 메뉴 초기 데이터 생성 중...');
      const initialCurryMenus = [
        {
          name: '포크 커리',
          category: 'pork',
          price: 7500,
          description: '부드러운 돼지고기가 들어간 클래식 커리',
          image: '/images/menu/pork-curry.jpg',
          popular: true,
          allergens: ['돼지고기', '밀', '대두'],
          calories: 650,
          spicy: 2,
          displayOrder: 1
        },
        {
          name: '치킨 커리',
          category: 'chicken',
          price: 7500,
          description: '담백한 닭고기가 들어간 커리',
          image: '/images/menu/chicken-curry.jpg',
          popular: false,
          allergens: ['닭고기', '밀', '대두'],
          calories: 620,
          spicy: 2,
          displayOrder: 2
        }
      ];

      for (const menu of initialCurryMenus) {
        await menuService.createCurryMenu(menu);
      }
      console.log('✅ 카레 메뉴 초기 데이터 생성 완료!');
    }

    // 토핑 초기화
    const toppings = await menuService.getAllToppings();
    if (toppings.length === 0) {
      console.log('🧀 토핑 초기 데이터 생성 중...');
      const initialToppings = [
        {
          name: '치즈',
          category: 'dairy',
          price: 1500,
          description: '고소한 치즈 토핑',
          image: '/images/toppings/cheese.jpg',
          allergens: ['우유'],
          displayOrder: 1
        },
        {
          name: '로스카츠',
          category: 'protein',
          price: 3000,
          description: '바삭한 돈까스 토핑',
          image: '/images/toppings/katsu.jpg',
          allergens: ['돼지고기', '밀'],
          displayOrder: 2
        }
      ];

      for (const topping of initialToppings) {
        await menuService.createTopping(topping);
      }
      console.log('✅ 토핑 초기 데이터 생성 완료!');
    }

    // 사이드 초기화
    const sides = await menuService.getAllSides();
    if (sides.length === 0) {
      console.log('🥗 사이드 초기 데이터 생성 중...');
      const initialSides = [
        {
          name: '샐러드',
          category: 'salad',
          price: 2500,
          description: '신선한 야채 샐러드',
          image: '/images/sides/salad.jpg',
          calories: 120,
          displayOrder: 1
        }
      ];

      for (const side of initialSides) {
        await menuService.createSide(side);
      }
      console.log('✅ 사이드 초기 데이터 생성 완료!');
    }

    // 음료 초기화
    const drinks = await menuService.getAllDrinks();
    if (drinks.length === 0) {
      console.log('🥤 음료 초기 데이터 생성 중...');
      const initialDrinks = [
        {
          name: '콜라',
          category: 'soft',
          price: 2000,
          description: '시원한 콜라',
          image: '/images/drinks/cola.jpg',
          displayOrder: 1
        }
      ];

      for (const drink of initialDrinks) {
        await menuService.createDrink(drink);
      }
      console.log('✅ 음료 초기 데이터 생성 완료!');
    }
  } catch (error) {
    console.error('메뉴 초기화 실패:', error);
  }
};
