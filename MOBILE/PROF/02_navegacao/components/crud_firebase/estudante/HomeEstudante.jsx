import { View,Text, Button } from "react-native"
import { estilos } from "../css/MeuCSS"

const HomeEstudante = (props)=> {
    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Estudante Home</Text>
            <View style={estilos.botao}>
                <Button 
                    title="Listar Estudantes" 
                    onPress={()=>props.navigation.navigate('ListartEstudante')}/>
            </View>
            <View style={estilos.botao}>
                <Button 
                    title="Criar Estudante"
                    onPress={()=>props.navigation.navigate('CriarEstudante')} />
            </View>
        </View>
    )
}

export default HomeEstudante