<template>
    <div class="grid grid-cols-2 w-full h-screen justify-center gap-4">
        <div class="flex flex-col w-full h-[50%]  items-center p-2">
            <div class="flex w-full justify-center items-center gap-4 my-5 px-5">
                <p>Lat</p>
                <InputNumber v-model="aLatitude" inputId="minmax-buttons" mode="decimal" showButtons :min="-90" :max="90" fluid />
                <p>Log</p>
                <InputNumber v-model="aLongitude" inputId="minmax-buttons" mode="decimal" showButtons :min="-180" :max="180" fluid />
            </div>
            <div class="flex justify-center items-center w-[90%] h-full rounded-lg bg-gray-200">
                <div class="w-[90%] h-full" id="map"></div>
            </div>
            <div class="mt-4">
                <Button @click="getWeatherApi(aLatitude, aLongitude)">CheckWeather</Button>
            </div>
            
        </div>
        <div class="flex flex-col w-full h-[50%] items-center p-2">
            <div class="flex w-full justify-center items-start">
                <p class="text-[55px] font-mono font-bold">Today's weather</p>
            </div>
            <div v-if="weatherData.weather" class="mt-4 text-center">
                <p>{{ weatherData.name }}</p>
                <p class="text-[50px] font-mono font-bold">{{ weatherData.weather[0].main }}</p>
                <p class="text-[45px] font-mono font-bold">{{ weatherData.weather[0].description }}</p>
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue';
    import axios from 'axios';
    
    const mapKey = ref('c91aa43bcf4a191d6959852b95478610');
    const weatherKey = ref('ffbd5d728f923afd94d97c6a50dbe854');
    const aLongitude = ref(100.636);
    const aLatitude = ref(13.779);
    const weatherData = ref([]);
    
    let map;

    onMounted(async () => {
        try {
            await loadScript(`https://api.longdo.com/map/?key=${mapKey.value}`);
            initMap();
        } catch (error) {
            console.error('Failed to load Longdo Map script:', error);
        }
    });

    watch([aLatitude, aLongitude], ([newLat, newLon]) => {
        if (map.location().lat !== newLat || map.location().lon !== newLon) {
            map.location({ lon: newLon, lat: newLat });
        }
    });

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    const getWeatherApi = async(lat,log) =>{
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${weatherKey.value}`);
            weatherData.value = res.data;
        } catch (error) {
            console.log(error)
        }
    }

    const initMap = () => {
        map = new window.longdo.Map({
            placeholder: document.getElementById('map'),
            zoom: 10,
            center: { lon: aLongitude.value, lat: aLatitude.value }
        });

        map.Search.language('th');
        map.Event.bind('drag', () => {
            const pos = map.location();
            aLatitude.value = pos.lat;
            aLongitude.value = pos.lon;
        });
    }

   
</script>