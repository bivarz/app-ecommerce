import React from 'react';
import { Container } from './styles';

import Banner from '../../components/Banner';

import FormIn from '../../components/Input';

export default function index() {
  return (
    <Container>
      <div className="container_banner" />
      <Banner />
      <div className="container_form">
        <FormIn />
      </div>
    </Container>
  );
}
