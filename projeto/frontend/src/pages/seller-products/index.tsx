import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import BgGreen from '../../bgaux/bggreen.png';

import SellerProducts from '../../components/seller-products/SellerProducts';

const Content = styled.div`
  margin-top: auto;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgGreen.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(1px);
  flex: 1;
  overflow-y: auto;
`;

const SellerProductsPage: React.FC = () => {

  const products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category A',
      price: 10.99,
      stock: 5,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'João Pessoa',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category B',
      price: 19.99,
      stock: 10,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'Mari',
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Category A',
      price: 15.99,
      stock: 8,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'São Paulo',
    },
    {
      id: 4,
      name: 'Product 4',
      category: 'Category C',
      price: 24.99,
      stock: 2,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'Rio de Janeiro',
    },
    {
      id: 5,
      name: 'Product 5',
      category: 'Category B',
      price: 9.99,
      stock: 12,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'Salvador',
    },
    {
      id: 6,
      name: 'Product 6',
      category: 'Category A',
      price: 7.99,
      stock: 3,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'Recife',
    },
    // Add more products as needed
  ];

  return (
    <MainContainer>
      <Header />
      <Content>
        <SellerProducts data={products} />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default SellerProductsPage;
