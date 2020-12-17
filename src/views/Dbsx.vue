<template>
  <div class="dbsx">
    <mt-header title="待办事项">
      <router-link to="/index"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">内容待审批</mt-tab-item>
      <mt-tab-item id="2">已审批</mt-tab-item>
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
                           label="名称"> </el-table-column>
          <el-table-column prop="rwmc"
                           label="时间"> </el-table-column>
          <el-table-column prop="zt"
                           label="状态"> </el-table-column>
          <el-table-column prop="mdd"
                           label="操作">
            <template>

              <b style="color: #0b3a8a;">审批</b>
            </template>
          </el-table-column>
        </el-table>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <el-table :data="tableData1"
                  border
                  stripe
                  style="width: 100%"
                  class="mt10">
          <el-table-column prop="gdbh"
                           label="名称"> </el-table-column>
          <el-table-column prop="rwmc"
                           label="时间"> </el-table-column>
          <el-table-column prop="zt"
                           label="状态"> </el-table-column>
          <el-table-column prop="mdd"
                           label="操作">
            <template>

              <b style="color: #0b3a8a;">查看</b>
            </template>
          </el-table-column>
        </el-table>
      </mt-tab-container-item>

    </mt-tab-container>
  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data() {
    return {
      selected: '1',
      tableData: [{ zt: '待审批' }],
      tableData1: [{ zt: '已审批' }],
    }
  },
  methods: {},
  mounted() {},
}
</script>
 
<style scoped lang = "scss">
</style>