import styled from "styled-components";

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
  margin: 0px;
  padding: 0px;
  
  ul{
    position: fixed;
    top: 40%;
    left: 20px;
    height: 200px;
    width: 30px;
    background-color: black;
    border-radius: 30px;
  }

  ul li{
    list-style: none;
  }

  ul li a{
    text-decoration: none;
    color: white;
    font-size: 24px;
  }
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
  max-width: 50%;
`

export const HomeContentRight = styled.div`
  display: flex;
  align-items: center;
  max-width: 50%;
  justify-content: end;

  img{
    width: 400px;
    height: 400px;
  }
`