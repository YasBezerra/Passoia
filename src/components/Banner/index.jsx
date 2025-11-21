import "./banner.scss"
import banner from "../../assets/banner.png"
import icon from "../../assets/icon.png"

function Banner(){
    return(
        <main>
            <div className="banner">
                <img src={banner} alt="revitalift" />
            </div>
        </main>
    )
}

export default Banner