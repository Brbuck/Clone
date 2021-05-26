import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  gap: 16px;

  @media screen and (max-width: 960px){
    grid-template-columns: 1fr;
  }

`;
