import React from 'react';
import styled from 'styled-components';
import { baseTheme } from '../theme';

interface CustomButtonProps {
  text: string;
  disable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: 'max' | number;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, width, disable }) => {
  return (
    <Button disabled={disable} width={width} onClick={(event) => onClick && onClick(event)}>
      {text}
    </Button>
  );
};

export default CustomButton;

const Button = styled.button<{ width?: 'max' | number; disabled?: boolean }>`
  padding: 10px 24px;
  align-items: center;
  border: none;
  justify-content: center;
  width: ${({ width }) => (width === 'max' ? '100%' : `${width}px`)};
  background: ${baseTheme.colors.active};
  color: ${baseTheme.colors.fontWhite};
  border-radius: 30px;
  font-family: ${baseTheme.fonts.bebasNeue};
  font-size: 18px;
  line-height: 120%;
  transition: 0.2s;
  cursor: ${({ disabled }) => (disabled ? 'arrow' : 'pointer')};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
  }
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
