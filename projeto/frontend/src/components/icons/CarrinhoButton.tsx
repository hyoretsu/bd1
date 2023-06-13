import React from 'react';
import styled from 'styled-components';
import Carrinho from '../../icons/carrinho.svg';

const IconButton = styled.button`
  align-items: center;
  padding: 0;
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
