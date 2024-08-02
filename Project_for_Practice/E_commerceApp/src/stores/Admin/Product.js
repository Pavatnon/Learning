import {defineStore} from 'pinia'

import{
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    setDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    // pagination
    limit,
    limitToLast,
    startAfter,
    endBefore,
    getCountFromServer
} from 'firebase/firestore'

import {db} from '@/firebase'


export const useAdminProductStore = defineStore('admin-products',{
    state:()=>({
        list:[],
        docList: [],
        filter:{
            search: '',
            status:'',
            sort: {
                updateAt: 'asc',
            }
        },

    }),
    getters:{
        list (state) {
            return state.docList.map((item) => {
                const convertedProduct = item.data()
                convertedProduct.productId = item.id
                convertedProduct.updateAt = convertedProduct.updateAt.toDate()
                return convertedProduct
            })
        },
        totalPage(state){
            return Math.ceil(state.total / 2)
        }
    },
    actions: {
        async loadProducts (){
            let productCol = query(collection(db, 'products'), orderBy('updateAt', this.filter.sort.updateAt))

            if(this.filter.search){
                productCol = query(productCol, where('name' ,'==', this.filter.search))
            }
            if(this.filter.status){
                productCol = query(productCol, where('status' ,'==', this.filter.status))
            }

            const rawProductCol = productCol

            productCol = query(productCol, limit(2))
            const productSapshot = await getDocs(productCol)
            this.docList = productSapshot.docs

            const allSnapShot =  await getCountFromServer(rawProductCol)
            this.total = allSnapShot.data().count
          
        },
        async loadNextProduct(mode){
            let productCol = query(collection(db, 'products'), orderBy('updateAt', this.filter.sort.updateAt))
            if(mode === 'next'){
                const lastDocument = this.docList[this.docList.length - 1]
                productCol = query(productCol, startAfter(lastDocument), limit(2))
            }else{
                const fristDocument = this.docList[0]
                productCol = query(productCol, endBefore(fristDocument), limitToLast(2))
            }

            const productSapshot = await getDocs(productCol)
            this.docList = productSapshot.docs
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
                productData.remainQuantity = parseInt(productData.quantity); 
                productData.price = parseInt(productData.price)
                productData.quantity = parseInt(productData.quantity)
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
                updateProduct.price = parseInt(productsData.price)
                updateProduct.quantity = parseInt(productsData.quantity)
                updateProduct.remainQuantity = parseInt(productsData.quantity)
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