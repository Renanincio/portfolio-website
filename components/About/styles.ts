import styled from "styled-components";

export const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const AboutHeader = styled.header`
   margin: 0 auto;
   height: 70px;
   display: flex;
   align-items: center;
`

export const AboutContent = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
  height: 100%;
  padding: 70px 0px 200px;

  @media(max-width: 1080px){

  }

  @media (max-width: 720px){
   flex-wrap: wrap;
   justify-content: center;
  }
`

export const ImageBox = styled.div`
   div{
    height: 450px;
    width: 350px;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -7px -7px 0px 0px #32E7F0;
   }

   div img{
    width: 340px;
    height: 350px;
   }

   @media (max-width: 720px){ 
      div{
         height: 350px;
         width: 250px;
      }

      div img{
         width: 90%;
         height: 250px;
      }
   }
`

export const InfoBox = styled.div`

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   color: white;

   .textbox{
      display: flex;
      justify-content: center;
      max-width: 700px;
   }

   .textbox-right, .textbox-left{
      display: flex;
      flex-wrap: wrap;
      margin: 20px 0px;
   }

   div p{
      margin: 5px;
   }

   div p span{
      font-weight: bold;
   }

   a{
      color: white;
      font-weight: bold;
      border: 1px solid #32E7F0;
      padding: 12px 0px;
      width: 180px;
      text-align: center;
      border-radius: 42px;
   }

   a span{
      background-color: #32E7F0;
      border-radius: 50%;
      margin-left: 10px;
      padding: 7px;
      color: black;
   }

   @media (max-width: 720px){
   justify-content: center;

   .textbox{
      justify-content: center;
   }
  }

  @media(max-width: 380px){
   a{
      padding: 7px 0px;
      font-size: 12px;
   }
  }
`