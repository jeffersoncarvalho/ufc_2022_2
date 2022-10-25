import {View,Text} from 'react-native'

//criando um componente como funcão clássica:
function olaMundo(){
    return (
        <View>
            <Text style={{fontSize:25}}>
                Olá Mundo React Native V.1
            </Text>
        </View>
    ) 
}
export default olaMundo