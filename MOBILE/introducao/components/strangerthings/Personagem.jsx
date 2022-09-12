import {View,Text} from 'react-native'

const Personagem = ({nome,cena})=> 
    <View>
        <Text>Olá, eu sou o personagem {nome} na cena {cena}!</Text>
    </View>

export default Personagem