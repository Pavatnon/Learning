import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
    state:()=>({
        userProfile : {
            profileURL: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
            name:'',
            email:''
        },
    }),
    actions:{
        loadProfile(){
            const loadUserPofile = localStorage.getItem('userProfile');

            if(loadUserPofile){
                this.userProfile = JSON.parse(loadUserPofile);
            }
        },
        updateProfile(profileData){
            this.userProfile = {
                profileURL:profileData.profileURL,
                name: profileData.name,
                email: profileData.email
            }
            localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
        }
    }
});