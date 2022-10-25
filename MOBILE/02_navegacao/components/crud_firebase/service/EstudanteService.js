import { getDocs,collection } from "firebase/firestore/lite";

class EstudanteService {

    static listar = (firestoreDb,callback)=>{
        getDocs(collection(firestoreDb,'estudante'))
        .then(
            (snapshot)=>{
                snapshot.forEach(
                    (document)=>{
                        //console.log(document.id)
                        const {nome,curso,ira} = document.data()
                        console.log(nome)
                        console.log(curso)
                        console.log(ira)
                    }//document
                )//snapshot.forEach
            }//snapshot
        )//then
        .catch(error=>console.log(error))
    }

}

export default EstudanteService