<template>
  <div class="bpbj">
    <mt-header title="备品备件">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="mt10 fr">
      <el-button type="primary">
        领用详情
      </el-button>
      <el-button type="primary">
        补充详情
      </el-button>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="mc" label="名称"> </el-table-column>
      <el-table-column prop="sl" label="数量"> </el-table-column>
      <el-table-column prop="gg" label="规格"> </el-table-column>
      <el-table-column prop="lx" label="类型"> </el-table-column>
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
          mc: '电线',
          gg: '米',
          syr: '小李',
          lx: '线缆',
          sl: '1000',
          dw: 'xxx供电所',
          bz: 'xxx',
        },
        {
          bh: 2,
          mc: '蝴蝶瓶',
          gg: '个',
          syr: '小李',
          lx: '备件',
          sl: 500,
          dw: 'xxx供电所',
          bz: 'xxx',
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.bpbj {
}
</style>
