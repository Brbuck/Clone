import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 0px;

    >p{
        font-size: 1rem;
        padding-bottom: 10px;
        color: #363636;
    }

    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #D3D3D3;
        padding-bottom: 30px;

        >input{
            border-radius: 6px;
            border: 1px solid #A9A9A9;
            padding: 12px 25px;
            outline: none;
            
        }

        >button{
            cursor: pointer;
            border-radius: 6px;
            border: 1px solid #A9A9A9;
            padding: 12px;
            background-color: #00BFFF;
            color: #fff;

        }

    }

    >button{
        cursor: pointer;
        margin-top: 30px;
        padding: 12px;
        border-radius: 6px;
        border: 1px solid #A9A9A9;
        background-color: #32CD32;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 400;
    }
        
  

  
`;
