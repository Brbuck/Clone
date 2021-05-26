import React from 'react';
import Pag from '../Pag';
import Cep from '../Cep'

import { Container } from './styles';

function Price() {
  return (
      <Container>
          <Pag />
          <Cep />
      </Container>
  );
}

export default Price;