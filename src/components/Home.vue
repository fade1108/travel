<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <icons :iconlist="iconList"></icons>
    <home-recommend :recommend="Recommend"></home-recommend>
    <home-weekend :weekendlist="weekendlist"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './component/Header.vue'
import HomeSwiper from './component/Swiper.vue'
import Icons from './component/Icons.vue'
import HomeRecommend from './component/Recommend.vue'
import HomeWeekend from './component/Weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      Recommend: [],
      weekendlist: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccessful)
    },
    getHomeInfoSuccessful (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.Recommend = data.recommendList
        this.weekendlist = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
