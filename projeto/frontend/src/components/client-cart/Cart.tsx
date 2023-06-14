import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import OrderComponent from './ClientOrder';
import PaymentComponent from './Pagamento';

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


const CartComponent: React.FC = () => {

  const cartItems = [
    {
      id: 1,
      product: 'Sanji Curry',
      quantity: 2,
      unitPrice: 50.00,
      total: 100.00,
    },
    {
      id: 2,
      product: 'Beef Luffy',
      quantity: 1,
      unitPrice: 70.00,
      total: 70.00,
    },
    // Add more items as needed
  ];
 
  return (
    <Container>
      <TextStyle />
      <OrderHistory>
        <HistoryTitle>Carrinho</HistoryTitle>
        <OrderComponent cartItems={cartItems} />
      </OrderHistory>
      <Report>
        <ReportTitle>Pagamento</ReportTitle>
        <PaymentComponent />
      </Report>
    </Container>
  );
};

export default CartComponent;
