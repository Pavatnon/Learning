<script setup>
    import { useProfileStore } from '@/stores/profile';

    import {reactive, onMounted} from 'vue';

    const profileStore = useProfileStore();

    onMounted(()=>{
        profileStore.loadProfile()

        editUserProfile.profileURL = profileStore.userProfile.profileURL
        editUserProfile.name = profileStore.userProfile.name
        editUserProfile.email = profileStore.userProfile.email
    })

    const editUserProfile = reactive({
        profileURL: profileStore.userProfile.profileURL,
        name: profileStore.userProfile.name,
        email: profileStore.userProfile.email
    })


    const editProfile = ()=>{
        const profileData = {
            profileURL: editUserProfile.profileURL,
            name: editUserProfile.name,
            email: editUserProfile.email
        }
        profileStore.updateProfile(profileData);
    }
    const handleFileUpload = (event) =>{
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader()
            reader.onload = (e) => {
                editUserProfile.profileURL = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }


</script>
<template>
    <UserLayout>
        <div class="container mx-auto w-6/12 border">
            <div class="card shadow-xl flex flex-col w-full p-4">
                <div class="avatar mx-auto">
                    <div class="w-64 rounded-full">
                        <img :src="editUserProfile.profileURL" />
                    </div>
                </div>
                <div class="flex w-full flex-row justify-center gap-4 items-center my-4">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="handleFileUpload"/>
                </div>
                <h1 class="text-xl font-bold">Email:</h1>
                <input v-model="editUserProfile.name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                <h1 class="text-xl font-bold">Name:</h1>
                <input v-model="editUserProfile.email" type="text" placeholder="Type here" class="input input-bordered w-full" />
                <button class="btn btn-neutral w-full mt-8" @click="editProfile()">Edit Profile</button>
            </div>
        </div>
    </UserLayout>
</template>