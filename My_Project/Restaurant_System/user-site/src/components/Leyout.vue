<script setup>
    import { useRoute, useRouter } from 'vue-router'
    import { onMounted } from 'vue';

    const router = useRouter()
    const route = useRoute()

    const menutype = [
        {
            type: 'รายการอาหารทั้งหมด'
        },
       
        {
            type: 'อาหารจานหลัก',
            subtype: ['อาหารจานเดี่ยว','เมนูทอด', 'เมนูย่าง', 'เมนูต้ม', 'เมนูนึ่ง']
        },
        {
            type: 'เมนูทานเล่น',
            subtype: ['ของหวาน', 'ขนม', 'ของทอด']
        },
        {
            type: 'เครื่องดื่ม',
            subtype: ['น้ำดื่ม' ,'กาแฟ', 'น้ำอัดลม', 'แอลกอฮอล์']
        }
    ]

    onMounted(()=>{
        router.push({query:{type:'รายการอาหารทั้งหมด'}})
    })

    const selectType = (type) =>{
        router.push({query:{type:type}})
    }

    
</script>
<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- nav bor -->
            <div class="flex flex-row items-center justify-between bg-base-200 p-4 h-12 lg:hidden">
                <!-- menuToggle -->
                <label for="my-drawer-2" class="drawer-button">
                    <IconList icontype="menu" color="black" size="25" />
                </label>
                <!-- logo -->
                <div class="text-2xl font-bold">
                    Restuarant
                </div>
                <!-- cartoption -->
                <div>
                    <button class="btn btn-ghost">
                        <IconList icontype="cart" color="black" size="25" />
                    </button>
                </div>
            </div>
            <!-- sidebar -->
            <div class="fixed top-0 right-0 hidden lg:block">
                <div class="flex w-full bg-base-200 px-8 items-center gap-4">
                    <button class="btn btn-ghost">
                        <IconList icontype="cart" color="black" size="25" />
                    </button>
                    <div class="text-2xl font-bold">
                        Restuarant
                    </div>
                </div>
            </div>
            <!-- maincontent -->
            <div class="p-10">
                <slot></slot>
            </div>


        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <!-- Sidebar content here -->
                <div class="text-2xl font-bold mx-auto my-4">
                    ประเภทอาหาร
                </div>
                <li v-for="menu in menutype" :key="menu.type">
                    <details v-if="menu.subtype" class="dropdown">
                        <summary class="text-xl">{{ menu.type }}</summary>
                        <ul class="bg-base-100 rounded-box w-64 p-2">
                            <li v-for="submenu in menu.subtype" :key="submenu">
                                <a @click="selectType(submenu)" class="text-lg" :class="route.query.type === submenu? 'active': ''">{{ submenu }}</a>
                            </li>
                        </ul>
                    </details>
                    <div v-if="!menu.subtype" class="text-xl" :class="route.query.type === menu.type ?'active': ''">
                        <summary @click="selectType('รายการอาหารทั้งหมด')" >{{ menu.type }}</summary>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>