# 코코이찌방야 웹사이트 - 설치 및 실행 가이드

## 🚀 빠른 시작

### 1단계: 프로젝트 확인

프로젝트가 이미 설치되어 있으며, 현재 개발 서버가 실행 중입니다!

**접속 URL**: http://localhost:5173/

브라우저에서 위 주소로 접속하시면 웹사이트를 확인하실 수 있습니다.

### 2단계: 프로젝트 구조 이해

```
📦 cocoICHIBANYA/
├── 📂 src/
│   ├── 📂 components/       # 재사용 컴포넌트
│   │   ├── 📂 common/       # Button, Card 등
│   │   └── 📂 layout/       # Header, Footer
│   ├── 📂 pages/            # 페이지 컴포넌트
│   │   ├── MainPage.jsx     # 🏠 메인 홈
│   │   ├── MenuPage.jsx     # 🍛 메뉴 소개
│   │   ├── CurrySimulator.jsx # 🎨 카레 시뮬레이터
│   │   ├── StorePage.jsx    # 📍 매장 찾기
│   │   ├── BrandPage.jsx    # 🏢 브랜드 소개
│   │   └── FranchisePage.jsx # 💼 창업 안내
│   ├── 📂 data/             # 데이터 파일
│   │   ├── menuData.js      # 메뉴 데이터
│   │   └── storeData.js     # 매장 데이터
│   ├── App.jsx              # 메인 앱
│   ├── main.jsx             # 진입점
│   └── index.css            # 전역 스타일
├── 📂 public/               # 정적 파일 (이미지 등)
├── package.json             # 의존성 패키지
└── README.md                # 프로젝트 설명
```

## 📋 주요 페이지 설명

### 1. 메인 페이지 (/)
- **풀스크린 히어로 슬라이드**: 3개의 메인 슬라이드 자동 전환
- **브랜드 특징**: 4가지 핵심 가치 카드
- **베스트 메뉴**: 인기 메뉴 4개 표시
- **CTA 섹션**: 액션 유도 배너

### 2. 메뉴 페이지 (/menu)
- **메뉴 타입 선택**: 카레, 토핑, 사이드, 음료
- **카테고리 필터**: 돈까스, 치킨, 비프, 해산물, 야채, 스페셜
- **검색 기능**: 메뉴명, 설명으로 검색
- **상세 정보**: 가격, 칼로리, 알레르기 정보

### 3. 나만의 카레 시뮬레이터 (/simulator)
- **Step 1**: 베이스 카레 선택 (7가지)
- **Step 2**: 밥 양, 소스 양 선택
- **Step 3**: 맵기 단계 선택 (0~10단계)
- **Step 4**: 토핑 추가 (다중 선택 가능)
- **Step 5**: 완성된 주문 미리보기 및 금액 확인

### 4. 매장 찾기 (/store)
- **검색 기능**: 지역, 매장명으로 검색
- **필터**: 주차, 배달, 포장, 단체석, 키즈존, 24시간
- **매장 정보**: 주소, 전화번호, 운영시간, 특징
- **지도 영역**: 실제 서비스 시 네이버/카카오맵 연동

### 5. 브랜드 소개 (/brand)
- **브랜드 가치**: 4가지 핵심 가치
- **브랜드 스토리**: 1978년부터 현재까지
- **연혁**: 주요 이정표
- **특별함**: 6가지 차별화 요소

### 6. 창업 안내 (/franchise)
- **창업 혜택**: 4가지 주요 혜택
- **창업 절차**: 8단계 프로세스
- **창업 비용**: 상세 비용 안내
- **본사 지원**: 8가지 지원 항목
- **상담 신청**: 온라인 문의 폼

## 🎨 디자인 시스템

### 색상
- **Primary Red**: `#e60012` - 브랜드 색상
- **Secondary Orange**: `#ff6b35` - 액센트
- **Dark**: `#1a1a1a` - 텍스트
- **Gray**: `#666666` - 보조 텍스트
- **Light Gray**: `#f5f5f5` - 배경

### 반응형 브레이크포인트
- **모바일**: 768px 이하
- **태블릿**: 768px ~ 1024px
- **데스크탑**: 1024px 이상

## 🛠️ 개발 명령어

### 개발 서버 실행
```bash
npm run dev
```
→ http://localhost:5173/ 에서 확인

### 프로덕션 빌드
```bash
npm run build
```
→ `dist/` 폴더에 최적화된 파일 생성

### 빌드 미리보기
```bash
npm run preview
```
→ 빌드된 파일을 로컬에서 테스트

### 린트 검사
```bash
npm run lint
```
→ 코드 품질 검사

## 📝 데이터 수정 방법

### 메뉴 데이터 수정
**파일**: `src/data/menuData.js`

```javascript
// 새 메뉴 추가
export const curryMenus = [
  // ... 기존 메뉴들
  {
    id: 'new-menu',
    name: '새로운 카레',
    category: 'special',
    price: 9000,
    description: '설명',
    image: '/images/menu/new-menu.jpg',
    popular: false,
    allergens: ['재료1', '재료2'],
    calories: 800,
    spicy: 0
  }
];
```

### 매장 정보 수정
**파일**: `src/data/storeData.js`

```javascript
// 새 매장 추가
export const stores = [
  // ... 기존 매장들
  {
    id: 'new-store',
    name: '신규점',
    address: '서울특별시 ...',
    phone: '02-1234-5678',
    hours: '11:00 - 22:00',
    lat: 37.5665,
    lng: 126.9780,
    features: ['주차가능', '배달가능'],
    images: ['/images/stores/new-store.jpg']
  }
];
```

## 🖼️ 이미지 추가 방법

### 1. 이미지 파일 준비
- **형식**: JPG, PNG, WebP
- **크기**: 최대 2MB 권장
- **해상도**: 최소 1920x1080 (히어로 이미지)

### 2. 이미지 배치
```
public/images/
├── hero/
│   └── hero-1.jpg        # 메인 슬라이드 (1920x1080)
├── menu/
│   └── pork-cutlet.jpg   # 메뉴 이미지 (800x600)
├── toppings/
│   └── cheese.jpg        # 토핑 이미지 (400x300)
└── stores/
    └── gangnam-1.jpg     # 매장 사진 (800x600)
```

### 3. 임시 이미지 사용
개발 중에는 다음 서비스를 활용하세요:
- https://unsplash.com (무료 고품질)
- https://placeholder.com (플레이스홀더)
- https://picsum.photos (랜덤 이미지)

## ⚙️ 환경 설정

### 포트 변경
**파일**: `vite.config.js`

```javascript
export default defineConfig({
  server: {
    port: 3000  // 원하는 포트 번호
  }
})
```

### API 연동 준비
**파일**: `.env`

```env
VITE_API_URL=https://api.example.com
VITE_MAP_API_KEY=your-map-api-key
```

## 🚀 배포 가이드

### Vercel 배포 (권장)
```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 배포
vercel

# 3. 프로덕션 배포
vercel --prod
```

### Netlify 배포
1. GitHub에 코드 푸시
2. Netlify 사이트에서 "New site from Git" 선택
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📞 문제 해결

### 서버가 시작되지 않을 때
```bash
# 1. node_modules 삭제
rm -rf node_modules

# 2. 재설치
npm install

# 3. 재시작
npm run dev
```

### 포트가 이미 사용 중일 때
```bash
# 다른 포트로 실행
npm run dev -- --port 3000
```

### 빌드 오류 시
```bash
# 캐시 삭제
npm run build -- --force
```

## 📚 추가 학습 자료

- **React 공식 문서**: https://react.dev
- **Styled Components**: https://styled-components.com
- **Framer Motion**: https://www.framer.com/motion
- **React Router**: https://reactrouter.com

## ✅ 체크리스트

프로젝트 확인 사항:
- [x] ✅ 개발 서버 정상 실행
- [x] ✅ 모든 페이지 라우팅 작동
- [x] ✅ 반응형 디자인 적용
- [x] ✅ 컴포넌트 재사용성 확보
- [x] ✅ 데이터 구조화
- [ ] ⚠️ 실제 이미지 추가 필요
- [ ] ⚠️ 지도 API 연동 필요
- [ ] ⚠️ 백엔드 API 연동 필요

## 🎯 다음 단계

1. **이미지 추가**: `public/images/` 폴더에 실제 이미지 배치
2. **지도 API**: 네이버 또는 카카오맵 API 키 발급 및 연동
3. **백엔드 연동**: 메뉴, 매장 데이터 API 연동
4. **SEO 최적화**: 메타 태그, sitemap.xml 추가
5. **성능 최적화**: 이미지 lazy loading, code splitting

---

**Happy Coding! 🍛**
