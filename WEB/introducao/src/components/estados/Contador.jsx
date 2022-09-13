import { useState } from "react"

const Contador = ()=> {
    //let contador = 0

    const contar = ()=> {
        //contador = contador + 1
        //console.log(contador)
    }

    return(
        <div>
            <h2>Contador </h2>
            <button onClick={contar}>Acrescentar</button>
        </div>
    )
}
export default Contador