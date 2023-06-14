import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #059B90;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-family: quicksand, Roboto, sans-serif;
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
      <FormInput type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
      <SubmitButton type="submit">Login</SubmitButton>
    </FormContainer>
  );
};

export default Login;
