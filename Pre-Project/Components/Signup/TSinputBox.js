import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import Captcha from './Captcha';
import GeneralBtn from '../common/Buttons';
import { ReactComponent as ErrorSVG } from '../assets/icons/error.svg';

const InputboxStyle = styled.div`
  .signup-form__text {
    border: 1px solid black;
    border-radius: 5px;
    height: 35px; 
    width: 100%;
    margin: 5px 0;
  }
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .Password-message {
    white-space: pre-line;
    margin-top: 20px;
    margin-bottom: 30px;
    color: grey;
    font-size: 13px;
  }
`;
const ErrorMessages = styled.div`
  margin-bottom: 13px;
  color: red;
`;
const ErrorPosition = styled.svg`
  position: absolute;
  top: 14px;
  left: 230px;
  @media (max-width: 640px) {
    position: absolute;
    left: 190px;
  }
`;

const Inputbox = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInput = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      setErrorMessages({ ...errorMessages, email: '' });
    } else if (name === 'password') {
      setPassword(value);
      setErrorMessages({ ...errorMessages, password: '' });
    } else if (name === 'displayname') {
      setname(value);
      setErrorMessages({ ...errorMessages, name: '' });
    }
  };

  const handleClick = async () => {
    const nameError = !name.trim() ? 'Display name cannot be empty' : '';
    const emailError = !email.trim() ? 'Email cannot be empty' : '';
    const passwordError =
      password.length < 8 ? 'Password must be at least 8 characters long' : '';
    setErrorMessages({
      email: emailError,
      password: passwordError,
      name: nameError
    });

    // 입력값이 유효한 경우에만 HTTP request를 보냅니다.
    if (!nameError && !emailError && !passwordError) {
      try {
        const response = await axios.post('/user', {
          name,
          email,
          password
        });
        if (response.status === 201) {
          const location = response.headers.location;
          console.log(`User created at ${location}`);
        } else {
          setErrorMessages({
            ...errorMessages,
            password: `An error occurred while creating user. Please try again later.`
          });
        }
      } catch (error) {
        console.error(error);
        setErrorMessages({
          ...errorMessages,
          password:
            'An error occurred while creating user. Please try again later.'
        });
      }
    }
  };

  return (
    <InputboxStyle>
      <h1>Sign Up</h1>
      <label htmlFor='displayname'>Display Name</label>
      <input
        type='text'
        className='signup-form__text'
        name='displayname'
        id='displayname'
        value={name}
        onChange={handleInput}
      />
      {errorMessages.name && (
        <ErrorMessages>{errorMessages.name}</ErrorMessages>
      )}
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        className='signup-form__text'
        name='email'
        id='email'
        value={email}
        onChange={handleInput}
      />
      {errorMessages.email && (
        <ErrorMessages>{errorMessages.email}</ErrorMessages>
      )}
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        className='signup-form__text'
        name='password'
        id='password'
        value={password}
        onChange={handleInput}
      />
      {errorMessages.password && (
        <ErrorMessages>
          {errorMessages.password}
          <ErrorPosition>
            <ErrorSVG />
          </ErrorPosition>
        </ErrorMessages>
      )}
      <p className='Password-message'>
        Passwords must be at least 8 characters long.
      </p>
      <Captcha />
      <GeneralBtn onClick={handleClick}>Sign Up</GeneralBtn>
    </InputboxStyle>
  );
};

export default Inputbox;
