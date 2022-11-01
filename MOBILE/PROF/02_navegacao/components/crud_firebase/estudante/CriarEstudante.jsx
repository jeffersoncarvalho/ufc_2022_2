import { View,Text,Button,TextInput } from "react-native";
import { useState } from "react";
import { estilos } from "../css/MeuCSS"

const CriarEstudante = ()=> {

    const [nome,setNome] = useState('')
    const [curso,setCurso] = useState('')
    const [ira,setIra] = useState('')

    const acaoBotao = ()=> {
        console.log(nome)
        console.log(curso)
        console.log(ira) 
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Estudante</Text>
            <TextInput
                placeholder='Digite o seu nome'
                style={estilos.input}
                value={nome}
                onChangeText={
                    (nome) => {
                        setNome(nome)
                    }
                }
            />
            <TextInput
                placeholder='Digite o seu curso'
                style={estilos.input}
                value={curso}
                onChangeText={
                    (curso) => {
                        setCurso(curso)
                    }
                }
            />
            <TextInput
                placeholder='Digite o IRA'
                style={estilos.input}
                value={ira}
                keyboardType='numeric'
                onChangeText={
                    (ira) => {
                        setIra(ira)
                    }
                }
            />
            <View>
                <Button
                    title='Criar Estudante' 
                    onPress={acaoBotao}
                />
            </View>
        </View>
    )
}

export default CriarEstudante