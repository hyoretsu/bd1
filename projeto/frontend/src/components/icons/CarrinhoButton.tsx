import React from 'react';
import styled from 'styled-components';
import Carrinho from '../../icons/carrinho.svg';
import { useRouter } from 'next/router';

const IconButton = styled.button`
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const CarrinhoButton: React.FC = () => {
    const{push}=useRouter();
  return (
    <IconButton onClick={()=>push('/cart')}>
      <Carrinho />
    </IconButton>
  );
};

export default CarrinhoButton;
