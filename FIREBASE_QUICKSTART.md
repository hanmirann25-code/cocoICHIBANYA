# 🔥 Firebase 빠른 시작 가이드

## ✅ 완료된 작업

다음 작업들이 완료되었습니다:

1. ✅ Firebase 설정 파일 생성 (`src/config/firebaseConfig.js`)
2. ✅ 서비스 파일들 Firebase용으로 업데이트
   - `src/services/noticeService.js` (공지사항)
   - `src/services/storeService.js` (매장)
   - `src/services/menuService.js` (메뉴)
3. ✅ 환경 변수 설정 준비
4. ✅ 초기 데이터 자동 생성 기능 추가

## 🚀 지금 해야 할 일

### 1️⃣ Firebase 프로젝트 만들기 (5분)

**접속**: https://console.firebase.google.com/

1. **"프로젝트 추가"** 클릭
2. 프로젝트 이름: `cocoichibanya` 입력
3. **"계속"** → **"계속"** → **"프로젝트 만들기"**

### 2️⃣ 웹 앱 추가하기 (2분)

1. 프로젝트 홈에서 **웹 아이콘 `</>`** 클릭
2. 앱 이름: `코코이치방야` 입력
3. **"앱 등록"** 클릭
4. 📋 **설정 정보 복사** (다음 단계에서 사용)

### 3️⃣ Firestore Database 만들기 (3분)

1. 왼쪽 메뉴 → **"Firestore Database"** 클릭
2. **"데이터베이스 만들기"** 클릭
3. **"테스트 모드로 시작"** 선택
4. 위치: **"asia-northeast3 (서울)"** 선택
5. **"사용 설정"** 클릭

### 4️⃣ 환경 변수 파일 만들기 (2분)

**PowerShell에서 실행**:

```powershell
# 프로젝트 폴더에서 실행
cd D:\cocoICHIBANYA

# .env.local 파일 생성
New-Item -Path ".env.local" -ItemType File -Force

# 메모장으로 열기
notepad .env.local
```

**메모장에 다음 내용 붙여넣고 실제 값으로 수정**:

```env
VITE_FIREBASE_API_KEY=여기에_Firebase에서_복사한_apiKey
VITE_FIREBASE_AUTH_DOMAIN=여기에_Firebase에서_복사한_authDomain
VITE_FIREBASE_PROJECT_ID=여기에_Firebase에서_복사한_projectId
VITE_FIREBASE_STORAGE_BUCKET=여기에_Firebase에서_복사한_storageBucket
VITE_FIREBASE_MESSAGING_SENDER_ID=여기에_Firebase에서_복사한_messagingSenderId
VITE_FIREBASE_APP_ID=여기에_Firebase에서_복사한_appId

VITE_USE_FIREBASE=true
```

**예시**:
```env
VITE_FIREBASE_API_KEY=AIzaSyC1234567890abcdefghijklmnop
VITE_FIREBASE_AUTH_DOMAIN=cocoichibanya.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=cocoichibanya
VITE_FIREBASE_STORAGE_BUCKET=cocoichibanya.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abc1234567890def

VITE_USE_FIREBASE=true
```

저장하고 메모장을 닫으세요.

### 5️⃣ 개발 서버 재시작 (1분)

**현재 실행 중인 서버 중지**:
- 터미널에서 `Ctrl + C`

**서버 다시 시작**:
```bash
npm run dev
```

### 6️⃣ 확인하기 ✅

**콘솔 메시지 확인**:
```
📢 공지사항 초기 데이터 생성 중...
✅ 공지사항 초기 데이터 생성 완료!
🏪 매장 초기 데이터 생성 중...
✅ 매장 초기 데이터 생성 완료!
```

**웹 브라우저에서 확인**:
1. `http://localhost:5173/#/admin` 접속
2. 비밀번호: `coco2026` 입력
3. 공지사항/매장/메뉴 관리 테스트

**Firebase 콘솔에서 확인**:
1. Firebase 콘솔 → Firestore Database
2. 컬렉션 확인:
   - ✅ notices (공지사항)
   - ✅ stores (매장)
   - ✅ curry_menus (카레 메뉴)
   - ✅ toppings (토핑)
   - ✅ sides (사이드)
   - ✅ drinks (음료)

## 🎯 이제 사용 가능합니다!

Firebase 설정이 완료되었습니다! 이제:

- ✅ 관리자 페이지에서 데이터를 추가/수정/삭제하면 Firebase에 저장됩니다
- ✅ 다른 기기나 브라우저에서도 같은 데이터를 볼 수 있습니다
- ✅ 브라우저 캐시를 삭제해도 데이터가 유지됩니다
- ✅ 여러 사용자가 동시에 데이터를 확인할 수 있습니다

## 🆘 문제 해결

### "Firebase 설정이 필요합니다" 경고가 나와요

→ `.env.local` 파일을 확인하고 실제 Firebase 값으로 수정했는지 확인
→ 서버를 재시작 (`Ctrl + C` 후 `npm run dev`)

### 데이터가 Firebase에 저장되지 않아요

→ Firestore Database가 "테스트 모드"로 생성되었는지 확인
→ Firebase 콘솔에서 보안 규칙 확인
→ 브라우저 콘솔(F12)에서 오류 메시지 확인

### 초기 데이터가 생성되지 않아요

→ Firebase 콘솔의 Firestore Database에서 컬렉션이 비어있는지 확인
→ 서버 재시작 시 콘솔 메시지 확인
→ `.env.local` 파일의 `VITE_USE_FIREBASE=true` 확인

## 📚 자세한 내용

더 자세한 설정 방법은 `FIREBASE_SETUP.md` 파일을 참고하세요.

---

🎉 Firebase 설정 완료! 이제 실시간 데이터베이스를 사용할 수 있습니다!
