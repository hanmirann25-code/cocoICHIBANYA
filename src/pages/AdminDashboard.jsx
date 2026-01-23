/**
 * ========================================
 * AdminDashboard.jsx - 관리자 대시보드
 * ========================================
 * 공지사항, 매장, 메뉴 관리 통합 대시보드
 */

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaLock, FaBell, FaStore, FaUtensils, FaSignOutAlt, FaChartBar } from 'react-icons/fa';

const ADMIN_PASSWORD = 'coco2026';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const session = sessionStorage.getItem('admin_session');
    if (session === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_session', 'authenticated');
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_session');
    setPassword('');
  };

  const menuCards = [
    {
      id: 'notice',
      title: '공지사항 관리',
      description: '공지사항 등록, 수정, 삭제',
      icon: <FaBell />,
      path: '/admin/notice',
      color: '#f59e0b'
    },
    {
      id: 'store',
      title: '매장 관리',
      description: '매장 정보 등록 및 관리',
      icon: <FaStore />,
      path: '/admin/store',
      color: '#3b82f6'
    },
    {
      id: 'menu',
      title: '메뉴 관리',
      description: '메뉴, 토핑, 사이드 관리',
      icon: <FaUtensils />,
      path: '/admin/menu',
      color: '#ef4444'
    }
  ];

  // 로그인 화면
  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>관리자 로그인 - 코코이찌방야</title>
        </Helmet>
        <LoginWrapper>
          <LoginBox>
            <LoginIcon>
              <FaLock />
            </LoginIcon>
            <LoginTitle>관리자 대시보드</LoginTitle>
            <LoginSubtitle>코코이찌방야 통합 관리 시스템</LoginSubtitle>
            <LoginForm onSubmit={handleLogin}>
              <LoginInput
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <LoginButton type="submit">로그인</LoginButton>
            </LoginForm>
            <LoginHint>개발용 비밀번호: coco2026</LoginHint>
          </LoginBox>
        </LoginWrapper>
      </>
    );
  }

  // 대시보드 화면
  return (
    <>
      <Helmet>
        <title>관리자 대시보드 - 코코이찌방야</title>
      </Helmet>

      <PageWrapper>
        {/* 헤더 */}
        <DashboardHeader>
          <Container>
            <HeaderContent>
              <HeaderLeft>
                <FaChartBar />
                <HeaderTitle>관리자 대시보드</HeaderTitle>
              </HeaderLeft>
              <LogoutButton onClick={handleLogout}>
                <FaSignOutAlt /> 로그아웃
              </LogoutButton>
            </HeaderContent>
          </Container>
        </DashboardHeader>

        {/* 메인 컨텐츠 */}
        <Container>
          <ContentWrapper>
            <WelcomeSection>
              <WelcomeTitle>코코이찌방야 관리 시스템에 오신 것을 환영합니다! 👋</WelcomeTitle>
              <WelcomeText>
                공지사항, 매장, 메뉴를 손쉽게 관리할 수 있습니다.
              </WelcomeText>
            </WelcomeSection>

            <MenuGrid>
              {menuCards.map((card) => (
                <MenuCard
                  key={card.id}
                  onClick={() => navigate(card.path)}
                  $color={card.color}
                >
                  <CardIcon $color={card.color}>{card.icon}</CardIcon>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                  <CardButton>관리하기 →</CardButton>
                </MenuCard>
              ))}
            </MenuGrid>

            {/* 안내 사항 */}
            <InfoSection>
              <InfoTitle>💡 관리 가이드</InfoTitle>
              <InfoList>
                <InfoItem>
                  <InfoBadge>공지사항</InfoBadge>
                  <InfoText>중요 공지는 체크박스로 상단 고정 가능합니다</InfoText>
                </InfoItem>
                <InfoItem>
                  <InfoBadge>매장</InfoBadge>
                  <InfoText>위도/경도는 네이버/카카오맵에서 확인 가능합니다</InfoText>
                </InfoItem>
                <InfoItem>
                  <InfoBadge>메뉴</InfoBadge>
                  <InfoText>카레, 토핑, 사이드, 음료를 개별 관리할 수 있습니다</InfoText>
                </InfoItem>
              </InfoList>
            </InfoSection>

            {/* 저장 방식 안내 */}
            <StorageInfo>
              <StorageTitle>⚙️ 데이터 저장 방식</StorageTitle>
              <StorageText>
                현재 <strong>LocalStorage</strong>를 사용 중입니다. 
                실서버 배포 시에는 각 서비스 파일 (noticeService.js, storeService.js, menuService.js)에서 
                2줄만 수정하면 API로 전환됩니다.
              </StorageText>
            </StorageInfo>
          </ContentWrapper>
        </Container>
      </PageWrapper>
    </>
  );
};

// ========================================
// Styled Components
// ========================================

// 로그인 화면
const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
`;

const LoginBox = styled.div`
  background: white;
  padding: 3rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  width: 100%;
  max-width: 450px;
  text-align: center;
`;

const LoginIcon = styled.div`
  font-size: 3.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`;

const LoginSubtitle = styled.p`
  color: var(--color-gray);
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginInput = styled.input`
  padding: 1rem;
  border: 2px solid var(--color-light-gray);
  border-radius: var(--radius-md);
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
  border-radius: var(--radius-md);
  transition: var(--transition-fast);

  &:hover {
    background: #cc0010;
    transform: translateY(-2px);
  }
`;

const LoginHint = styled.p`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: var(--color-gray);
  padding: 0.75rem;
  background: var(--color-background);
  border-radius: var(--radius-md);
`;

// 대시보드
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%);
`;

const DashboardHeader = styled.div`
  background: white;
  box-shadow: var(--shadow-sm);
  padding: 1.5rem 0;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  color: var(--color-primary);
`;

const HeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--color-gray);
  color: white;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-dark);
  }
`;

const ContentWrapper = styled.div`
  padding: 2rem 0 5rem;
`;

const WelcomeSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const WelcomeTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
`;

const WelcomeText = styled.p`
  font-size: 1.125rem;
  color: var(--color-gray);
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const MenuCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: var(--transition-normal);
  border-top: 4px solid ${props => props.$color};

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.$color};
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  color: var(--color-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CardButton = styled.div`
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
`;

const InfoSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: var(--radius-lg);
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1.5rem;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InfoBadge = styled.span`
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
`;

const InfoText = styled.p`
  color: var(--color-gray);
  flex: 1;
`;

const StorageInfo = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem;
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary);
`;

const StorageTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
`;

const StorageText = styled.p`
  color: var(--color-dark);
  line-height: 1.8;

  strong {
    color: var(--color-primary);
  }
`;

export default AdminDashboard;
