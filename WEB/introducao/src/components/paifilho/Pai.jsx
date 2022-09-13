import React from "react";
import Filho from "./Filho";

const Pai = () => {

    const callbackPai = (msg)=> {
        alert('Oi meu filho ' + msg)
    }

    const somar = (x,y)=> {
        return x + y
    }

    return (
        <div>
            <Filho 
                nomePai='Pai da Silva' 
                callbackPai={callbackPai}
                funcaoDeSomar={somar}
                 />
        </div>
    )
}

export default Pai