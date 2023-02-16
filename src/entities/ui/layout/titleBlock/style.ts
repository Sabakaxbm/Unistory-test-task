import styled from 'styled-components';
import { baseTheme } from '../../../theme';

export const ImageWrapper = styled.div`
  width: 327px;
  height: 322px;
  position: absolute;
  left: 660px;
  top: 0;
  img {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  svg {
    z-index: -1;
    top: -125px;
    left: -120px;
    position: absolute;
  }
`;

export const MixCircle = styled.div`
  width: 100%;
  height: 100%;
  background: #e75626;
  border-radius: 100%;
  z-index: 5;
  position: absolute;
  mix-blend-mode: darken;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-family: ${baseTheme.fonts.bebasNeue};
    font-style: normal;
    font-weight: 500;
    font-size: 120px;
    line-height: 120%;
    position: relative;
    z-index: 5;
  }
`;
export const SubTitle = styled.div`
  margin-top: 40px;
  max-width: 420px;
  padding-right: 15px;
  font-family: ${baseTheme.fonts.avenirNextCyrMedium};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`;

export const Content = styled.div`
  color: white;
  position: relative;
  margin-top: 200px;
`;

export const TextNoColor = styled.span`
  color: #fff;
  -webkit-text-stroke: 1px #fff;
  -webkit-text-fill-color: transparent;
  position: relative;
  margin-top: 200px;
`;

export const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${baseTheme.fonts.bebasNeue};
  color: ${baseTheme.colors.fontWhite};
  letter-spacing: 1px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 26px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  padding: 8px;
  &:not(:last-child) {
    border-bottom: 2px solid ${baseTheme.colors.darkGrey};
  }
`;

export const ItemTitle = styled.div`
  font-size: 28px;
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: ${baseTheme.colors.fontOrange};
`;
