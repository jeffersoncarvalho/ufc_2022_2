import { StyleSheet, Text, View } from 'react-native'

const VariosEstilos = ()=> {

    return (
        <View>
            <Text style={estilos.vermelho}>Somente Vermelho</Text>
            <Text style={estilos.azulGrande}>Somente Azul Grande</Text>
            <Text style={[estilos.azulGrande,estilos.vermelho]}>Azul Grande, Vermelho</Text>
            <Text style={[estilos.vermelho,estilos.azulGrande]}>Vermelho, Azul Grande</Text>
        </View>
    )

}

const estilos = StyleSheet.create(
    {
        vermelho:{
            color:'red'
        },
        azulGrande:{
            color:'blue',
            fontWeight:'bold',
            fontSize:30
        }
    }
)

export default VariosEstilos