import { View, Text, SafeAreaView, FlatList } from "react-native"
import { useEffect, useState } from "react"

import EstudanteService from "../service/EstudanteService"
import { firestoreDb } from "../firebase/firebase_config"

const ListarEstudante = () => {

    const [estudantes,setEstudantes] = useState([])

    useEffect(
        () => {
            EstudanteService.listar(
                firestoreDb,
                (estudantes) => {
                    //console.log(estudantes)
                    setEstudantes(estudantes)
                }
            )
        }
        ,
        []
    )

    return (
        <View>
            <Text>Listar Estudantes</Text>
            {console.log(estudantes)}
            <SafeAreaView>
                <FlatList 
                    data={estudantes}
                    renderItem={
                        ({item})=>{
                            return (
                                <View>
                                    <Text>{item.nome}</Text>
                                    <Text>{item.curso}</Text>
                                    <Text>{item.ira}</Text>
                                </View>
                            )
                        }
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

export default ListarEstudante