import "./looksedicas.scss"
import gloss from "../../assets/gloss.png"
import olhos from "../../assets/olhos.png"
import blush from "../../assets/blush.png"
import sombra from "../../assets/sombra.png"


function LooksEDicas(){
    return(
        <main>
            <h2> LOOKS E DICAS DE MAQUIAGEM </h2>
            <div className="cards">
            <img src={gloss} alt="imagem da modelo passando gloss" />
            <img src={olhos} alt="olhos da modelo com sombra" />
            <img src={blush} alt=" imagem da modelo passando blush" />
            <img src={sombra} alt="imagem da modelo utilizando a sombra" />
            </div>
        </main>

    )
}

export default LooksEDicas