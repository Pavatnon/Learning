import { defineStore } from "pinia";

export const useAdminUserStroe = defineStore('admin-user', {
    state: ()=>({
        list:[
            {
                name: 'Non',
                role:'admin',
                status:'active',
                updateat: (new Date).toLocaleDateString()
            },
        ]
    }),
    actions:{
        getUser(index){
            return this.list[index];
        },
        updateUser(index, userData) {
            const fileds = ['name','role','status']
            
            for(let filed of fileds){
                this.list[index][filed] = userData[filed]
            }
            this.list[index].updateat = (new Date).toLocaleDateString()
        },
        removeUser(index){
            this.list.splice(index, 1)
        }
    }
    
})