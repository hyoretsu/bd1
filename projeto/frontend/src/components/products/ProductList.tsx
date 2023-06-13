import React, { useState } from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  width: 25%;
  margin-bottom: 20px;
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
`;

const QuantityButtonRemove = styled.button`
  padding: 5px;
  border-radius: 16px 0px 0px 16px;
  background-color: red;
`;

const QuantityText = styled.button`
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

const ProductList = ({ products }) => {
  const [quantities, setQuantities] = useState({});

  const handleDecrease = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) - 1,
    }));
  };

  const handleIncrease = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R${product.price.toFixed(2)}</ProductPrice>

          <QuantityContainer>
            <QuantityButtonRemove onClick={() => handleDecrease(product.id)}>-</QuantityButtonRemove>
            <QuantityText>{quantities[product.id] || 0}</QuantityText>
            <QuantityButtonAdd onClick={() => handleIncrease(product.id)}>+</QuantityButtonAdd>
          </QuantityContainer>

          <AddToCartButton>Add to Cart</AddToCartButton>
        </ProductCard>
      ))}
    </>
  );
};

export default ProductList;
