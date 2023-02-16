import styled from 'styled-components';
import { baseTheme } from '../../theme';

export const Title = styled.div`
  margin-bottom: 20px;
  font-family: ${baseTheme.fonts.bebasNeue};
  color: ${baseTheme.colors.fontWhite};
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
`;

export const Table = styled.div`
  width: 800px;
`;
export const TableHeader = styled.div`
  padding-right: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: ${baseTheme.fonts.bebasNeue};
  color: ${baseTheme.colors.fontWhite};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
`;
export const TableItem = styled.div`
  border-bottom: 1px solid ${baseTheme.colors.grey};
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const TableBody = styled.div`
  max-height: 550px;
  overflow: auto;
  padding-right: 28px;

  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${baseTheme.colors.darkGrey};
    border-radius: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${baseTheme.colors.active};
    border-radius: 2px;
  }
  cursor: pointer;
`;

export const TableBodyRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  font-family: ${baseTheme.fonts.avenirNextCyrMedium};
  color: ${baseTheme.colors.fontWhite};
  &:hover {
    color: ${baseTheme.colors.active};
  }
`;

export const DeleteButton = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    rect {
      fill: ${baseTheme.colors.active};
    }
  }
`;
