import React from 'react';
import styled from 'styled-components';
import Search from '../../icons/search.svg';

const LupaContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 10px;
`;

const SearchIcon: React.FC = () => {
  return (
    <LupaContainer>
      <Search />
    </LupaContainer>
  );
};

export default SearchIcon;
