<template>
  <div class="pgd">
    <mt-header title="派工单">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="mt10 fr">
      <el-button type="primary">申请派工</el-button>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column type="selection" width="45"> </el-table-column>
      <el-table-column prop="pgdh" label="派工单号"> </el-table-column>
      <el-table-column prop="rwmc" label="任务名称"> </el-table-column>
      <el-table-column prop="zylx" label="作业类型"> </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="text">申请派工</el-button>
          <el-button type="text">查看</el-button>
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
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          zylx: '检查',
          gzzrr: '王小虎',
          gdly: '96789',
          zdr: '张小虎',
          qfr: 's',
          zt: '未制单',
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          zylx: '检查',
          gdly: '移动端推送',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '已签发',
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          gdly: '日常计划',
          zylx: '检查',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '已派工',
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          zylx: '检查',
          gdly: '营销系统',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '已结单',
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
