/**
 * ========================================
 * BrandPage.jsx - 브랜드 소개 페이지
 * ========================================
 * 코코이찌방야의 역사, 철학, 가치를 소개
 */

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaAward, FaLeaf, FaHeart, FaGlobeAsia, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { getImagePath } from '../utils/imagePath';

const BrandPage = () => {
  const values = [
    {
      icon: <FaAward />,
      title: '세계 1위',
      description: '전 세계 1,400개 이상의 매장을 운영하는 세계 최대 카레 전문 체인'
    },
    {
      icon: <FaLeaf />,
      title: '신선한 재료',
      description: '매일 아침 신선한 재료를 준비하여 최상의 맛을 제공합니다'
    },
    {
      icon: <FaHeart />,
      title: '고객 맞춤',
      description: '밥 양, 맵기, 토핑을 자유롭게 선택하는 커스터마이징 시스템'
    },
    {
      icon: <FaGlobeAsia />,
      title: '글로벌 브랜드',
      description: '일본을 넘어 아시아 전역에서 사랑받는 프리미엄 카레'
    }
  ];

  const timeline = [
    { year: '1978', event: '나고야에서 코코이찌방야 1호점 오픈' },
    { year: '1982', event: '일본 전국 체인 확장 시작' },
    { year: '1997', event: '해외 진출 (대만 1호점)' },
    { year: '2008', event: '한국 진출 (농심과 라이센스 계약)' },
    { year: '2015', event: '한국 내 50호점 돌파' },
    { year: '2024', event: '전 세계 1,400개 매장 돌파' }
  ];

  const features = [
    '40가지 이상의 다양한 카레 메뉴',
    '0~10단계까지 선택 가능한 맵기 조절',
    '20여 가지 토핑 자유 선택',
    '신선한 재료와 엄선된 향신료 사용',
    '일본 본사의 까다로운 품질 관리',
    '한국인 입맛에 맞춘 현지화'
  ];

  return (
    <BrandPageWrapper>
      <SEO
        title="브랜드 소개"
        description="1978년 일본 나고야에서 시작된 세계 No.1 카레 전문점 코코이찌방야. 전 세계 1,400개 이상의 매장을 운영하는 글로벌 브랜드의 역사와 철학을 소개합니다."
        keywords="코코이찌방야 브랜드, 일본 카레, 농심, 브랜드 스토리, 회사 소개"
        url="https://cocoichibanya.co.kr/brand"
      />
      {/* 히어로 섹션 */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroLogo
            as={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            CoCo ICHIBANYA
          </HeroLogo>
          <HeroTagline
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            세계가 인정한 카레 전문점
          </HeroTagline>
        </HeroContent>
      </HeroSection>

      {/* 브랜드 가치 */}
      <ValuesSection>
        <Container>
          <SectionHeader>
            <SectionTitle>브랜드 가치</SectionTitle>
            <SectionDescription>
              코코이찌방야가 추구하는 핵심 가치
            </SectionDescription>
          </SectionHeader>

          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </ValuesSection>

      {/* 브랜드 스토리 */}
      <StorySection>
        <Container>
          <StoryGrid>
            <StoryImage>
              <img src={getImagePath('/images/brand-story.jpg')} alt="코코이찌방야 스토리" />
            </StoryImage>
            <StoryContent
              as={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <StoryTitle>우리의 이야기</StoryTitle>
              <StoryText>
                1978년 일본 나고야에서 시작된 코코이찌방야는 '고객 한 분 한 분의 취향에 맞춘 카레'라는 철학으로
                세계 최대의 카레 전문 체인으로 성장했습니다.
              </StoryText>
              <StoryText>
                한국에는 2008년 농심과의 파트너십을 통해 진출하여, 일본의 정통 카레 맛과 한국인의 입맛을
                완벽하게 조화시킨 메뉴를 선보이고 있습니다.
              </StoryText>
              <StoryText>
                매일 아침 신선하게 준비하는 재료, 엄선된 향신료, 그리고 고객 맞춤형 서비스로
                전국 수십 개 매장에서 많은 사랑을 받고 있습니다.
              </StoryText>
            </StoryContent>
          </StoryGrid>
        </Container>
      </StorySection>

      {/* 타임라인 */}
      <TimelineSection>
        <Container>
          <SectionHeader>
            <SectionTitle>연혁</SectionTitle>
            <SectionDescription>
              코코이찌방야의 역사
            </SectionDescription>
          </SectionHeader>

          <Timeline>
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                as={motion.div}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineEvent>{item.event}</TimelineEvent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </TimelineSection>

      {/* 특징 */}
      <FeaturesSection>
        <Container>
          <FeaturesGrid>
            <FeaturesImage>
              <img src={getImagePath('/images/curry-making.jpg')} alt="카레 제조" />
            </FeaturesImage>
            <FeaturesContent>
              <FeaturesTitle>코코이찌방야만의 특별함</FeaturesTitle>
              <FeaturesList>
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </FeatureItem>
                ))}
              </FeaturesList>
            </FeaturesContent>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* CTA */}
      <CTASection>
        <CTAOverlay />
        <Container>
          <CTAContent>
            <CTATitle>코코이찌방야와 함께하세요</CTATitle>
            <CTADescription>
              창업 문의부터 메뉴 개발까지, 함께 성장할 파트너를 찾습니다
            </CTADescription>
            <CTAButton href="/franchise">
              창업 안내 보기
            </CTAButton>
          </CTAContent>
        </Container>
      </CTASection>
    </BrandPageWrapper>
  );
};

// ========================================
// Styled Components
// ========================================

const BrandPageWrapper = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background: url('${getImagePath('/images/brand-hero.jpg')}') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(230, 0, 18, 0.85), rgba(255, 107, 53, 0.85));
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: var(--color-white);
  z-index: 1;
`;

const HeroLogo = styled.div`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const HeroTagline = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  color: var(--color-white);
  text-shadow: 0 2px 5px rgba(0,0,0,0.3);
`;

const ValuesSection = styled.section`
  padding: 6rem 0;
  background: var(--color-white);
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-gray);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ValueIcon = styled.div`
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: var(--color-gray);
  line-height: 1.6;
`;

const StorySection = styled.section`
  padding: 6rem 0;
  background: var(--color-light-gray);
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryImage = styled.div`
  img {
    width: 100%;
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
  }
`;

const StoryContent = styled.div``;

const StoryTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 2rem;
`;

const StoryText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-gray);
  margin-bottom: 1.5rem;
`;

const TimelineSection = styled.section`
  padding: 6rem 0;
  background: var(--color-white);
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 80px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-primary);

    @media (max-width: 768px) {
      left: 60px;
    }
  }
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
    gap: 1rem;
  }
`;

const TimelineYear = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TimelineEvent = styled.div`
  background: var(--color-light-gray);
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 1.125rem;
  line-height: 1.6;
  box-shadow: var(--shadow-sm);
`;

const FeaturesSection = styled.section`
  padding: 6rem 0;
  background: var(--color-light-gray);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FeaturesImage = styled.div`
  order: 2;

  img {
    width: 100%;
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 1024px) {
    order: 1;
  }
`;

const FeaturesContent = styled.div`
  order: 1;

  @media (max-width: 1024px) {
    order: 2;
  }
`;

const FeaturesTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;

  svg {
    color: var(--color-primary);
    font-size: 1.5rem;
    flex-shrink: 0;
  }
`;

const CTASection = styled.section`
  position: relative;
  padding: 6rem 0;
  background: url('${getImagePath('/images/cta-bg.jpg')}') center/cover;
  text-align: center;
  color: var(--color-white);
`;

const CTAOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-overlay);
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 3rem;
  background: var(--color-white);
  color: var(--color-primary);
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  transition: var(--transition-normal);
  box-shadow: var(--shadow-lg);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
`;

export default BrandPage;
