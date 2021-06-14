import ProjectCard from "../Projects/ProjectCard";

import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  padding: 25px;

  @media (min-width: 1000px) {
    padding-left: 50px;
 }
 @media (min-width: 1000px) {
  padding-bottom: 0;
}
`;

const TitleWrap = styled.div`
  margin: 0;
  box-sizing: border-box;
  padding: 30px 0;
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 700px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
     padding-top: 0;
     max-width: 626.45px;
  }
`;

const Title = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 35px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding-right: 10px;
`;

const Line = styled.hr`
  flex-grow: 2;
  background-color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  height: 3px;
`;

const ProjectsWrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;


`;

export default function Projects() {
  return (
    <Wrapper>
      <TitleWrap>
        <Title>- Projects</Title>
        <Line />
      </TitleWrap>
      <ProjectsWrap>
        <ProjectCard
          title="Workout Tracker"
          url="/workout-tracker-screenshot.png"
          description="A React app that enables users to log workouts and track their progress."
          stack="Next.JS, Express, MySQL"
          github="https://github.com/kimwoodfield/workout-tracker"
          live="https://workout-tracker-red.vercel.app/"
        />
        <ProjectCard
          title="Anime Explorer"
          url="/anime-explorer-screenshot.png"
          description="An anime search engine that assists users looking for new anime to watch."
          stack="JavaScript, Html, Css"
          github="https://github.com/kimwoodfield/anime-explorer"
          live="https://kimwoodfield.github.io/anime-explorer/"
        />
        <ProjectCard
          title="Personal Portfolio"
          url="/portfolio-screenshot.png"
          description="The site you're on right now!"
          stack="Next.js, styled-components"
          github="https://github.com/kimwoodfield/my-portfolio"
          live="https://woodfield.dev/"
        />
      </ProjectsWrap>
    </Wrapper>
  );
}
