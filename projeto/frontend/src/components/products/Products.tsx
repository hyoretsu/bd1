import React, { useState } from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import ProductList from './ProductList';

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
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 220px);
`;

const Vendedor = styled.div`
  width: 100%;
  padding: 10px;
`;

const Title = styled.h3`
  flex: 1;
  border-bottom: 1px solid #C8C9CB;
  padding: 10px;
`;

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  city: string;
}

interface ProductsProps {
  data: Product[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [stockFilter, setStockFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [cityFilter, setCityFilter] = useState<string>('');

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
  };

  const handleStockChange = (value: string) => {
    setStockFilter(value);
  };
  

  const handlePriceChange = (value: string) => {
    setPriceFilter(value);
  };

  const handleNameChange = (value: string) => {
    setNameFilter(value);
  };

  const handleCityChange = (value: string) => {
    setCityFilter(value);
  };

  const filteredProducts = data.filter((product) => {
    const isCategoryMatched = categoryFilter ? product.category === categoryFilter : true;
    const isStockMatched = stockFilter ? product.stock < parseInt(stockFilter): true;
    const isPriceMatched = priceFilter ? product.price < parseFloat(priceFilter) : true;
    const isNameMatched = nameFilter
      ? product.name.toLowerCase().includes(nameFilter.toLowerCase())
      : true;
    const isCityMatched = cityFilter
      ? product.city.toLowerCase().includes(cityFilter.toLowerCase())
      : true;
    return isCategoryMatched && isStockMatched && isPriceMatched && isNameMatched && isCityMatched;
  });

  return (
    <PageContainer>
      <ContentContainer>
        <FiltersContainer>
          <Filters
            products={data}
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
            <Title>Baratie</Title>
          </Vendedor>
          <ProductListContainer>
            <ProductList products={filteredProducts} />
          </ProductListContainer>
        </ProductsContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default Products;
