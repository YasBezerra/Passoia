import "./novidades.scss"
import banner_novidades from "../../assets/banner_novidades.png"

function Novidades(){
    return(
        <main>
            <h2>NOVIDADES PARA VOCÊ</h2>
                <img src={banner_novidades} alt="imagem do banner de novidades" />
        </main>

    )
}

export default Novidades