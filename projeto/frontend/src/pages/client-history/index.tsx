import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import BgGreen from '../../bgaux/bggreen.png';
import Dashboard from '@/components/client-history/Dasboard';

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
  flex: 1;
  overflow-y: auto;
`;

const ClientHistory: React.FC = () => {
  const orderHistory = [
    {
      id: 1,
      date: '2023-06-01',
      status: 'Delivered',
      items: [
        { name: 'Sanji Curry', quantity: 2 },
        { name: 'Beef Luffy', quantity: 1 },
      ],
      total: 100,
      image:
        'https://resize.cdn.otakumode.com/ex/1200.680/u/7742006de8354858a9929f0a90167be0.jpg',
      sellername: 'Baratie',
    },
    {
      id: 2,
      date: '2023-05-28',
      status: 'Canceled',
      items: [{ name: 'Sanji Curry', quantity: 3 }],
      total: 150,
      image:
        'https://resize.cdn.otakumode.com/ex/1200.680/u/7742006de8354858a9929f0a90167be0.jpg',
      sellername: 'Baratie',
    },
    {
      id: 3,
      date: '2023-05-25',
      status: 'In Progress',
      items: [
        { name: 'Sanji Curry', quantity: 1 },
        { name: 'Beef Luffy', quantity: 2 },
      ],
      total: 200,
      image:
        'https://resize.cdn.otakumode.com/ex/1200.680/u/7742006de8354858a9929f0a90167be0.jpg',
      sellername: 'Baratie',
    },
  ];

  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    cpf: "123.456.789-00",
    phone: "(123) 456-7890",
    favoriteTeam: "Real Madrid",
    birthCity: "New York"
  };
  

  return (
    <MainContainer>
      <Header />
      <Content>
        <Dashboard orderHistory={orderHistory} userData={userData} />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default ClientHistory;
