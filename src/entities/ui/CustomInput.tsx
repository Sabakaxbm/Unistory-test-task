import React from 'react';
import styled from 'styled-components';
import { baseTheme } from '../theme';

interface CustomInputProps {
  type: string;
  placeholder: string;
  label?: string;
  onChange: (name: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  name: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  label,
  onChange,
  value,
  name
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e)}
        value={value}
      />
      ;
    </Wrapper>
  );
};

export default CustomInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

const Input = styled.input`
  background: none;
  border: 1px solid ${baseTheme.colors.fontWhite};
  border-radius: 30px;
  padding: 12px 18px;
  color: ${baseTheme.colors.fontWhite};
  transition: 0.2s;
  &:focus {
    outline: none;
    border-color: ${baseTheme.colors.active};
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-family: ${baseTheme.fonts.bebasNeue};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: ${baseTheme.colors.fontWhite};
`;
