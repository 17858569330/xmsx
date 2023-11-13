
<template>
<div class="fm-page fm-page-card" v-if="true" id="root-layout-5af0b0b"><div class="fm-page-header" v-if="true" id="root-header-efe7a15"><fm-navbar title="导航栏" :leftArrow="true" @click-left="GoBackForChildCard" v-if="true"><template #right></template></fm-navbar></div><div class="fm-page-main" v-if="true" id="main-container-a1cac73"><app-cardcomponentab86420></app-cardcomponentab86420></div><div class="fm-page-footer" v-if="true" id="page-footer-container-7145556"><div class="fm-tabbar-style van-tabbar fm-tabbar-style" v-if="true" id="page-tabbar-container-142ba0c"><div class="van-tabbar-item show-left-width" v-if="true" id="button-container-a51d091"><fm-button v-if="true" id="submit-button492787" type="info" :block="true" :round="true" @click="SaveAndGoBackForChildCard">保存</fm-button></div></div></div></div>
</template>
<script>
import {
    recomputable,
    mapBindingStates,
    mapCommandMethods,
    bindListviewExtenderDir,
    bindAttachmentExtenderDir,
    mapProviders,
    LookupMappingService,
    filterData,
    filterMapData,
    beforeCreateByVueAdapter,
    createdByVueAdapter,
    mountedByVueAdapter,
    updatedByVueAdapter,
    beforeUnmountByVueAdapter,
    scrollActivated,
    scrollDeactivated
  } from '@farris/mobile-vue-adapter';
import {RootComponent6a869f8Provider} from "./root-component-6a869f8.provider";


import AppCardComponentAb86420 from "../card-component-ab86420/card-component-ab86420.component.vue";


export default
{
    name : 'RootComponent6a869f8Component',
    provide: mapProviders(),
    data(){
        return {
            url:'',
            lang: localStorage.getItem('languageCode') || "zh-CHS"
        };
    },
    computed: {
        ...mapBindingStates(),
    },
    methods:{
        pageLoad(){this.$viewModel.LoadPageForChild();},
        ...mapCommandMethods(['LoadPageForChildCard','LoadAndAddForChildCard','LoadAndEditForChildCard','SaveAndGoBackForChildCard','GoBackForChildCard','Navigate05f8']),
        goBack() { this.url === document.URL && this.$viewModel.GoBackForChild();},
    },
    components:{
        
    "app-cardcomponentab86420": AppCardComponentAb86420
    },
    beforeCreate(){
        
    // 创建ViewModel
    const viewModelOptions = {
      id: 'root-component-6a869f8',
      
      providers: RootComponent6a869f8Provider
    };
    this.$initPage(viewModelOptions);
        
        
        beforeCreateByVueAdapter && beforeCreateByVueAdapter(this);
        // 初始加载数据
        //this.pageLoad();
        //this.$viewModel.load();
    },
    created(){
        this.pageLoad();
        createdByVueAdapter && createdByVueAdapter(this);
    },
    mounted() {
        
        if (window.history && window.history.pushState) {
            this.url = document.URL
            history.pushState(null, null, document.URL);
            window.addEventListener("popstate", this.goBack, false); //false阻止默认事件
        }
        
        this.$nextTick(function () {
            this.$bindComponentExtenders(this.$refs);
        });
        mountedByVueAdapter && mountedByVueAdapter(this);
    },
    updated() {
        this.$bindComponentExtenders(this.$refs);
        updatedByVueAdapter && updatedByVueAdapter(this);
    },
    
    beforeUnmount() {
        
        window.removeEventListener("popstate", this.goBack, false); //false阻止默认事件
        this.$unbindComponentExtenders(this.$refs);
        beforeUnmountByVueAdapter && beforeUnmountByVueAdapter(this);
    }
}
</script>
<style>

</style>
