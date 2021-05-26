import styled from 'styled-components';
import Photo from '../../assets/banner_desk.png'

export const Container = styled.div`
  height: 90vh;
  background-image: url('${Photo}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem 4rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
 

 >div{
   display: flex;
   flex-direction: column;
   width: 460px;
   

     >h2{
      color: #fff;
      font-size: 2rem;
    }

    >h3{
          color: #2bc8c8;
          font-size: 2rem;
          margin: .1rem 0rem 0.6rem 0rem;
    }

    >p{
        color: #fff;
        font-size: 1.6rem;
    }

    >div{
      display: flex;
      justify-content: space-between;
    }

 }


`;
