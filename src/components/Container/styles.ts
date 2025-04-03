import { styled } from "styled-components";

export const MainContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  border: 1px solid ${({theme}) => theme["white-color"]};
  padding: 8rem 0;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 4rem;


  & > div{
    display: flex;
    justify-content: center;
    

    & > h1 {
      color: ${({theme}) => theme["white-color"]};

      & > i{
        font-style: normal;
        font-weight: 200;
      }
    }
    
  }
`