import { collection, getDocs, addDoc, doc, getDoc} from 'firebase/firestore'

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

}

export default StudentService