import styled, { css } from "styled-components";

type BackgroundImage = {
  backgroundImage: string;
};

export const ProjectsContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ProjectsHeader = styled.header`
  max-width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  span {
    background-color: #121212;
    color: #fff;
    padding: 7px 12px;
    margin: 7px;
    font-size: 16px;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;
  }

  span:hover {
    background-color: #32e7f0;
    color: #121212;
    border-color: #121212;
  }
`;

export const ProjectsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 500px;
  margin: 0 auto;

  h1 {
    margin: 14px auto;
  }

  @media (max-width: 720px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    min-height: min-content;
    cursor: grab;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;

    h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 12px;
    }
  }
`;

export const Project = styled.div<BackgroundImage>`
  ${({ backgroundImage }) => css`
    width: 750px;
    max-width: 100%;
    height: 450px;
    border-radius: 12px;
    background-image: url(${backgroundImage});
    background-blend-mode: multiply;
    background-size: 100% 100%;
    margin: 0px auto;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #32e7f0;

    &:hover {
      background-color: rgba(11, 12, 16, 0.7);
    }

    a {
      font-size: 12px;
      margin-top: 20px;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s;
      color: #32e7f0;
    }

    span {
      margin: 7px;
      font-size: 16px;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s;
    }

    &:hover a,
    &:hover span {
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 720px) {
      height: 300px;
    }

    @media (max-width: 380px) {
      height: 200px;
    }
  `}
`;
