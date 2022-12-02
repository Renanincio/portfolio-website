import { GoProject, GoMarkGithub } from "react-icons/go";
import { HiSquaresPlus } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import {
  HomeContainer,
  HomeContent,
  HomeContentLeft,
  HomeContentRight,
  NavMenu,
} from "./style";
import { useState } from "react";
import Typical from "react-typical";
import { SimpleText, Subtitle, Title } from "../../styles/styledGlobal";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const HomePage = () => {
  const [menu, setMenu] = useState(true);

  const showMenu = () => setMenu(!menu);

  return (
    <>
      <HomeContainer id="Home" backgroundImage="/image/banner-bg.png">
        <NavMenu isVisible={menu}>
          <ul>
            <abbr title="Menu">
              <li>
                <a onClick={showMenu}>
                  <HiSquaresPlus />
                </a>
              </li>
            </abbr>
            <abbr title="Início">
              <li className="dontShow">
                <a href="#Home">
                  <FaHome />
                </a>
              </li>
            </abbr>
            <abbr title="Habilidades">
              <li className="dontShow">
                <a href="#MySkills">
                  <SiAboutdotme />
                </a>
              </li>
            </abbr>
            <abbr title="Projetos">
              <li className="dontShow">
                <a href="#Projects">
                  <GoProject />
                </a>
              </li>
            </abbr>
            <abbr title="Informações">
              <li className="dontShow">
                <a href="#About">
                  <RiContactsFill />
                </a>
              </li>
            </abbr>
            <abbr title="GitHub">
              <li className="dontShow">
                <a href="https://github.com/Renanincio" target="_blank" rel="noopener noreferrer">
                  <GoMarkGithub />
                </a>
              </li>
            </abbr>
            <abbr title="LinkedIn">
              <li className="dontShow">
                <a href="https://www.linkedin.com/in/renan-inacio-968401240/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin />
                </a>
              </li>
            </abbr>
          </ul>
        </NavMenu>
        <HomeContent>
          <HomeContentLeft>
            <TrackVisibility>
              {(isVisible) => (
                <Title
                  color="#32E7F0"
                  className={
                    isVisible ? "animate__animated animate__bounceInLeft" : ""
                  }
                >
                  Olá, meu nome é Renan
                </Title>
              )}
            </TrackVisibility>
            <Subtitle color="#fff">
              <Typical
                steps={[
                  "Eu sou desenvolvedor web",
                  3000,
                  "",
                  3000,
                  "Eu sou desenvolvedor web",
                  3000,
                ]}
                loop={Infinity}
              />
            </Subtitle>
            <TrackVisibility>
              {(isVisible) => (
                <SimpleText
                  color="#32E7F0"
                  className={
                    isVisible ? "animate__animated animate__bounceInLeft" : ""
                  }
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                  illo cumque animi exercitationem harum aspernatur ipsam at a
                  error asperiores.
                </SimpleText>
              )}
            </TrackVisibility>
          </HomeContentLeft>

          <HomeContentRight>
            <TrackVisibility>
              {(isVisible) => (
                <img
                  src="image/—Pngtree—astronout riding rocket_6092004.png"
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                ></img>
              )}
            </TrackVisibility>
          </HomeContentRight>
        </HomeContent>
      </HomeContainer>
    </>
  );
};
