import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-bottom: 1px solid #C8C9CB;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 12px;
  margin-top: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #059B90;
  color: #FFF;
  border: none;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;

const SellerProductForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [cityOrigin, setCityOrigin] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleProductNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleCityOriginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCityOrigin(event.target.value);
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Aqui você pode fazer algo com os valores do formulário, como enviar para o backend ou atualizar o estado do componente pai
    console.log({
      productName,
      category,
      cityOrigin,
      price,
      quantity,
    });

    // Limpar o formulário após o envio
    setProductName('');
    setCategory('');
    setCityOrigin('');
    setPrice('');
    setQuantity('');
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <FormContainer>
      <TitleContainer>
        <h3>Cadastrar Produto</h3>
        <ArrowButton onClick={toggleFormVisibility}>
          {isFormVisible ? '▲' : '▼'}
        </ArrowButton>
      </TitleContainer>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="productName">Nome</Label>
            <Input
              type="text"
              id="productName"
              value={productName}
              onChange={handleProductNameChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Categoria</Label>
            <Input
              type="text"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cityOrigin">Cidade de Origem</Label>
            <Input
              type="text"
              id="cityOrigin"
              value={cityOrigin}
              onChange={handleCityOriginChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="price">Preço</Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="quantity">Quantidade</Label>
            <Input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              required
            />
          </FormGroup>
          <Button type="submit">Cadastrar</Button>
        </form>
      )}
    </FormContainer>
  );
};

export default SellerProductForm;
