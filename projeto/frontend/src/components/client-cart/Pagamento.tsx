import api from '@/services/api';
import React, { useState, ChangeEvent, FormEvent } from 'react';
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
  const [fullName, setFullName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('Card');

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleGenerateClick = async () => {
    // await api.post('/orders');
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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFullName(e.target.value)
              }
            />
          </FormField>
          <FormField>
            <Label>Número do Cartão</Label>
            <Input
              type="text"
              value={cardNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCardNumber(e.target.value)
              }
            />
          </FormField>
          <FormField>
            <Label>Data de Validade</Label>
            <Input
              type="text"
              value={expirationDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setExpirationDate(e.target.value)
              }
            />
          </FormField>
          <FormField>
            <Label>CVC</Label>
            <Input
              type="text"
              value={cvc}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCVC(e.target.value)
              }
            />
          </FormField>
          <Button type="submit">Submeter Pagamento</Button>
        </PaymentForm>
      )}
      {paymentMethod && paymentMethod !== 'Card' && (
        <Button onClick={handleGenerateClick}>
          Gerar Pagamento {paymentMethod}
        </Button>
      )}
    </PaymentSection>
  );
};

export default PaymentComponent;
