<template>
  <div class="section">
        <div class="centred">
           <h1>WORLD CLASS Fitness</h1>
           <img src="../assets/img/divider-xx-red.png" alt="">
           <p>njbnvvdfsjhdvfbhdvfbhdvfbhdvfbhjdvfbhjdvfbhjdvfbhjdvfbhj</p>
        </div>
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'WorldClassFitness',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
 .centred {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    text-align: center;
    width: 80%;
    
}
.section{
    position: relative;
    background-color: rgba(37,41,43,255);
    height: 350px;
    width: 100%;
    h1{
        color: white;
        font-size: 40px;
    }
    p{
        color: rgba(72,75,76,255);
    }
}

</style>