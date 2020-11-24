<template>
  <div class="footer">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" @click.native="jumpTo('/index')">工作</mt-tab-item>
      <mt-tab-item id="2" @click.native="jumpTo('/message')">消息</mt-tab-item>
      <mt-tab-item id="3" @click.native="jumpTo('/info')">我</mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
    }
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
.footer {
  font-size: 0.2rem;
}
</style>
