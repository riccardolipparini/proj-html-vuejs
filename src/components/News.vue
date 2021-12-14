<template>
  <div id="container">
    <div class="contain_results">
      <div class="title">
        <h1>real world results</h1>
        <img src="../assets/img/divider-xx-red.png" alt="" />
      </div>
      <div class="results">
        <div class="contain_news">
          <div class="news">
            <img src="../assets/img/blog1-400x208.jpg" alt="" />
            <div class="news_space">
              <h1>Train with you free weights or other thing?</h1>
              <p>bla bla bla bla bla bla bla bla bla bla bla bla</p>
            </div>
          </div>
        </div>

        <div class="contain_news">
          <div class="news">
            <img src="../assets/img/blog1-400x208.jpg" alt="" />
            <div class="news_space">
              <h1>Train with you free weights or other thing?</h1>
              <p>bla bla bla bla bla bla bla bla bla bla bla bla</p>
            </div>
          </div>
        </div>

        <div class="contain_news">
          <div class="news">
            <img src="../assets/img/blog1-400x208.jpg" alt="" />
            <div class="news_space">
              <h1>Train with you free weights or other thing?</h1>
              <p>bla bla bla bla bla bla bla bla bla bla bla bla</p>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <a href="">READ ALL ARTICLES</a>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "News",
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
  .results {
    display: flex;
    justify-content: space-between;
    .contain_news {
      width: calc(90% / 3);
      margin: 20px 20px;
      .news {
        margin-bottom: 50px;
        background-color: rgba(31, 33, 35, 255);
        .news_space{
          margin: 0 auto;
          width: 80%;
        }
        img {
          max-width: 100%;
        }
        h1 {
          color: white;
          margin-top: 10px;
        }
        p {
          color: rgba(128, 128, 129, 255);
          margin-top: 30px;
        }
      }
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
</style>