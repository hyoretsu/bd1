import React, { useState } from 'react';
import styled from 'styled-components';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
<<<<<<< HEAD
=======
  imageUrl: string;
>>>>>>> 80eaca2 (Projeto: integração - Produtos)
  city: string;
}

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

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [quantities, setQuantities] = useState<{ [productId: number]: number }>({});

  const handleDecrease = (productId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) - 1,
    }));
  };

  const handleIncrease = (productId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id}>
          {product.imageUrl&&<ProductImage src={product.imageUrl} alt={product.name} />}
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R${product.price.toFixed(2)}</ProductPrice>

          <QuantityContainer>
            <QuantityButtonRemove onClick={() => handleDecrease(product.id)}>-</QuantityButtonRemove>
            <QuantityText>{quantities[product.id] || 0}</QuantityText>
            <QuantityButtonAdd onClick={() => handleIncrease(product.id)}>+</QuantityButtonAdd>
          </QuantityContainer>

          <AddToCartButton>Add Cart</AddToCartButton>
        </ProductCard>
      ))}
    </>
  );
};

export default ProductList;
