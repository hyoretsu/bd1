import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContainer from '../styles/MainContainer.styles';
import BgGreen from '../bgaux/bggreen.png';

const Content = styled.div`
  margin-top: auto;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgGreen.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(1px);
`;

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <h2>AEEE PORRA CARALHO</h2>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Home;
