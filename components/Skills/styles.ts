import styled from "styled-components";

export const SkillsContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const SkillsHeader = styled.header`
  max-width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SkillsContent = styled.div`
  display: flex;
  max-width: 90%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
`

export const Skills = styled.div`
  width: 300px;
  height: 350px;
  padding: 30px 25px;
  margin: 12px;
  border-bottom: solid 5px #32E7F0;
  background-color: #121212;

  h1{
    color: #32E7F0;
    margin-bottom: 18px;
  }

  p{
    color: white;
    font-weight: bolder;
  }
`

