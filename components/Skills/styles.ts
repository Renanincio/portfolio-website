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
  flex-wrap: wrap;
  max-width: 90%;
  width: 800px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media(max-width: 466px){
    justify-content: center;
  }
`

export const Skills = styled.div`
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  p{
    color: white;
    font-weight: bold;
  }
`
