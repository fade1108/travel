<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons>
    </icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './component/Header.vue'
import HomeSwiper from './component/Swiper.vue'
import Icons from './component/Icons.vue'
import HomeRecommend from './component/Recommend.vue'
import HomeWeekend from './component/Weekend.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
