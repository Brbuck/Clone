import React from 'react';

import { Container } from './styles';

function Pag() {
  return (
      <Container>
          <div>
            <p>R$ 4.120, 00</p>
            <span> 	&darr; 8%</span>
          </div>
          <h1>R$ 4.120, 00</h1>
          <p>em 1x no <strong>Cartão de Credito</strong></p>
          <a href="#">Mais formas de pagamento</a>
      </Container>
  );
}

export default Pag;