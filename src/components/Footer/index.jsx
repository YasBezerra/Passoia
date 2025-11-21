import "./footer.scss"
import boleto from "../../assets/boleto.png"
import mastercard from "../../assets/mastercard.png"
import visa from "../../assets/visa.png"
import pix from "../../assets/pix.png"
import socials from "../../assets/socials.png"
import socialsfb from "../../assets/socialsfb.png"
import socialsyt from "../../assets/socialsyt.png"
import socialst from "../../assets/socialst.png"



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

                <div className="redes">
                    <p>SIGA-NOS NAS REDES SOCIAIS</p><ul>
                    <li><img src={socials} alt="Instagram" /></li>
                    <li><img src={socialsfb} alt="Facebook" /></li>
                    <li> <img src={socialsyt} alt="Youtube" /> </li>
                    <li> <img src={socialst} alt="Twitter" /> </li>
                </ul>
                </div>
            </div>


        </footer>
    )
}


export default Footer