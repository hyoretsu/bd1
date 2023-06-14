import React, { useState } from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  width: 25%;
  margin-bottom: 20px;
  background-color: white;
  margin: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const QuantityText = styled.p`
  padding: 5px;
`;

const QuantityInput = styled.input`
  width: 60px;
  margin-right: 10px;
  padding: 5px;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #059B90;
  color: #fff;
  border: none;
  border-radius: 0;
  cursor: pointer;
`;

const RemoveProductButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #E80B26;
  color: #fff;
  border: none;
  border-radius: 0px 0px 16px 16px;
  cursor: pointer;
`;

const EditComponent = styled.button`
  display: flex;
`

const EditButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #FF7300;
  color: #fff;
  border: none;
  border-radius: 0;
  cursor: pointer;
`

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  city: string;
};

type SellerProductListProps = {
  products: Product[];
};

const SellerProductList: React.FC<SellerProductListProps> = ({ products }) => {
  const [editedStock, setEditedStock] = useState<number | undefined>(undefined);
  const [editedPrice, setEditedPrice] = useState<number | undefined>(undefined);

  const handleStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStock = parseInt(event.target.value, 10);
    setEditedStock(newStock);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(event.target.value);
    setEditedPrice(newPrice);
  };

  const handleSaveStock = (productId: number) => {
    console.log(`Product ID: ${productId}, Stock: ${editedStock}`);
    setEditedStock(undefined);
  };

  const handleSavePrice = (productId: number) => {
    console.log(`Product ID: ${productId}, Price: ${editedPrice}`);
    setEditedPrice(undefined);
  };

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>

          {editedPrice !== undefined ? (
            <input
              type="number"
              value={editedPrice}
              onChange={handlePriceChange}
            />
          ) : (
            <ProductPrice>R${product.price.toFixed(2)}</ProductPrice>
          )}

          <QuantityContainer>
          <QuantityText>Estoque: {product.stock}</QuantityText>
          </QuantityContainer>
          <EditComponent>
            {editedStock !== undefined ? (
              <>
                <QuantityInput
                  type="number"
                  value={editedStock}
                  onChange={handleStockChange}
                />
                <SaveButton onClick={() => handleSaveStock(product.id)}>
                  Save Stock
                </SaveButton>
              </>
            ) : (
              <>
                
                <EditButton onClick={() => setEditedStock(product.stock)}>
                  Edit Stock
                </EditButton>
              </>
            )}

          {editedPrice !== undefined ? (
            <SaveButton onClick={() => handleSavePrice(product.id)}>
              Save Price
            </SaveButton>
          ) : (
            <EditButton onClick={() => setEditedPrice(product.price)}>
              Edit Price
            </EditButton>
          )}
          </EditComponent>

          <RemoveProductButton>Remove Product</RemoveProductButton>
        </ProductCard>
      ))}
    </>
  );
};

export default SellerProductList;
