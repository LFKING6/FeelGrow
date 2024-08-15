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

`