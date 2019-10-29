<template>
  <div>
   <detail-banner :sightName="sightName"
   :bannerImg="bannerImg"
   :bannerImgs="gallaryImgs"></detail-banner>
   <header-fade></header-fade>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import HeaderFade from './components/Header.vue'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    HeaderFade,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=' + this.$route.params.id).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped>
  .content{
    height: 30rem;
  }
</style>
