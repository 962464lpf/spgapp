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
          :colors="colors"
          height="300px"
          :settings="{  yAxisName: ['个'] }"
        ></ve-histogram>
        <div class="tj-content mt10">
          <h4>2020年11月 全部人员</h4>
          <div class="num">
            <div>
              <p>工单量</p>
              <b>5</b>
            </div>
            <div>
              <p>月累计工单量</p>
              <b>524</b>
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
        <mt-navbar v-model="selected2">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">业扩报装</mt-tab-item>
          <mt-tab-item id="3">用电检查</mt-tab-item>
          <mt-tab-item id="4">客户服务</mt-tab-item>
        </mt-navbar>
        <ve-histogram
          v-if="selected === '2'"
          :data="chartData1"
          :legend-visible="false"
          :extend="extend"
          :colors="colors"
          height="300px"
        ></ve-histogram>
        <div class="tj-content mt10">
          <h4>2020年11月 全部人员</h4>
          <div class="num">
            <div>
              <p>工单量</p>
              <b>5</b>
            </div>
            <div>
              <p>月累计工单量</p>
              <b>524</b>
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
      <mt-tab-container-item id="3">
        <mt-navbar v-model="selected2">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">业扩报装</mt-tab-item>
          <mt-tab-item id="3">用电检查</mt-tab-item>
          <mt-tab-item id="4">客户服务</mt-tab-item>
        </mt-navbar>
        <ve-histogram
          v-if="selected === '3'"
          :data="chartData1"
          :legend-visible="false"
          :extend="extend"
          :colors="colors"
          height="300px"
        ></ve-histogram>
        <div class="tj-content mt10">
          <h4>2020年11月 全部人员</h4>
          <div class="num">
            <div>
              <p>工单量</p>
              <b>5</b>
            </div>
            <div>
              <p>月累计工单量</p>
              <b>524</b>
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
      colors: [
        '#0b3a8a',
        '#1767ac',
        '#5480bd',
        '#88a0ce',
        '#b7c5e2',
        '#e7e9f5',
      ],
      chartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '11/1', 数量: 139 },
          { 日期: '11/2', 数量: 353 },
          { 日期: '11/3', 数量: 292 },
          { 日期: '11/4', 数量: 172 },
          { 日期: '11/5', 数量: 379 },
          { 日期: '11/6', 数量: 459 },
        ],
      },
      chartData1: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '11/1', 数量: 139 },
          { 日期: '11/2', 数量: 353},
          { 日期: '11/3', 数量: 292 },
          { 日期: '11/4', 数量: 172 },
          { 日期: '11/5', 数量: 379 },
          { 日期: '11/6', 数量: 459 },
        ],
      },
      chartData2: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '11/1', 数量: 139 },
          { 日期: '11/2', 数量: 353 },
          { 日期: '11/3', 数量: 292 },
          { 日期: '11/4', 数量: 172 },
          { 日期: '11/5', 数量: 379 },
          { 日期: '11/6', 数量: 459 },
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
  .tj-content {
    // font-size: 0.15rem;
    text-align: center;
    // line-height: 0.3rem;
    position: relative;
    top: -50px;
    h4 {
      line-height: 20px;
    }
    .num {
      display: flex;
      margin-top: 20px;
      div {
        width: 50%;
        font-size: 0.5rem;
        line-height: 20px;
        b {
          font-size: 1rem;
          margin-top: 8px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
