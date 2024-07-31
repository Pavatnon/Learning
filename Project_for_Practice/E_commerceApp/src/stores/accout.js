import {defineStore} from 'pinia'
import {GoogleAuthProvider,
        onAuthStateChanged,
        signInWithPopup,
        signInWithEmailAndPassword,
        signOut}from 'firebase/auth'
import {auth} from '@/firebase'
import {db} from '@/firebase'
import {doc, getDoc, setDoc} from 'firebase/firestore'

const provider = new GoogleAuthProvider()

export const useAccoutStore = defineStore('accout', {
    state:()=>({
        isLoggedIn: false,
        isAdmin:false,
        profile:{},
        user:{}
    }),
    actions:{
        async checkAuth(){
            return new Promise((resolve) => {
                onAuthStateChanged(auth, async (user)=>{
                    if (user) {
                        this.user = user
                        const docRef = doc(db, 'user', user.uid)
                        const docSnap = await getDoc(docRef)
                        if(docSnap.exists()){
                            // ไม่สร้างข้อมูลใหม่
                            this.profile = docSnap.data()
                        }else{
                            // ยังไม่มีข้อมูล = สร้างข่อมูลใหม่
                            const newUser = {
                                name: user.displayName,
                                role: 'member',
                                status: 'active',
                                updateAt: new Date
                            }
                            await setDoc(docRef, newUser)
                            this.profile = newUser
                        }
                        if(this.profile.role === 'admin'){
                            this.isAdmin = true
                        }
                        this.isLoggedIn = true
                        resolve(true)
                    }else{
                        resolve(false)
                    }
                })
            }) 
        },
        async singInwithGoogle(){
            try {
                const result = await signInWithPopup(auth,provider)  
                this.isLoggedIn = true 
                this.user = result.user 
            } catch (error) {
                console.log('Login Error',error);
            }
            
        },
        async signInAdmin(email,password){
            try {
                const result = await signInWithEmailAndPassword(auth, email, password)
                this.user = result.user
                this.isLoggedIn = true 
                this.isAdmin = true
            } catch (error) {
                switch (error.code) {
                    case 'auth/invalid-email':
                        throw new Error('Email ไม่ถูกต้อง')
                    case 'auth/wrong-password':
                        throw new Error('Password ไม่ถูกต้อง')
                    default:
                        throw new Error('มีปัญหาเกี่ยวกับการ Login')
                }
            }
        },
        async logout(){
            try {
                await signOut(auth) 
                this.isLoggedIn = false
                this.isAdmin = false
            } catch (error) {
                console.log('Logout Error', error)
            }
        }
    }
})