/**
 * ========================================
 * SEO.jsx - SEO 메타 태그 컴포넌트
 * ========================================
 * 각 페이지의 메타 태그, Open Graph, Twitter Card 관리
 */

import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = '코코이찌방야',
  description = '세계 No.1 카레 전문점 코코이찌방야. 나만의 카레를 만들어보세요.',
  keywords = '코코이찌방야, 카레, 일본카레, 돈까스카레, 맛집, CoCo ICHIBANYA',
  image = '/images/og-image.jpg',
  url = 'https://cocoichibanya.co.kr',
  type = 'website'
}) => {
  // 전체 타이틀 (홈이 아닌 경우 사이트명 추가)
  const fullTitle = title === '코코이찌방야' 
    ? '코코이찌방야 - 세계 No.1 카레 전문점' 
    : `${title} | 코코이찌방야`;

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph (페이스북, 카카오톡 등) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="코코이찌방야" />
      <meta property="og:locale" content="ko_KR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* 모바일 최적화 */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* 기타 메타 태그 */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="코코이찌방야" />
      <meta name="copyright" content="© 2024 코코이찌방야 All Rights Reserved" />
      
      {/* 언어 및 지역 */}
      <meta httpEquiv="content-language" content="ko" />
      <link rel="canonical" href={url} />
      
      {/* 파비콘 */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO;
