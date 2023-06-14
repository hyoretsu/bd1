import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import BgGreen from '../../bgaux/bggreen.png';
import OrderCard from '@/components/teste/OrderCard';

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

/* CSS for CarouselDiv */
const CarouselDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  width: 100%;
  padding: 3% 10%;
  font-family: Roboto;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* CSS for VendorsTitleDiv */
const VendorsTitleDiv = styled.div`
  padding: 0 0 2px 25px;
  color: rgba(0, 0, 0, 0.7);
  justify-content: flex-start;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  font-family: Roboto;
  width: 100%;
`;

const ClientHistory = () => {
  // Define the storeData array here
  const storeData = [
    { id: 1, image: 'image-url-1', name: 'Store 1' },
    { id: 2, image: 'image-url-2', name: 'Store 2' },
    { id: 3, image: 'image-url-3', name: 'Store 3' },
  ];

  // Define the products array
  const products = [
    { productName: 'Product 1', quantity: 2, total: 100 },
    { productName: 'Product 2', quantity: 3, total: 150 },
    // Add more products as needed
  ];

  return (
    <MainContainer>
      <Header />
      <Content>
        <CarouselDiv>
          <VendorsTitleDiv>Pedidos</VendorsTitleDiv>
          {storeData.map((store, index) => (
            <OrderCard
              key={store.id}
              products={products} // Pass the products array as a prop
            />
          ))}
        </CarouselDiv>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default ClientHistory;

