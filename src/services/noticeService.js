/**
 * ========================================
 * noticeService.js - 공지사항 API 서비스
 * ========================================
 * Firebase Firestore를 사용한 공지사항 관리
 * 
 * 🔧 설정:
 * 1. USE_FIREBASE를 true로 설정 (Firebase 사용)
 * 2. false로 설정 시 LocalStorage 사용 (개발/테스트용)
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

// ========================================
// 설정
// ========================================
const USE_FIREBASE = true; // true: Firebase, false: LocalStorage
const STORAGE_KEY = 'cocoichibanya_notices';
const COLLECTION_NAME = 'notices'; // Firestore 컬렉션 이름

// ========================================
// Firebase Firestore 구현
// ========================================
class FirebaseNoticeService {
  // 모든 공지사항 가져오기
  async getAllNotices() {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Timestamp를 문자열로 변환
        date: doc.data().date || new Date(doc.data().createdAt?.toDate()).toISOString().split('T')[0],
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString()
      }));
    } catch (error) {
      console.error('공지사항 불러오기 실패:', error);
      throw error;
    }
  }

  // 공지사항 추가
  async createNotice(notice) {
    try {
      const newNotice = {
        ...notice,
        date: new Date().toISOString().split('T')[0],
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, COLLECTION_NAME), newNotice);
      
      return {
        id: docRef.id,
        ...newNotice,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('공지사항 생성 실패:', error);
      throw error;
    }
  }

  // 공지사항 수정
  async updateNotice(id, updatedData) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const updateData = {
        ...updatedData,
        updatedAt: Timestamp.now()
      };
      
      await updateDoc(docRef, updateData);
      
      // 업데이트된 문서 가져오기
      const docSnap = await getDoc(docRef);
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString(),
        updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString()
      };
    } catch (error) {
      console.error('공지사항 수정 실패:', error);
      throw error;
    }
  }

  // 공지사항 삭제
  async deleteNotice(id) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return { success: true };
    } catch (error) {
      console.error('공지사항 삭제 실패:', error);
      throw error;
    }
  }

  // 특정 공지사항 가져오기
  async getNoticeById(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        throw new Error('공지사항을 찾을 수 없습니다.');
      }
      
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString(),
        updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString()
      };
    } catch (error) {
      console.error('공지사항 조회 실패:', error);
      throw error;
    }
  }
}

// ========================================
// LocalStorage 구현 (백업용)
// ========================================
class LocalStorageNoticeService {
  // 모든 공지사항 가져오기
  async getAllNotices() {
    const notices = localStorage.getItem(STORAGE_KEY);
    return notices ? JSON.parse(notices) : [];
  }

  // 공지사항 추가
  async createNotice(notice) {
    const notices = await this.getAllNotices();
    const newNotice = {
      ...notice,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };
    notices.unshift(newNotice);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notices));
    return newNotice;
  }

  // 공지사항 수정
  async updateNotice(id, updatedData) {
    const notices = await this.getAllNotices();
    const index = notices.findIndex(n => n.id === id || n.id === Number(id));
    if (index === -1) throw new Error('공지사항을 찾을 수 없습니다.');
    
    notices[index] = {
      ...notices[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notices));
    return notices[index];
  }

  // 공지사항 삭제
  async deleteNotice(id) {
    const notices = await this.getAllNotices();
    const filtered = notices.filter(n => n.id !== id && n.id !== Number(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return { success: true };
  }

  // 특정 공지사항 가져오기
  async getNoticeById(id) {
    const notices = await this.getAllNotices();
    return notices.find(n => n.id === id || n.id === Number(id));
  }
}

// ========================================
// Export (환경에 따라 자동 선택)
// ========================================
const noticeService = USE_FIREBASE 
  ? new FirebaseNoticeService() 
  : new LocalStorageNoticeService();

export default noticeService;

// ========================================
// 초기 데이터 설정 (최초 1회만)
// ========================================
export const initializeNotices = async () => {
  try {
    const existing = await noticeService.getAllNotices();
    if (existing.length > 0) return; // 이미 데이터가 있으면 스킵

    console.log('📢 공지사항 초기 데이터 생성 중...');

    // 초기 샘플 데이터
    const initialNotices = [
      {
        category: '이벤트',
        title: '신메뉴 출시 기념 특별 할인 이벤트',
        content: `신메뉴 '그랑마더 커리' 출시를 기념하여 특별 할인 이벤트를 진행합니다!

기간: 2026년 2월 1일 ~ 2월 28일
혜택: 그랑마더 커리 20% 할인
대상: 전국 모든 매장

이 기회를 놓치지 마세요!`,
        isImportant: true,
        author: '코코이찌방야'
      },
      {
        category: '공지',
        title: '설 연휴 매장 운영 안내',
        content: `설 연휴 기간 동안 매장별 운영 시간이 다를 수 있습니다.

연휴 기간: 2026년 1월 28일 ~ 1월 31일

매장별 운영 시간은 '매장 찾기' 페이지에서 확인하실 수 있습니다.
방문 전 해당 매장에 문의하시기 바랍니다.

즐거운 명절 되세요!`,
        isImportant: true,
        author: '코코이찌방야'
      }
    ];

    // Firebase 또는 LocalStorage에 데이터 추가
    for (const notice of initialNotices) {
      await noticeService.createNotice(notice);
    }

    console.log('✅ 공지사항 초기 데이터 생성 완료!');
  } catch (error) {
    console.error('공지사항 초기화 실패:', error);
  }
};
