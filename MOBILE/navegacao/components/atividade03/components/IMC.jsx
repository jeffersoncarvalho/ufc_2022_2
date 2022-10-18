import { View, Text, TextInput, Button } from "react-native";

const IMC = ({navigation})=> {
    
    return (
        <View>
            <Text>IMC</Text>
            <TextInput placeholder="Entre com o seu peso" />
            <TextInput placeholder="Entre com a sua altura" />
            <View>
                <Button 
                    title="OK"
                    onPress={()=>navigation.navigate('Resultado')}
                />
            </View>
        </View>
    )
}

export default IMC