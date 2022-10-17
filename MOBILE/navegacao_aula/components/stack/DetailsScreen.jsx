import { View, Text, Button } from "react-native";

const DetailsScreen = (props)=> {
    return (
        <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Tela de Detalhes</Text>
            <Text>
                Nome: {props.route.params.nome}
            </Text>
            <View style={{margin:20}}>
                <Button 
                    title="Home..." 
                    onPress={()=>props.navigation.navigate('HomeScreen')} 
                    />
            </View>
            <View style={{margin:20}}>
                <Button 
                    title="Modal..." 
                    onPress={()=>props.navigation.navigate('MyModal')} 
                    />
            </View>
        </View>
    )
}
export default DetailsScreen