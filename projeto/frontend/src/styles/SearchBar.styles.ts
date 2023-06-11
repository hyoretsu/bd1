import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 600px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 50px;
  border: 0.5px solid rgba(127, 255, 212);
`;

const SearchInput = styled.input`
  position: relative;
  padding: 10px 10px 10px 30px;
  border: none;
  border-radius: 20px;
  background-color: rgba(200, 200, 200, 0.1);
  color: rgb(0, 100, 0);
  font-size: 16px;
  width: 100%;

  &::placeholder {
    position: absolute;
    top: 50%;
    left: 35px;
    transform: translateY(-50%);
    transition: opacity 0.3s;
    pointer-events: none;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  &:focus {
    outline: none;
  }
`;

export { SearchBarContainer, SearchInput };
