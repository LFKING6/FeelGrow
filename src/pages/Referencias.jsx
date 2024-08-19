import Header from "./Header";
import {Conteudo} from "./Referencias.styles"
import imagemReferencia from "../assets/Imagem Referencias.png"


export default function () {
  return (
    <div>
        <Header />
        <Conteudo>
          <div className="referencia_textos">
            <h2>REFERÊNCIAS BIBLÍOGRAFICAS</h2>
            <h1>Referências Bibliográficas e <span>Fontes <br /> de Pesquisa</span></h1>
            <div className="container">
              <div className="justificado">
              <li>As plantas precisam de uma irrigação e monitoramento devidamente <br /> adequada para terem um desenvolvimento correto;</li>
              <li> O Arduino é uma ferramenta aberta para a criação de protótipos de <br /> hardware e software de fácil acesso; </li>
              <li>Sensor de umidade, para fornecer leituras seguras e rápidas;</li>
              <li>Foi possível constar eficácia em todos os testes realizados com o <br /> circuito;</li>
              </div>
            </div>
          </div>

          <div className="referencia_imagem">
            <img src={imagemReferencia} alt="" />
          </div>
        </Conteudo>
    </div>
  )
}