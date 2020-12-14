<template>
  <div class="index">
    <div class="title">供电所移动作业管理系统</div>
    <div class="header1">
      <div class="info">
        <p>
          <i class="el-icon-user"></i>
          <span>王小二</span>
        </p>
        <p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </p>
        <p>
          <el-badge :value="0" class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
        </p>
      </div>
      <ul class="work">
        <li>
          <p>0</p>
          <p>待办任务</p>
        </li>
        <li>
          <p>0</p>
          <p>已办任务</p>
        </li>
        <li>
          <p></p>
          <p></p>
        </li>
        <li>
          <p></p>
          <p></p>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="list">
        <h3>
          任务
        </h3>
        <ul>
          <li>
            <p><i class="el-icon-goods"></i></p>
            <p>考勤打卡</p>
          </li>
          <li @click="jumpTo('/gzdb')">
            <p><i class="el-icon-s-order"></i></p>
            <p>任务待办</p>
          </li>

          <li @click="jumpTo('/gqj')">
            <p><i class="el-icon-s-grid"></i></p>
            <p>工器具</p>
          </li>
          <li>
            <i class="el-icon-s-comment"></i>
            <p>备品备件</p>
          </li>
        </ul>
      </div>
      <div class="list">
        <h3>
          指标
        </h3>
        <ul>
          <li>
            <p><i class="el-icon-goods"></i></p>
            <p>采集成功率</p>
          </li>
          <li>
            <p><i class="el-icon-s-order"></i></p>
            <p>综合线损率</p>
          </li>

          <li>
            <p><i class="el-icon-s-grid"></i></p>
            <p>停电成功率</p>
          </li>
          <li>
            <i class="el-icon-s-comment"></i>
            <p>线损合格率</p>
          </li>
        </ul>
      </div>
      <div class="list">
        <h3>
          我的台区
        </h3>
        <ul>
          <li>
            <p><i class="el-icon-goods"></i></p>
            <p>台区信息</p>
          </li>
          <li @click="jumpTo('/khxx')">
            <p><i class="el-icon-s-order"></i></p>
            <p>客户信息查询</p>
          </li>

          <li>
            <p><i class="el-icon-s-grid"></i></p>
            <p>台区指标</p>
          </li>
        </ul>
      </div>
      <div class="list">
        <h3>
          监控统计
        </h3>
        <ul>
          <li @click="jumpTo('/tj')">
            <p><i class="el-icon-goods"></i></p>
            <p>统计</p>
          </li>
          <li @click="jumpTo('/jk')">
            <p><i class="el-icon-s-order"></i></p>
            <p>监控</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '全部台区',
        },
      ],
      value: '选项1',
    }
  },
  methods: {
    jumpTo(path) {
      this.$router.push(path)
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
.index {
  font-size: 1.4rem;
  .title {
    background: $base-color;
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    align-items: center;
    height: 40px;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    padding: 0 10px;
    justify-content: center;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 400;
  }
  .header1 {
    margin-top: 40px;
    background: $base-color;
    .info {
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      p {
        color: white;

        i {
          font-size: 1.4rem;
        }
        span {
          font-size: 1rem;
          margin-left: 5px;
        }
      }
      p:nth-child(1) {
        i {
          font-size: 2rem;
        }
      }
    }
    .work {
      display: flex;
      height: 5rem;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;
      li {
        width: 25%;
        font-size: 1.2rem;
        color: white;
        text-align: center;
        line-height: 2rem;
      }
    }
  }
  .content {
    padding: 20px 10px;
    .list {
      margin-bottom: 20px;
      h3 {
        font-size: 1rem;
        padding-left: 10px;
        border-left: 3px solid $base-color;
      }
      ul {
        display: flex;
        // justify-content: space-around;
        align-items: center;
        li {
          i {
            font-size: 1.2rem;
            margin-bottom: 5px;
          }
          margin-top: 10px;
          width: 25%;
          font-size: 0.8rem;
          // line-height: 1.8rem;
          text-align: center;
          color: $base-color;
        }
      }
    }
  }
}
</style>
