/**
 * ========================================
 * AdminStyles.js - 관리자 페이지 공통 스타일
 * ========================================
 * 모든 관리자 페이지에서 사용하는 통일된 스타일
 */

import styled from 'styled-components';

// ========================================
// 공통 레이아웃
// ========================================

export const AdminPageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%);
  padding-top: 80px;
`;

export const AdminHeader = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e2e8f0;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
  color: white;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #475569 0%, #334155 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeaderStats = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const StatBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-weight: 600;
  color: var(--color-dark);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  span {
    color: var(--color-primary);
    font-size: 1.25rem;
  }
`;

// ========================================
// 컨텐츠 영역
// ========================================

export const ContentWrapper = styled.div`
  padding-bottom: 4rem;
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    color: var(--color-dark);

    &::placeholder {
      color: #94a3b8;
    }
  }

  svg {
    color: #94a3b8;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 0, 18, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.25rem;
  }
`;

// ========================================
// 그리드/리스트
// ========================================

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--color-primary);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  flex: 1;
  line-height: 1.4;
`;

export const CardBadge = styled.span`
  padding: 0.375rem 1rem;
  background: ${props => props.$color || '#3b82f6'};
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-gray);
  font-size: 0.95rem;

  svg {
    color: var(--color-primary);
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`;

export const IconButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem;
  background: ${props => props.$variant === 'danger' ? '#fee2e2' : '#eff6ff'};
  color: ${props => props.$variant === 'danger' ? '#dc2626' : '#2563eb'};
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$variant === 'danger' ? '#fecaca' : '#dbeafe'};
    transform: scale(1.02);
  }

  svg {
    font-size: 1rem;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 6rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  svg {
    font-size: 4rem;
    color: #cbd5e1;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-dark);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-gray);
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// ========================================
// 탭 메뉴
// ========================================

export const TabMenu = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: white;
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
  }
`;

export const Tab = styled.button`
  flex: 1;
  min-width: 150px;
  padding: 1rem 1.5rem;
  background: ${props => props.$active ? 'linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'var(--color-dark)'};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%)' 
      : '#f1f5f9'};
  }
`;

export default {
  AdminPageWrapper,
  AdminHeader,
  Container,
  HeaderContent,
  HeaderLeft,
  BackButton,
  HeaderTitle,
  HeaderStats,
  StatBadge,
  ContentWrapper,
  ActionBar,
  SearchBar,
  PrimaryButton,
  CardGrid,
  Card,
  CardHeader,
  CardTitle,
  CardBadge,
  CardContent,
  InfoRow,
  CardFooter,
  IconButton,
  EmptyState,
  TabMenu,
  Tab
};
