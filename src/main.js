import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.scss'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VCharts from 'v-charts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'mini' })
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'ef4308dcc95cb6d783f97aa81334e9df',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.4',
})

Vue.use(VCharts)
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
