
<template>
<div class="fm-edit-input-list" id="detail-form-layout"><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_orderCode" v-model="form.orderCode.value" label="订单编号" type="text" input-align="right" :error-message="form.orderCode.validationResult && form.orderCode.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_merchant_Merchant_MerchantCode" v-model="form.merchant_Merchant_MerchantCode.value" label="商户编号" type="text" input-align="right" :error-message="form.merchant_Merchant_MerchantCode.validationResult && form.merchant_Merchant_MerchantCode.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_orderTime" v-model="form.orderTime.value" label="下单时间" type="text" input-align="right" :error-message="form.orderTime.validationResult && form.orderTime.validationResult.message" error-message-align="right"></fm-input></div></div>
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
import {CardFormComponentProvider} from "./card-form-component.provider";




export default
{
    name : 'CardFormComponentComponent',
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
      id: 'card-form-component',
      
      providers: CardFormComponentProvider
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
