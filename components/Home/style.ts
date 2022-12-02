import styled, { css } from "styled-components";

type BackgroundImage = {
  backgroundImage: string;
};

type MenuVisible = {
  isVisible: boolean;
};

export const HomeContainer = styled.main<BackgroundImage>`${({ backgroundImage }) => css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media(max-width: 720px){
    flex-direction: column;
    justify-content: space-evenly;
  }
  `}
`

export const NavMenu = styled.nav<MenuVisible>`${({ isVisible }) => css`
  
  ul{
    position: fixed;
    top: 25%;
    left: 20px;
    height: 380px;
    background-color: black;
    border-radius: 30px;
    transition: all .6s;
    z-index: 10;
  }

  ul li{
    list-style: none;
    margin: 15px 5px;
    display: flex;
    align-items: center;
    text-align: center;
    transition: all .6s;
  }

  ul li a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 24px;
    padding: 7px;
    transition: all .2s;
  }

    ul li:hover a{
    background-color: #32E7F0;
    color: black;
    border-radius: 50%;
  }

  ${isVisible && css`
    ul{
      border-radius: 50%;
      height: 50px;
      transition: all .6s;
      overflow: hidden;
    }

    ul li{
      margin: 5px;
      transition: all .6s;
    }
    
    ul .dontShow{
      opacity: 0;
      visibility: hidden;
    }
  `}
  `}

  @media(max-width: 720px){
    ul{
      top: 20px;
      right: 20px;
      width: 220px;
      height: min-content;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul li{
      margin: 9px 5px;
    }

    ul li a{
      font-size: 12px;
      padding: 4px;
    }

    ${({ isVisible }) => isVisible && css`
    ul{
      border-radius: 50%;
      width: 30px;
      height: 30px;
      transition: all .6s;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  `}
  }
`

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  margin: 0 auto;

  @media(max-width: 720px){
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const HomeContentLeft = styled.div`
  display: flex;
  flex-direction: column;

  p{
    padding-top: 14px;
    max-width: 500px;
  }

  @media(max-width: 720px){
    order: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    p{
      max-width: 100%;
      text-align: center;
    }
  }
`

export const HomeContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;

  img{
    width: 400px;
    height: 400px;
    animation: upDown 3s linear infinite;
  }

  @keyframes upDown{
    0%{
      transform: translateY(-20px);
    }

    50%{
      transform: translateY(20px);
    }

    100%{
      transform: translateY(-20px);
    }
  }

  @media(max-width: 1080px){
    img{
      width: 300px;
      height: 300px;
    }

  }

  @media(max-width: 720px){
    order: 0;
    justify-content: center;

    img{
      max-width: 100%;
      width: 250px;
      height: 200px;
    }
  }
`