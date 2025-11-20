import "./novidades.scss"
import bannernovidades from "../../assets/bannernovidades.png"

function Novidades(){
    return(
        <main>
            <h2>NOVIDADES PARA VOCÊ</h2>
                <img className="bannernovidades" src={bannernovidades} alt="imagem do banner de novidades" />
        </main>

    )
}

export default Novidades