import {defineStore} from 'pinia'

import {
    doc,
    updateDoc,
    increment,
    writeBatch
 } from "firebase/firestore";

import { db } from "@/firebase";


export const useCartStore = defineStore('cart',{
    state:()=>({
        cartList: [],
        checkOut:{}

    }),
    getters:{
        summaryQuantity(state){
            return state.cartList.reduce((acc, item)=>{
                return acc + item.quantity;
            },0)
        },
        summaryPrice(state){
            return state.cartList.reduce((acc, item) =>{
                return acc + (item.price * item.quantity);
            },0)
        }
    },
    actions:{
        loadCart(){
            const previousCart = localStorage.getItem('cart-data');

            if(previousCart){
                this.cartList = JSON.parse(previousCart);
            }
        },
        addToCart(productData){
            const findProduct = this.cartList.findIndex((item) => item.name === productData.name)

            if (findProduct < 0) {
                productData.quantity = 1;
                this.cartList.push(productData);
            }else{
                const currentItem = this.cartList[findProduct];
                this.updateQuantity(findProduct, currentItem.quantity + 1);
            }

            localStorage.setItem('cart-data', JSON.stringify(this.cartList));
        },
        updateQuantity(index,quantity){
            this.cartList[index].quantity = quantity;
            localStorage.setItem('cart-data', JSON.stringify(this.cartList));
        },
        remoneItem(index){
            this.cartList.splice(index,1);
            localStorage.setItem('cart-data', JSON.stringify(this.cartList));
        },
        async placeOder(userData){
            try {
                const orderData = {
                    ...userData,
                    totalPrice : this.summaryPrice,
                    paymentMehtod: 'Credit card',
                    orderDate: (new Date).toLocaleDateString(),
                    orderNumber: `AA${Math.floor((Math.random()*90000)+10000)}`,
                    product: this.cartList
                }
                const batch = writeBatch(db)
                for (const product of orderData.product){
                    const productRef = doc(db, 'products', product.productId)
                    await  batch.update(productRef, {
                        remainQuantity: increment(-1)
                    })
                } 

                await batch.commit()
                localStorage.setItem('order-checkout', JSON.stringify(orderData));
            } catch (error) {
                console.log('error', error)
            }
           
        },
        loadCheckOut(){
            const ordertData = localStorage.getItem('order-checkout');
            if (ordertData) {
                this.checkOut = JSON.parse(ordertData);
            }
        }
        
    }
})