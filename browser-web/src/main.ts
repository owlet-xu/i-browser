import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/iconfont';
import config from './utils/appconfig';
import i18n from '@/lang';
// import ElectronMixin from './common/mixin/electron-mixin';

// 加载用户主题

config(store).then(() => {
  Vue.use(ElementUI);
  // Vue.mixin(ElectronMixin);
  router.afterEach(() => {});

  new Vue({
    router,
    store,
    i18n,
    render: (h: any) => h(App)
  }).$mount('#app');
});
