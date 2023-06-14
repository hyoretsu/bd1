import React from 'react';
import styled from 'styled-components';
import Seller from './seller-header.svg';

const SellerContainer = styled.button`
  align-items: center;
  margin-right: 20px;
  padding: 0.8em;
  background: none;
  border: none;
  cursor: pointer;
`;

const CarrinhoButton: React.FC = () => {
  return (
    <SellerContainer>
      <Seller />
    </SellerContainer>
  );
};

export default CarrinhoButton;
