/**
 * ========================================
 * Image.jsx - 이미지 컴포넌트
 * ========================================
 * GitHub Pages 배포 시 자동으로 BASE_URL 추가
 */

import { getImagePath } from '../../utils/imagePath';

const Image = ({ src, alt, ...props }) => {
  const imageSrc = getImagePath(src);
  
  return <img src={imageSrc} alt={alt} {...props} />;
};

export default Image;
