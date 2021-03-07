import Vue from "vue";
import App from "./App.vue";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css"; //Material Icons

Vue.config.productionTip = false;

// import 'vuesax/dist/vuesax.css' //Vuesax styles
// Vue.use(Vuesax, {
//   // options here
// })
Vue.config.productionTip = false;
import router from "./router.js";
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
console.log(router);
Vue.mixin({
  methods: {
    showSuccessMessage(title, success_text, color) {
      this.$vs.notify({
        title,
        text: success_text,
        iconPack: "feather",
        icon: "icon-alert-circle",
        color,
        time: 3000,
      });
    },
  },
});
