import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
`

export const Content = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }

  .leaflet-popup-content-wrapper {
    background: rgba(255,255,255,0.8);
    border-radius: 20px;
    box-shadow: none;
  }
  .leaflet-popup-close-button { 
    display: none
  }
  .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;

    display: center;
    justify-content: space-between;
    align-items: center;

    > a {
      width: 40px;
      height: 40px;
      background: #15c3d6;
      box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
      border-radius: 12px;

      display: center;
      justify-content: center;
      align-items: center;
    }

  }

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;

    .leaflet-container {
      min-height: 500px;
      width: 100vw;
    }
  }
`

export const Main = styled.aside`
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  width: 440px;
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-top: 64px;
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
  }
  p {
    margin-top: 24px;
    font-size: 18px;
  }
  @media (max-width: 770px) {
    width: 100%;
    min-height: 560px;
  }
`

export const LocationContainer = styled.footer`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  line-height: 28px;

  margin-top: 50px;
`

export const ButtonNav = styled(Link)`
  position: absolute;
  bottom: 40px;
  right: 40px;

  width: 64px;
  height: 64px;
  border-radius: 35%;
  background: #15c3d6;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 770px) {
    top: 610px;
    background: #FFD666;
  }
`
