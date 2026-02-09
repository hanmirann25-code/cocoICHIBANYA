/**
 * ========================================
 * MainPage.jsx - 메인 홈페이지
 * ========================================
 * 풀스크린 히어로, 베스트 메뉴, 특징, CTA 섹션 포함
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUtensils, FaMapMarkerAlt, FaFire, FaLeaf, FaAward, FaHeart } from 'react-icons/fa';
import Button from '../components/common/Button';
import { getImagePath } from '../utils/imagePath';
import Card, { CardImage, CardContent, CardTitle, CardDescription, CardPrice } from '../components/common/Card';
import SEO from '../components/common/SEO';
import menuService from '../services/menuService';

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [popularMenus, setPopularMenus] = useState([]);

  const heroSlides = [
    {
      title: '세계 No.1 카레 전문점',
      subtitle: 'CoCo ICHIBANYA',
      description: '나만의 완벽한 카레를 만들어보세요',
      video: '/images/hero/hero-1.mp4',
      cta: '메뉴 보기',
      link: '/menu'
    },
    {
      title: '나만의 커스텀 카레',
      subtitle: '무한한 조합',
      description: '밥 양, 맵기, 토핑을 자유롭게 선택하세요',
      video: '/images/hero/hero-2.mp4',
      cta: '카레 만들기',
      link: '/simulator'
    },
    {
      title: '전국 매장 안내',
      subtitle: '가까운 곳에서 만나요',
      description: '가장 가까운 코코이찌방야를 찾아보세요',
      video: '/images/hero/hero-3.mp4',
      cta: '매장 찾기',
      link: '/store'
    }
  ];

  // Firebase에서 인기 메뉴 가져오기
  useEffect(() => {
    const loadPopularMenus = async () => {
      try {
        const allMenus = await menuService.getAllCurryMenus();
        // popular: true인 메뉴만 필터링
        const popular = allMenus.filter(menu => menu.popular === true);
        setPopularMenus(popular);
      } catch (error) {
        console.error('인기 메뉴 로드 실패:', error);
      }
    };

    loadPopularMenus();
  }, []);

  const features = [
    {
      icon: <FaUtensils />,
      title: '다양한 메뉴',
      description: '40가지 이상의 카레와 토핑 조합'
    },
    {
      icon: <FaFire />,
      title: '맵기 조절',
      description: '0~10단계 맵기 선택 가능'
    },
    {
      icon: <FaLeaf />,
      title: '신선한 재료',
      description: '매일 아침 신선하게 준비'
    },
    {
      icon: <FaAward />,
      title: '프리미엄 품질',
      description: '일본 본사의 까다로운 품질 기준'
    }
  ];

  return (
    <MainWrapper>
      <SEO
        title="코코이찌방야"
        description="세계 No.1 카레 전문점 코코이찌방야. 40가지 이상의 카레 메뉴와 커스터마이징 시스템으로 나만의 완벽한 카레를 만들어보세요."
        keywords="코코이찌방야, 카레, 일본카레, 돈까스카레, 치킨카레, 커리, 맛집, 농심, CoCo ICHIBANYA"
        url="https://cocoichibanya.co.kr"
      />
      {/* 히어로 섹션 */}
      <HeroSection>
        {heroSlides.map((slide, index) => (
          <HeroSlide
            key={index}
            $active={currentSlide === index}
          >
            {/* 비디오 배경 */}
            <HeroVideo
              autoPlay
              loop
              muted
              playsInline
              $active={currentSlide === index}
            >
              <source src={getImagePath(slide.video)} type="video/mp4" />
            </HeroVideo>

            <HeroOverlay />
            <HeroContent
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 50 }}
              transition={{ duration: 0.8 }}
            >
              <HeroSubtitle>{slide.subtitle}</HeroSubtitle>
              <HeroTitle>{slide.title}</HeroTitle>
              <HeroDescription>{slide.description}</HeroDescription>
              <HeroButton to={slide.link}>
                <Button size="large">{slide.cta}</Button>
              </HeroButton>
            </HeroContent>
          </HeroSlide>
        ))}

        {/* 슬라이드 인디케이터 */}
        <SlideIndicators>
          {heroSlides.map((_, index) => (
            <Indicator
              key={index}
              $active={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SlideIndicators>
      </HeroSection>

      {/* 특징 섹션 */}
      <FeaturesSection>
        <Container>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* 베스트 메뉴 섹션 */}
      <BestMenuSection>
        <Container>
          <SectionHeader
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge>
              <FaHeart /> BEST MENU
            </SectionBadge>
            <SectionTitle>인기 메뉴</SectionTitle>
            <SectionDescription>
              코코이찌방야에서 가장 사랑받는 메뉴들을 만나보세요
            </SectionDescription>
          </SectionHeader>

          <MenuGrid>
            {popularMenus.length > 0 ? (
              popularMenus.slice(0, 4).map((menu, index) => (
                <motion.div
                  key={menu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover>
                    <CardImage>
                      <MenuImage src={getImagePath(menu.image)} alt={menu.name} />
                      {menu.popular && <PopularBadge>BEST</PopularBadge>}
                    </CardImage>
                    <CardContent>
                      <CardTitle>{menu.name}</CardTitle>
                      <CardDescription>{menu.description}</CardDescription>
                      <CardPrice>{menu.price.toLocaleString()}원</CardPrice>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <LoadingMessage>인기 메뉴를 불러오는 중...</LoadingMessage>
            )}
          </MenuGrid>

          <ViewAllButton>
            <Link to="/menu">
              <Button variant="secondary" size="large">전체 메뉴 보기</Button>
            </Link>
          </ViewAllButton>
        </Container>
      </BestMenuSection>

      {/* CTA 섹션 */}
      <CTASection>
        <CTAOverlay />
        <Container>
          <CTAContent
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CTATitle>나만의 완벽한 카레를 만들어보세요</CTATitle>
            <CTADescription>
              밥 양, 맵기, 토핑을 자유롭게 선택하고<br />
              당신만의 특별한 카레를 완성하세요
            </CTADescription>
            <CTAButtons>
              <Link to="/simulator">
                <Button size="large">카레 만들기</Button>
              </Link>
              <Link to="/store">
                <Button variant="secondary" size="large">
                  <FaMapMarkerAlt /> 매장 찾기
                </Button>
              </Link>
            </CTAButtons>
          </CTAContent>
        </Container>
      </CTASection>
    </MainWrapper >
  );
};

// ========================================
// Styled Components
// ========================================

const MainWrapper = styled.main`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  position: relative;
  height: calc(100vh - 80px);
  min-height: 600px;
  overflow: hidden;
`;

const HeroSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1s ease;
  pointer-events: ${props => props.$active ? 'auto' : 'none'};
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1s ease;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1s ease;
`;

const HeroYoutube = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1s ease;
  pointer-events: ${props => props.$active ? 'auto' : 'none'};
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary), #ff6b35);
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const EmptyOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-light-gray);
  color: var(--color-gray);
  font-size: 1.25rem;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-overlay);
`;

const HeroContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-white);
  padding: 2rem;
  z-index: 1;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--color-white);
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const HeroButton = styled(Link)`
  text-decoration: none;
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 2;
`;

const Indicator = styled.button`
  width: ${props => props.$active ? '40px' : '12px'};
  height: 12px;
  border-radius: 6px;
  background: ${props => props.$active ? 'var(--color-primary)' : 'rgba(255,255,255,0.5)'};
  border: none;
  cursor: pointer;
  transition: all var(--transition-normal);
`;

const FeaturesSection = styled.section`
  padding: 6rem 0;
  background: var(--color-light-gray);
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: var(--color-white);
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-gray);
  line-height: 1.6;
`;

const BestMenuSection = styled.section`
  padding: 6rem 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-light-gray);
  color: var(--color-primary);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-gray);
  max-width: 600px;
  margin: 0 auto;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.875rem;
`;

const ViewAllButton = styled.div`
  text-align: center;
  
  a {
    text-decoration: none;
  }
`;

const CTASection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: url('${getImagePath('/images/cta-bg.jpg')}') center/cover;
  color: var(--color-white);
`;

const CTAOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(230, 0, 18, 0.9), rgba(255, 107, 53, 0.9));
`;

const CTAContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  
  a {
    text-decoration: none;
  }
`;

const LoadingMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  font-size: 1.125rem;
  color: var(--color-gray);
`;

export default MainPage;
