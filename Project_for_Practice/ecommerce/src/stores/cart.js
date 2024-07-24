import Product from '@/components/Product.vue';
import {defineStore} from 'pinia';

export const useCartStore = defineStore('cart',{
    state:()=>({
        cartList:[],
        checkout:{}

    }),
    getters:{
        summaryQuantity(state){
            return state.cartList.reduce((acc, item) => {
                return acc + item.quantity;
            }, 0)
        },
        summaryPrice(state){
            return state.cartList.reduce((acc, item) => {
                return acc + (item.price * item.quantity);
            }, 0)
        }
    },
    actions:{
        loadCart(){
            const loadCartData = localStorage.getItem('cart-Item');

            if(loadCartData){
                this.cartList = JSON.parse(loadCartData);
            }
        },
        addToCart(proDuctData){
            const filterCartItem = this.cartList.findIndex((item) => item.name === proDuctData.name)

            if (filterCartItem < 0) {
                proDuctData.quantity = 1;
                this.cartList.push(proDuctData);
            }else{
                const currentItem = this.cartList[filterCartItem];
                this.updateQuantity(filterCartItem, currentItem.quantity + 1);
            }  

            localStorage.setItem('cart-Item', JSON.stringify(this.cartList));
        },
        updateQuantity(index, quantity){
            this.cartList[index].quantity = quantity;
            localStorage.setItem('cart-Item', JSON.stringify(this.cartList));
        },
        removeCartList(index){
            this.cartList.splice(index,1);
            localStorage.setItem('cart-Item', JSON.stringify(this.cartList));
        },
        placeOder(fromData){
            const orderData = {
                ...fromData,
                totalPrice: this.summaryPrice,
                paymentMethod: 'Credit Card',
                orderDate: (new Date).toLocaleDateString(),
                oderNumber: `AA${(Math.floor(Math.random()* 90000) + 10000)}`,
                products: this.cartList
            }

            localStorage.setItem('oder-checkout', JSON.stringify(orderData));
            localStorage.removeItem('cart-Item');
            window.location.reload();
        },
        loadOrderCheckout(){
            const orderData = localStorage.getItem('oder-checkout');
            if(orderData){
                this.checkout = JSON.parse(orderData);
            }
        }

    }
})