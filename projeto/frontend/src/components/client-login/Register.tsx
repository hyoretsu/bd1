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
  align-self: flex-start; /* Align the label to the left */
  font-family: Roboto, sans-serif; /* Set the font family to Roboto *
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Button = styled.button`
  margin-top: 8px;
  width: 180px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #059B90;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-family: Roboto, sans-serif; /* Set the font family to Roboto *
`;

const SignUpForm: React.FC = () => {
  const initialState = {
    nome: '',
    cpf: '',
    celular: '',
    email: '',
    senha: '',
    nascimento: '',
    timeFutebol: '',
    animeFavorito: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <Label>Nome:</Label>
      <Input type="text" name="nome" value={formData.nome} onChange={handleChange} />

      <Label>CPF:</Label>
      <Input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />

      <Label>Celular:</Label>
      <Input type="text" name="celular" value={formData.celular} onChange={handleChange} />

      <Label>E-mail:</Label>
      <Input type="email" name="email" value={formData.email} onChange={handleChange} />

      <Label>Senha:</Label>
      <Input type="password" name="senha" value={formData.senha} onChange={handleChange} />

      <Label>Data de Nascimento:</Label>
      <Input type="date" name="nascimento" value={formData.nascimento} onChange={handleChange} />

      <Label>Time de Futebol:</Label>
      <Input type="text" name="timeFutebol" value={formData.timeFutebol} onChange={handleChange} />

      <Label>Anime Favorito:</Label>
      <Input type="text" name="animeFavorito" value={formData.animeFavorito} onChange={handleChange} />

      <Button type="submit">Cadastrar</Button>
    </FormContainer>
  );
};

export default SignUpForm;

