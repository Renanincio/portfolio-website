import styled, { css } from "styled-components";

type BackgroundImage = {
  backgroundImage: string;
};

export const FooterContainer = styled.footer<BackgroundImage>`
  ${({ backgroundImage }) => css`
    min-height: 30vh;
    position: absolute;
    width: 100%;
    background-image: url(${backgroundImage});
    background-size: 100% 100%;
  `}
`;

export const FooterContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const FooterForm = styled.form`
  background-color: #121212;
  border-top: 5px solid #32e7f0;
  padding: 30px;
  margin: -122px 0px 50px;

  fieldset {
    border: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  fieldset legend {
    margin: 12px;
  }

  fieldset label {
    color: white;
    margin-left: 12px;
  }

  fieldset input,
  textarea {
    margin: 12px;
    padding: 7px;
    border: 1px solid #32e7f0;
    border-radius: 4px;
    color: #32e7f0;
    background-color: #0b0c10;
  }

  fieldset button {
    background-color: #0b0c10;
    width: 74px;
    height: 36px;
    border-top: 3px solid #32e7f0;
    color: #32e7f0;
    transition: all 0.2s;
    align-self: end;
    margin-bottom: 19px;
    font-weight: bold;
  }

  fieldset button:hover {
    background-color: #32e7f0;
    color: #121212;
  }

  fieldset .inputBox {
    display: flex;
    flex-direction: column;
  }

  fieldset .textBox {
    display: flex;
    flex-direction: column;
  }

  fieldset .textBox textarea {
    width: 250px;
    height: 120px;
  }

  @media (max-width: 660px) {
    fieldset {
      flex-direction: column;
      align-items: center;
    }

    fieldset .textBox textarea,
    fieldset .inputBox input {
      width: 170px;
      margin: 7px auto;
    }

    button {
      margin: 15px auto 0;
    }
  }
`;
