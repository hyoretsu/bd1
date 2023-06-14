import { useCart } from '@/context/cart';
import React, { useState } from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  width: 9vw;
  background-color: white;
  margin: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: lightblue;
`;

const QuantityButtonRemove = styled.button`
  padding: 5px;
  border-radius: 16px 0px 0px 16px;
  background-color: #E80B26;
`;

const QuantityText = styled.p`
  padding: 5px;
`

const QuantityButtonAdd = styled.button`
  padding: 5px;
  border-radius: 0px 16px 16px 0px;
  background-color: green;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #059B90;
  color: #fff;
  border: none;
  border-radius: 0px 0px 16px 16px;
  cursor: pointer;
`;

const ProductList: React.FC = ({ productsList }) => {
    const {decreaseProduct,increaseProduct,products} = useCart();

  return (
    <>
      {productsList.map((product) => (
        <ProductCard key={product.id}>
          {product.imageUrl&&<ProductImage src={product.imageUrl} alt={product.name} />}
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R${product.price.toFixed(2)}</ProductPrice>

          <QuantityContainer>
            <QuantityButtonRemove onClick={() => decreaseProduct(product.id)}>-</QuantityButtonRemove>
            <QuantityText>{products[product.id] || 0}</QuantityText>
            <QuantityButtonAdd onClick={() => increaseProduct(product.id)}>+</QuantityButtonAdd>
          </QuantityContainer>

          <AddToCartButton>Add Cart</AddToCartButton>
        </ProductCard>
      ))}
    </>
  );
};

export default ProductList;
