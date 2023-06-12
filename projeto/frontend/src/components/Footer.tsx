import React from 'react';
import styled from 'styled-components';
import FooterSvg from '../assets/home/footer.svg';

const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  padding: 10px;
  width: 100%;
  justify-content: flex-end;
`;

const StyledFooterSvg = styled(FooterSvg)`
  transform: scale(0.7); /* Defina a escala desejada para diminuir o tamanho */
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <StyledFooterSvg />
    </FooterContainer>
  );
};

export default Footer;
