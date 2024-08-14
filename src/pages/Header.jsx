import logo from "../assets/LOGO.png"
import {Global} from "./Header.styles"
import {Imagem} from "./Header.styles"
import {Nav} from "./Header.styles"
import {Container} from "./Header.styles"

export default function Header() {
  return (
    <Global>
        <Container>
            <Imagem>
              <img src={logo} alt="" />
            </Imagem>

            <Nav>
              <ul>
                  <li><a className="Home" href="/">Home</a></li>
                  <li><a href="/sobre">Sobre</a></li>
                  <li><a href="/materiais">Materiais</a></li>
                  <li><a href="/referencias">Referencias</a></li>
                  <li><a href="/contato">Contato</a></li>
              </ul>
            </Nav>
        </Container>
    </Global>
    
  )
}
