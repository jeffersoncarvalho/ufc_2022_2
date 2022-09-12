import {View,Text} from 'react-native'

/*const Professor = (props)=> {
    return(
        <View>
            <Text style={{fontSize:30}}>Professor</Text>
            <Text>Nome: {props.nome}</Text>
            <Text>Titulação: {props.titulacao}</Text>
            <Text>Universidade: {props.universidade}</Text>
        </View>
    )
}*/

/*const Professor = (props)=> {
    const {nome,titulacao,universidade} = props
    return(
        <View>
            <Text style={{fontSize:30}}>Professor</Text>
            <Text>Nome: {nome}</Text>
            <Text>Titulação: {titulacao}</Text>
            <Text>Universidade: {universidade}</Text>
        </View>
    )
}*/

const Professor = ({nome,titulacao,universidade})=> {
    return(
        <View>
            <Text style={{fontSize:30}}>Professor</Text>
            <Text>Nome: {nome}</Text>
            <Text>Titulação: {titulacao}</Text>
            <Text>Universidade: {universidade}</Text>
        </View>
    )
}

export default Professor