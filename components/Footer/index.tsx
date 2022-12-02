import React from "react";
import { Title } from "../../styles/styledGlobal";
import { FooterContainer, FooterContent, FooterForm } from "./styles";

export const Footer = () => {
  return (
    <>
      <FooterContainer backgroundImage="./image/footer-bg.png">
        <FooterContent>
          <FooterForm>
            <fieldset>
              <legend>
                <Title color="#32E7F0">Fale Comigo!</Title>
              </legend>
              <div className="inputBox">
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Digite seu nome"
                ></input>
                <label htmlFor="email">E-mail:</label>
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
              </div>
              <div className="textBox">
                <label htmlFor="message">Mensagem:</label>
                <textarea
                  name="message"
                  required
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
              <button type="submit">Send</button>
            </fieldset>
          </FooterForm>
        </FooterContent>
      </FooterContainer>
    </>
  );
};
