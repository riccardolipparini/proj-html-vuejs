<template>
  <div id="container">
    <div class="contain_form">
        <img src="../assets/img/home_img-compressor-400x222.jpg" alt="">
    </div>
    <div class="contain_form">
        <h4>SIGN UP FOR A FREE TRAINING SESSION!</h4>
        <p>Name</p>
        <input type="text" class="input_sign">
        <p>Email</p>
        <input type="text" class="input_sign">
        <div class="buttons">
          <a href="">START NOW!</a>
        </div>
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
        h4{
            color: white;
            
        }
        p{
          color: rgba(115,115,116,255);
          margin-top: 20px;
        }
    }
}
.input_sign{
    opacity: 0.1;
    border: solid 0.5px white;
    margin-top: 10px;
    width: 300px;
    height: 30px;
}
.buttons {
      padding: 10px;
      border: solid rgba(174, 175, 174, 255) 1px;
      width: 300px;
      margin: 20px 0;
      cursor: pointer;
      text-align: center;
      background-color: rgba(238,96,89,255);
      a {
        text-decoration: none;
        color: white;
      }
    }
 

</style>