/**
 * ========================================
 * FAQPage.jsx - FAQ 페이지
 * ========================================
 * 자주 묻는 질문과 답변
 * 카테고리별 필터링 및 검색 기능
 */

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { FaQuestionCircle, FaSearch, FaChevronDown, FaTimes } from 'react-icons/fa';
import { faqCategories, faqs, getFAQsByCategory, searchFAQs } from '../data/faqData';

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQId, setOpenFAQId] = useState(null);

  // FAQ 필터링
  const getDisplayFAQs = () => {
    if (searchTerm) {
      return searchFAQs(searchTerm);
    }
    return selectedCategory === 'all' ? faqs : getFAQsByCategory(selectedCategory);
  };

  const displayFAQs = getDisplayFAQs();

  // FAQ 토글
  const toggleFAQ = (id) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  return (
    <>
      {/* SEO 메타 태그 */}
      <Helmet>
        <title>자주 묻는 질문 (FAQ) - 코코이찌방야</title>
        <meta name="description" content="코코이찌방야에 대해 자주 묻는 질문과 답변을 확인하세요." />
      </Helmet>

      <PageWrapper>
        {/* 헤더 섹션 */}
        <HeaderSection>
          <Container>
            <HeaderContent>
              <IconWrapper>
                <FaQuestionCircle />
              </IconWrapper>
              <Title>자주 묻는 질문</Title>
              <Subtitle>궁금하신 내용을 빠르게 찾아보세요</Subtitle>
            </HeaderContent>
          </Container>
        </HeaderSection>

        {/* 메인 컨텐츠 */}
        <Container>
          <ContentWrapper>
            {/* 검색 바 */}
            <SearchSection>
              <SearchBar>
                <FaSearch />
                <SearchInput
                  type="text"
                  placeholder="궁금한 내용을 검색하세요..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <ClearButton onClick={() => setSearchTerm('')}>
                    <FaTimes />
                  </ClearButton>
                )}
              </SearchBar>
              {searchTerm && (
                <SearchResult>
                  {displayFAQs.length}개의 검색 결과
                </SearchResult>
              )}
            </SearchSection>

            {/* 카테고리 탭 */}
            {!searchTerm && (
              <CategoryTabs>
                <CategoryTab
                  $active={selectedCategory === 'all'}
                  onClick={() => setSelectedCategory('all')}
                >
                  <CategoryIcon>🌟</CategoryIcon>
                  <CategoryName>전체</CategoryName>
                </CategoryTab>
                {faqCategories.map(cat => (
                  <CategoryTab
                    key={cat.id}
                    $active={selectedCategory === cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <CategoryIcon>{cat.icon}</CategoryIcon>
                    <CategoryName>{cat.name}</CategoryName>
                  </CategoryTab>
                ))}
              </CategoryTabs>
            )}

            {/* FAQ 목록 */}
            <FAQList>
              {displayFAQs.length > 0 ? (
                displayFAQs.map((faq) => (
                  <FAQItem key={faq.id}>
                    <FAQQuestion
                      onClick={() => toggleFAQ(faq.id)}
                      $isOpen={openFAQId === faq.id}
                    >
                      <QuestionIcon>Q</QuestionIcon>
                      <QuestionText>{faq.question}</QuestionText>
                      <ChevronIcon $isOpen={openFAQId === faq.id}>
                        <FaChevronDown />
                      </ChevronIcon>
                    </FAQQuestion>
                    <FAQAnswer $isOpen={openFAQId === faq.id}>
                      <AnswerIcon>A</AnswerIcon>
                      <AnswerContent>
                        {faq.answer.split('\n').map((line, index) => (
                          <p key={index}>{line || <br />}</p>
                        ))}
                      </AnswerContent>
                    </FAQAnswer>
                  </FAQItem>
                ))
              ) : (
                <EmptyMessage>
                  <FaSearch size={48} />
                  <p>검색 결과가 없습니다</p>
                  <p>다른 키워드로 검색해보세요</p>
                </EmptyMessage>
              )}
            </FAQList>

            {/* 추가 문의 안내 */}
            <ContactSection>
              <ContactTitle>찾으시는 답변이 없으신가요?</ContactTitle>
              <ContactText>
                더 궁금하신 사항은 고객센터로 문의해주세요
              </ContactText>
              <ContactInfo>
                <ContactItem>
                  <ContactLabel>고객센터 전화</ContactLabel>
                  <ContactValue>1588-0000</ContactValue>
                </ContactItem>
                <ContactItem>
                  <ContactLabel>운영 시간</ContactLabel>
                  <ContactValue>평일 09:00 - 18:00</ContactValue>
                </ContactItem>
                <ContactItem>
                  <ContactLabel>이메일</ContactLabel>
                  <ContactValue>support@cocoichibanya.co.kr</ContactValue>
                </ContactItem>
              </ContactInfo>
            </ContactSection>
          </ContentWrapper>
        </Container>
      </PageWrapper>
    </>
  );
};

// ========================================
// Styled Components
// ========================================

const PageWrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--color-background);
`;

const HeaderSection = styled.section`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  padding: 4rem 0;
  color: white;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeaderContent = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.95;
`;

const ContentWrapper = styled.div`
  padding-bottom: 5rem;
`;

const SearchSection = styled.div`
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border-radius: 50px;
  box-shadow: var(--shadow-md);
  color: var(--color-gray);
  transition: var(--transition-fast);

  &:focus-within {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: var(--color-dark);

  &::placeholder {
    color: var(--color-gray);
  }
`;

const ClearButton = styled.button`
  color: var(--color-gray);
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-dark);
  }
`;

const SearchResult = styled.p`
  margin-top: 1rem;
  color: var(--color-gray);
  font-size: 0.875rem;
  padding-left: 1rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-light-gray);
    border-radius: 2px;
  }
`;

const CategoryTab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 2rem;
  background: ${props => props.$active ? 'white' : 'transparent'};
  border-radius: var(--radius-lg);
  box-shadow: ${props => props.$active ? 'var(--shadow-md)' : 'none'};
  transition: var(--transition-fast);
  min-width: 100px;
  white-space: nowrap;

  &:hover {
    background: white;
    box-shadow: var(--shadow-sm);
    transform: translateY(-2px);
  }
`;

const CategoryIcon = styled.span`
  font-size: 2rem;
`;

const CategoryName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-dark);
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-fast);

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  text-align: left;
  background: ${props => props.$isOpen ? 'var(--color-background)' : 'white'};
  transition: var(--transition-fast);
  cursor: pointer;

  &:hover {
    background: var(--color-background);
  }
`;

const QuestionIcon = styled.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
`;

const QuestionText = styled.span`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-dark);
`;

const ChevronIcon = styled.span`
  flex-shrink: 0;
  color: var(--color-gray);
  transition: transform var(--transition-fast);
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
`;

const FAQAnswer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: ${props => props.$isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem'};
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all var(--transition-normal);
`;

const AnswerIcon = styled.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #10b981;
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
`;

const AnswerContent = styled.div`
  color: var(--color-dark);
  line-height: 1.8;

  p {
    margin-bottom: 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  color: var(--color-gray);

  svg {
    margin-bottom: 1rem;
    opacity: 0.3;
  }

  p {
    font-size: 1.125rem;

    &:first-of-type {
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
  }
`;

const ContactSection = styled.div`
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: var(--radius-lg);
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: var(--color-gray);
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  text-align: center;
`;

const ContactLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
`;

export default FAQPage;
