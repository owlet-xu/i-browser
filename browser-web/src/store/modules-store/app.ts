import Cookies from 'js-cookie';
import { AppTypes } from '../types/app-types';

const app = {
  state: {
    language: Cookies.get('language') || 'en',
    configs: {},
    url: 'https://www.baidu.com/', // 浏览器地址
    title: '' // 浏览的title
  },
  mutations: {
    [AppTypes.mutations.SET_LANGUAGE]: (state: any, language: any) => {
      state.language = language;
      Cookies.set('language', language);
    },
    [AppTypes.mutations.SET_CONFIGS]: (state: any, configs: any) => {
      state.configs = configs;
      Cookies.set('configs', configs);
    },
    [AppTypes.mutations.SET_URL]: (state: any, url: string) => {
      state.url = url;
    },
    [AppTypes.mutations.SET_TITLE]: (state: any, title: string) => {
      state.title = title;
    },
  },
  actions: {
    [AppTypes.actions.setLanguage]({ commit }: any, language: any) {
      commit(AppTypes.mutations.SET_LANGUAGE, language);
    },
    [AppTypes.actions.setConfigs]({ commit }: any, configs: any) {
      commit(AppTypes.mutations.SET_CONFIGS, configs);
    },
    [AppTypes.actions.SET_URL]({ commit }: any, url: string) {
      commit(AppTypes.mutations.SET_URL, url);
    },
    [AppTypes.actions.SET_TITLE]({ commit }: any, title: string) {
      commit(AppTypes.mutations.SET_TITLE, title);
    }
  },
  getters: {
    [AppTypes.getters.configs]: (state: any) => state.configs,
    [AppTypes.getters.language]: (state: any) => state.language,
    [AppTypes.getters.url]: (state: any) => state.url,
    [AppTypes.getters.title]: (state: any) => state.title
  }
};

export default app;
