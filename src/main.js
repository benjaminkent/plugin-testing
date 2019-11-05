import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MathPlugin from './math-plugin'
import SpringerPlugin from './springer-plugin'

Vue.use(SpringerPlugin)
Vue.use(MathPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
