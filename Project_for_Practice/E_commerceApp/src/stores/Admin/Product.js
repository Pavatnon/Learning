import {defineStore} from 'pinia'

import{
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    setDoc,
    deleteDoc
} from 'firebase/firestore'

import {db} from '@/firebase'


export const useAdminProductStore = defineStore('admin-products',{
    state:()=>({
        list:[],
        loaded: false
    }),
    actions: {
        async loadProducts (){
            const productCol = collection(db, 'products')
            const productSapshot = await getDocs(productCol)
            const products = productSapshot.docs.map((item) => {
                const convertedProduct = item.data()
                convertedProduct.productId = item.id
                convertedProduct.updateAt = convertedProduct.updateAt.toDate()
                return convertedProduct
            });

            this.list = products
          
        },
        async getProduct(productId){
            try {
                const productRef = doc(db, 'products', productId)
                const productSnapshot = await getDoc(productRef)
                return productSnapshot.data()
            } catch (error) {
                console.log('error', error)
            }

        },
        async addProduct(productData){
            try {
                productData.remainQuantity = productData.quantity
                productData.updateAt = new Date()
                const productCol = collection(db, 'products')
                await addDoc(productCol, productData)
            } catch (error) {
                console.log('error',error)
            }
        },
        async updateproduct(productId, productsData){
            try {
                const updateProduct = {}
                updateProduct.name = productsData.name
                updateProduct.imageUrl = productsData.imageUrl
                updateProduct.about = productsData.about
                updateProduct.price = productsData.price
                updateProduct.quantity = productsData.quantity
                updateProduct.remainQuantity = productsData.quantity
                updateProduct.status = productsData.status
                updateProduct.updateAt = new Date()

                const productRef = doc(db, 'products', productId)
                await setDoc(productRef, updateProduct)
            } catch (error) {
                console.log('error',error)
            }

        },
        async removeProduct(productId){
            try {
                const productRef = doc(db, 'products', productId)
                await deleteDoc(productRef)
            } catch (error) {
                console.log('error', error)
            }
            
        }
    }
})