<template>
  <div id="container">
    <div class="contain_footer">
      <div class="info_footer">
        <h4>COME FIND US</h4>
        <p>blblblb</p>
        <p>blblblb</p>
        <p>blblbl</p>
        <p>nvnvnvnv</p>
      </div>

      <div class="info_footer">
        <h4>COME FIND US</h4>
        <p>blblblb</p>
        <p>blblblb</p>
        <p>blblbl</p>
        <p>nvnvnvnv</p>
      </div>

      <div class="info_footer">
        <h4>COME FIND US</h4>
        <p>blblblb</p>
        <p>blblblb</p>
        <p>blblbl</p>
        <p>nvnvnvnv</p>
      </div>

      <div class="info_footer">
        <img src="../assets/img/gym_ad-compressor.jpg" alt="">
      </div>
      
    </div>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'MyFooter',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: rgba(31,33,35,255);
  .contain_footer {
    width: 60%;
    display: flex;
    .info_footer{
      padding-right:50px;
    }
    h4{
      color: rgba(50,55,58,255);
      margin-bottom: 30px;
    }
    p{
      color: rgba(121,122,122,255);
    }
  }
}
</style>