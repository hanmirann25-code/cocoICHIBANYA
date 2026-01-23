/**
 * ========================================
 * Button.jsx - 재사용 가능한 버튼 컴포넌트
 * ========================================
 */

import styled from 'styled-components';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  ...props 
}) => {
  return (
    <StyledButton 
      $variant={variant} 
      $size={size} 
      $fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: var(--font-primary);
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all var(--transition-normal);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  /* 크기 변형 */
  ${props => {
    switch(props.$size) {
      case 'small':
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'large':
        return `
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
        `;
      default:
        return `
          padding: 0.75rem 2rem;
          font-size: 1rem;
        `;
    }
  }}

  /* 스타일 변형 */
  ${props => {
    switch(props.$variant) {
      case 'secondary':
        return `
          background: var(--color-white);
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
          
          &:hover:not(:disabled) {
            background: var(--color-primary);
            color: var(--color-white);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--color-dark);
          border: 2px solid var(--color-dark);
          
          &:hover:not(:disabled) {
            background: var(--color-dark);
            color: var(--color-white);
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: var(--color-dark);
          
          &:hover:not(:disabled) {
            background: var(--color-light-gray);
          }
        `;
      default: // primary
        return `
          background: var(--gradient-primary);
          color: var(--color-white);
          box-shadow: var(--shadow-md);
          
          &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
        `;
    }
  }}

  width: ${props => props.$fullWidth ? '100%' : 'auto'};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export default Button;
