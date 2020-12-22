<template>
  <div class="jp">
    <mt-header title="教培">
      <router-link to="/index"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- <el-row class="mt10">
      联系：
      <el-button-group>
        <el-button type="primary"
                   icon="el-icon-arrow-left">顺序出题</el-button>
        <el-button type="primary">随机出题<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </el-row>
    <el-row class="mt10">
      考试：
     <el-button-group>
        <el-button type="primary"
                   icon="el-icon-arrow-left">模拟考试</el-button>
        <el-button type="primary">正式考试<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </el-row> -->
    <div class="content-box">
      <div class="box"
           @click="jump('/sxdt')">
        <span class="p1">顺序练题</span>
        <span class="p2">100/300</span>
      </div>
      <div class="box">
        <span class="p1">随机练题</span>
        <span class="p2">100/300</span>
      </div>
      <div class="box">
        <p>模拟考试</p>
      </div>
      <div class="box"
           @click="jump('/zsdt')">
        <p>正式考试</p>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data() {
    return {}
  },
  methods: {
    jump(path) {
      this.$router.push(path)
    },
  },
  mounted() {},
}
</script>
 
<style scoped lang = "scss">
.jp {
  .content-box {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .box {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background: #4dbdd7;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
}
</style>