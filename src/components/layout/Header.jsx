/**
 * ========================================
 * Header.jsx - 상단 헤더 컴포넌트
 * ========================================
 * 네비게이션 메뉴와 로고를 포함한 헤더
 * 스크롤 시 스타일 변경 기능 포함
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    { path: '/menu', label: 'MENU', desc: '메뉴' },
    { path: '/simulator', label: 'CUSTOMIZE', desc: '나만의 카레' },
    { path: '/store', label: 'STORE', desc: '매장찾기' },
    { path: '/brand', label: 'BRAND', desc: '브랜드' },
    { path: '/franchise', label: 'FRANCHISE', desc: '창업안내' },
    { path: '/notice', label: 'NOTICE', desc: '공지사항' },
    { path: '/faq', label: 'FAQ', desc: '자주 묻는 질문' }
  ];

  return (
    <HeaderWrapper $scrolled={scrolled}>
      <HeaderContainer>
        {/* 로고 */}
        <Logo to="/">
          <LogoText>
            CoCo<br />
            <LogoSubText>ICHIBANYA</LogoSubText>
          </LogoText>
        </Logo>

        {/* 데스크탑 네비게이션 */}
        <Nav>
          {menuItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              $active={location.pathname === item.path}
            >
              <NavLabel>{item.label}</NavLabel>
              <NavDesc>{item.desc}</NavDesc>
            </NavItem>
          ))}
        </Nav>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        {/* 모바일 메뉴 */}
        <MobileMenu $open={mobileMenuOpen}>
          {menuItems.map((item) => (
            <MobileNavItem
              key={item.path}
              to={item.path}
              $active={location.pathname === item.path}
            >
              {item.desc}
            </MobileNavItem>
          ))}
        </MobileMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

// ========================================
// Styled Components
// ========================================

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background: ${props => props.$scrolled
    ? 'rgba(255, 255, 255, 0.98)'
    : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.$scrolled
    ? '0 2px 20px rgba(0,0,0,0.1)'
    : '0 2px 10px rgba(0,0,0,0.05)'};
  transition: all var(--transition-normal);
`;

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  z-index: 1001;
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1.2;
  letter-spacing: -0.5px;
`;

const LogoSubText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-dark);
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  padding: 0.5rem 0;
  transition: var(--transition-fast);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const NavLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-dark);
  letter-spacing: 0.5px;
`;

const NavDesc = styled.span`
  font-size: 0.75rem;
  color: var(--color-gray);
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: var(--color-dark);
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: var(--color-white);
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    padding: 5rem 2rem 2rem;
    gap: 2rem;
    transform: translateX(${props => props.$open ? '0' : '100%'});
    visibility: ${props => props.$open ? 'visible' : 'hidden'};
    transition: transform var(--transition-normal), visibility 0s ${props => props.$open ? '0s' : '0.3s'};
    z-index: 1000;
  }
`;

const MobileNavItem = styled(Link)`
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-dark)'};
  padding: 1rem;
  border-bottom: 1px solid var(--color-light-gray);
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    padding-left: 1.5rem;
  }
`;

export default Header;
