import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Nunito Sans", sans-serif;
    font-optical-sizing: auto;
    
    background-color: ${({theme}) => theme["gray-dark"]};
    color:  ${({theme}) => theme.white}
  }
`