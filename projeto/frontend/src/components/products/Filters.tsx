import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  border-bottom: 1px solid #C8C9CB;
  padding-bottom: 10px;
`

const FiltersContainer = styled.div`
  width: 200px;
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

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  city: string;
};

type FiltersProps = {
  products: Product[];
  onCategoryChange: (value: string) => void;
  onStockChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onFilter: () => void;
};

const Filters: React.FC<FiltersProps> = ({
  products,
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

  const allCategories = Array.from(new Set(products.map((product) => product.category)));

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategoryFilter(value);
  };

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <FilterInput type="number" value={stockFilter} onChange={handleStockChange} />
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

export default Filters;