<template>
  <div class="jiankong">
    <mt-header title="监控分析">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <img src="../../assets/img/1.jpg" alt="" />
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
.jiankong {
  font-size: 0.15rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
