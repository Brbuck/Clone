import React, {useState} from 'react';


function Teste(props) {
    const feira =['Abacaxi', 'Limão', 'Batata']
  return(
      <>
      <ul>
          {feira.map((obj, ky) => (<li key={ky}>{`O ${ky} elemento é o ${obj}`}</li>))}
      </ul>
     

      </>
  );
}

export default Teste;