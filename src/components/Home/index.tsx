import { Container } from "../Container";
import { ContainerHome, ContainerHomeContent, CircleBlur, CircleBlur2 } from "./styles";
import dotted from '../../assets/dotted-pattern.svg';

export function Home (){
  return(
    <ContainerHome>
      <ContainerHomeContent>
        <CircleBlur />
        <CircleBlur2 />
        <img src={dotted} alt="" />
        <Container />

      </ContainerHomeContent>
    </ContainerHome>
  )
}