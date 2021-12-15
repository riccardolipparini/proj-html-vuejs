<template>
  <div id="container">
    
      <div class="contain_results">
        <div class="title">
          <h1>Real world results</h1>
          <img src="../assets/img/divider-xx-red.png" alt="" />
        </div>
        <div class="results">
          <div class="results_cards" v-for="exClients, i in results" :key="i">
            <div class="results_imgtext">
              <img :src="require(`../assets/img/${exClients.image}`)" alt="" />
            </div>
            <div class="results_imgtext">
              <p><em>"{{exClients.quote}}"</em></p>
              <h4>- {{exClients.sign}}</h4>
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
  data(){
    return{
      results:[
        {
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          sign:"Tara Smith",
          image:"review_1-compressor.jpg"
        },
        {
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          sign:"Paolo Smith",
          image:"review_2-compressor.jpg"
        },
        {
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          sign:"Lucia Smith",
          image:"review_3-compressor-2.jpg"
        },
        {
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          sign:"Franco Smith",
          image:"review_4-compressor-2.jpg"
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
  height: 100vh;
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
    .results_cards {
      width: calc(92% / 2);
      height: 200px;
      background-color: rgba(31, 33, 35, 255);
      margin: 50px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      p{
        color: rgba(92,92,94,255);
      }
      h4{
        color: rgba(164,164,164,255);
      }
      .results_imgtext {
        margin: 0 20px;
      }
    }
  }

  
}

</style>