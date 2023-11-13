
<template>
<div class="fm-tmpl-list-container" v-if="true" id="list-view-layout"><fm-filter v-if="true" id="query-scheme" ref="query-scheme" :useSearch="true" :fieldConfigs="[{&quot;id&quot;:&quot;96976ac9-3bb4-4663-8f10-887f7a17d914&quot;,&quot;labelCode&quot;:&quot;Merchant.Merchant&quot;,&quot;code&quot;:&quot;Merchant&quot;,&quot;name&quot;:&quot;商户&quot;,&quot;control&quot;:{&quot;controltype&quot;:&quot;help&quot;,&quot;helpId&quot;:&quot;b610c446-71ea-4aed-bb9b-f46ccc45a556&quot;,&quot;uri&quot;:&quot;SaleOrder.merchant&quot;,&quot;idField&quot;:&quot;id&quot;,&quot;valueField&quot;:&quot;id&quot;,&quot;textField&quot;:&quot;merchantName&quot;,&quot;displayType&quot;:&quot;TreeList&quot;,&quot;enableExtendLoadMethod&quot;:false,&quot;enableFullTree&quot;:false,&quot;loadTreeDataType&quot;:&quot;default&quot;,&quot;multiSelect&quot;:false,&quot;enableCascade&quot;:false,&quot;expandLevel&quot;:-1,&quot;nosearch&quot;:false,&quot;pageSize&quot;:20}}]"> </fm-filter><fm-listview class="fm-tmpl-list-with-img-detail fm-tmpl-list-with-border" v-if="true" className="fm-tmpl-list-with-img-detail" ref="listView" :list-data="entityListData" :finished="true" :showFinishedText="false" :loading="uiState['listaviewState']['loadMoreLoading']" :enablePullRefresh="true" :listRefreshing="uiState['listaviewState']['refreshLoading']" :multiple="false" :fill="true" :immediateCheck="false"><template v-slot="props"><div class="fm-bussiness-travel-record-list-item limg-rcon--item" @click="OpenCardAndEdit"><div class="img-detail--item">
    <div class="img-detail--item-content">
        <div class="item-img-round--wrapper">
            <div class="item-img-round--img fm-bg-orange">
                <span class="fm-icon fm-icon-photograph"></span>
            </div>
        </div>
        <div class="img-detail--content">
            <div class="img-detail--header">
                <h6 class="title">{{props.item.orderCode}}</h6>
                <!-- <div class="img-detail--status"> -->
                    <p class="img-detail--info">
                        <span v-if="props.item.sendState ==='UnShipped'"><fm-tag type="warning">未发货</fm-tag></span>
                        <span v-if="props.item.sendState  === 'Shipped'"><fm-tag type="info">已发货</fm-tag></span>
                        <span v-if="props.item.sendState ==='Done'"><fm-tag type="success">已收货</fm-tag></span>
                    </p>
                <!-- </div> -->
            </div>
            <p class="img-detail--info">下单时间：{{props.item.orderTime}}</p>
            <p class="img-detail--info">商户：{{props.item.merchant.merchant_MerchantName}}</p>
            <p class="img-detail--info">折扣优惠：{{props.item.totalDiscounts}}</p>
            <p class="img-detail--info">合计实付：{{props.item.actualPay}}</p>
        </div>
    </div>
    <div class="img-detail--actions">
        <fm-button type="info" round plain :disabled="props.disabled" size="small" @click.stop="MyOrderCom5a2b">确认收货
        </fm-button>
    </div>
</div></div></template></fm-listview></div>
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
import {ListListviewComponentProvider} from "./list-listview-component.provider";




export default
{
    name : 'ListListviewComponentComponent',
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
        
        ...mapCommandMethods(['OpenCardAndEdit','MyOrderCom5a2b']),
        
    },
    components:{
        
    },
    beforeCreate(){
        
    // 创建ViewModel
    const viewModelOptions = {
      id: 'list-listview-component',
      
      providers: ListListviewComponentProvider
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
