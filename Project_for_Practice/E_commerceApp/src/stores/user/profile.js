import {defineStore} from 'pinia';

export const useProfileStore = defineStore('profile', {
    state:()=>({
        userProfile: {
            userProfileURL:'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
            userEmail:'',
            userName: ''
        }
    }),
    actions:{
        loadUserProfile(){
            const profile = localStorage.getItem('user-profile-data')

            if (profile) {
                this.userProfile = JSON.parse(profile);
            }
        },
        updateProfile(profileData){
            localStorage.setItem('user-profile-data', JSON.stringify(profileData));
        }
    }
})