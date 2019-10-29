<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe757;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary :imgs="bannerImgs" v-show="showGallary"
    @close="handleGallaryclose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryclose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style scoped>
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    color: #fff;
  }
  .banner-img{
    width: 100%;
  }
  .banner-info{
    display: flex;
    position: absolute;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    line-height: .6rem;
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8));
  }
  .banner-title{
    color: #ffffff;
    flex:1;
    font-size: .32rem;
    padding:0 .2rem;
  }
  .banner-number{
    margin-top: .14rem;
    padding: 0 .4rem;
    height: .32rem;
    line-height: .4rem;
    border-radius: .2rem;
    background: rgba(0 ,0 ,0 ,.8);
    font-size: .24rem;
  }
  .banner-icon{
    font-size: .24rem;
    margin-right: .3rem;
  }
</style>
