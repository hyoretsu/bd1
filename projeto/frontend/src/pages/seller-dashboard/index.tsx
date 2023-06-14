import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from '../../styles/MainContainer.styles';
import BgGreen from '../../bgaux/bggreen.png';
import SVGIcon from '../../icons/confirme.svg'; 
import TempImage from '../../assets/seller/baratie.png'; // Imagem temporária
import OrderCard from '../../components/ordercard/OrderCard';

import Image1 from '../../assets/home/carrossel/1.png';
import Image2 from '../../assets/home/carrossel/2.png';
import Image3 from '../../assets/home/carrossel/3.png';
import Image4 from '../../assets/home/carrossel/4.png';
import Image5 from '../../assets/home/carrossel/5.png';

const Content = styled.div`
  z-index: 4;
  min-height: 80vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${BgGreen.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(1px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  flex-grow: 1;
`;

const TopHomeDiv = styled.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  height: auto;
  width: 100%;
`;

const SellerTitle = styled.h2`
  color: rgba(0, 71, 66, 1);
  display: inline;
  font-family: quicksand, 'Segoe UI', sans-serif;
  font-size: 3rem;
  margin-bottom: 20px;
  margin-right: 10px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const RightDiv = styled.div`
  margin-left: 10vh;
`;

const ButtonDiv = styled.div`
  padding: 1rem;
  margin-top: 10px;
  display: flex;
  gap: 2vh;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 1.5vh 8vh;
  font-family: 'Segoe UI';
  border: none;
  border-radius: 3vh;
  font-weight: bold;

  background-color: rgba(5, 155, 144, 0.7);
  color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(5, 155, 144, 1);
    box-shadow: 0 0 10px rgba(25, 155, 169, 0.8);
  }

  &+& {
    margin-left: 10px;
  }
`;

const TextSellerHome = styled.div`
  color: rgba(0, 71, 66, 1);
  display: inline;
  font-family: quicksand, sans-serif;
  font-size: 1.2rem;
  margin-left: 5px;
  margin-bottom: 5px;
`;


const OrderTitle = styled.div`
  padding: 0px 0px 4vh 1vh; // reduzido o padding superior
  color: rgba(0, 0, 0, 0.7);
  justify-content: flex-start; 
  text-align: left; 
  font-weight: bold;
  font-size: 1.8rem;
  display: flex;
  font-family: quicksand, Roboto;
  width: 100%; 
  height: auto;
`;

const VendorInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CarouselDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // Centraliza os vendedores
  padding: 0% 5vw; 
  font-family: quicksand, Roboto;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%; // Faz com que a imagem cubra toda a altura da div
  object-fit: cover; // Assegura que a imagem cubra toda a div, mesmo se as proporções da imagem não corresponderem às da div
`;

const CardName = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: quicksand, 'Roboto', sans-serif;
  font-size: 16px;
  margin-top: 50%px; // adiciona espaço entre a imagem e o nome
`;

const StoreDiv = styled.div`
  perspective: 1500px;
  background-color: rgba(255, 255, 255, 0.2);
  text-align: center;
  height: 191px;
  max-height: 100%;
  cursor: pointer;
  width: 264px;
  max-width: 100%;
  border: 0.1px solid rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s; // Aumentei a duração da transição para 0.3s
  transform-style: preserve-3d;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: rotateY(5deg) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const DashboardDiv = styled.div`
  border-radius: 2rem; 
  padding: 2.19rem; 
  background-color: rgba(255, 255, 255, 0.2); 
  min-width: 250px; // ajuste de acordo com a largura mínima desejada 
  max-width: 95%; // ajuste de acordo com a largura máxima desejada
  width: 30vw; // ajuste de acordo com a largura desejada 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  height: 45vh;
  margin: auto; // centraliza o div
`;


const DashboardRelatorio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1vh;
  border-radius: 20px; //ajuste de acordo com o quão arredondado você quer as bordas
  padding: 20px; //ajuste de acordo com o espaçamento interno desejado
  background-color: rgba(255, 255, 255, 0.2); //ajuste de acordo com a cor de fundo desejada
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); //adiciona uma sombra suave
`;

const DashboardBox = styled.div`
  display: flex;
`;

const StoreCard = ({ image, name }): React.JSX.Element => {
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 4 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setCoords({ x, y });
    };
  
    return (
      <StoreDiv
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCoords({ x: 0, y: 0 })}
        x={coords.x}
        y={coords.y}
      >
        <VendorInfoDiv>
          <CardImage src={image} />
          <CardName>{name}</CardName>
        </VendorInfoDiv>
      </StoreDiv>
    );
  };


const staticStoreData = [
    { id: 1, image: Image1.src, name: 'Baratie' },
    { id: 2, image: Image2.src, name: 'Ichikaru' },
    { id: 3, image: Image3.src, name: 'Devil Fruit' },
  ];

  const months = [
    { id: 1, name: 'Jan' },
    { id: 2, name: 'Fev' },
    { id: 3, name: 'Mar' },
    { id: 4, name: 'Abr' },
    { id: 5, name: 'Mai' },
    { id: 6, name: 'Jun' },
    { id: 7, name: 'Jul' },
    { id: 8, name: 'Ago' },
    { id: 9, name: 'Set' },
    { id: 10, name: 'Out' },
    { id: 11, name: 'Nov' },
    { id: 12, name: 'Dez' },
  ];

  const MonthDiv = styled.div`
  justify-content: center;
  padding: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  border-radius: 18px;
  width: 10vh;
  text-align: center;
  margin: 5px;
  color: ${props => props.current ? 'white' : 'black'};
  background-color: ${props => props.current ? 'rgba(255, 115, 0, 1)' : 'rgba(0, 71, 66, 0.14)'};
`;

  
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const previousMonths = months.slice(Math.max(currentMonth - 3, 0), currentMonth);
  
  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
    {previousMonths.map(month => (
      <MonthDiv key={month.id} current={month.id === currentMonth}>
        {month.name}
      </MonthDiv>
    ))}
  </div>
  

const topProducts = [
  { id: 1, name: "Produto A", sales: 100, value: 5 },
  { id: 2, name: "Produto B", sales: 200, value: 10 },
  { id: 3, name: "Produto C", sales: 150, value: 15 },
];

const profitShares = [
  { id: 1, name: "Lucro A", value: "$1000" },
  { id: 2, name: "Lucro B", value: "$2000" },
  { id: 3, name: "Lucro C", value: "$1500" },
  { id: 4, name: "Lucro D", value: "$1800" }
];

const ProductCard = styled.div`
  width: 16vh;
  height: 25vh;
  margin-left: 1.3vh;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProductHeader = styled.div`
  flex-grow: 1; /* Adicionado */
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductFooter = styled.div`
  flex-grow: 1; /* Adicionado */
  color: rgba(255, 100, 0, 1);
  display: flex;
  font-weight: 600;
  height: 12vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 15px 15px;
  background-color: rgba(5, 155, 144, 0.2);

  p:first-of-type {
    color: #055a1a;
  }
`;

const ProductsDiv = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vh;
  height: auto;
`;

const Divider = styled.div`
  border-bottom: 2px solid rgba(0, 71, 66, 0.31);
  border-radius: 100px;
`;

const DashboardContainer = styled.div`
  display: flex;
  margin-left: -25px;
`;

const DashboardItemDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: auto;
  margin-top: 1vh;
`;

const DashboardItemTitle = styled.h2`
  margin-bottom: 10px;
`;

const DashboardItemValue = styled.p`
  font-size: 20px;
  font-weight: bold;
`;


const Dashboard = () => {
  const [lucroMensal, setLucroMensal] = useState(0);
  const [itensVendidos, setItensVendidos] = useState(0);

  React.useEffect(() => {
    // Aqui é onde você buscaria os dados reais
    setLucroMensal(10000);
    setItensVendidos(500);
  }, []);

  return (
    <DashboardRelatorio>
      <DashboardItemDiv style={{background: 'rgba(255, 255, 255, 0.0)', fontSize: '12px', width: '25vh', display: 'flow-root'}}>
        <DashboardItemTitle style={{color: 'rgba(0, 71, 66, 1)'}}>Relatório | Vendedor</DashboardItemTitle>
      </DashboardItemDiv>
      <DashboardItemDiv>
        <DashboardItemTitle style={{color: 'rgba(0, 71, 66, 1)'}} >Lucro Mensal</DashboardItemTitle>
        <DashboardItemValue style={{color: 'rgba(255, 115, 0, 1)'}} >{`R$ ${lucroMensal.toFixed(2)}`}</DashboardItemValue>
      </DashboardItemDiv>
      <DashboardItemDiv style={{marginBottom: '5vh'}}>
        <DashboardItemTitle style={{color: 'rgba(0, 71, 66, 1)' }}>Itens Vendidos</DashboardItemTitle>
        <DashboardItemValue style={{color: 'rgba(255, 115, 0, 1)' }}>{itensVendidos}</DashboardItemValue>
      </DashboardItemDiv>
    </DashboardRelatorio>
  );
};

const products = [
  { productName: 'Product 1', quantity: 2, total: 100 },
  { productName: 'Product 2', quantity: 3, total: 150 },
  // Add more products as needed
];


const Seller: React.FC = () => {
  const [sellerName, setSellerName] = useState('Baratie');
  const [restaurantImagePath, setRestaurantImagePath] = useState(TempImage.src);

  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const previousMonths = months.slice(Math.max(currentMonth - 3, 0), currentMonth);

  const carouselRef = React.useRef(null);
  const [storeData, setStoreData] = React.useState(staticStoreData);

  const [monthlyProfit, setMonthlyProfit] = useState(null);
  const [totalItemsSold, setTotalItemsSold] = useState(null);
  const [bestSellingProduct, setBestSellingProduct] = useState(null);

 // Fetch data from API on component mount
 React.useEffect(() => {
  async function fetchData() {
    try {
      // Substitua 'api-endpoint' pelos respectivos endpoints da sua API
      const profitResponse = await fetch('api-endpoint/profit');
      const itemsResponse = await fetch('api-endpoint/items');
      const productResponse = await fetch('api-endpoint/product');

      const profitData = await profitResponse.json();
      const itemsData = await itemsResponse.json();
      const productData = await productResponse.json();

      setMonthlyProfit(profitData);
      setTotalItemsSold(itemsData);
      setBestSellingProduct(productData);
    } catch (error) {
      console.log(error);
    }
  }

  fetchData();
}, []);

  return (
    <MainContainer>
      <Header />
      <Content>
        <TopHomeDiv>
          <InnerDiv>
            <LeftDiv>
              <div>
                <SellerTitle>{sellerName}</SellerTitle>
                <SVGIcon /> 
              </div>
              <TextSellerHome>Acesse sua página e preencha os produtos ofertados por você.</TextSellerHome>
              <ButtonDiv>
                <Button>CADASTRAR PRODUTOS</Button>
              </ButtonDiv>
            </LeftDiv>
            <RightDiv>
              <DashboardBox>
              <DashboardDiv>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                  {previousMonths.map(month => (
                    <MonthDiv key={month.id} current={month.id === currentMonth}>
                      {month.name}
                    </MonthDiv>
                  ))}
                </div>
                <Divider />
                <DashboardContainer>
                  <ProductsDiv>
                    {topProducts.map(product => (
                      <ProductCard key={product.id}>
                        <ProductHeader>{product.name}</ProductHeader>
                        <ProductFooter>
                          <p>{product.sales} vendas</p>
                          <p>Lucro: {product.sales * product.value} R$</p>
                        </ProductFooter>
                      </ProductCard>
                    ))}
                  </ProductsDiv>
                </DashboardContainer>
              </DashboardDiv>
                <Dashboard />
              </DashboardBox>
            </RightDiv>
          </InnerDiv>
        </TopHomeDiv>
        <CarouselDiv ref={carouselRef}>
        <OrderTitle>Pedidos</OrderTitle>
          {storeData.map((store, index) => (
            <OrderCard
              key={store.id}
              products={products} // Pass the products array as a prop
            />
          ))}
        </CarouselDiv>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Seller;

