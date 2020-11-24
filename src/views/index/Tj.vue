<template>
  <div class="tongji">
    <mt-header title="工单处理分析">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">总量统计</mt-tab-item>
      <mt-tab-item id="2">完成率</mt-tab-item>
      <mt-tab-item id="3">处理及时率</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-navbar v-model="selected1">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">业扩报装</mt-tab-item>
          <mt-tab-item id="3">用电检查</mt-tab-item>
          <mt-tab-item id="4">客户服务</mt-tab-item>
        </mt-navbar>
        <ve-histogram
          :data="chartData"
          :legend-visible="false"
          :extend="extend"
          height="300px"
        ></ve-histogram>
        <div class="content">
          <span>2020年11月 全部人员</span>
          <div class="num">
            <div>
              <p>工单量</p>
              <p>5</p>
            </div>
            <div>
              <p>月累计工单量</p>
              <p>524</p>
            </div>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="时间"> </el-table-column>
            <el-table-column prop="name" label="工单量"> </el-table-column>
            <el-table-column prop="address" label="月累计工单量">
            </el-table-column>
          </el-table>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        2
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        3
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
      selected1: '1',
      selected2: '1',
      selected3: '1',
      chartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '11/1', 数量: 1393 },
          { 日期: '11/2', 数量: 3530 },
          { 日期: '11/3', 数量: 2923 },
          { 日期: '11/4', 数量: 1723 },
          { 日期: '11/5', 数量: 3792 },
          { 日期: '11/6', 数量: 4593 },
        ],
      },
      extend: {
        series(v) {
          v.forEach((i) => {
            i.barWidth = 20
          })
          return v
        },
      },
      tableData: [
        {
          date: '2020-05-02',
          name: '12',
          address: '120',
        },
        {
          date: '2020-05-03',
          name: '13',
          address: '133',
        },
        {
          date: '2020-05-04',
          name: '14',
          address: '147',
        },
        {
          date: '2020-05-05',
          name: '15',
          address: '162',
        },
        {
          date: '2020-05-06',
          name: '12',
          address: '174',
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.tongji {
  .content {
    font-size: 0.15rem;
    text-align: center;
    line-height: 0.3rem;
    .num {
      display: flex;
      margin-top: 0.2rem;
      div {
        width: 50%;
      }
    }
  }
}
</style>
