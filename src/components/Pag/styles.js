import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    padding-bottom: 30px;
    border-bottom: 1px solid #D3D3D3;

    >div{
        display: flex;
        align-items: center;
        

        >p{
            font-size: 1rem;
            padding: 0px 5px;
            color: #363636;
        }

        >span{
            font-size: 0.8rem;
            font-weight: 600;
            padding: 2px 5px;
            border-radius: 8px;
            background-color:  	#32CD32;
            color: #fff;
        }
    }

    >h1{
        color: #4F4F4F;
        font-weight: 900;
    }

    >a{
        color: #1C1C1C;
        padding-top: 5px;
        border-bottom: 1px solid  #1C1C1C;
        width: 180px;
    }
`;
