import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-items: center;
  justify-content: center;
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

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  margin-top: 8px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #059B90;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-family: quicksand, Roboto, sans-serif;
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');
    if (allFieldsFilled) {
      console.log(formData);
      setFormData(initialState);
    } else {
      console.log('Please fill in all fields');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Nome</Label>
      <Input type="text" name="nome" value={formData.nome} onChange={handleChange} />

      <Label>CPF</Label>
      <Input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />

      <Label>Celular:</Label>
      <Input type="text" name="celular" value={formData.celular} onChange={handleChange} />

      <Label>E-mail</Label>
      <Input type="email" name="email" value={formData.email} onChange={handleChange} />

      <Label>Senha</Label>
      <Input type="password" name="senha" value={formData.senha} onChange={handleChange} />

      <Label>Data de Nascimento</Label>
      <Input type="date" name="nascimento" value={formData.nascimento} onChange={handleChange} />

      <Label>Time de Futebol</Label>
      <Input type="text" name="timeFutebol" value={formData.timeFutebol} onChange={handleChange} />

      <Label>Assiste One Piece?</Label>
      <Select name="animeFavorito" value={formData.animeFavorito} onChange={handleChange}>
        <option value="">Selecione</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </Select>

      <Button type="submit">Cadastrar</Button>
    </FormContainer>
  );
};

export default SignUpForm;
