import styled from "styled-components";

export const Conteudo = styled.main`
  h1 {
    color: red;
  }
`

export const Intro = styled.div`
  .intro_imagem img {
    width: 100vw;
    height: 100vh;
  }

  .intro_textos {
    position: absolute;
    top: 260px;
    left: 210px;
  }

  .intro_textos h1 {
    color: #FFF;
    font-size: 55px;
  }

  span {
    color: ${props => props.theme.verdeClaro};
  }

  .intro_textos p {
    color: #FFF;
    font-size: 18.6px;
    margin-top: 44px;
  }

  .intro_textos button {
    color: #FFF;
    background-color: ${props => props.theme.verdeGlobal};
    font-size: 22px;
    border-style: none;
    border-radius: 35px;
    padding-inline: 35px;
    padding-block: 10px;
    margin-top: 80px;
  }
`
