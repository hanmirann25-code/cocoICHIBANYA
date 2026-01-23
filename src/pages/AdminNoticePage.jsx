/**
 * ========================================
 * AdminNoticePage - 공지사항 관리 (새 디자인)
 * ========================================
 */

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaBell, FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaArrowLeft, FaExclamationCircle } from 'react-icons/fa';
import noticeService, { initializeNotices } from '../services/noticeService';
import * as S from '../styles/AdminStyles';

const categoryColors = {
  '공지': '#3b82f6',
  '이벤트': '#ef4444',
  '시스템': '#10b981'
};

const AdminNoticePage = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '공지',
    content: '',
    isImportant: false,
    author: '코코이찌방야'
  });

  useEffect(() => {
    loadNotices();
    initializeNotices();
  }, []);

  const loadNotices = async () => {
    try {
      const data = await noticeService.getAllNotices();
      setNotices(data);
    } catch (error) {
      alert('공지사항을 불러오는데 실패했습니다.');
    }
  };

  const handleCreate = () => {
    setIsEditing(true);
    setEditingNotice(null);
    setFormData({
      title: '',
      category: '공지',
      content: '',
      isImportant: false,
      author: '코코이찌방야'
    });
  };

  const handleEdit = (notice) => {
    setIsEditing(true);
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      category: notice.category,
      content: notice.content,
      isImportant: notice.isImportant,
      author: notice.author
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    try {
      if (editingNotice) {
        await noticeService.updateNotice(editingNotice.id, formData);
        alert('공지사항이 수정되었습니다.');
      } else {
        await noticeService.createNotice(formData);
        alert('공지사항이 등록되었습니다.');
      }
      
      setIsEditing(false);
      setEditingNotice(null);
      loadNotices();
    } catch (error) {
      alert('저장에 실패했습니다.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      await noticeService.deleteNotice(id);
      alert('공지사항이 삭제되었습니다.');
      loadNotices();
    } catch (error) {
      alert('삭제에 실패했습니다.');
    }
  };

  return (
    <>
      <Helmet><title>공지사항 관리 - 코코이찌방야</title></Helmet>

      <S.AdminPageWrapper>
        <S.AdminHeader>
          <S.Container>
            <S.HeaderContent>
              <S.HeaderLeft>
                <S.BackButton onClick={() => navigate('/admin')}>
                  <FaArrowLeft /> 대시보드
                </S.BackButton>
                <S.HeaderTitle>
                  <FaBell /> 공지사항 관리
                </S.HeaderTitle>
              </S.HeaderLeft>
              <S.HeaderStats>
                <S.StatBadge>
                  <span>{notices.length}</span>개 공지사항
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
                    <FaPlus /> 새 공지사항 작성
                  </S.PrimaryButton>
                </S.ActionBar>

                {notices.length === 0 ? (
                  <S.EmptyState>
                    <FaBell />
                    <h3>등록된 공지사항이 없습니다</h3>
                    <p>새 공지사항을 작성해보세요</p>
                    <S.PrimaryButton onClick={handleCreate}>
                      <FaPlus /> 첫 공지사항 작성하기
                    </S.PrimaryButton>
                  </S.EmptyState>
                ) : (
                  <S.CardGrid>
                    {notices.map((notice) => (
                      <S.Card key={notice.id}>
                        <S.CardHeader>
                          <S.CardTitle>{notice.title}</S.CardTitle>
                        </S.CardHeader>
                        
                        <S.CardContent>
                          <S.InfoRow>
                            <S.CardBadge $color={categoryColors[notice.category]}>
                              {notice.category}
                            </S.CardBadge>
                            {notice.isImportant && (
                              <S.CardBadge $color="#ef4444">
                                <FaExclamationCircle /> 중요
                              </S.CardBadge>
                            )}
                          </S.InfoRow>
                          <S.InfoRow>
                            📅 {notice.date}
                          </S.InfoRow>
                          <S.InfoRow>
                            ✍️ {notice.author}
                          </S.InfoRow>
                          <PreviewText>
                            {notice.content.substring(0, 100)}...
                          </PreviewText>
                        </S.CardContent>

                        <S.CardFooter>
                          <S.IconButton onClick={() => handleEdit(notice)}>
                            <FaEdit /> 수정
                          </S.IconButton>
                          <S.IconButton $variant="danger" onClick={() => handleDelete(notice.id)}>
                            <FaTrash /> 삭제
                          </S.IconButton>
                        </S.CardFooter>
                      </S.Card>
                    ))}
                  </S.CardGrid>
                )}
              </>
            ) : (
              <EditorCard>
                <EditorHeader>
                  <EditorTitle>
                    {editingNotice ? '공지사항 수정' : '새 공지사항 작성'}
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
                      <Label>제목 *</Label>
                      <Input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="공지사항 제목"
                        required
                      />
                    </FormGroup>
                    <FormGroup flex="1">
                      <Label>카테고리 *</Label>
                      <Select
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                      >
                        <option value="공지">공지</option>
                        <option value="이벤트">이벤트</option>
                        <option value="시스템">시스템</option>
                      </Select>
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label>내용 *</Label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      placeholder="공지사항 내용을 입력하세요"
                      rows="12"
                      required
                    />
                  </FormGroup>

                  <CheckboxGroup>
                    <CheckboxLabel>
                      <input
                        type="checkbox"
                        checked={formData.isImportant}
                        onChange={(e) => setFormData({...formData, isImportant: e.target.checked})}
                      />
                      <span>⭐ 중요 공지사항 (상단 고정)</span>
                    </CheckboxLabel>
                  </CheckboxGroup>
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
const PreviewText = styled.p`
  color: var(--color-gray);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 0.5rem;
`;

const EditorCard = styled(S.Card)`
  max-width: 900px;
  margin: 0 auto;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
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
`;

const CheckboxGroup = styled.div`
  padding: 1.5rem;
  background: #fef2f2;
  border: 2px solid #fecaca;
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
  }

  span {
    font-size: 1rem;
  }
`;

export default AdminNoticePage;
