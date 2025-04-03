import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Nunito", serif;
    background-color: ${({theme}) => theme["base-background"]};
    color:  ${({theme}) => theme["base-text"]};
  }
`