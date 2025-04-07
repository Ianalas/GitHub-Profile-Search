import { styled } from "styled-components";

export const MainContainer = styled.main`
  max-width: 1156px;
  margin: 0 auto;
  background-color: ${({theme}) => theme.black};

  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 2.5rem;


  & > div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;

    & > h1{
      display: flex;
      gap: .75rem;
      font-size: 3.75rem;
    }

    & > h1 > i {
      font-style: normal;
      font-weight: 200;
      
    }
  }
`