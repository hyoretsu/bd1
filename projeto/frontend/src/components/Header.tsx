import React from 'react';
import styled from 'styled-components';
import PedidoIcon from './icons/PedidoIcon';
import SearchBar from './SearchBar';
import UserButton from './icons/UserButton';
import HeartButton from './icons/HeartButton';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(127, 255, 212, 0.2);
  padding: 1em;
  height: auto;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  white-space: nowrap;
`;

const ScaledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4vh;
  padding: 1vh 0;
  transform: scale(0.9); /* Defina a escala desejada para diminuir o tamanho */
  justify-content: space-between; /* Alinha os elementos no espaço disponível */
  width: 100%; /* Define a largura total para ocupar todo o espaço */
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ScaledContainer>
        <div>
          <PedidoIcon />
        </div>
        <SearchBar />
        <ButtonsContainer>
          <UserButton />
          <HeartButton />
        </ButtonsContainer>
      </ScaledContainer>
    </HeaderContainer>
  );
};

export default Header;
