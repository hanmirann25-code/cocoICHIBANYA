/**
 * ========================================
 * AdminHeroVisualPage.jsx - 메인 비주얼 관리
 * ========================================
 * 메인 페이지 히어로 섹션 비주얼 관리
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
    FaImage,
    FaVideo,
    FaYoutube,
    FaPlus,
    FaEdit,
    FaTrash,
    FaEye,
    FaToggleOn,
    FaToggleOff,
    FaArrowLeft,
    FaSave,
    FaTimes,
    FaUpload
} from 'react-icons/fa';
import heroVisualService from '../services/heroVisualService';

const ADMIN_PASSWORD = 'coco2026';

const AdminHeroVisualPage = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const [visuals, setVisuals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [previewData, setPreviewData] = useState(null);

    const [formData, setFormData] = useState({
        type: 'image',
        title: '',
        subtitle: '',
        description: '',
        overlayText: '',
        buttonText: '',
        buttonLink: '',
        youtubeUrl: '',
        displayOrder: 0,
        isActive: true
    });

    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreviewUrl, setFilePreviewUrl] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(false);

    // 로그인 확인
    useEffect(() => {
        const authStatus = sessionStorage.getItem('admin_authenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    // 비주얼 목록 로드
    useEffect(() => {
        if (isAuthenticated) {
            loadVisuals();
        }
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem('admin_authenticated', 'true');
        } else {
            alert('비밀번호가 올바르지 않습니다.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('admin_authenticated');
        navigate('/admin');
    };

    const loadVisuals = async () => {
        try {
            setLoading(true);
            const data = await heroVisualService.getAllVisuals();
            setVisuals(data);
        } catch (error) {
            console.error('비주얼 로드 실패:', error);
            alert('비주얼을 불러오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // 파일 타입 검증
        const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const validVideoTypes = ['video/mp4'];

        if (formData.type === 'image' && !validImageTypes.includes(file.type)) {
            alert('이미지는 JPG 또는 PNG 형식만 가능합니다.');
            return;
        }

        if (formData.type === 'video' && !validVideoTypes.includes(file.type)) {
            alert('비디오는 MP4 형식만 가능합니다.');
            return;
        }

        setSelectedFile(file);

        // 미리보기 URL 생성
        const previewUrl = URL.createObjectURL(file);
        setFilePreviewUrl(previewUrl);
    };

    const handleTypeChange = (type) => {
        setFormData({ ...formData, type });
        setSelectedFile(null);
        setFilePreviewUrl(null);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 유효성 검증
        if (!formData.title) {
            alert('제목을 입력해주세요.');
            return;
        }

        if ((formData.type === 'image' || formData.type === 'video') && !selectedFile && !editingId) {
            alert('파일을 선택해주세요.');
            return;
        }

        if (formData.type === 'youtube' && !formData.youtubeUrl) {
            alert('유튜브 URL을 입력해주세요.');
            return;
        }

        try {
            setUploadProgress(true);

            if (editingId) {
                // 수정
                await heroVisualService.updateVisual(editingId, formData, selectedFile);
                alert('비주얼이 수정되었습니다.');
            } else {
                // 생성
                await heroVisualService.createVisual(formData, selectedFile);
                alert('비주얼이 등록되었습니다.');
            }

            // 폼 초기화
            resetForm();
            await loadVisuals();
        } catch (error) {
            console.error('저장 실패:', error);
            alert('저장에 실패했습니다: ' + error.message);
        } finally {
            setUploadProgress(false);
        }
    };

    const handleEdit = (visual) => {
        setEditingId(visual.id);
        setFormData({
            type: visual.type,
            title: visual.title,
            subtitle: visual.subtitle,
            description: visual.description,
            overlayText: visual.overlayContent?.text || '',
            buttonText: visual.overlayContent?.buttonText || '',
            buttonLink: visual.overlayContent?.buttonLink || '',
            youtubeUrl: visual.type === 'youtube' ? visual.mediaUrl : '',
            displayOrder: visual.displayOrder,
            isActive: visual.isActive
        });
        setFilePreviewUrl(visual.mediaUrl);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;

        try {
            await heroVisualService.deleteVisual(id);
            alert('비주얼이 삭제되었습니다.');
            await loadVisuals();
        } catch (error) {
            console.error('삭제 실패:', error);
            alert('삭제에 실패했습니다.');
        }
    };

    const handleToggleActive = async (id, currentStatus) => {
        try {
            await heroVisualService.toggleActive(id, !currentStatus);
            await loadVisuals();
        } catch (error) {
            console.error('상태 변경 실패:', error);
            alert('상태 변경에 실패했습니다.');
        }
    };

    const handlePreview = (visual) => {
        setPreviewData(visual);
    };

    const resetForm = () => {
        setShowForm(false);
        setEditingId(null);
        setFormData({
            type: 'image',
            title: '',
            subtitle: '',
            description: '',
            overlayText: '',
            buttonText: '',
            buttonLink: '',
            youtubeUrl: '',
            displayOrder: 0,
            isActive: true
        });
        setSelectedFile(null);
        setFilePreviewUrl(null);
    };

    // 로그인 화면
    if (!isAuthenticated) {
        return (
            <LoginWrapper>
                <LoginBox>
                    <LoginTitle>🔐 관리자 로그인</LoginTitle>
                    <LoginSubtitle>메인 비주얼 관리</LoginSubtitle>
                    <LoginForm onSubmit={handleLogin}>
                        <LoginInput
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <LoginButton type="submit">로그인</LoginButton>
                    </LoginForm>
                </LoginBox>
            </LoginWrapper>
        );
    }

    // 메인 화면
    return (
        <PageWrapper>
            {/* 헤더 */}
            <Header>
                <HeaderLeft>
                    <BackButton onClick={handleLogout}>
                        <FaArrowLeft /> 대시보드로
                    </BackButton>
                    <HeaderTitle>메인 비주얼 관리</HeaderTitle>
                </HeaderLeft>
                <AddButton onClick={() => setShowForm(true)}>
                    <FaPlus /> 새 비주얼 추가
                </AddButton>
            </Header>

            <ContentWrapper>
                {/* 비주얼 목록 */}
                {!showForm && (
                    <VisualsGrid>
                        {loading ? (
                            <LoadingMessage>불러오는 중...</LoadingMessage>
                        ) : visuals.length === 0 ? (
                            <EmptyMessage>등록된 비주얼이 없습니다.</EmptyMessage>
                        ) : (
                            visuals.map((visual) => (
                                <VisualCard key={visual.id}>
                                    <VisualPreview>
                                        {visual.type === 'image' && (
                                            <PreviewImage src={visual.mediaUrl} alt={visual.title} />
                                        )}
                                        {visual.type === 'video' && (
                                            <PreviewVideo src={visual.mediaUrl} muted />
                                        )}
                                        {visual.type === 'youtube' && (
                                            <PreviewIframe src={visual.mediaUrl} />
                                        )}
                                        <TypeBadge $type={visual.type}>
                                            {visual.type === 'image' && <FaImage />}
                                            {visual.type === 'video' && <FaVideo />}
                                            {visual.type === 'youtube' && <FaYoutube />}
                                            {visual.type.toUpperCase()}
                                        </TypeBadge>
                                    </VisualPreview>

                                    <VisualInfo>
                                        <VisualTitle>{visual.title}</VisualTitle>
                                        <VisualSubtitle>{visual.subtitle}</VisualSubtitle>
                                        <VisualOrder>순서: {visual.displayOrder}</VisualOrder>
                                    </VisualInfo>

                                    <VisualActions>
                                        <ActionButton
                                            $color="var(--color-primary)"
                                            onClick={() => handleToggleActive(visual.id, visual.isActive)}
                                            title={visual.isActive ? '활성화됨' : '비활성화됨'}
                                        >
                                            {visual.isActive ? <FaToggleOn /> : <FaToggleOff />}
                                        </ActionButton>
                                        <ActionButton
                                            $color="var(--color-success)"
                                            onClick={() => handlePreview(visual)}
                                        >
                                            <FaEye />
                                        </ActionButton>
                                        <ActionButton
                                            $color="var(--color-info)"
                                            onClick={() => handleEdit(visual)}
                                        >
                                            <FaEdit />
                                        </ActionButton>
                                        <ActionButton
                                            $color="var(--color-danger)"
                                            onClick={() => handleDelete(visual.id)}
                                        >
                                            <FaTrash />
                                        </ActionButton>
                                    </VisualActions>
                                </VisualCard>
                            ))
                        )}
                    </VisualsGrid>
                )}

                {/* 등록/수정 폼 */}
                {showForm && (
                    <FormWrapper>
                        <FormHeader>
                            <FormTitle>{editingId ? '비주얼 수정' : '새 비주얼 추가'}</FormTitle>
                            <CloseButton onClick={resetForm}>
                                <FaTimes />
                            </CloseButton>
                        </FormHeader>

                        <Form onSubmit={handleSubmit}>
                            {/* 타입 선택 */}
                            <FormSection>
                                <Label>비주얼 타입 *</Label>
                                <TypeSelector>
                                    <TypeButton
                                        type="button"
                                        $active={formData.type === 'image'}
                                        onClick={() => handleTypeChange('image')}
                                    >
                                        <FaImage /> 이미지
                                    </TypeButton>
                                    <TypeButton
                                        type="button"
                                        $active={formData.type === 'video'}
                                        onClick={() => handleTypeChange('video')}
                                    >
                                        <FaVideo /> 비디오
                                    </TypeButton>
                                    <TypeButton
                                        type="button"
                                        $active={formData.type === 'youtube'}
                                        onClick={() => handleTypeChange('youtube')}
                                    >
                                        <FaYoutube /> 유튜브
                                    </TypeButton>
                                </TypeSelector>
                            </FormSection>

                            {/* 파일 업로드 (이미지/비디오) */}
                            {(formData.type === 'image' || formData.type === 'video') && (
                                <FormSection>
                                    <Label>파일 업로드 *</Label>
                                    <FileUploadBox>
                                        <FileInput
                                            type="file"
                                            accept={formData.type === 'image' ? 'image/jpeg,image/jpg,image/png' : 'video/mp4'}
                                            onChange={handleFileSelect}
                                            id="file-upload"
                                        />
                                        <FileUploadLabel htmlFor="file-upload">
                                            <FaUpload />
                                            <span>{selectedFile ? selectedFile.name : '파일 선택'}</span>
                                        </FileUploadLabel>
                                    </FileUploadBox>
                                    {filePreviewUrl && (
                                        <FilePreview>
                                            {formData.type === 'image' ? (
                                                <img src={filePreviewUrl} alt="미리보기" />
                                            ) : (
                                                <video src={filePreviewUrl} controls />
                                            )}
                                        </FilePreview>
                                    )}
                                </FormSection>
                            )}

                            {/* 유튜브 URL */}
                            {formData.type === 'youtube' && (
                                <FormSection>
                                    <Label>유튜브 URL *</Label>
                                    <Input
                                        name="youtubeUrl"
                                        value={formData.youtubeUrl}
                                        onChange={handleInputChange}
                                        placeholder="https://www.youtube.com/watch?v=..."
                                    />
                                </FormSection>
                            )}

                            {/* 제목 */}
                            <FormSection>
                                <Label>제목 *</Label>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="예: 세계 No.1 카레 전문점"
                                    required
                                />
                            </FormSection>

                            {/* 부제 */}
                            <FormSection>
                                <Label>부제</Label>
                                <Input
                                    name="subtitle"
                                    value={formData.subtitle}
                                    onChange={handleInputChange}
                                    placeholder="예: CoCo ICHIBANYA"
                                />
                            </FormSection>

                            {/* 설명 */}
                            <FormSection>
                                <Label>설명</Label>
                                <Textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="예: 나만의 완벽한 카레를 만들어보세요"
                                    rows="3"
                                />
                            </FormSection>

                            {/* 오버레이 콘텐츠 */}
                            <FormSection>
                                <SectionTitle>오버레이 콘텐츠</SectionTitle>

                                <Label>추가 텍스트</Label>
                                <Input
                                    name="overlayText"
                                    value={formData.overlayText}
                                    onChange={handleInputChange}
                                    placeholder="오버레이에 표시할 추가 텍스트"
                                />

                                <Label>버튼 텍스트</Label>
                                <Input
                                    name="buttonText"
                                    value={formData.buttonText}
                                    onChange={handleInputChange}
                                    placeholder="예: 메뉴 보기"
                                />

                                <Label>버튼 링크</Label>
                                <Input
                                    name="buttonLink"
                                    value={formData.buttonLink}
                                    onChange={handleInputChange}
                                    placeholder="예: /menu"
                                />
                            </FormSection>

                            {/* 순서 및 활성화 */}
                            <FormSection>
                                <FormRow>
                                    <FormCol>
                                        <Label>표시 순서</Label>
                                        <Input
                                            type="number"
                                            name="displayOrder"
                                            value={formData.displayOrder}
                                            onChange={handleInputChange}
                                            min="0"
                                        />
                                    </FormCol>
                                    <FormCol>
                                        <Label>
                                            <input
                                                type="checkbox"
                                                name="isActive"
                                                checked={formData.isActive}
                                                onChange={handleInputChange}
                                            />
                                            {' '}활성화
                                        </Label>
                                    </FormCol>
                                </FormRow>
                            </FormSection>

                            {/* 버튼 */}
                            <FormActions>
                                <SubmitButton type="submit" disabled={uploadProgress}>
                                    <FaSave /> {uploadProgress ? '저장 중...' : '저장'}
                                </SubmitButton>
                                <CancelButton type="button" onClick={resetForm}>
                                    <FaTimes /> 취소
                                </CancelButton>
                            </FormActions>
                        </Form>
                    </FormWrapper>
                )}

                {/* 미리보기 모달 */}
                {previewData && (
                    <PreviewModal onClick={() => setPreviewData(null)}>
                        <PreviewContent onClick={(e) => e.stopPropagation()}>
                            <PreviewHeader>
                                <h3>미리보기</h3>
                                <CloseButton onClick={() => setPreviewData(null)}>
                                    <FaTimes />
                                </CloseButton>
                            </PreviewHeader>
                            <PreviewBody>
                                {previewData.type === 'image' && (
                                    <img src={previewData.mediaUrl} alt={previewData.title} />
                                )}
                                {previewData.type === 'video' && (
                                    <video src={previewData.mediaUrl} controls autoPlay />
                                )}
                                {previewData.type === 'youtube' && (
                                    <iframe src={previewData.mediaUrl} allowFullScreen />
                                )}
                                <PreviewOverlay>
                                    <h2>{previewData.subtitle}</h2>
                                    <h1>{previewData.title}</h1>
                                    <p>{previewData.description}</p>
                                    {previewData.overlayContent?.buttonText && (
                                        <button>{previewData.overlayContent.buttonText}</button>
                                    )}
                                </PreviewOverlay>
                            </PreviewBody>
                        </PreviewContent>
                    </PreviewModal>
                )}
            </ContentWrapper>
        </PageWrapper>
    );
};

// ========================================
// Styled Components
// ========================================

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-light-gray);
`;

const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary), #ff6b35);
`;

const LoginBox = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 400px;
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const LoginSubtitle = styled.p`
  color: var(--color-gray);
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginInput = styled.input`
  padding: 1rem;
  border: 2px solid var(--color-light-gray);
  border-radius: 8px;
  font-size: 1rem;
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const LoginButton = styled.button`
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: var(--transition-fast);

  &:hover {
    background: #cc0010;
  }
`;

const Header = styled.header`
  background: white;
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--color-gray);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-dark);
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition-fast);

  &:hover {
    background: #cc0010;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
`;

const VisualsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const VisualCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const VisualPreview = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: var(--color-light-gray);
  overflow: hidden;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PreviewVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PreviewIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const TypeBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props =>
        props.$type === 'image' ? 'var(--color-success)' :
            props.$type === 'video' ? 'var(--color-info)' :
                'var(--color-danger)'
    };
  color: white;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const VisualInfo = styled.div`
  padding: 1.5rem;
`;

const VisualTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`;

const VisualSubtitle = styled.p`
  font-size: 0.95rem;
  color: var(--color-gray);
  margin-bottom: 0.75rem;
`;

const VisualOrder = styled.p`
  font-size: 0.875rem;
  color: var(--color-gray);
`;

const VisualActions = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--color-light-gray);
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background: ${props => props.$color};
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  transition: var(--transition-fast);

  &:hover {
    opacity: 0.8;
  }
`;

const LoadingMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem;
  font-size: 1.125rem;
  color: var(--color-gray);
`;

const EmptyMessage = styled(LoadingMessage)``;

const FormWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  max-width: 800px;
  margin: 0 auto;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-light-gray);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-dark);
`;

const CloseButton = styled.button`
  font-size: 1.5rem;
  color: var(--color-gray);
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-dark);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--color-dark);
  font-size: 0.95rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const TypeSelector = styled.div`
  display: flex;
  gap: 1rem;
`;

const TypeButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 2px solid ${props => props.$active ? 'var(--color-primary)' : 'var(--color-light-gray)'};
  background: ${props => props.$active ? 'var(--color-primary)' : 'white'};
  color: ${props => props.$active ? 'white' : 'var(--color-gray)'};
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition-fast);

  &:hover {
    border-color: var(--color-primary);
  }
`;

const FileUploadBox = styled.div`
  position: relative;
`;

const FileInput = styled.input`
  display: none;
`;

const FileUploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  border: 2px dashed var(--color-light-gray);
  border-radius: 8px;
  background: var(--color-light-gray);
  cursor: pointer;
  transition: var(--transition-fast);

  &:hover {
    border-color: var(--color-primary);
    background: white;
  }

  svg {
    font-size: 1.5rem;
    color: var(--color-primary);
  }

  span {
    font-weight: 600;
    color: var(--color-gray);
  }
`;

const FilePreview = styled.div`
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  max-height: 300px;

  img, video {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Input = styled.input`
  padding: 0.875rem;
  border: 2px solid var(--color-light-gray);
  border-radius: 8px;
  font-size: 1rem;
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const Textarea = styled.textarea`
  padding: 0.875rem;
  border: 2px solid var(--color-light-gray);
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  font-family: inherit;
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition-fast);

  &:hover:not(:disabled) {
    background: #cc0010;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--color-gray);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-dark);
  }
`;

const PreviewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const PreviewContent = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
`;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid var(--color-light-gray);

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-dark);
  }
`;

const PreviewBody = styled.div`
  position: relative;
  min-height: 400px;

  img, video, iframe {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

const PreviewOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 90%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }

  button {
    padding: 1rem 2rem;
    background: var(--color-primary);
    color: white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
  }
`;

export default AdminHeroVisualPage;
