/**
 * ========================================
 * AdminConsultationPage - 창업 상담 신청 관리
 * ========================================
 */

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaComments, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTrash, FaArrowLeft, FaClock, FaCheckCircle } from 'react-icons/fa';
import consultationService from '../services/consultationService';
import * as S from '../styles/AdminStyles';

const statusColors = {
  'pending': '#f59e0b',
  'contacted': '#3b82f6',
  'completed': '#10b981'
};

const statusLabels = {
  'pending': '대기중',
  'contacted': '연락완료',
  'completed': '처리완료'
};

const AdminConsultationPage = () => {
  const navigate = useNavigate();
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    loadConsultations();
  }, []);

  const loadConsultations = async () => {
    try {
      const data = await consultationService.getAllConsultations();
      setConsultations(data);
    } catch (error) {
      alert('상담 신청을 불러오는데 실패했습니다.');
    }
  };

  const handleView = (consultation) => {
    setSelectedConsultation(consultation);
    setNotes(consultation.notes || '');
    setIsDetailView(true);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await consultationService.updateConsultation(id, { status: newStatus });
      alert('상태가 변경되었습니다.');
      loadConsultations();
      if (selectedConsultation?.id === id) {
        setSelectedConsultation({ ...selectedConsultation, status: newStatus });
      }
    } catch (error) {
      alert('상태 변경에 실패했습니다.');
    }
  };

  const handleNotesUpdate = async () => {
    if (!selectedConsultation) return;

    try {
      await consultationService.updateConsultation(selectedConsultation.id, { notes });
      alert('메모가 저장되었습니다.');
      loadConsultations();
    } catch (error) {
      alert('메모 저장에 실패했습니다.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      await consultationService.deleteConsultation(id);
      alert('삭제되었습니다.');
      if (selectedConsultation?.id === id) {
        setIsDetailView(false);
        setSelectedConsultation(null);
      }
      loadConsultations();
    } catch (error) {
      alert('삭제에 실패했습니다.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusCount = (status) => {
    return consultations.filter(c => c.status === status).length;
  };

  return (
    <>
      <Helmet><title>상담 신청 관리 - 코코이찌방야</title></Helmet>

      <S.AdminPageWrapper>
        <S.AdminHeader>
          <S.Container>
            <S.HeaderContent>
              <S.HeaderLeft>
                <S.BackButton onClick={() => navigate('/admin')}>
                  <FaArrowLeft /> 대시보드
                </S.BackButton>
                <S.HeaderTitle>
                  <FaComments /> 창업 상담 신청 관리
                </S.HeaderTitle>
              </S.HeaderLeft>
              <S.HeaderStats>
                <S.StatBadge>
                  <span>{consultations.length}</span>개 상담 신청
                </S.StatBadge>
              </S.HeaderStats>
            </S.HeaderContent>
          </S.Container>
        </S.AdminHeader>

        <S.Container>
          <S.ContentWrapper>
            {/* 상태별 통계 */}
            <StatsGrid>
              <StatCard $color={statusColors.pending}>
                <StatIcon><FaClock /></StatIcon>
                <StatValue>{getStatusCount('pending')}</StatValue>
                <StatLabel>대기중</StatLabel>
              </StatCard>
              <StatCard $color={statusColors.contacted}>
                <StatIcon><FaPhone /></StatIcon>
                <StatValue>{getStatusCount('contacted')}</StatValue>
                <StatLabel>연락완료</StatLabel>
              </StatCard>
              <StatCard $color={statusColors.completed}>
                <StatIcon><FaCheckCircle /></StatIcon>
                <StatValue>{getStatusCount('completed')}</StatValue>
                <StatLabel>처리완료</StatLabel>
              </StatCard>
            </StatsGrid>

            {!isDetailView ? (
              <>
                {consultations.length === 0 ? (
                  <S.EmptyState>
                    <FaComments />
                    <h3>등록된 상담 신청이 없습니다</h3>
                    <p>창업 문의가 들어오면 여기에 표시됩니다</p>
                  </S.EmptyState>
                ) : (
                  <ConsultationList>
                    {consultations.map((consultation) => (
                      <ConsultationCard key={consultation.id}>
                        <CardHeader>
                          <HeaderLeft>
                            <ConsultationName>{consultation.name}</ConsultationName>
                            <StatusBadge $status={consultation.status}>
                              {statusLabels[consultation.status]}
                            </StatusBadge>
                          </HeaderLeft>
                          <ConsultationDate>
                            {formatDate(consultation.createdAt)}
                          </ConsultationDate>
                        </CardHeader>

                        <CardContent>
                          <InfoRow>
                            <InfoIcon><FaPhone /></InfoIcon>
                            <InfoText>{consultation.phone}</InfoText>
                          </InfoRow>
                          {consultation.email && (
                            <InfoRow>
                              <InfoIcon><FaEnvelope /></InfoIcon>
                              <InfoText>{consultation.email}</InfoText>
                            </InfoRow>
                          )}
                          {consultation.location && (
                            <InfoRow>
                              <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                              <InfoText>{consultation.location}</InfoText>
                            </InfoRow>
                          )}
                          {consultation.message && (
                            <MessagePreview>
                              {consultation.message.substring(0, 100)}
                              {consultation.message.length > 100 && '...'}
                            </MessagePreview>
                          )}
                        </CardContent>

                        <CardFooter>
                          <StatusSelect
                            value={consultation.status}
                            onChange={(e) => handleStatusChange(consultation.id, e.target.value)}
                          >
                            <option value="pending">대기중</option>
                            <option value="contacted">연락완료</option>
                            <option value="completed">처리완료</option>
                          </StatusSelect>
                          <ButtonGroup>
                            <ViewButton onClick={() => handleView(consultation)}>
                              상세보기
                            </ViewButton>
                            <S.IconButton $variant="danger" onClick={() => handleDelete(consultation.id)}>
                              <FaTrash />
                            </S.IconButton>
                          </ButtonGroup>
                        </CardFooter>
                      </ConsultationCard>
                    ))}
                  </ConsultationList>
                )}
              </>
            ) : (
              <DetailView>
                <DetailHeader>
                  <BackButton onClick={() => setIsDetailView(false)}>
                    <FaArrowLeft /> 목록으로
                  </BackButton>
                  <StatusBadge $status={selectedConsultation.status}>
                    {statusLabels[selectedConsultation.status]}
                  </StatusBadge>
                </DetailHeader>

                <DetailCard>
                  <DetailSection>
                    <DetailTitle>신청자 정보</DetailTitle>
                    <DetailGrid>
                      <DetailItem>
                        <DetailLabel>이름</DetailLabel>
                        <DetailValue>{selectedConsultation.name}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>연락처</DetailLabel>
                        <DetailValue>{selectedConsultation.phone}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>이메일</DetailLabel>
                        <DetailValue>{selectedConsultation.email || '-'}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>희망 지역</DetailLabel>
                        <DetailValue>{selectedConsultation.location || '-'}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>신청일시</DetailLabel>
                        <DetailValue>{formatDate(selectedConsultation.createdAt)}</DetailValue>
                      </DetailItem>
                    </DetailGrid>
                  </DetailSection>

                  {selectedConsultation.message && (
                    <DetailSection>
                      <DetailTitle>문의 내용</DetailTitle>
                      <MessageBox>{selectedConsultation.message}</MessageBox>
                    </DetailSection>
                  )}

                  <DetailSection>
                    <DetailTitle>처리 상태</DetailTitle>
                    <StatusSelect
                      value={selectedConsultation.status}
                      onChange={(e) => handleStatusChange(selectedConsultation.id, e.target.value)}
                    >
                      <option value="pending">대기중</option>
                      <option value="contacted">연락완료</option>
                      <option value="completed">처리완료</option>
                    </StatusSelect>
                  </DetailSection>

                  <DetailSection>
                    <DetailTitle>관리자 메모</DetailTitle>
                    <NotesTextarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="처리 내역, 통화 내용 등을 메모하세요..."
                      rows="6"
                    />
                    <SaveButton onClick={handleNotesUpdate}>메모 저장</SaveButton>
                  </DetailSection>
                </DetailCard>
              </DetailView>
            )}
          </S.ContentWrapper>
        </S.Container>
      </S.AdminPageWrapper>
    </>
  );
};

// 추가 스타일
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border-left: 4px solid ${props => props.$color};
  text-align: center;
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--color-gray);
  font-weight: 600;
`;

const ConsultationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ConsultationCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  transition: var(--transition-normal);

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f5f9;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ConsultationName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
`;

const StatusBadge = styled.span`
  padding: 0.375rem 0.875rem;
  background: ${props => statusColors[props.$status]};
  color: white;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ConsultationDate = styled.span`
  font-size: 0.9rem;
  color: var(--color-gray);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const InfoIcon = styled.div`
  color: var(--color-primary);
  font-size: 0.9rem;
`;

const InfoText = styled.span`
  font-size: 0.95rem;
  color: var(--color-dark);
`;

const MessagePreview = styled.p`
  color: var(--color-gray);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 0.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const StatusSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-normal);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ViewButton = styled.button`
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-normal);

  &:hover {
    background: #c00010;
  }
`;

const DetailView = styled.div``;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #f1f5f9;
  color: #475569;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-normal);

  &:hover {
    background: #e2e8f0;
  }
`;

const DetailCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  padding: 2rem;
`;

const DetailSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const DetailItem = styled.div``;

const DetailLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DetailValue = styled.div`
  font-size: 1rem;
  color: var(--color-dark);
  font-weight: 500;
`;

const MessageBox = styled.div`
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  line-height: 1.8;
  color: var(--color-dark);
  white-space: pre-wrap;
`;

const NotesTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.6;
  resize: vertical;
  transition: var(--transition-normal);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const SaveButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-normal);

  &:hover {
    background: #c00010;
  }
`;

export default AdminConsultationPage;
