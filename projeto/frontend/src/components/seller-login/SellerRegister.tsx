import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
`;

const Label = styled.label`
  margin-top: 8px;
  font-weight: bold;
  font-size: 12px;
  align-self: flex-start;
  font-family: quicksand, Roboto, sans-serif;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  resize: vertical; /* Permite redimensionar verticalmente o campo de texto */
`;

const Button = styled.button`
  margin-top: 8px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #059b90;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-family: quicksand, Roboto, sans-serif;
`;

const SellerSignUpForm: React.FC = () => {
  const initialState = {
    nome: '',
    email: '',
    senha: '',
    endereco: '',
    imagem: '',
    telefone: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');
    if (allFieldsFilled) {
      console.log(formData);
      setFormData(initialState); // Reset form state to initial values
    } else {
      console.log('Please fill in all fields');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Nome</Label>
      <Input type="text" name="nome" value={formData.nome} onChange={handleChange} />

      <Label>E-mail</Label>
      <Input type="email" name="email" value={formData.email} onChange={handleChange} />

      <Label>Senha</Label>
      <Input type="password" name="senha" value={formData.senha} onChange={handleChange} />

      <Label>Endereço</Label>
      <Textarea name="endereco" value={formData.endereco} onChange={handleChange} />

      <Label>Link da Imagem</Label>
      <Input type="text" name="imagem" value={formData.imagem} onChange={handleChange} />

      <Label>Telefone</Label>
      <Input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />

      <Button type="submit">Cadastrar</Button>
    </FormContainer>
  );
};

export default SellerSignUpForm;
