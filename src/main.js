import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FunctionalCalendar from 'vue-functional-calendar';
Vue.use(FunctionalCalendar, {
  dayNames: ['Moa', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
