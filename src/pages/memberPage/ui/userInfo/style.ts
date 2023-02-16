import styled from 'styled-components';
import { baseTheme } from '../../../../entities/theme';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${baseTheme.fonts.bebasNeue};
  margin-bottom: 22px;
`;
export const Title = styled.div`
  color: ${baseTheme.colors.fontWhite};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 8px;
`;
export const SubTitle = styled.div`
  color: ${baseTheme.colors.fontOrange};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
`;
