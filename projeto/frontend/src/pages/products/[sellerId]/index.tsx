import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContainer from '@/styles/MainContainer.styles';
import Products from '@/components/products/Products';
import BgGreen from '@/bgaux/bggreen.png';
import api from '@/services/api';
import { useRouter } from 'next/router';

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

const ProductsPage: React.FC = () => {
    const {query:{sellerId}} = useRouter();
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const execute = async () => {
            const { data } = await api.get(`/sellers/items/${sellerId}`);

            setProducts(data);
        }

        execute();
    },[sellerId])

  return (
    <MainContainer>
      <Header />
      <Content>
        <Products data={products} />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default ProductsPage;
