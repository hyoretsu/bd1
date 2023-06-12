import React from 'react';
import styled from 'styled-components';
import User from '../../icons/user.svg';

const IconButton = styled.button`
  align-items: center;
  padding: 0.3em;
  background: none;
  border: none;
  cursor: pointer;
`;

const UserButton: React.FC = () => {
  return (
    <IconButton>
      <User />
    </IconButton>
  );
};

export default UserButton;
