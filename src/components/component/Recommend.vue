<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont">&#xe757;</span>
      <span class="title-decs">猜你喜欢</span>
    </div>
    <ul class="recommend-content">
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-critical">{{item.critical}}</p>
          <p class="item-price"></p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: 'HomeRecommend',
data () {
 return {
   recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1703/3a/3a4a9641a8867671a3.img.png_200x200_9a235bb9.png',
        title: '西安城墙',
        critical: '触摸历史痕迹， 感受历史沧桑'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_200x200_f5476a84.jpg',
        title: '华清宫',
        critical: '探寻杨贵妃御汤遗址'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
        title: '长恨歌',
        critical: '小伙伴们都收藏了，去看看吧'
      }, {id: '0004',imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/11/dd368e9b8629027693835fbb.jpg_200x200_8e79864a.jpg',
        title: '西安唐乐宫',
        critical: '一流的装修，品质的享受'
   }]
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
  .iconfont{
    color: red;
  }
  .title-decs{
    display: inline-block;
    margin-left: .08rem;
    font-size: .32rem;
    line-height: .8rem;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 2.16rem;
  }
  .item-img{
    width: 2rem;
    height: 2rem;
    padding: .1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
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
  .item-button{
    background-color: #ff9300;
    padding: 0 .2rem;
    border-radius: .06rem;
    margin-top: .2rem;
    line-height: .44rem;
    margin-top: .16rem;
  }

</style>
