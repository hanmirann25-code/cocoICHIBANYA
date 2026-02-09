# 🔥 Firebase 설정 가이드

이 프로젝트는 Firebase Firestore를 데이터베이스로 사용합니다.

## 📋 1단계: Firebase 프로젝트 생성

### Firebase 콘솔 접속
1. [Firebase 콘솔](https://console.firebase.google.com/) 접속
2. Google 계정으로 로그인

### 프로젝트 생성
1. **"프로젝트 추가"** 클릭
2. **프로젝트 이름**: `cocoichibanya` (또는 원하는 이름)
3. **Google Analytics**: 선택 사항 (나중에도 추가 가능)
4. **프로젝트 만들기** 클릭

### 웹 앱 추가
1. 프로젝트 생성 후 홈 화면에서 **웹 아이콘(`</>`)**  클릭
2. **앱 닉네임**: `CoCo壱番屋 Web`
3. **Firebase Hosting**: 체크 (선택)
4. **앱 등록** 클릭

### Firebase SDK 설정 정보 복사
다음과 같은 설정 정보가 표시됩니다. **메모장에 복사**해두세요:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
};
```

## 📋 2단계: Firestore Database 생성

### Database 생성
1. 왼쪽 메뉴에서 **"Firestore Database"** 클릭
2. **"데이터베이스 만들기"** 클릭
3. **테스트 모드로 시작** 선택
   - 개발 초기에는 테스트 모드 사용 (나중에 보안 규칙 설정 가능)
4. **위치 선택**: `asia-northeast3 (서울)` 권장
5. **"사용 설정"** 클릭

### 보안 규칙 설정 (선택 사항)
나중에 프로덕션 배포 시 보안 규칙을 강화하세요:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 읽기는 모두 허용
    match /{document=**} {
      allow read: if true;
    }
    
    // 쓰기는 특정 조건에서만 허용 (예: 관리자 인증)
    match /{document=**} {
      allow write: if false; // 나중에 인증 추가
    }
  }
}
```

## 📋 3단계: 환경 변수 설정

### .env.local 파일 생성

프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하고 Firebase 설정 정보를 입력하세요:

```bash
# .env.local 파일 (프로젝트 루트에 생성)

VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

VITE_USE_FIREBASE=true
```

**⚠️ 중요**: 
- `.env.local` 파일은 `.gitignore`에 포함되어 Git에 업로드되지 않습니다
- Firebase 콘솔에서 받은 **실제 값**으로 교체하세요

### PowerShell에서 .env.local 파일 생성하기

```powershell
# 프로젝트 루트 디렉토리에서 실행
New-Item -Path ".env.local" -ItemType File -Force

# 메모장으로 파일 열기
notepad .env.local
```

메모장에서 위의 환경 변수들을 붙여넣고 실제 값으로 수정한 후 저장하세요.

## 📋 4단계: 개발 서버 실행

### 서버 시작

```bash
npm run dev
```

### 초기 데이터 확인

서버 실행 시 콘솔에서 다음 메시지를 확인할 수 있습니다:

```
📢 공지사항 초기 데이터 생성 중...
✅ 공지사항 초기 데이터 생성 완료!
🏪 매장 초기 데이터 생성 중...
✅ 매장 초기 데이터 생성 완료!
🍛 카레 메뉴 초기 데이터 생성 중...
✅ 카레 메뉴 초기 데이터 생성 완료!
```

### Firebase 콘솔에서 데이터 확인

1. Firebase 콘솔의 **Firestore Database** 메뉴로 이동
2. 다음 컬렉션들이 생성되었는지 확인:
   - `notices` (공지사항)
   - `stores` (매장)
   - `curry_menus` (카레 메뉴)
   - `toppings` (토핑)
   - `sides` (사이드)
   - `drinks` (음료)

## 📋 5단계: 관리자 페이지 테스트

### 접속 URL
```
http://localhost:5173/#/admin
```

### 로그인 정보
- **비밀번호**: `coco2026`

### 테스트 순서
1. **공지사항 관리** (`/admin/notice`)
   - 새 공지사항 작성
   - Firebase 콘솔에서 `notices` 컬렉션 확인
   
2. **매장 관리** (`/admin/store`)
   - 새 매장 등록
   - Firebase 콘솔에서 `stores` 컬렉션 확인

3. **메뉴 관리** (`/admin/menu`)
   - 새 메뉴 등록
   - Firebase 콘솔에서 해당 컬렉션 확인

## 🔧 문제 해결

### Firebase 초기화 오류

**증상**: 콘솔에 Firebase 관련 오류 메시지

**해결 방법**:
1. `.env.local` 파일이 프로젝트 루트에 있는지 확인
2. 환경 변수가 올바르게 설정되었는지 확인
3. 개발 서버 재시작: `Ctrl + C` 후 `npm run dev`

### 데이터가 표시되지 않음

**증상**: 관리자 페이지에서 데이터가 비어있음

**해결 방법**:
1. Firebase 콘솔에서 Firestore Database가 생성되었는지 확인
2. 브라우저 콘솔(F12)에서 오류 메시지 확인
3. 보안 규칙이 읽기를 허용하는지 확인

### CORS 오류

**증상**: "Access-Control-Allow-Origin" 오류

**해결 방법**:
- Firebase는 자동으로 CORS를 처리합니다
- 문제가 계속되면 브라우저 캐시를 삭제하고 재시도

## 💾 LocalStorage로 전환 (테스트용)

Firebase 없이 테스트하려면 각 서비스 파일에서 설정을 변경하세요:

```javascript
// src/services/noticeService.js
const USE_FIREBASE = false; // false로 변경

// src/services/storeService.js  
const USE_FIREBASE = false; // false로 변경

// src/services/menuService.js
const USE_FIREBASE = false; // false로 변경
```

## 📚 추가 리소스

- [Firebase 공식 문서](https://firebase.google.com/docs)
- [Firestore 시작하기](https://firebase.google.com/docs/firestore/quickstart)
- [Firebase 보안 규칙](https://firebase.google.com/docs/firestore/security/get-started)

## 🎯 다음 단계

1. ✅ Firebase 프로젝트 생성
2. ✅ Firestore Database 생성
3. ✅ 환경 변수 설정
4. ✅ 개발 서버 실행 및 테스트
5. 🔜 보안 규칙 강화 (프로덕션 배포 전)
6. 🔜 Firebase Authentication 추가 (관리자 인증)
7. 🔜 Firebase Hosting으로 배포

---

문제가 발생하면 [GitHub Issues](https://github.com/your-repo/issues)에 문의하세요! 🚀
