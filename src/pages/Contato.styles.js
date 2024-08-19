import styled from "styled-components";

export const Conteudo = styled.main`
  .titulos {
    text-align: center;
  }

  .titulos h2 {
    font-size: 1.400rem;
    font-weight: 500;
    color: ${props => props.theme.verdeClaro};
    margin-top: 2rem;
  }

  .titulos h1 {
    font-size: 2rem;
    margin-top: 1.200rem;
  }

  .titulos p {
    font-size: 1.125rem;
    margin-top: 1.400rem;
  }

  span {
    color: ${props => props.theme.verdeClaro};
  }

  .textos_luis {
    margin-left: 1.800rem;
  }

  .textos_nicolly {
    margin-left: 1.800rem;
  }

  .textos_victoria {
    margin-left: 1.800rem;
  }

  .textos_luis h2 {
    color: ${props => props.theme.verdeClaro};
    font-weight: 600;
    margin-bottom: 0.600rem;
  }

  .textos_nicolly h2 {
    color: ${props => props.theme.verdeClaro};
    font-weight: 600;
    margin-bottom: 0.600rem;
  }

  .textos_victoria h2 {
    color: ${props => props.theme.verdeClaro};
    font-weight: 600;
    margin-bottom: 0.600rem;
  }

  .textos_luis p {
    display: flex;
    align-items: center;
    padding-bottom: 0.300rem;
  }

  .textos_nicolly p {
    display: flex;
    align-items: center;
    padding-bottom: 0.300rem;
  }

  .textos_victoria img {
    padding-right: 0.600rem;
  }

  .textos_luis img {
    padding-right: 0.600rem;
  }

  .textos_nicolly img {
    padding-right: 0.600rem;
  }

  .textos_victoria p {
    display: flex;
    align-items: center;
    padding-bottom: 0.300rem;
  }


  .luis {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.400rem;
    margin-bottom: 2.400rem;
    margin-left: -3.400rem;
  }

  .nicolly {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.400rem;
    margin-left: -3rem;
  }

  .victoria {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 500px) {
  br {
    display: none;
  }

  .titulos {
    text-align: left;
    margin-left: 1.400rem;
  }

  .titulos h2 {
    font-size: 1.100rem;
    font-weight: 500;
    color: ${props => props.theme.verdeClaro};
    margin-top: 2rem;
  }

  .titulos h1 {
    font-size: 1.995rem;
    margin-top: 0.600rem;
  }

  .titulos p {
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-right: 2rem;
  }

  span {
    color: ${props => props.theme.verdeClaro};
  }

  .textos_luis {
    margin-left: none;
  }

  .textos_nicolly {
    margin-left: none;
  }

  .textos_victoria {
    margin-left: none;
  }

  .textos_luis h2 {
    color: ${props => props.theme.verdeClaro};
    font-weight: 600;
    margin-bottom: 0.600rem;
    margin-left: -2rem;
  }

  .textos_nicolly h2 {
    color: ${props => props.theme.verdeClaro};
    font-weight: 600;
    margin-bottom: 0.600rem;
    margin-left: -2rem;
  }

  .textos_victoria h2 {
    color: ${props => props.theme.verdeClaro};
    font-weight: 600;
    margin-bottom: 0.600rem;
    margin-left: -2rem;
  }

  .textos_victoria img {
    margin-left: -2rem;
  }

  .textos_luis img {
    margin-left: -2rem;
  }

  .textos_nicolly img {
    margin-left: -2rem;
  }

  .textos_luis p {
    display: flex;
    align-items: center;
    padding-bottom: 0.300rem;
  }

  .textos_nicolly p {
    display: flex;
    align-items: center;
    padding-bottom: 0.300rem;
  }

  .textos_victoria p {
    display: flex;
    align-items: center;
    padding-bottom: 0.300rem;
  }

  .luis {
    display: block;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-left: 5rem;
  }

  .nicolly {
    display: block;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    padding-left: 5rem;
  }

  .victoria {
    display: block;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
  }
  }
`