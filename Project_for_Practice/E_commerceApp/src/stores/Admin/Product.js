import {defineStore} from 'pinia'

export const useAdminProductStore = defineStore('admin-products',{
    state:()=>({
        list:[],
        loaded: false
    }),
    actions: {
        loadProducts (){
            const loadProductsData = localStorage.getItem('admin-products')
            if(loadProductsData){
                this.list = JSON.parse(loadProductsData)
            }
            this.loaded = true
        },
        getProduct(index){
            if (!this.loaded) {
                this.loadProducts()
            }
            return this.list[index]
        },
        addProduct(productData){
            productData.remainQuantity = productData.quantity
            productData.updateAt = (new Date()).toLocaleDateString()
            this.list.push(productData)
            localStorage.setItem('admin-products', JSON.stringify(this.list))
        },
        updateproduct(index, productsData){
            this.list[index].name = productsData.name
            this.list[index].img = productsData.img
            this.list[index].price = productsData.price
            this.list[index].quantity = productsData.quantity
            this.list[index].remainQuantity = productsData.quantity
            this.list[index].status = productsData.status
            this.list[index].updateAt = (new Date()).toLocaleDateString()
            localStorage.setItem('admin-products', JSON.stringify(this.list))

        },
        removeProduct(index){
            this.list.splice(index, 1);
            localStorage.setItem('admin-products', JSON.stringify(this.list))
        }
    }
})