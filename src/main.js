import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ZhbUi from 'zhb-ui'
import 'zhb-ui/dist/zhb-ui.css'

Vue.config.productionTip = false
Vue.use(ZhbUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
