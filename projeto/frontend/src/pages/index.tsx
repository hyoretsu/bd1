import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BemVindo from '../components/BemVindo';

import MainContainer from '../styles/MainContainer.styles';
import BgGreen from '../bgaux/bggreen.png';
import FoodImage from '../assets/home/food.png';

import Image1 from '../assets/home/carrossel/1.png';
import Image2 from '../assets/home/carrossel/2.png';
import Image3 from '../assets/home/carrossel/3.png';
import Image4 from '../assets/home/carrossel/4.png';
import Image5 from '../assets/home/carrossel/5.png';

const Content = styled.div`
  z-index: 4;
  margin-top: auto;
  margin-bottom: 20px;
  min-height: 735px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${BgGreen.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(1px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  flex-grow: 1; // Permite que o Content cresça para preencher todo o espaço disponível
`;


const TopHomeDiv = styled.div`
  z-index: 3;
  display: flex;
  justify-content: space-between; 
  align-items: flex-start; /* Alinha todos os filhos ao topo */
  padding: 0 10%; 
  height: auto;
  width: 100%;
  margin-top: 6.5%;
`;

const CadastroButton = styled.button`
  width: 100%;
  max-width: 300px; /* Reduz a largura máxima do botão */
  height: 40px; /* Reduz a altura do botão */
  border: none;
  border-radius: 8px; /* Diminui a borda do botão */
  margin-top: 16px;
  background-color: rgba(5, 155, 144, 0.7);
  backdrop-filter: blur(20px);
  transition: box-shadow 0.3s, background-color 0.3s;
  color: rgba(255, 255, 255, 1);
  font-size: 14px; /* Diminui o tamanho do texto do botão */
  font-family: Roboto, sans-serif;

  &:hover {
    background-color: rgba(5, 155, 144, 1);
    box-shadow: 0 0 10px rgba(25, 155, 169, 0.8);
  }
`;

const HomeContainerDiv = styled.div`
  z-index: 1;
  width: 100%; /* Deve ocupar a largura total disponível */
  height: 100%; /* Deve ocupar a altura total disponível */
  display: flex;
  flex-direction: column; /* Mantém o layout vertical */
  align-items: center; /* Centraliza os itens horizontalmente */
  justify-content: flex-start; /* Alterado de center para flex-start para alinhar o conteúdo na parte superior */
  padding: 10px; /* Espaçamento ao redor para evitar colagem nos lados */
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha o conteúdo no início */
  width: 50%; /* Define a mesma largura para Wrapper e Image */
`;

const Image = styled.img`
  width: 40%; /* Reduz a largura da imagem */
  object-fit: contain; /* Garante que a imagem se ajuste dentro das dimensões definidas */
`;


const VendorsTitleDiv = styled.div`
  padding: 0 0 2px 25px; // reduzido o padding superior
  color: rgba(0, 0, 0, 0.7);
  justify-content: flex-start; 
  text-align: left; 
  font-weight: bold;
  font-size: 20px;
  display: flex;
  font-family: Roboto;
  width: 100%; 
`;


const CarouselContainerDiv = styled.div`
  display: flex;
  align-items: flex-start; // alinha o nome do vendedor
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 10px 0; // adiciona padding vertical se necessário
`;


const CarouselDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // Centraliza os vendedores
  gap: 25px;
  width: 100%;
  padding: 3% 10%; 
  font-family: Roboto;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;


const CarouselButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  background-color: #FF7300;
  border: none;
  border-radius: 50%;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 40px;
  height: 40px;
  line-height: 40px;

  transition: background-color 0.3s;
  &:hover {
    background-color: #FF4500;
  }
`;

const CarouselButtonPrev = styled(CarouselButton)`
  left: 0;
  transform: translateX(-50%) translateY(-50%);
`
const CarouselButtonNext = styled(CarouselButton)`
  right: 0;
  transform: translateX(50%) translateY(-50%);
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

const VendorInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Utiliza a largura total disponível */
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
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-top: 50%px; // adiciona espaço entre a imagem e o nome
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
  { id: 4, image: Image4.src, name: 'Alchemist Coffe' },
  { id: 5, image: Image5.src, name: 'Soupa Sayan' },
  { id: 6, image: Image5.src, name: 'Soupa Sayan' },
  { id: 6, image: Image5.src, name: 'Soupa Sayan' },
  { id: 6, image: Image5.src, name: 'Soupa Sayan' },
  { id: 6, image: Image5.src, name: 'Soupa Sayan' },
  { id: 6, image: Image5.src, name: 'Soupa Sayan' },
];

const Home: React.FC = () => {
  const carouselRef = React.useRef(null);
  const [storeData, setStoreData] = React.useState(staticStoreData);

  React.useEffect(() => {
    fetch('/stores')
      .then(response => response.json())
      .then(data => setStoreData(storeData => storeData.concat(data)));
  }, []);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += direction === 'right' ? 300 : -300;
    }
  };

  return (
    <MainContainer>
      <Header />
      <Content>
        <HomeContainerDiv>
          <TopHomeDiv>
            <Wrapper>
              <BemVindo />
              <CadastroButton>Cadastre-se</CadastroButton>
            </Wrapper>
            <Image src={FoodImage.src} />
          </TopHomeDiv>
          <CarouselContainerDiv>
              <CarouselDiv ref={carouselRef}>
              <VendorsTitleDiv>Lojas: </VendorsTitleDiv>
                  {storeData.map((store, index) => (
                    <StoreCard
                      key={store.id}
                      image={store.image}
                      name={store.name}
                      showButtonPrev={index === 0}
                      showButtonNext={index === storeData.length - 1}
                      onClickPrev={() => scrollCarousel('left')}
                      onClickNext={() => scrollCarousel('right')}
                    />
                  ))}
              </CarouselDiv>
          </CarouselContainerDiv>
        </HomeContainerDiv>
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Home;

