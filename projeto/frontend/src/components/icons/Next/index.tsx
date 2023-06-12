import React from 'react';
import styled from 'styled-components';
import Pedido from './pedido.svg';

const PedidoContainer = styled.div`
  padding: 0.0rem;
  margin-left: 0.0vh;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const PedidoIcon: React.FC = () => {
  return (
    <PedidoContainer>
      <a href="/caminho-do-link">
        <Pedido />
      </a>
    </PedidoContainer>
  );
};

export default PedidoIcon;
