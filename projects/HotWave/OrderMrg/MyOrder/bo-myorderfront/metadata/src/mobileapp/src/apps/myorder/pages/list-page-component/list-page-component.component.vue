
<template>
<div class="fm-page fm-page-listview" v-if="true" id="root-layout-listview"><div class="fm-page-header" v-if="true" id="page-header-card"><fm-navbar title="主表列表" :leftArrow="true" v-if="true"><template #right><fm-popover ref="popover" :offset="{top:0, left:7}"><fm-icon name="other"></fm-icon><template #content><div class="fm-popover-item" v-on:click="OpenCardAndAdd" v-if="true"><div class="fm-popover-item-container"><div class="fm-popover-item-content">新增</div></div></div></template></fm-popover></template></fm-navbar></div><div class="fm-page-main" v-if="true" id="main-container-list"><app-listlistviewcomponent></app-listlistviewcomponent></div></div>
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
import {ListPageComponentProvider} from "./list-page-component.provider";


import AppListListviewComponent from "../list-listview-component/list-listview-component.component.vue";


export default
{
    name : 'ListPageComponentComponent',
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
        pageLoad(){this.$viewModel.LoadListPage();},
        ...mapCommandMethods(['LoadForList','OpenCardAndAdd','RemoveById','LoadListPage']),
        
    },
    components:{
        
    "app-listlistviewcomponent": AppListListviewComponent
    },
    beforeCreate(){
        
    // 创建ViewModel
    const viewModelOptions = {
      id: 'list-page-component',
      
      providers: ListPageComponentProvider
    };
    this.$initPage(viewModelOptions);
        this.$app.context.eventBus.subscribe("list-page-component",(event) => {if(event['type'] === 'LoadData'){this.$viewModel.LoadForList();}});
        
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
        this.$app.context.eventBus.unsubscribe("list-page-component"),
        
        this.$unbindComponentExtenders(this.$refs);
        beforeUnmountByVueAdapter && beforeUnmountByVueAdapter(this);
    }
}
</script>
<style>

</style>
