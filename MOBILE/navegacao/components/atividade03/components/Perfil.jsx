import { View, Text, Image, Button } from "react-native";

const Perfil = (props)=> {
    return (
        <View>
            <Text>Perfil</Text>
            <Image source={{uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png',width:240,height:320}} />
            <Text>Nome: </Text>
            <Text>Idade: </Text>
            <Text>Curso: </Text>
            <View>
                <Button
                    title="HOME"
                    onPress={()=>props.navigation.navigate('Home')} 
                />
            </View>
        </View>
    )
}

export default Perfil