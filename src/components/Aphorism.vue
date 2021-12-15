<template>
  <div id="container">
    <div class="brucelee">
      <p>”I fear not the man who has practiced 10,000 <br> kicks once, but I fear the man who has <br> practiced one kick 10,000 times.”</p>
      <h4>Bruce lee quote of the day</h4>

    </div>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Aphorism',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
#container{
  background-image: url("../assets/img/home-testimonial-bg.jpg");
  background-position: center;
  position: relative;
  height: 400px;
  width: 100%;
  .brucelee{
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
    p{
      color: white;
      font-size: 30px;
    }
    h4{
      color: white;
      margin-top: 40px;
    }
  }
}

</style>