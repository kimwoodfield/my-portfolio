import styled from 'styled-components'
import { AiOutlineGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 310px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    padding-bottom: 20px;

    @media (min-width: 700px) {
        flex-direction: row;
        padding-bottom: 20px;
        width: 100%;
    }
`

const TitleWrapper = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    @media (min-width: 375px) {
        margin: 0 auto;
    }
`

const ProjectTitle = styled.h4`
    font-family: Roboto, sans-serif;
    font-size: 24px;
    padding-bottom: 10px;
    font-weight: 900;
`

const Image = styled.img`
    height: 175px;
    width: 100%;
    margin-bottom: 7px;

    @media (min-width: 375px) {
        width: 333px;
    }
    @media (min-width: 700px) {
        opacity: 0.5;
        transition: opacity 1s;

        &:hover {
            opacity: 1;
        }
    }
`

const DescriptionWrapper = styled.div`
    background-color: ${({ theme }) => theme.cardBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    padding: 15px 15px 0 15px;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    height: 95px;
    overflow: scroll;
    // border: 2px dashed yellow;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;

    @media (min-width: 700px) {
        height: 175px;
        width: 290px;
    }
`

const StackLinksWrap = styled.div`
    display: flex;
    align-items: center;
`

const IconWrap = styled.div`
    color: #EEEEEE;
    font-size: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 10px;
    
    @media (min-width: 700px) {
        padding-right: 40px;
    }
`

const Stack = styled.p`
    font-family: Roboto, sans-serif;
    font-size: 12px;
    padding: 10px 0 10px 0;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 700;
    align-self: flex-start;
`

const Link = styled.a`
    color: ${({ theme }) => theme.text};
    transition: color 1s;

    &:hover {
        cursor: pointer;
    }

    &:nth-child(1) {
        font-size: 27px;
    }
    &:nth-child(2) {
        padding-left: 7px;
        font-size: 29px;
    }
`

const DescLinkWrapper = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;

    @media (min-width: 375px) {
        width: 333px;
    }

    @media (min-width: 700px) {
        padding-top: 39.5px;
    }
`



export default function ProjectCard(props) {
    return (
        <Card>
            <TitleWrapper>
                <ProjectTitle>{props.title}</ProjectTitle>
                <Image src={props.url} />
            </TitleWrapper>
            <DescLinkWrapper>
                <DescriptionWrapper>
                    <p>{props.description}</p>
                    <Stack>{props.stack}</Stack>
                </DescriptionWrapper>
                <IconWrap>
                    <Link href={props.github} target="_blank">
                        <AiOutlineGithub />
                    </Link>
                    <Link href={props.live} target="_blank">
                        <MdOpenInNew />
                    </Link>
                </IconWrap>
            </DescLinkWrapper>
        </Card>
    )
}