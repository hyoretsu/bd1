import React from 'react';
import styled from 'styled-components';
import Heart from './heart.svg';

const IconButton = styled.button`
  align-items: center;
  padding: 0.3em;
  background: none;
  border: none;
  cursor: pointer;
`;

const HeartButton: React.FC = () => {
  return (
    <IconButton>
      <Heart />
    </IconButton>
  );
};

export default HeartButton;
