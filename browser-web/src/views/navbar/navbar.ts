import { Vue, Component, Prop } from 'vue-property-decorator';
import { EventType } from '@/utils/ipc/ipc-event-type';
import { IpcRenderer } from '@/utils/ipc/ipc-renderer';
import { Action, Getter } from 'vuex-class';
// tools
import { AppTypes } from '../../store/types/app-types';

@Component
export default class Home extends Vue {
  @Getter(AppTypes.getters.title)
  title!: string;
  @Action(AppTypes.actions.SET_URL)
  setUrl!: (url: string) => Promise<void>;
  name = '';
  searchWorld = '';
  showMessage = false;
  data: any;

  goSearch() {
    if (this.searchWorld) {
      if (this.searchWorld.indexOf('http://') > -1 || this.searchWorld.indexOf('https://') > -1) {
        this.setUrl(this.searchWorld);
      } else {
        this.setUrl(`https://www.baidu.com/s?wd=${this.searchWorld}`);
      }
    }
    this.$emit('goSearch');
  }

  handleMinimize() {
    IpcRenderer.send(EventType.BASE.WINDOW_MIN);
  }

  handleMaximize() {
    IpcRenderer.send(EventType.BASE.WINDOW_MAX);
  }

  handleClose() {
    IpcRenderer.send(EventType.BASE.APP_EXIT);
  }

  async alyzeWeb() {
    this.$emit('alyzeWeb');
  }

  openDevTools() {
    this.$emit('openDevTools');
  }

  handleCommand(command: string) {
    this.$emit(command);
  }

  goBack() {
    this.$emit('goBack');
  }

  goForward() {
    this.$emit('goForward');
  }
}
