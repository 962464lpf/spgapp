<template>
  <div class="jiankong">
    <mt-header title="监控分析" class="h">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="map-content">
      <div class="search">
        <mt-search placeholder="请输入工号或姓名搜索"></mt-search>
      </div>
      <el-amap
        ref="map"
        vid="amapDemo"
        :center="center"
        :zoom="zoom"
        class="amap-demo"
      >
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index + 'mar'"
          :position="marker.position"
          :events="marker.events"
          :visible="marker.visible"
          :draggable="marker.draggable"
          :vid="index"
        ></el-amap-marker>
        <el-amap-text
          v-for="text in texts"
          :key="text.text + 'text'"
          :text="text.text"
          :offset="text.offset"
          :position="text.position"
          :events="text.events"
        ></el-amap-text>

        <el-amap-info-window
          :position="windows.position"
          :content="windows.content"
          :visible="windows.visible"
          :offset="[0, -35]"
          :closeWhenClickMap="false"
        >
        </el-amap-info-window>
      </el-amap>
      <div class="people-info">
        <div class="info">
          <div style="display: flex;">
            <img src="../../assets/img/tx.jpg" alt="" />
            <div>
              <p>王永涛</p>
              <b>工号：12345</b>
            </div>
          </div>

          <div>
            <p>无外出任务</p>
            <b>实时任务</b>
          </div>
        </div>
        <p class="location">陕西省宝鸡市眉县</p>
        <div class="btn">联系他</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 13,
      center: [107.61703, 34.46939],
      markers: [
        {
          position: [107.594127, 34.470633],
          visible: true,
          draggable: false,
        },
        {
          position: [107.640132, 34.468227],
          visible: true,
          draggable: false,
        },
      ],
      windows: {
        position: [107.594127, 34.470633],
        content: `<div class="list">
        <p>王永涛</p>
        <p>工号：12345</p>
        <p>当前业务：业扩报装</p>
        <p>附近的人：王小三</p>`,
        visible: true,
      },
      texts: [
        {
          position: [107.640132, 34.468227],
          text: '王小三 工号：123456',
          offset: [10, -53],
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.jiankong {
  height: 100;
  display: flex;
  flex-direction: column;
  .h {
    height: 40px;
    width: 100%;
  }
  .map-content {
    flex: 1;
    position: relative;
    .search {
      position: absolute;
      height: 50px;
      width: 100%;
      top: 0;
      overflow: hidden;
    }
    .amap-demo {
      height: 100%;
    }
    .people-info {
      height: 150px;
      background: white;
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 99999;
      border-radius: 10px 10px 0 0;
      padding: 10px 15px;
      box-sizing: border-box;
      .info {
        display: flex;
        justify-content: space-between;
        img {
          height: 40px;
          width: 40px;
          margin-right: 5px;
          border-radius: 50%;
        }
        div {
          line-height: 25px;
          p {
            font-size: 1rem;
          }
          b {
            font-size: 0.8rem;
          }
        }
      }
      .location {
        font-size: 1rem;
        margin: 10px 0 10px 10px;
      }
      .btn {
        height: 45px;
        line-height: 45px;
        border-radius: 5px;
        text-align: center;
        color: white;
        background: $base-color;
      }
    }
  }
}
</style>
