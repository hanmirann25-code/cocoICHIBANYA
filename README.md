# 코코이찌방야(CoCo ICHIBANYA) 웹사이트 리뉴얼

> 세계 No.1 카레 전문점 코코이찌방야의 공식 웹사이트 리뉴얼 프로젝트

## 📋 프로젝트 개요

이 프로젝트는 노후화된 코코이찌방야 웹사이트를 최신 웹 트렌드에 맞춰 전면 리뉴얼한 React 기반 SPA(Single Page Application)입니다.

### 주요 기능

- ✅ **반응형 웹 디자인**: PC, 태블릿, 모바일 모든 기기에 최적화
- ✅ **메인 페이지**: 풀스크린 히어로 섹션, 베스트 메뉴, 브랜드 특징
- ✅ **메뉴 페이지**: 카테고리별 필터링, 검색, 알레르기 정보 표시
- ✅ **나만의 카레 시뮬레이터**: 인터랙티브한 커스터마이징 도구
- ✅ **매장 찾기**: 지역별 검색, 필터링, 지도 연동 준비
- ✅ **브랜드 소개**: 브랜드 가치, 스토리, 연혁
- ✅ **창업 안내**: 가맹점 개설 절차, 비용, 혜택 안내
- ✅ **공지사항**: 최신 소식, 이벤트, 중요 공지 확인
- ✅ **FAQ**: 카테고리별 자주 묻는 질문과 답변, 검색 기능
- ✅ **관리자 페이지**: 
  - 통합 대시보드
  - 공지사항 관리 (등록/수정/삭제)
  - 매장 관리 (등록/수정/삭제)
  - 메뉴 관리 (카레, 토핑 등록/수정/삭제)
  - LocalStorage 기반, 실서버 전환 가능

## 🛠️ 기술 스택

- **프레임워크**: React 18
- **빌드 도구**: Vite
- **라우팅**: React Router v6
- **스타일링**: Styled Components
- **애니메이션**: Framer Motion
- **아이콘**: React Icons
- **슬라이더**: Swiper

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 16.0 이상
- npm 또는 yarn

### 설치 방법

```bash
# 의존성 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 개발 서버

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

### 관리자 페이지

통합 관리 시스템이 포함되어 있습니다:
- **대시보드**: `http://localhost:5173/admin`
- **공지사항 관리**: `http://localhost:5173/admin/notice`
- **매장 관리**: `http://localhost:5173/admin/store`
- **메뉴 관리**: `http://localhost:5173/admin/menu`
- 비밀번호: `coco2026`
- 자세한 사용법은 [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) 참조

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── common/         # 공통 컴포넌트 (Button, Card 등)
│   └── layout/         # 레이아웃 컴포넌트 (Header, Footer)
├── pages/              # 페이지 컴포넌트
│   ├── MainPage.jsx    # 메인 홈페이지
│   ├── MenuPage.jsx    # 메뉴 소개
│   ├── CurrySimulator.jsx  # 나만의 카레 시뮬레이터
│   ├── StorePage.jsx   # 매장 찾기
│   ├── BrandPage.jsx   # 브랜드 소개
│   ├── FranchisePage.jsx   # 창업 안내
│   ├── NoticePage.jsx  # 공지사항
│   └── FAQPage.jsx     # 자주 묻는 질문
├── data/               # 정적 데이터
│   ├── menuData.js     # 메뉴 관련 데이터
│   ├── storeData.js    # 매장 정보 데이터
│   ├── noticeData.js   # 공지사항 초기 데이터 (참고용)
│   └── faqData.js      # FAQ 데이터
├── services/           # API 서비스 레이어
│   ├── noticeService.js # 공지사항 API
│   ├── storeService.js  # 매장 관리 API
│   └── menuService.js   # 메뉴 관리 API
│   (모두 LocalStorage ↔ 실서버 전환 가능)
├── hooks/              # 커스텀 훅 (필요시 추가)
├── utils/              # 유틸리티 함수 (필요시 추가)
├── App.jsx             # 메인 앱 컴포넌트
├── main.jsx            # 진입점
└── index.css           # 전역 스타일
```

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: #e60012 (코코이찌방야 레드)
- **Secondary**: #ff6b35 (오렌지 액센트)
- **Dark**: #1a1a1a
- **Gray**: #666666
- **Light Gray**: #f5f5f5

### 타이포그래피

- **폰트**: Noto Sans KR
- **반응형 폰트 사이즈**: clamp() 함수 사용

### 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🖼️ 이미지 플레이스홀더 안내

현재 프로젝트는 이미지 경로만 설정되어 있으며, 실제 이미지는 포함되어 있지 않습니다.
실제 서비스 시 아래 경로에 이미지를 추가해주세요:

```
public/images/
├── hero/               # 메인 슬라이드 이미지
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   └── hero-3.jpg
├── menu/               # 메뉴 이미지
│   ├── pork-cutlet.jpg
│   ├── chicken-cutlet.jpg
│   └── ...
├── toppings/           # 토핑 이미지
├── sides/              # 사이드 메뉴 이미지
├── drinks/             # 음료 이미지
├── stores/             # 매장 사진
└── ...
```

### 임시 이미지 생성 방법

개발 단계에서는 다음 온라인 서비스를 활용할 수 있습니다:
- [Unsplash](https://unsplash.com) - 무료 고품질 이미지
- [Placeholder.com](https://placeholder.com) - 플레이스홀더 이미지 생성
- [Lorem Picsum](https://picsum.photos) - 랜덤 이미지 API

## 🚀 배포

### Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify 배포

1. GitHub에 코드 푸시
2. Netlify에서 Repository 연결
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🔧 관리자 기능

### 공지사항 관리 시스템
현재 **LocalStorage** 기반으로 구현되어 있으며, 실서버 배포 시 쉽게 API로 전환 가능합니다.

**현재 상태 (개발):**
- LocalStorage 사용
- 서버 불필요
- 브라우저에 데이터 저장

**실서버 전환 방법:**
1. 백엔드 API 구축 (Node.js/Firebase/Supabase 등)
2. `src/services/noticeService.js` 파일에서 2줄만 수정:
   ```javascript
   const USE_LOCAL_STORAGE = false; // true → false
   const API_BASE_URL = 'https://your-api.com/api'; // 실서버 주소
   ```
3. 완료!

자세한 내용은 [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)를 참조하세요.

## 📝 향후 개선 사항

### 기능 추가

- [ ] 실제 지도 API 연동 (네이버 지도 / 카카오맵)
- [ ] 온라인 주문 시스템 연동
- [ ] 회원가입/로그인 기능
- [ ] 다국어 지원 (영어, 일본어)
- [ ] 다크 모드 지원
- [x] 공지사항 관리자 페이지 (완료)
- [x] 매장 관리자 페이지 (완료)
- [x] 메뉴 관리자 페이지 (완료)
- [ ] FAQ 관리자 페이지
- [ ] 실서버 API 연동 (공지사항/매장/메뉴)

### 성능 최적화

- [ ] 이미지 최적화 (WebP 포맷, Lazy Loading)
- [ ] Code Splitting 최적화
- [ ] SEO 최적화 (메타 태그, sitemap)
- [ ] PWA 지원

### 접근성 개선

- [ ] 키보드 네비게이션 강화
- [ ] ARIA 레이블 추가
- [ ] 스크린 리더 지원

## 🐛 알려진 이슈

1. **이미지 경로**: 실제 이미지가 없어 깨져 보일 수 있습니다.
2. **지도 기능**: 실제 지도 API 연동이 필요합니다.
3. **폼 제출**: 현재는 alert로만 처리되며, 실제 서버 연동이 필요합니다.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.

## 📄 라이선스

이 프로젝트는 포트폴리오 및 학습 목적으로 제작되었습니다.
코코이찌방야는 (주)농심의 등록 상표입니다.

---

**Made with ❤️ for CoCo ICHIBANYA**
