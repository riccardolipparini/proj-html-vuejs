<template>
  <div id="app">
    <MyHeader/>
    <WorldClassFitness/>
    <SignUp/>
    <Details/>
    <MyMain/>
    <Performance/>
    <Aphorism/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue'
import MyFooter from './components/MyFooter.vue'
import WorldClassFitness from './components/WorldClassFitness.vue'
import SignUp from './components/SignUp.vue'
import Details from './components/Details.vue'
import Performance from './components/Performance.vue'
import Aphorism from './components/Aphorism.vue'


export default {
  name: 'App',
  components: {
    MyHeader,
    WorldClassFitness,
    SignUp,
    Details,
    MyMain,
    Performance,
    Aphorism,
    MyFooter,
    
  }
}
</script>

<style lang="scss">


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  
  
}
</style>
