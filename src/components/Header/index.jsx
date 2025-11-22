import "./header.scss"
import logo from "../../assets/logo.png"
import icon from "../../assets/icon.png"


function Header(){
    return(
        <header>
            <img src={logo} alt="logo marca da pagina" />
            <ul>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADES</li>
            </ul>
            
        <img src={icon} className="menuMobile" alt="ícone menu" />
            
        </header>
    )
}

export default Header