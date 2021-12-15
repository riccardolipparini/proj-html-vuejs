<template>
  <div id="container">
      
    <div class="details" v-for="detail, i in details" :key="i">
        <div class="icons">
          <font-awesome-icon class="font_icon" :icon="['fas', detail.icon ]" />
        </div>
        <h1>{{detail.title}}</h1>
        <img src="../assets/img/divider-x-red.png" alt="">
        <p>{{detail.text}}</p>
    </div>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Details',
  data(){
    return {
      details: [
        {
          title: "Strenght & Conditioning",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.babababab baa  abab babbbbbbbb ababa baba ba aba abbba abba bab abbabab",
          icon:"unlink"
        },
        {
          title: "Fitness & Cardio",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.babababab baa  abab babbbbbbbb ababa baba ba aba abbba abba bab abbabab",
          icon:"cloud"
        },
        {
          title: "Flexibility & Rest",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.babababab baa  abab babbbbbbbb ababa baba ba aba abbba abba bab abbabab",
          icon:"bicycle"
        },
        {
          title: "Heath & Diet",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.babababab baa  abab babbbbbbbb ababa baba ba aba abbba abba bab abbabab",
          icon:"cloud"
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#container{
    display: flex;
    justify-content: center;
    height: 500px;
    width: 100%;
    background-image: url("../assets/img/gym_bkgd_bw-compressor.jpg");
    background-repeat: no-repeat;
    background-position: center;
    .details{
        height: 200px;
        width: calc(60% / 4);
        text-align: center;
        margin: 0 20px;
        margin-top: 100px;
        img{
          margin-top: 20px;
        }
        h1{
          color: white;
          font-size: 20px;
          margin-top: 20px;
        }
        p{
          color: rgba(129,129,129,255);
          margin-top: 20px;
        }
    }
    .icons{
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: solid 1px rgba(207,93,89,255);
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .font_icon{
          color: rgba(207,93,89,255);
          font-size: 35px;
        }
    }
    
    
}
 

</style>