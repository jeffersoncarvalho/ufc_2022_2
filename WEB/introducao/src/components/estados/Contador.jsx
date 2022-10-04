import { useState, useEffect } from "react"

const Contador = ()=> {
    
    const [contador,setContador] = useState(100)
    const [sena,setSena] = useState(false)
    const [par,setPar] = useState(false)
    //let contador = 0

    useEffect(
        ()=>{
            if(contador%2===0) setPar(true)
            else setPar(false)
        },
        [contador]
    )

    const contar = ()=> {
        //contador = contador + 1
        //console.log(contador)
        setContador(contador + 1)
    }

    const modificarSena = ()=>{
        //???
        setSena(!sena)
        //setSena((estadoAnterior)=>!estadoAnterior)
    }

    const renderizarSena = ()=>{
        if(sena){
            return(
                <img src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/David-Sena-Oliveira-Final1-240x320.png" alt="Davi Sena"/>
        
            )
        }
        return null
    }

    const generatePARIMPAR = ()=> {
        if(par) return (<h1>PAR</h1>)
        return (<h1>ÍMPAR</h1>)
    }

    return(
        <div
        >
            <h2>Contador {contador}</h2>
            {generatePARIMPAR()}
            <button onClick={contar}>Acrescentar</button>
            <button onClick={modificarSena}>Sena</button>
            {
                renderizarSena()
            }
        </div>
    )
}
export default Contador