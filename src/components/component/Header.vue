<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe618;</div>
    </div>
    <div class="header-input"> <div class="iconfont mid-icon" >&#xe62e;</div>输入城市景点游玩主题</div>
    <router-link to="/city">
    <div class="header-right">
      北京
      <span class="iconfont arrow-icon">&#xe65a;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    city: String
  }
}
</script>

<style scoped>
  .header{
    background-color :red;
    display: flex;
    line-height: .86rem;
    color: #fff
  }
  .header-left{
    width : .64rem;
    float:left
  }
  .back-icon{
    text-align: center;
    font-size: .4rem;
  }
  .header-input{
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc
  }
  .header-right{
      width : 1.24rem;
      float: right;
      text-align: center;
    color: #ffffff;
    }
  .arrow-icon{
    margin-left: -.04rem;
    font-size: .24rem;
  }
  .mid-icon{
    display: inline-block;
    padding-right: .2rem
  }
</style>
