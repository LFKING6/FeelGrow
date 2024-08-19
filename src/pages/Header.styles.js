import styled from "styled-components";
import imagemIntro from "../assets/Intro Imagem Mb.png"

export const Global = styled.header`
  background-color: ${props => props.theme.verdeGlobal};
  width: 100%;
  padding-block: 1rem;

  .menu {
    display: none;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .menu {
      display: flex;
      margin-right: 2.500rem;
    }
  }
`

export const Nav = styled.nav`
  background-color: ${props => props.theme.verdeGlobal};

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
    list-style: none;
  }

  a {
    color: #FFF;
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 8rem;

  @media screen and (max-width: 500px) {
    margin-inline: 12rem;
  }
`