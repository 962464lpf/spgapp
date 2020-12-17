<template>
  <div class="gzdb">
    <mt-header title="任务受理">
      <router-link to="/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="liucheng">
      <el-steps :active="2">
        <el-step title="制单"></el-step>
        <el-step title="派工"></el-step>
        <el-step title="受理"></el-step>
        <el-step title="结单"></el-step>
        <el-step title="归档"></el-step>
      </el-steps>
    </div>
    <div class="pgd">
      <mt-field label="任务名称"></mt-field>
      <mt-field label="任务内容"></mt-field>
      <mt-field label="工作票号"></mt-field>
      <mt-field label="工作类型"></mt-field>
      <mt-field label="流程节点"></mt-field>
      <mt-field label="出发地"></mt-field>
      <mt-field label="目的地"></mt-field>
      <mt-field label="工作负责人"></mt-field>
      <mt-field label="工作成员"></mt-field>
      <mt-field label="车牌号"></mt-field>
      <mt-field label="现场照片">
        <el-upload action="" list-type="picture-card">
          <i class="el-icon-camera-solid"></i>
        </el-upload>
      </mt-field>
    </div>
    <div class="btn">提交</div>
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

<style lang="scss">
.gzdb {
  .liucheng {
    // height: 60px;
    background: $base-color;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
    padding-top: 30px;
    .el-steps {
      .el-step__main {
        .is-finish {
          color: #c0c4cc;
        }
        .is-process {
          color: #409eff;
        }
      }
    }
  }
  .pgd {
    .mint-cell {
      border: 1px solid #eee;
    }
  }
  .btn {
    height: 40px;
    background: $base-color;
    line-height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    text-align: center;
  }
}
</style>
