import styled from 'styled-components'
import Skill from '../Skills/IconBox'
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextDotJs } from "react-icons/si";
import { SiStyledComponents } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiSass } from "react-icons/si";


const HTML = <SiHtml5 />
const CSS = <SiCss3 />
const JavaScript = <SiJavascript />
const MySQL = <SiMysql />
const WordPress = <SiWordpress />
const Sass = <SiSass />
const React = <SiReact />
const Next = <SiNextDotJs />
const StyledComponents = <SiStyledComponents />
const Git = <SiGit />

const HTMLcolor = 'tomato';
const CSScolor = '#1572B6;'
const JavaScriptColor = '#F7DF1E;'
const MySQLcolor = '#4479A1;'
const WordPressColor = '#21759B;'
const SassColor = '#CC6699;'
const ReactColor = '#61DAFB;'
const NextColor = '#FFFFFF'
const StyledComponentsColor = '#DB7093;'
const GitColor = '#F05032;'

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25px;
`

const TitleWrap = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;

    @media (min-width: 700px) {
        width: 630px;
    }

    @media (min-width: 1000px) {
        padding-top: 0;
    }
`

const Title = styled.p`
    font-family: Roboto, sans-serif;
    font-size: 35px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    padding-right: 10px;
`

const Line = styled.hr`
    flex-grow: 2;
    background-color: ${({ theme }) => theme.title};
    border: none;
    outline: none;
    height: 3px;
`

const IconWrapper = styled.div`
    box-sizing: border-box;
    margin: 0;
    width: 90%;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 700px) {
        width: 630px;
    }
`

const IconContainer = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`

export default function Skills() {
    return (
        <Wrapper>
            <TitleWrap>
                <Title>- Skills</Title>
                <Line />
            </TitleWrap>
            <IconWrapper>
                <Skill icon={HTML} color={HTMLcolor}/>
                <Skill icon={CSS} color={CSScolor}/>
                <Skill icon={JavaScript} color={JavaScriptColor}/>
                <Skill icon={MySQL} color={MySQLcolor}/>
                <Skill icon={WordPress} color={WordPressColor}/>
                <Skill icon={Sass} color={SassColor}/>
                <Skill icon={React} color={ReactColor}/>
                <Skill icon={Next} color={NextColor}/>
                <Skill icon={StyledComponents} color={StyledComponentsColor}/>
                <Skill icon={Git} color={GitColor}/>
            </IconWrapper>
        </Wrapper>
    )
}