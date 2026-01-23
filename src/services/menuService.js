/**
 * ========================================
 * menuService.js - 메뉴 관리 API 서비스
 * ========================================
 * 카레 메뉴, 토핑, 사이드, 음료 관리
 */

const USE_LOCAL_STORAGE = true;
const API_BASE_URL = 'https://your-api-server.com/api';
const STORAGE_KEY_CURRY = 'cocoichibanya_curry_menus';
const STORAGE_KEY_TOPPING = 'cocoichibanya_toppings';
const STORAGE_KEY_SIDE = 'cocoichibanya_sides';
const STORAGE_KEY_DRINK = 'cocoichibanya_drinks';

// ========================================
// LocalStorage 구현
// ========================================
class LocalStorageMenuService {
  // === 카레 메뉴 ===
  async getAllCurryMenus() {
    const menus = localStorage.getItem(STORAGE_KEY_CURRY);
    const parsed = menus ? JSON.parse(menus) : [];
    // displayOrder로 정렬 (없으면 맨 뒤로)
    return parsed.sort((a, b) => {
      const orderA = a.displayOrder ?? 9999;
      const orderB = b.displayOrder ?? 9999;
      return orderA - orderB;
    });
  }

  async createCurryMenu(menu) {
    const menus = await this.getAllCurryMenus();
    const newMenu = {
      ...menu,
      id: `curry-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    menus.push(newMenu);
    localStorage.setItem(STORAGE_KEY_CURRY, JSON.stringify(menus));
    return newMenu;
  }

  async updateCurryMenu(id, updatedData) {
    const menus = await this.getAllCurryMenus();
    const index = menus.findIndex(m => m.id === id);
    if (index === -1) throw new Error('메뉴를 찾을 수 없습니다.');
    
    menus[index] = {
      ...menus[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY_CURRY, JSON.stringify(menus));
    return menus[index];
  }

  async deleteCurryMenu(id) {
    const menus = await this.getAllCurryMenus();
    const filtered = menus.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEY_CURRY, JSON.stringify(filtered));
    return { success: true };
  }

  // === 토핑 ===
  async getAllToppings() {
    const toppings = localStorage.getItem(STORAGE_KEY_TOPPING);
    const parsed = toppings ? JSON.parse(toppings) : [];
    // displayOrder로 정렬 (없으면 맨 뒤로)
    return parsed.sort((a, b) => {
      const orderA = a.displayOrder ?? 9999;
      const orderB = b.displayOrder ?? 9999;
      return orderA - orderB;
    });
  }

  async createTopping(topping) {
    const toppings = await this.getAllToppings();
    const newTopping = {
      ...topping,
      id: `topping-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    toppings.push(newTopping);
    localStorage.setItem(STORAGE_KEY_TOPPING, JSON.stringify(toppings));
    return newTopping;
  }

  async updateTopping(id, updatedData) {
    const toppings = await this.getAllToppings();
    const index = toppings.findIndex(t => t.id === id);
    if (index === -1) throw new Error('토핑을 찾을 수 없습니다.');
    
    toppings[index] = {
      ...toppings[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY_TOPPING, JSON.stringify(toppings));
    return toppings[index];
  }

  async deleteTopping(id) {
    const toppings = await this.getAllToppings();
    const filtered = toppings.filter(t => t.id !== id);
    localStorage.setItem(STORAGE_KEY_TOPPING, JSON.stringify(filtered));
    return { success: true };
  }

  // === 사이드 메뉴 ===
  async getAllSides() {
    const sides = localStorage.getItem(STORAGE_KEY_SIDE);
    const parsed = sides ? JSON.parse(sides) : [];
    // displayOrder로 정렬 (없으면 맨 뒤로)
    return parsed.sort((a, b) => {
      const orderA = a.displayOrder ?? 9999;
      const orderB = b.displayOrder ?? 9999;
      return orderA - orderB;
    });
  }

  async createSide(side) {
    const sides = await this.getAllSides();
    const newSide = {
      ...side,
      id: `side-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    sides.push(newSide);
    localStorage.setItem(STORAGE_KEY_SIDE, JSON.stringify(sides));
    return newSide;
  }

  async updateSide(id, updatedData) {
    const sides = await this.getAllSides();
    const index = sides.findIndex(s => s.id === id);
    if (index === -1) throw new Error('사이드를 찾을 수 없습니다.');
    
    sides[index] = {
      ...sides[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY_SIDE, JSON.stringify(sides));
    return sides[index];
  }

  async deleteSide(id) {
    const sides = await this.getAllSides();
    const filtered = sides.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEY_SIDE, JSON.stringify(filtered));
    return { success: true };
  }

  // === 음료 ===
  async getAllDrinks() {
    const drinks = localStorage.getItem(STORAGE_KEY_DRINK);
    const parsed = drinks ? JSON.parse(drinks) : [];
    // displayOrder로 정렬 (없으면 맨 뒤로)
    return parsed.sort((a, b) => {
      const orderA = a.displayOrder ?? 9999;
      const orderB = b.displayOrder ?? 9999;
      return orderA - orderB;
    });
  }

  async createDrink(drink) {
    const drinks = await this.getAllDrinks();
    const newDrink = {
      ...drink,
      id: `drink-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    drinks.push(newDrink);
    localStorage.setItem(STORAGE_KEY_DRINK, JSON.stringify(drinks));
    return newDrink;
  }

  async updateDrink(id, updatedData) {
    const drinks = await this.getAllDrinks();
    const index = drinks.findIndex(d => d.id === id);
    if (index === -1) throw new Error('음료를 찾을 수 없습니다.');
    
    drinks[index] = {
      ...drinks[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY_DRINK, JSON.stringify(drinks));
    return drinks[index];
  }

  async deleteDrink(id) {
    const drinks = await this.getAllDrinks();
    const filtered = drinks.filter(d => d.id !== id);
    localStorage.setItem(STORAGE_KEY_DRINK, JSON.stringify(filtered));
    return { success: true };
  }
}

// ========================================
// 실서버 API 구현
// ========================================
class APIMenuService {
  async getAllCurryMenus() {
    const response = await fetch(`${API_BASE_URL}/menus/curry`);
    if (!response.ok) throw new Error('메뉴를 불러올 수 없습니다.');
    return await response.json();
  }

  async createCurryMenu(menu) {
    const response = await fetch(`${API_BASE_URL}/menus/curry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(menu)
    });
    if (!response.ok) throw new Error('메뉴를 생성할 수 없습니다.');
    return await response.json();
  }

  async updateCurryMenu(id, updatedData) {
    const response = await fetch(`${API_BASE_URL}/menus/curry/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    });
    if (!response.ok) throw new Error('메뉴를 수정할 수 없습니다.');
    return await response.json();
  }

  async deleteCurryMenu(id) {
    const response = await fetch(`${API_BASE_URL}/menus/curry/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('메뉴를 삭제할 수 없습니다.');
    return await response.json();
  }

  // 토핑, 사이드, 음료도 동일한 패턴으로 구현
  async getAllToppings() {
    const response = await fetch(`${API_BASE_URL}/menus/toppings`);
    if (!response.ok) throw new Error('토핑을 불러올 수 없습니다.');
    return await response.json();
  }

  async getAllSides() {
    const response = await fetch(`${API_BASE_URL}/menus/sides`);
    if (!response.ok) throw new Error('사이드를 불러올 수 없습니다.');
    return await response.json();
  }

  async getAllDrinks() {
    const response = await fetch(`${API_BASE_URL}/menus/drinks`);
    if (!response.ok) throw new Error('음료를 불러올 수 없습니다.');
    return await response.json();
  }
}

const menuService = USE_LOCAL_STORAGE 
  ? new LocalStorageMenuService() 
  : new APIMenuService();

export default menuService;

// 초기 데이터 설정
export const initializeMenus = async () => {
  if (!USE_LOCAL_STORAGE) return;
  
  const existingCurry = await menuService.getAllCurryMenus();
  if (existingCurry.length === 0) {
    const initialCurryMenus = [
      {
        id: 'pork-cutlet',
        name: '로스카츠 카레',
        category: 'pork',
        price: 7800,
        description: '코코이찌방야의 대표 메뉴! 바삭한 로스카츠와 진한 카레의 환상 조합',
        image: '/images/menu/pork-cutlet.jpg',
        popular: true,
        allergens: ['돼지고기', '밀', '대두'],
        calories: 850,
        spicy: 0
      },
      {
        id: 'chicken-cutlet',
        name: '치킨카츠 카레',
        category: 'chicken',
        price: 7500,
        description: '부드러운 치킨카츠와 코코이찌방야 특제 카레',
        image: '/images/menu/chicken-cutlet.jpg',
        popular: true,
        allergens: ['닭고기', '밀', '대두'],
        calories: 780,
        spicy: 0
      }
    ];
    localStorage.setItem(STORAGE_KEY_CURRY, JSON.stringify(initialCurryMenus));
  }

  const existingToppings = await menuService.getAllToppings();
  if (existingToppings.length === 0) {
    const initialToppings = [
      {
        id: 'cheese',
        name: '치즈',
        price: 1000,
        category: 'dairy',
        image: '/images/toppings/cheese.jpg',
        description: '고소한 체다치즈',
        allergens: ['우유']
      },
      {
        id: 'egg',
        name: '계란후라이',
        price: 800,
        category: 'protein',
        image: '/images/toppings/egg.jpg',
        description: '반숙 계란후라이',
        allergens: ['계란']
      }
    ];
    localStorage.setItem(STORAGE_KEY_TOPPING, JSON.stringify(initialToppings));
  }

  const existingSides = await menuService.getAllSides();
  if (existingSides.length === 0) {
    const initialSides = [
      {
        id: 'salad',
        name: '코울슬로 샐러드',
        category: 'salad',
        price: 2500,
        description: '상큼한 양배추 샐러드',
        image: '/images/sides/salad.jpg',
        calories: 150
      },
      {
        id: 'soup',
        name: '미소시루',
        category: 'soup',
        price: 1500,
        description: '따뜻한 된장국',
        image: '/images/sides/soup.jpg',
        calories: 50
      }
    ];
    localStorage.setItem(STORAGE_KEY_SIDE, JSON.stringify(initialSides));
  }

  const existingDrinks = await menuService.getAllDrinks();
  if (existingDrinks.length === 0) {
    const initialDrinks = [
      {
        id: 'cola',
        name: '콜라',
        category: 'soft',
        price: 2000,
        description: '시원한 코카콜라',
        image: '/images/drinks/cola.jpg'
      },
      {
        id: 'orange-juice',
        name: '오렌지주스',
        category: 'juice',
        price: 2500,
        description: '생과일 오렌지주스',
        image: '/images/drinks/orange.jpg'
      }
    ];
    localStorage.setItem(STORAGE_KEY_DRINK, JSON.stringify(initialDrinks));
  }
};
