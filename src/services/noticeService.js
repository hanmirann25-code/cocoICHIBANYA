/**
 * ========================================
 * noticeService.js - 공지사항 API 서비스
 * ========================================
 * LocalStorage와 실서버 API를 쉽게 전환할 수 있는 서비스 레이어
 * 
 * 🔧 실서버 전환 방법:
 * 1. USE_LOCAL_STORAGE를 false로 변경
 * 2. API_BASE_URL을 실서버 주소로 변경
 * 3. API 함수들만 수정 (인터페이스는 동일하게 유지)
 */

// ========================================
// 설정 (실서버 전환 시 수정)
// ========================================
const USE_LOCAL_STORAGE = true; // 개발: true, 실서버: false
const API_BASE_URL = 'https://your-api-server.com/api'; // 실서버 주소
const STORAGE_KEY = 'cocoichibanya_notices';

// ========================================
// LocalStorage 구현
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
      id: Date.now(), // 간단한 ID 생성
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };
    notices.unshift(newNotice); // 최신 글이 위로
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notices));
    return newNotice;
  }

  // 공지사항 수정
  async updateNotice(id, updatedData) {
    const notices = await this.getAllNotices();
    const index = notices.findIndex(n => n.id === id);
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
    const filtered = notices.filter(n => n.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return { success: true };
  }

  // 특정 공지사항 가져오기
  async getNoticeById(id) {
    const notices = await this.getAllNotices();
    return notices.find(n => n.id === id);
  }
}

// ========================================
// 실서버 API 구현 (나중에 사용)
// ========================================
class APINoticeService {
  // 모든 공지사항 가져오기
  async getAllNotices() {
    const response = await fetch(`${API_BASE_URL}/notices`);
    if (!response.ok) throw new Error('공지사항을 불러올 수 없습니다.');
    return await response.json();
  }

  // 공지사항 추가
  async createNotice(notice) {
    const response = await fetch(`${API_BASE_URL}/notices`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(notice)
    });
    if (!response.ok) throw new Error('공지사항을 생성할 수 없습니다.');
    return await response.json();
  }

  // 공지사항 수정
  async updateNotice(id, updatedData) {
    const response = await fetch(`${API_BASE_URL}/notices/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    });
    if (!response.ok) throw new Error('공지사항을 수정할 수 없습니다.');
    return await response.json();
  }

  // 공지사항 삭제
  async deleteNotice(id) {
    const response = await fetch(`${API_BASE_URL}/notices/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('공지사항을 삭제할 수 없습니다.');
    return await response.json();
  }

  // 특정 공지사항 가져오기
  async getNoticeById(id) {
    const response = await fetch(`${API_BASE_URL}/notices/${id}`);
    if (!response.ok) throw new Error('공지사항을 찾을 수 없습니다.');
    return await response.json();
  }
}

// ========================================
// Export (환경에 따라 자동 선택)
// ========================================
const noticeService = USE_LOCAL_STORAGE 
  ? new LocalStorageNoticeService() 
  : new APINoticeService();

export default noticeService;

// ========================================
// 초기 데이터 설정 (최초 1회만)
// ========================================
export const initializeNotices = async () => {
  if (!USE_LOCAL_STORAGE) return; // 실서버는 초기화 불필요
  
  const existing = await noticeService.getAllNotices();
  if (existing.length > 0) return; // 이미 데이터가 있으면 스킵

  // 초기 샘플 데이터
  const initialNotices = [
    {
      id: 1,
      category: '이벤트',
      title: '신메뉴 출시 기념 특별 할인 이벤트',
      content: `신메뉴 '그랑마더 커리' 출시를 기념하여 특별 할인 이벤트를 진행합니다!

기간: 2026년 2월 1일 ~ 2월 28일
혜택: 그랑마더 커리 20% 할인
대상: 전국 모든 매장

이 기회를 놓치지 마세요!`,
      date: '2026-01-20',
      isImportant: true,
      author: '코코이찌방야'
    },
    {
      id: 2,
      category: '공지',
      title: '설 연휴 매장 운영 안내',
      content: `설 연휴 기간 동안 매장별 운영 시간이 다를 수 있습니다.

연휴 기간: 2026년 1월 28일 ~ 1월 31일

매장별 운영 시간은 '매장 찾기' 페이지에서 확인하실 수 있습니다.
방문 전 해당 매장에 문의하시기 바랍니다.

즐거운 명절 되세요!`,
      date: '2026-01-18',
      isImportant: true,
      author: '코코이찌방야'
    }
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialNotices));
};
