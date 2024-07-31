import { defineStore } from "pinia";
import {db} from '@/firebase'
import {    
            getDocs,
            doc,
            collection,
            getDoc,
            setDoc
        } from "firebase/firestore";

export const useAdminUserStroe = defineStore('admin-user', {
    state: ()=>({
        list:[ ]
    }), 
    actions:{
        async loadUser(){
            const userCol = collection(db, 'user')
            const userSnapshot = await getDocs(userCol)
            const userList = userSnapshot.docs.map((item) => {
                let convertedUser = item.data()
                convertedUser.uid = item.id
                convertedUser.updateAt = (convertedUser.updateAt.toDate()).toDateString()
                return convertedUser
            })
            this.list = userList
        },
        async getUser(uid){
            try {
                const userRef = doc(db,'user', uid)
                const userSnapShot = await getDoc(userRef)
                return userSnapShot.data()
            } catch (error) {
                console.log('Error', error)
            }
        },
        async updateUser(uid, userData) {
            try {
                const updatedUser = {
                    name: userData.name,
                    status: userData.status,
                    role: userData.role,
                    updateAt: new Date
                }
                const docRef = doc(db, 'user', uid)
                await setDoc(docRef, updatedUser)
            } catch (error) {
                console.log('error', error)
            }
            
        }
    }
    
})