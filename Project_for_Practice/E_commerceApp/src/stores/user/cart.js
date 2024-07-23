import {defineStore} from 'pinia'
import { parse } from 'vue/compiler-sfc';

export const useCartStore = defineStore('cart',{
    state:()=>({
        cartList: []

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
            productData.quantity = 1;
            this.cartList.push(productData);

            localStorage.setItem('cart-data', JSON.stringify(this.cartList));
        },
        updateQuantity(index,quantity){
            this.cartList[index].quantity = quantity;
            localStorage.setItem('cart-data', JSON.stringify(this.cartList));
        },
        remoneItem(index){
            this.cartList.splice(index,1);
            localStorage.setItem('cart-data', JSON.stringify(this.cartList));
        }
    }
})