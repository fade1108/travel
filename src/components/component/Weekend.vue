<template>
  <div>
    <div class="recommend-title">
      <span class="title-decs">周末去哪</span>
    </div>
    <ul class="recommend-content">
      <li class="item border-bottom" v-for="item of weekendlist" :key="item.id">
        <div class="item-img-wepper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-critical">{{item.desc}}</p>
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
    }
  },
  props: {
    weekendlist: Array
  }
}
</script>

<style scoped>
  .recommend-title{
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
    padding-bottom: 37.09%;
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
