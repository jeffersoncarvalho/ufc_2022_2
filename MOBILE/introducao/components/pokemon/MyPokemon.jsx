import { View, Text, Image, Button, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

const MyPokemon = ()=> {

    const [id,setId] = useState(25)
    const [name,setName] = useState('')
    const [frontImage,setFrontImage] = useState('')
    const [backImage,setBackImage] = useState('')

    useEffect(
        ()=>{

           fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
           .then(
            (response)=>{
                return response.json()
            }
           )
           .then(
            (responseJson)=>{
                //console.log(responseJson.name)
                setName(responseJson.name)
                setFrontImage(responseJson.sprites.front_default)
                setBackImage(responseJson.sprites.back_default)
            }
           )
           .catch((error)=>{console.log(error)})

        }
        ,
        []
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokédex</Text>
            <Text style={{fontSize:20}}>{name.toUpperCase()}</Text>
            <View style={styles.images}>
                <Image source={{uri:frontImage,width:150,height:150}} />
                <Image source={{uri:backImage,width:150,height:150}} />
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Voltar" />
                </View>
                <View style={styles.button}>
                    <Button title="Avançar" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20
        },
        images: {
            flexDirection:'row'
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        button: {
            margin: 15,
            width:'60%'
        }
    }
)

export default MyPokemon