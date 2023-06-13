import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import BgGreen from '../../bgaux/bggreen.png';
import SVGIcon from '../../icons/confirme.svg'; 
import TempImage from '../../assets/seller/baratie.png'; // Imagem temporária

const Content = styled.div`
  z-index: 1;
  height: 70vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BgGreen.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const TopHomeDiv = styled.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  height: auto;
  width: 100%;
`;

const SellerContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SellerPageDiv = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const SellerTitle = styled.h2`
  color: rgba(0, 71, 66, 1);
  display: inline;
  font-family: 'Segoe UI', quicksand, sans-serif;
  font-size: 3rem;
  margin-bottom: 20px;
  margin-right: 10px;
`;

const SellerDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10vh;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const RightDiv = styled.div`
  margin-left: 20vh;
`;

const ButtonDiv = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 2vh;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 1.5vh 8vh;
  font-family: 'Segoe UI';
  border: none;
  border-radius: 3vh;
  font-weight: bold;

  background-color: rgba(5, 155, 144, 0.7);
  color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(5, 155, 144, 1);
    box-shadow: 0 0 10px rgba(25, 155, 169, 0.8);
  }

  &+& {
    margin-left: 10px;
  }
`;

const TextSellerHome = styled.div`
  color: rgba(0, 71, 66, 1);
  display: inline;
  font-family: quicksand, sans-serif;
  font-size: 1.2rem;
  margin-left: 5px;
  margin-bottom: 5px;
`;

const RestaurantImage = styled.img`
  height: 30vh;
`;

const Seller: React.FC = () => {
  const [sellerName, setSellerName] = useState('Baratie');
  const [restaurantImagePath, setRestaurantImagePath] = useState(TempImage.src);

  return (
    <MainContainer>
      <Header />
      <Content>
        <TopHomeDiv>
          <InnerDiv>
            <LeftDiv>
              <div>
                <SellerTitle>{sellerName}</SellerTitle>
                <SVGIcon /> 
              </div>
              <TextSellerHome>Acesse sua página e preencha os produtos ofertados por você.</TextSellerHome>
              <ButtonDiv>
                <Button>Acessar Página</Button>
                <Button>Verificar Pedidos</Button>
              </ButtonDiv>
            </LeftDiv>
            <RightDiv>
              <RestaurantImage src={restaurantImagePath} alt='Imagem do Restaurante' />
            </RightDiv>
          </InnerDiv>
        </TopHomeDiv>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Seller;
