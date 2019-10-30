<template>
  <el-row :gutter="10" class="header-row">
    <el-col :lg="8" :xl="8" class="header-firstcol">
      <div class="left-one">NikePlus</div>
      <div class="left-two"><span class="iconfont">&#xe617;</span></div>
      <div class="left-three">converse</div>
    </el-col>
    <el-col :lg="8" :xl="8">
      <div></div>
    </el-col>
    <el-col :lg="8" :xl="8" class="header-thredcol">
      <div class="right-one"><span>加入/登录Nike⁠Plus账号</span></div>
      <div class="right-two" @mouseover="helpchange" @mouseout="helpchangetwo">
        <span>帮助</span>
        <div v-show="helphidden" class="header-help"></div>
      </div>
      <div class="right-threr">帮助</div>
      <div class="right-four">中国大陆</div>
      <div class="right-five">号</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      helphidden: false
    }
  },
  methods: {
    helpchange () {
      this.helphidden = true
    },
    helpchangetwo () {
      this.helphidden = false
    }
  }
}
</script>

<style scoped>
  .header-row{
    border-top: 1px solid #333;
    border-bottom: 1px solid #cacaca;
    height: 40px;
  }
  .header-firstcol{
    display: flex;
  }
  .left-one{
    width: 47.359px;
    height: 24px;
    padding: 8px 28px;
    color: #8d8d8d;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    line-height: 24px;
    border-right: 0.99px solid #cacaca;
  }
  .left-two{
    width: 15.953px;
    height: 24px;
    padding: 8px 28px;
    border-right: 0.99px solid #cacaca;
    color: #8d8d8d;
    text-align: center;
    line-height: 24px;
  }
  .left-three{
    width: 77.141px;
    padding: 8px 28px;
    border-right: 0.99px solid #cacaca;
    color: #8d8d8d;
    text-align: center;
    line-height: 24px;
    font-weight: 900;
    font-size: 12px;
  }
  .right-one{
    width: 146.688px;
  }
  .right-two{
    width: 56px;
    position: relative;
  }
  .right-two>span{
    display: inline-block;
    width: 24px;
    height: 24px;
    padding: 7px 16px;
    line-height: 24px;
    text-align: center;
    white-space: nowrap;
  }
  .right-two:hover{
    transition: all .2s ease;
    border-bottom: solid 2px #000;
    font-weight: 600;
    cursor: pointer;
  }
  .right-one>span{
    display: inline-block;
    text-align: center;
    width: 122.688px;
    line-height: 24px;
    padding: 7px 12px;
    white-space: nowrap;
    font-size: 12px;
  }
  .right-one:hover{
    transition: all .2s ease;
    border-bottom: solid 2px #000;
    font-weight: 600;
    cursor: pointer;
  }
  .header-thredcol{
    display: flex;
    float: right;
    height: 40px;
  }
  .header-help{
    position: absolute;
    top: 40px;
    right: -62px;
    width: 180px;
    height: 265px;
    border: 1px solid #000000;
  }
</style>
