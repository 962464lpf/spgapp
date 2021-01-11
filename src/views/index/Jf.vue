<template>
  <div class="jf">
    <mt-header title="积分">
      <router-link to="/jp"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="header-contetnt">
      <h3>积分规则</h3>
      <div>
        <h5>今日累计</h5>
        <h6>1积分</h6>
      </div>

    </div>
    <ul>
      <li class="item">
        <div class="left">
          <h4>登录</h4>
          <p>每日首次登录</p>
          <p class="pro">
            <el-progress :percentage="100" :show-text='false'></el-progress>
            <span class="ml10">已获1积分/每日上限1积分</span>
          </p>
        </div>
        <div class="right">
          <span>已完成</span>
        </div>
      </li>
       <li class="item">
        <div class="left">
          <h4>每日答题</h4>
          <p>每组答题每答对1道积一分</p>
          <p class="pro">
            <el-progress :percentage="0" :show-text='false'></el-progress>
            <span class="ml10">已获0积分/每日上限6积分</span>
          </p>
        </div>
        <div class="right">
          <span>去看看</span>
        </div>
      </li>
       <li class="item">
        <div class="left">
          <h4>专题答题</h4>
          <p>每组答题每答对1道积一分</p>
          <p class="pro">
            <el-progress :percentage="0" :show-text='false'></el-progress>
            <span class="ml10">已获0积分/每日上限5积分</span>
          </p>
        </div>
        <div class="right">
          <span>去看看</span>
        </div>
      </li>
    </ul>

  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>
 
<style scoped lang = "scss">
.jf {
  .header-contetnt {
    padding: 10px 20px;
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    div{
      display: flex;
      h6{
        color: red;
        margin-left: 20px;
      }
    }
  }
  .item{
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    .left{
      line-height: 24px;
      width: 80%;
      .el-progress{
        width: 80px;
        display: inline-block;
      }
      p{
        font-size: 12px;
      }
    }
    .right{
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      span{
        display: inline-block;
        padding: 8px;
        border-radius: 3px;
        background: #eee;
      }
    }
  }
}
</style>