import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faGithub,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: grey;
    font-size: 12px;
  }

  .icon {
    margin-right: 10px;
  }
`;

const GoogleButton = () => {
  return (
    <ButtonWrapper
      bgColor='#fff'
      color='#000'
      hoverBgColor='#eee'
      activeBgColor='#ddd'
    >
      <FontAwesomeIcon icon={faGoogle} className='icon' />
      Log in with Google
    </ButtonWrapper>
  );
};
const GithubButton = () => {
  return (
    <ButtonWrapper
      bgColor='#000'
      color='#fff'
      hoverBgColor='#222'
      activeBgColor='#333'
    >
      <FontAwesomeIcon icon={faGithub} className='icon' />
      Log in with GitHub
    </ButtonWrapper>
  );
};

const FacebookButton = () => {
  return (
    <ButtonWrapper
      bgColor='#3b5998'
      color='#fff'
      hoverBgColor='#2f477a'
      activeBgColor='#293e69'
    >
      <FontAwesomeIcon icon={faFacebook} className='icon' />
      Log in with Facebook
    </ButtonWrapper>
  );
};

export { GoogleButton, GithubButton, FacebookButton };
