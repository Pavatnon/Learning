
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product',{
    state:()=>({
      productList:[
        {
            name:'Test1',
            imgURL:'https://picsum.photos/id/238/300/300',
            quantity:5,
            price:100,
            about:'About Test1',
            status:'inStock',

        },
        {
            name:'Test2',
            imgURL:'https://picsum.photos/id/237/300/300',
            quantity:5,
            price:100,
            about:'About Test2',
            status:'inStock',

        },
        {
            name:'Test3',
            imgURL:'https://picsum.photos/id/236/300/300',
            quantity:5,
            price:100,
            about:'About Test3',
            status:'inStock',

        },
        {
            name:'Test4',
            imgURL:'https://picsum.photos/id/235/300/300',
            quantity:5,
            price:100,
            about:'About Test4',
            status:'inStock',

        },
        {
            name:'Test5',
            imgURL:'https://picsum.photos/id/233/300/300',
            quantity:5,
            price:100,
            about:'About Test5',
            status:'inStock',

        },
    ],
    }),
    actions:{
        filterProduct(query){
            return this.productList.filter((item) => item.name.toLowerCase().includes(query));
        },
    }
})
