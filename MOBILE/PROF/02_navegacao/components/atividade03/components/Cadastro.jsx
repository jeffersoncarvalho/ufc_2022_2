import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { estilos } from "../css/MeuCSS";

const Cadastro = (props)=> {

    const estadoInicial = {
        nome:'',
        idade:'',
        email:''
    }

    const [cadastro,setCadastro] = useState(estadoInicial)

    //name = nome da propriedade
    //value = valor da propriedade
    const handleCadastro = (name,value)=> {
        setCadastro({...cadastro,[name]:value})
    }

    const enviarCadastro = ()=> {
        console.log(cadastro.nome)
        console.log(cadastro.idade)
        console.log(cadastro.email)
        //validação!!!
        props.navigation.navigate('Perfil',{cadastro})
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Cadastro</Text>
            <TextInput 
                placeholder="Entre com o nome" 
                style={estilos.input}
                onChangeText={(value)=>handleCadastro('nome',value)}
                value={cadastro.nome}
                />
            <TextInput 
                placeholder="Entre com a idade" 
                style={estilos.input}
                onChangeText={(value)=>handleCadastro('idade',value)}
                value={cadastro.idade}
                />
            <TextInput 
                placeholder="Entre com o e-mail" 
                style={estilos.input}
                onChangeText={(value)=>handleCadastro('email',value)}
                value={cadastro.email}
                />
            <View style={estilos.botao}>
                <Button
                    title="OK"
                    onPress={()=>enviarCadastro()} 
                />
            </View>
        </View>
    )
}

export default Cadastro