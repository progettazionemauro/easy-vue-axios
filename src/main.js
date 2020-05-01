import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(VueNativeSock, 'wss://10.0.28.70:3000')
new Vue({
  render: h => h(App)
}).$mount("#app");
