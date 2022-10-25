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
                        const {nome,curso,ira} = document.data()
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