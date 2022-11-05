import React from "react";
import { HeaderContainer, Links } from "./style";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Links>
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </Links>
      </HeaderContainer>
    </>
  );
};
