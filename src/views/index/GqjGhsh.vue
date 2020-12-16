<template>
  <div class="gzdb">
    <mt-header title="工器具归还审核">
      <router-link to="/gqj" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    
    <div class="pgd">
      <mt-field label="工单编号"></mt-field>
      <mt-field label="工作负责人"></mt-field>
      <mt-field label="归还人"></mt-field>
      <mt-field label="上传附件">
        <el-upload action="" list-type="picture-card">
          <i class="el-icon-camera-solid"></i>
        </el-upload>
      </mt-field>
    </div>
    <div class="btn" @click="jump">保存确认</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    jump(){
      this.$router.push('/gqj')
    }
  },
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
