import Vue from 'vue'
import App from './App.vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* https://router.vuejs.org/ */
import { router } from './router'

import './httpClient'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
