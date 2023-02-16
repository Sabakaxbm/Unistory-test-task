import React from 'react';
import FormRegistration from './ui/formRegistration/FormRegistration';
import styled from 'styled-components';
import BetaRegistration from '../../entities/ui/betaRegistration/BetaRegistration';
import CustomModal from '../../entities/ui/CustomModal';

const MainPage = () => {
  return (
    <>
      <Container>
        <BetaRegistration />
        <FormRegistration />
        <CustomModal />
      </Container>
    </>
  );
};

export default MainPage;

const Container = styled.div`
  margin-top: 108px;
  max-width: 400px;
`;
