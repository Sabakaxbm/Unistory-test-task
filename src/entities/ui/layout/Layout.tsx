import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import * as S from './style';
import { useEthers } from '@usedapp/core';
import useStore from '../../../shared/store';
import TitleBlock from './titleBlock/TitleBlock';

const Layout = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  const { address, setAddress } = useStore();

  useEffect(() => {
    if (account && !address) {
      setAddress(account);
    }
  }, [account]);

  const sliceAddress = () => {
    return account?.slice(0, 19) + '...';
  };

  return (
    <>
      <S.Wrapper>
        <nav>
          <S.ContainerNav>
            <S.Logo>Logo</S.Logo>
            {account ? (
              <S.Address onClick={deactivate}>{sliceAddress()}</S.Address>
            ) : (
              <S.AuthButton onClick={() => activateBrowserWallet()}>Connect Metamask</S.AuthButton>
            )}
          </S.ContainerNav>
        </nav>
        <TitleBlock />
        <Outlet />
      </S.Wrapper>
    </>
  );
};

export default Layout;
