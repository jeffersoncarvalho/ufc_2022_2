import { View, Text, Button } from "react-native";
import { estilos } from "../css/MeuCSS";

const Home = (props)=> {
    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Atividade de Sala</Text>
            <View style={estilos.botao}>
                <Button
                    title="Cadastro"
                    onPress={()=>props.navigation.navigate('Cadastro')} 
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title="IMC"
                    onPress={()=>props.navigation.navigate('IMC')} 
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title="Sobre"
                    onPress={()=>props.navigation.navigate('Sobre')} 
                />
            </View>
        </View>
    )
}

export default Home