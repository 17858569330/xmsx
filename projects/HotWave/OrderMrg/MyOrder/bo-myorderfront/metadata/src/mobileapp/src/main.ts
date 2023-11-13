import { AppCreator } from '@farris/mobile-vue-adapter';
import vant from "vant";
import App from './app.vue'
import router from './router'
import FarrisMobileUI from '@farris/mobile-ui';
import FarrisMobileBusinessUI from '@farris/mobile-business-ui';

const app = AppCreator.createApp(App);
app.use(router).use(vant).use(FarrisMobileUI).use(FarrisMobileBusinessUI)
app.mount('#app')