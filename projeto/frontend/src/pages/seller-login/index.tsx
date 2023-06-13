import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import BgGreen from '../../bgaux/bggreen.png';
import RetangleLogin from '../../assets/login/RectangleLogin.png';
import LogoPedido from '../../assets/login/LogoPedido.png';
import WelcomeMessage from '../../assets/login/Message.png';
import ArrowBack from '../../assets/login/arrow-back.png';
import Login from '@/components/client-login/Login';
import SingInForm from '@/components/client-login/Register';
import SellerLogin from '@/components/seller-login/SellerLogin';
import SellerSignUpForm from '@/components/seller-login/SellerRegister';

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
  width: 100vh;
  height: 85vh;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(2, 69, 64, 0.33);
  display: flex;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
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

const ArrowBackImage = styled.img.attrs({
  src: ArrowBack.src,
  alt: "Voltar"
})`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
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

const ClientLogin: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Popup>
        <ArrowBackImage />
        <LoginSection>
          <LogoImage />
          <WelcomeMessageImage />
          <SellerLogin />
        </LoginSection>
        <SignupSection>
          <SingupTitle>SEJA NOSSO PARCEIRO</SingupTitle>
          <SellerSignUpForm />
        </SignupSection>
      </Popup>
      <Content>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default ClientLogin;
