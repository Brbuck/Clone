import styled from 'styled-components';

export const Container = styled.div`
    padding:25px;

    >div{
        display: flex;
        align-items: center;
        
        >a{
            color: 	#1C1C1C;
            
            margin-left: 10px;
        }

        >a + a{
            margin-left: 20px;
            border-left: 1px solid #1C1C1C;
            padding: 0px 0px 0px 15px;
        }
    }

    >img{
        width: 100%;
        max-width: 400px;
    }
  
`;
