<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont">&#xe757;</span>
      <span class="title-decs">猜你喜欢</span>
    </div>
    <ul class="recommend-content">
      <li class="item border-bottom" v-for="item of recommend" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-critical">{{item.desc}}</p>
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
    return {}
  },
  props: {
    recommend: Array
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
