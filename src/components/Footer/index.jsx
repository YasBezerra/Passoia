import "./footer.scss"
import boleto from "../../assets/boleto.png"
import mastercard from "../../assets/mastercard.png"
import visa from "../../assets/visa.png"
import pix from "../../assets/pix.png"



function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="atendimento">
                <ul>
                    <p>ATENDIMENTO</p>
                    <li>Fale Conosco</li>
                    <li>Perguntas Frequentes</li>
                    <li>Meus Pedidos</li>
                    <li>Nossas Lojas</li>
                </ul>
                </div>

                <div className="pagamento">
                <p>FORMAS DE PAGAMENTO</p>

                <ul className="formasDePagamento">
                    <li><img src={mastercard} alt="cartão Mastercard" /></li>
                    <li><img src={visa} alt="cartão Visa" /></li>
                    <li><img src={pix} alt="imagem pix" /></li>
                    <li><img src={boleto} alt="imagem boleto" /></li>
                </ul>
                </div>

                <div className="redes"><ul>
                    <p>SIGA-NOS NAS REDES SOCIAIS</p>
                </ul>
                </div>
            </div>


        </footer>
    )
}


export default Footer