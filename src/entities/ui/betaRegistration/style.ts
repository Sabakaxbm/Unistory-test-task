import styled from 'styled-components';
import { baseTheme } from '../../theme';

export const Container = styled.div`
  max-width: 400px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 18px;
  font-family: ${baseTheme.fonts.bebasNeue};
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: ${baseTheme.colors.fontOrange};
`;

export const SubTitle = styled.div`
  margin-bottom: 36px;
  font-family: ${baseTheme.fonts.avenirNextCyrMedium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: ${baseTheme.colors.fontWhite};
`;
