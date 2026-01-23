/**
 * ========================================
 * NoticePage.jsx - 공지사항 페이지
 * ========================================
 * 공지사항 목록과 상세 내용 표시
 * 중요 공지사항 상단 고정
 */

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { FaBell, FaSearch, FaTimes } from 'react-icons/fa';
import noticeService, { initializeNotices } from '../services/noticeService';

// 카테고리별 색상
const categoryColors = {
  '공지': '#3b82f6',
  '이벤트': '#ef4444',
  '시스템': '#10b981'
};

const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // 공지사항 불러오기
  useEffect(() => {
    loadNotices();
    initializeNotices(); // 초기 데이터 설정
  }, []);

  const loadNotices = async () => {
    try {
      const data = await noticeService.getAllNotices();
      setNotices(data);
    } catch (error) {
      console.error('공지사항을 불러오는데 실패했습니다:', error);
    } finally {
      setLoading(false);
    }
  };

  // 카테고리 목록 추출
  const categories = ['all', ...new Set(notices.map(n => n.category))];

  // 필터링된 공지사항
  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 중요 공지사항과 일반 공지사항 분리
  const importantNotices = filteredNotices.filter(n => n.isImportant);
  const regularNotices = filteredNotices.filter(n => !n.isImportant);

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 새 글 확인 (7일 이내)
  const isNew = (dateString) => {
    const noticeDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - noticeDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  return (
    <>
      {/* SEO 메타 태그 */}
      <Helmet>
        <title>공지사항 - 코코이찌방야</title>
        <meta name="description" content="코코이찌방야의 최신 소식과 공지사항을 확인하세요." />
      </Helmet>

      <PageWrapper>
        {/* 헤더 섹션 */}
        <HeaderSection>
          <Container>
            <HeaderContent>
              <IconWrapper>
                <FaBell />
              </IconWrapper>
              <Title>공지사항</Title>
              <Subtitle>코코이찌방야의 최신 소식을 전해드립니다</Subtitle>
            </HeaderContent>
          </Container>
        </HeaderSection>

        {/* 메인 컨텐츠 */}
        <Container>
          <ContentWrapper>
            {/* 검색 및 필터 */}
            <FilterSection>
              <SearchBar>
                <FaSearch />
                <SearchInput
                  type="text"
                  placeholder="공지사항 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <ClearButton onClick={() => setSearchTerm('')}>
                    <FaTimes />
                  </ClearButton>
                )}
              </SearchBar>

              <CategoryFilter>
                {categories.map(cat => (
                  <CategoryButton
                    key={cat}
                    $active={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat === 'all' ? '전체' : cat}
                  </CategoryButton>
                ))}
              </CategoryFilter>
            </FilterSection>

            {/* 공지사항 목록 */}
            {loading ? (
              <LoadingMessage>공지사항을 불러오는 중...</LoadingMessage>
            ) : (
              <NoticeList>
              {/* 중요 공지사항 */}
              {importantNotices.length > 0 && (
                <>
                  {importantNotices.map(notice => (
                    <NoticeItem
                      key={notice.id}
                      $important={true}
                      onClick={() => setSelectedNotice(notice)}
                    >
                      <NoticeHeader>
                        <NoticeBadges>
                          <ImportantBadge>중요</ImportantBadge>
                          <CategoryBadge $color={categoryColors[notice.category]}>
                            {notice.category}
                          </CategoryBadge>
                          {isNew(notice.date) && <NewBadge>NEW</NewBadge>}
                        </NoticeBadges>
                        <NoticeDate>{formatDate(notice.date)}</NoticeDate>
                      </NoticeHeader>
                      <NoticeTitle>{notice.title}</NoticeTitle>
                      <NoticePreview>
                        {notice.content.split('\n')[0].substring(0, 100)}...
                      </NoticePreview>
                    </NoticeItem>
                  ))}
                </>
              )}

              {/* 일반 공지사항 */}
              {regularNotices.map(notice => (
                <NoticeItem
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                >
                  <NoticeHeader>
                    <NoticeBadges>
                      <CategoryBadge $color={categoryColors[notice.category]}>
                        {notice.category}
                      </CategoryBadge>
                      {isNew(notice.date) && <NewBadge>NEW</NewBadge>}
                    </NoticeBadges>
                    <NoticeDate>{formatDate(notice.date)}</NoticeDate>
                  </NoticeHeader>
                  <NoticeTitle>{notice.title}</NoticeTitle>
                  <NoticePreview>
                    {notice.content.split('\n')[0].substring(0, 100)}...
                  </NoticePreview>
                </NoticeItem>
              ))}

              {/* 검색 결과 없음 */}
              {filteredNotices.length === 0 && (
                <EmptyMessage>
                  <FaSearch size={48} />
                  <p>검색 결과가 없습니다</p>
                </EmptyMessage>
              )}
              </NoticeList>
            )}
          </ContentWrapper>
        </Container>

        {/* 상세 모달 */}
        {selectedNotice && (
          <Modal onClick={() => setSelectedNotice(null)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <div>
                  <NoticeBadges>
                    {selectedNotice.isImportant && <ImportantBadge>중요</ImportantBadge>}
                    <CategoryBadge $color={categoryColors[selectedNotice.category]}>
                      {selectedNotice.category}
                    </CategoryBadge>
                  </NoticeBadges>
                  <ModalTitle>{selectedNotice.title}</ModalTitle>
                  <ModalMeta>
                    <span>{formatDate(selectedNotice.date)}</span>
                    <span>작성자: {selectedNotice.author}</span>
                  </ModalMeta>
                </div>
                <CloseButton onClick={() => setSelectedNotice(null)}>
                  <FaTimes />
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                {selectedNotice.content.split('\n').map((line, index) => (
                  <p key={index}>{line || <br />}</p>
                ))}
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
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
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  padding: 4rem 0;
  color: white;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeaderContent = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bell 2s ease-in-out infinite;

  @keyframes bell {
    0%, 100% { transform: rotate(0deg); }
    10%, 30% { transform: rotate(-10deg); }
    20%, 40% { transform: rotate(10deg); }
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

const FilterSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 50px;
  box-shadow: var(--shadow-sm);
  color: var(--color-gray);
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

const CategoryFilter = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  background: ${props => props.$active ? 'var(--color-primary)' : 'white'};
  color: ${props => props.$active ? 'white' : 'var(--color-dark)'};
  box-shadow: var(--shadow-sm);
  transition: var(--transition-fast);

  &:hover {
    background: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-light-gray)'};
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NoticeItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: var(--transition-fast);
  border-left: ${props => props.$important ? '4px solid var(--color-primary)' : 'none'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const NoticeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const NoticeBadges = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const ImportantBadge = styled(Badge)`
  background: var(--color-primary);
  color: white;
`;

const CategoryBadge = styled(Badge)`
  background: ${props => props.$color || 'var(--color-gray)'};
  color: white;
`;

const NewBadge = styled(Badge)`
  background: #ef4444;
  color: white;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

const NoticeDate = styled.span`
  color: var(--color-gray);
  font-size: 0.875rem;
`;

const NoticeTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`;

const NoticePreview = styled.p`
  color: var(--color-gray);
  line-height: 1.6;
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
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  color: var(--color-gray);
  font-size: 1.125rem;
`;

// 모달 스타일
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: var(--radius-lg);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--color-light-gray);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
  margin: 1rem 0;
`;

const ModalMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--color-gray);
  font-size: 0.875rem;
`;

const CloseButton = styled.button`
  font-size: 1.5rem;
  color: var(--color-gray);
  transition: var(--transition-fast);
  flex-shrink: 0;

  &:hover {
    color: var(--color-dark);
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  overflow-y: auto;
  line-height: 1.8;
  color: var(--color-dark);

  p {
    margin-bottom: 1rem;
  }
`;

export default NoticePage;
