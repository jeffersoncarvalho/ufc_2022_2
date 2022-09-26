import { useState } from 'react'
import { studentsList } from './data.js'

const ListStudent = () => {

    const [students, setStudents] = useState(studentsList)

    const generateTableBody = ()=> {
        /*return (
            <div>
                {JSON.stringify(studentsList)}
            </div>
        )*/
        return students.map(
            (element)=>{
                return (
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
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
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
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