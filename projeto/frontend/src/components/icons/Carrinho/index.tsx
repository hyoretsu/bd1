import React from 'react';
import styled from 'styled-components';
import Carrinho from './carrinho.svg';

const IconButton = styled.button`
  align-items: center;
  padding: 0.3em;
  background: none;
  border: none;
  cursor: pointer;
`;

const CarrinhoButton: React.FC = () => {
  return (
    <IconButton>
      <Carrinho />
    </IconButton>
  );
};

export default CarrinhoButton;
