import { useState } from "react"

const Contador = ()=> {
    
    const [contador,setContador] = useState(100)
    const [sena,setSena] = useState(false)
    //let contador = 0

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

    return(
        <div
        >
            <h2>Contador {contador}</h2>
            <button onClick={contar}>Acrescentar</button>
            <button onClick={modificarSena}>Sena</button>
            {
                renderizarSena()
            }
        </div>
    )
}
export default Contador