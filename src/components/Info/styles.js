import styled from 'styled-components';

export const Container = styled.div`
    padding:25px;

    >h1{
        font-size: 1.3rem;
        margin-bottom: 10px;
        color: #363636;
    }

    >p{
        font-size: 1rem;
        margin-bottom: 10px;
        color: #363636;

    }

    >a{
        border-bottom: 1px solid #363636;
        color: #363636;
    }

    >div{
        border-bottom: 1px solid  #D3D3D3;
        margin: 25px 0px;
    }

    >a + a{
        margin-top: 30px;
    }
  
`;
