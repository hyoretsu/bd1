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
import SellerLogin from '@/components/seller-login/SellerLogin';
import SellerSignUpForm from '@/components/seller-login/SellerRegister';

const Content = styled.div`
  z-index: 4;
  margin-top: auto;
  margin-bottom: 20px;
  min-height: 735px;
  width: 100%;
  position: relative; // Define a position relative para que BgGreenContainer possa se posicionar em relação a Content
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  flex-grow: 1;
`;


const BgGreenContainer = styled.div`
  background-image: url(${BgGreen.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute; // Use absolute em vez de fixed
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%; // Define a largura para 100%
  height: 100%; // Define a altura para 100%
  z-index: 5;
`;

const FrostedGlassOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const Popup = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  width: 100vh;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(2, 69, 64, 0.33);
  display: flex;
  position: relative;
  z-index: 15;
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
  padding: 5vh;
`;

const SingupTitle = styled.h2`
  font-family: quicksand, Roboto, sans-serif;
  color: #059B90;
  text-align: center;
`;

const ClientLogin: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <BgGreenContainer />
        <FrostedGlassOverlay />
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
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default ClientLogin;
