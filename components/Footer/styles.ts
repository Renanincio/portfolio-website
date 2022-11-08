import styled from "styled-components";

export const FooterContainer = styled.footer`
   background-color: #32E7F0;
   min-height: 30vh;
   position: absolute;
   width: 100%;
`

export const FooterContent = styled.div`
   width: 80%;
   margin: 0 auto;
`

export const FooterForm = styled.form`
   background-color: #121212;
   border-top: 5px solid #32E7F0;
   padding: 50px;
   margin: -122px 0px 50px;

   fieldset{
    border: none;
   }

   fieldset label{
    color: white;
   }

   fieldset input, textarea{
    margin: 12px;
    padding: 7px;
    border: 1px solid #32E7F0;
    border-radius: 4px;
    color: #32E7F0;
    background-color: #0B0C10;
   }

   fieldset button{
    background-color: #0B0C10;
    padding: 7px 14px;
    border-top: 3px solid #32E7F0;
    color: #32E7F0;
    transition: all .2s;
   }

   fieldset button:hover{
    background-color: #32E7F0;
    color: #121212;
   }
 `