<template>
  <div class="wrapper">
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: {
          delay: 20000,
          disableOnInteraction: false
        }
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/fe/ca8ed7adc3ff9f02.jpg_750x200_49735140.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/fdff7e5abe30ec5f014b4d7464e0c3ef.jpg_750x200_d1d693c8.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/47/0cfdc871ac183702.jpg_750x200_f6896acd.jpg'
      }]
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
