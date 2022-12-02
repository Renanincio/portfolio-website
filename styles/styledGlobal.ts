import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
`;

export const Title = styled.h1`
  color: ${(props) => props.color};

  @media (max-width: 1080px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.color};

  @media (max-width: 1080px) {
    font-size: 18px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
  }
`;

export const SimpleText = styled.p`
  color: ${(props) => props.color};

  @media (max-width: 720px) {
    font-size: 12px;
  }

  @media (max-width: 380px) {
    font-size: 10px;
  }
`;

export default GlobalStyle;