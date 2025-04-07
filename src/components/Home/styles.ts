import { styled } from "styled-components";

export const ContainerHome = styled.main`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative; // necessário para posicionar os blur de forma absoluta dentro
  overflow: hidden;
`;

export const ContainerHomeContent = styled.section`
  position: relative;
  min-width: 1440px;
  margin: 0 auto;

  & > main{
    position: relative;
    z-index: 999;
  }

  & > img{
    position: absolute;
    transform: translateY(-50%);
  }
`;

export const CircleBlur = styled.b`
  position: absolute;
  width: 888px;
  height: 888px;
  background: radial-gradient(50% 50% at 50% 50%, #005CFF 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 1;
  filter: blur(180px);
  opacity: 0.6;
  right: 0;
  top: 0;
  transform: translate(30%, -50%);
  pointer-events: none; // evita que ele interfira com cliques
`;


export const CircleBlur2 = styled(CircleBlur)`
  left: -500px;
  top: 200px;
  transform: none;
  background: radial-gradient(50% 50% at 50% 50%, #005CFF 0%, rgba(0, 0, 0, 0) 100%);
`;