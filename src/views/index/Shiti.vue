<template>
  <div class="shiti">
    <mt-header title="试题">
      <router-link to="/jp"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="timu">
      <p>
        <span class="type">判断</span>
        <span class="ti">
          《供电所规则》规定：窃电时间无法查询时，窃电失数至少按180天计。
        </span>
      </p>
      <mt-radio align="right"
                v-model="value"
                :options="options">
      </mt-radio>
      <div class="btn mt10 fr" @click="dialogVisible = true ">交卷</div>
    </div>
    <el-dialog title="考试成绩"
               :visible.sync="dialogVisible"
               width="70%"
               :before-close="() => dialogVisible = false">
      <div class="kscj">
        <span>考试成绩：96分</span>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">查看错题</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">查看试题</el-button>
      </span>
    </el-dialog>
  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data() {
    return {
      dialogVisible: false,
      select: '题库1',
      value: '',
      options: [
        {
          label: '正确',
          value: 'valueA',
        },
        {
          label: '错误',
          value: 'valueB',
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>
 
<style scoped lang = "scss">
.shiti {
  .timu {
    p {
      line-height: 34px;
      .type {
        display: inline-block;
        width: 60px;
        text-align: center;
        color: $shallow-base-color;
      }
    }
  }
  .btn {
    width: 100px;
    height: 40px;
    background: $shallow-base-color;
    line-height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    text-align: center;
    margin-top: 20px;
  }
}
</style>