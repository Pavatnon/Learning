
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',{
  state:()=>({
    menulist:[
      // อาหารจานเดี่ยว
      {
        name:'กระเพรา',
        imgUrl:'https://fastly.picsum.photos/id/967/200/200.jpg?hmac=s5pdTpbIPeIbni0PAuHQQeuDPFrlAa6-FLJJvpYN1Os',
        price:100,
        type:'อาหารจานเดี่ยว',
        id:'A1'
      },
      // เมนูทอด 
      {
        name:'ไก่ทอด',
        imgUrl:'https://fastly.picsum.photos/id/509/200/200.jpg?hmac=F3VucjvZ_2eEx_ObPM7NJ_Ymq5jESSGCuXo_8japTZc',
        price:100,
        type:'เมนูทอด',
        id:'A2'
      },
      // เมนูย่าง
      {
        name:'ไก่ย่าง',
        imgUrl:'https://fastly.picsum.photos/id/31/200/200.jpg?hmac=tcaVi7pgjpPixCNuHb-sDUNjDMa6eRL9bmVGmOtOaKQ',
        price:100,
        type:'เมนูย่าง',
        id:'A3'
      },
      // เมนูต้ม
      {
        name:'ต้มไก่',
        imgUrl:'https://fastly.picsum.photos/id/705/200/200.jpg?hmac=2HZlwayMAMOyCllDpM-Mx3u2Xyk40VRHAzlpNLKyTC8',
        price:100,
        type:'เมนูต้ม',
        id:'A4'
      },
      // เมนูนึ่ง
      {
        name:'ปลานึ่งน้ำปลา',
        imgUrl:'https://fastly.picsum.photos/id/459/200/200.jpg?hmac=WxFjGfN8niULmp7dDQKtjraxfa4WFX-jcTtkMyH4I-Y',
        price:100,
        type:'เมนูนึ่ง',
        id:'A5'
      },


      // ของหวาน 
      {
        name:'บัวลอย',
        imgUrl:'https://fastly.picsum.photos/id/107/200/200.jpg?hmac=bWV6B7Av2dY7XMiQYnj-0VMJT_fmwttT1Fumzc4Ct7g',
        price:100,
        type:'ของหวาน',
        id:'B1'
      },
      // ขนม
      {
        name:'เลย์',
        imgUrl:'https://fastly.picsum.photos/id/141/200/200.jpg?hmac=cy5VCF6f8Mq7cum6d-R7m7mbrGC0wgUzI4UpSX_qkIk',
        price:100,
        type:'ขนม',
        id:'B2'
      },
      // ของทอด
      {
        name:'มันฝรั่งทอด',
        imgUrl:'https://fastly.picsum.photos/id/178/200/200.jpg?hmac=GK9f8ye2NPD_TryXyT9usVR7k8DqVVnm5JSxzwvBWvk',
        price:100,
        type:'ของทอด',
        id:'B3'
      },


      // น้ำดื่ม 
      {
        name:'น้ำเปล่า',
        imgUrl:'https://fastly.picsum.photos/id/480/200/200.jpg?hmac=q_kzh_8Ih85_5t_jN3rcD3npeNBLA41oDGtQZVkmmYs',
        price:100,
        type:'น้ำดื่ม',
        id:'C1'
      },
      // กาแฟ
      {
        name:'อเมริคาโน่',
        imgUrl:'https://fastly.picsum.photos/id/270/200/200.jpg?hmac=kiH2fdp_jvcCUePVPVJYOa7dhBGLGZOERqNnP0tMFhk',
        price:100,
        type:'กาแฟ',
        id:'C2'
      },
      // น้ำอัดลม
      {
        name:'โค๊ก',
        imgUrl:'https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY',
        price:100,
        type:'น้ำอัดลม',
        id:'C3'
      },
      // แอลกอฮอล์
      {
        name:'เบียร์ช้าง',
        imgUrl:'https://fastly.picsum.photos/id/313/200/200.jpg?hmac=rh2PdOLFkEclUr6nN2KdavcsSZIHVkYnv9D0BtJjykA',
        price:100,
        type:'แอลกอฮอล์',
        id:'C4'
      }
    ]
  }),
  getters:{
    fillerMenu: (state) => (selectedType) => {
      return state.menulist.filter(menu => menu.type === selectedType)
    }
  }
  
})
