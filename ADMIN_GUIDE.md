# 📋 관리자 페이지 사용 가이드

## 🔐 관리자 로그인

### 접속 방법
```
URL: http://localhost:5174/admin/notice
비밀번호: coco2026
```

**⚠️ 보안 주의사항**
- 현재는 개발용 간단한 비밀번호 인증입니다
- 실서버 배포 시 반드시 제대로 된 인증 시스템으로 변경해야 합니다
- Firebase Authentication 또는 백엔드 JWT 인증 권장

---

## 📝 공지사항 관리

### 1️⃣ 공지사항 목록 보기
로그인 후 자동으로 공지사항 목록이 표시됩니다.

**표시 정보:**
- 번호
- 카테고리 (공지/이벤트/시스템)
- 중요 표시
- 제목
- 작성일
- 관리 버튼 (수정/삭제)

---

### 2️⃣ 새 공지사항 작성

1. **"새 공지사항 작성" 버튼 클릭**

2. **정보 입력:**
   - **제목** (필수): 공지사항 제목
   - **카테고리** (필수): 공지, 이벤트, 시스템 중 선택
   - **작성자**: 기본값 "코코이찌방야"
   - **중요 공지사항**: 체크하면 상단에 고정 표시
   - **내용** (필수): 공지사항 본문

3. **미리보기 확인**
   - 하단에서 실시간으로 미리보기 확인 가능
   - 줄바꿈, 서식 등 확인

4. **저장 버튼 클릭**

**💡 작성 팁:**
- 줄바꿈은 Enter로 입력하면 자동 반영
- 중요한 공지는 "중요 공지사항" 체크
- 이벤트성 공지는 카테고리를 "이벤트"로 선택

---

### 3️⃣ 공지사항 수정

1. 목록에서 **"수정" 버튼 클릭**
2. 내용 수정
3. 미리보기 확인
4. **"저장" 버튼 클릭**

---

### 4️⃣ 공지사항 삭제

1. 목록에서 **"삭제" 버튼 클릭**
2. 확인 메시지에서 **"확인"**
3. 영구 삭제 (복구 불가)

---

## 🗄️ 데이터 저장 방식

### 현재 (개발 단계)
**LocalStorage 사용**
- 브라우저에 데이터 저장
- 서버 없이 작동
- 빠른 개발 및 테스트 가능

**장점:**
- ✅ 서버 불필요
- ✅ 무료
- ✅ 즉시 반영
- ✅ 개발/테스트 용이

**단점:**
- ❌ 브라우저마다 다른 데이터
- ❌ 데이터 삭제하면 영구 소실
- ❌ 다른 PC에서는 접근 불가
- ❌ 공유 불가

---

### 실서버 전환 방법

#### 📍 단계 1: 백엔드 API 준비

**필요한 API 엔드포인트:**
```
GET    /api/notices          # 전체 공지사항 조회
GET    /api/notices/:id      # 특정 공지사항 조회
POST   /api/notices          # 공지사항 생성
PUT    /api/notices/:id      # 공지사항 수정
DELETE /api/notices/:id      # 공지사항 삭제
```

**데이터베이스 스키마 예시:**
```sql
CREATE TABLE notices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  content TEXT NOT NULL,
  isImportant BOOLEAN DEFAULT FALSE,
  author VARCHAR(100),
  date DATE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 📍 단계 2: 코드 수정 (1개 파일만!)

**파일: `src/services/noticeService.js`**

```javascript
// 이 부분만 수정
const USE_LOCAL_STORAGE = false; // true → false 변경
const API_BASE_URL = 'https://your-domain.com/api'; // 실제 API 주소 입력
```

#### 📍 단계 3: 인증 추가

관리자 페이지 인증도 실서버 방식으로 변경:
- Firebase Authentication
- JWT 토큰 인증
- OAuth (Google, Facebook 등)

**파일: `src/pages/AdminNoticePage.jsx`**
```javascript
// 현재 간단한 비밀번호 방식을 
// 실제 인증 API로 변경 필요
```

---

## 🔧 추천 백엔드 옵션

### 옵션 1: Firebase (추천)
```bash
# 이미 설치됨
npm install firebase
```

**장점:**
- 무료 (소규모)
- 빠른 구축
- 실시간 동기화
- 인증 포함

**설정 방법:**
1. Firebase 프로젝트 생성
2. Firestore 활성화
3. `noticeService.js`에서 Firebase SDK 사용

### 옵션 2: Node.js + Express
```bash
npm install express cors mysql2
```

**장점:**
- 완전한 제어
- 커스터마이징 자유
- 다른 기능 추가 용이

### 옵션 3: Supabase
```bash
npm install @supabase/supabase-js
```

**장점:**
- Firebase 대체재
- PostgreSQL 사용
- 무료 시작

---

## 🚀 배포 체크리스트

### LocalStorage 방식 (현재)
- [ ] 관리자는 배포된 사이트에서 직접 작성
- [ ] 브라우저 캐시 삭제 주의
- [ ] 데이터 백업 불가 (주의)

### 실서버 API 방식
- [ ] 백엔드 API 구축
- [ ] `noticeService.js` 수정
- [ ] 관리자 인증 시스템 구축
- [ ] CORS 설정
- [ ] 데이터베이스 백업 설정
- [ ] API 보안 (HTTPS, Rate Limiting)

---

## 💡 사용 팁

### 공지사항 작성 가이드

**좋은 제목:**
```
✅ 신메뉴 출시 기념 특별 할인 이벤트
✅ 설 연휴 매장 운영 안내
✅ 모바일 앱 업데이트 안내
```

**피해야 할 제목:**
```
❌ 공지
❌ 중요!!!!
❌ 읽어주세요
```

**내용 작성 팁:**
- 간결하고 명확하게
- 중요 정보는 위에
- 날짜, 시간 명시
- 문의처 포함

**예시:**
```
신메뉴 '그랑마더 커리' 출시 기념 특별 할인!

기간: 2026년 2월 1일 ~ 2월 28일
혜택: 그랑마더 커리 20% 할인
대상: 전국 모든 매장

자세한 내용은 매장으로 문의해주세요.
고객센터: 1588-0000
```

---

## ❓ 자주 묻는 질문

### Q1. 관리자 비밀번호를 변경하려면?
**A:** `src/pages/AdminNoticePage.jsx` 파일에서:
```javascript
const ADMIN_PASSWORD = 'coco2026'; // 이 부분 변경
```

### Q2. 카테고리를 추가하려면?
**A:** `src/pages/AdminNoticePage.jsx`의 Select 부분에 추가:
```javascript
<option value="신규카테고리">신규카테고리</option>
```

### Q3. 데이터가 사라졌어요!
**A:** LocalStorage 방식의 한계입니다.
- 브라우저 캐시 삭제 시 소실
- 실서버 API 방식으로 변경 권장

### Q4. 다른 PC에서 작성한 공지가 안 보여요!
**A:** LocalStorage는 브라우저마다 별도 저장됩니다.
- 실서버 API 방식으로 변경 필요

### Q5. 이미지를 추가하고 싶어요!
**A:** 현재는 텍스트만 지원합니다.
- 향후 업데이트 예정
- 또는 이미지 URL을 본문에 삽입

---

## 📞 문의

추가 기능이 필요하거나 문제가 있으면 개발팀에 문의하세요.

---

**🎯 핵심 요약**
1. 개발 중: LocalStorage로 간편하게 사용
2. 배포 전: 실서버 API로 전환 (1개 파일만 수정)
3. 보안: 제대로 된 인증 시스템 구축 필수
