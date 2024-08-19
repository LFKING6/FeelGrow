import styled from "styled-components";

export const Conteudo = styled.main`
  .titulos h2 {
    font-size: 1.400rem;
    font-weight: 500;
    color: ${props => props.theme.verdeClaro};
    margin-top: 2rem;
    text-align: center;
  }

  .titulos h1 {
    font-size: 2.400rem;
    margin-top: 1.200rem;
    text-align: center;
  }

  .titulos p {
    text-align: center;
    font-size: 1.125rem;
    margin-top: 1.500rem;
  }

  span {
    color: ${props => props.theme.verdeClaro};
    font-weight: 600;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${props => props.theme.legendaCinza};
    margin-top: 0.900rem;
  }

  .textos_imagens p {
    font-size: 1.125rem;
  }

  .macho_femea {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .macho {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.900rem;
  }

  .femea {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fonte {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.400rem;
  }

  .kit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1.400rem;
  }

  .rele {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.400rem;
  }

  .umidade {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.200rem;
  }

  .matriz {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -0.600rem;
  }

  .bomba {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -0.200rem;
  }

  .mangueira {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -0.100rem;
  }

  .mp3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
  }

  .blueetooth {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -2.200rem;
  }

  .speaker {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2.200rem;
  }

  @media screen and (max-width: 500px) {
    br {
      display: none;
    }

  .titulos h2 {
    font-size: 1.100rem;
    text-align: left;
    margin-left: 1.400rem;
  }

  .titulos h1 {
    font-size: 1.995rem;
    text-align: left;
    margin-left: 1.400rem;
  }

  .titulos p {
    text-align: left;
    font-size: 1.125rem;
    margin-top: 1.500rem;
    margin-left: 1.400rem;
    margin-right: 2rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${props => props.theme.legendaCinza};
    margin-top: 0.900rem;
    text-align: center;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .textos_imagens p {
    font-size: 1.125rem;
    text-align: center;
    margin-inline: 2rem;
  }

  .macho_femea {
    display: block;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }

  .macho_femea img {
    margin: auto;
  }

  .macho {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .macho img {
    margin: auto;
  }

  .femea {
    display: block;
    justify-content: center;
    align-items: center;
  }

  .femea img {
    margin: auto;
  }

  .fonte {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .fonte img {
    margin: auto;
  }

  .kit {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .kit img {
    margin: auto;
  }

  .rele {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .rele img {
    margin: auto;
  }

  .umidade {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .umidade img {
    margin: auto;
  }

  .matriz {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .matriz img {
    margin: auto;
  }

  .bomba {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .bomba img {
    margin: auto;
  }

  .mangueira {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .mangueira img {
    margin: auto;
  }

  .mp3 {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .mp3 img {
    margin: auto;
  }

  .blueetooth {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .blueetooth img {
    margin: auto;
  }

  .speaker {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .speaker img {
    margin: auto;
  }
  }

`