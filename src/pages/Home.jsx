import Header from "./Header";
import {Intro} from "./Home.styles"
import {Sobre} from "./Home.styles"
import {Diferenciais} from "./Home.styles"
import {Contato} from "./Home.styles"
import {Link} from "react-router-dom"
import imagem1 from "../assets/Imagem Vaso.png"
import telefone from "../assets/Telefone (1).png"
import check from "../assets/Check.png"
import engrenagem from "../assets/Engrenagem.png"
import voz from "../assets/Voz.png"
import plantaEnergia from "../assets/Planta Energia.png"
import conectividade from "../assets/Conectividade.png"


export default function () {
  return (
    <div>
        <Header />
        <div className="conteudo">
            <Intro>
                <div className="intro_textos">
                    <h1>Vaso de Plantas Inteligente Automático: <span><br/>Cuide das Suas Plantas Sem Esforço</span> </h1>
                    <p>Apresentamos o FeelGrow, um vaso inteligente que cuida da <br /> irrigação automática e expressa emoções. Ideal para quem ama <br /> plantas, mas tem pouco tempo. Desfrute de um ambiente verde e <br /> saudável sem estresse.</p>
                    <Link to="/sobre"><a href="/sobre"><button>Saiba Mais</button></a></Link>
                </div>
            </Intro>

          <Sobre>
            <div className="imagens">
                <div className="imagem1">
                    <img src={imagem1} alt="" />
                </div>
            </div>

            <div className="textos">
                <h2>SOBRE O PROJETO</h2>
                <h1>Solução Inteligente e Sustentável <br /> <span>para o cuidado de Plantas</span> </h1>
                <p>O FeelGrow proporciona uma solução inteligente e eficiente para <br /> a irrigação de plantas, facilitando o cuidado e promovendo a <br /> sustentabilidade. Este projeto é voltado para pessoas que não <br /> tem tempo para realizar o cuidado das plantas, e empresas que <br /> buscam tecnologia avançada para manter suas plantas <br /> saudáveis de forma prática e econômica.</p>
                <div className="check">
                    <p className="check1"><img src={check} alt="" />Sustentabilidade</p>
                    <p><img src={check} alt="" />Eficiência</p>
                    <p><img src={check} alt="" />Inovação</p>
                </div>
                <Link to="/sobre"><a href="/sobre"><button>Saiba Mais</button></a></Link>
            </div>
          </Sobre>

          <Diferenciais>
            <div className="titulo">
                <h1>Nosso <span>Diferencial</span></h1>
            </div>
            <div className="cards">
            <div className="card12">
            <div className="card1">
                <h1><img src={engrenagem} alt=""/>Automatização <br /> Inteligente</h1>

                <div className="texto_card1">
                    <p>Sensores avançados garantem a quantidade <br /> exata de água necessária para suas plantas, <br /> otimizando a saúde e o crescimento delas.</p>
                </div>
            </div>

            <div className="card2">
                <h1><img src={conectividade} alt=""/>Conectividade <br /> Simples</h1>

                <div className="texto_card2">
                    <p>Controle a rega das suas plantas e receba <br /> alertas detalhados diretamente pelo aplicativo <br /> móvel, garantindo o cuidado ideal e contínuo.</p>
                </div>
            </div>
            </div>

            <div className="card34">
            <div className="card3">
                <h1><img src={plantaEnergia} alt=""/>Eficiência <br /> Energética</h1>

                <div className="texto_card3">
                    <p>Sistema sustentável que minimiza o consumo <br /> de energia, promovendo eficiência e respeito <br /> ao meio ambiente.</p>
                </div>
            </div>

            <div className="card4">
                <h1><img src={voz} alt=""/>Comandos <br /> de Voz</h1>

                <div className="texto_card4">
                    <p>Receba atualizações em tempo real usando <br /> comandos de voz, de maneira simples e <br /> conveniente.</p>
                </div>
            </div>
            </div>
            </div>
          </Diferenciais>

          <Contato>
            <div className="textos">
                <h2>TEM ALGUMA PERGUNTA OU DÚVIDA?</h2>
                <h1>Entre em Contato Conosco: <span>Nossa Equipe Está <br /> à Sua Disposição!</span></h1>
                <div className="botao_contato">
                <Link to="/contato"><a href="/contato"><button><img src={telefone} alt="" />Saiba Mais</button></a></Link>
                </div>
            </div>
          </Contato>
        </div>
    </div>
  )
}
