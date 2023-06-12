import React from 'react';
import styled from 'styled-components';
import BemVindoSvg from '../assets/home/bemvindo.svg';

const BemVindoContainer = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
`;

const StyledBemVindoSvg = styled(BemVindoSvg)`
  transform: scale(${props => props.scale || 1}); /* Adiciona o valor de scale personalizado ou 1 como padrão */
`;

const BemVindo: React.FC<{ scale?: number }> = ({ scale }) => {
  return (
    <BemVindoContainer>
      <StyledBemVindoSvg scale={scale} />
    </BemVindoContainer>
  );
};

export default BemVindo;
