import { useCart } from '@/context/cart';
import React from 'react';
import styled from 'styled-components';

interface CartComponentProps {
  cartItems: CartItem[];
}

const CartContainer = styled.div`
  border-top: 1px solid #004742;
`;

const CartItemContainer = styled.div`
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

const CartComponent: React.FC<CartComponentProps> = ({ cartItems }) => {
    const { products } = useCart();

  const subTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = subTotal * 0.1;
  const finalTotal = subTotal - discount;

  return (
    <CartContainer>
      <CartItemContainer>
        <ColumnTitle>Produto</ColumnTitle>
        <ColumnTitle>Quantidade</ColumnTitle>
        <ColumnTitle>Preço Unitário</ColumnTitle>
        <ColumnTitle>Total</ColumnTitle>
      </CartItemContainer>
      {cartItems.map((item) => {
        console.log(item);
        return (
        <CartItemContainer key={item.id}>
          <ProductName>{item.name}</ProductName>
          <Quantity>{products[item.id]}</Quantity>
          <UnitPrice>R${item.price.toFixed(2)}</UnitPrice>
          <Total>R${(item.price*products[item.id]).toFixed(2)}</Total>
        </CartItemContainer>
      )})}
      <CartValues>
        <CartItemContainer>
          <ProductName>Sub Total</ProductName>
          <Total>R${subTotal.toFixed(2)}</Total>
        </CartItemContainer>
        <CartItemContainer>
          <ProductName>Desconto</ProductName>
          <Total>R${discount.toFixed(2)}</Total>
        </CartItemContainer>
        <CartItemContainer>
          <ProductName>Valor Final</ProductName>
          <Total>R${finalTotal.toFixed(2)}</Total>
        </CartItemContainer>
      </CartValues>
    </CartContainer>
  );
};

export default CartComponent;
