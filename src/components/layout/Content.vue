<template>
  <div class="content">
    <router-view class="router-view" />
    <Footer class="my-footer"></Footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  components: {
    Footer,
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .router-view {
    flex: 1;
    overflow: auto;
  }
  .my-footer {
    height: 3rem;
  }
}
</style>
