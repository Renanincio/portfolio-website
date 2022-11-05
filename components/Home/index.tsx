import { GoProject, GoMarkGithub } from "react-icons/go";
import { HiSquaresPlus } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import {
  HomeContainer,
  HomeContent,
  HomeContentLeft,
  HomeContentRight,
  NavMenu,
} from "./style";

export function HomePage() {
  return (
    <>
    <HomeContainer background='/image/banner-bg.png'>
      <NavMenu>
        <ul>
          <li><a><HiSquaresPlus /></a></li>
          <li><a><FaHome /></a></li>
          <li><a><GoProject /></a></li>
          <li><a><GrContact /></a></li>
          <li><a><GoMarkGithub /></a></li>
          <li><a><AiFillLinkedin /></a></li>
        </ul>
      </NavMenu>
      <HomeContent>
        <HomeContentLeft>
          <h1>Olá meu nome é Renan</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illo cumque animi exercitationem harum aspernatur ipsam at a error asperiores.</p>
        </HomeContentLeft>

        <HomeContentRight>
          <img src="image/—Pngtree—space rogue astronaut_6183821.png"></img>
        </HomeContentRight>
      </HomeContent>
    </HomeContainer>
    </>
  );
};

export default HomePage;
