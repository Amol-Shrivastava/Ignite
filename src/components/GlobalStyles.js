import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: .5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 2.5rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3 {
    font-size: 1.3rem;
    color: #3a3a3a;
    /* padding: 1.2rem 0; */
  }
  p {
    font-size: 1rem;
    color: #696969;
  }
  a{
      text-decoration: none;
      color: #333;
  }
  img{
      display: block;
  }
  input{
      font-weight: bold;
      font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
