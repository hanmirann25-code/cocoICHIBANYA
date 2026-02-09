/**
 * ========================================
 * consultationService.js - 창업 상담 신청 관리
 * ========================================
 * Firebase Firestore를 사용한 상담 신청 관리
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
const STORAGE_KEY = 'cocoichibanya_consultations';
const COLLECTION_NAME = 'consultations';

// ========================================
// Firebase Firestore 구현
// ========================================
class FirebaseConsultationService {
  async getAllConsultations() {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString()
      }));
    } catch (error) {
      console.error('상담 신청 목록 불러오기 실패:', error);
      throw error;
    }
  }

  async createConsultation(consultation) {
    try {
      const newConsultation = {
        ...consultation,
        status: 'pending', // pending, contacted, completed
        notes: '',
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, COLLECTION_NAME), newConsultation);
      
      return {
        id: docRef.id,
        ...newConsultation,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('상담 신청 생성 실패:', error);
      throw error;
    }
  }

  async updateConsultation(id, updatedData) {
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
      console.error('상담 신청 수정 실패:', error);
      throw error;
    }
  }

  async deleteConsultation(id) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return { success: true };
    } catch (error) {
      console.error('상담 신청 삭제 실패:', error);
      throw error;
    }
  }

  async getConsultationById(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        throw new Error('상담 신청을 찾을 수 없습니다.');
      }
      
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString(),
        updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString()
      };
    } catch (error) {
      console.error('상담 신청 조회 실패:', error);
      throw error;
    }
  }
}

// ========================================
// LocalStorage 구현 (백업용)
// ========================================
class LocalStorageConsultationService {
  async getAllConsultations() {
    const consultations = localStorage.getItem(STORAGE_KEY);
    return consultations ? JSON.parse(consultations) : [];
  }

  async createConsultation(consultation) {
    const consultations = await this.getAllConsultations();
    const newConsultation = {
      ...consultation,
      id: `consultation-${Date.now()}`,
      status: 'pending',
      notes: '',
      createdAt: new Date().toISOString()
    };
    consultations.unshift(newConsultation);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consultations));
    return newConsultation;
  }

  async updateConsultation(id, updatedData) {
    const consultations = await this.getAllConsultations();
    const index = consultations.findIndex(c => c.id === id);
    if (index === -1) throw new Error('상담 신청을 찾을 수 없습니다.');
    
    consultations[index] = {
      ...consultations[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consultations));
    return consultations[index];
  }

  async deleteConsultation(id) {
    const consultations = await this.getAllConsultations();
    const filtered = consultations.filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return { success: true };
  }

  async getConsultationById(id) {
    const consultations = await this.getAllConsultations();
    return consultations.find(c => c.id === id);
  }
}

// ========================================
// Export
// ========================================
const consultationService = USE_FIREBASE 
  ? new FirebaseConsultationService() 
  : new LocalStorageConsultationService();

export default consultationService;
