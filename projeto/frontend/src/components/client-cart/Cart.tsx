import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import OrderComponent from './ClientOrder';
import PaymentComponent from './Pagamento';
import { useCart } from '@/context/cart';
import api from '@/services/api';

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
    const { products } = useCart();
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(()=>{
        const execute = async () => {
            const {data} = await api.get('/sellers/items');

            const cartProductIds = Object.keys(products);
            const actualProducts = data.filter(item => {
                console.log(item.productId);
               return !!cartProductIds.includes(item.productId)
            })
            setCartProducts(actualProducts);
        };

        execute();
    },[products]);

  return (
    <Container>
      <TextStyle />
      <OrderHistory>
        <HistoryTitle>Carrinho</HistoryTitle>
        <OrderComponent cartItems={cartProducts} />
      </OrderHistory>
      <Report>
        <ReportTitle>Pagamento</ReportTitle>
        <PaymentComponent />
      </Report>
    </Container>
  );
};

export default CartComponent;
