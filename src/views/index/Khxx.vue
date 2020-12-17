<template>
  <div class="khxx">
    <mt-header fixed title="客户信息查询">
      <router-link to="/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="search">
      <el-row>
        <el-col :span="7">
          <el-select v-model="selcet" placeholder="请选择">
            <el-option label="用户编号" value="1"> </el-option>
            <el-option label="用户姓名" value="2"> </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-input placeholder="请输入查询内容"></el-input>
        </el-col>
        <el-col :span="5">
          <div class="btn">搜 索</div>
        </el-col>
      </el-row>
      <div class="collapse">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="6113133711 | 王永涛 | 1312525125" name="1">
            <div>
              <span>电能表资产编号：</span>
              <b>123456789</b>
            </div>
            <div>
              <span>表箱编号：</span>
              <b>7894566123</b>
            </div>
            <div>
              <span>表记相别：</span>
              <b>单相</b>
            </div>
            <div>
              <span>联系电话：</span>
              <b>1312525125</b>
            </div>
            <div>
              <span>用户地址：</span>
              <b>水房村2#</b>
            </div>
            <div class="detail fr clearfloat">
              详情
            </div>
          </el-collapse-item>
          <el-collapse-item title="6113133712 | 王小三 | 1312525126" name="2">
            <div>
              <span>电能表资产编号：</span>
              <b>123456789</b>
            </div>
            <div>
              <span>表箱编号：</span>
              <b>7894566123</b>
            </div>
            <div>
              <span>表记相别：</span>
              <b>单相</b>
            </div>
            <div>
              <span>联系电话：</span>
              <b>1312525125</b>
            </div>
            <div>
              <span>用户地址：</span>
              <b>水房村2#</b>
            </div>
            <div class="detail fr clearfloat">
              详情
            </div>
          </el-collapse-item>
          <el-collapse-item title="6113133713 | 王小四 | 1312525127" name="3">
            <div>
              <span>电能表资产编号：</span>
              <b>123456789</b>
            </div>
            <div>
              <span>表箱编号：</span>
              <b>7894566123</b>
            </div>
            <div>
              <span>表记相别：</span>
              <b>单相</b>
            </div>
            <div>
              <span>联系电话：</span>
              <b>1312525125</b>
            </div>
            <div>
              <span>用户地址：</span>
              <b>水房村2#</b>
            </div>
            <div class="detail fr clearfloat">
              详情
            </div>
          </el-collapse-item>
          <el-collapse-item title="6113133714 | 王小五 | 1312525128" name="4">
            <div>
              <span>电能表资产编号：</span>
              <b>123456789</b>
            </div>
            <div>
              <span>表箱编号：</span>
              <b>7894566123</b>
            </div>
            <div>
              <span>表记相别：</span>
              <b>单相</b>
            </div>
            <div>
              <span>联系电话：</span>
              <b>1312525125</b>
            </div>
            <div>
              <span>用户地址：</span>
              <b>水房村2#</b>
            </div>
            <div class="detail fr clearfloat">
              详情
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selcet: '1',
      activeNames: '1',
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
.khxx {
  padding: 0 15px;
  box-sizing: border-box;
  .search {
    margin-top: 40px;
    padding-top: 10px;
    .btn {
      height: 28px;
      border-radius: 10px;
      background: $base-color;
      line-height: 28px;
      color: white;
      text-align: center;
      font-size: 0.5rem;
    }
    .el-collapse-item__content {
      padding-left: 10px;
    }
    .detail {
      color: white;
      height: 20px;
      width: 60px;
      background: $base-color;
      text-align: center;
      line-height: 20px;
      font-size: 0.6rem;
      border-radius: 10px;
    }
  }
}
</style>
