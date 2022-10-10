import {View,Text,Button} from 'react-native'
import { useState, useEffect } from 'react'

const MyUseEffect = ()=> {

    const [contador,setContador] = useState(10)
    const [contador2,setContador2] = useState(1000)
    const [par,setPar] = useState(true)
    //let contador = 10

    useEffect(
        ()=>{
            if(contador%2===0) setPar(true)
            else setPar(false)
        }
       ,
       [contador]
    )

    const renderizarPar = ()=>{
        if(par){
            return (
                <Text style={{fontSize:30,fontWeight:'bold'}}>EH PAR</Text>
            )
        }
        return (
            <Text style={{fontSize:30,fontWeight:'bold'}}>EH ÍMPAR</Text>
        )
    }

    const acaoBotao = ()=>{
        //contador = contador + 1
        //console.log(contador)
        setContador(contador+1)
    }

    const acaoBotao2 = ()=>{
        //contador = contador + 1
        //console.log(contador)
        setContador2(contador2-1)
    }

    return (
        <View
            style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <Text style={{fontSize:30,fontWeight:'bold'}} >Contador: {contador}</Text>
            <Text style={{fontSize:30,fontWeight:'bold'}} >PAR: </Text> {renderizarPar()}
            <Text style={{fontSize:30,fontWeight:'bold'}} >Contador 2: {contador2}</Text>
            
            <View>
                <Button 
                    title='ME APERTE!'
                    onPress={acaoBotao}
                />
            </View>

            <View>
                <Button 
                    title='ME APERTE 2!'
                    onPress={acaoBotao2}
                />
            </View>
        </View>
    )
}

export default MyUseEffect