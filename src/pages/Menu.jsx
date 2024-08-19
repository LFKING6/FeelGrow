import {useState} from 'react'
import menuAberto from "../assets/Menu Aberto.png"
import { Container } from './Menu.styles';
import { Link } from 'react-router-dom';

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/materiais">Materiais</Link></li>
                    <li><Link to="/referencias">Referencias</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
              </nav>
              
            }
              
          </Container>
  )
}
