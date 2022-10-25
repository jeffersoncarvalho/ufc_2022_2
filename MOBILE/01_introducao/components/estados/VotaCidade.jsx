import { View, Text, Button } from 'react-native'

const VotaCidade = () => {
    return (
        <View>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixadá: </Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixeramobim: </Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Ibicuitinga: </Text>
            </View>
            <View
                style={{
                    flex:1,
                    flexDirection:'row'
                }}
            >
                <View style={{margin:5}}>
                    <Button title='Quixadá'/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Quixeramobim'/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Ibicuitinga'/>
                </View>
            </View>
        </View>
    )
}
export default VotaCidade