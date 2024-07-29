import {defineStore} from 'pinia'

export const useAdminProductStore = defineStore('admin-products',{
    state:()=>({
        list:[
            {
                name: 'test',
                img: 'https://picsum.photos/id/235/200/200',
                price: 200,
                quantity: 20,
                remainQuantity: 11,
                status: 'open',
                updateAt: (new Date()).toLocaleDateString()
            },
        ]
    }),
    actions: {
        getProduct(index){
            this.list[index]
        },
        addProduct(productData){
            productData.remainQuantity = productData.quantity
            productData.updateAt = (new Date()).toLocaleDateString()
            this.list.push(productData)
        },
        updateproduct(index, productsData){
            this.list[index].name = productsData.name
            this.list[index].img = productsData.img
            this.list[index].price = productsData.price
            this.list[index].quantity = productsData.quantity
            this.list[index].remainQuantity = productsData.quantity
            this.list[index].status = productsData.status
            this.list[index].updateAt = (new Date()).toLocaleDateString()

        },
        removeProduct(index){
            this.list.splice(index, 1);
        }
    }
})