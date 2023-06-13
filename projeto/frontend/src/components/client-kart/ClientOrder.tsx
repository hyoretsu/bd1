import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  border-top: 1px solid #004742;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Column = styled.div`
  flex: 1;
`;

const ProductName = styled(Column)`
  text-align: left;
`;

const Quantity = styled(Column)`
  text-align: center;
`;

const UnitPrice = styled(Column)`
  text-align: right;
`;

const Total = styled(Column)`
  text-align: right;
  font-weight: bold;
`;

const ColumnTitle = styled.h3`
  margin-top: 10px;
  text-align: center;
`;

const CartValues = styled.div`
  padding-top: 10px;
  border-top: 1px solid #004742;
  border-bottom: 1px solid #004742;
`

const CartComponent = () => {
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

  const subTotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const discount = subTotal * 0.05;
  const finalTotal = subTotal - discount;

  return (
    <CartContainer>
      <CartItem>
        <ColumnTitle>Produto</ColumnTitle>
        <ColumnTitle>Quantidade</ColumnTitle>
        <ColumnTitle>Preço Unitário</ColumnTitle>
        <ColumnTitle>Total</ColumnTitle>
      </CartItem>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <ProductName>{item.product}</ProductName>
          <Quantity>{item.quantity}</Quantity>
          <UnitPrice>R${item.unitPrice.toFixed(2)}</UnitPrice>
          <Total>R${item.total.toFixed(2)}</Total>
        </CartItem>
      ))}
      <CartValues>
        <CartItem>
          <ProductName>Sub Total</ProductName>
          <Total>R${subTotal.toFixed(2)}</Total>
        </CartItem>
        <CartItem>
          <ProductName>Desconto</ProductName>
          <Total>R${discount.toFixed(2)}</Total>
        </CartItem>
        <CartItem>
          <ProductName>Valor Final</ProductName>
          <Total>R${finalTotal.toFixed(2)}</Total>
        </CartItem>
      </CartValues>
    </CartContainer>
  );
};

export default CartComponent;
