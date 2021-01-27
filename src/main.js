import Vue from 'vue'
import Vuelidate from 'vuelidate'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import messagePlugin from './utils/messages.plugin'
import Loader from './components/app/Loader.vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyArimJRQ9vWCcx5WifdYB9MUhHRBQHvdp8',
  authDomain: 'mypro-7b350.firebaseapp.com',
  projectId: 'mypro-7b350',
  storageBucket: 'mypro-7b350.appspot.com',
  messagingSenderId: '191559709139',
  appId: '1:191559709139:web:7d5f31459ee69fa3603f26'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
