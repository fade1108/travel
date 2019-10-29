<template>
  <div>
    <router-link tag="div" to="/" class="header-abs"
    v-show="showAbs">
      <div class="iconfont back-icon">&#xe618;</div>
    </router-link>
    <div :style="opacityStyle"
      class="header-fixed" v-show="!showAbs">
      <router-link tag="div" to="/">
        <div class="iconfont fixed-back-icon">&#xe618;</div>
        景点详情
      </router-link>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  .header-abs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    border-radius: .4rem;
    background-color: rgba(0,0,0,.8);
  }
  .back-icon{
    color:#fff;
    font-size: .4rem;
  }
  .header-fixed{
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #fff;
    background-color: #00bcd4;
    font-size: .32rem;
  }
  .fixed-back-icon{
    position: absolute;
    top: 0;
    left: 0;
    width: .64rem;
  }
</style>
