<template>
  <div class="jp">
    <mt-header title="教培">
      <router-link to="/index"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <el-row>
      liaxi
      <el-button-group>
        <el-button type="primary"
                   icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </el-row>
    <el-row>
     <el-button-group>
        <el-button type="primary"
                   icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </el-row>
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
</style>