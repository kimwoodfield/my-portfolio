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
  border: 5px solid #90a4ae;
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
  margin-top: 23px;
  margin-bottom: 5px;
  line-height: 1.33

  @media (min-width: 1025px) {
    margin-top: 0;
    padding: 0;
  }
`;

const Description = styled.div`
  font-size: 16px;
  font-family: Roboto, sans-serf;
  line-height: 30px;
  padding: 16px 0;
  text-align: left;

  & p:nth-child(2) {
    padding-top:16px;
}
`;

const Link = styled.a`
  color: #90a4ae;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Icons = styled.div`
  display: flex;

  & div:nth-child(2) {
    margin-left:16px;
`

const Icon = styled.div`
  font-size: 28px;
  cursor: pointer;
`

const IconLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: 400ms color;

  &:hover {
    color: #90a4ae;
  }
  &:visted {
    color: ${({ theme }) => theme.text};
  }
  &:active {
    color: ${({ theme }) => theme.text};
  }

  & div:nth-child(1) {
    padding-right:16px;
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
          I'm currently a junior frontend developer at{" "}
          <Link href="https://thirteendigital.com.au" target="_blank">
            Thirteen Digital
          </Link>. My main focus is frontend but I like working with backends and databases too!
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
