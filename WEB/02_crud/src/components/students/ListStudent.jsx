import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { studentsList } from './data.js'
import axios from 'axios'

const ListStudent = () => {

    const [students, setStudents] = useState([])

    useEffect(
        ()=>{
            //console.log('Teste')
            axios.get('http://localhost:3001/students')
            .then(
                (response)=>{
                    //console.log(response.data)
                    setStudents(response.data)
                }
            )
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
        }
        ,
        []
    )

    function deleteStudent(id) {
        if(window.confirm('Deseja excluir?')){
            axios.delete('http://localhost:3001/students/'+id)
            .then(()=>console.log('ok'))
            .catch(error=>console.log(error))  
        }
    }

    const generateTableBody = ()=> {
        /*return (
            <div>
                {JSON.stringify(studentsList)}
            </div>
        )*/
        return students.map(
            (element,index)=>{
                element.key = index
                return (
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
                        <td>
                            <Link to={'/editStudent/'+element.id} className='btn btn-primary'>
                                Editar
                            </Link>
                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>deleteStudent(element.id)}>
                                Apagar
                            </button>
                        </td>
                    </tr>
                )
            }
        )
    }

    return (
        <div>
            <h1>Listar Estudante</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent