import { View, Text, Button } from "react-native";

const HomeScreen = (props)=> {
    return (
        <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Tela Home</Text>
            <View style={{margin:20}}>
                <Button 
                    title="Detalhes..."
                    onPress={()=>props.navigation.navigate('DetailsScreen',{nome:'Jefferson de Carvalho'})} 
                    />
            </View>
        </View>
    )
}
export default HomeScreen