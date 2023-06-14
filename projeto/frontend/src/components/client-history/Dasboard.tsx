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
`;

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
  margin-bottom: 10px;

  ul {
    margin-left: 16px;
    list-style-type: none; 
    padding: 0; 
  }
`;

interface SellerCount {
  [key: string]: number;
}

interface UserData {
  [key: string]: string;
}

interface DashboardProps {
  orderHistory: {
    id: number;
    date: string;
    status: string;
    items: { name: string; quantity: number }[];
    total: number;
    image: string;
    sellername: string;
  }[];
  userData: UserData;
}

const Dashboard: React.FC<DashboardProps> = ({ orderHistory, userData }) => {
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
        <OrderHistoryComponent orderHistory={orderHistory} />
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
        <ReportTitle>Dados Cadastrais</ReportTitle>
        <ReportContent>
          <ul>
            {Object.entries(userData).map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>
        </ReportContent>
      </Report>
    </Container>
  );
};

export default Dashboard;
