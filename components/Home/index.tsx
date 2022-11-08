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

export const HomePage = () => {
  const [menu, setMenu] = useState(true);

  const showMenu = () => setMenu(!menu);

  return (
    <>
      <HomeContainer id="Home" background="/image/banner-bg.png">
        <NavMenu isVisible={menu}>
          <ul>
            <li>
              <a onClick={showMenu}>
                <HiSquaresPlus />
              </a>
            </li>
            <li className="dontShow">
              <a href="#Home">
                <FaHome />
              </a>
            </li>
            <li className="dontShow">
              <a href="#MySkills">
                <SiAboutdotme />
              </a>
            </li>
            <li className="dontShow">
              <a href="#Projects">
                <GoProject />
              </a>
            </li>
            <li className="dontShow">
              <a href="#Contact">
                <RiContactsFill />
              </a>
            </li>
            <li className="dontShow">
              <a>
                <GoMarkGithub />
              </a>
            </li>
            <li className="dontShow">
              <a>
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </NavMenu>
        <HomeContent>
          <HomeContentLeft>
            <Title color="#32E7F0">Olá, meu nome é Renan</Title>
            <Subtitle color="#fff">
              <Typical
                steps={[
                  'Eu sou desenvolvedor web',
                  3000,
                  '',
                  3000,
                  'Eu sou desenvolvedor web',
                  3000,
                ]}
                loop={Infinity}
              />
            </Subtitle>
            <SimpleText color="#32E7F0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              illo cumque animi exercitationem harum aspernatur ipsam at a error
              asperiores.
            </SimpleText>
          </HomeContentLeft>

          <HomeContentRight>
            <img src="image/—Pngtree—astronout riding rocket_6092004.png"></img>
          </HomeContentRight>
        </HomeContent>
      </HomeContainer>
    </>
  );
}
