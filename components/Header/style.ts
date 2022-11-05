import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 70px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0 auto;
`

export const Links = styled.ul`
  display: flex;

  li{
    list-style: none;
  }

  li a{
    color: black;
    text-decoration: none;
  }
`
