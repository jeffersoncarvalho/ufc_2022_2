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
                    console.log(estudantes)
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
                        ({estudante})=>{
                            return (
                                <View>
                                    <Text>{estudante.nome}</Text>
                                    <Text>{estudante.curso}</Text>
                                    <Text>{estudante.ira}</Text>
                                </View>
                            )
                        }
                    }
                    keyExtractor={estudante => estudante.id}
                />
            </SafeAreaView>
        </View>
    )
}

export default ListarEstudante