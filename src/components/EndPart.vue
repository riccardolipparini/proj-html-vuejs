<template>
  <div id="container">
    <div class="contain_footer">
      <div class="info_copyright">
        <p>&#169; Copyright 2012- 2020 |</p>
        <p>Avada Theme by Theme Fusion |</p>
        <p>All right reserved |</p>
        <p>Powered by WordPress</p>
      </div>

      <div class="contain_social">
        <div class="social">
          <font-awesome-icon class="icons_social" :icon="['fab', 'facebook']" />
        </div>
        <div class="social">
          <font-awesome-icon class="icons_social" :icon="['fab', 'instagram']" />
        </div>
        <div class="social">
          <font-awesome-icon class="icons_social" :icon="['fab', 'twitter']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "EndPart",
  components: {},
};
</script>

<style scoped lang="scss">
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: rgba(26, 28, 30, 255);
  .contain_footer {
    width: 60%;
    display: flex;
    justify-content: space-between;
    .contain_social {
      display: flex;
      .social {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: rgba(238,96,89,255);
        margin-top: 20px;
        margin-right: 10px;
      }
    }
    .info_copyright {
      padding-right: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        color: rgba(121, 122, 122, 255);
        padding-right: 10px;
        font-size: 12px;
      }
    }
  }
}
.icons_social{
  color: white;
  font-size: 20px;
}
</style>