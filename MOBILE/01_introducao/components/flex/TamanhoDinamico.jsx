import {View} from 'react-native'

const TamanhoDinamico = ()=> {
    return (
        <View style={
            {
                flex:1,
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'flex-start',
                flexWrap:'wrap',
                backgroundColor:'#c0c0c0'
            }
        }>
            <View style={{width:50,height:100,backgroundColor:'black'}}></View>
            <View style={{width:50,height:100,backgroundColor:'yellow'}}></View>
            <View style={{width:50,height:100,backgroundColor:'green'}}></View>
            <View style={{width:50,height:100,backgroundColor:'black'}}></View>
            <View style={{width:50,height:100,backgroundColor:'yellow'}}></View>
            <View style={{width:50,height:100,backgroundColor:'green'}}></View>
            <View style={{width:50,height:100,backgroundColor:'black'}}></View>
            <View style={{width:50,height:100,backgroundColor:'yellow'}}></View>
            <View style={{width:50,height:100,backgroundColor:'green'}}></View>
            <View style={{width:50,height:100,backgroundColor:'black'}}></View>
            <View style={{width:50,height:100,backgroundColor:'yellow'}}></View>
            <View style={{width:50,height:100,backgroundColor:'green'}}></View>
        </View>
    )
}

export default TamanhoDinamico