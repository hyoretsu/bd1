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
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [timeFutebol, setTimeFutebol] = useState('');
  const [animeFavorito, setAnimeFavorito] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform signup logic here
    console.log({
      nome,
      cpf,
      celular,
      email,
      senha,
      nascimento,
      timeFutebol,
      animeFavorito
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Nome:</Label>
      <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

      <Label>CPF:</Label>
      <Input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />

      <Label>Celular:</Label>
      <Input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />

      <Label>E-mail:</Label>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <Label>Senha:</Label>
      <Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

      <Label>Data de Nascimento:</Label>
      <Input type="date" value={nascimento} onChange={(e) => setNascimento(e.target.value)} />

      <Label>Time de Futebol:</Label>
      <Input type="text" value={timeFutebol} onChange={(e) => setTimeFutebol(e.target.value)} />

      <Label>Anime Favorito:</Label>
      <Input type="text" value={animeFavorito} onChange={(e) => setAnimeFavorito(e.target.value)} />

      <Button type="submit">Cadastrar</Button>
    </FormContainer>
  );
};

export default SignUpForm;
