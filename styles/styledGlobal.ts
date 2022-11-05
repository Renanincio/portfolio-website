import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  li{
    list-style: none;
  }

  html{
    scroll-behavior: smooth;
  }

  button{
    border: 0 none;
    cursor: pointer;
  }

  input{
    border: 0 none;
    outline: none;
  }
`


export default GlobalStyle
