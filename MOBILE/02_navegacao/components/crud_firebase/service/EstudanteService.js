import { getDocs,collection,addDoc,doc,getDoc,updateDoc } from "firebase/firestore/lite";

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

    static criar = (firestoreDb,callback,estudante)=>{
        addDoc(collection(firestoreDb,'estudante'),estudante)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    }

    static recuperar = (firestoreDb,callback,id)=>{
        getDoc(doc(firestoreDb,'estudante',id))
        .then(
            (docSnap)=>{
                if(docSnap.exists()){
                    callback(docSnap.data())
                }
            }
        )
        .catch(error=>console.log(error))
    }

    static atualizar = (firestoreDb,callback,id,estudante)=>{
        updateDoc( doc(firestoreDb,'estudante',id) , estudante)
        .then(
            ()=>{
                callback()
            }
        )
        .catch(error=>console.log(error))
    }

}

export default EstudanteService