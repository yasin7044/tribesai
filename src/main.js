import Vue from 'vue'
import App from './App.vue'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.config.productionTip = false

// import 'vuesax/dist/vuesax.css' //Vuesax styles
// Vue.use(Vuesax, {
//   // options here
// })
Vue.config.productionTip = false
import router from './router.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
console.log(router)