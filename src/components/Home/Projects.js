import ProjectCard from "../Projects/ProjectCard";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(66, 66, 66);
  // border: 2px dashed salmon;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  // padding-bottom: 100px;
`;

const TitleWrap = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 90%;
  padding: 30px 0;
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    width: 630px;
  }
`;

const Title = styled.p`
  color: #eeeeee;
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
  background-color: #eeeeee;
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
  align-items: center;
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
