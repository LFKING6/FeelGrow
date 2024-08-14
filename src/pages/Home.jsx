import Header from "./Header";
import {Conteudo} from "./Home.styles"
import {Intro} from "./Home.styles"
import imagem1 from "../assets/Imagem Vaso.png"
import imagem2 from "../assets/Imagem Plantas.png"
import check from "../assets/Check.png"
import imagemIntro from "../assets/Imagem Intro.png"


export default function () {
  return (
    <div>
        <Header />
        <Conteudo>
            <Intro>
                <div className="intro_imagem">
                    <img src={imagemIntro} alt="" />
                </div>

                <div className="intro_textos">
                    <h1>Vaso de Plantas Inteligente <br /> Automático: <span>Cuide das Suas <br /> Plantas Sem Esforço</span></h1>
                    <p>Apresentamos o FeelGrow, um vaso inteligente que cuida da <br /> irrigação automática e expressa emoções. Ideal para quem ama <br /> plantas, mas tem pouco tempo. Desfrute de um ambiente verde e <br /> saudável sem estresse.</p>
                    <a href="/sobre"><button>Saiba Mais</button></a>
                </div>
            </Intro>

          <section className="sobre">
            <div className="imagens">
                <div className="imagem1">
                    <img src={imagem1} alt="" />
                </div>

                <div className="imagem2">
                    <img src={imagem2} alt="" />
                </div>
            </div>

            <div className="textos">
                <h2>SOBRE O PROJETO</h2>
                <h1>Solução Inteligente e Sustentável <br /> para o cuidado de Plantas</h1>
                <p>O FeelGrow proporciona uma solução inteligente e eficiente para <br /> a irrigação de plantas, facilitando o cuidado e promovendo a <br /> sustentabilidade. Este projeto é voltado para pessoas que não <br /> tem tempo para realizar o cuidado das plantas, e empresas que <br /> buscam tecnologia avançada para manter suas plantas <br /> saudáveis de forma prática e econômica.</p>
                <div className="check">
                    <p><img src={check} alt="" />Sustentabilidade</p>
                    <p><img src={check} alt="" />Eficiência</p>
                    <p><img src={check} alt="" />Inovação</p>
                </div>
                <a href="/sobre"><button>Saiba Mais</button></a>
            </div>
          </section>
        </Conteudo>
    </div>
  )
}
