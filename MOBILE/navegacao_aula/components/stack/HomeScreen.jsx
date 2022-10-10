import { View, Text, Button } from "react-native";

const HomeScreen = (props)=> {
    return (
        <View>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Tela Home</Text>
            <View>
                <Button 
                    title="Detalhes..."
                    onPress={()=>props.navigation.navigate('DetailsScreen')} 
                    />
            </View>
        </View>
    )
}
export default HomeScreen