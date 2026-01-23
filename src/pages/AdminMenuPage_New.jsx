/**
 * ========================================
 * AdminMenuPage - 메뉴 관리 (새 디자인)
 * ========================================
 */

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUtensils, FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaArrowLeft, FaImage, FaFire, FaDollarSign } from 'react-icons/fa';
import menuService, { initializeMenus } from '../services/menuService';
import * as S from '../styles/AdminStyles';

const AdminMenuPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('curry');
  const [curryMenus, setCurryMenus] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  const tabs = [
    { id: 'curry', name: '카레 메뉴', icon: '🍛', color: '#f59e0b' },
    { id: 'topping', name: '토핑', icon: '🧀', color: '#10b981' },
    { id: 'side', name: '사이드', icon: '🥗', color: '#3b82f6' },
    { id: 'drink', name: '음료', icon: '🥤', color: '#8b5cf6' },
  ];

  const categoryOptions = {
    curry: ['pork', 'chicken', 'beef', 'seafood', 'vegetable', 'special'],
    topping: ['protein', 'seafood', 'vegetable', 'dairy', 'seasoning'],
    side: ['salad', 'soup', 'pickle', 'etc'],
    drink: ['soft', 'juice', 'tea', 'etc']
  };

  useEffect(() => {
    loadData();
    initializeMenus();
  }, [activeTab]);

  const loadData = async () => {
    try {
      if (activeTab === 'curry') {
        const data = await menuService.getAllCurryMenus();
        setCurryMenus(data);
      } else if (activeTab === 'topping') {
        const data = await menuService.getAllToppings();
        setToppings(data);
      } else if (activeTab === 'side') {
        const data = await menuService.getAllSides();
        setSides(data);
      } else if (activeTab === 'drink') {
        const data = await menuService.getAllDrinks();
        setDrinks(data);
      }
    } catch (error) {
      console.error('데이터 로드 실패:', error);
    }
  };

  const getCurrentData = () => {
    if (activeTab === 'curry') return curryMenus;
    if (activeTab === 'topping') return toppings;
    if (activeTab === 'side') return sides;
    if (activeTab === 'drink') return drinks;
    return [];
  };

  const getTotalCount = () => {
    return curryMenus.length + toppings.length + sides.length + drinks.length;
  };

  const handleCreate = () => {
    setIsEditing(true);
    setEditingItem(null);
    if (activeTab === 'curry') {
      setFormData({
        name: '',
        category: 'pork',
        price: 0,
        description: '',
        image: '/images/menu/default.jpg',
        popular: false,
        allergens: [],
        calories: 0,
        spicy: 0
      });
    } else if (activeTab === 'topping') {
      setFormData({
        name: '',
        category: 'protein',
        price: 0,
        description: '',
        image: '/images/toppings/default.jpg',
        allergens: []
      });
    } else if (activeTab === 'side') {
      setFormData({
        name: '',
        category: 'salad',
        price: 0,
        description: '',
        image: '/images/sides/default.jpg',
        calories: 0
      });
    } else if (activeTab === 'drink') {
      setFormData({
        name: '',
        category: 'soft',
        price: 0,
        description: '',
        image: '/images/drinks/default.jpg'
      });
    }
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingItem(item);
    setFormData({ ...item });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price) {
      alert('필수 항목을 입력해주세요.');
      return;
    }

    const dataToSave = {
      ...formData,
      allergens: typeof formData.allergens === 'string'
        ? formData.allergens.split(',').map(a => a.trim()).filter(a => a)
        : (formData.allergens || [])
    };

    try {
      if (activeTab === 'curry') {
        if (editingItem) {
          await menuService.updateCurryMenu(editingItem.id, dataToSave);
        } else {
          await menuService.createCurryMenu(dataToSave);
        }
      } else if (activeTab === 'topping') {
        if (editingItem) {
          await menuService.updateTopping(editingItem.id, dataToSave);
        } else {
          await menuService.createTopping(dataToSave);
        }
      } else if (activeTab === 'side') {
        if (editingItem) {
          await menuService.updateSide(editingItem.id, dataToSave);
        } else {
          await menuService.createSide(dataToSave);
        }
      } else if (activeTab === 'drink') {
        if (editingItem) {
          await menuService.updateDrink(editingItem.id, dataToSave);
        } else {
          await menuService.createDrink(dataToSave);
        }
      }
      
      alert('저장되었습니다.');
      setIsEditing(false);
      loadData();
    } catch (error) {
      alert('저장 실패');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('삭제하시겠습니까?')) return;

    try {
      if (activeTab === 'curry') {
        await menuService.deleteCurryMenu(id);
      } else if (activeTab === 'topping') {
        await menuService.deleteTopping(id);
      } else if (activeTab === 'side') {
        await menuService.deleteSide(id);
      } else if (activeTab === 'drink') {
        await menuService.deleteDrink(id);
      }
      
      alert('삭제되었습니다.');
      loadData();
    } catch (error) {
      alert('삭제 실패');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'number' ? parseFloat(value) : value)
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('이미지 크기는 2MB 이하로 해주세요.');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        image: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Helmet><title>메뉴 관리 - 코코이찌방야</title></Helmet>

      <S.AdminPageWrapper>
        <S.AdminHeader>
          <S.Container>
            <S.HeaderContent>
              <S.HeaderLeft>
                <S.BackButton onClick={() => navigate('/admin')}>
                  <FaArrowLeft /> 대시보드
                </S.BackButton>
                <S.HeaderTitle>
                  <FaUtensils /> 메뉴 관리
                </S.HeaderTitle>
              </S.HeaderLeft>
              <S.HeaderStats>
                <S.StatBadge>
                  <span>{getTotalCount()}</span>개 메뉴
                </S.StatBadge>
              </S.HeaderStats>
            </S.HeaderContent>
          </S.Container>
        </S.AdminHeader>

        <S.Container>
          <S.ContentWrapper>
            <S.TabMenu>
              {tabs.map(tab => (
                <S.Tab
                  key={tab.id}
                  $active={activeTab === tab.id}
                  onClick={() => { setActiveTab(tab.id); setIsEditing(false); }}
                >
                  {tab.icon} {tab.name}
                </S.Tab>
              ))}
            </S.TabMenu>

            {!isEditing ? (
              <>
                <S.ActionBar>
                  <div></div>
                  <S.PrimaryButton onClick={handleCreate}>
                    <FaPlus /> 새 {tabs.find(t => t.id === activeTab)?.name} 등록
                  </S.PrimaryButton>
                </S.ActionBar>

                {getCurrentData().length === 0 ? (
                  <S.EmptyState>
                    <FaUtensils />
                    <h3>등록된 메뉴가 없습니다</h3>
                    <p>새 메뉴를 등록해보세요</p>
                    <S.PrimaryButton onClick={handleCreate}>
                      <FaPlus /> 첫 메뉴 등록하기
                    </S.PrimaryButton>
                  </S.EmptyState>
                ) : (
                  <S.CardGrid>
                    {getCurrentData().map((item) => (
                      <MenuCard key={item.id}>
                        <MenuImageWrapper>
                          <MenuImage 
                            src={item.image || '/images/menu/default.jpg'} 
                            alt={item.name}
                            onError={(e) => e.target.src = '/images/menu/default.jpg'}
                          />
                          {item.popular && <PopularBadge>⭐ 인기</PopularBadge>}
                        </MenuImageWrapper>
                        
                        <S.CardHeader>
                          <S.CardTitle>{item.name}</S.CardTitle>
                        </S.CardHeader>
                        
                        <S.CardContent>
                          <PriceRow>
                            <FaDollarSign style={{ color: 'var(--color-primary)' }} />
                            <PriceText>{item.price.toLocaleString()}원</PriceText>
                          </PriceRow>
                          
                          {item.calories && (
                            <S.InfoRow>
                              <FaFire /> {item.calories}kcal
                            </S.InfoRow>
                          )}
                          
                          <S.InfoRow>
                            📁 {item.category}
                          </S.InfoRow>
                          
                          {item.description && (
                            <MenuDescription>{item.description}</MenuDescription>
                          )}
                          
                          {item.allergens && item.allergens.length > 0 && (
                            <AllergenInfo>
                              ⚠️ {item.allergens.join(', ')}
                            </AllergenInfo>
                          )}
                        </S.CardContent>

                        <S.CardFooter>
                          <S.IconButton onClick={() => handleEdit(item)}>
                            <FaEdit /> 수정
                          </S.IconButton>
                          <S.IconButton $variant="danger" onClick={() => handleDelete(item.id)}>
                            <FaTrash /> 삭제
                          </S.IconButton>
                        </S.CardFooter>
                      </MenuCard>
                    ))}
                  </S.CardGrid>
                )}
              </>
            ) : (
              <EditorCard>
                <EditorHeader>
                  <EditorTitle>
                    {editingItem ? '메뉴 수정' : '새 메뉴 등록'}
                  </EditorTitle>
                  <EditorActions>
                    <CancelButton onClick={() => setIsEditing(false)}>
                      <FaTimes /> 취소
                    </CancelButton>
                    <SaveButton onClick={handleSave}>
                      <FaSave /> 저장
                    </SaveButton>
                  </EditorActions>
                </EditorHeader>

                <EditorForm onSubmit={handleSave}>
                  <FormRow>
                    <FormGroup flex="2">
                      <Label>메뉴명 *</Label>
                      <Input
                        name="name"
                        value={formData.name || ''}
                        onChange={handleInputChange}
                        placeholder="메뉴 이름"
                        required
                      />
                    </FormGroup>
                    <FormGroup flex="1">
                      <Label>가격 *</Label>
                      <Input
                        type="number"
                        name="price"
                        value={formData.price || 0}
                        onChange={handleInputChange}
                        placeholder="0"
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup flex="1">
                      <Label>카테고리</Label>
                      <Select
                        name="category"
                        value={formData.category || ''}
                        onChange={handleInputChange}
                      >
                        {categoryOptions[activeTab]?.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </Select>
                    </FormGroup>
                    {(activeTab === 'curry' || activeTab === 'side') && (
                      <FormGroup flex="1">
                        <Label><FaFire /> 칼로리</Label>
                        <Input
                          type="number"
                          name="calories"
                          value={formData.calories || 0}
                          onChange={handleInputChange}
                          placeholder="0"
                        />
                      </FormGroup>
                    )}
                    {activeTab === 'curry' && (
                      <FormGroup flex="1">
                        <Label>🌶️ 맵기 (0-5)</Label>
                        <Input
                          type="number"
                          min="0"
                          max="5"
                          name="spicy"
                          value={formData.spicy || 0}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    )}
                  </FormRow>

                  <FormGroup>
                    <Label>설명</Label>
                    <Textarea
                      name="description"
                      value={formData.description || ''}
                      onChange={handleInputChange}
                      placeholder="메뉴 설명을 입력하세요"
                      rows="3"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label><FaImage /> 메뉴 이미지</Label>
                    <ImageUploadSection>
                      <FileInputWrapper>
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                          id="menu-image-upload"
                        />
                        <label htmlFor="menu-image-upload">
                          📁 이미지 파일 선택 (최대 2MB)
                        </label>
                      </FileInputWrapper>
                      
                      <OrDivider>또는</OrDivider>
                      
                      <Input 
                        name="imageUrl" 
                        value={formData.image?.startsWith('data:') ? '' : (formData.image || '')} 
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          image: e.target.value
                        }))}
                        placeholder="이미지 URL 입력: /images/menu/example.jpg"
                      />
                    </ImageUploadSection>
                    
                    {formData.image && (
                      <ImagePreview>
                        <PreviewImage 
                          src={formData.image} 
                          alt="메뉴 미리보기"
                          onError={(e) => e.target.src = '/images/menu/default.jpg'}
                        />
                        <PreviewBadge>미리보기</PreviewBadge>
                      </ImagePreview>
                    )}
                  </FormGroup>

                  {(activeTab === 'curry' || activeTab === 'topping') && (
                    <FormGroup>
                      <Label>⚠️ 알러지 정보</Label>
                      <Textarea 
                        name="allergens_text" 
                        value={
                          typeof formData.allergens === 'string' 
                            ? formData.allergens 
                            : (formData.allergens || []).join(', ')
                        } 
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          allergens: e.target.value
                        }))}
                        placeholder="돼지고기, 밀, 대두 (쉼표로 구분)&#13;&#10;예: 돼지고기, 우유, 밀, 대두"
                        rows="2"
                      />
                      <HelpText>
                        💡 여러 알러지 정보는 쉼표(,)로 구분해서 입력하세요
                      </HelpText>
                    </FormGroup>
                  )}

                  {activeTab === 'curry' && (
                    <CheckboxGroup>
                      <CheckboxLabel>
                        <input
                          type="checkbox"
                          name="popular"
                          checked={formData.popular || false}
                          onChange={handleInputChange}
                        />
                        <span>⭐ 인기 메뉴로 설정</span>
                      </CheckboxLabel>
                    </CheckboxGroup>
                  )}
                </EditorForm>
              </EditorCard>
            )}
          </S.ContentWrapper>
        </S.Container>
      </S.AdminPageWrapper>
    </>
  );
};

// 추가 스타일
const MenuCard = styled(S.Card)`
  overflow: hidden;
  padding: 0;
`;

const MenuImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
  position: relative;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${MenuCard}:hover & {
    transform: scale(1.05);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const PriceText = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
`;

const MenuDescription = styled.p`
  color: var(--color-gray);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 0.75rem;
`;

const AllergenInfo = styled.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #991b1b;
  line-height: 1.4;
`;

const EditorCard = styled(S.Card)`
  max-width: 1000px;
  margin: 0 auto;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const EditorTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
`;

const EditorActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const CancelButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: #f1f5f9;
  color: #475569;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(230, 0, 18, 0.4);
  }
`;

const EditorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${props => props.flex || '1'};
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--color-dark);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const Select = styled.select`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.6;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const ImageUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
`;

const FileInputWrapper = styled.div`
  label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(230, 0, 18, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(230, 0, 18, 0.4);
    }
  }
`;

const OrDivider = styled.div`
  text-align: center;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  position: relative;
  padding: 0 1rem;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc(50% - 2rem);
    height: 2px;
    background: #cbd5e1;
  }
  
  &::before { left: 0; }
  &::after { right: 0; }
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 400px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const PreviewBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
`;

const CheckboxGroup = styled.div`
  padding: 1.5rem;
  background: #fef3c7;
  border: 2px solid #fde047;
  border-radius: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-weight: 600;
  color: var(--color-dark);

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--color-primary);
  }

  span {
    font-size: 1rem;
  }
`;

const HelpText = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin-top: 0.5rem;
`;

export default AdminMenuPage;
