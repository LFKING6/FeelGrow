import Header from "./Header";
import {Conteudo} from "./Sobre.styles"
import imagem from "../assets/Imagem Vaso 2.png"


export default function () {
  return (
    <div>
        <Header />
        <Conteudo>
          <div className="titulos">
            <h2>SOBRE O PROJETO</h2>
            <h1>Solução Inteligente e Sustentável para o <br /> <span>cuidado de Plantas</span> </h1>
          </div>
        
        <div className="conteudo">
          <div className="imagem_conteudo">
            <img src={imagem} alt="" />
          </div>
            
          <div className="textos_conteudo">
            <p>Descubra como o FeelGrow funciona! Sensores especiais <br /> monitoram o solo para determinar quando suas plantas <br /> precisam de água, fazendo a irrigação de forma automática e <br /> enviando alertas por voz.</p>
            <p>Além disso, o aplicativo envia alertas em tempo real sobre o <br /> estado das suas plantas, permitindo que você tome medidas <br /> imediatas quando necessário. Com nosso sistema, você pode <br /> cuidar das suas plantas de forma eficiente e sustentável.</p>
            <p>O FeelGrow garante que suas plantas recebam a quantidade <br /> ideal de água. Isso não só promove um crescimento saudável, <br /> mas também economiza recursos preciosos, como água e <br /> energia. Cada componente do nosso sistema foi projetado <br /> pensando na praticidade e na sustentabilidade.</p>
          </div>
        </div>
          
          
        </Conteudo>
        
    </div>
  )
}
