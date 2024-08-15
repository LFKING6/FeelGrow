import Header from "./Header";
import {Conteudo} from "./Materiais.styles"
import machoFemea from "../assets/MachoFemea.png"
import macho from "../assets/Macho.png"
import femea from "../assets/Femea.png"
import speaker from "../assets/Speaker.png"
import mp3 from "../assets/Mp3.png"
import blueetooth from "../assets/Blueetooth.png"
import bomba from "../assets/Bomba.png"
import fonte from "../assets/Fonte.png"
import mangueira from "../assets/Mangueira.png"
import umidade from "../assets/Sensor de Umidade.png"
import matriz from "../assets/Matriz.png"
import kit from "../assets/Kit.png"
import rele from "../assets/Rele.png"


export default function () {
  return (
    <div>
        <Header />
        <Conteudo>
          <div className="titulos">
          <h2>MATERIAIS UTILIZADOS</h2>
          <h1>Materiais de Qualidade para o <span>Melhor <br /> Cuidado das Suas Plantas</span></h1>
          <p>Foram utilizados materiais de qualidade, como sensores avançados, sistemas de irrigação <br /> automatizados e um aplicativo móvel intuitivo. Buscamos sempre a eficiência e a <br /> durabilidade em nossos materiais, garantindo assim um funcionamento confiável e de alta <br /> performance. Com essa combinação, sendo proporcionado o melhor cuidado para suas <br /> plantas.</p>
          </div>
          
          <div className="textos_imagens">
            
          <div className="macho_femea">
            <div className="imagem_mf">
              <img src={machoFemea} alt="" />
            </div>
            <div className="textos_mf">
              <p><span>Jumpers - Macho/Femea:</span> São cabos com pinos em uma <br /> extremidade (macho) e receptáculos na outra (fêmea), <br /> usados para fazer conexões entre componentes <br /> eletrônicos.</p>
              <h3>Valor: R$11 - R$15</h3>
            </div>
            </div>
          
          <div className="femea">
            <div className="imagem_femea">
              <img src={femea} alt="" />
            </div>
            <div className="textos_femea">
              <p><span>Jumpers - Femea/Femea:</span> São cabos com receptáculos <br /> em ambas as extremidades, usados para fazer conexões <br /> entre componentes eletrônicos.</p>
              <h3>Valor: R$11 - R$15</h3>
            </div>
          </div>

          <div className="macho">
            <div className="imagem_macho">
              <img src={macho} alt="" />
            </div>
            <div className="textos_macho">
              <p><span>Jumpers - Macho/Macho:</span> São cabos com pinos em uma <br /> extremidade (macho) e receptáculos na outra (fêmea), <br /> usados para fazer conexões entre componentes eletrônicos. </p>
              <h3>Valor: R$11 - R$15</h3>
            </div>
          </div>

          <div className="kit">
            <div className="imagem kit">
              <img src={kit} alt="" />
            </div>
            <div className="textos_kit">
              <p><span>Kit Iniciante Arduino:</span> É um conjunto básico que <br /> geralmente inclui uma placa Arduino, componentes <br /> eletrônicos como resistores, LEDs, sensores e cabos.</p>
              <h3>Valor: R$123</h3>
            </div>
          </div>

          <div className="rele">
            <div className="imagem_">
              <img src={rele} alt="" />
            </div>
            <div className="textos_rele">
              <p><span>Módulo Relé 1 Canal 5V:</span> Um dispositivo usado para <br /> controlar cargas elétricas maiores usando sinais de baixa <br /> potência.</p> 
              <h3>Valor: R$20</h3>
            </div>
          </div>

          <div className="umidade">
            <div className="imagem_umidade">
              <img src={umidade} alt="" />
            </div>
            <div className="textos_umidade">
              <p><span>Módulo Sensor de Umidade do Solo:</span> Um sensor usado para <br /> detectar a umidade do solo, comumente usado em <br /> projetos de automação de irrigação ou monitoramento de <br /> plantas.</p>
              <h3>Valor: R$26</h3>
            </div>
          </div>

          <div className="matriz">
            <div className="imagem_matriz">
              <img src={matriz} alt="" />
            </div>
            <div className="textos_matriz">
              <p><span>Módulo Matriz de LED 8x8:</span> Uma matriz de LEDs que pode <br /> exibir letras, números, padrões e animações.</p>
              <h3>Valor: R$15 - R$20</h3>
            </div>
          </div>

          <div className="bomba">
            <div className="imagem">
              <img src={bomba} alt="" />
            </div>
            <div className="textos_bomba">
            <p><span>Mini Bomba de Água:</span> Uma pequena bomba de água <br /> projetada para ser controlada por um microcontrolador <br /> como o Arduino.</p>
            <h3>Valor: R$11 - R$20</h3>
            </div>
          </div>

          <div className="mangueira">
            <div className="imagem_mangueira">
              <img src={mangueira} alt="" />
            </div>
            <div className="textos_">
            <p><span>Mangueira para Aquário:</span> Uma mangueira de silicone <br /> usada para conectar equipamentos em aquários, como <br /> bombas.</p>
            <h3>Valor: R$9 - R$15</h3>
            </div>
          </div>

          <div className="fonte">
            <div className="imagem_fonte">
              <img src={fonte} alt="" />
            </div>
            <div className="textos_fonte">
            <p><span>Fonte de Alimentação para Arduino 9VDC 1A:</span> Uma fonte <br /> de energia projetada para fornecer energia estável para <br /> uma placa Arduino.</p>
            <h3>Valor: R$22</h3>
            </div>
          </div>

          <div className="mp3">
            <div className="imagem_mp3">
              <img src={mp3} alt="" />
            </div>
            <div className="textos_mp3">
            <p><span>Módulo DFPlayer Mini MP3: </span>Um módulo de áudio compacto <br /> que pode reproduzir arquivos de áudio em formato MP3 de <br /> um cartão SD ou dispositivo USB.</p>
            <h3>Valor: R$12 - R$18</h3>
            </div>
          </div>

          <div className="blueetooth">
            <div className="imagem_blueetooth">
              <img src={blueetooth} alt="" />
            </div>
            <div className="textos_blueetooth">
            <p><span>Módulo Bluetooth hc-05:</span> Um módulo Bluetooth que <br /> permite a comunicação sem fio entre dispositivos.</p>
            <h3>Valor: R$30 - R$40</h3>
            </div>
          </div>

          <div className="speaker">
            <div className="imagem_speaker">
              <img src={speaker} alt="" />
            </div>
            <div className="textos_speaker">
            <p><span>Speaker:</span> Um alto-falante usado para reproduzir áudio em <br /> projetos de eletrônica, como alarmes, música ou feedback <br /> sonoro.</p>
            <h3>Valor: R$25 - R$45</h3>
            </div>
          </div>
          </div>
        </Conteudo>
    </div>
  )
}