import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:25
    },
    cabecalho: {
        fontSize:25,
        fontWeight:'bold',
        margin:15
    },
    botao: {
        width:'60%',
        margin:10,
        backgroundColor:'lightblue'
    }
})

export { estilos }