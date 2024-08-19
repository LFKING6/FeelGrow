import styled from "styled-components";

export const Container = styled.div`
     menu-mobile {
        display: flex;
     }

     button {
        background: none;
        border: none;
     }

     .nav {
        position: absolute;
        right: 2.500rem;
        top: 5rem;
     }

     ul {
      background-color: #FFF;
      padding: 0.600rem 1rem;
      border-radius: 0.600rem;
     }

     a {
      color: ${props => props.theme.verdeGlobal};
      text-decoration: none;
     }

     li {
      list-style: none;
     }
`