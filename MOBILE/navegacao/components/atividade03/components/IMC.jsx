import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { estilos } from "../css/MeuCSS";

const IMC = ({navigation})=> {

    const [peso,setPeso] = useState(0)
    const [altura,setAltura] = useState(0)

    const enviarDados = ()=> {
        navigation.navigate('Resultado',{peso,altura})
    }
    
    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>IMC</Text>
            <TextInput 
                placeholder="Entre com o seu peso (kg)"
                style={estilos.input}
                keyboardType='numeric'
                onChangeText={(value)=>setPeso(value)}
                
            />
            <TextInput 
                placeholder="Entre com a sua altura (m)"
                style={estilos.input}
                keyboardType='numeric'
                onChangeText={(value)=>setAltura(value)}
                
            />
            <View style={estilos.botao}>
                <Button 
                    title="OK"
                    onPress={()=>enviarDados()}
                />
            </View>
        </View>
    )
}

export default IMC