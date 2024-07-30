import {defineStore} from 'pinia'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '@/firebase'

export const UseUserProductStore = defineStore('user-product', {
  state:()=>({
    list:[]
  }),
  actions:{
     async loadProduct(){
        const productSnapshot = await getDocs(collection(db,'products'))
        const products = productSnapshot.docs.map(doc => doc.data())
        if (products.length > 0) {
            this.list = products
        }
    },
    filterProduct ( searhText){
      return this.list.filter(item => item.name.includes(searhText));
    }
  }
})

