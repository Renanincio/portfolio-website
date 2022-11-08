import styled, { css } from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${props => props.background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

export const NavMenu = styled.nav`
  
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

  ${({ isVisible }) => isVisible && css`
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
`

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`

export const HomeContentLeft = styled.div`
  display: flex;
  flex-direction: column;

  p{
    padding-top: 14px;
    max-width: 500px;
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
`