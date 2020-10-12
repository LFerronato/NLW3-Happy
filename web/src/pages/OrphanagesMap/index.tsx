import React from 'react';
import { FiPlus } from 'react-icons/fi'

import { Map, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet'
import { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

import {
  Container,
  Content,
  Main,
  LocationContainer,
  ButtonNav,
} from './styles';

import mapMarker from '../../assets/map-marker.svg'

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Content>


        <Main>
          <div>
            <img src={mapMarker} alt="Logo Happy" height="72px" width="64px" />
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </div>
          <LocationContainer>
            <strong style={{ fontWeight: 800 }}>Curitiba</strong>
            <span>Paraná</span>
          </LocationContainer>
        </Main>

        <Map
          center={[-25.4539228, -49.201581]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker position={[-25.4539228, -49.201581]} icon={icon({ iconUrl: mapMarker })} >
            <Popup><span>A pretty CSS3 popup. <br /> Easily customizable.</span></Popup>
          </ Marker>
        </Map>


        <ButtonNav to="/">
          <FiPlus size={26} color="#fff" />
        </ButtonNav>
      </Content>
    </Container >
  );
};

export default OrphanagesMap;
