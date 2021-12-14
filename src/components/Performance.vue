<template>
  <div id="container">
    <div class="contain_results">
      <div class="title">
        <h1>real world results</h1>
        <img src="../assets/img/divider-xx-red.png" alt="" />
      </div>
    <div id="flex_performance">
      <div class="performance_image">
          <img src="../assets/img/home-image1.jpg" alt="">
      </div>
    </div> 
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "Performance",
  components: {},
};
</script>

<style scoped lang="scss">
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(37, 41, 43, 255);
  .contain_results {
    width: 60%;
  }
  .title {
    text-align: center;
  }
}
#flex_performance{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.performance_image{
    width: calc(90% / 3);
    margin: 20px 1px;
    img{
        max-width: 100%;
    }
}
</style>