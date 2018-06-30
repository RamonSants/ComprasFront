import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueResource from 'vue-resource'
import VueGoodTable from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTable);
Vue.use(VueResource);
// Declaramos alguns filters para poder utilizar no template
Vue.filter('capitalize', (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.filter('height', (value) => {
    return `${Number(value) / 100}m`
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
