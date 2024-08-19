import {useState} from 'react'
import menuAberto from "../assets/Menu Aberto.png"
import { Container } from './Menu.styles';

export default function Menu() {
    const [aberto, setAberto] = useState(false);

    function handleMenu() {
        setAberto(!aberto)
    }

  return (
          <Container>
              <div className="menu-mobile">
                <button onClick={handleMenu} className={aberto ? "icone_menu aberto" : "icone_menu"}>
                  <img src={menuAberto} alt="" />
                </button>
              </div>

            {aberto &&
              <nav className={aberto ? "nav aberto" : "nav"}>
                 <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/sobre">Sobre</a></li>
                  <li><a href="/materiais">Materiais</a></li>
                  <li><a href="/referencias">Referencias</a></li>
                  <li><a href="/contato">Contato</a></li>
                </ul>
              </nav>
              
            }
              
          </Container>
  )
}
