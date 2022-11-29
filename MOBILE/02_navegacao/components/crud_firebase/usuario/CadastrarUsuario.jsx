import { Text, View, TextInput, Button } from "react-native"
import { estilos } from "../css/MeuCSS"
import { useState } from "react"

import { auth } from "../firebase/firebase_config"
import UsuarioService from "../service/UsuarioService"

const CadastrarUsuario = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const acaoBotao = ()=> {
        //console.log(email)
        //console.log(password)
        UsuarioService.signUp(
            auth,
            email,
            password,
            ()=>{
                
            }
        )
       
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Cadastrar Usuário</Text>
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
                    placeholder='E-mail'
                    onChangeText={email=>setEmail(email)} 
                    value={email}
                />
                <TextInput 
                    style={estilos.input}
                    secureTextEntry={true}
                    placeholder='Senha'
                    onChangeText={password=>setPassword(password)}
                    value={password}
                />
                <View style={estilos.botao}>
                    <Button
                        title="Enviar" 
                        onPress={acaoBotao}
                    />
                </View>
            </View>
        </View>
    )

}

export default CadastrarUsuario