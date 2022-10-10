import { View, Text, Button } from "react-native";

const DetailsScreen = (props)=> {
    return (
        <View>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Tela de Detalhes</Text>
            <View>
                <Button 
                    title="Home..." 
                    onPress={()=>props.navigation.navigate('HomeScreen')} 
                    />
            </View>
        </View>
    )
}
export default DetailsScreen