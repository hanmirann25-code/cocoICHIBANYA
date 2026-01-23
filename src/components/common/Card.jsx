/**
 * ========================================
 * Card.jsx - 재사용 가능한 카드 컴포넌트
 * ========================================
 */

import styled from 'styled-components';

const Card = ({ children, hover = false, ...props }) => {
  return (
    <StyledCard $hover={hover} {...props}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: var(--color-white);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all var(--transition-normal);

  ${props => props.$hover && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }
  `}
`;

export const CardImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--color-light-gray);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }

  ${StyledCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-gray);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const CardPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
`;

export default Card;
