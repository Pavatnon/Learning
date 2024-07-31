import {defineStore} from 'pinia'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '@/firebase'

export const UseUserProductStore = defineStore('user-product', {
  state:()=>({
    list:[]
  }),
  actions:{
     async loadProduct(){
        const productCol = query(collection(db, 'products'), where('status' ,'==', 'open'))
        const productSnapshot = await getDocs(productCol)
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

