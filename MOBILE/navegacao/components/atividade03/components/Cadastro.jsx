import { View, Text, TextInput, Button } from "react-native";

const Cadastro = (props)=> {
    return (
        <View>
            <Text>Cadastro</Text>
            <TextInput placeholder="Entre com o nome"/>
            <TextInput placeholder="Entre com a idade"/>
            <TextInput placeholder="Entre com o e-mail"/>
            <View>
                <Button
                    title="OK"
                    onPress={()=>props.navigation.navigate('Perfil')} 
                />
            </View>
        </View>
    )
}

export default Cadastro