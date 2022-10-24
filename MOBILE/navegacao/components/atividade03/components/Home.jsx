import { View, Text, Button } from "react-native";
import { estilos } from "../css/MeuCSS";

const Home = (props)=> {
    return (
        <View style={estilos.container}>
            <Text>Home</Text>
            <View>
                <Button
                    title="Cadastro"
                    onPress={()=>props.navigation.navigate('Cadastro')} 
                />
            </View>
            <View>
                <Button
                    title="IMC"
                    onPress={()=>props.navigation.navigate('IMC')} 
                />
            </View>
            <View>
                <Button
                    title="Sobre"
                    onPress={()=>props.navigation.navigate('Sobre')} 
                />
            </View>
        </View>
    )
}

export default Home