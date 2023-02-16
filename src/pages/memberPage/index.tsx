import React from 'react';
import styled from 'styled-components';
import ParticipationList from './ui/ParticipationList';
import UserInfo from './ui/userInfo/UserInfo';
import BetaRegistration from '../../entities/ui/betaRegistration/BetaRegistration';

const MemberPage = () => {
  return (
    <Container>
      <div>
        <BetaRegistration />
        <UserInfo />
      </div>
      <ParticipationList />
    </Container>
  );
};

export default MemberPage;

const Container = styled.div`
  margin-top: 108px;
  display: flex;
  justify-content: space-between;
`;
