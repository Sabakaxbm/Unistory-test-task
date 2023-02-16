import React from 'react';
import * as S from './style';
import CustomButton from '../../../../entities/ui/CustomButton';
import useStore from '../../../../shared/store';

const UserInfo = () => {
  const { userInfo } = useStore();

  return (
    <>
      <S.Item>
        <S.Title>Name</S.Title>
        <S.SubTitle>{userInfo.username}</S.SubTitle>
      </S.Item>
      <S.Item>
        <S.Title>Email</S.Title>
        <S.SubTitle>{userInfo.email}</S.SubTitle>
      </S.Item>
      <CustomButton text={'List me to the table'} disable={true} />
    </>
  );
};

export default UserInfo;
