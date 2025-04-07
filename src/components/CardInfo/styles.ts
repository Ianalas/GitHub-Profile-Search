import { styled } from "styled-components";

export const ContainerCardInfo = styled.div`
  background-color: ${({theme}) => theme["grey-medium"]};
  width: 804px;
  margin-inline: auto;
  padding-block: 0;
  border-radius: 10px;

  border: 1px solid ${({theme}) => theme["grey-medium"]};
  box-shadow: 0 0 16px 8px rgba(255, 255, 255, 0.1);

  display: flex;
  align-items: center;

  overflow: hidden;


  & > span{
    padding-block: 1rem;
    color: ${({theme}) => theme.red};
    text-align: center;
    font: 400 1.25rem "Nunito sans", sans-serif;
  }

  & > div{
    padding-block: 1rem;
    flex: 1;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-inline: 2rem;

    & > img{
      height: 220px;
      width: 220px;
      border: 2px solid ${({theme}) => theme.blue};
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

  & .loading{
    display: flex;
    justify-content: center;
    align-items: center;

    padding-block: .25rem;

    width: 100%;
    background: linear-gradient(90deg, rgba(31,31,31,1) 0%, rgba(78,78,78,1) 50%, rgba(144,144,144,1) 100%);
    background-size: 600% 600%;
    animation: gradientAnimation 2s ease infinite;
  }

  @keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`


