<template>
  <div>
    <div class="search">
      <input v-model="keyword"
             class="search-input"
             type="text"
             placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-content"
         ref="search" v-show="keyword">
      <ul>
        <li class="seatch-item border-bottom" v-for="(item,i) of list" :key="i" @click="hotCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="seatch-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscrool from 'better-scroll'
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timmer: null
    }
  },
  methods: {
    hotCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timmer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscrool(this.$refs.search)
  }
}
</script>

<style scoped>
.search{
  padding: 0 .1rem;
  height: .72rem;
  background-color: #00bcd4;
}
  .search-input{
    box-sizing: border-box;
    height: .62rem;
    line-height: .62rem;
    padding: 0 .1rem;
    width: 100%;
    text-align: center;
    border-radius: .06rem;
    color: #666;
  }
  input::placeholder{
    font-weight: bold;
  }
  .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    background: #eee;
  }
  .seatch-item{
    line-height: .62rem;
    padding-left: .2rem;
    background-color: #fff;
    color: black;
  }
</style>
