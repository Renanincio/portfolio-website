import styled from "styled-components";

export const ProjectsContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ProjectsHeader = styled.header`
  max-width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  span{
    background-color: #121212;
    color: #fff;
    padding: 7px 12px;
    margin: 7px;
    font-size: 16px;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    transition: all .2s;
  }

  span:hover{
    background-color: #32E7F0;
    color: #121212;
    border-color: #121212;
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  width: 80%;
  min-height: 500px;
  background-color: #121212;
  border-bottom: 5px solid #32E7F0;
  margin: 0 auto;

  h1{
    margin: 14px auto;
  }
`

export const Project = styled.div`
   width: 250px;
   height: 150px;
   border-radius: 12px;
   background-image: url(${props => props.background});
   background-blend-mode: multiply;
   background-size: 100% 100%;
   margin: 14px 7px 14px 14px;
   transition: all .2s;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #32E7F0;

   &:hover{
    background-color: rgba(11, 12, 16, .7);
   }

   a{
    font-size: 12px;
    margin-top: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all .2s;
    color: #32E7F0;
   }

   span{
    margin: 7px;
    font-size: 16px;
    opacity: 0;
    visibility: hidden;
    transition: all .2s;
   }

   &:hover a, &:hover span{
    opacity: 1;
    visibility: visible;
   }
`
