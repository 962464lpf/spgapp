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

Vue.use(VCharts)
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
