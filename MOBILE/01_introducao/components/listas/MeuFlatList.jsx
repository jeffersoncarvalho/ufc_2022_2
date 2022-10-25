import {View,Text,FlatList} from 'react-native'

const MeuFlatList = ()=> {

    const alunos = [
        {nome:'Jefferson',curso:'DD',id:1},
        {nome:'Wladimir',curso:'DD',id:2},
        {nome:'João Marcelo',curso:'DD',id:3},
        {nome:'Paulo Armando de Souza',curso:'DD',id:4}
    ]

    return (
        <View>
            <FlatList 
                data = {alunos}
                renderItem={
                    ({item})=>{
                        return (
                            <View style={{margin:15}}>
                                <Text style={{fontSize:15}}>Key: {item.id} - Nome: {item.nome} - Curso: {item.curso}</Text>
                            </View>
                        )
                    }
                }
                keyExtractor = {(item,index)=>item.id+index}
            />
        </View>
    )   
}

export default MeuFlatList