/**
 * ========================================
 * Footer.jsx - 하단 푸터 컴포넌트
 * ========================================
 * 회사 정보, 링크, 저작권 정보 표시
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          {/* 회사 정보 */}
          <FooterSection>
            <FooterTitle>CoCo ICHIBANYA</FooterTitle>
            <FooterText>
              세계 No.1 카레 전문점<br />
              코코이찌방야가 여러분을 초대합니다
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          {/* 메뉴 링크 */}
          <FooterSection>
            <FooterTitle>메뉴</FooterTitle>
            <FooterLinks>
              <FooterLink to="/menu">메뉴 소개</FooterLink>
              <FooterLink to="/simulator">나만의 카레</FooterLink>
              <FooterLink to="/store">매장 찾기</FooterLink>
            </FooterLinks>
          </FooterSection>

          {/* 브랜드 정보 */}
          <FooterSection>
            <FooterTitle>브랜드</FooterTitle>
            <FooterLinks>
              <FooterLink to="/brand">브랜드 소개</FooterLink>
              <FooterLink to="/franchise">창업 안내</FooterLink>
            </FooterLinks>
          </FooterSection>

          {/* 고객 지원 */}
          <FooterSection>
            <FooterTitle>고객 지원</FooterTitle>
            <FooterLinks>
              <FooterLink to="/notice">공지사항</FooterLink>
              <FooterLink to="/faq">자주 묻는 질문</FooterLink>
            </FooterLinks>
            <ContactInfo style={{ marginTop: '1rem' }}>
              <ContactItem>
                <FaPhone />
                <span>1588-0000</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>info@cocoichibanya.co.kr</span>
              </ContactItem>
            </ContactInfo>
            <FooterText style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
              평일 09:00 - 18:00<br />
              (주말 및 공휴일 휴무)
            </FooterText>
          </FooterSection>
        </FooterTop>

        {/* 하단 저작권 */}
        <FooterBottom>
          <CompanyInfo>
            <p>(주)농심 | 대표이사: 박준 | 사업자등록번호: 118-81-00433</p>
            <p>서울특별시 동작구 여의대방로 112 | 통신판매업신고: 2021-서울동작-0001</p>
          </CompanyInfo>
          <Copyright>
            © {new Date().getFullYear()} CoCo ICHIBANYA Korea. All Rights Reserved.
          </Copyright>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

// ========================================
// Styled Components
// ========================================

const FooterWrapper = styled.footer`
  background: var(--color-dark);
  color: rgba(255, 255, 255, 0.8);
  margin-top: auto;
`;

const FooterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem 1.5rem;
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h4`
  color: var(--color-white);
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    padding-left: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 1.25rem;
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-primary);
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  svg {
    color: var(--color-primary);
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

const CompanyInfo = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;

  p {
    margin-bottom: 0.25rem;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

export default Footer;
