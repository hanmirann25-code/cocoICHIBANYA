/**
 * ========================================
 * imagePath.js - 이미지 경로 유틸리티
 * ========================================
 * GitHub Pages 배포 시 BASE_URL을 자동으로 추가
 */

/**
 * 이미지 경로를 올바르게 변환
 * @param {string} path - 이미지 경로 (예: '/images/menu/curry.jpg')
 * @returns {string} - 변환된 경로
 */
export const getImagePath = (path) => {
  if (!path) return '';
  
  // 이미 http로 시작하는 외부 URL이면 그대로 반환
  if (path.startsWith('http')) return path;
  
  // data: URL (Base64)이면 그대로 반환
  if (path.startsWith('data:')) return path;
  
  // BASE_URL을 앞에 추가
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // 경로가 /로 시작하면 그대로, 아니면 추가
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // BASE_URL이 /로 끝나고 path가 /로 시작하면 중복 제거
  if (baseUrl.endsWith('/') && normalizedPath.startsWith('/')) {
    return baseUrl + normalizedPath.slice(1);
  }
  
  return baseUrl + normalizedPath;
};

export default getImagePath;
