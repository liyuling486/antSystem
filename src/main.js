// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import less from 'less'
import 'ant-design-vue/dist/antd.css'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(less)
Vue.prototype.changeTheme = function(theme) {
  import('../static/temple/' + theme + '/style.css');
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
