import React from 'react';

import {
  Container, LogoImg,
  LandingImg
} from './styles';

import logoImg from '../../assets/logo.svg'
import landingImg from '../../assets/landing.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <LogoImg src={logoImg} alt="Logo Happy" />
      <LandingImg src={landingImg} alt="Imagem Criaças" />
    </Container>
  );
};

export default Landing;
