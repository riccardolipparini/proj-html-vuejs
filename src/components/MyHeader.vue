<template>
  <div id="containerheader">
    <div class="container">
      <Menu/>
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
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: "MyHeader",
  components: {
      Menu,
  },
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

</style>