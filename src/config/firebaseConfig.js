/**
 * ========================================
 * Firebase 설정 파일
 * ========================================
 * Firebase 콘솔에서 받은 설정 정보를 입력하세요
 * https://console.firebase.google.com/
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ========================================
// Firebase 설정
// ========================================
// 환경 변수 사용 (보안 강화)
// .env.local 파일에 실제 값을 설정하세요

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Firebase 설정 유효성 검사
if (firebaseConfig.apiKey === "YOUR_API_KEY") {
  console.warn('⚠️ Firebase 설정이 필요합니다. .env.local 파일을 생성하고 실제 값을 입력하세요.');
}

// ========================================
// Firebase 초기화
// ========================================
const app = initializeApp(firebaseConfig);

// ========================================
// Firestore 데이터베이스 인스턴스
// ========================================
export const db = getFirestore(app);

// ========================================
// Storage 인스턴스
// ========================================
export const storage = getStorage(app);

export default app;
