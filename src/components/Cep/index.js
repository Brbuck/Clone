import React from 'react';

import { Container } from './styles';

function Cep() {
  return (
      <Container>
        <p>Loja parceira perto de você</p>
        <div>
          <input type="number" placeholder="digite seu Cep " />
          <button>OK</button>
        </div>
        <button>Comprar</button>
      </Container>
  );
}

export default Cep;