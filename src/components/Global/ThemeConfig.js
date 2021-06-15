import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#FFF',
    title: '#171923',
    text: '#131313',
    toggleBorder: '#FFF',
    background: '#F7FAFC',
    cardBackground: '#d3d3d3',
    secondaryColor: '#90A4AE',
    secondaryBorder: '5px solid #90A4AE'
};

export const darkTheme = {
    body: '#131313',
    title: '#F7FAFC',
    text: '#F7FAFC',
    toggleBorder: '#6B8096',
    background: '#131313',
    cardBackground: '#212121',
    secondaryColor: '#BC8F8F',
    secondaryBorder: '5px solid #BC8F8F'
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Roboto, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  },
`;