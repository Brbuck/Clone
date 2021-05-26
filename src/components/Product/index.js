import React from 'react';
import ImageProducts from '../ImageProducts';
import Info from '../Info';

import { Container } from './styles';

function Product() {
  return (
      <Container>
          <ImageProducts />
          <Info />
      </Container>
  );
}

export default Product;