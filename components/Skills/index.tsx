import React from "react";
import { SimpleText, Title } from "../../styles/styledGlobal";
import { SkillsContainer, SkillsHeader, SkillsContent, Skills } from "./styles";

export const MySkills = () => {
  return (
    <>
      <SkillsContainer id="MySkills">
        <SkillsHeader>
          <Title color="#fff">Habilidades</Title>
        </SkillsHeader>
        <SkillsContent>
          <Skills>
            <Title>Em Breve</Title>
            <SimpleText>GraphQL</SimpleText>
            <SimpleText>Sql</SimpleText>
            <SimpleText>NodeJS</SimpleText>
            <SimpleText>Express</SimpleText>
            <SimpleText>Nest</SimpleText>
          </Skills>
          <Skills>
            <Title>Em Desenvolvimento</Title>
            <SimpleText>Inglês</SimpleText>
            <SimpleText>Typescript</SimpleText>
          </Skills>
          <Skills>
            <Title>Nível Júnior</Title>
            <SimpleText>Html</SimpleText>
            <SimpleText>Css</SimpleText>
            <SimpleText>Javascript</SimpleText>
            <SimpleText>ReactJS</SimpleText>
            <SimpleText>NextJS</SimpleText>
            <SimpleText>Styled-Components</SimpleText>
          </Skills>
        </SkillsContent>
      </SkillsContainer>
    </>
  );
};
