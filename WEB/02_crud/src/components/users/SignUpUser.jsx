import { useState } from 'react'
//import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import FirebaseContext from '../../utils/FirebaseContext'
//import StudentService from '../../services/StudentService'
import UserService from '../../services/UserService'

const SignUpUserPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <SignUpUser firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const SignUpUser = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event)=> {
        event.preventDefault()
        UserService.signUp(
            props.firebase.getAuthentication(),
            email,
            password,
            ()=>{
                
            }
        )
       
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Cadastrar Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>E-mail: </label>
                    <input 
                        type='email'
                        className='form-control'
                        placeholder='Digite seu e-mail'
                        onChange={
                            (event)=>{
                                setEmail(event.target.value)
                            }
                        }
                    />
                </div>
                <div className='form-group'>
                    <label>Senha: </label>
                    <input 
                        type='password'
                        className='form-control'
                        placeholder='Digite sua senha'
                        onChange={
                            (event)=>{
                                setPassword(event.target.value)
                            }
                        }
                    />
                </div>
                
                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Efetuar Cadastro'
                        className='btn btn-primary' 
                        />
                </div>
            </form>
        </div>
    )
}

export default SignUpUserPage