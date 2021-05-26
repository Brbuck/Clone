import React from 'react';
import cell from '../../assets/2290963331_1GG.jpg'

import { Container } from './styles';

function ImageProducts() {
  return (
      <Container>
          <div>
              <a href="#">Favoritar</a>
              <a href="#">Compartilhar</a>
          </div>
          <img src={cell} />
      </Container>
  );
}

export default ImageProducts;