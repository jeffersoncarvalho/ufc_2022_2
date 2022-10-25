import { View, Text } from 'react-native'

//crio o componente usando uma função arrow
/*const Estudante = ()=> {
    return (
        <View>
            <Text>Nome: Jefferson</Text>
            <Text>Curso: Sistemas de Informação</Text>
            <Text>Universidade: UFC Quixadá</Text>
        </View>
    )
}*/

/*const Estudante = ()=>
        <View>
            <Text>Nome: Jefferson</Text>
            <Text>Curso: Sistemas de Informação</Text>
            <Text>Universidade: UFC Quixadá</Text>
        </View>
*/

const Estudante = ({ nome, curso, universidade }) =>
    <View>
        <Text>Estudante</Text>
        <Text>Nome: {nome}</Text>
        <Text>Curso: {curso}</Text>
        <Text>Universidade: {universidade} </Text>
    </View>

export default Estudante