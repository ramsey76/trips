import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;

Vue.use(Vuetify)
 
const opts = {
  theme: {
    themes: {
      light: {
        primary: '#9c27b0',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        warning: '#9E9E9E',
        info: '#9e9e9e',
        success: '#9e9e9e'
      },
    },
  },
}

new Vue({
  router,
  store,
  render: (h) => h(App),
  vuetify: new Vuetify(opts),
}).$mount('#app');
