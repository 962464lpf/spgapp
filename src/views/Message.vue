<template>
  <div class="message">
    <mt-header title="消息中心">
      <router-link to="/index"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">业务超期预警</mt-tab-item>
      <mt-tab-item id="2">待办事项</mt-tab-item>
      <mt-tab-item id="3">待审批</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <el-table :data="tableData"
                  border
                  stripe
                  style="width: 100%"
                  class="mt10">
          <el-table-column prop="gdbh"
                           label="工单编号"> </el-table-column>
          <el-table-column prop="rwmc"
                           label="任务名称"> </el-table-column>
          <el-table-column prop="gdly"
                           label="工单来源"> </el-table-column>
          <el-table-column prop="mdd"
                           label="目的地"> </el-table-column>
        </el-table>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <el-table :data="tableData1"
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
              <b @click="jump"
                 style="color: #0b3a8a;">待受理</b>
            </template>
          </el-table-column>

        </el-table>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        's'
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
      tableData: [],
      tableData1: [
        {
          pgsj: '2020.12.1 11:23',
          jhwcsj: '2020.12.1 18:00',
          pgdh: '20202120101',
          rwmc: '换表',
        },
      ],
    }
  },
  methods: {
    jump() {
      this.$router.push('/gzdb')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.gqj {
}
</style>
