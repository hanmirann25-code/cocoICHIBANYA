/**
 * ========================================
 * FranchisePage.jsx - 창업 안내 페이지
 * ========================================
 * 가맹점 창업 절차, 비용, 지원 사항 안내
 */

import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaStore,
  FaCalculator,
  FaHandshake,
  FaChartLine,
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
  FaCheckCircle
} from 'react-icons/fa';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { getImagePath } from '../utils/imagePath';
import consultationService from '../services/consultationService';

const FranchisePage = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const benefits = [
    {
      icon: <FaStore />,
      title: '검증된 브랜드',
      description: '40년 이상의 노하우와 글로벌 1위 브랜드 파워'
    },
    {
      icon: <FaGraduationCap />,
      title: '체계적 교육',
      description: '본사의 전문 교육 프로그램과 매장 운영 컨설팅'
    },
    {
      icon: <FaChartLine />,
      title: '안정적 수익',
      description: '높은 재방문율과 검증된 수익 모델'
    },
    {
      icon: <FaHandshake />,
      title: '지속 지원',
      description: '마케팅부터 운영까지 본사의 지속적인 지원'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: '상담 신청',
      description: '온라인 또는 전화로 창업 상담 신청'
    },
    {
      step: 2,
      title: '개설 상담',
      description: '희망 지역 및 매장 조건 확인'
    },
    {
      step: 3,
      title: '입지 조사',
      description: '전문가의 상권 분석 및 입지 평가'
    },
    {
      step: 4,
      title: '계약 체결',
      description: '가맹 계약 및 비용 정산'
    },
    {
      step: 5,
      title: '인테리어',
      description: '매장 설계 및 시공 진행'
    },
    {
      step: 6,
      title: '교육 훈련',
      description: '본사 교육센터에서 운영 교육'
    },
    {
      step: 7,
      title: '오픈 준비',
      description: '직원 채용 및 오픈 준비'
    },
    {
      step: 8,
      title: '매장 오픈',
      description: '그랜드 오픈 및 마케팅 지원'
    }
  ];

  const costs = [
    { item: '가맹비', amount: '1,000만원', note: '최초 1회' },
    { item: '교육비', amount: '200만원', note: '2주 교육 프로그램' },
    { item: '보증금', amount: '1,000만원', note: '계약 종료 시 반환' },
    { item: '인테리어', amount: '8,000~1억', note: '평수 및 입지에 따라 상이' },
    { item: '기자재', amount: '3,000만원', note: '주방 기자재 일체' }
  ];

  const support = [
    '브랜드 사용권',
    '운영 매뉴얼 제공',
    '전문 교육 프로그램',
    '식자재 공급 시스템',
    '마케팅 자료 제공',
    '정기 점검 및 컨설팅',
    '신메뉴 개발 지원',
    '본사 통합 마케팅'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 필수 항목 검증
    if (!formData.name || !formData.phone) {
      alert('이름과 연락처는 필수 입력 항목입니다.');
      return;
    }
    
    try {
      // Firebase에 상담 신청 저장
      await consultationService.createConsultation(formData);
      
      alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
      
      // 폼 초기화
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        message: ''
      });
    } catch (error) {
      console.error('상담 신청 실패:', error);
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <FranchisePageWrapper>
      <SEO
        title="창업 안내"
        description="코코이찌방야 가맹점 창업 안내. 검증된 브랜드로 안정적인 창업을 시작하세요. 창업 절차, 비용, 본사 지원 사항을 자세히 안내합니다."
        keywords="코코이찌방야 창업, 가맹점, 프랜차이즈, 창업 비용, 가맹 문의"
        url="https://cocoichibanya.co.kr/franchise"
      />
      {/* 히어로 섹션 */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle
            as={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            코코이찌방야와 함께하세요
          </HeroTitle>
          <HeroSubtitle
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            검증된 브랜드로 성공 창업의 꿈을 실현하세요
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* 창업 혜택 */}
      <BenefitsSection>
        <Container>
          <SectionHeader>
            <SectionTitle>창업 혜택</SectionTitle>
            <SectionDescription>
              코코이찌방야 가맹점만의 특별한 혜택
            </SectionDescription>
          </SectionHeader>

          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </BenefitsSection>

      {/* 탭 네비게이션 */}
      <ContentSection>
        <Container>
          <TabNav>
            <TabButton
              $active={activeTab === 'process'}
              onClick={() => setActiveTab('process')}
            >
              창업 절차
            </TabButton>
            <TabButton
              $active={activeTab === 'cost'}
              onClick={() => setActiveTab('cost')}
            >
              창업 비용
            </TabButton>
            <TabButton
              $active={activeTab === 'support'}
              onClick={() => setActiveTab('support')}
            >
              본사 지원
            </TabButton>
          </TabNav>

          <TabContent>
            {/* 창업 절차 */}
            {activeTab === 'process' && (
              <ProcessGrid
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {processSteps.map((step, index) => (
                  <ProcessCard
                    key={step.step}
                    as={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProcessNumber>STEP {step.step}</ProcessNumber>
                    <ProcessTitle>{step.title}</ProcessTitle>
                    <ProcessDescription>{step.description}</ProcessDescription>
                  </ProcessCard>
                ))}
              </ProcessGrid>
            )}

            {/* 창업 비용 */}
            {activeTab === 'cost' && (
              <CostTable
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <CostHeader>
                  <div>항목</div>
                  <div>금액</div>
                  <div>비고</div>
                </CostHeader>
                {costs.map((cost, index) => (
                  <CostRow
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CostItem>{cost.item}</CostItem>
                    <CostAmount>{cost.amount}</CostAmount>
                    <CostNote>{cost.note}</CostNote>
                  </CostRow>
                ))}
                <TotalNote>
                  * 총 창업 비용은 입지 및 평수에 따라 1.5억 ~ 2.5억 원 예상
                </TotalNote>
              </CostTable>
            )}

            {/* 본사 지원 */}
            {activeTab === 'support' && (
              <SupportGrid
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {support.map((item, index) => (
                  <SupportItem
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FaCheckCircle />
                    <span>{item}</span>
                  </SupportItem>
                ))}
              </SupportGrid>
            )}
          </TabContent>
        </Container>
      </ContentSection>

      {/* 상담 신청 */}
      <ContactSection>
        <Container>
          <ContactGrid>
            <ContactInfo>
              <ContactTitle>창업 상담 문의</ContactTitle>
              <ContactDescription>
                코코이찌방야 창업에 관심이 있으시다면<br />
                아래 연락처로 문의주시거나<br />
                상담 신청서를 작성해 주세요.
              </ContactDescription>

              <ContactMethods>
                <ContactMethod>
                  <FaPhone />
                  <div>
                    <ContactLabel>전화 문의</ContactLabel>
                    <ContactValue>1588-0000</ContactValue>
                    <ContactTime>평일 09:00 - 18:00</ContactTime>
                  </div>
                </ContactMethod>

                <ContactMethod>
                  <FaEnvelope />
                  <div>
                    <ContactLabel>이메일 문의</ContactLabel>
                    <ContactValue>franchise@cocoichibanya.co.kr</ContactValue>
                    <ContactTime>24시간 접수 가능</ContactTime>
                  </div>
                </ContactMethod>
              </ContactMethods>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>온라인 상담 신청</FormTitle>
              <FormGroup>
                <FormLabel>이름 *</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="이름을 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>연락처 *</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="010-0000-0000"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>이메일 *</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="email@example.com"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>희망 지역</FormLabel>
                <FormInput
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="예) 서울 강남구"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>문의 내용</FormLabel>
                <FormTextarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                />
              </FormGroup>

              <FormButton type="submit">
                <Button size="large" fullWidth>상담 신청하기</Button>
              </FormButton>
            </ContactForm>
          </ContactGrid>
        </Container>
      </ContactSection>
    </FranchisePageWrapper>
  );
};

// ========================================
// Styled Components
// ========================================

const FranchisePageWrapper = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background: url('${getImagePath('/images/franchise-hero.jpg')}') center/cover;
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

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

const BenefitsSection = styled.section`
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--color-light-gray);
  border-radius: 16px;
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const BenefitIcon = styled.div`
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  color: var(--color-gray);
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 6rem 0;
  background: var(--color-light-gray);
`;

const TabNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const TabButton = styled.button`
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: ${props => props.$active ? 'var(--gradient-primary)' : 'var(--color-white)'};
  color: ${props => props.$active ? 'var(--color-white)' : 'var(--color-dark)'};
  border: 2px solid ${props => props.$active ? 'transparent' : 'var(--color-light-gray)'};
  border-radius: 50px;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    width: 100%;
  }
`;

const TabContent = styled.div`
  background: var(--color-white);
  padding: 4rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const ProcessCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--color-light-gray);
  border-radius: 12px;
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    background: var(--gradient-primary);
    color: var(--color-white);
  }
`;

const ProcessNumber = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const ProcessTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const ProcessDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const CostTable = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CostHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 2fr;
  padding: 1.5rem;
  background: var(--gradient-primary);
  color: var(--color-white);
  font-weight: 700;
  border-radius: 12px 12px 0 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CostRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 2fr;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-light-gray);
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding: 1.5rem;
    background: var(--color-white);
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: var(--shadow-sm);
  }
`;

const CostItem = styled.div`
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const CostAmount = styled.div`
  font-weight: 700;
  color: var(--color-primary);
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const CostNote = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const TotalNote = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--color-light-gray);
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  color: var(--color-gray);
`;

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SupportItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--color-light-gray);
  border-radius: 12px;
  font-size: 1.125rem;
  transition: var(--transition-normal);

  svg {
    color: var(--color-primary);
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  &:hover {
    transform: translateX(10px);
    background: var(--color-primary);
    color: var(--color-white);

    svg {
      color: var(--color-white);
    }
  }
`;

const ContactSection = styled.section`
  padding: 6rem 0;
  background: var(--color-white);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div``;

const ContactTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

const ContactDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-gray);
  margin-bottom: 3rem;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--color-light-gray);
  border-radius: 12px;

  svg {
    font-size: 2rem;
    color: var(--color-primary);
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
    
    svg {
      font-size: 1.5rem;
    }
  }
`;

const ContactLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
  word-break: break-all;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactTime = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
`;

const ContactForm = styled.form`
  background: var(--color-light-gray);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--color-light-gray);
  border-radius: 8px;
  font-size: 1rem;
  font-family: var(--font-primary);
  background: var(--color-white);
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--color-light-gray);
  border-radius: 8px;
  font-size: 1rem;
  font-family: var(--font-primary);
  background: var(--color-white);
  resize: vertical;
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const FormButton = styled.div`
  margin-top: 2rem;
`;

export default FranchisePage;
