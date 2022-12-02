import React from "react";
import { SimpleText, Title } from "../../styles/styledGlobal";
import { SkillsContainer, SkillsHeader, SkillsContent, Skills } from "./styles";
import { CircleProgress } from "react-gradient-progress";

export const MySkills = () => {
  return (
    <>
      <SkillsContainer id="MySkills">
        <SkillsHeader>
          <Title color="#fff">Habilidades</Title>
        </SkillsHeader>
        <SkillsContent>
          <Skills>
            <CircleProgress
              percentage={90}
              width="150"
              fontColor="#32E7F0"
              fontSize="48"
              strokeWidth="9"
              secondaryColor="#121212"
            />
            <SimpleText>ReactJS</SimpleText>
          </Skills>
          <Skills>
            <CircleProgress
              percentage={100}
              width="150"
              fontColor="#32E7F0"
              fontSize="48"
              strokeWidth="9"
              secondaryColor="#121212"
            />
            <SimpleText>NextJS</SimpleText>
          </Skills>
          <Skills>
            <CircleProgress
              percentage={70}
              width="150"
              fontColor="#32E7F0"
              fontSize="48"
              strokeWidth="9"
              secondaryColor="#121212"
            />
            <SimpleText>Typescript</SimpleText>
          </Skills>
          <Skills>
            <CircleProgress
              percentage={80}
              width="150"
              fontColor="#32E7F0"
              fontSize="48"
              strokeWidth="9"
              secondaryColor="#121212"
            />
            <SimpleText>Javascript</SimpleText>
          </Skills>
          <Skills>
            <CircleProgress
              percentage={100}
              width="150"
              fontColor="#32E7F0"
              fontSize="48"
              strokeWidth="9"
              secondaryColor="#121212"
            />
            <SimpleText>Html</SimpleText>
          </Skills>
          <Skills>
            <CircleProgress
              percentage={100}
              width="150"
              fontColor="#32E7F0"
              fontSize="48"
              strokeWidth="9"
              secondaryColor="#121212"
            />
            <SimpleText>Css</SimpleText>
          </Skills>
        </SkillsContent>
      </SkillsContainer>
    </>
  );
};
