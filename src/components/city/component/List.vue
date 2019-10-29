<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper" v-for="item of hot"
               :key="item.id" @click="hotCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,i) of cities" :key="i" :ref="i">
        <div class="title border-topbottom">{{i}}</div>
        <div class="item-list">
          <div class="item border-bottom"
          v-for="inneritem of item" :key="inneritem.id"
               @click="hotCityClick(inneritem.name)">
            {{inneritem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'ListContent',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    hotCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style scoped>
  .border-topbottom:before{
    border-color: #ccc;
  }
  .border-topbottom:after{
    border-color: #ccc;
  }
  .border-bottom:before{
    border-color: #ccc;
  }
  .title{
    line-height: .54rem;
    background: #eee;
    padding-left: .26rem;
    color: #666;
  }
  .button-list{
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;

  }
  .button-wraper{
    float: left;
    width: 33.33%;
  }
  .button{
    margin: .1rem;
    text-align: center;
    border: .02rem solid #ccc;
    padding: .1rem 0;
    border-radius: .06rem;
  }
  .item-list{

  }
  .item{
    line-height: .76rem;
    padding-left: .2rem;
  }
  .list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
  }
</style>
