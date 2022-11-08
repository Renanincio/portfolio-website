import React from "react";
import { Title } from "../../styles/styledGlobal";
import { FooterContainer, FooterContent, FooterForm } from "./styles";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
        <FooterForm>
          <fieldset>
            <legend>
              <Title color="#32E7F0">Fale Comigo!</Title>
            </legend>
            <label for="name">Nome:</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Digite seu nome"
            ></input>
            <label for="email">E-mail:</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Digite seu e-mail"
            ></input>
            <input
              type="hidden"
              name="_next"
              value="https://localhost:300/"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <label for="message">Mensagem:</label>
            <textarea
              name="message"
              required
              placeholder="Digite sua mensagem"
            ></textarea>
            <button type="submit">Send</button>
          </fieldset>
        </FooterForm>
        </FooterContent>
      </FooterContainer>
    </>
  );
};
