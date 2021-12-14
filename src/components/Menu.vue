<template>
  <nav>
    <div class="gym_logo">
      <img src="../assets/img/gym_logo_1x.png" alt="">
    </div>
    <ul>
      <li v-for="link, i in links" :key="i"><a :href="link.url">{{link.text}}</a></li>
    </ul>
  </nav>
</template>

<script>


export default {
  name: 'Menu',
  data(){
    return {
      links: [
        {
          text: "Home",
          url: "#",
          here: false
        },
        {
          text: "About us",
          url: "#",
          here: false
        },
        {
          text: "Facilities",
          url: "#",
          here: false
        },
        {
          text: "Membership",
          url: "#",
          here: false
        },
        {
          text: "Testimonials",
          url: "#",
          here: false
        },
        {
          text: "Blog",
          url: "#",
          here: false
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul{
  display: flex;
  li{
    list-style: none;
    margin: 0 20px;
    font-size: 20px;
    cursor: pointer;
    a{
      text-decoration: none;
      color: white;
      transition: 0.5s;
    }
  }
}
a:hover{
  font-size: 40px;
  color: rgba(238,96,89,255);
}
.active{
  color: rgba(238,96,89,255);
  font-size: 40px;
}

</style>