import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, query, onSnapshot} from 'firebase/firestore'

class StudentService {

    static list = (firestoreDb,callback)=> {
        getDocs(collection(firestoreDb,'student'))
        .then(
            (studentSnapshot)=>{
                const students = []
                studentSnapshot.forEach(
                    (student)=>{
                        //console.log(student.id)
                        const id = student.id
                        const {name,course,ira} = student.data()
                        //console.log(name+" "+course+" "+ira)
                        students.push({id,name,course,ira})
                    }
                )//forEach
                callback(students)
            }//studentSnapshot
        )//then
        .catch(error=>console.log(error))
    }

    static list_on_snapshot = (firestoreDb,callback)=>{
        const q = query(collection(firestoreDb,'student'))
        const unscribe = onSnapshot(
            q,
            (querySnaphot)=>{
                const students = []
                querySnaphot.forEach(
                    (document)=>{
                        const id = document.id
                        const {name,course,ira} = document.data()
                        students.push({id,name,course,ira})
                    }//document
                )//forEach
                callback(students)
            }//querySnaphot
        )//onSnapshot
    }

    static add = (firestoreDb,callback,student)=>{
        addDoc(collection(firestoreDb,'student'),student)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    }

    static retrieve = (firestoreDb,callback,id)=>{
        getDoc(doc(firestoreDb,'student',id))
        .then(
            (docSnap)=>{
                if(docSnap.exists()){
                    //console.log("Document data:", docSnap.data())
                    callback(docSnap.data())
                }
            }
        )
        .catch(error=>console.log(error))
    }

    static update = (firestoreDb,callback,id,student)=>{
        updateDoc(
            doc(firestoreDb,'student',id),
            student)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))
    }

    static delete = (firestoreDb,callback,id)=>{
        deleteDoc(doc(firestoreDb,'student',id))
        .then(()=>callback(true))
        .catch(error=>console.log(error))
    }

}

export default StudentService