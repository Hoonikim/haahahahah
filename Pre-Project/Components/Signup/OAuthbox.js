//import { GoogleBtn } from '../common/Buttons';
import styled from 'styled-components';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
// import axios from 'axios';

const OAuthBoxStyle = styled.div`
  .oauth-box {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 5px;
  }
`;

const OAuthBox = () => {
  const onSuccess = res => {
    console.log(res);
    // axios
    //   .get('`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;')
    //   .then(response => {
    //     const accessToken = response.credential;

    //     // JWT를 로컬 스토리지에 저장
    //     localStorage.setItem('accessToken', accessToken);

    //     // 로그인 성공시 리다이렉션
    //     window.location.href = '/';
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <OAuthBoxStyle>
        <div className='oauth-box'>
          {/* <GoogleBtn onClick={onSuccess} /> */}
          {/* <GithubBtn onClick={loginRequestHandler} /> */}
          <React.Fragment>
            <GoogleOAuthProvider clientId='444069027831-csa77324h47k7lkeh7afopv97n35081t.apps.googleusercontent.com'>
              <GoogleLogin
                buttonText='Login with Google'
                //onClick={onSuccess}
                onSuccess={onSuccess}
                onFailure={() => {
                  console.log('error');
                }}
              />
            </GoogleOAuthProvider>
          </React.Fragment>
        </div>
      </OAuthBoxStyle>
    </>
  );
};

export default OAuthBox;
