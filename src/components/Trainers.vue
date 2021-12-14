<template>
  <div id="container">
    <div class="contain_results">
      <div class="title">
        <h1>real world results</h1>
        <img src="../assets/img/divider-xx-red.png" alt="" />
      </div>
      <div class="results">
        <div class="trainers_cards">
          <img src="../assets/img/trainer1-400x297.jpg" alt="" />
          <div class="trainers_description">
            <h1>nome</h1>
            <h2>ruolo</h2>
            <p>descrizione bla bla bla bla bla bla bla</p>

            <div class="trainers_social">
              <div class="social">
               <font-awesome-icon :icon="['fab', 'facebook']" />
              </div>
              <div class="social"></div>
              <div class="social"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <a href="">VIEW ALL TRAINERS</a>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "Trainers",
  components: {},
};
</script>

<style scoped lang="scss">
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(31, 33, 35, 255);

  .contain_results {
    width: 60%;
  }
  .title {
    text-align: center;
  }
  .results {
    display: flex;
    justify-content: space-between;
  }
  .trainers_cards {
    width: calc(95% / 3);
    height: 500px;
    background-color: rgba(37, 41, 43, 255);
    img {
      max-width: 100%;
    }
    .trainers_description {
      margin: 0 auto;
      width: 80%;
      h1,
      h2 {
        color: white;
        margin-top: 10px;
      }
      p {
        color: rgba(128, 128, 129, 255);
        margin-top: 20px;
      }
    }
    .trainers_social {
      display: flex;
      justify-content: flex-start;
      .social {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: rgba(31, 33, 35, 255);
        margin-top: 20px;
        margin-right: 10px;
      }
    }
  }
  .buttons {
    padding: 10px;
    border: solid rgba(174, 175, 174, 255) 1px;
    width: 180px;
    margin: 0 auto;
    margin-top: 40px;
    cursor: pointer;
    text-align: center;
    a {
      text-decoration: none;
      color: rgba(174, 175, 174, 255);
    }
  }
}
</style>