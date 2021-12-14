<template>
  <div id="container">
    <div class="joinus">
      <div class="joinus_text">
        <h1>Achieve your fitness goal</h1>
        <p>Flexible bla bla bla, bla bla bla, bla bla. Bla bla blblblb, vava</p>
      </div>

      <div class="buttons">
        <a href="">JOIN US</a>
      </div>
    </div>

    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "JoinUs",
  components: {},
};
</script>

<style scoped lang="scss">
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  background-image: url("../assets/img/home-parallax.jpg");
  background-position: center;
  .joinus {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
      color: white;
    }
    p{
      color: white;
    }
  }
  .buttons {
    padding: 10px;
    border: solid white 1px;
    width: 180px;
    margin: 0 auto;
    margin-top: 40px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 50px;
    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>