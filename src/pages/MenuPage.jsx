/**
 * ========================================
 * MenuPage.jsx - 메뉴 페이지
 * ========================================
 * 카테고리별 필터링, 검색 기능 포함
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter } from 'react-icons/fa';
import Card, { CardImage, CardContent, CardTitle, CardDescription, CardPrice } from '../components/common/Card';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import menuService, { initializeMenus } from '../services/menuService';

const menuCategories = [
  { id: 'all', name: '전체', icon: '🍛' },
  { id: 'pork', name: '돈까스 카레', icon: '🐷' },
  { id: 'chicken', name: '치킨 카레', icon: '🐔' },
  { id: 'beef', name: '비프 카레', icon: '🥩' },
  { id: 'seafood', name: '해산물 카레', icon: '🦐' },
  { id: 'vegetable', name: '야채 카레', icon: '🥗' },
  { id: 'special', name: '스페셜 메뉴', icon: '⭐' }
];

const MenuPage = () => {
  const [curryMenus, setCurryMenus] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [sideMenus, setSideMenus] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMenuType, setSelectedMenuType] = useState('curry'); // curry, topping, side, drink

  // 메뉴 데이터 로드
  useEffect(() => {
    const loadMenus = async () => {
      try {
        await initializeMenus(); // 초기 데이터 설정
        const curryData = await menuService.getAllCurryMenus();
        const toppingData = await menuService.getAllToppings();
        const sideData = await menuService.getAllSides();
        const drinkData = await menuService.getAllDrinks();
        setCurryMenus(curryData);
        setToppings(toppingData);
        setSideMenus(sideData);
        setDrinks(drinkData);
      } catch (error) {
        console.error('메뉴 데이터 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    loadMenus();
  }, []);

  // 카테고리 필터링
  const filteredMenus = curryMenus.filter(menu => {
    const categoryMatch = selectedCategory === 'all' || menu.category === selectedCategory;
    const searchMatch = menu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      menu.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  if (loading) {
    return (
      <MenuPageWrapper>
        <LoadingMessage>메뉴를 불러오는 중...</LoadingMessage>
      </MenuPageWrapper>
    );
  }

  return (
    <MenuPageWrapper>
      <SEO
        title="메뉴"
        description="코코이찌방야의 다양한 카레 메뉴를 확인하세요. 로스카츠 카레, 치킨카츠 카레, 해산물 카레 등 40가지 이상의 메뉴와 20여 가지 토핑을 제공합니다."
        keywords="코코이찌방야 메뉴, 카레 메뉴, 돈까스 카레, 치킨 카레, 토핑, 사이드메뉴"
        url="https://cocoichibanya.co.kr/menu"
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
            메뉴
          </PageTitle>
          <PageSubtitle
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            코코이찌방야의 다양한 메뉴를 만나보세요
          </PageSubtitle>
        </HeaderContent>
      </PageHeader>

      <Container>
        {/* 메뉴 타입 선택 */}
        <MenuTypeSelector>
          <TypeButton
            $active={selectedMenuType === 'curry'}
            onClick={() => setSelectedMenuType('curry')}
          >
            카레 메뉴
          </TypeButton>
          <TypeButton
            $active={selectedMenuType === 'topping'}
            onClick={() => setSelectedMenuType('topping')}
          >
            토핑
          </TypeButton>
          <TypeButton
            $active={selectedMenuType === 'side'}
            onClick={() => setSelectedMenuType('side')}
          >
            사이드
          </TypeButton>
          <TypeButton
            $active={selectedMenuType === 'drink'}
            onClick={() => setSelectedMenuType('drink')}
          >
            음료
          </TypeButton>
        </MenuTypeSelector>

        {/* 카레 메뉴 섹션 */}
        {selectedMenuType === 'curry' && (
          <>
            {/* 검색 및 필터 */}
            <FilterSection>
              <SearchBox>
                <FaSearch />
                <SearchInput
                  type="text"
                  placeholder="메뉴 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </SearchBox>
            </FilterSection>

            {/* 카테고리 필터 */}
            <CategoryFilter>
              {menuCategories.map(category => (
                <CategoryButton
                  key={category.id}
                  $active={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </CategoryButton>
              ))}
            </CategoryFilter>

            {/* 메뉴 그리드 */}
            <MenuGrid>
              {filteredMenus.map((menu, index) => (
                <motion.div
                  key={menu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card hover>
                    <CardImage>
                      <MenuImage src={menu.image} alt={menu.name} />
                      {menu.popular && <PopularBadge>BEST</PopularBadge>}
                      <MenuBadges>
                        {menu.calories && (
                          <Badge>{menu.calories} kcal</Badge>
                        )}
                      </MenuBadges>
                    </CardImage>
                    <CardContent>
                      <CardTitle>{menu.name}</CardTitle>
                      <CardDescription>{menu.description}</CardDescription>

                      {/* 알레르기 정보 */}
                      {menu.allergens && menu.allergens.length > 0 && (
                        <AllergenInfo>
                          <AllergenLabel>알레르기:</AllergenLabel>
                          {menu.allergens.map((allergen, i) => (
                            <AllergenTag key={i}>{allergen}</AllergenTag>
                          ))}
                        </AllergenInfo>
                      )}

                      <PriceRow>
                        <CardPrice>{menu.price.toLocaleString()}원</CardPrice>
                      </PriceRow>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </MenuGrid>

            {filteredMenus.length === 0 && (
              <EmptyState>
                <p>검색 결과가 없습니다.</p>
              </EmptyState>
            )}

            {/* CTA */}
            <CTABox>
              <CTATitle>나만의 카레를 만들어보세요!</CTATitle>
              <CTADescription>
                원하는 토핑과 맵기를 선택하여 나만의 완벽한 카레를 완성하세요
              </CTADescription>
              <Link to="/simulator">
                <Button size="large">카레 시뮬레이터</Button>
              </Link>
            </CTABox>
          </>
        )}

        {/* 토핑 섹션 */}
        {selectedMenuType === 'topping' && (
          <>
            <SectionTitle>토핑 추가</SectionTitle>
            <SectionDescription>
              카레에 토핑을 추가하여 더욱 풍성하게 즐겨보세요
            </SectionDescription>
            <ToppingGrid>
              {toppings.map((topping, index) => (
                <motion.div
                  key={topping.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ToppingCard>
                    <ToppingImage src={topping.image} alt={topping.name} />
                    <ToppingInfo>
                      <ToppingName>{topping.name}</ToppingName>
                      <ToppingDesc>{topping.description}</ToppingDesc>
                      <ToppingPrice>+{topping.price.toLocaleString()}원</ToppingPrice>
                    </ToppingInfo>
                  </ToppingCard>
                </motion.div>
              ))}
            </ToppingGrid>
          </>
        )}

        {/* 사이드 메뉴 섹션 */}
        {selectedMenuType === 'side' && (
          <>
            <SectionTitle>사이드 메뉴</SectionTitle>
            <SectionDescription>
              카레와 함께 즐기기 좋은 사이드 메뉴
            </SectionDescription>
            <SideGrid>
              {sideMenus.map((side, index) => (
                <motion.div
                  key={side.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover>
                    <CardImage>
                      <MenuImage src={side.image} alt={side.name} />
                    </CardImage>
                    <CardContent>
                      <CardTitle>{side.name}</CardTitle>
                      <CardDescription>{side.description}</CardDescription>
                      <CardPrice>{side.price.toLocaleString()}원</CardPrice>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </SideGrid>
          </>
        )}

        {/* 음료 섹션 */}
        {selectedMenuType === 'drink' && (
          <>
            <SectionTitle>음료</SectionTitle>
            <SectionDescription>
              시원한 음료와 함께 완벽한 한 끼
            </SectionDescription>
            <SideGrid>
              {drinks.map((drink, index) => (
                <motion.div
                  key={drink.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover>
                    <CardImage>
                      <MenuImage src={drink.image} alt={drink.name} />
                    </CardImage>
                    <CardContent>
                      <CardTitle>{drink.name}</CardTitle>
                      <CardDescription>{drink.description}</CardDescription>
                      <CardPrice>{drink.price.toLocaleString()}원</CardPrice>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </SideGrid>
          </>
        )}
      </Container>
    </MenuPageWrapper>
  );
};

// ========================================
// Styled Components
// ========================================

const MenuPageWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const PageHeader = styled.div`
  position: relative;
  height: 300px;
  background: url('/images/menu-header.jpg') center/cover;
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
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const MenuTypeSelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const TypeButton = styled.button`
  padding: 1rem 2rem;
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
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  background: var(--color-white);
  border: 2px solid var(--color-light-gray);
  border-radius: 50px;
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

const CategoryFilter = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  overflow-x: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-light-gray);
    border-radius: 3px;
  }
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-white)'};
  color: ${props => props.$active ? 'var(--color-white)' : 'var(--color-dark)'};
  border: 2px solid ${props => props.$active ? 'var(--color-primary)' : 'var(--color-light-gray)'};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.875rem;
`;

const MenuBadges = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Badge = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-white);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const AllergenInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  padding-top: 1rem;
  border-top: 1px solid var(--color-light-gray);
`;

const AllergenLabel = styled.span`
  font-size: 0.875rem;
  color: var(--color-gray);
  font-weight: 600;
`;

const AllergenTag = styled.span`
  background: var(--color-light-gray);
  color: var(--color-dark);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-gray);
  font-size: 1.125rem;
`;

const CTABox = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: var(--gradient-primary);
  border-radius: 20px;
  color: var(--color-white);
  
  a {
    text-decoration: none;
  }
`;

const CTATitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
`;

const CTADescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.95;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: var(--color-gray);
  margin-bottom: 3rem;
`;

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ToppingCard = styled.div`
  background: var(--color-white);
  border: 2px solid var(--color-light-gray);
  border-radius: 12px;
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
  }
`;

const ToppingImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ToppingInfo = styled.div`
  padding: 1.5rem;
`;

const ToppingName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`;

const ToppingDesc = styled.p`
  font-size: 0.875rem;
  color: var(--color-gray);
  margin-bottom: 1rem;
`;

const ToppingPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
`;

const SideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.25rem;
  color: var(--color-gray);
`;

export default MenuPage;
