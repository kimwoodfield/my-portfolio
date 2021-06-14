import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#FFF',
    title: '#171923',
    text: '#131313',
    toggleBorder: '#FFF',
    background: '#F7FAFC',
    cardBackground: '#d3d3d3',
};

export const darkTheme = {
    body: '#131313',
    title: '#F7FAFC',
    text: '#F7FAFC',
    toggleBorder: '#6B8096',
    background: '#131313',
    cardBackground: '#212121',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Roboto, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  },
`;