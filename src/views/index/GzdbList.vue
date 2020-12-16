<template>
  <div class="rwdb-list">
    <mt-header title="任务待办列表">
      <router-link to="/index"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <el-table :data="tableData"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column prop="pgsj"
                       label="派工时间"> </el-table-column>
      <el-table-column prop="jhwcsj"
                       label="计划完成时间"> </el-table-column>
      <el-table-column prop="pgdh"
                       label="派工单号"> </el-table-column>
      <el-table-column prop="rwmc"
                       label="任务名称"> </el-table-column>
      <el-table-column label="状态">
        <template>
          <b @click="jump" style="color: #0b3a8a;">待受理</b>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          pgsj: '2020.12.1 11:23',
          jhwcsj: '2020.12.1 18:00',
          pgdh: '20202120101',
          rwmc: '换表',
          
        }
      ],
    }
  },
  methods: {
    jump () {
      this.$router.push('/gzdb')
    }
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.bpbj {
}
</style>
