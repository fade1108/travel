<template>
 <div class="icons">
  <swiper>
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

export default {components: {
  SwiperSlide,
  Swiper},
name: 'HomeIcons',
data () {
  return {
    iconList: [{
      id: '001',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      desc: '景点门票'
    }, {
      id: '002',
      imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
      desc: '一日行'
    }, {
      id: '003',
      imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/437aad2dd0c1edb38fee0c51f8f9dd02.png',
      desc: '热门演出'
    }, {
      id: '004',
      imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/d0d101c23a73467de740ecf68602cd17.png',
      desc: '壶口瀑布'
    }, {
      id: '005',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      desc: '一日游'
    }, {
      id: '006',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
      desc: '动植物园'
    }, {
      id: '007',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
      desc: '华清宫'
    }, {
      id: '008',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
      desc: '兵马俑'
    }, {
      id: '009',
      imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/9c76635f623759e3db287c4850fcb0a5.png',
      desc: '华山'
    }, {
      id: '010',
      imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
      desc: '博物馆'
    }]
  }
},
computed: {
  pages () {
    const pages = []
    this.iconList.forEach((item, index) => {
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
