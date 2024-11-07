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
            <p>O aplicativo FeelGrow se conecta aos sensores via Bluetooth <br /> para monitorar em tempo real a umidade do solo, a <br /> temperatura e a umidade do ar. Ele exibe essas informações <br /> de maneira simples, permitindo que você acompanhe <br /> facilmente o estado da planta.</p>
          </div>
        </div>

        <div className="titulo">
          <h1>Vídeo de <span>Funcionamento</span></h1>
        </div>

        <div className="videos">
        <div className="video">
        <iframe width="310" height="410"
          src="https://youtube.com/embed/VOkkff1b-Cg?si=PK8JSGbZulc0DcQR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        </div>

        <div className="video1">
        <iframe width="310" height="410" src="https://www.youtube.com/embed/uBLwpj8Isdc?si=6uAyDa2_A3BIbEhy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>

        <div className="titulo1">
          <h1>Vídeo do <span>Jogo</span></h1>
        </div>

        <div className="video">
        <iframe width="610" height="410" src="https://www.youtube.com/embed/jdpexQHS8iI?si=ZJT8R35vW9FA_bE3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </Conteudo>
        
    </div>
  )
}
