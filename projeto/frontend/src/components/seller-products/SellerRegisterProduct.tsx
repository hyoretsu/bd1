import React, { useState } from 'react';
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

const SellerProductForm = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [cityOrigin, setCityOrigin] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCityOriginChange = (event) => {
    setCityOrigin(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
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

  return (
    <FormContainer>
      <h3>Cadastrar Produto</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" value={productName} onChange={handleProductNameChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Categoria</Label>
          <Input type="text" value={category} onChange={handleCategoryChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Cidade de Origem</Label>
          <Input type="text" value={cityOrigin} onChange={handleCityOriginChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Preço</Label>
          <Input type="number" value={price} onChange={handlePriceChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Quantidade</Label>
          <Input type="number" value={quantity} onChange={handleQuantityChange} required />
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </form>
    </FormContainer>
  );
};

export default SellerProductForm;
