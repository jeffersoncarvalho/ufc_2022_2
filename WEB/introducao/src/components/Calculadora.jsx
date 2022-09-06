import React from "react"

function calculadora(props){
    
    const {op,x,y} = props

    function soma(){
        return x + y
    }

    function subtracao(){
        return x - y
    }

    if (op === "SOMA")
        return (
            <div>
                A soma é {soma()}
            </div>
        )
    return (
        <div>
            A diferença é {subtracao()}
        </div>
    )
}

export default calculadora