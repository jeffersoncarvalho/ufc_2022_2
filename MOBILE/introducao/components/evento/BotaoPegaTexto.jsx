import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'

const BotaoPegaTexto = () => {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [universidade, setUniversidade] = useState('')

    const acaoBotao = () => {
        alert('Nome: ' + nome + '\nCurso: ' + curso + '\nUniversidade: ' + universidade)
        setNome('')
        setCurso('')
        setUniversidade('')
    }

    return (
        <View style={estilos.container}>

            <Text style={estilos.cabecalho}>Cadastrar Estudante</Text>
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
                placeholder='Digite a sua universidade'
                style={estilos.input}
                value={universidade}
                onChangeText={
                    (universidade) => {
                        setUniversidade(universidade)
                    }
                }
            />
            <View style={estilos.botao}>
                <Button
                    title='CADASTRAR'
                    onPress={acaoBotao}
                />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e5e5'
    },
    cabecalho: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    input: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20,
        marginTop: 10
    },
    botao: {
        width: "93%",
        margin: 15,
        backgroundColor: "lightblue"
    }
})
export default BotaoPegaTexto