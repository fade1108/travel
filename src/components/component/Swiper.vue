<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped>
.wrapper >>> .swiper-pagination-bullet{
  /*这里放你底下进度条的样式*/
  width: .6rem !important;
  height: .04rem !important;
  background-color: #f6ff95 !important;
  border-radius: 0%;
}
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  background-color: #eaeaea;
  padding-bottom: 26.5%;/*这个是轮播图的高度 杨晓这个是防止3g、4g模式下，页面抖动写的样式*/
}
.swiper-img{
  width: 100%;
}
</style>
