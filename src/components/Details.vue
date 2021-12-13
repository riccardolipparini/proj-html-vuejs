<template>
  <div id="container">
      
    <div class="details">
        <div class="icons"></div>
        <h1>strenght</h1>
        <img src="../assets/img/divider-x-red.png" alt="">
        <p>cbcbcbcbcbcbcbcbcbc jdjdjdjdjd djdjdjdjd djdjdjdj djdjdj djdjd </p>
    </div>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Details',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
#container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 100%;
    background-image: url("../assets/img/gym_bkgd_bw-compressor.jpg");
    background-repeat: no-repeat;
    background-position: center;
    .details{
        height: 200px;
        width: calc(60% / 4);
        text-align: center;
    }
    .icons{
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: solid 1px red;
        margin: 0 auto;
    }
    
    
}
 

</style>