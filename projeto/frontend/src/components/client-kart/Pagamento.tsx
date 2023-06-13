import React, { useState } from 'react';
import styled from 'styled-components';

const PaymentSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
  width: 100%;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 10px 20px;
  background-color: #059B90;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #059B90;
  }
`;

const PaymentComponent = () => {
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Card');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleGenerateClick = (option) => {
    // Handle generating boleto, pix, or berries logic here
    console.log(`Generating ${option}`);
  };

  return (
    <PaymentSection>
      <FormField>
      <Label>Forma de Pagamento</Label>
        <Select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="Card">Card</option>
          <option value="Boleto">Boleto</option>
          <option value="Pix">Pix</option>
          <option value="Berries">Berries</option>
        </Select>
      </FormField>
      {paymentMethod === 'Card' && (
        <PaymentForm onSubmit={handleFormSubmit}>
          <FormField>
            <Label>Nome Completo</Label>
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label>Número do Cartão</Label>
            <Input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label>Data de Validade</Label>
            <Input
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label>CVC</Label>
            <Input
              type="text"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
            />
          </FormField>
          <Button type="submit">Submeter Pagamento</Button>
        </PaymentForm>
      )}
      {paymentMethod && paymentMethod !== 'Card' && (
        <Button onClick={() => handleGenerateClick(paymentMethod)}>
          Gerar Pagamento {paymentMethod}
        </Button>
      )}
    </PaymentSection>
  );
};

export default PaymentComponent;
