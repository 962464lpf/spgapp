<template>
  <div class="content">
    <router-view class="router-view" />
    <!-- <Footer class="my-footer"></Footer> -->
  </div>
</template>

<script>
// import Footer from './Footer'
export default {
  components: {
    // Footer,
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
.content {
  height: 100%;
  overflow: auto;
  .mint-header {
    background: #153a6e;
    h1 {
      font-size: 1rem;
    }
  }
  .router-view {
    height: 100%;
    overflow: auto;
  }
  .my-footer {
    height: 3rem;
  }
}
</style>
