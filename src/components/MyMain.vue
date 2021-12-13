<template>
  <div id="container">
    <div class="containerinside">
      <div class="contain_results">
        <div class="title">
          <h1>real world results</h1>
          <img src="../assets/img/divider-white-xx.png" alt="" />
        </div>
        <div class="results">
          <div class="results_cards">
            <div class="results_imgtext">
              <img src="../assets/img/review_1-compressor.jpg" alt="" />
            </div>
            <div class="results_imgtext">
              <p>blabalabalabal ablabalabla balabalb abalaba bakab</p>
              <h1>Firma</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "MyMain",
  components: {},
};
</script>

<style scoped lang="scss">
.containerinside {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(37, 41, 43, 255);
  //debug
  border-bottom: white solid 2px;
  .contain_results {
    width: 60%;
  }
  .title {
    text-align: center;
  }
  .results {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .results_cards {
      width: calc(92% / 2);
      height: 200px;
      background-color: rgba(31, 33, 35, 255);
      margin: 50px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .results_imgtext {
        margin: 0 20px;
      }
    }
  }

  
}

</style>