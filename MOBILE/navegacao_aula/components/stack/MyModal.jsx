import React from "react";
import { View, Text, Button } from "react-native";

const MyModal = (props)=> {
    return (
        <View
            style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <Text style={{fontSize:20,fontWeight:'bold'}}>Modal!</Text>
            <View>
                <Button
                    onPress={()=>props.navigation.goBack()}
                    title='Fechar' 
                />
            </View>
        </View>
    )
} 

export default MyModal