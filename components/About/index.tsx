import React from "react";
import { SimpleText, Title, Subtitle } from "../../styles/styledGlobal";
import {
  AboutContainer,
  AboutContent,
  InfoBox,
  ImageBox,
  AboutHeader,
} from "./styles";
import { FaDownload } from "react-icons/fa";

export const About = () => {
  return (
    <>
      <AboutContainer id="About">
        <AboutHeader>
          <Title color="#fff">Sobre mim</Title>
        </AboutHeader>
        <AboutContent>
          <ImageBox>
            <div>
              <img
                src="./image/pngwing.com.png"
                alt="Imagem ilustrativa de contato"
              ></img>
            </div>
          </ImageBox>
          <InfoBox>
            <Subtitle>Informações</Subtitle>
            <div className="textbox">
              <div className="textbox-left">
                <SimpleText>
                  <span>E-mail: </span>renanincioprgmdr@gmail.com
                </SimpleText>
                <SimpleText>
                  <span>Celular: </span>+55 21 97494-1136
                </SimpleText>
                <SimpleText>
                  <span>Frelancer: </span>Disponível
                </SimpleText>
                <SimpleText>
                  <span>Escolaridade: </span>Ensino médio
                </SimpleText>
              </div>
              <div className="textbox-right">
                <SimpleText>
                  <span>Nacionalidade: </span>Brasileiro
                </SimpleText>
                <SimpleText>
                  <span>Endereço: </span>Magalhães Bastos, Rio de Janeiro(RJ),
                  Brasil
                </SimpleText>
                <SimpleText>
                  <span>Idade: </span>18
                </SimpleText>
                <SimpleText>
                  <span>Nome: </span>Renan Inacio Lucena de Oliveira
                </SimpleText>
              </div>
            </div>
            <a href="#" download>
              Download CV
              <span>
                <FaDownload />
              </span>
            </a>
          </InfoBox>
        </AboutContent>
      </AboutContainer>
    </>
  );
};
