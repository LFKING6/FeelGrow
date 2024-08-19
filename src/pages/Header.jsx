import logo from "../assets/LOGO.png"
import {Global} from "./Header.styles"
import {Nav} from "./Header.styles"
import { Container } from "./Header.styles"
import { Link } from "react-router-dom"
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/materiais">Materiais</Link></li>
                    <li><Link to="/referencias">Referencias</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
              </Nav>
          </Container>
        </Global>
      </div>
    )
}
