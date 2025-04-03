import { styled } from "styled-components";

export const ContainerSearch = styled.div`
  

  & > form{
    display: flex;
    justify-content: center;
    gap: 3rem;

    width: 100%;

    & > input{
      width: 50%;
      border: none;
      outline: none;
      padding: 2rem;
      border-radius: 8px;
      border: 2px solid #fff;

      background-color: rgba(255,255,255,0.15);

      color: #fff;
      font-weight: 100;

      &::placeholder{
        color: #fff;
        
      }
    }
  }
`