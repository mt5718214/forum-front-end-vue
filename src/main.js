import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import io from 'socket.io-client'
import './assets/application.css'

Vue.config.productionTip = false

const socket = io('https://fathomless-retreat-52726.herokuapp.com', {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'my-custom-header'
  }
})
Vue.prototype.$socket = socket

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
