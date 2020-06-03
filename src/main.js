import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'
import './assets/css/sb-admin-2.min.css'
// import './assets/vendor/jquery-easing/jquery.easing.min.js'
// import './assets/js/sb-admin-2.min.js'
import './assets/vendor/fontawesome-free/css/all.min.css'
// import './assets/vendor/chart.js/Chart.min.js'
// import './assets/vendor/js/demo/chart-area-demo.js'
import axios from 'axios'
import VueSession from 'vue-session'
import LoadScript from 'vue-plugin-load-script';
import UserSignIn from './components/UserSignIn.vue'
import MediaDashboard from './components/MediaDashboard.vue'
import MediaAdminActivities from './components/MediaAdminActivities.vue'
import MediaCreateAdmins from './components/MediaCreateAdmins.vue'
import MediaViewAdmins from './components/MediaViewAdmins.vue'
import MediaDailyReports from './components/MediaDailyReports.vue'
import MediaGeneralReports from './components/MediaGeneralReports.vue'
import MediaRateCards from './components/MediaRateCards.vue'
import MediaViewCards from './components/MediaViewCards.vue'
import MediaSubscriptions from './components/MediaSubscriptions.vue'
import MediaTransactions from './components/MediaTransactions.vue'


Vue.use(LoadScript)
Vue.use(VueRouter)
Vue.use(VueSession)
Vue.use(axios)

const router = new VueRouter({
	routes: [
		{path: '/', name: 'UserSignIn', component: UserSignIn},
		{path: '/media-dashboard', name: 'MediaDashboard', component: MediaDashboard},
		{path: '/Media/AdminActivities', name: 'MediaAdminActivities', component: MediaAdminActivities},
		{path: '/Media/CreateAdmins', name: 'MediaCreateAdmins', component: MediaCreateAdmins},
		{path: '/Media/ViewAdmins', name: 'MediaViewAdmins', component: MediaViewAdmins},
		{path: '/Media/DailyReports', name: 'MediaDailyReports', component: MediaDailyReports},
		{path: '/Media/GeneralReports', name: 'MediaGeneralReports', component: MediaGeneralReports},
		{path: '/Media/RateCards', name: 'MediaRateCards', component: MediaRateCards},
		{path: '/Media/ViewCards', name: 'MediaViewCards', component: MediaViewCards},
		{path: '/Media/Subscriptions', name: 'MediaSubscriptions', component: MediaSubscriptions},
		{path: '/Media/Transactions', name: 'MediaTransactions', component: MediaTransactions}
	],
	mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
