/**
 * ========================================
 * 메뉴 데이터 - 코코이찌방야
 * ========================================
 * 카레 메뉴, 토핑, 매운맛 단계 등의 데이터를 관리합니다.
 */

// 매운맛 단계 (0~10단계)
export const spicyLevels = [
  { level: 0, name: '보통맛', description: '매운맛이 없는 기본 카레', heat: 0 },
  { level: 1, name: '1단계', description: '살짝 매콤한 맛', heat: 10 },
  { level: 2, name: '2단계', description: '약간 매운 맛', heat: 20 },
  { level: 3, name: '3단계', description: '은은하게 매운 맛', heat: 30 },
  { level: 4, name: '4단계', description: '적당히 매운 맛', heat: 40 },
  { level: 5, name: '5단계', description: '중간 정도 매운 맛', heat: 50 },
  { level: 6, name: '6단계', description: '제법 매운 맛', heat: 60 },
  { level: 7, name: '7단계', description: '많이 매운 맛', heat: 70 },
  { level: 8, name: '8단계', description: '상당히 매운 맛', heat: 80 },
  { level: 9, name: '9단계', description: '아주 매운 맛', heat: 90 },
  { level: 10, name: '10단계', description: '극강의 매운맛', heat: 100 }
];

// 밥 양 옵션
export const riceOptions = [
  { value: 'less', name: '적게 (200g)', price: 0 },
  { value: 'normal', name: '보통 (300g)', price: 0 },
  { value: 'more', name: '많이 (400g)', price: 0 }
];

// 카레 소스 양 옵션
export const sauceOptions = [
  { value: 'normal', name: '보통', price: 0 },
  { value: 'extra', name: '추가 (50ml)', price: 500 }
];

// 메인 카레 메뉴 카테고리
export const menuCategories = [
  { id: 'all', name: '전체', icon: '🍛' },
  { id: 'pork', name: '돈까스 카레', icon: '🐷' },
  { id: 'chicken', name: '치킨 카레', icon: '🐔' },
  { id: 'beef', name: '비프 카레', icon: '🥩' },
  { id: 'seafood', name: '해산물 카레', icon: '🦐' },
  { id: 'vegetable', name: '야채 카레', icon: '🥗' },
  { id: 'special', name: '스페셜 메뉴', icon: '⭐' }
];

// 메인 카레 메뉴
export const curryMenus = [
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
  },
  {
    id: 'beef-cutlet',
    name: '비프카츠 카레',
    category: 'beef',
    price: 8500,
    description: '프리미엄 소고기 카츠와 풍부한 카레 소스',
    image: '/images/menu/beef-cutlet.jpg',
    popular: false,
    allergens: ['쇠고기', '밀', '대두'],
    calories: 920,
    spicy: 0
  },
  {
    id: 'shrimp-cutlet',
    name: '새우카츠 카레',
    category: 'seafood',
    price: 8800,
    description: '통통한 새우카츠가 들어간 시그니처 카레',
    image: '/images/menu/shrimp-cutlet.jpg',
    popular: true,
    allergens: ['새우', '밀', '대두'],
    calories: 800,
    spicy: 0
  },
  {
    id: 'vegetable',
    name: '야채 카레',
    category: 'vegetable',
    price: 6500,
    description: '신선한 제철 야채가 가득한 건강한 카레',
    image: '/images/menu/vegetable.jpg',
    popular: false,
    allergens: ['대두', '밀'],
    calories: 550,
    spicy: 0
  },
  {
    id: 'cheese',
    name: '치즈카츠 카레',
    category: 'special',
    price: 8200,
    description: '고소한 치즈가 쏟아지는 특별한 카레',
    image: '/images/menu/cheese.jpg',
    popular: true,
    allergens: ['돼지고기', '우유', '밀', '대두'],
    calories: 950,
    spicy: 0
  },
  {
    id: 'grand-mother',
    name: '그랜드마더 카레',
    category: 'special',
    price: 9500,
    description: '로스카츠, 소시지, 치즈가 모두 들어간 프리미엄 카레',
    image: '/images/menu/grand-mother.jpg',
    popular: true,
    allergens: ['돼지고기', '우유', '밀', '대두'],
    calories: 1150,
    spicy: 0
  }
];

// 토핑 메뉴 (추가 선택 가능)
export const toppings = [
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
  },
  {
    id: 'sausage',
    name: '소시지',
    price: 1200,
    category: 'protein',
    image: '/images/toppings/sausage.jpg',
    description: '육즙 가득한 소시지',
    allergens: ['돼지고기']
  },
  {
    id: 'pork-cutlet',
    name: '로스카츠',
    price: 2500,
    category: 'protein',
    image: '/images/toppings/pork-cutlet.jpg',
    description: '바삭한 로스카츠 추가',
    allergens: ['돼지고기', '밀']
  },
  {
    id: 'chicken-cutlet',
    name: '치킨카츠',
    price: 2300,
    category: 'protein',
    image: '/images/toppings/chicken-cutlet.jpg',
    description: '치킨카츠 추가',
    allergens: ['닭고기', '밀']
  },
  {
    id: 'shrimp',
    name: '새우튀김',
    price: 2800,
    category: 'seafood',
    image: '/images/toppings/shrimp.jpg',
    description: '바삭한 새우튀김 3마리',
    allergens: ['새우', '밀']
  },
  {
    id: 'vegetables',
    name: '야채믹스',
    price: 1500,
    category: 'vegetable',
    image: '/images/toppings/vegetables.jpg',
    description: '신선한 야채 모음',
    allergens: []
  },
  {
    id: 'mushroom',
    name: '버섯',
    price: 1000,
    category: 'vegetable',
    image: '/images/toppings/mushroom.jpg',
    description: '갓 구운 버섯',
    allergens: []
  },
  {
    id: 'corn',
    name: '콘',
    price: 800,
    category: 'vegetable',
    image: '/images/toppings/corn.jpg',
    description: '달콤한 옥수수',
    allergens: []
  },
  {
    id: 'garlic',
    name: '마늘칩',
    price: 500,
    category: 'seasoning',
    image: '/images/toppings/garlic.jpg',
    description: '바삭한 마늘칩',
    allergens: []
  }
];

// 토핑 카테고리
export const toppingCategories = [
  { id: 'all', name: '전체' },
  { id: 'protein', name: '단백질' },
  { id: 'seafood', name: '해산물' },
  { id: 'vegetable', name: '야채' },
  { id: 'dairy', name: '유제품' },
  { id: 'seasoning', name: '양념' }
];

// 사이드 메뉴
export const sideMenus = [
  {
    id: 'salad',
    name: '코울슬로 샐러드',
    price: 2500,
    description: '상큼한 양배추 샐러드',
    image: '/images/sides/salad.jpg',
    calories: 150
  },
  {
    id: 'soup',
    name: '미소시루',
    price: 1500,
    description: '따뜻한 된장국',
    image: '/images/sides/soup.jpg',
    calories: 50
  },
  {
    id: 'pickles',
    name: '피클',
    price: 1000,
    description: '입가심용 피클',
    image: '/images/sides/pickles.jpg',
    calories: 30
  }
];

// 음료 메뉴
export const drinks = [
  {
    id: 'cola',
    name: '콜라',
    price: 2000,
    description: '시원한 코카콜라',
    image: '/images/drinks/cola.jpg'
  },
  {
    id: 'sprite',
    name: '사이다',
    price: 2000,
    description: '청량한 사이다',
    image: '/images/drinks/sprite.jpg'
  },
  {
    id: 'orange-juice',
    name: '오렌지주스',
    price: 2500,
    description: '생과일 오렌지주스',
    image: '/images/drinks/orange.jpg'
  },
  {
    id: 'iced-tea',
    name: '아이스티',
    price: 2500,
    description: '상큼한 레몬 아이스티',
    image: '/images/drinks/iced-tea.jpg'
  }
];

// 베스트 메뉴 (메인 페이지용)
export const bestMenus = curryMenus.filter(menu => menu.popular);

// 추천 조합
export const recommendedCombos = [
  {
    id: 'combo1',
    name: '베스트셀러 세트',
    items: ['pork-cutlet', 'egg', 'cheese'],
    totalPrice: 9600,
    description: '가장 인기있는 조합',
    discount: 10
  },
  {
    id: 'combo2',
    name: '치킨 러버 세트',
    items: ['chicken-cutlet', 'sausage', 'corn'],
    totalPrice: 9500,
    description: '치킨을 사랑하는 분들을 위한',
    discount: 10
  },
  {
    id: 'combo3',
    name: '해산물 프리미엄',
    items: ['shrimp-cutlet', 'shrimp', 'vegetables'],
    totalPrice: 13100,
    description: '바다의 맛을 담은',
    discount: 15
  }
];
