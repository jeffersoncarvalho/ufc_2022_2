import { View, Text, TextInput, Button } from "react-native";
import { estilos } from "../css/MeuCSS";

const Sobre = ({navigation})=> {
    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Sobre</Text>
            <Text style={estilos.label}>
                smdsada
                sdlajdklsjdsakdjsad
                sakdksdjasks
            </Text>
            <View style={estilos.botao}>
                <Button
                    title="Home"
                    onPress={()=>navigation.navigate('Home')} 
                />
            </View>
        </View>
    )
}

export default Sobre