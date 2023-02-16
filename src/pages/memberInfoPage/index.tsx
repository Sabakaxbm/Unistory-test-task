import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWallet } from '../../shared/api/WalletService';
import useSWR from 'swr';
import axios from 'axios';
import styled from 'styled-components';
import { baseTheme } from '../../entities/theme';

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

const MemberInfoPage = () => {
  const params = useParams();
  const [userInfo, setUserInfo] = useState<IWallet>();

  const { isLoading } = useSWR<IWallet>(
    `https://new-backend.unistory.app/api/data/id/${params.id}`,
    fetcher,
    {
      onSuccess: (data) => {
        setUserInfo({ ...data });
      }
    }
  );

  return (
    <Container>
      <Title>Personal data</Title>
      {isLoading && <h2>Loading</h2>}
      {userInfo && (
        <>
          <ItemTitle>Name</ItemTitle>
          <ItemInfo>{userInfo.username}</ItemInfo>
          <ItemTitle>Email</ItemTitle>
          <ItemInfo>{userInfo.email}</ItemInfo>
          <ItemTitle>Address</ItemTitle>
          <ItemInfo>{userInfo.address}</ItemInfo>
        </>
      )}
    </Container>
  );
};

export default MemberInfoPage;

const Container = styled.div`
  font-family: ${baseTheme.fonts.bebasNeue};
  color: ${baseTheme.colors.fontWhite};
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 120%;
  margin-bottom: 48px;
`;

const ItemTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 8px;
`;
const ItemInfo = styled.p`
  color: ${baseTheme.colors.fontOrange};
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  margin-bottom: 22px;
`;
