<template>
  <div class="sxdt">
    <mt-header title="顺序答题">
      <router-link to="/jp"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <el-row class="mt10">
      <span>题库：</span>
      <el-select v-model="select"
                 placeholder="请选择">
        <el-option label="题库1"
                   value="题库1">
        </el-option>
        <el-option label="题库2"
                   value="题库2">
        </el-option>
      </el-select>
    </el-row>
    <ul class="num">
      <li>
        <p>200</p>
        <p class="mt10">未做题</p>
      </li>
      <li>
        <p>20</p>
        <p class="mt10">错题</p>
      </li>
      <li>
        <p>20%</p>
        <p class="mt10">答错率</p>
      </li>
    </ul>
    <div class="btn"
         @click="jump">练习</div>
  </div>
</template>
 
<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'vueName',
  data() {
    return {
      select: '题库1',
    }
  },
  methods: {
    jump() {
      MessageBox.confirm('是否从上次位置继续练习?').then(() => {
        this.$router.push('/dt')
      })
    },
  },
  mounted() {},
}
</script>
 
<style scoped lang = "scss">
.sxdt {
  .num {
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      text-align: center;
    }
  }
  .btn {
    height: 40px;
    background: $shallow-base-color;
    line-height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    text-align: center;
  }
}
</style>