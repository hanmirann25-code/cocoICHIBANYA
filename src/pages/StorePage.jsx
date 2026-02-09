/**
 * ========================================
 * StorePage.jsx - 매장 찾기 페이지
 * ========================================
 * 전국 매장 검색 및 상세 정보 제공
 */

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaSearch, FaParking, FaTruck, FaBox } from 'react-icons/fa';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { getImagePath } from '../utils/imagePath';
import StoreMap from '../components/common/StoreMap';
import storeService, { initializeStores } from '../services/storeService';

const storeFilters = [
  { id: 'parking', label: '주차가능', icon: '🅿️' },
  { id: 'delivery', label: '배달가능', icon: '🚚' },
  { id: 'takeout', label: '포장가능', icon: '🥡' },
  { id: 'group', label: '단체석', icon: '👥' },
  { id: 'kids', label: '키즈존', icon: '👶' },
  { id: '24h', label: '24시간', icon: '🕐' }
];

const StorePage = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStore, setSelectedStore] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  // 매장 데이터 로드
  useEffect(() => {
    const loadStores = async () => {
      try {
        await initializeStores(); // 초기 데이터 설정
        const data = await storeService.getAllStores();
        setStores(data);
      } catch (error) {
        console.error('매장 데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    loadStores();
  }, []);

  // 필터 토글
  const toggleFilter = (filterId) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter(id => id !== filterId));
    } else {
      setSelectedFilters([...selectedFilters, filterId]);
    }
  };

  // 매장 필터링
  const filteredStores = stores.filter(store => {
    const searchMatch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase());

    // 필터 조건 체크
    const filterMatch = selectedFilters.length === 0 || selectedFilters.every(filter => {
      if (filter === 'parking') return store.features.includes('주차가능');
      if (filter === 'delivery') return store.features.includes('배달가능');
      if (filter === 'takeout') return store.features.includes('포장가능');
      if (filter === 'group') return store.features.includes('단체석');
      if (filter === 'kids') return store.features.includes('키즈존');
      if (filter === '24h') return store.features.includes('24시간');
      return true;
    });

    return searchMatch && filterMatch;
  });

  if (loading) {
    return (
      <StorePageWrapper>
        <LoadingMessage>매장 정보를 불러오는 중...</LoadingMessage>
      </StorePageWrapper>
    );
  }

  return (
    <StorePageWrapper>
      <SEO
        title="매장 찾기"
        description="전국 코코이찌방야 매장을 찾아보세요. 서울 강남, 홍대, 잠실을 비롯한 주요 지역에 매장이 있습니다. 주차 가능, 배달 가능 매장 검색."
        keywords="코코이찌방야 매장, 가까운 매장, 지점 찾기, 영업시간, 배달 가능 매장"
        url="https://cocoichibanya.co.kr/store"
      />
      {/* 페이지 헤더 */}
      <PageHeader>
        <HeaderOverlay />
        <HeaderContent>
          <PageTitle
            as={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            매장 찾기
          </PageTitle>
          <PageSubtitle
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            가장 가까운 코코이찌방야를 찾아보세요
          </PageSubtitle>
        </HeaderContent>
      </PageHeader>

      <Container>
        <StoreContent>
          {/* 검색 및 필터 */}
          <SearchSection>
            <SearchBox>
              <FaSearch />
              <SearchInput
                type="text"
                placeholder="지역, 매장명으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBox>

            <FilterSection>
              {storeFilters.map(filter => (
                <FilterButton
                  key={filter.id}
                  $active={selectedFilters.includes(filter.id)}
                  onClick={() => toggleFilter(filter.id)}
                >
                  <span>{filter.icon}</span>
                  <span>{filter.label}</span>
                </FilterButton>
              ))}
            </FilterSection>
          </SearchSection>

          {/* 매장 목록 */}
          <StoreGrid>
            <StoreListSection>
              <ResultCount>
                전체 {filteredStores.length}개 매장
              </ResultCount>
              <StoreList>
                {filteredStores.map((store, index) => (
                  <StoreCard
                    key={store.id}
                    as={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    $selected={selectedStore?.id === store.id}
                    onClick={() => setSelectedStore(store)}
                  >
                    <StoreName>{store.name}</StoreName>
                    <StoreInfo>
                      <InfoItem>
                        <FaMapMarkerAlt />
                        <span>{store.address}</span>
                      </InfoItem>
                      <InfoItem>
                        <FaPhone />
                        <span>{store.phone}</span>
                      </InfoItem>
                      <InfoItem>
                        <FaClock />
                        <span>{store.hours}</span>
                      </InfoItem>
                    </StoreInfo>
                    <StoreFeatures>
                      {store.features.map((feature, i) => (
                        <FeatureTag key={i}>
                          {feature === '주차가능' && <FaParking />}
                          {feature === '배달가능' && <FaTruck />}
                          {feature === '포장가능' && <FaBox />}
                          {feature}
                        </FeatureTag>
                      ))}
                    </StoreFeatures>
                    <ViewDetailButton>
                      <Button variant="outline" size="small" fullWidth>
                        상세보기
                      </Button>
                    </ViewDetailButton>
                  </StoreCard>
                ))}

                {filteredStores.length === 0 && (
                  <EmptyState>
                    <p>검색 결과가 없습니다.</p>
                    <p>다른 검색어나 필터를 사용해보세요.</p>
                  </EmptyState>
                )}
              </StoreList>
            </StoreListSection>

            {/* 지도 영역 */}
            <MapSection>
              <StoreMap 
                stores={filteredStores}
                selectedStore={selectedStore}
                onStoreSelect={setSelectedStore}
              />
            </MapSection>
          </StoreGrid>
        </StoreContent>
      </Container>
    </StorePageWrapper>
  );
};

// ========================================
// Styled Components
// ========================================

const StorePageWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const PageHeader = styled.div`
  position: relative;
  height: 300px;
  background: url('${getImagePath('/images/store-header.jpg')}') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(230, 0, 18, 0.8), rgba(255, 107, 53, 0.8));
`;

const HeaderContent = styled.div`
  position: relative;
  text-align: center;
  color: var(--color-white);
  z-index: 1;
`;

const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const StoreContent = styled.div``;

const SearchSection = styled.div`
  margin-bottom: 3rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 1rem 1.5rem;
  background: var(--color-white);
  border: 2px solid var(--color-light-gray);
  border-radius: 50px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-fast);

  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
  }

  svg {
    color: var(--color-gray);
    font-size: 1.25rem;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: var(--font-primary);
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-white)'};
  color: ${props => props.$active ? 'var(--color-white)' : 'var(--color-dark)'};
  border: 2px solid ${props => props.$active ? 'var(--color-primary)' : 'var(--color-light-gray)'};
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }
`;

const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const StoreListSection = styled.div``;

const ResultCount = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-dark);
`;

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 800px;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray);
    border-radius: 3px;
  }
`;

const StoreCard = styled.div`
  background: var(--color-white);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid ${props => props.$selected ? 'var(--color-primary)' : 'var(--color-light-gray)'};
  box-shadow: ${props => props.$selected ? 'var(--shadow-md)' : 'var(--shadow-sm)'};
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const StoreName = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 1rem;
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-gray);

  svg {
    color: var(--color-primary);
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
`;

const StoreFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const FeatureTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--color-light-gray);
  color: var(--color-dark);
  padding: 0.4rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;

  svg {
    font-size: 0.875rem;
  }
`;

const ViewDetailButton = styled.div`
  margin-top: 1rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-gray);

  p {
    margin-bottom: 0.5rem;
  }
`;

const MapSection = styled.div`
  position: sticky;
  top: 100px;
  height: 800px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-light-gray);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: var(--shadow-md);

  svg {
    font-size: 4rem;
    color: var(--color-gray);
    opacity: 0.5;
  }
`;

const MapText = styled.p`
  text-align: center;
  color: var(--color-gray);
  line-height: 1.6;
`;

const SelectedStoreInfo = styled.div`
  background: var(--color-white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  text-align: center;
  margin-top: 2rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-gray);
    margin-bottom: 1rem;
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.25rem;
  color: var(--color-gray);
`;

export default StorePage;
