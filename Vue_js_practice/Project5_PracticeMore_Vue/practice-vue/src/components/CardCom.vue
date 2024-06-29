<template>
    <div class="card">
        <img :src="coverimage" :alt="name" style="width:100%; border-radius: 15px;">
        <div class="container">
            <h4><b>{{name}}</b></h4> 
            <p>{{ detail }}</p> 
        </div>
    </div>

</template>

<script>
  export default {
    props: ['id' ,'name','detail', 'coverimage']
  }
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>