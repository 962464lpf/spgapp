<template>
  <div class="jp">
    <mt-header title="教培">
      <router-link to="/index"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="content1">
      <div class="list">
        <h3>
          每日必做
        </h3>
        <div style="height:200px"
             @click="jump('/jrst')">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img src="../../assets/img/img1.jpg"
                   alt="">
              <p>今日必做1</p>
            </mt-swipe-item>
            <mt-swipe-item> <img src="../../assets/img/img2.jpg"
                   alt="">
              <p>今日必做2</p>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="list">
        <h3>
          专题训练1
        </h3>
          <mt-cell title="xxx题库" label="强化训练xxx" is-link></mt-cell>
      </div>
      <div class="list">
        <h3>
          专题训练2
        </h3>
          <mt-cell title="xxx题库" label="强化训练xxx" is-link></mt-cell>
      </div>
        <div class="list">
        <h3>
          专题训练3
        </h3>
          <mt-cell title="xxx题库" label="强化训练xxx" is-link></mt-cell>
      </div>
    </div>
    <div class="footer-nav">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1"
                     @click="jump('/sxdt')">
          <div @click="jump('/sxdt')">顺序练题</div>
        </mt-tab-item>
        <mt-tab-item id="2">
          <div>随机练题</div>
        </mt-tab-item>
         <mt-tab-item id="5">
          <div @click="jump('/jf')">积分</div>
        </mt-tab-item>
        <mt-tab-item id="3">
          <div>模拟考试</div>
        </mt-tab-item>
        <mt-tab-item id="4">
          <div @click="jump('/zsdt')">正式考试</div>
        </mt-tab-item>
      </mt-navbar>
    </div>

  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data() {
    return {
      selected: '1',
    }
  },
  methods: {
    jump(path) {
      this.$router.push(path)
    },
  },
  mounted() {},
}
</script>
 
<style scoped lang = "scss">
.jp {
  .content-box {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .box {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      background: #4dbdd7;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
  .content1 {
    padding: 20px 10px;
    .list {
      margin-bottom: 20px;
      h3 {
        font-size: 1rem;
        padding-left: 10px;
        border-left: 3px solid $base-color;
        margin-bottom: 15px;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
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
          .box {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            background: #4dbdd7;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
          }
        }
      }
    }
  }
  .mint-swipe-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    box-sizing: border-box;
    img{
      height: 150px;
      width: 100%;
    }
  }
  .footer-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>