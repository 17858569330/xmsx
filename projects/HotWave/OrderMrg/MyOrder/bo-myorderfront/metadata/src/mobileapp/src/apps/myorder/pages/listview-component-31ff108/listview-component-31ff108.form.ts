
import { ViewModelContext,  FormControl, Form, FormControlPropMeta, BindingType  } from '@farris/mobile-devkit';
import { DateConverter } from "@farris/mobile-vue-adapter";


export class ListviewComponent31ff108Form extends Form {
  constructor(viewModelContext: ViewModelContext) {
    super(viewModelContext);
  }
  @FormControlPropMeta({
    bindingType: BindingType.UIState,
    bindingPath: 'searchState/keyword',
  })
  searchState_keyword: FormControl;
  @FormControlPropMeta({
    bindingType: BindingType.UIState,
    bindingPath: 'listaviewState/refreshLoading',
  })
  listaviewState_refreshLoading: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'goods.goods_GoodsName',
      
    })
    goods_Goods_GoodsName: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'goods.goods_GoodsCode',
      
    })
    goods_Goods_GoodsCode: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'specification',
      
    })
    specification: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'quality',
      
    })
    quality: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'price',
      
    })
    price: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'amount',
      
    })
    amount: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'discount',
      
    })
    discount: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'actualAmount',
      
    })
    actualAmount: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'remark',
      
    })
    remark: FormControl;

}