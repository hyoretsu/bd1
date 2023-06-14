import React from 'react';
import styled from 'styled-components';
import PedidoIcon from './icons/PedidoIcon';
import SearchBar from './SearchBar';
import UserButton from './icons/UserButton';
import CarrinhoButton from './icons/CarrinhoButton';

import { useRouter } from 'next/router';

import SellerHeader from './icons/Seller';

const HeaderContainer = styled.header`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(127, 255, 212, 0.2);
  padding: 1em;
  height: 100%;
  width: 100%;
  height: 100vh;
  max-height: 121px;
`;

const ButtonsContainer = styled.div`
  white-space: nowrap;
  padding: 0 0.6em;

`;

const ScaledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 6vh;
  padding: 1vh 0;
  transform: scale(0.9); /* Defina a escala desejada para diminuir o tamanho */
  justify-content: space-between; /* Alinha os elementos no espaço disponível */
  width: 100%; /* Define a largura total para ocupar todo o espaço */
`;

const ButtonsAlignDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledSellerHeader = styled.img`
`;


const Header: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const isSellerPage = pathname === '/seller' || pathname === '/seller-login' || pathname === '/seller-products' || pathname === '/seller-dashboard'; // Atualize com o caminho da página de vendedor

  return (
    <HeaderContainer>
      <ScaledContainer>
        <ButtonsAlignDiv>
          <PedidoIcon />
          {isSellerPage && <SellerHeader />}
          <SearchBar />
          <ButtonsContainer>
            <UserButton />
          </ButtonsContainer>
          <ButtonsContainer>
            <CarrinhoButton />
          </ButtonsContainer>
        </ButtonsAlignDiv>
      </ScaledContainer>
    </HeaderContainer>
  );
};

export default Header;
