<script setup>
    const priceChart = {
        options: {
            chart: {
            id: 'vuechart-example'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
    }
    const catagoryChart = {
        chartOptions: { 
        },
        series:[30, 40, 45, 50, 49, 60, 70, 91]
    }
    
  
    
</script>
<template>
    <Adminlayout>
        <div class="text-3xl font-bold">
            <p>Dashboard</p>
        </div>
        <div class="w-full flex justify-center my-8">
            <div class="stats shadow w-11/12">
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-8 w-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="stat-title">Order</div>
                    <div class="stat-value">31K</div>
                </div>
    
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-8 w-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                            </path>
                        </svg>
                    </div>
                    <div class="stat-title">Products</div>
                    <div class="stat-value">4,200</div>
                </div>
    
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-8 w-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                            </path>
                        </svg>
                    </div>
                    <div class="stat-title">Users</div>
                    <div class="stat-value">1,200</div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <div class="flex flex-col justify-center items-center border shadow-xl">
                <p class="my-4 text-2xl font-bold">ยอดการขาย</p>
                <apexchart 
                    type="bar"
                    width="650"  
                    :options="priceChart.options" 
                    :series="priceChart.series">
                </apexchart>
            </div>
            <div class="flex flex-col justify-center items-center border shadow-xl">
                <p class="text-2xl font-bold my-4 h-full">ประเภทการขาย</p>
                <apexchart 
                    type="donut" 
                    width="500" 
                    :options="catagoryChart.chartOptions" 
                    :series="catagoryChart.series">
                </apexchart>
            </div>
        </div>
    </Adminlayout>
</template>