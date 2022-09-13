import { View, Text, Button, Image } from 'react-native'
import { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(10)
    const [aragao, setAragao] = useState(false)
    //let contador = 0

    const acaoAumentar = () => {
        //contador = contador + 1
        //console.log(contador)
        setContador(contador + 1)

    }

    const mostrarAragao = () => {
        if (aragao) {
            return (
                <Image
                    source={
                        { uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png', width: 240, height: 320 }
                    }
                />
            )
        }
        return null
    }

    return (
        <View>
            <Text style={
                {
                    fontSize: 30,
                    fontWeight: 'bold'
                }
            }>Contador: {contador}</Text>
            <Button
                title='AUMENTAR'
                onPress={acaoAumentar}
            />
            {
                mostrarAragao()
            }
        </View>
    )
}

export default Contador