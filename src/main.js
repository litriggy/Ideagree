import Vue from 'vue'
import store from "./store"
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/plugins/firebase'

library.add(fas)

Vue.component('ifas', FontAwesomeIcon)
Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
