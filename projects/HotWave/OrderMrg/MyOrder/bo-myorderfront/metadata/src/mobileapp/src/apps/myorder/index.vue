
<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { AppOptions, FORM_PATH_TOKEN, VALIDATION_RULE_TOKEN } from '@farris/mobile-devkit';
import { FrameworkSessionService } from '@farris/mobile-bef';
import { COMMAND_SERVICES_APP_PROVIDERS, ROUTER_INSTANCE_TOKEN } from '@farris/mobile-command-services';
import { DevkitPlugin } from '@farris/mobile-vue-adapter';
import { ModelProviders } from './models/model.provider';
import { validationRule } from './validation';


const lang = { "zh-CHS": undefined};



export default{
    name: 'myorder',
    components:{},
    data() {
      return {
        transitionName: '',
      };
    },
    watch: {
      $route(to, from) {
        if (to.query.routeType === 'Back') {
          this.transitionName = 'fm-slide-out';
        } else if (to.query.routeType === 'Forward') {
          this.transitionName = 'fm-slide-in';
        } else {
          this.transitionName = '';
        }
      },
    },
    beforeCreate(){
      const appOptions = {
        id: 'myorder',
        providers: [
          ...ModelProviders,
          { provide: FrameworkSessionService, useClass: FrameworkSessionService, deps: []},
          { provide: ROUTER_INSTANCE_TOKEN, useValue: this.$router },
          
          
          { provide: VALIDATION_RULE_TOKEN, useValue: validationRule},
          ...COMMAND_SERVICES_APP_PROVIDERS
        ]
      };
      this.$createApp(appOptions);
    }
};
</script>
