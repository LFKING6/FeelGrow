import styled from "styled-components";
import imagem from "../assets/Imagem Ref Mb.png";

export const Conteudo = styled.main`

  .referencia_textos h2 {
    font-size: 1.400rem;
    font-weight: 500;
    color: ${props => props.theme.verdeClaro};
    margin-top: 2rem;
    text-align: center;
  }

  .referencia_textos h1 {
    font-size: 2.400rem;
    margin-top: 1.200rem;
    text-align: center;
  }

  .referencia_textos p {
    text-align: justify;
    font-size: 1.125rem;
    margin-bottom: 0.400rem;
  }
  
  .container {
      display: flex;
      justify-content: center;
      margin-top: 1.800rem;
    }

  .justificado {
      text-align: justify;
    }

  .justificado::after {
      content: "";
      display: inline-block;
      width: 100%;
    }

  span {
    color: ${props => props.theme.verdeClaro};
  }

  .referencia_imagem {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.200rem;
  }

  @media screen and (max-width: 500px) {
  br {
    display: none;
  }

  .referencia_textos h2 {
    font-size: 1.100rem;
    text-align: left;
    margin-left: 1.400rem;
  }

  .referencia_textos h1 {
    font-size: 1.925rem;
    margin-top: 1.200rem;
    text-align: left;
    margin-left: 1.400rem;
    margin-right: 4rem;
    line-height: 2.500rem;
  }

  .referencia_textos li {
    text-align: left;
    font-size: 1.125rem;
    margin-bottom: 0.400rem;
    margin-left: 1.400rem;
    margin-right: 3rem;
  }

  .referencia_imagem img {
    width: 400px;
    height: 160px;
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
  }
`