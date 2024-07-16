import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
  state: ()=>({
    emproyeeList: []
  }),
  actions:  {
    regisEmploye(emVal){
      this.emproyeeList.push(emVal);
    },
    deleteEmployee(index){
      this.emproyeeList.splice(index,1);
    }
    
  }

});
