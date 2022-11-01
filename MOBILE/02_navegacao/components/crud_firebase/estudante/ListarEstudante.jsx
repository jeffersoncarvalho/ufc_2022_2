import { View, Text, SafeAreaView, FlatList, Button } from "react-native"
import { useEffect, useState } from "react"
import { estilos } from "../css/MeuCSS"

import EstudanteService from "../service/EstudanteService"
import { firestoreDb } from "../firebase/firebase_config"

const ListarEstudante = (props) => {

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
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar Estudantes</Text>
            {console.log(estudantes)}
            <SafeAreaView>
                <FlatList 
                    data={estudantes}
                    renderItem={
                        ({item})=>{
                            return (
                                <View
                                    style={{
                        
                                        flexDirection:'row',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{width:'20%',fontWeight:'bold'}}>{item.nome}</Text>
                                    <Text style={{width:'25%'}}>{item.curso}</Text>
                                    <Text style={{margin:5}}>{item.ira}</Text>
                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Editar" 
                                            onPress={()=>props.navigation.navigate('EditarEstudante',{id:item.id})}
                                            />
                                    </View>
                                    <View style={{margin:5}}>
                                        <Button title="Apagar" />
                                    </View>
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