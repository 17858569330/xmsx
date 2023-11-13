
<template>
<fm-listview class="fm-tmpl-list-with-img-detail" v-if="true" className="fm-tmpl-list-with-img-detail" ref="listview-0e54c93" :list-data="entityListData" :finished="true" :showFinishedText="false" :loading="uiState['listaviewState']['loadMoreLoading']" :enablePullRefresh="true" :listRefreshing="uiState['listaviewState']['refreshLoading']" :multiple="false" :immediateCheck="false"><template v-slot="props"><div class="fm-bussiness-travel-record-list-item limg-rcon--item"><div class="img-detail--item">
    <div class="img-detail--item-content">
        <div class="item-img-round--wrapper">
            <div class="item-img-round--img fm-bg-orange">
                <span class="fm-icon fm-icon-photograph"></span>
            </div>
        </div>
        <div class="img-detail--content">
            <div class="img-detail--header">
                <h6 class="title">{{props.item.goods.goods_GoodsName}}</h6>
                <span class="time">详情</span>
            </div>
            <p class="img-detail--info">规格型号：{{props.item.specification}}</p>
            <p class="img-detail--info">数量：{{props.item.quality}}</p>
            <p class="img-detail--info">单价：{{props.item.price}}</p>
            <p class="img-detail--info">金额：{{props.item.amount}}</p>
        </div>
    </div>
</div></div></template></fm-listview>
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
import {ListviewComponent31ff108Provider} from "./listview-component-31ff108.provider";




export default
{
    name : 'ListviewComponent31ff108Component',
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
        
        ...mapCommandMethods([]),
        
    },
    components:{
        
    },
    beforeCreate(){
        
    // 创建ViewModel
    const viewModelOptions = {
      id: 'listview-component-31ff108',
      
      providers: ListviewComponent31ff108Provider
    };
    this.$initPage(viewModelOptions);
        
        
        beforeCreateByVueAdapter && beforeCreateByVueAdapter(this);
        // 初始加载数据
        //this.pageLoad();
        //this.$viewModel.load();
    },
    created(){
        
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
        
        
        this.$unbindComponentExtenders(this.$refs);
        beforeUnmountByVueAdapter && beforeUnmountByVueAdapter(this);
    }
}
</script>
<style>

</style>
