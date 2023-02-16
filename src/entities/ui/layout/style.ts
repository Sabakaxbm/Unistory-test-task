import styled from 'styled-components';
import { baseTheme } from '../../theme';

export const Wrapper = styled.nav`
  max-width: 1312px;
  margin: 0 auto;
`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  max-height: 60px;
`;
export const Logo = styled.div`
  padding: 12px 80px;
  align-items: center;
  justify-content: center;
  color: ${baseTheme.colors.fontWhite};
  background-color: ${baseTheme.colors.darkGrey};
  border: 1px dashed ${baseTheme.colors.grey};
  font-family: ${baseTheme.fonts.bebasNeue};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
`;
export const AuthButton = styled.div`
  padding: 10px 24px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color: ${baseTheme.colors.fontWhite};
  background-color: ${baseTheme.colors.active};
  font-family: ${baseTheme.fonts.bebasNeue};
  font-size: 18px;
  line-height: 120%;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Address = styled.div`
  color: ${baseTheme.colors.fontOrange};
  font-family: ${baseTheme.fonts.avenirNextCyrMedium};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
`;
