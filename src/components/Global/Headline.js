import Link from 'next/link'
import styled from 'styled-components'
import useDarkMode from "use-dark-mode";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "../Global/ThemeConfig";
import { BsSun, BsMoon } from "react-icons/bs";


const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 60px;
    padding-right: 20px;
    width: 100%;
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
const Icon = styled.div`
    font-size: 24px;
    cursor: pointer;
`

export default function Headline() {
    const darkmode = useDarkMode(true);
    const theme = darkmode.value ? darkTheme : lightTheme;
    return (
        <Wrapper>
            <Icon
                type="submit"
                onClick={darkmode.toggle}
                >
                { theme === darkTheme ? (
                    <BsMoon />
                ) : (
                    <BsSun />
                )
                }

            </Icon>
        </Wrapper>
    )
}