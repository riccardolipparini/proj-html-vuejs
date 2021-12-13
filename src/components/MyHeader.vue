<template>
  <div id="containerheader">
    <div class="container">
      <!-- menu -->
      <div class="centred">
        <h1>NO PAIN NO GAIN</h1>
        <p>
          Motivation is whats gets you started. Habit is what keeps you going
        </p>
        <div class="buttons">
          <a href="">JOIN US TODAY</a>
        </div>
      </div>
    </div>
    <div class="section">
        <div class="centred">
           <h1>WORLD CLASS Fitness</h1>
           <img src="../assets/img/divider-xx-red.png" alt="">
           <p>njbnvvdfsjhdvfbhdvfbhdvfbhdvfbhjdvfbhjdvfbhjdvfbhjdvfbhj</p>
        </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "MyHeader",
  components: {},
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 100vh;
  background-image: url("../assets/img/home-banner.jpg");
  background-position: center;
  background-repeat: no-repeat;
    h1 {
      color: white;
      font-size: 100px;
      padding: 0px;
    }
    p {
      color: rgba(254, 254, 254, 255);
      margin-top: 20px;
    }
    .buttons {
      padding: 20px;
      border: solid rgba(174, 175, 174, 255) 1px;
      width: 150px;
      margin: 0 auto;
      margin-top: 40px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: rgba(174, 175, 174, 255);
      }
    }
}
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