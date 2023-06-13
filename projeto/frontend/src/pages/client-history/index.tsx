import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import Dashboard from '@/components/client-history/Dasboard';

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

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <Dashboard />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Home;
