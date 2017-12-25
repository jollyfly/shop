// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueResource from 'vue-resource'
import ElementUI from 'element-ui'


import App from './App'


import Router from './router/index'

import 'element-ui/lib/theme-chalk/index.css'
import 'amazeui/dist/css/amazeui.css'



Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(ElementUI)



new Vue({
  components: {
    App
  },
  template: '<App/>',
  router:Router,

}).$mount('#app')

