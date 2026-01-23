# 🚀 GitHub Pages 배포 가이드

이 문서는 코코이찌방야 프로젝트를 GitHub Pages에 배포하는 방법을 설명합니다.

---

## 📋 사전 준비

### 1. GitHub 계정 및 저장소
- GitHub 계정이 있어야 합니다
- 프로젝트 저장소가 생성되어 있어야 합니다

### 2. Node.js 설치
- Node.js 18 이상이 설치되어 있어야 합니다

---

## 🔧 설정 방법

### Step 1: 저장소 정보 확인

GitHub 저장소 URL을 확인하세요:
```
https://github.com/사용자명/저장소명
```

예시:
```
https://github.com/johndoe/cocoICHIBANYA
```

---

### Step 2: 설정 파일 수정

#### A. `vite.config.js` 수정

**현재:**
```javascript
base: '/your-repository-name/',
```

**수정 후:** (저장소명으로 변경)
```javascript
base: '/cocoICHIBANYA/',
```

⚠️ **주의:** 
- 앞뒤로 슬래시(`/`)가 있어야 합니다!
- 대소문자를 정확히 맞춰주세요!

#### B. `package.json` 수정

**현재:**
```json
"homepage": "https://사용자명.github.io/저장소명/",
```

**수정 후:**
```json
"homepage": "https://johndoe.github.io/cocoICHIBANYA/",
```

---

### Step 3: gh-pages 패키지 설치

터미널에서 실행:
```bash
npm install --save-dev gh-pages
```

---

## 🚀 배포 실행

### 방법 1: 한 번에 배포 (추천)

```bash
npm run deploy
```

이 명령어는:
1. 자동으로 `npm run build` 실행
2. `dist` 폴더를 `gh-pages` 브랜치에 푸시

### 방법 2: 단계별 실행

```bash
# 1. 빌드
npm run build

# 2. 배포
npm run deploy
```

---

## ⚙️ GitHub Settings 설정

### 1. GitHub 저장소 페이지 접속

### 2. Settings 탭 클릭

### 3. 왼쪽 메뉴에서 "Pages" 클릭

### 4. Source 설정
- **Source:** Deploy from a branch
- **Branch:** gh-pages
- **Folder:** / (root)

### 5. Save 버튼 클릭

### 6. 배포 완료 대기 (1-2분)

---

## 🌐 배포된 사이트 확인

배포가 완료되면 다음 URL로 접속 가능합니다:

```
https://사용자명.github.io/저장소명/
```

예시:
```
https://johndoe.github.io/cocoICHIBANYA/
```

---

## 🔄 업데이트 배포

코드를 수정한 후 다시 배포하려면:

```bash
# 1. Git에 커밋
git add .
git commit -m "업데이트 내용"
git push

# 2. 다시 배포
npm run deploy
```

---

## ❗ 자주 발생하는 문제

### 1. 404 오류 (페이지를 찾을 수 없음)

**원인:** base URL 설정이 잘못됨

**해결방법:**
- `vite.config.js`의 `base` 확인
- 저장소 이름과 정확히 일치하는지 확인
- 앞뒤 슬래시 확인

### 2. CSS/이미지가 안 보임

**원인:** 상대 경로 문제

**해결방법:**
- 이미지 경로에 `base` URL이 적용되는지 확인
- `public` 폴더의 파일들이 제대로 복사되었는지 확인

### 3. 라우팅 오류 (새로고침 시 404)

**원인:** GitHub Pages는 SPA 라우팅을 기본 지원하지 않음

**해결방법 A:** Hash Router 사용
```javascript
// App.jsx
import { HashRouter } from 'react-router-dom';
// BrowserRouter 대신 HashRouter 사용
```

**해결방법 B:** 404.html 트릭 (고급)
- `public/404.html` 파일 생성 필요

### 4. 빌드 실패

**확인사항:**
```bash
# 로컬에서 빌드 테스트
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 🔐 관리자 페이지 보안

⚠️ **중요:** 현재 관리자 페이지(`/admin`)는 보호되지 않습니다!

### 권장 사항:

#### 옵션 1: URL 변경
```javascript
// App.jsx에서
<Route path="/secret-admin-xyz123" element={<AdminDashboard />} />
```

#### 옵션 2: 환경 변수로 비밀번호 설정
```javascript
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
```

#### 옵션 3: 관리자는 로컬에서만 사용
- 배포된 사이트에서는 관리자 기능 비활성화
- 데이터 관리는 로컬에서만 진행

---

## 💾 데이터 관리 주의사항

현재 프로젝트는 **LocalStorage**를 사용합니다:

⚠️ **주의:**
- 브라우저별로 데이터가 독립적
- 다른 기기에서는 데이터가 보이지 않음
- 브라우저 캐시 삭제 시 데이터 손실

**실서버 전환 방법:**
1. 백엔드 API 개발
2. `src/services/` 파일들에서 `USE_LOCAL_STORAGE = false`로 변경
3. `API_BASE_URL` 설정

---

## 📞 도움이 필요하신가요?

배포 중 문제가 발생하면:

1. **GitHub Actions 로그 확인**
   - 저장소 > Actions 탭
   - 최근 워크플로우 로그 확인

2. **브라우저 콘솔 확인**
   - F12 > Console 탭
   - 오류 메시지 확인

3. **빌드 로그 확인**
   ```bash
   npm run build
   ```

---

## ✅ 배포 체크리스트

- [ ] GitHub 저장소 생성 완료
- [ ] `vite.config.js` base 설정 완료
- [ ] `package.json` homepage 설정 완료
- [ ] `gh-pages` 패키지 설치 완료
- [ ] `npm run deploy` 실행 완료
- [ ] GitHub Pages 활성화 완료
- [ ] 배포된 URL 접속 확인
- [ ] 모든 페이지 정상 작동 확인
- [ ] 관리자 페이지 보안 고려 완료

---

## 🎉 배포 완료!

축하합니다! 프로젝트가 성공적으로 배포되었습니다! 🎊

배포된 사이트를 공유하고 피드백을 받아보세요!
