import { ScrollView, Image, View } from 'react-native'

const MeuScroll = ()=> {
    const vilnei = 'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-240x320.png'
    return (
        <ScrollView>
            <View style={{flex:1, alignItems:'center'}}>
                <Image source={{uri:vilnei,width:240,height:320}}/>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
                <Image source={{uri:vilnei,width:240,height:320}}/>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
                <Image source={{uri:vilnei,width:240,
                    height:320}}/>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
                <Image source={{uri:vilnei,width:240,height:320}}/>
            </View>
            <View style={{flex:1, alignItems:'center'}}>
                <Image source={{uri:vilnei,width:240,height:320}}/>
            </View>
        </ScrollView>
    )
}

export default MeuScroll