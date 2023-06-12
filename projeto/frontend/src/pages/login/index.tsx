import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import BgGreen from '../../bgaux/bggreen.png';
import RetangleLogin from '../../assets/login/RectangleLogin.png';
import LogoPedido from '../../assets/login/LogoPedido.png';
import WelcomeMessage from '../../assets/login/Message.png';
import Login from '@/components/login/Login';
import SingInForm from '@/components/login/Register';

const Content = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: url(${BgGreen.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Popup = styled.div`
  background-color: white;
  width: 75vh;
  height: 80vh;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(2, 69, 64, 0.33);
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const LoginSection = styled.div`
  flex: 1;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-image: url(${RetangleLogin.src});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img.attrs({
  src: LogoPedido.src,
  alt: "Logo Pedido"
})`
  width: 50%;
  height: auto;
  // Add any additional styles for the image here
`;

const WelcomeMessageImage = styled.img.attrs({
  src: WelcomeMessage.src
})`
  width: 50%;
  height: auto;
  // Add any additional styles for the image here
`;

const SignupSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SingupTitle = styled.h2`
  font-family: Roboto, sans-serif;
  color: #059B90;
`;

const LoginPage: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <Popup>
          <LoginSection>
            <LogoImage />
            <WelcomeMessageImage />
            <Login />
          </LoginSection>
          <SignupSection>
            <SingupTitle>CRIE SUA CONTA</SingupTitle>
            <SingInForm />
          </SignupSection>
        </Popup>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default LoginPage;
