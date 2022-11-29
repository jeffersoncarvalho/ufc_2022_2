import { Text, View, TextInput, Button } from "react-native"
import { estilos } from "../css/MeuCSS"
import { useState } from "react"

const LoginUsuario = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    />
                </View>
            </View>
        </View>
    )

}

export default LoginUsuario