import {View,Text, Button} from 'react-native'

const DetailsScreen = (props)=> {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30}}>
                Details Screen Drawer
            </Text>
            <View>
                <Button
                    title='Home'
                    onPress={()=>props.navigation.navigate('HomeScreen')} />
            </View>
        </View>
    )
}

export default DetailsScreen