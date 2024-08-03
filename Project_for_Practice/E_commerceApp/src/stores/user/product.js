import {defineStore} from 'pinia'
import {collection, getDocs, query, where, onSnapshot} from 'firebase/firestore'
import {db} from '@/firebase'

export const UseUserProductStore = defineStore('user-product', {
  state:()=>({
    list:[]
  }),
  actions:{
     async loadProduct(){
        const productCol = query(collection(db, 'products'), where('status' ,'==', 'open'))
        // const productSnapshot = await getDocs(productCol)
        // const products = productSnapshot.docs.map(doc => {
        //   const convertedData = doc.data()
        //   convertedData.productId = doc.id
        //   return convertedData
        // })

        // if (products.length > 0) {
        //     this.list = products
        // }
        onSnapshot(productCol, (productSnapshot) => {
          const products = productSnapshot.docs.map(doc =>{
            const convertedData = doc.data()
            convertedData.productId = doc.id
            return convertedData
          })
          if (products.length > 0){
            this.list = products
          }
        })
    },
    filterProduct ( searhText){
      return this.list.filter(item => item.name.includes(searhText));
    }
  }
})

