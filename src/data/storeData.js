/**
 * ========================================
 * 매장 데이터 - 코코이찌방야
 * ========================================
 * 전국 매장 정보를 관리합니다.
 */

import { getImagePath } from '../utils/imagePath';

export const stores = [
  {
    id: 'gangnam',
    name: '강남점',
    address: '서울특별시 강남구 강남대로 123',
    phone: '02-1234-5678',
    hours: '11:00 - 22:00',
    lat: 37.4979,
    lng: 127.0276,
    features: ['주차가능', '배달가능', '포장가능', '단체석'],
    images: [getImagePath('/images/stores/gangnam-1.jpg'), getImagePath('/images/stores/gangnam-2.jpg')]
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
    images: [getImagePath('/images/stores/hongdae-1.jpg')]
  },
  {
    id: 'jamsil',
    name: '잠실점',
    address: '서울특별시 송파구 올림픽로 789',
    phone: '02-3456-7890',
    hours: '10:30 - 22:00',
    lat: 37.5133,
    lng: 127.1028,
    features: ['주차가능', '배달가능', '포장가능', '키즈존'],
    images: [getImagePath('/images/stores/jamsil-1.jpg')]
  },
  {
    id: 'myeongdong',
    name: '명동점',
    address: '서울특별시 중구 명동길 234',
    phone: '02-4567-8901',
    hours: '11:00 - 22:30',
    lat: 37.5636,
    lng: 126.9844,
    features: ['포장가능', '외국어가능'],
    images: [getImagePath('/images/stores/myeongdong-1.jpg')]
  },
  {
    id: 'sinchon',
    name: '신촌점',
    address: '서울특별시 서대문구 신촌로 567',
    phone: '02-5678-9012',
    hours: '11:00 - 23:00',
    lat: 37.5559,
    lng: 126.9366,
    features: ['배달가능', '포장가능', '학생할인'],
    images: [getImagePath('/images/stores/sinchon-1.jpg')]
  },
  {
    id: 'busan-seomyeon',
    name: '부산 서면점',
    address: '부산광역시 부산진구 서면로 890',
    phone: '051-1234-5678',
    hours: '11:00 - 22:00',
    lat: 35.1580,
    lng: 129.0599,
    features: ['주차가능', '배달가능', '포장가능'],
    images: [getImagePath('/images/stores/busan-1.jpg')]
  },
  {
    id: 'daegu',
    name: '대구 중앙로점',
    address: '대구광역시 중구 중앙대로 345',
    phone: '053-2345-6789',
    hours: '11:00 - 22:00',
    lat: 35.8714,
    lng: 128.6014,
    features: ['포장가능', '배달가능'],
    images: [getImagePath('/images/stores/daegu-1.jpg')]
  },
  {
    id: 'incheon',
    name: '인천 구월점',
    address: '인천광역시 남동구 구월로 678',
    phone: '032-3456-7890',
    hours: '11:00 - 22:00',
    lat: 37.4563,
    lng: 126.7052,
    features: ['주차가능', '배달가능', '포장가능'],
    images: [getImagePath('/images/stores/incheon-1.jpg')]
  }
];

// 매장 필터 옵션
export const storeFilters = [
  { id: 'parking', label: '주차가능', icon: '🅿️' },
  { id: 'delivery', label: '배달가능', icon: '🚚' },
  { id: 'takeout', label: '포장가능', icon: '🥡' },
  { id: 'group', label: '단체석', icon: '👥' },
  { id: 'kids', label: '키즈존', icon: '👶' },
  { id: '24h', label: '24시간', icon: '🕐' }
];

// 지역별 매장
export const storesByRegion = {
  seoul: stores.filter(s => s.address.includes('서울')),
  busan: stores.filter(s => s.address.includes('부산')),
  daegu: stores.filter(s => s.address.includes('대구')),
  incheon: stores.filter(s => s.address.includes('인천'))
};
