import React from 'react';
import { Container } from './styles';

import Banner from '../../components/Banner';
import Products from '../../components/Products';

import FormIn from '../../components/Input';

export default function index() {
  return (
    <Container>
      <div className="container_banner" />
      <Banner />
      <Products />
      <div className="container_form">
        <FormIn />
      </div>
    </Container>
  );
}
