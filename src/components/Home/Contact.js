import styled from 'styled-components'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Wrapper = styled.div`
    background-color: rgb(66,66,66);
    // border: 2px dashed salmon;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 50px;

    @media (max-width: 400px) {
        padding-bottom: 75px;
    }
`

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
`

const Title = styled.p`
    color: #EEEEEE;
    font-family: Roboto, sans-serif;
    font-size: 35px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    padding-right: 10px;
`

const Description = styled.p`
    font-size: 18px;
    color: #EEEEEE;
    font-family: Roboto, sans-serf;
    width: 90%;
    text-align: left;

    @media (min-width: 700px) {
        width: 630px;
    }
    @media (min-width: 1025px) {
        font-size: 20px;
        padding-top: 0;
    }
`

const IconWrapper = styled.div`
    box-sizing: border-box;
    font-size: 50px;
    margin: 0;
    width: 90%;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 700px) {
        width: 630px;
    }
`

const Link = styled.a`
    color: #90A4AE;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const Line = styled.hr`
    flex-grow: 2;
    background-color: #EEEEEE;
    border: none;
    outline: none;
    height: 3px;
`

export default function Contact() {
    return (
        <Wrapper>
            <TitleWrap>
                <Title>- Contact</Title>
                <Line />
            </TitleWrap>
            <Description>Want to chat? <Link href="mailto:kimwoodfield@hotmail.com">Drop me a line!</Link></Description>
        </Wrapper>
    )
}