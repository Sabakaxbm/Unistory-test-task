import React, { useState } from 'react';
import CustomInput from '../../../../entities/ui/CustomInput';
import CustomButton from '../../../../entities/ui/CustomButton';
import useStore from '../../../../shared/store';
import { useNavigate } from 'react-router-dom';
import { baseTheme } from '../../../../entities/theme';
import styled from 'styled-components';

const initialState = {
  username: '',
  email: ''
};
const FormRegistration = () => {
  const [inputs, setInputs] = useState(initialState);
  const [error, setError] = useState(false);
  const { setUserInfo, setIsAuth } = useStore();
  const { address } = useStore();
  const handleChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!address) {
      setError(true);
      return;
    }
    setUserInfo({ ...inputs, address, id: 2131232134 });
    setIsAuth(true);
    navigate('/member');
  };

  return (
    <form>
      <CustomInput
        value={inputs.username}
        placeholder={'We will display your name in participation list '}
        type={'text'}
        label={'Name'}
        name={'username'}
        onChange={handleChange}
      />
      <CustomInput
        value={inputs.email}
        placeholder={'We will display your name in participation list '}
        type={'text'}
        label={'Email'}
        name={'email'}
        onChange={handleChange}
      />
      {error && <ErrorMessage>No authorized Metamask</ErrorMessage>}
      <CustomButton text={'Get early access'} onClick={handleClick} />
    </form>
  );
};

export default FormRegistration;

const ErrorMessage = styled.div`
  color: ${baseTheme.colors.active};
  font-family: ${baseTheme.fonts.bebasNeue};
  font-size: 26px;
  margin-bottom: 15px;
`;
