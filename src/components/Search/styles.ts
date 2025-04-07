import { styled } from "styled-components";

export const ContainerSearch = styled.div`
  

  & > form{
    display: flex;
    justify-content: space-between;

    overflow: hidden;
    background-color: ${({theme}) => theme.white};
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme["grey-light"]};

    min-width: 503px;

    & > input{
      flex: 1;

      border: none;
      outline: none;
      border: 2px solid #fff;

      background-color: ${({theme}) => theme.white};

      color: ${({theme}) => theme.black};
      padding: 1rem;

      font: 600 1.25rem 'Nunito Sans', sans-serif;

      &::placeholder{
        color: ${({theme}) => theme.black}; 
        opacity: 0.65;
        
      }
    }

    & > button{
      border: none;
      outline: none;

      height: 62px;
      width: 62px;
      background-color: ${({theme}) => theme.blue};
      border-radius: 10px;

      color: ${({theme}) => theme.white};
      cursor: pointer;

      transition: background 250ms ease-in;

      &:hover{
        background-color: ${({theme}) => theme["blue-hover"]};
      }
    }
  }
`