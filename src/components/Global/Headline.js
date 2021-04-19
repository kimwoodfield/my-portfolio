import Link from 'next/link'

import styled from 'styled-components'

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    background-color: #212121;
`

const Title = styled.a`
    font-family: Roboto, sans-serif;
    font-weight: 900;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
    color: #9E9E9E;
    text-align: center;
    transition: color 1s;
    text-decoration: none;

    &:hover {
        color: white;
        cursor: pointer;
    }
`

export default function Headline() {
    return (
        <Wrapper>
            <Link href="/" passHref>
                <Title>Kim's Hangout</Title>
            </Link>
        </Wrapper>
    )
}