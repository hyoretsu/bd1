import React from 'react';
import styled from 'styled-components';
import Pedido from '../../icons/pedido.svg';

const PedidoContainer = styled.div`
  padding: 0.1rem;
  margin-left: 3rem;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const PedidoIcon: React.FC = () => {
  return (
    <PedidoContainer>
      <a href="http://localhost:3000/">
        <Pedido />
      </a>
    </PedidoContainer>
  );
};

export default PedidoIcon;
