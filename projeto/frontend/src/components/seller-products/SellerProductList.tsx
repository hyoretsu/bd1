import React from 'react';
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

const QuantityText = styled.p`
  padding: 5px;
`;

const RemoveProductButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 0px 0px 16px 16px;
  cursor: pointer;
`;

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  city: string;
};

type SellerProductListProps = {
  products: Product[];
};

const SellerProductList: React.FC<SellerProductListProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R${product.price.toFixed(2)}</ProductPrice>

          <QuantityContainer>
            <QuantityText>Estoque: {product.stock}</QuantityText>
          </QuantityContainer>

          <RemoveProductButton>Remove Product</RemoveProductButton>
        </ProductCard>
      ))}
    </>
  );
};

export default SellerProductList;
