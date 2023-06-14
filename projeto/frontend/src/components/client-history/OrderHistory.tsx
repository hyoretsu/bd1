import React from 'react';
import styled from 'styled-components';

const OrderHistoryList = styled.ul`
  list-style-type: none;
  margin-top: 16px;
`;

const OrderHistoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: white;
  width: 80%;
  border-radius: 9px;
`;

const OrderImage = styled.img`
  width: 100%;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
`;

const OrderDate = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
`;

const OrderItems = styled.div`
  margin-bottom: 5px;
`;

const OrderTotal = styled.span`
  font-weight: bold;
`;

const SellerContainer = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
`;

const SellerName = styled.span`
  font-weight: bold;
  margin-top: 5px;
  font-size: 18px;
`;

interface Order {
  id: number;
  date: string;
  status: string;
  items: { name: string; quantity: number }[];
  total: number;
  image: string;
  sellername: string;
}

interface OrderHistoryProps {
  orderHistory: Order[];
}

const OrderHistoryComponent: React.FC<OrderHistoryProps> = ({ orderHistory }) => {
  return (
    <OrderHistoryList>
      {orderHistory.map((order) => (
        <OrderHistoryItem key={order.id}>
          <SellerContainer>
            <SellerName>{order.sellername}</SellerName>
            <OrderImage src={order.image} alt="Order" />
          </SellerContainer>
          <OrderDetails>
            <OrderDate>{order.date}</OrderDate>
            <OrderItems>
              {order.items.map((item) => (
                <div key={item.name}>
                  <span>{item.name}: {item.quantity}</span>
                </div>
              ))}
            </OrderItems>
            <OrderTotal>Total: R${order.total}</OrderTotal>
          </OrderDetails>
        </OrderHistoryItem>
      ))}
    </OrderHistoryList>
  );
};

export default OrderHistoryComponent;
