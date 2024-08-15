import styled from "styled-components";

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
`