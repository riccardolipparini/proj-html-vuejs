<template>
  <div id="container">
    <div class="contain_results">
      <div class="title">
        <h1>PERFORMANCE NEWS</h1>
        <img src="../assets/img/divider-xx-red.png" alt="" />
      </div>
      <div class="results">
        
          <div class="news" v-for="info, i in news" :key="i">
            <img :src="require(`../assets/img/${info.image}`)" alt="" />
            <div class="news_space">
              <h1>{{info.title}}</h1>
              <p>{{info.text}}</p>
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
  data(){
    return{
      news:[
        {
          text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          title:"Train with free weights or your body weights?",
          image:"blog1-400x208.jpg"
        },
        {
          text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          title:"Nutritional advice that will keep you training",
          image:"blog6-600x600.jpg"
        },
        {
          text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          title:"Simple principles for your next workout",
          image:"blog4-400x289.jpg"
        },
        {
          text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          title:"To be number one, training like you're number two",
          image:"trainer1.jpg"
        },
        {
          text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          title:"Top 5 mistakes that every gym member makes",
          image:"trainer3.jpg"
        },
        {
          text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          title:"The myths of shedding body fat explored",
          image:"trainer4.jpg"
        },
      ]
    }
  }
};
</script>

<style scoped lang="scss">
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1500px;
  background-color: rgba(37, 41, 43, 255);

  .contain_results {
    width: 60%;
  }
  .title {
    text-align: center;
    img{
      margin-top: 40px;
      margin-bottom: 20px;
    }
    h1{
      color: white;
    }
  }
  .results {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
      .news {
        width: calc(90% / 3);
        margin-bottom: 30px;
        background-color: rgba(31, 33, 35, 255);
        .news_space{
          margin: 0 auto;
          width: 80%;
        }
        img {
          width: 100%;
        }
        h1 {
          color: white;
          margin-top: 10px;
          font-size: 20px;
        }
        p {
          color: rgba(128, 128, 129, 255);
          margin-top: 30px;
          margin-bottom: 30px;
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