import { collection, getDocs} from 'firebase/firestore'

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

}

export default StudentService