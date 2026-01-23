/**
 * ========================================
 * storeService.js - 매장 관리 API 서비스
 * ========================================
 * LocalStorage와 실서버 API를 쉽게 전환할 수 있는 서비스 레이어
 */

const USE_LOCAL_STORAGE = true;
const API_BASE_URL = 'https://your-api-server.com/api';
const STORAGE_KEY = 'cocoichibanya_stores';

// ========================================
// LocalStorage 구현
// ========================================
class LocalStorageStoreService {
  async getAllStores() {
    const stores = localStorage.getItem(STORAGE_KEY);
    const parsed = stores ? JSON.parse(stores) : [];
    // displayOrder로 정렬 (없으면 맨 뒤로)
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
// 실서버 API 구현
// ========================================
class APIStoreService {
  async getAllStores() {
    const response = await fetch(`${API_BASE_URL}/stores`);
    if (!response.ok) throw new Error('매장 목록을 불러올 수 없습니다.');
    return await response.json();
  }

  async createStore(store) {
    const response = await fetch(`${API_BASE_URL}/stores`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(store)
    });
    if (!response.ok) throw new Error('매장을 생성할 수 없습니다.');
    return await response.json();
  }

  async updateStore(id, updatedData) {
    const response = await fetch(`${API_BASE_URL}/stores/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    });
    if (!response.ok) throw new Error('매장을 수정할 수 없습니다.');
    return await response.json();
  }

  async deleteStore(id) {
    const response = await fetch(`${API_BASE_URL}/stores/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('매장을 삭제할 수 없습니다.');
    return await response.json();
  }

  async getStoreById(id) {
    const response = await fetch(`${API_BASE_URL}/stores/${id}`);
    if (!response.ok) throw new Error('매장을 찾을 수 없습니다.');
    return await response.json();
  }
}

const storeService = USE_LOCAL_STORAGE 
  ? new LocalStorageStoreService() 
  : new APIStoreService();

export default storeService;

// 초기 데이터 설정
export const initializeStores = async () => {
  if (!USE_LOCAL_STORAGE) return;
  
  const existing = await storeService.getAllStores();
  if (existing.length > 0) return;

  const initialStores = [
    {
      id: 'gangnam',
      name: '강남점',
      address: '서울특별시 강남구 강남대로 123',
      phone: '02-1234-5678',
      hours: '11:00 - 22:00',
      lat: 37.4979,
      lng: 127.0276,
      features: ['주차가능', '배달가능', '포장가능', '단체석'],
      images: ['/images/stores/gangnam-1.jpg']
    },
    {
      id: 'hongdae',
      name: '홍대점',
      address: '서울특별시 마포구 양화로 456',
      phone: '02-2345-6789',
      hours: '11:00 - 23:00',
      lat: 37.5563,
      lng: 126.9245,
      features: ['배달가능', '포장가능', '24시간'],
      images: ['/images/stores/hongdae-1.jpg']
    }
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStores));
};
