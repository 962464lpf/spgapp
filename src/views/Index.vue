<template>
  <div class="index">
    <div class="tq">
      点击进入现实五天内的天气
    </div>
    <div class="content">
      <ul class="ul-1">
        <li @click="jumpTo('/gzdb')">工作代办</li>
        <li @click="jumpTo('/kqdk')">考勤打卡</li>
        <li @click="jumpTo('/pgd')">派工单</li>
      </ul>
      <ul class="ul-2">
        <li @click="jumpTo('/tj')">统计</li>
        <li @click="jumpTo('/jk')">监控</li>
        <li @click="jumpTo('/gqj')">工器具</li>
        <li @click="jumpTo('/bpbj')">备品备件</li>
      </ul>
    </div>
    <div class="qt">
      <div class="jp">教育培训</div>
      <div class="jp mt10">业务咨询</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    jumpTo(path) {
      this.$router.push(path)
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.index {
  font-size: 0.3rem;
  .tq {
    height: 1.2rem;
    border-bottom: 1px solid black;
  }
  .content {
    width: 100%;
    .ul-1 {
      border-bottom: 1px solid black;
      height: 1.2rem;
    }
    .ul-2 {
      border-bottom: 1px solid black;
      height: 1rem;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 23%;
        font-size: 0.1rem;
        box-sizing: border-box;
      }
    }
  }
  .qt {
    .jp {
      height: 1.2rem;
      text-align: center;
      line-height: 1.2rem;
      border-bottom: 1px solid black;
    }
  }
}
</style>
