<template>
 <div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(items,i) of pages" :key="i">
      <div class="icon" v-for="item of items" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
 </div>
</template>

<script>
import Swiper from '../../../node_modules/vue-awesome-swiper/src/swiper.vue'
import SwiperSlide from '../../../node_modules/vue-awesome-swiper/src/slide.vue'

export default {
  components: {
    SwiperSlide,
    Swiper
  },
  name: 'HomeIcons',
  props: {
    iconlist: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (pages[page] === undefined) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
 .icons >>> .swiper-container{
    height: 0;
    padding-bottom: 50%;
  }
 .icons {
  padding-top: .2rem;
 }
  .icon{
    height: 0;
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;
  }
  .icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: .1rem;
    bottom: .44rem;
  }
  .icon-img-content{
    display: block;
    margin: 0 auto;
    height: 100%;
  }
  .icon-desc{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .44rem;
    height: .44rem;
    color: #333;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
