import { useState } from "react"
import { useEffect } from "react"
import { SafeAreaView, FlatList, View, Text, Button} from "react-native"

import { firestoreDb } from "../firebase/firebase_config"
import EstudanteService from "../service/EstudanteService"
import { estilos } from "../css/MeuCSS"

const ListarEstudante = () => {

    const [estudantes, setEstudantes] = useState([])

    useEffect(
        () => {
            EstudanteService.listar(
                firestoreDb,
                (estudantes) => {
                    //console.log(estudantes)
                    setEstudantes(estudantes)
                })
        },
        []
    )

    return (
        <SafeAreaView style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar</Text>
            {console.log(estudantes)}
            <FlatList
                data={estudantes}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={{
                                flexDirection:'row'
                            }}>
                                <Text style={{margin:5,fontWeight:'bold'}}>{item.nome}</Text>
                                <Text style={{margin:5}}>{item.curso}</Text>
                                <Text style={{margin:5}}>{item.ira}</Text>
                                <View style={{margin:5}}>
                                    <Button title="Editar" />
                                </View>
                                <View style={{margin:5}}>
                                    <Button title="Apagar"/>
                                </View> 
                            </View>)
                    }
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )

}

export default ListarEstudante