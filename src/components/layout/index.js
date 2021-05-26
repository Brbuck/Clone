import React from 'react';
import Price from '../Price';
import Product from '../Product';

import { Container } from './styles';

function Layout() {
  return (
      <Container>
          <Product />
          <Price />
      </Container>
  );
}

export default Layout;