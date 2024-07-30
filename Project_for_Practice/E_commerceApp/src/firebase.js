import { initializeApp } from 'firebase/app'
import {getFirestore, connectFirestoreEmulator} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyB-lb67EImSt_2X6qEv1rU1ZH3Ec231UAk',
    authDomain: 'ecommerce-practice-by-pavat.firebaseapp.com',
    databaseURL: 'https://ecommerce-practice-by-pavat-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'ecommerce-practice-by-pavat',
    storageBucket: 'ecommerce-practice-by-pavat.appspot.com',
    messagingSenderId: '333842398371',
    appId: '1:333842398371:web:82c5b424d344112dd39316'
  }

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
connectFirestoreEmulator(db,'127.0.0.1', 8080);

export {
    db
}