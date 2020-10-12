import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Landing from '../../assets/landing.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  position: relative;
  width: 90%;
  max-width: 1100px;
  min-width: 380px;

  height: 95%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${Landing}) no-repeat 80% center;
  background-size: 50% 100%;

  @media (max-width: 770px) {
    background: none;
  }
`

export const Main = styled.main`
  max-width: 350px;
  margin-bottom: 100px;

  @media (max-width: 770px) {
    margin-bottom: 130px;
  }
`
export const MainTitle = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;

  @media (max-width: 770px) {
    font-size: 55px;
  }
`
export const MainSubtitle = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`
export const LocationContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  font-size: 24px;
  line-height: 34px;
  text-align: right;
`
export const ButtonNav = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 80px;
  height: 80px;
  border-radius: 35%;
  background: #FFD666;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;
  &:hover {
    background-color: #96FEFF;
  }

  @media (max-width: 770px) {
    bottom: 30px;
  }
`
