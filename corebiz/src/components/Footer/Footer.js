import React from 'react';
import whiteLogo from '../../assets/images/white_logo.svg';

import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <div className="content_left">
          <img src={whiteLogo} alt="whiteLogo" />
        </div>
        <div className="content_middle">
          <img src={whiteLogo} alt="whiteLogo" />
        </div>
        <div className="content_right">
          <img src={whiteLogo} alt="whiteLogo" />
        </div>
      </Content>
    </Container>
  );
}
