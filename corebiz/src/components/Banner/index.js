import React from 'react';
import img from '../../assets/images/banner_img.png';
import { Container } from './styles';

export default function index() {
  return (
    <Container>
      <div className="banner">
        <div className="banner_black_overflow">
          <div className="banner_black">
            <span />
          </div>
          <figure>
            <img src={img} alt="banner" />
          </figure>
        </div>
      </div>
    </Container>
  );
}
