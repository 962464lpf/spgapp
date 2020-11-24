<template>
  <div class="gqj">
    <mt-header title="工器具">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <el-row class="mt10 fr">
      <el-button type="primary">领用记录</el-button>
      <el-button type="primary">报废记录</el-button>
    </el-row>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="mc" label="名称"> </el-table-column>
      <el-table-column prop="gg" label="规格"> </el-table-column>
      <el-table-column prop="lx" label="类型"> </el-table-column>
      <el-table-column label="操作">
        <template>
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
          bh: 1,
          mc: '安全帽',
          gg: '',
          syr: '小李',
          lx: '安全工器具',
          dw: 'xxx供电所',
          bz: 'xxx',
          rksj: '2020-3.25',
        },
        {
          bh: 2,
          mc: '砍刀',
          gg: '',
          syr: '小李',
          lx: '生产工器具',
          dw: 'xxx供电所',
          bz: 'xxx',
          rksj: '2020-3-25',
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.gqj {
}
</style>
