import styled from 'styled-components'

const Wrapper = styled.article`
background: url('/hero-9.jpg');
background-size: cover;
background-position: bottom;
    background-color: #424242;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 550px;
    text-align: center;

    @media (min-width: 1025px) {
        height: 92vh;
        background-position: center left;
    }
`

const Overlay = styled.div`
    background-color: rgba(66, 66, 66, 0.8);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: 45px;
    color: #EEEEEE;
    font-family: Roboto, sans-serf;
    font-weight: 900;
    margin-top: 16px;
    margin-bottom: 5px;
    padding: 5px;

    @media (min-width: 768px) {
        font-size: 55px;
    }
    @media (min-width: 1025px) {
        font-size: 65px;
        margin-top: 0;
        padding: 0;
    }
`

const Bio = styled.h3`
    font-size: 20px;
    color: #EEEEEE;
    font-family: Roboto, sans-serf;
    font-weight: 500;
    margin-bottom: 30px;
`

const Description = styled.p`
    font-size: 18px;
    color: #EEEEEE;
    font-family: Roboto, sans-serf;
    width: 90%;
    line-height: 30px;
    padding-top: 10px;
    padding: 0 25px;
    text-align: left;

    @media (min-width: 700px) {
        width: 630px;
        padding: 0 20px;
    }
    @media (min-width: 1025px) {
        font-size: 20px;
        padding-top: 0;
    }
`

const Link = styled.a`
    color: #90A4AE;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export default function About() {
    return (
        <Wrapper>
            <Overlay>
                <Title>Hi, I'm Kim</Title>
                <Bio>I build websites and stuff.</Bio>
                <Description>I'm currently a frontend developer at <Link href="https://thirteendigital.com.au" target="_blank">Thirteen Digital</Link>. I enjoy exercising and trying new food in my spare time. Stick around and watch this site change over time.</Description>
            </Overlay>
        </Wrapper>
    )
}