<script setup>
    import { reactive, onMounted } from 'vue';
    import {useProfileStore} from '@/stores/user/profile'
    const useProfile = useProfileStore();


    const profileEditData = reactive({
        userProfileURL:'',
        userEmail:'',
        userName: ''
    });


    onMounted(()=>{
        useProfile.loadUserProfile();

        profileEditData.userProfileURL =  useProfile.userProfile.userProfileURL
        profileEditData.userName = useProfile.userProfile.userName
        profileEditData.userEmail =  useProfile.userProfile.userEmail
    });

    const handleEditProfile = () =>{
        useProfile.updateProfile(profileEditData);
    }

    const handleSelectIMG = (event) =>{
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader()
            reader.onload = (e)=>{
                profileEditData.userProfileURL = e.target.result
            }
            reader.readAsDataURL(file);
        }
    }

</script>
<template>
    <Userlayout>
        <div class="w-8/12 shadow-xl border mx-auto my-4">
            <div class="w-full flex flex-col justify-center p-8">
                <h1 class="text-3xl font-bold">Profile</h1>
                <div class="w-full flex  flex-col justify-center items-center ">
                    <div class="avatar">
                        <div class="w-32 rounded-full">
                            <img :src="profileEditData.userProfileURL" />
                        </div>
                    </div>
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs my-4"
                        @change="handleSelectIMG" />
                </div>
                <div class="w-8/12 mx-auto">
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text text-xl font-bold">Email</span>
                        </div>
                        <input v-model="profileEditData.userEmail" type="text" placeholder="Type here"
                            class="input input-bordered w-full" />
                    </label>
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text text-xl font-bold">Name</span>
                        </div>
                        <input v-model="profileEditData.userName" type="text" placeholder="Type here"
                            class="input input-bordered w-full" />
                    </label>
                    <button class="btn btn-neutral mt-8 w-full" @click="handleEditProfile()">Edit Profile</button>
                </div>
            </div>
        </div>
    </Userlayout>
</template>