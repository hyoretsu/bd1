import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import KartComponent from '@/components/client-kart/Kart';

const Content = styled.div`
  margin-top: auto;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(70, 181, 174, 0.3);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(1px);
  flex: 1;
  overflow-y: auto;
`;

const ClientKart: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <KartComponent />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default ClientKart;
