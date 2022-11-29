import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import {firebaseConfig} from '../keys/firebase_key'

class Firebase {
    
    constructor(){
        this.app = initializeApp(firebaseConfig)
    }

    getFirestoreDb(){
        return getFirestore(this.app)
    }

    getAuthentication(){
        return getAuth(this.app)
    }
}

export default Firebase