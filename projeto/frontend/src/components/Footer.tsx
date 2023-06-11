import React from 'react';
import styled from 'styled-components';
import FooterSvg from '../assets/footer.svg';

const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  padding: 0;
  width: 100%;
  justify-content: flex-end;
  margin-left: 30px;
`;

const StyledFooterSvg = styled(FooterSvg)`
  transform: scale(0.75); /* Defina a escala desejada para diminuir o tamanho */
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <StyledFooterSvg />
    </FooterContainer>
  );
};

export default Footer;
