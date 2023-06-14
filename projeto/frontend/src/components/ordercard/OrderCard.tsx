import React, { useState } from 'react';
import styled from 'styled-components';

const StoreDiv = styled.div`
  margin-bottom: 5vh;
  margin-right: 7vh;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  width: 40vh;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;
  transform-style: preserve-3d;
  flex-direction: column;
  padding: 3vh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const CardClient = styled.div`
  font-family: quicksand, 'Roboto', sans-serif;
  border-bottom: 1px solid rgba(5, 155, 144, 0.7);
  align-items: left;
  width: 100%;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  color: #FF7300;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Detail = styled.div`
  font-family: quicksand, 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;

  div:first-child {
    text-align: left;
    margin-right: auto;
  }

  div:last-child {
    text-align: right;
    margin-left: auto;
  }
`;

const ProductDetails = styled.div`
  font-family: quicksand, 'Roboto', sans-serif;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid rgba(5, 155, 144, 0.7);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2vh;
  margin-right: 2vh;
  margin-top: 16px;
`;

const RefuseButton = styled.button`
  padding: 1vh;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 36px;
  cursor: pointer;
  width: 20vh;
  background-color: #E80B26;
  color: white;
`;

const AcceptButton = styled.button`
  padding: 1vh;
  margin-left: 2.5vh;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 36px;
  cursor: pointer;
  width: 20vh;
  background-color: #2CB6A9;
  color: white;
`;

const OrderCard = ({ products }) => {
  const [total, setTotal] = useState(0);

  // Calculate the total sum
  useState(() => {
    let sum = 0;
    products.forEach((product) => {
      sum += product.total;
    });
    setTotal(sum);
  }, [products]);

  const handleRejectOrder = () => {
    // Logic for rejecting the order
    console.log('Order rejected');
  };

  const handleAcceptOrder = () => {
    // Logic for accepting the order
    console.log('Order accepted');
  };

  return (
    <StoreDiv>
      <CardClient>
        <div>Pedidos {} </div>
      </CardClient>
      <ProductDetails>
        <Detail>
          <div style={{fontWeight: 'bold', color: 'rgba(0, 71, 66, 1)'}}>Nome</div>
          <div style={{fontWeight: 'bold', color: 'rgba(0, 71, 66, 1)'}}>Quantidade</div>
        </Detail>
        {products.map((product, index) => (
          <Detail key={index}>
            <div style={{fontWeight: '300'}}>{product.productName}</div>
            <div>{product.quantity}</div>
          </Detail>
        ))}
      </ProductDetails>
      <ProductDetails>
        <Detail>
          <div style={{fontWeight: 'bold', color: 'rgba(0, 71, 66, 1)'}}>Valor Total</div>
          <div>R$ {total.toFixed(2)}</div>
        </Detail>
      </ProductDetails>
      <ButtonContainer>
        <RefuseButton onClick={handleRejectOrder}>Rejeitar Pedido</RefuseButton>
        <AcceptButton onClick={handleAcceptOrder}>Aceitar Pedido</AcceptButton>
      </ButtonContainer>
    </StoreDiv>
  );
};

export default OrderCard;
