import React from "react"

/*const estudante = (props) =>
    <div>
        Nome: {props.nome}<br/>
        Curso: {props.curso}<br/>
        Universidade: {props.universidade}<br/>
    </div>*/

/*const estudante = (props) => {
    const {nome,curso,universidade} = props
    return (
        <div>
            Nome: {nome}<br />
            Curso: {curso}<br />
            Universidade: {universidade}<br />
        </div>
    )
}*/

const estudante = ({nome,curso,universidade,disciplina}) => {
    
    return (
        <div>
            Nome: {nome}<br />
            Curso: {curso}<br />
            Universidade: {universidade}<br />
            Disciplina: {disciplina}
        </div>
    )
}
export default estudante