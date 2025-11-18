import "./lancamentos.scss"
import { useState } from "react";

import batons1 from "../../assets/batons1.png"
import batons2 from "../../assets/batons2.png"
import batons3 from "../../assets/batons3.png"

import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";
import base from "../../assets/base.png";

import batomazul from "../../assets/batomazul.png"
import batomvermelho from "../../assets/batomvermelho.png"
import batommarrom from "../../assets/batommarrom.png"
import batombase from "../../assets/batombase.png"
import fivestars from "../../assets/fivestars.png"

function Lancamentos(){

    const [cor, setCor] = useState(vermelho);

    return(
        <>
        <section>
            <h2>APROVEITE OS LANCAMENTOS</h2>

            <div className="container">

                <div className="batons">
                    <img src={batons1} alt="batons" />
                    <img src={batons2} alt="batons" />
                    <img src={batons3} alt="batons" /></div>

            <div className="imgcentral"><img src={cor} alt="" />
            </div>

            <div className="info">

                <img src={fivestars} alt="5 estrelas" />
                <h2>Matte Premium</h2>

                <p className="subtitulo">Cores disponíveis</p>

                <button onClick={()=>setCor(azul)}>
                    <img src={batomazul} alt="cor de batom azul" />
                </button>

                <button onClick={()=>setCor(vermelho)}>
                    <img src={batomvermelho} alt="cor de batom vermelho"/>
                </button>

                <button onClick={()=>setCor(marrom)}>
                    <img src={batommarrom} alt="cor de batom marrom"/>
                </button>

                <button onClick={()=>setCor(base)}>
                    <img src={batombase} alt="batom cor base" />
                </button>

                <h3>Descrição</h3>
                <p className="descricao">O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
                
            </div>
        
          </div>

        </section>
        </>
    );
}

export default Lancamentos;