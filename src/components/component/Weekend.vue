<template>
  <div>
    <div class="recommend-title">
      <span class="title-decs">周末去哪</span>
    </div>
    <ul class="recommend-content">
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wepper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-critical">{{item.critical}}</p>
          <p class="item-price"></p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
        title: '西安必打卡',
        critical: '寻长安梦，开启穿越的圆梦之旅'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg',
        title: '探寻文化古都',
        critical: '一场时空穿越的旅行，探寻历史悠久的文化古都！寻觅历史留下的点点足迹，细细品味古人的伟大'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg',
        title: '西安演出在线',
        critical: '这里有绚丽奇幻的神秘梦幻舞剧，歌舞揭开盛唐面纱，体验穿越时空的奇妙，感受大唐之盛世'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/fe/679926851c309a.jpg_r_640x214_114816de.jpg',
        title: '西安亲子必玩',
        critical: '西安亲子必去景点，和家人一起度过欢乐亲子时光，带你嗨翻假期！'}]
    }
  }
}
</script>

<style scoped>
  .recommend-title{
    margin-top: .2rem;
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
  }
  .title-decs{
    display: inline-block;
    margin-left: .08rem;
    font-size: .32rem;
    line-height: .8rem;
  }
  .item-img-wepper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
  }
  .item-img{
    width: 100%;
  }
  .item-title{
    margin-top: .26rem;
    line-height: .54rem;
    font-size: .32rem;
  }
  .item-critical{
    line-height: .54rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

</style>
