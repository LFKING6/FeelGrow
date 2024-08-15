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
`