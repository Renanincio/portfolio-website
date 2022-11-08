import React, { useState } from "react";
import { Title } from "../../styles/styledGlobal";
import {
  Project,
  ProjectsContainer,
  ProjectsContent,
  ProjectsHeader,
} from "./styles";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";

export const Projects = () => {
  const [projectsSection, setProjectsSection] = useState(1);

  return (
    <>
      <ProjectsContainer id="Projects">
        <ProjectsHeader>
          <span onClick={() => setProjectsSection(1)}>1</span>
          <span onClick={() => setProjectsSection(2)}>2</span>
          <span onClick={() => setProjectsSection(3)}>3</span>
        </ProjectsHeader>
        <ProjectsContent>
          {projectsSection == 1 && (
            <>
              <Project background="/image/f182bca9-22c8-42d0-8619-6e025c5238ad.png">
                <p>
                  <span>
                    <SiReact />
                  </span>
                  <span>
                    <SiHtml5 />
                  </span>
                  <span>
                    <SiCss3 />
                  </span>
                  <span>
                    <SiJavascript />
                  </span>
                </p>
                <a href="#">
                  Veja mais
                  <TbExternalLink />
                </a>
              </Project>
              <Project background="/image/2022-10-20.png">
                <p>
                  <span>
                    <SiNextdotjs />
                  </span>
                  <span>
                    <SiHtml5 />
                  </span>
                  <span>
                    <SiCss3 />
                  </span>
                  <span>
                    <SiJavascript />
                  </span>
                </p>
                <a href="#">
                  Veja mais
                  <TbExternalLink />
                </a>
              </Project>
            </>
          )}

          {projectsSection == 2 && (
            <>
              <Title color="#32E7F0">Ainda não há projetos nesta seção</Title>
            </>
          )}

          {projectsSection == 3 && (
            <>
              <Title color="#32E7F0">Ainda não há projetos nesta seção</Title>
            </>
          )}
        </ProjectsContent>
      </ProjectsContainer>
    </>
  );
};
