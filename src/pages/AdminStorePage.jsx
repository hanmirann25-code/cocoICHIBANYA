/**
 * ========================================
 * AdminStorePage - 매장 관리 (새 디자인)
 * ========================================
 */

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaStore, FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaArrowLeft, FaMapMarkerAlt, FaPhone, FaClock, FaImage } from 'react-icons/fa';
import storeService, { initializeStores } from '../services/storeService';
import { getImagePath } from '../utils/imagePath';
import * as S from '../styles/AdminStyles';

const AdminStorePage = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStore, setEditingStore] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    hours: '11:00 - 22:00',
    lat: 37.5665,
    lng: 126.9780,
    features: [],
    images: ['/images/stores/default.jpg'],
    displayOrder: 0
  });

  const availableFeatures = ['주차가능', '배달가능', '포장가능', '단체석', '키즈존', '24시간', '외국어가능', '학생할인'];

  useEffect(() => {
    loadStores();
    initializeStores();
  }, []);

  const loadStores = async () => {
    try {
      const data = await storeService.getAllStores();
      setStores(data);
    } catch (error) {
      alert('매장을 불러오는데 실패했습니다.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
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
        images: [reader.result]
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleCreate = () => {
    setIsEditing(true);
    setEditingStore(null);
    setFormData({
      name: '',
      address: '',
      phone: '',
      hours: '11:00 - 22:00',
      lat: 37.5665,
      lng: 126.9780,
      features: [],
      images: ['/images/stores/default.jpg'],
      displayOrder: stores.length + 1
    });
  };

  const handleEdit = (store) => {
    setIsEditing(true);
    setEditingStore(store);
    setFormData({
      name: store.name,
      address: store.address,
      phone: store.phone,
      hours: store.hours,
      lat: store.lat,
      lng: store.lng,
      features: store.features || [],
      images: store.images || ['/images/stores/default.jpg'],
      displayOrder: store.displayOrder ?? 0
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.address || !formData.phone) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    try {
      if (editingStore) {
        await storeService.updateStore(editingStore.id, formData);
        alert('매장이 수정되었습니다.');
      } else {
        await storeService.createStore(formData);
        alert('매장이 등록되었습니다.');
      }
      
      setIsEditing(false);
      setEditingStore(null);
      loadStores();
    } catch (error) {
      alert('저장에 실패했습니다.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      await storeService.deleteStore(id);
      alert('매장이 삭제되었습니다.');
      loadStores();
    } catch (error) {
      alert('삭제에 실패했습니다.');
    }
  };

  return (
    <>
      <Helmet><title>매장 관리 - 코코이찌방야</title></Helmet>

      <S.AdminPageWrapper>
        <S.AdminHeader>
          <S.Container>
            <S.HeaderContent>
              <S.HeaderLeft>
                <S.BackButton onClick={() => navigate('/admin')}>
                  <FaArrowLeft /> 대시보드
                </S.BackButton>
                <S.HeaderTitle>
                  <FaStore /> 매장 관리
                </S.HeaderTitle>
              </S.HeaderLeft>
              <S.HeaderStats>
                <S.StatBadge>
                  <span>{stores.length}</span>개 매장
                </S.StatBadge>
              </S.HeaderStats>
            </S.HeaderContent>
          </S.Container>
        </S.AdminHeader>

        <S.Container>
          <S.ContentWrapper>
            {!isEditing ? (
              <>
                <S.ActionBar>
                  <div></div>
                  <S.PrimaryButton onClick={handleCreate}>
                    <FaPlus /> 새 매장 등록
                  </S.PrimaryButton>
                </S.ActionBar>

                {stores.length === 0 ? (
                  <S.EmptyState>
                    <FaStore />
                    <h3>등록된 매장이 없습니다</h3>
                    <p>새 매장을 등록해보세요</p>
                    <S.PrimaryButton onClick={handleCreate}>
                      <FaPlus /> 첫 매장 등록하기
                    </S.PrimaryButton>
                  </S.EmptyState>
                ) : (
                  <S.CardGrid>
                    {stores.map((store) => (
                      <StoreCard key={store.id}>
                        <StoreImageWrapper>
                          <StoreImage 
                            src={getImagePath(store.images?.[0] || '/images/stores/default.jpg')} 
                            alt={store.name}
                            onError={(e) => e.target.src = getImagePath('/images/stores/default.jpg')}
                          />
                          {store.displayOrder !== undefined && (
                            <OrderBadge>#{store.displayOrder}</OrderBadge>
                          )}
                        </StoreImageWrapper>
                        
                        <S.CardHeader>
                          <S.CardTitle>{store.name}</S.CardTitle>
                        </S.CardHeader>
                        
                        <S.CardContent>
                          <S.InfoRow>
                            <FaMapMarkerAlt /> {store.address}
                          </S.InfoRow>
                          <S.InfoRow>
                            <FaPhone /> {store.phone}
                          </S.InfoRow>
                          <S.InfoRow>
                            <FaClock /> {store.hours}
                          </S.InfoRow>
                          
                          {store.features && store.features.length > 0 && (
                            <FeatureList>
                              {store.features.map((feature, idx) => (
                                <FeatureTag key={idx}>{feature}</FeatureTag>
                              ))}
                            </FeatureList>
                          )}
                        </S.CardContent>

                        <S.CardFooter>
                          <S.IconButton onClick={() => handleEdit(store)}>
                            <FaEdit /> 수정
                          </S.IconButton>
                          <S.IconButton $variant="danger" onClick={() => handleDelete(store.id)}>
                            <FaTrash /> 삭제
                          </S.IconButton>
                        </S.CardFooter>
                      </StoreCard>
                    ))}
                  </S.CardGrid>
                )}
              </>
            ) : (
              <EditorCard>
                <EditorHeader>
                  <EditorTitle>
                    {editingStore ? '매장 수정' : '새 매장 등록'}
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
                      <Label>매장명 *</Label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="코코이찌방야 강남점"
                        required
                      />
                    </FormGroup>
                    <FormGroup flex="1">
                      <Label>전화번호 *</Label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="02-1234-5678"
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label>주소 *</Label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="서울특별시 강남구..."
                      required
                    />
                  </FormGroup>

                  <FormRow>
                    <FormGroup flex="2">
                      <Label>영업시간</Label>
                      <Input
                        name="hours"
                        value={formData.hours}
                        onChange={handleInputChange}
                        placeholder="11:00 - 22:00"
                      />
                    </FormGroup>
                    <FormGroup flex="1">
                      <Label>🔢 노출 순서</Label>
                      <Input
                        type="number"
                        name="displayOrder"
                        value={formData.displayOrder}
                        onChange={handleInputChange}
                        placeholder="0"
                        min="0"
                      />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup flex="1">
                      <Label>위도 (Latitude)</Label>
                      <Input
                        type="number"
                        step="0.000001"
                        name="lat"
                        value={formData.lat}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup flex="1">
                      <Label>경도 (Longitude)</Label>
                      <Input
                        type="number"
                        step="0.000001"
                        name="lng"
                        value={formData.lng}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label>매장 특징</Label>
                    <FeatureCheckboxGrid>
                      {availableFeatures.map(feature => (
                        <FeatureCheckbox key={feature}>
                          <input
                            type="checkbox"
                            checked={formData.features.includes(feature)}
                            onChange={() => handleFeatureToggle(feature)}
                          />
                          <span>{feature}</span>
                        </FeatureCheckbox>
                      ))}
                    </FeatureCheckboxGrid>
                  </FormGroup>

                  <FormGroup>
                    <Label><FaImage /> 매장 이미지</Label>
                    <ImageUploadSection>
                      <FileInputWrapper>
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                          id="store-image-upload"
                        />
                        <label htmlFor="store-image-upload">
                          📁 이미지 파일 선택 (최대 2MB)
                        </label>
                      </FileInputWrapper>
                      
                      <OrDivider>또는</OrDivider>
                      
                      <Input 
                        name="imageUrl" 
                        value={formData.images?.[0]?.startsWith('data:') ? '' : (formData.images?.[0] || '')} 
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          images: [e.target.value]
                        }))}
                        placeholder="이미지 URL 입력: /images/stores/example.jpg"
                      />
                    </ImageUploadSection>
                    
                    {formData.images?.[0] && (
                      <ImagePreview>
                        <PreviewImage 
                          src={getImagePath(formData.images[0])} 
                          alt="매장 미리보기"
                          onError={(e) => e.target.src = '/images/stores/default.jpg'}
                        />
                        <PreviewBadge>미리보기</PreviewBadge>
                      </ImagePreview>
                    )}
                  </FormGroup>
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
const StoreCard = styled(S.Card)`
  overflow: hidden;
  padding: 0;

  /* 이미지 아래 콘텐츠 영역에 여백 추가 */
  ${S.CardHeader},
  ${S.CardContent} {
    padding: 1.5rem;
  }

  ${S.CardFooter} {
    padding: 1.5rem;
    padding-top: 0;
  }
`;

const StoreImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
  position: relative;
`;

const StoreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${StoreCard}:hover & {
    transform: scale(1.05);
  }
`;

const OrderBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.4);
  z-index: 10;
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

const FeatureTag = styled.span`
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  color: var(--color-dark);
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid #cbd5e1;
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

const FeatureCheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
`;

const FeatureCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  font-weight: 500;
  color: var(--color-dark);
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
  }

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--color-primary);
  }

  span {
    font-size: 0.9rem;
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

export default AdminStorePage;
