import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'
import LoadScript from 'vue-plugin-load-script';
import UserSignIn from './components/UserSignIn.vue'
import MediaDashboard from './components/MediaDashboard.vue'


Vue.use(LoadScript)
Vue.use(VueRouter)
Vue.use(axios)

const router = new VueRouter({
	routes: [
		{path: '/', name: 'UserSignIn', component: UserSignIn},
		{path: '/media-dashboard', name: 'MediaDashboard', component: MediaDashboard}
	],
	mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
