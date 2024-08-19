import logo from "../assets/LOGO.png"
import {Global} from "./Header.styles"
import {Nav} from "./Header.styles"
import { Container } from "./Header.styles"
import Menu from "./Menu"

  export default function Header() {
    return (
      <div>
        <Global>
          <div className="menu">
            <Menu />
          </div>

      
          <Container>
              <div className="imagem">
                <img src={logo} alt="" />
              </div>
  
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
      </div>
    )
}
