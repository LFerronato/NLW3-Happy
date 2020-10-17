import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import {
  Container,
  Content,
  Main,
  LocationContainer,
  ButtonNav,
} from './styles';

import mapMarker from '../../assets/map-marker.svg'
import mapIcon from '../../utils/mapIcon';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Content>
        <Main>
          <div>
            <Link to="/">
              <img src={mapMarker} alt="Logo Happy" height="72px" width="64px" />
            </Link>
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
          <Marker position={[-25.4539228, -49.201581]} icon={mapIcon} className="map-popup">
            <Popup>
              Lar das Crianca
              <Link to='/orphanages/1'>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </ Marker>
        </Map>


        <ButtonNav to="/orphanages/create">
          <FiPlus size={26} color="#fff" />
        </ButtonNav>
      </Content>
    </Container >
  );
};

export default OrphanagesMap;
