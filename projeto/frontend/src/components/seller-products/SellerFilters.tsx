import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  border-bottom: 1px solid #C8C9CB;
  padding-bottom: 10px;
`

const FiltersContainer = styled.div`
  width: 200px;
  height: 100%;
  padding: 10px;
  border-right: 1px solid #C8C9CB;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;

`;

const FilterInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FilterButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #059B90;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;
`;

type FiltersProps = {
  onCategoryChange: (value: string) => void;
  onStockChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onFilter: () => void;
};

const SellerFilters: React.FC<FiltersProps> = ({
  onCategoryChange,
  onStockChange,
  onPriceChange,
  onNameChange,
  onCityChange,
  onFilter,
}) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');

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

  const allCategories = Array.from(new Set(products.map((product) => product.category)));

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategoryFilter(value);
  };

  const handleStockChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setStockFilter(value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceFilter(value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameFilter(value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCityFilter(value);
  };

  const handleFilter = () => {
    onCategoryChange(categoryFilter);
    onStockChange(stockFilter);
    onPriceChange(priceFilter);
    onNameChange(nameFilter);
    onCityChange(cityFilter);
    onFilter();
  };

  return (
    <FiltersContainer>
      <Title>Filtros</Title>
      <FilterLabel>
        Categoria
        <br />
        <FilterSelect value={categoryFilter} onChange={handleCategoryChange}>
          <option value="">All</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </FilterSelect>
      </FilterLabel>
      <FilterLabel>
        Estoque
        <br />
        <FilterSelect value={stockFilter} onChange={handleStockChange}>
          <option value="">Todos</option>
          <option value="lastUnits">Últimas Unidades</option>
          <option value="inStock">Em Estoque</option>
        </FilterSelect>
      </FilterLabel>
      <FilterLabel>
        Preço Máximo
        <br />
        <FilterInput type="number" value={priceFilter} onChange={handlePriceChange} />
      </FilterLabel>
      <FilterLabel>
        Nome
        <br />
        <FilterInput type="text" value={nameFilter} onChange={handleNameChange} />
      </FilterLabel>
      <FilterLabel>
        Cidade de Origem
        <br />
        <FilterInput type="text" value={cityFilter} onChange={handleCityChange} />
      </FilterLabel>
      <FilterButton onClick={handleFilter}>Filter</FilterButton>
    </FiltersContainer>
  );
};

export default SellerFilters;
