import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

   *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    scrollbar-width: 5px;
    scrollbar-color: #121212;
  }

  body{
    background-color: #0B0C10;
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

  input, textarea{
    border: 0 none;
    outline: none;
  }

  *::-webkit-scrollbar {
     width: 5px;
  }

  *::-webkit-scrollbar-track {
  background-color: none;
  }

  *::-webkit-scrollbar-thumb {
  background-color: #121212;
  border-radius: 30px;
}
`

export const Title = styled.h1`
   color: ${props => props.color};
`

export const Subtitle = styled.h2`
   color: ${props => props.color};
`

export const SimpleText = styled.p`
    color: ${props => props.color};
`

export default GlobalStyle