import { Image, View, Text, StyleSheet, Button } from "react-native"
import { useState, useEffect } from "react"

const PokemonProf = () => {

    const [id, setId] = useState(10)
    const [name, setName] = useState('')
    const [imageFront, setImageFront] = useState('')
    const [imageBack, setImageBack] = useState('')

    useEffect(
        () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response)=>{
                    return response.json()
                }
            )
            .then(
                (pokemon)=>{
                    //console.log(responseJson)
                    setName(pokemon.name)
                    setImageFront(pokemon.sprites.front_default)
                    setImageBack(pokemon.sprites.back_default)
                }       
            )
            .catch(error=>console.log(error))

        }
        ,
        [id]
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Pokédex</Text>
            <Text style={styles.name}>{name.toUpperCase()}</Text>
            <View style={styles.images}>
                <Image source={{ uri: imageFront, width: 150, height: 150 }} />
                <Image source={{ uri: imageBack, width: 150, height: 150 }} />
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Voltar" onPress={()=>setId((id-1===0)?1:id-1)}/>
                </View>
                <View style={styles.button}>
                    <Button title="Avançar" onPress={()=>setId(id+1)}/>
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
            alignItems: 'center',
            backgroundColor: '#e5e5e5',
            padding: 20
        },
        header: {
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 15
        },
        name: {
            fontSize: 20,
            marginBottom: 15
        },
        images: {
            flexDirection: 'row',
            borderColor: 'black',
            borderWidth: 3
        },
        buttons: {
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'center'
        },
        button: {
            width: "60%",
            margin: 10,
        }
    }
)

export default PokemonProf