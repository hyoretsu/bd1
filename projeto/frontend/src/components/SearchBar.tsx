import React from 'react';
import styled from 'styled-components';
import SearchIcon from './icons/SearchIcon';

const SearchBarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.0);
  padding: 2px;
  border-radius: 50px;
  border: 2px solid rgba(0, 71, 66, 0.5);
`;

const SearchInput = styled.input`
  position: relative;
  padding: 10px 10px 10px 30px;
  border: none;
  border-radius: 20px;
  background-color: rgba(200, 200, 200, 0.0);
  color: rgb(0, 100, 0);
  font-size: 18px;
  width: 100%;

  &::placeholder {
    position: absolute;
    top: 50%;
    left: 35px;
    transform: translateY(-50%);
    transition: opacity 0.3s;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.5); /* Modify the color here */
  }

  &:focus::placeholder {
    opacity: 0;
  }

  &:focus {
    outline: none;
  }
`;

const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <SearchInput type="text" placeholder="Insira sua busca aqui" />
    </SearchBarContainer>
  );
};

export default SearchBar;
