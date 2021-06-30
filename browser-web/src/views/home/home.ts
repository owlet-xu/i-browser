import { Vue, Component, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { WebviewTag } from 'electron';
// tools
import { AppTypes } from '../../store/types/app-types';
import Navbar from '../navbar/navbar.vue';
import { getInjectjs } from '@/utils/injectjs';

@Component({
  components: {
    Navbar
  }
})
export default class Home extends Vue {
  @Action(AppTypes.actions.SET_URL)
  setUrl!: (url: string) => Promise<void>;
  @Action(AppTypes.actions.SET_TITLE)
  setTitle!: (title: string) => Promise<void>;
  @Getter(AppTypes.getters.url)
  url!: string;

  webview!: WebviewTag;
  data: any; // 分析的结果
  showMessage = false;
  mounted() {
    console.log(this.url, '-----url');
    this.webview = this.$refs['myWebView'] as WebviewTag;
    this.webview.addEventListener('new-window', (e: any) => {
      this.setUrl(e.url);
      console.log(this.url, '-----url');
    });
    this.webview.addEventListener('did-finish-load', (e: any) => {
      this.setTitle(this.webview.getTitle());
    });
    this.webview.addEventListener('dom-ready', () => { });
  }

  /**
   * 搜索网址，文字
   */
  goSearch() {
    this.webview.loadURL(this.url);
  }

  /**
   * 分析网页
   */
  async alyzeWeb() {
    this.webview.openDevTools();
    const jsStr = await getInjectjs('./injectjs/inject.js');
    this.webview.executeJavaScript(jsStr);
    this.webview.executeJavaScript('baiduApi.getSearchContent()', false, (res: any) => {
      this.data = res;
      this.showMessage = true;
      console.log(res);
    });
  }

  goBack() {
    this.webview.goBack();
  }

  goForward() {
    this.webview.goForward();
  }

}
