

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module 'vue/types/vue' {
  import { App, AppOptions, ViewModel, ViewModelOptions } from '@farris/mobile-devkit';

  interface Vue {

    $app: App;

    $viewModel: ViewModel;

    $createApp(options: AppOptions): void;

    $getApp(): App;

    $createViewModel(options: ViewModelOptions): void;

    $getViewModel(): ViewModel;

    [key: string]:any;

  }

}


