import { getDocs,collection } from "firebase/firestore/lite";

class EstudanteService {

    static listar = (firestoreDb,callback)=>{
        getDocs(collection(firestoreDb,'estudante'))
        .then(
            (snapshot)=>{
                const estudantes = []
                snapshot.forEach(
                    (document)=>{
                        const id = document.id
                        //console.log(document.data().nome)
                        const {nome,curso,ira} = document.data()
                        //console.log(ira)
                        estudantes.push({id,nome,curso,ira})
                    }//document
                )//snapshot.forEach
                callback(estudantes)
            }//snapshot
        )//then
        .catch(error=>console.log(error))
    }

}

export default EstudanteService