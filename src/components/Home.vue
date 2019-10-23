<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons>
    </icons>
  </div>
</template>

<script>
import HomeHeader from './component/Header.vue'
import HomeSwiper from './component/Swiper.vue'
import Icons from './component/Icons.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Icons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
