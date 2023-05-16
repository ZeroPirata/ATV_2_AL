import styled from "styled-components";
import { Match } from "../components/match";

export const Dark = {
  name: "dark",
  background: "#4F4F4F",
  main: "#1C1C1C",
  title: "#ddd",
  text: "#ccc",
  imgbackground: "#F0F8FF",
};

export const Light = {
  name: "light",
  background: "#B0C4DE",
  main: "#F0F8FF",
  title: "#333",
  text: "#444",
  imgbackground: "#F0F8FF",
};

export const Header = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100px;
`;

export const MainContainer = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? Light.background : Dark.background};
  color: ${(props) => (props.theme === "light" ? Light.text : Dark.text)};
  padding: 40px;
  min-height: 100vh;
  min-width: 100vw;
`;

export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  background-color: ${(props) =>
    props.theme === "light" ? Light.main : Dark.main};
  color: ${(props) => (props.theme === "light" ? Light.text : Dark.text)};
  border-radius: 5px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Titulo = styled.h1`
  margin-top: 10px;
  color: ${(props) => (props.theme === "light" ? Light.text : Dark.text)};
  font-size: 1.6rem;
`;

export const Conteudo = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  color: ${(props) => (props.theme === "light" ? Light.text : Dark.text)};
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ConteudoMatch = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  color: ${(props) => (props.theme === "light" ? Light.text : Dark.text)};
  margin-top: 5px;
`;

export const ContainerMatch = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const MatchCont = styled.div`
  display: grid;
  grid-template-columns: 100px 10px 100px;
`;

export const X = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 5px;
`;

export const ButtonTheme = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  outline: none;
  padding: 0;
`;
