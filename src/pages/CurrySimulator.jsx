/**
 * ========================================
 * CurrySimulator.jsx - 나만의 카레 만들기
 * ========================================
 * 인터랙티브한 카레 커스터마이징 시뮬레이터
 */

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFire, FaCheckCircle, FaShoppingCart, FaRedo } from 'react-icons/fa';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { getImagePath } from '../utils/imagePath';
import { 
  curryMenus, 
  spicyLevels, 
  riceOptions, 
  sauceOptions, 
  toppings, 
  toppingCategories 
} from '../data/menuData';

const CurrySimulator = () => {
  const [step, setStep] = useState(1); // 1: 베이스, 2: 밥/소스, 3: 맵기, 4: 토핑, 5: 완성
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedRice, setSelectedRice] = useState('normal');
  const [selectedSauce, setSelectedSauce] = useState('normal');
  const [selectedSpicy, setSelectedSpicy] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [toppingFilter, setToppingFilter] = useState('all');

  // 총 가격 계산
  const calculateTotal = () => {
    let total = selectedBase ? selectedBase.price : 0;
    
    // 밥 양 추가 가격
    const rice = riceOptions.find(r => r.value === selectedRice);
    if (rice) total += rice.price;
    
    // 소스 추가 가격
    const sauce = sauceOptions.find(s => s.value === selectedSauce);
    if (sauce) total += sauce.price;
    
    // 토핑 가격
    selectedToppings.forEach(toppingId => {
      const topping = toppings.find(t => t.id === toppingId);
      if (topping) total += topping.price;
    });
    
    return total;
  };

  // 토핑 선택/해제
  const toggleTopping = (toppingId) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter(id => id !== toppingId));
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };

  // 필터링된 토핑
  const filteredToppings = toppingFilter === 'all' 
    ? toppings 
    : toppings.filter(t => t.category === toppingFilter);

  // 초기화
  const reset = () => {
    setStep(1);
    setSelectedBase(null);
    setSelectedRice('normal');
    setSelectedSauce('normal');
    setSelectedSpicy(0);
    setSelectedToppings([]);
    setToppingFilter('all');
  };

  return (
    <SimulatorWrapper>
      <SEO 
        title="나만의 카레 만들기"
        description="코코이찌방야의 인터랙티브 카레 시뮬레이터로 나만의 완벽한 카레를 만들어보세요. 베이스, 밥 양, 맵기, 토핑을 자유롭게 선택할 수 있습니다."
        keywords="카레 시뮬레이터, 커스터마이징, 나만의 카레, 맵기 조절, 토핑 선택"
        url="https://cocoichibanya.co.kr/simulator"
      />
      <SimulatorHeader>
        <Container>
          <HeaderTitle
            as={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            나만의 카레 만들기
          </HeaderTitle>
          <HeaderSubtitle>
            원하는 토핑과 맵기를 선택하여 당신만의 완벽한 카레를 만들어보세요
          </HeaderSubtitle>
        </Container>
      </SimulatorHeader>

      <Container>
        <SimulatorContent>
          {/* 진행 단계 표시 */}
          <StepIndicator>
            {[
              { num: 1, label: '베이스 선택' },
              { num: 2, label: '밥/소스' },
              { num: 3, label: '맵기' },
              { num: 4, label: '토핑' },
              { num: 5, label: '완성' }
            ].map(({ num, label }) => (
              <StepItem key={num} $active={step === num} $completed={step > num}>
                <StepNumber $active={step === num} $completed={step > num}>
                  {step > num ? <FaCheckCircle /> : num}
                </StepNumber>
                <StepLabel>{label}</StepLabel>
              </StepItem>
            ))}
          </StepIndicator>

          <ContentGrid>
            {/* 왼쪽: 선택 영역 */}
            <SelectionArea>
              <AnimatePresence mode="wait">
                {/* Step 1: 베이스 카레 선택 */}
                {step === 1 && (
                  <StepContent
                    key="step1"
                    as={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <StepTitle>베이스 카레를 선택하세요</StepTitle>
                    <BaseGrid>
                      {curryMenus.map(menu => (
                        <BaseCard
                          key={menu.id}
                          $selected={selectedBase?.id === menu.id}
                          onClick={() => setSelectedBase(menu)}
                        >
                          <BaseImage src={getImagePath(menu.image)} alt={menu.name} />
                          <BaseName>{menu.name}</BaseName>
                          <BasePrice>{menu.price.toLocaleString()}원</BasePrice>
                          {selectedBase?.id === menu.id && (
                            <SelectedMark><FaCheckCircle /></SelectedMark>
                          )}
                        </BaseCard>
                      ))}
                    </BaseGrid>
                    <StepButtons>
                      <Button 
                        size="large" 
                        disabled={!selectedBase}
                        onClick={() => setStep(2)}
                      >
                        다음 단계
                      </Button>
                    </StepButtons>
                  </StepContent>
                )}

                {/* Step 2: 밥/소스 양 선택 */}
                {step === 2 && (
                  <StepContent
                    key="step2"
                    as={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <StepTitle>밥 양과 소스를 선택하세요</StepTitle>
                    
                    <OptionSection>
                      <OptionLabel>밥 양</OptionLabel>
                      <OptionGrid>
                        {riceOptions.map(option => (
                          <OptionCard
                            key={option.value}
                            $selected={selectedRice === option.value}
                            onClick={() => setSelectedRice(option.value)}
                          >
                            <OptionName>{option.name}</OptionName>
                            {option.price > 0 && (
                              <OptionPrice>+{option.price}원</OptionPrice>
                            )}
                          </OptionCard>
                        ))}
                      </OptionGrid>
                    </OptionSection>

                    <OptionSection>
                      <OptionLabel>카레 소스</OptionLabel>
                      <OptionGrid>
                        {sauceOptions.map(option => (
                          <OptionCard
                            key={option.value}
                            $selected={selectedSauce === option.value}
                            onClick={() => setSelectedSauce(option.value)}
                          >
                            <OptionName>{option.name}</OptionName>
                            {option.price > 0 && (
                              <OptionPrice>+{option.price}원</OptionPrice>
                            )}
                          </OptionCard>
                        ))}
                      </OptionGrid>
                    </OptionSection>

                    <StepButtons>
                      <Button variant="outline" onClick={() => setStep(1)}>
                        이전
                      </Button>
                      <Button size="large" onClick={() => setStep(3)}>
                        다음 단계
                      </Button>
                    </StepButtons>
                  </StepContent>
                )}

                {/* Step 3: 맵기 선택 */}
                {step === 3 && (
                  <StepContent
                    key="step3"
                    as={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <StepTitle>맵기를 선택하세요</StepTitle>
                    
                    <SpicyDisplay>
                      <SpicyIcon $level={selectedSpicy}>
                        <FaFire />
                      </SpicyIcon>
                      <SpicyLevel>단계 {selectedSpicy}</SpicyLevel>
                      <SpicyName>{spicyLevels[selectedSpicy].name}</SpicyName>
                      <SpicyDesc>{spicyLevels[selectedSpicy].description}</SpicyDesc>
                    </SpicyDisplay>

                    <SpicySlider>
                      <SliderInput
                        type="range"
                        min="0"
                        max="10"
                        value={selectedSpicy}
                        onChange={(e) => setSelectedSpicy(parseInt(e.target.value))}
                      />
                      <SliderLabels>
                        <span>보통</span>
                        <span>중간</span>
                        <span>극강</span>
                      </SliderLabels>
                    </SpicySlider>

                    <SpicyGrid>
                      {spicyLevels.map(level => (
                        <SpicyCard
                          key={level.level}
                          $selected={selectedSpicy === level.level}
                          onClick={() => setSelectedSpicy(level.level)}
                        >
                          <FaFire style={{ 
                            opacity: level.heat / 100,
                            color: level.heat > 50 ? '#e60012' : '#ff6b35'
                          }} />
                          <span>{level.level}</span>
                        </SpicyCard>
                      ))}
                    </SpicyGrid>

                    <StepButtons>
                      <Button variant="outline" onClick={() => setStep(2)}>
                        이전
                      </Button>
                      <Button size="large" onClick={() => setStep(4)}>
                        다음 단계
                      </Button>
                    </StepButtons>
                  </StepContent>
                )}

                {/* Step 4: 토핑 선택 */}
                {step === 4 && (
                  <StepContent
                    key="step4"
                    as={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <StepTitle>토핑을 선택하세요 ({selectedToppings.length}개 선택)</StepTitle>
                    
                    <ToppingFilterBar>
                      {toppingCategories.map(category => (
                        <FilterButton
                          key={category.id}
                          $active={toppingFilter === category.id}
                          onClick={() => setToppingFilter(category.id)}
                        >
                          {category.name}
                        </FilterButton>
                      ))}
                    </ToppingFilterBar>

                    <ToppingGrid>
                      {filteredToppings.map(topping => (
                        <ToppingCard
                          key={topping.id}
                          $selected={selectedToppings.includes(topping.id)}
                          onClick={() => toggleTopping(topping.id)}
                        >
                          <ToppingImage src={getImagePath(topping.image)} alt={topping.name} />
                          <ToppingInfo>
                            <ToppingName>{topping.name}</ToppingName>
                            <ToppingPrice>+{topping.price.toLocaleString()}원</ToppingPrice>
                          </ToppingInfo>
                          {selectedToppings.includes(topping.id) && (
                            <SelectedMark><FaCheckCircle /></SelectedMark>
                          )}
                        </ToppingCard>
                      ))}
                    </ToppingGrid>

                    <StepButtons>
                      <Button variant="outline" onClick={() => setStep(3)}>
                        이전
                      </Button>
                      <Button size="large" onClick={() => setStep(5)}>
                        완성하기
                      </Button>
                    </StepButtons>
                  </StepContent>
                )}

                {/* Step 5: 완성 */}
                {step === 5 && (
                  <StepContent
                    key="step5"
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CompletionBadge>
                      <FaCheckCircle /> 완성!
                    </CompletionBadge>
                    <StepTitle>나만의 카레가 완성되었습니다!</StepTitle>
                    
                    <OrderSummary>
                      <SummaryTitle>주문 내역</SummaryTitle>
                      <SummaryItem>
                        <span>베이스</span>
                        <span>{selectedBase?.name}</span>
                        <span>{selectedBase?.price.toLocaleString()}원</span>
                      </SummaryItem>
                      <SummaryItem>
                        <span>밥 양</span>
                        <span>{riceOptions.find(r => r.value === selectedRice)?.name}</span>
                      </SummaryItem>
                      <SummaryItem>
                        <span>맵기</span>
                        <span>{spicyLevels[selectedSpicy].name}</span>
                      </SummaryItem>
                      {selectedToppings.length > 0 && (
                        <>
                          <SummaryDivider />
                          <SummarySubtitle>토핑</SummarySubtitle>
                          {selectedToppings.map(toppingId => {
                            const topping = toppings.find(t => t.id === toppingId);
                            return (
                              <SummaryItem key={toppingId}>
                                <span>{topping?.name}</span>
                                <span>+{topping?.price.toLocaleString()}원</span>
                              </SummaryItem>
                            );
                          })}
                        </>
                      )}
                      <SummaryDivider />
                      <SummaryTotal>
                        <span>총 금액</span>
                        <span>{calculateTotal().toLocaleString()}원</span>
                      </SummaryTotal>
                    </OrderSummary>

                    <StepButtons>
                      <Button variant="outline" size="large" onClick={reset}>
                        <FaRedo /> 다시 만들기
                      </Button>
                      <Button size="large">
                        <FaShoppingCart /> 매장 찾기
                      </Button>
                    </StepButtons>
                  </StepContent>
                )}
              </AnimatePresence>
            </SelectionArea>

            {/* 오른쪽: 미리보기 */}
            <PreviewArea>
              <PreviewCard>
                <PreviewTitle>미리보기</PreviewTitle>
                {selectedBase && (
                  <PreviewImage src={getImagePath(selectedBase.image)} alt="preview" />
                )}
                <PreviewDetails>
                  <DetailItem>
                    <DetailLabel>베이스</DetailLabel>
                    <DetailValue>{selectedBase?.name || '선택하세요'}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>밥 양</DetailLabel>
                    <DetailValue>
                      {riceOptions.find(r => r.value === selectedRice)?.name}
                    </DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>맵기</DetailLabel>
                    <DetailValue>
                      {spicyLevels[selectedSpicy].name}
                      <FaFire style={{ 
                        marginLeft: '0.5rem', 
                        color: selectedSpicy > 5 ? '#e60012' : '#ff6b35',
                        opacity: selectedSpicy / 10
                      }} />
                    </DetailValue>
                  </DetailItem>
                  {selectedToppings.length > 0 && (
                    <DetailItem>
                      <DetailLabel>토핑 ({selectedToppings.length})</DetailLabel>
                      <ToppingList>
                        {selectedToppings.map(toppingId => {
                          const topping = toppings.find(t => t.id === toppingId);
                          return <ToppingTag key={toppingId}>{topping?.name}</ToppingTag>;
                        })}
                      </ToppingList>
                    </DetailItem>
                  )}
                </PreviewDetails>
                <PricePreview>
                  <PriceLabel>예상 금액</PriceLabel>
                  <PriceValue>{calculateTotal().toLocaleString()}원</PriceValue>
                </PricePreview>
              </PreviewCard>
            </PreviewArea>
          </ContentGrid>
        </SimulatorContent>
      </Container>
    </SimulatorWrapper>
  );
};

// ========================================
// Styled Components
// ========================================

const SimulatorWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: var(--color-light-gray);
`;

const SimulatorHeader = styled.div`
  background: var(--gradient-primary);
  color: var(--color-white);
  padding: 4rem 0 3rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeaderTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.125rem;
  opacity: 0.95;
`;

const SimulatorContent = styled.div`
  padding: 3rem 0;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  overflow-x: auto;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: ${props => props.$active || props.$completed ? 1 : 0.4};
  transition: var(--transition-normal);
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  background: ${props => props.$active || props.$completed 
    ? 'var(--gradient-primary)' 
    : 'var(--color-light-gray)'};
  color: ${props => props.$active || props.$completed 
    ? 'var(--color-white)' 
    : 'var(--color-gray)'};
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const StepLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SelectionArea = styled.div`
  background: var(--color-white);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: var(--shadow-md);
  min-height: 600px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StepContent = styled.div``;

const StepTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--color-dark);
`;

const BaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const BaseCard = styled.div`
  position: relative;
  background: var(--color-white);
  border: 3px solid ${props => props.$selected ? 'var(--color-primary)' : 'var(--color-light-gray)'};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const BaseImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const BaseName = styled.div`
  padding: 1rem;
  font-weight: 700;
  text-align: center;
`;

const BasePrice = styled.div`
  padding: 0 1rem 1rem;
  text-align: center;
  color: var(--color-primary);
  font-weight: 700;
`;

const SelectedMark = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 30px;
  height: 30px;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
`;

const StepButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const OptionSection = styled.div`
  margin-bottom: 2rem;
`;

const OptionLabel = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const OptionCard = styled.div`
  padding: 1.5rem;
  background: ${props => props.$selected ? 'var(--gradient-primary)' : 'var(--color-light-gray)'};
  color: ${props => props.$selected ? 'var(--color-white)' : 'var(--color-dark)'};
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-3px);
  }
`;

const OptionName = styled.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const OptionPrice = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const SpicyDisplay = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: var(--color-light-gray);
  border-radius: 16px;
  margin-bottom: 2rem;
`;

const SpicyIcon = styled.div`
  font-size: 4rem;
  color: var(--color-primary);
  opacity: ${props => props.$level / 10};
  margin-bottom: 1rem;
`;

const SpicyLevel = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const SpicyName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const SpicyDesc = styled.div`
  color: var(--color-gray);
`;

const SpicySlider = styled.div`
  margin: 3rem 0;
`;

const SliderInput = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #ffeb3b, #ff9800, #e60012);
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--color-white);
    border: 3px solid var(--color-primary);
    cursor: pointer;
    box-shadow: var(--shadow-md);
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--color-white);
    border: 3px solid var(--color-primary);
    cursor: pointer;
    box-shadow: var(--shadow-md);
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--color-gray);
  font-weight: 600;
`;

const SpicyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const SpicyCard = styled.div`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${props => props.$selected ? 'var(--gradient-primary)' : 'var(--color-light-gray)'};
  color: ${props => props.$selected ? 'var(--color-white)' : 'var(--color-dark)'};
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  transition: all var(--transition-fast);

  &:hover {
    transform: scale(1.1);
  }
`;

const ToppingFilterBar = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-light-gray)'};
  color: ${props => props.$active ? 'var(--color-white)' : 'var(--color-dark)'};
  border: none;
  border-radius: 50px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
  }
`;

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ToppingCard = styled.div`
  position: relative;
  background: var(--color-white);
  border: 3px solid ${props => props.$selected ? 'var(--color-primary)' : 'var(--color-light-gray)'};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const ToppingImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const ToppingInfo = styled.div`
  padding: 0.75rem;
  text-align: center;
`;

const ToppingName = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const ToppingPrice = styled.div`
  font-size: 0.75rem;
  color: var(--color-primary);
  font-weight: 700;
`;

const CompletionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-primary);
  color: var(--color-white);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const OrderSummary = styled.div`
  background: var(--color-light-gray);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
`;

const SummaryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const SummarySubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0 0.5rem;
  color: var(--color-gray);
`;

const SummaryItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr auto;
  gap: 1rem;
  padding: 0.75rem 0;
  font-size: 0.95rem;

  span:first-child {
    color: var(--color-gray);
  }

  span:last-child {
    font-weight: 700;
    text-align: right;
  }
`;

const SummaryDivider = styled.div`
  height: 1px;
  background: var(--color-gray);
  opacity: 0.3;
  margin: 1rem 0;
`;

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  padding-top: 1rem;
`;

const PreviewArea = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const PreviewCard = styled.div`
  position: sticky;
  top: 100px;
  background: var(--color-white);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
`;

const PreviewTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

const PreviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  font-weight: 600;
`;

const DetailValue = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-dark);
  display: flex;
  align-items: center;
`;

const ToppingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ToppingTag = styled.span`
  background: var(--color-light-gray);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const PricePreview = styled.div`
  padding-top: 1.5rem;
  border-top: 2px solid var(--color-light-gray);
  text-align: center;
`;

const PriceLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  margin-bottom: 0.5rem;
`;

const PriceValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
`;

export default CurrySimulator;
