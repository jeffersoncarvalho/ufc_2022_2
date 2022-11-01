import { useState } from "react";
import { View,Text,Button,TextInput } from "react-native";
import { estilos } from "../css/MeuCSS";

import EstudanteService from "../service/EstudanteService";
import { firestoreDb } from "../firebase/firebase_config"


const CriarEstudante = (props)=> {

    const [nome,setNome] = useState('')
    const [curso,setCurso] = useState('')
    const [ira,setIra] = useState('')

    const acaoBotaoSubmeter = ()=> {
        //console.log(nome)
        //console.log(curso)
        //console.log(ira)
        
        EstudanteService.criar(
            firestoreDb,
            (id)=>{
                alert(`Estudante ${id} inserido!`)
                props.navigation.navigate('ListarEstudante')
            },
            {nome,curso,ira}
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Estudante</Text>
            <TextInput
                style={estilos.input}
                placeholder="Nome" 
                value={nome}
                onChangeText={(nome)=>setNome(nome)}
            />
            <TextInput
                style={estilos.input}
                placeholder="Curso" 
                value={curso}
                onChangeText={(curso)=>setCurso(curso)}
            />
            <TextInput
                style={estilos.input}
                placeholder="IRA"
                value={ira}
                keyboardType='numeric'
                onChangeText={(ira)=>setIra(ira)} 
            />
            <View style={estilos.botao}>
                <Button
                    title="SUBMETER" 
                    onPress={acaoBotaoSubmeter}
                />
            </View>
        </View>
    )
}

export default CriarEstudante