import React, { useState } from 'react';
import styled from 'styled-components';
import User from './user.svg';

const IconButton = styled.button`
  align-items: center;
  padding: 0.3em;
  background: none;
  border: none;
  cursor: pointer;
`;

const UserContainer = styled.div`
  position: relative;
`;

const Modal = styled.div`
  position: absolute;
  left: 50%;
  height: 9vh;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.16);
  padding: 5px;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: bottom 0.3s ease-in-out;
  z-index: 100;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  text-align: center; /* Centralizar o texto */
  width: 230px; /* Aumentar a largura */
  backdrop-filter: blur(10px); /* Efeito de vidro fosco */
`;

const ModalButton = styled.button`
  margin-right: 10px;
  background: none;
  border: none;
  color: #006d5b;
  font-weight: bold;
  font-size: 15px;
  padding: 5px 10px;
  cursor: pointer;
  transition: color 0.3s;
  font-family: Roboto;

  &:hover {
    color: #00423b;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1px;
  background-color: rgba(0, 150, 50, 0.2);
  margin: 8px 0;
`;

const UserButton: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    console.log('toggleModal');
    setModalVisible(!isModalVisible);
  };

  return (
    <UserContainer>
      <IconButton onClick={toggleModal}>
        <User />
      </IconButton>
      <Modal visible={isModalVisible}>
        <ModalButton>Login</ModalButton>
        <Separator />
        <ModalButton>Sign up</ModalButton>
      </Modal>
    </UserContainer>
  );
};

export default UserButton;
