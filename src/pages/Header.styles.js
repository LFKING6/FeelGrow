import styled from "styled-components";

export const Global = styled.header`
  background-color: ${props => props.theme.verdeGlobal};
  width: 100%;
  padding-block: 26px
`
export const Imagem = styled.div`
`

export const Nav = styled.nav`
  background-color: ${props => props.theme.verdeGlobal};

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-style: none;
  }

  a {
    color: #FFF;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 200px
`