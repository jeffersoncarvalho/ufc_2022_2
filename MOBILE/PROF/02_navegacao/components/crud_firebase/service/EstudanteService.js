import { collection, getDocs} from 'firebase/firestore'

export default class EstudanteService {

    static listar = (firestoreDb, callback) => {
        getDocs(collection(firestoreDb,'estudante'))
        .then(
            (snapshot)=>{
                const estudantes = []
                snapshot.forEach(
                    (document) => {
                        const id = document.id
                        const {nome,curso,ira} = document.data()
                        /*console.log(nome)
                        console.log(curso)
                        console.log(ira)*/
                        estudantes.push({id,nome,curso,ira})
                    }//documet
                )//forEach
                callback(estudantes)
            }//snapshot
        )
        .catch(error=>console.log(error))
    }
}