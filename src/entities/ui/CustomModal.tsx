import React, { useEffect } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../theme';
import CustomButton from './CustomButton';
import useStore from '../../shared/store';

const CustomModal = () => {
  const { isModal, setIsModal, address } = useStore();
  const checkAddress = () => {
    if (address) setIsModal(true);
  };
  useEffect(() => {
    checkAddress();
  }, [address]);
  return (
    <>
      {!isModal && (
        <Modal>
          <ModalContainer>
            <Title>Metamask extention</Title>
            <SubTitle>
              To work with our application, you have to install the
              <CustomLink href={'https://metamask.io/download/'}>
                Metamask browser extension
              </CustomLink>
            </SubTitle>
            <CustomButton text={'Skip this step'} onClick={() => setIsModal(true)} />
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};

export default CustomModal;

const ModalContainer = styled.div`
  padding: 40px 50px;
  background-color: #262628;
  font-family: ${baseTheme.fonts.bebasNeue};
  color: ${baseTheme.colors.fontOrange};
  z-index: 1001;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: rgba(23, 23, 23, 0.81);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  margin-bottom: 29px;
`;

const SubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: ${baseTheme.colors.fontWhite};
  margin-bottom: 90px;
`;

const CustomLink = styled.a`
  padding-left: 5px;
  color: ${baseTheme.colors.fontOrange};
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  text-decoration: none;
`;
