import { View, Text, TextInput, Button } from "react-native";

const Sobre = ({navigation})=> {
    return (
        <View>
            <Text>Sobre</Text>
            <Text>
                smdsada
                sdlajdklsjdsakdjsad
                sakdksdjasks
            </Text>
            <View>
                <Button
                    title="Home"
                    onPress={()=>navigation.navigate('Home')} 
                />
            </View>
        </View>
    )
}

export default Sobre