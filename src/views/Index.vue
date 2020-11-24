<template>
  <div class="index">
    <div class="tq">
      点击进入现实五天内的天气
    </div>
    <div class="content">
      <ul class="ul-1">
        <li @click="jumpTo('/gzdb')">
          <i class="el-icon-s-release"></i>
          <p>
            工作代办
          </p>
        </li>
        <li @click="jumpTo('/kqdk')">
          <i class="el-icon-s-release"></i>
          <p>
            考勤打卡
          </p>
        </li>
        <li @click="jumpTo('/pgd')">
          <i class="el-icon-s-release"></i>
          <p>
            派工单
          </p>
        </li>
      </ul>
      <ul class="ul-2">
        <li @click="jumpTo('/tj')">
          <i class="el-icon-s-release"></i>
          <p>
            统计
          </p>
        </li>
        <li @click="jumpTo('/jk')">
          <i class="el-icon-s-release"></i>
          <p>
            监控
          </p>
        </li>
        <li @click="jumpTo('/gqj')">
          <i class="el-icon-s-release"></i>
          <p>
            工器具
          </p>
        </li>
        <li @click="jumpTo('/bpbj')">
          <i class="el-icon-s-release"></i>
          <p>
            备品备件
          </p>
        </li>
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
  // font-size: 0.3rem;
  .tq {
    height: 6rem;
  }
  .content {
    width: 100%;
    .ul-1 {
      height: 6rem;
    }
    .ul-2 {
      height: 5rem;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 23%;
        font-size: 1rem;
        box-sizing: border-box;
        i {
          font-size: 2rem;
          color: yellowgreen;
        }
      }
    }
  }
  .qt {
    margin-top: 0.5rem;
    .jp {
      height: 6rem;
      text-align: center;
      line-height: 6rem;
      background: #2385a2;
      font-size: 2rem;
      color: white;
    }
  }
}
</style>
