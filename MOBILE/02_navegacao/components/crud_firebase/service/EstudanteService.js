import { getDocs,collection,addDoc,doc,getDoc,updateDoc,deleteDoc,query } from "firebase/firestore/lite";
import { onSnapshot } from 'firebase/firestore'
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

    static listar_onSnaphot = (firestoreDb,callback)=>{
        const q = query(collection(firestoreDb,'estudante'))
        onSnapshot(
            q,
            (querySnaphot)=>{
                const estudantes = []
                querySnaphot.forEach(
                    (document)=>{
                        const id = document.id
                        const {nome,curso,ira} = document.data()
                        estudantes.push({id,nome,curso,ira})
                    }//document
                )//snapshot.forEach
                callback(estudantes)
            }
        )
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

    static apagar = (firestoreDb,callback,id)=>{
        deleteDoc(doc(firestoreDb,'estudante',id))
        .then(()=>callback(true))
        .catch(error=>console.log(error))
    }

}

export default EstudanteService