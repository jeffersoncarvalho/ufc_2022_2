import React from 'react'

const Disciplina = ({children,titulo})=> {
    return(
        <div>
            <h1>{titulo}</h1>
            {
                React.Children.map(
                    children,
                    (estudante)=>{
                        return React.cloneElement(estudante,{disciplina:titulo,nova:'teste'})
                    }
                )
            }
        </div>
    )
}
export default Disciplina