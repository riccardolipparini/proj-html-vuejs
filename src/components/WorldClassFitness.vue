<template>
  <div class="section">
        <div class="centred">
           <h1>WORLD CLASS Fitness</h1>
           <img src="../assets/img/divider-xx-red.png" alt="">
           <p>At Avada Gym, everything we do from to to bottom is of the highest quality to ensure <br> we're equipped to help you reach your goals of a healthy and fit lifestyle.</p>
        </div>
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'WorldClassFitness',
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
    img{
        margin:20px 0;
    }
    
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