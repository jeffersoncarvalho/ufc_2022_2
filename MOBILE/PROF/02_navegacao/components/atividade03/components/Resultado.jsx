import { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { estilos } from "../css/MeuCSS";

const Resultado = ({navigation,route})=> {
    
    const [imc,setImc] = useState(0)

    useEffect(
        ()=>{
            const {peso,altura} = route.params
            console.log(peso)
            console.log(altura)
            setImc(peso/(altura*altura))
        },
        []
    )

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Resultado</Text>
            <Text style={estilos.label}>Seu IMC é {imc.toFixed(2)}</Text>
            <Text></Text>
            <View style={estilos.botao}>
                <Button
                    title="Home"
                    onPress={()=>navigation.navigate('Home')} 
                />
            </View>
        </View>
    )
}

export default Resultado