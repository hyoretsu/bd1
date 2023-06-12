import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

import MainContainer from '../styles/MainContainer.styles';
import BgGreen from '../bgaux/bggreen.png';

const Content = styled.div`
  z-index: 1;
  margin-top: auto;
  margin-bottom: 20px;
  height: 100vh;
  max-height: 735px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${BgGreen.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const TopHomeDiv = styled.div`
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10%;
  height: auto;
  width: 100%;
  margin-top: 6.5%;
`;

const SellerContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SellerPageDiv = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const SellerTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const SellerDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

const Seller: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <TopHomeDiv>
          {/* Reproduza o conteúdo do TopHomeDiv aqui */}
        </TopHomeDiv>
        <SellerContentDiv>
          <SellerPageDiv>
            <SellerTitle>Nome do Vendedor</SellerTitle>
            <SellerDescription>
              Descrição do vendedor e seus produtos/serviços.
            </SellerDescription>
          </SellerPageDiv>
        </SellerContentDiv>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Seller;
