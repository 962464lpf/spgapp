<template>
  <div class="gqj">
    <mt-header title="工器具">
      <router-link to="/index"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <el-row class="mt10 fr">
      <el-form :inline="true">
        <el-form-item label="归还人:">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table v-if="!lyjlStatus"
              :data="tableData"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column prop="mc"
                       label="名称"> </el-table-column>
      <el-table-column prop="bh"
                       label="编号"> </el-table-column>
      <el-table-column prop="gdh"
                       label="工单号"> </el-table-column>
      <!-- <el-table-column prop="gg"
                       label="工作负责人"> </el-table-column> -->
      <el-table-column prop="ghr"
                       label="归还人"> </el-table-column>
      <el-table-column label="状态">
        <template>
          <b style="color: #0b3a8a;" @click="jump">待审核</b>
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作">
        <template>
          <el-button type="text">查看</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <el-table v-else
              :data="tableData1"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column prop="gddh"
                       label="工单单号"> </el-table-column>
      <el-table-column prop="rwmc"
                       label="任务名称"> </el-table-column>
      <el-table-column prop="gqj"
                       label="工器具"> </el-table-column>
      <el-table-column prop="cksj"
                       label="出库时间"> </el-table-column>
      <el-table-column prop="ghsj"
                       label="归还时间"> </el-table-column>
      <el-table-column label="操作"
                       fixed="right"
                       width="60">
        <template slot-scope="scope">
          <el-button type="text"
                     v-if="!scope.row.ghsj"
                     @click="jump">审核</el-button>
          <el-button type="text"
                     v-else>已审核</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lyjlStatus: false,
      tableData: [
        {
          
          bh: '2-001',
          mc: '安全帽',
          gdh: '2020120101',
          gg: '',
          ghr: '王永涛',
          syr: '小李',
          lx: '安全工器具',
          dw: 'xxx供电所',
          bz: 'xxx',
          rksj: '2020-3.25',
        },
       
      ],
      tableData1: [
        {
          gddh: '2020112003',
          rwmc: '换表',
          gqj: '验电笔',
          cksj: '2020-11-20',
          ghsj: '',
        },
        {
          gddh: '2020112004',
          rwmc: '换表',
          gqj: '梯子',
          cksj: '2020-11-20',
          ghsj: '2020-11-20',
        },
      ],
    }
  },
  methods: {
    jump() {
      this.$router.push('/gqj/ghsh')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.gqj {
}
</style>
