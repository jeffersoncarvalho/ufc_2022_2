import {View,Text} from 'react-native'

const Disciplina = ({children,titulo})=> {
    <View>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
            {titulo}
        </Text>
    
    </View>
}

export default Disciplina