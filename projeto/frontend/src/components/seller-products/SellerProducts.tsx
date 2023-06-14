import React, { useState } from 'react';
import styled from 'styled-components';
import SellerFilters from './SellerFilters';
import SellerProductList from './SellerProductList';
import SellerProductForm from './SellerRegisterProduct';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  margin-left: 10%;
  margin-right: 10%;
  border-right: 1px solid #C8C9CB;
`;

const FiltersContainer = styled.div`
  width: 200px;
  padding: 10px;
`;

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 220px);
`;

const Vendedor = styled.div`
  width: 100%;
  padding: 10px;
`

const Title = styled.h3`
  flex: 1;
  border-bottom: 1px solid #C8C9CB;
  padding: 10px;
`

const SellerProducts = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
  };

  const handleStockChange = (value) => {
    setStockFilter(value);
  };

  const handlePriceChange = (value) => {
    setPriceFilter(value);
  };

  const handleNameChange = (value) => {
    setNameFilter(value);
  };

  const handleCityChange = (value) => {
    setCityFilter(value);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category A',
      price: 10.99,
      stock: 5,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'João Pessoa',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category B',
      price: 19.99,
      stock: 10,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'Mari',
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Category A',
      price: 15.99,
      stock: 8,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'São Paulo',
    },
    {
      id: 4,
      name: 'Product 4',
      category: 'Category C',
      price: 24.99,
      stock: 2,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'Rio de Janeiro',
    },
    {
      id: 5,
      name: 'Product 5',
      category: 'Category B',
      price: 9.99,
      stock: 12,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'Salvador',
    },
    {
      id: 6,
      name: 'Product 6',
      category: 'Category A',
      price: 7.99,
      stock: 3,
      image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      city: 'Recife',
    },
    // Add more products as needed
  ];

  const filteredProducts = products
    .filter((product) => (categoryFilter ? product.category === categoryFilter : true))
    .filter((product) => (stockFilter ? product.stock > 0 : true))
    .filter((product) => (priceFilter ? product.price < parseFloat(priceFilter) : true))
    .filter((product) => (nameFilter ? product.name.toLowerCase().includes(nameFilter.toLowerCase()) : true))
    .filter((product) => (cityFilter ? product.city.toLowerCase().includes(cityFilter.toLowerCase()) : true));

  return (
    <PageContainer>
      <ContentContainer>
        <FiltersContainer>
          <SellerFilters
            onCategoryChange={handleCategoryChange}
            onStockChange={handleStockChange}
            onPriceChange={handlePriceChange}
            onNameChange={handleNameChange}
            onCityChange={handleCityChange}
            onFilter={() => {}}
          />
        </FiltersContainer>
        <ProductsContainer>
          <Vendedor>
            <Title>Baratie</Title> {/* Novo contêiner para o título */}
            <SellerProductForm />
          </Vendedor>
          <ProductListContainer>
            <SellerProductList products={filteredProducts} />
          </ProductListContainer>
        </ProductsContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default SellerProducts;
