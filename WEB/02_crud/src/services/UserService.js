import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

class UserService{

    static signUp = (auth,email,password,callback) => {
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then(
            (userCredential)=>{
                console.log(userCredential)
            }
        )
        .catch(
            (error)=>{
                console.log(error.code)
            }
        )
    }

    static signIn = (auth,email,password,callback) => {
        signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then(
            (userCredential)=>{
                console.log(userCredential)
                callback(true,userCredential)
            }
        )
        .catch(
            (error)=>{
                console.log(error.code)
                callback(false,error.code)
            }
        )
    }

}

export default UserService