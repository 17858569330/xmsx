
<template>
<div class="fm-page fm-page-card" v-if="true" id="root-layout-card"><div class="fm-page-header" v-if="true" id="page-header-main-card"><fm-navbar title="卡片标题" :leftArrow="true" @click-left="GoBackAndCheck" v-if="true"><template #right><fm-popover ref="popover" :offset="{top:0, left:7}"><fm-icon name="other"></fm-icon><template #content><div class="fm-popover-item" v-on:click="Add" v-if="true"><div class="fm-popover-item-container"><div class="fm-popover-item-content">新增</div></div></div><div class="fm-popover-item" v-on:click="Edit" v-if="true"><div class="fm-popover-item-container"><div class="fm-popover-item-content">编辑</div></div></div><div class="fm-popover-item" v-on:click="Cancel" v-if="true"><div class="fm-popover-item-container"><div class="fm-popover-item-content">取消</div></div></div></template></fm-popover></template></fm-navbar></div><div class="fm-page-main" v-if="true" id="main-container"><app-cardformcomponent></app-cardformcomponent><div class="fm-tmpl-struct-wrapper" v-if="true" id="section-02b50d2"><div class="fm-tmpl-section fm-tmpl-section-form"><div class="fm-tmpl-section-header"><div class="fm-title"><span class="fm-title-text"></span></div></div><app-listviewcomponent31ff108></app-listviewcomponent31ff108>  <div class="fm-card-footer"><fm-button type="info" block plain noBorder className="fm-btn-with-icon" @click.stop="Navigate05f8"><span class="fm-icon fm-icon-addbutton fm-btn-icon"></span><span class="fm-btn-text">新增</span></fm-button></div></div></div></div><div class="fm-page-footer" v-if="true" id="page-footer-container"><div class="fm-tabbar-style van-tabbar fm-tabbar-style" v-if="true" id="page-tabbar-container"><div class="van-tabbar-item show-left-width" v-if="true" id="button-container"><fm-button v-if="true" id="submit-buttonded3c6" type="info" :block="true" :round="true" @click="Save">保存</fm-button></div></div></div></div>
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
import {CardPageComponentProvider} from "./card-page-component.provider";


import AppCardFormComponent from "../card-form-component/card-form-component.component.vue";
import AppListviewComponent31ff108 from "../listview-component-31ff108/listview-component-31ff108.component.vue";


export default
{
    name : 'CardPageComponentComponent',
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
        pageLoad(){this.$viewModel.LoadForCard();},
        ...mapCommandMethods(['LoadForCard','LoadAndAddForCard','LoadAndEditForCard','Save','Add','Cancel','GoBackToList','GoBackAndCheck','LoadCardPage','Edit','SubmitWithBizDefKey','CancelSubmitWithDataId']),
        goBack() { this.url === document.URL && this.$viewModel.GoBackAndCheck();},
    },
    components:{
        
    "app-cardformcomponent": AppCardFormComponent,
    "app-listviewcomponent31ff108": AppListviewComponent31ff108
    },
    beforeCreate(){
        
    // 创建ViewModel
    const viewModelOptions = {
      id: 'card-page-component',
      
      providers: CardPageComponentProvider
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
