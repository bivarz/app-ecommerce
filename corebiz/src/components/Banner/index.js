import React from 'react';
import img from '../../assets/images/banner_img.png';
import bannerBlack from '../../assets/images/banner_black.png';
import { Container, Content } from './styles';

export default function index() {
  return (
    <Container>
      <Content>
        <div className="banner">
          <div className="banner_text">
            <span>Olá, o que você está buscando?</span>
            <p>Criar ou migrar seu e-commerce? </p>
          </div>
          <div className="banner_black">
            <img src={bannerBlack} alt="black" />
          </div>
        </div>
        <div>
          <div>
            <div className="banner_image">
              <img src={img} alt="banner" />
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
