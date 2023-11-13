
<template>
<div class="f-form-layout farris-form farris-form-controls-inline" id="card-component-form-e7ea5b4"><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_goods_Goods_GoodsName" v-model="form.goods_Goods_GoodsName.value" label="商品名称" type="text" input-align="right" :error-message="form.goods_Goods_GoodsName.validationResult && form.goods_Goods_GoodsName.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_goods_Goods_GoodsCode" v-model="form.goods_Goods_GoodsCode.value" label="商品编号" type="text" input-align="right" :error-message="form.goods_Goods_GoodsCode.validationResult && form.goods_Goods_GoodsCode.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_specification" v-model="form.specification.value" label="规格型号" type="text" input-align="right" :error-message="form.specification.validationResult && form.specification.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_quality" v-model="form.quality.value" label="数量" type="number" :precision="0" input-align="right" :error-message="form.quality.validationResult && form.quality.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_price" v-model="form.price.value" label="标准单价" type="number" :precision="2" input-align="right" :error-message="form.price.validationResult && form.price.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_amount" v-model="form.amount.value" label="金额" type="number" :precision="2" input-align="right" :error-message="form.amount.validationResult && form.amount.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_discount" v-model="form.discount.value" label="折扣金额" type="number" :precision="2" input-align="right" :error-message="form.discount.validationResult && form.discount.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_actualAmount" v-model="form.actualAmount.value" label="实际结算金额" type="number" :precision="2" input-align="right" :error-message="form.actualAmount.validationResult && form.actualAmount.validationResult.message" error-message-align="right"></fm-input></div><div class="fm-input-wrapper" v-if="true"><fm-input class="col-12 " id="form_remark" v-model="form.remark.value" label="备注" type="text" input-align="right" :error-message="form.remark.validationResult && form.remark.validationResult.message" error-message-align="right"></fm-input></div></div>
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
import {CardComponentAb86420Provider} from "./card-component-ab86420.provider";




export default
{
    name : 'CardComponentAb86420Component',
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
      id: 'card-component-ab86420',
      
      providers: CardComponentAb86420Provider
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
