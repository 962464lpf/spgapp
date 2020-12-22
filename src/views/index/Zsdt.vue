<template>
  <div class="zsdt">
    <mt-header title="正式答题">
      <router-link to="/jp"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="zsdt-title">
      <p>试卷名称： 2020年11月月考</p>
      <p>考试时间： 2020年11.11.20-2020.11-22</p>
    </div>
    <div class="btn mt10"
         @click="jump">开始考试</div>
  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data() {
    return {}
  },
  methods: {
    jump() {
      this.$router.push('/dt')
    },
  },
  mounted() {},
}
</script>
 
<style scoped lang = "scss">
.zsdt {
  .zsdt-title {
    line-height: 54px;
  }
  .btn {
    height: 40px;
    background: $shallow-base-color;
    line-height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    text-align: center;
  }
}
</style>