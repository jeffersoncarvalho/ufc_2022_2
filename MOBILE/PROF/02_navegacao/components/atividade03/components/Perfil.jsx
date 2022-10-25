import { View, Text, Image, Button } from "react-native";
import { estilos } from "../css/MeuCSS";

const Perfil = (props)=> {
    const {nome,idade,email} = props.route.params.cadastro
    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Perfil</Text>
            <Image source={{uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png',width:240,height:320}} />
            <Text style={estilos.label}>Nome: {nome}</Text>
            <Text style={estilos.label}>Idade: {idade}</Text>
            <Text style={estilos.label}>E-mail: {email}</Text>
            <View style={estilos.botao}>
                <Button
                    title="HOME"
                    onPress={()=>props.navigation.navigate('Home')} 
                />
            </View>
        </View>
    )
}

export default Perfil