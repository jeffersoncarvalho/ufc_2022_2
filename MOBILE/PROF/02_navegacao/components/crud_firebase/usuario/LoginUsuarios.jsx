import { useState } from "react"
import { Text, View, TextInput, Button } from "react-native"

import { estilos } from '../css/MeuCSS'
import UsuarioService from "../service/UsuarioService"
import { auth } from "../firebase/firebase_config"

const LoginUsuario = (props) => {

    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const botaoLogin = ()=> {
        //console.log(email)
        //console.log(senha)
        UsuarioService.login(
            auth,
            email,
            senha,
            (user)=>{
                console.log(user)
                if(user!==null && user!==undefined){
                    props.navigation.navigate('HomeEstudante')
                }
            }
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Login Usuário</Text>
            <View
                style={{
                    flex:1,
                    flexDirection:'column',
                    alignItems:'center',
                    width:'90%'
                }}
            >
                <TextInput 
                    style={estilos.input}
                    placeholder='e-mail'
                    onChangeText={email=>setEmail(email)}
                    value={email}
                    />
                
                <TextInput
                    style={estilos.input}
                    placeholder='senha'
                    secureTextEntry={true}
                    onChangeText={senha=>setSenha(senha)}
                    value={senha}
                 />
                 <View style={[estilos.botao]}>
                    <Button
                        title='Enviar'
                        onPress={botaoLogin} 
                    />
                 </View>
            </View>
        </View>
    )
}

export default LoginUsuario