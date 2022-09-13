import React from "react";

const Filho = ({nomePai,callbackPai,funcaoDeSomar}) => {

    const acaoBotao = ()=>{
        //alert('Eu sou a ação do botão')
        console.log(funcaoDeSomar(3,2))
        callbackPai('Filho da Silva')
    }

    return (
        <div>
            <button
                onClick={acaoBotao}
            >
                Oi {nomePai}!
            </button>
        </div>
    )
}

export default Filho