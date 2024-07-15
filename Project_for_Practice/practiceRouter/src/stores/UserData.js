
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
  state: () =>({
    fristName: '',
    lastName: ''
  }),
  actions: {
    changeUserData(fromData){
      this.fristName = fromData.fristName;
      this.lastName = fromData.lastName;
    }
  }
});
