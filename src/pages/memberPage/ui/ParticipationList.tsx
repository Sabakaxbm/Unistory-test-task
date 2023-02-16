import React, { useState } from 'react';
import useSWR from 'swr';
import { IWallet, WalletResponse } from '../../../shared/api/WalletService';
import axios from 'axios';
import styled from 'styled-components';
import useStore from '../../../shared/store';
import CustomTable from '../../../entities/ui/customTable/CustomTable';
import { baseTheme } from '../../../entities/theme';

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

const ParticipationList = () => {
  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [itemsData, setItems] = useState<IWallet[]>([]);
  const limit = 20;

  const { userInfo } = useStore();
  const handeChangePage = (num: number) => {
    setPage(page + num);
  };

  const { isLoading } = useSWR<WalletResponse>(
    `https://new-backend.unistory.app/api/data?page=${page}&perPage=${limit}`,
    fetcher,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        const filter = itemsData.filter((item) => item.id === userInfo.id);
        setMaxPage(data.meta.totalPages);
        if (!filter.length) {
          const itemsWithUserInfo: IWallet[] = [userInfo, ...data.items];
          setItems((prev) => [...prev, ...itemsWithUserInfo]);
          return;
        }
        setItems((prev) => [...prev, ...data.items]);
      }
    }
  );

  const deleteUser = (id: number) => {
    if (id === userInfo.id) return;
    setItems(itemsData.filter((item) => item.id !== id));
  };
  return (
    <Container>
      <Title>Participation listing (enable only for participants)</Title>
      {itemsData.length > 0 && (
        <CustomTable
          wallets={itemsData}
          deleteUser={deleteUser}
          setPage={handeChangePage}
          isLoading={isLoading}
          maxPage={page < maxPage}
        />
      )}
      {isLoading && <h1>Loading</h1>}
    </Container>
  );
};

export default ParticipationList;

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  font-family: ${baseTheme.fonts.bebasNeue};
  color: ${baseTheme.colors.fontWhite};
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
`;
