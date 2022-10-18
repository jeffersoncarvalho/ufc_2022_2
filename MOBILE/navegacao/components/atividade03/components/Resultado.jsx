import { View, Text, TextInput, Button } from "react-native";

const Resultado = ({navigation})=> {
    return (
        <View>
            <Text>Resultado</Text>
            <Text>Seu IMC é</Text>
            <Text></Text>
            <View>
                <Button
                    title="Home"
                    onPress={()=>navigation.navigate('Home')} 
                />
            </View>
        </View>
    )
}

export default Resultado