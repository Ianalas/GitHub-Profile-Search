import { styled } from "styled-components";

export const ContainerCardInfo = styled.div`
  background-color: ${({theme}) => theme["grey-medium"]};
  width: 804px;
  margin-inline: auto;
  padding-block: 1rem;
  border-radius: 10px;

  display: flex;
  align-items: center;


  & > span{
    color: ${({theme}) => theme.red};
    text-align: center;
    font: 400 1.25rem "Nunito sans", sans-serif;
  }

  & > div{
    flex: 1;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-inline: 2rem;

    & > img{
      height: 220px;
      width: 220px;
      border: 1px solid ${({theme}) => theme.blue};
      border-radius: 50%;
    }

    & > div{
      max-width: 28rem;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      & h2{
        color: ${({theme}) => theme.blue};
        font-weight: bold;
        font-size: 1.25rem;
      }

      & p{
        color: ${({theme}) => theme.black};
        font-weight: 300;
        font-size: 1rem;
      }
    }
  }
`


