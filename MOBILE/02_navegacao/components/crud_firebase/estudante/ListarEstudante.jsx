import { View, Text } from "react-native"
import { useEffect } from "react"

import EstudanteService from "../service/EstudanteService"
import { firestoreDb } from "../firebase/firebase_config"

const ListarEstudante = () => {

    useEffect(
        () => {
            EstudanteService.listar(
                firestoreDb,
                () => {

                }
            )
        }
        ,
        []
    )

    return (
        <View>
            <Text>Listar Estudantes</Text>
        </View>
    )
}

export default ListarEstudante