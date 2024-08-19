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

  span {
    color: ${props => props.theme.verdeClaro};
  }

  .conteudo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.700rem;
  }

  .conteudo p {
    font-size: 1.125rem;
    margin-bottom: 1.400rem;
    margin-left: 3rem;
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
  }

  .titulos h1 {
    font-size: 1.925rem;
    line-height: 2.500rem;
    margin-top: 1rem;
  }

  span {
    color: ${props => props.theme.verdeClaro};
  }

  .conteudo {
    display: block;
    margin-top: 0.600rem;
  }

  .imagem_conteudo img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 430px;
    height: 430px;
  }

  .conteudo p {
    font-size: 1.125rem;
    margin-bottom: 1.400rem;
    margin-left: 1.400rem;
    margin-right: 2rem;
  }
  }
`