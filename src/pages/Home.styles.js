import styled from "styled-components";
import imagem1 from "../assets/Imagem Introo.png";
import imagem2 from "../assets/Imagem Introo Mb.png";

export const Intro = styled.div`
  background: url(${imagem1});
  padding-bottom: 10rem;
  
  span {
    color: ${props => props.theme.verdeMedio};
  }

  .intro_textos h1 {
    color: #FFF;
    font-size: 3.163rem;
    padding-top: 8rem;
    margin-left: 9.800rem;
  }

  .intro_textos p {
    color: #FFF;
    font-size: 1.163rem;
    margin-top: 2.75rem;
    margin-left: 9.800rem;
  }

  .intro_textos button {
    margin-top: 4rem;
    margin-left: 9.800rem;
    color: #FFF;
    background-color: ${props => props.theme.verdeGlobal};
    font-size: 1.375rem;
    border-style: none;
    border-radius: 2.188rem;
    padding-inline: 2.188rem;
    padding-block: 0.625rem;
  }

  @media screen and (max-width: 500px) {
    background: url(${imagem2});
    padding-bottom: 4rem;

  .intro_textos h1 {
    font-size: 1.750rem;
    padding-top: 3rem;
    margin-left: 2.200rem;
    margin-right: 2rem;
  }

  .intro_textos p {
    font-size: 0.900rem;
    margin-top: 1.600rem;
    margin-left: 2.200rem;
    margin-right: 6.800rem;
  }

  .intro_textos button {
    margin-top: 2rem;
    margin-left: 2.200rem;
    font-size: 1rem;
    padding-inline: 1.700rem;
    padding-block: 0.425rem;
  }
  }
`

export const Sobre = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  .imagem1 {
    margin-top: 1.700rem;
  }

  .textos {
    margin-left: 4.100rem;
    margin-top: 2.090rem;
  }

  .textos h2 {
    font-size: 1.225rem;
    font-weight: 500;
    color: ${props => props.theme.verdeClaro};
    margin-bottom: 0.825rem
  }

  .textos h1 {
    font-size: 2.125rem;
    margin-bottom: 1.725rem;
  }

  .textos p {
    font-size: 1.080rem;
  }

  span {
    color: ${props => props.theme.verdeClaro};
  }

  .check img {
    margin-right: 0.625rem;
  }

  .check p {
    font-weight: 500;
    margin-bottom: 0.325rem;
  }

  .check1 {
    margin-top: 1.080rem;
  }

  .textos button {
    color: #FFF;
    background-color: ${props => props.theme.verdeGlobal};
    font-size: 1rem;
    font-weight: 400;
    border-style: none;
    border-radius: 2.88rem;
    padding-inline: 2.188rem;
    padding-block: 0.625rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {
    display: block;

  .imagem1 img {
    width: 420px;
    height: 420px;
  }

  br {
    display: none;
  }

  .textos {
    margin-left: 1.400rem;
    margin-top: 0.100rem;
  }

  .textos h2 {
    font-size: 1.100rem;
  }

  .textos h1 {
    line-height: 2.500rem;
    font-size: 1.925rem;
    margin-bottom: 1.325rem;
  }

  .textos p {
    margin-right: 1.300rem;
  }
  }
`

export const Diferenciais = styled.div`
  background-color: ${props => props.theme.bgCinza};
  margin-top: 6rem;
  margin-bottom: 4rem;
  padding-bottom: 4rem;

  .titulo{
    text-align: center;
    font-size: 1.225rem;
    padding-top: 2rem;
  }
  
  span {
    color: ${props => props.theme.verdeClaro};
  }

  .cards {
  }

  .card12 {
    display: flex;
    justify-content: center;
    max-height: 256px;
    margin-top: 2rem;
    gap: 3rem;
  }

  .card34 {
    display: flex;
    justify-content: center;
    max-height: 256px;
    margin-top: 2rem;
    gap: 3rem;
  }

  .card1 {
    background-color: #fff;
    border-radius: 1.625rem;
    padding: 1rem 3.5rem;
    box-shadow: 0 0 30px #D2D2D2;
  }

  .card1 h1 {
    display: flex;
    font-size: 1.325rem;
  }

  .card1 img {
    margin-right: 0.925rem;
  }

  .card1 p {
    margin-top: 1rem;
  }

  .card2 {
    background-color: #fff;
    border-radius: 1.625rem;
    padding: 1rem 3.5rem;
    box-shadow: 0 0 30px #D2D2D2;
  }

  .card2 h1 {
    display: flex;
    font-size: 1.325rem;
  }

  .card2 img {
    margin-right: 0.925rem;
  }

  .card2 p {
    margin-top: 1rem;
  }

  .card3 {
    background-color: #fff;
    border-radius: 1.625rem;
    padding: 1rem 3.5rem;
    box-shadow: 0 0 30px #D2D2D2;
  }

  .card3 h1 {
    display: flex;
    font-size: 1.325rem;
  }

  .card3 img {
    margin-right: 0.925rem;
  }

  .card3 p {
    margin-top: 1rem;
  }

  .card4 {
    background-color: #fff;
    border-radius: 1.625rem;
    padding: 1rem 4.2rem;
    box-shadow: 0 0 30px #D2D2D2;
  }

  .card4 h1 {
    display: flex;
    font-size: 1.325rem;
  }

  .card4 img {
    margin-right: 0.925rem;
  }

  .card4 p {
    margin-top: 1rem;
  }

  @media screen and (max-width: 500px) {
    br {
      display: none;
    }

  .titulo{
    text-align: center;
    font-size: 0.950rem;
    padding-top: 2rem;
    margin-top: -3rem;
  }

  .card12 {
    display: block;
    max-height: 680px;
    margin-top: 2rem;
    margin-inline: 2.200rem;
  }

  .card34 {
    display: block;
    max-height: 680px;
    margin-top: 2rem;
    padding-inline: 2rem;
  }

  .card1 {
    background-color: #fff;
    border-radius: 1.625rem;
    padding: 1rem 3.5rem;
    box-shadow: 0 0 30px #D2D2D2;
    margin-bottom: 2rem;
  }

  .card1 h1 {
    display: flex;
    font-size: 1.325rem;
  }

  .card1 img {
    margin-right: 0.925rem;
  }

  .card1 p {
    margin-top: 1rem;
  }

  .card2 {
    background-color: #fff;
    border-radius: 1.625rem;
    padding: 1rem 3.5rem;
    box-shadow: 0 0 30px #D2D2D2;
  }

  .card2 h1 {
    display: flex;
    font-size: 1.325rem;
  }

  .card2 img {
    margin-right: 0.925rem;
  }

  .card2 p {
    margin-top: 1rem;
  }

  .card3 {
    background-color: #fff;
    border-radius: 1.625rem;
    padding: 1rem 3.5rem;
    box-shadow: 0 0 30px #D2D2D2;
    margin-bottom: 2rem;
  }

  .card3 h1 {
    display: flex;
    font-size: 1.325rem;
    margin-right: 4rem;
  }

  .card3 img {
    margin-right: 0.925rem;
  }

  .card3 p {
    margin-top: 1rem;
  }

  .card4 {
    background-color: #fff;
    border-radius: 1.625rem;
    padding: 1rem 4.2rem;
    box-shadow: 0 0 30px #D2D2D2;
  }

  .card4 h1 {
    display: flex;
    font-size: 1.325rem;
    margin-right: 6rem;
  }

  .card4 img {
    margin-right: 0.925rem;
  }

  .card4 p {
    margin-top: 1rem;
  }
  }
`

export const Contato = styled.main`
  padding-bottom: 4rem;

  .textos {
    text-align: center;
  }

  .textos h2 {
    font-size: 1.200rem;
    font-weight: 500;
    margin-bottom: 1.500rem;
  }

  span {
    color: ${props => props.theme.verdeClaro};
  }

  button {
    color: #FFF;
    background-color: ${props => props.theme.verdeGlobal};
    font-size: 1.500rem;
    font-weight: 400;
    border-style: none;
    border-radius: 2.88rem;
    padding-inline: 3.188rem;
    padding-block: 0.625rem;
    margin-top: 3rem;
    text-decoration: none;
  }

  img {
    margin-right: 1rem;
  }

  @media screen and (max-width: 500px) {
    br {
      display: none;
    }

    h1 {
      font-size: 1.600rem;
    }

    button {
      padding-inline: 2.200rem;
      padding-block: 0.525rem;
      margin-top: 2rem;
  }
  }
`