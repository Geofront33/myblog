import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

Vue.use(ElementUI)

var axios = require('axios')
axios.defaults.baseURL = 'http://49.234.217.229:8081'

Vue.prototype.$axios = axios
Vue.prototype.HOST = "/"

router.beforeEach((to, from, next) => {
      if (to.meta.requireAuth) {
        if (store.state.user.username) {
          next()
        } else {
          next({
            path: 'login',
            query: {redirect: to.fullPath}
          })
        }
      } else {
        next()
      }
    }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
