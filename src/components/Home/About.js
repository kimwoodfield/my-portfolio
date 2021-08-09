import styled from "styled-components";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  text-align: left;
  padding: 25px;
  padding-bottom: 26px;
  
  @media (min-width: 1025px) {
    max-width: 544px;
  }

`;

const ImageOutline = styled.div`
  border: ${({ theme }) => theme.secondaryBorder};
  margin: 0;
  padding: 8px;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`

const Title = styled.h2`
  font-size: 40px;
  font-family: Roboto, sans-serf;
  font-weight: 900;
  padding: 18px 0 10px 0;
`;

const Description = styled.div`
  font-size: 16px;
  font-family: Roboto, sans-serf;
  line-height: 30px;
  text-align: left;
  padding: 0;
  margin: 0;

  & p:nth-child(2) {
    /* padding-top:10px; */
    margin-bottom: 20px;
}
`;

const Link = styled.a`
  color: ${({ theme }) => theme.secondaryColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Icons = styled.div`
  display: flex;

  & div:nth-child(2) {
    margin-left:16px;
  }
`

const Icon = styled.div`
  font-size: 28px;
  cursor: pointer;
`

const IconLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: 400ms color;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
  &:visted {
    color: ${({ theme }) => theme.text};
  }
  &:active {
    color: ${({ theme }) => theme.text};
  }

  & div:nth-child(1) {
    padding-right:16px;
  }
`

export default function About() {
  return (
    <Wrapper>
      <ImageOutline>
        <Image src="/me.jpg" />
      </ImageOutline>
      <Title>Hi, I'm Kim.</Title>
      <Description>
        <p>
          I'm currently working as a full-stack developer. My main focus is frontend but I'm fascinated with all areas of an application.
        </p>
        <p>
          When I'm not coding I'm either at the gym, trying a new restaurant or hanging with friends.
        </p>
      </Description>
      <Icons>
        <Icon>
          <IconLink href="https://github.com/kimwoodfield">
            <AiOutlineGithub />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink href="https://www.linkedin.com/in/kim-woodfield/">
            <AiFillLinkedin />
          </IconLink>
        </Icon>
      </Icons>
    </Wrapper>
  );
}
