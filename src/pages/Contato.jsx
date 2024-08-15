import Header from "./Header";
import {Conteudo} from "./Contato.styles"
import telefone from "../assets/Telefone.png"
import instragram from "../assets/Instagram.png"
import email from "../assets/Email.png"
import luis from "../assets/Luis.png"
import nicolly from "../assets/Nicolly.png"
import victoria from "../assets/Victoria.png"


export default function () {
  return (
    <div>
        <Header />
        <Conteudo>
          <div className="titulos">
            <h2>CONTATO</h2>
            <h1>Entre em Contato Conosco: <span>Nossa Equipe <br /> Está à Sua Disposição!</span></h1>
            <p>Obrigado por seu interesse em nosso projeto. Estamos à disposição para atender todas as <br /> suas dúvidas e necessidades. Entre em contato conosco pelos meios abaixo e <br /> responderemos prontamente.</p>
          </div>
          

          <div className="luis">
            <div className="imagem_luis">
              <img src={luis} alt="" />
            </div>
            <div className="textos_luis">
            <h2>Luis Felipe Tavares de Lima:</h2>
            <p><img src={telefone} alt="" />Telefone: 11 94912-1384</p>
            <p><img src={email} alt="" />E-mail: luisfelipe.tl2006@gmail.com</p>
            <p><img src={instragram} alt="" />Instagram: @luis_lima06</p>
            </div>
          
          </div>

          <div className="nicolly">
          <div className="imagem_nicolly">
              <img src={nicolly} alt="" />
            </div>
            <div className="textos_nicolly">
            <h2>Nicolly Moreira do Carmo:</h2>
            <p><img src={telefone} alt="" />Telefone: 11 97084-5933</p>
            <p><img src={email} alt="" />E-mail: nicollymoreira840@gmail.com</p>
            <p><img src={instragram} alt="" />Instagram: @nrnicolly</p>
            </div> 
          </div>

          <div className="victoria">
          <div className="imagem_victoria">
              <img src={victoria} alt="" />
            </div> 
            <div className="textos_victoria">
            <h2>Victória Gomes do Nascimento:</h2>
            <p><img src={telefone} alt="" />Telefone: 11 95974-9929</p>
            <p><img src={email} alt="" />E-mail: gomesvictoria1004@gmail.com</p>
            <p><img src={instragram} alt="" />Instagram: @viicgomees_</p>
            </div>
          </div>
        </Conteudo>
        
    </div>
  )
}
