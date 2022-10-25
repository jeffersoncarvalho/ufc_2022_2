import {View,Text,Button} from 'react-native'

const HomeScreen = (props)=> {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30}}>
                Home Screen TAB
            </Text>
            <View>
                <Button
                    title='Detalhes'
                    onPress={()=>props.navigation.navigate(
                        'DetailsScreen',
                        {nome:'Jefferson de Carvalho',profissao:'Professor'}
                    )
                    } />
            </View>
        </View>
    )
}

export default HomeScreen