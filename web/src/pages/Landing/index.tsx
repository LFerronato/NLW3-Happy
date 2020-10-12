import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import {
  Container,
  Content,
  Main,
  MainTitle,
  MainSubtitle,
  LocationContainer,
  ButtonNav,
} from './styles';

import logoImg from '../../assets/logo.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Happy" height="74px" width="270px" />

        <Main>
          <MainTitle>Leve felicidade para o mundo</MainTitle>
          <MainSubtitle>Visite orfanatos e mude o dia de muitas crianças.</MainSubtitle>
        </Main>

        <LocationContainer>
          <strong style={{ fontWeight: 800 }}>Curitiba</strong>
          <span>Paraná</span>
        </LocationContainer>

        <ButtonNav to="/map">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </ButtonNav>
      </Content>
    </Container>
  );
};

export default Landing;
