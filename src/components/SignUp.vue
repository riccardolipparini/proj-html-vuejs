<template>
  <div id="container">
    <div class="contain_form">
        <img src="../assets/img/home_img-compressor-400x222.jpg" alt="">
    </div>
    <div class="contain_form">
        <h1>SIGN UP FOR A FREE TRAINING SESSION!</h1>
        <p>Name</p>
        <input type="text">
        <p>Email</p>
        <input type="text">
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'SignUp',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
#container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(31,33,35,255);
    height: 400px;
    .contain_form{
        width: 30%;
        height: 200px;
        margin: 0 10px;
        h1, p{
            color: white;
        }
    }
}
 

</style>