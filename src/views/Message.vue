<template>
  <div class="message">
    <mt-header title="消息">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="item mt10" v-for="item in 5" :key="item">
      <p class="clearfloat">
        <span class="fl">王小二的派工申请</span>
        <span class="fr">2020.11.24</span>
      </p>
      <p>
        任务详情：xxxxxxxxxxxxxxxxx
      </p>
      <p class="clearfloat">
        <span class="fl">由王小二提交</span>
        <span class="fr">未处理</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.message {
  height: 100%;
  background: #eee;
  .item {
    padding: 0.5rem;
    font-size: 1.2rem;
    line-height: 2.4rem;
    background: white;
  }
}
</style>
