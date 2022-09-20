import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

const BotaoPegaTexto = () => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Entrada de Texto com Botao</Text>
            <TextInput placeholder='Digite um texto' style={estilos.input} />
            <View style={estilos.botao}>
                <Button title='PEGAR TEXTO' />
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
        backgroundColor: '#c0c0c0'
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
        paddingLeft: 20
    },
    botao: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"

    }
})
export default BotaoPegaTexto