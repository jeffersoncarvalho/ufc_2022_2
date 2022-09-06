import React from "react";

const IMC = ({ peso, altura }) => {

    const imc = calcularIMC()

    function calcularIMC() {
        return peso / (altura * altura)
    }

    function situacao() {
        if (imc < 25) {
            return (
                <div>
                    <h1>Abaixo do peso!</h1>
                </div>)
        }
        if (imc >= 25 && imc < 30) {
            return (
                <div>
                    <h1>Peso Normal</h1>
                </div>)
        }
        return (
            <div>
                    <h1>Acima do Peso</h1>
            </div>
        )
    }

    //retornar o jsx com o valor do imc e situação
    return (
        <div>
            O seu IMC é {imc.toFixed(2)}
            <br />
            A sua situação é: {situacao()}
        </div>
    )
}

export default IMC