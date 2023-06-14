import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import OrderHistoryComponent from './OrderHistory';

const TextStyle = createGlobalStyle`
  body {
    font-family: quicksand, 'Roboto', sans-serif;
  }
  * {
    color: #004742;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  overflow-y: auto;
`;

const OrderHistory = styled.div`
  margin-left: 10%;
  flex: 1;
  padding: 20px;
`;

const HistoryTitle = styled.h2`
  border-bottom: 1px solid #C8C9CB;
  padding-bottom: 10px;
`

const Report = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 10%;
`;

const ReportTitle = styled.h2`
  border-bottom: 1px solid #C8C9CB;
  padding-bottom: 10px;
`;

const ReportContent = styled.div`
  margin-top: 16px;
  line-height: 1.5;
  background-color: white;
  padding: 10px;
  border-radius: 9px;
  color: black;
  font-weight: bold;

  ul {
    margin-left: 16px;
    list-style-type: none; 
    padding: 0; 
  }
`;

interface SellerCount {
  [key: string]: number;
}

const Dashboard: React.FC = () => {

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
  
  const totalOrders = orderHistory.length;
  
  const totalSum = orderHistory.reduce((sum, order) => sum + order.total, 0);
  
  const sellers = orderHistory.map((order) => order.sellername);
  const mostCommonSeller: SellerCount = sellers.reduce((acc: SellerCount, seller) => {
    if (!acc[seller]) {
      acc[seller] = 1;
    } else {
      acc[seller] += 1;
    }
    return acc;
  }, {});
 
  return (
    <Container>
      <TextStyle />
      <OrderHistory>
        <HistoryTitle>Histórico de Pedidos</HistoryTitle>
        <OrderHistoryComponent />
      </OrderHistory>
      <Report>
        <ReportTitle>Curiosidades</ReportTitle>
        <ReportContent>
          <ul>
            <li>Total de Pedidos: {totalOrders}</li>
            <li>Total Gasto: {totalSum}</li>
            <li>Vendedor Favorito: {Object.entries(mostCommonSeller)[0]?.[0]}</li>
          </ul>
        </ReportContent>
      </Report>
    </Container>
  );
};

export default Dashboard;
