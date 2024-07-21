import {defineStore} from 'pinia'

export const UseUserProductStore = defineStore('user-product', {
  state:()=>({
    list:[
      {
        name:'test',
        imageURL:'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
        quantity:10,
        about:'testt',
        status:'open',
        price: 100
      },
      {
        name:'test note',
        imageURL:'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
        quantity:10,
        about:'testt',
        status:'open',
        price: 100
      },
      {
        name:'test note1',
        imageURL:'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
        quantity:10,
        about:'testt',
        status:'open',
        price: 100
      },
      {
        name:'test back',
        imageURL:'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
        quantity:10,
        about:'testt',
        status:'open',
        price: 100
      },
      {
        name:'test fall',
        imageURL:'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
        quantity:10,
        about:'testt',
        status:'open',
        price: 100
      },
    ]
  }),
  actions:{
    filterProduct ( searhText){
      return this.list.filter(item => item.name.includes(searhText));
    }
  }
})

