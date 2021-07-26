import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkTo = styled(Link)`
display: block;
width: 10rem;
text-align: center;
font-size: 25px;
margin: 2rem auto;
border-radius: 5px;
background-color: blue;
color: #fff;
text-decoration: none;
`

export const LinkHeader = styled(Link)`
display: block;
width: 15rem;
font-size: 40px;
margin: 2rem auto;
text-decoration: none;
`

export const Container = styled.div`
  width: 80%;
  margin: auto;

  .nav{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  .cart{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    font-size: medium;
  }

  section{
      height: 100vh;
      width: 100%;
      background: #e2e2;
      display: grid;
      grid-template-columns: 250px 250px 250px;
      grid-template-rows: auto;
      justify-content: space-around;

      .product-content{
          display: grid;
          text-align: center;
          height: 300px;
          width: 280px;
          background: #fff;
          border-radius: 12px;
          padding: 12px;
          justify-content: center;
      }
  }

html{
    scroll-behavior: smooth;
}

.section-container{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background-section-one{
    background-image: url(../assets/fundo.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
}

.background-section-two{
    background-image: url(../assets/fundo2.jpeg);
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
}

.card-container{
    background: #fff;
    border-radius: 25px;
    padding: 25px;
    max-width: 450px;
}

input{
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 12px;
    background: #000;
    color: #fff;
}

form{
    display: grid;
}

footer{
    height: 150px;
    padding: 25px;
    text-align: center;
    background-color: #000;
    color: #fff;
}

`;
