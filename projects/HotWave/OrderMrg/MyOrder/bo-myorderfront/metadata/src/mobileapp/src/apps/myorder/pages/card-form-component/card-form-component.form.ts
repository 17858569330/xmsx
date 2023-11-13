
import { ViewModelContext,  FormControl, Form, FormControlPropMeta, BindingType  } from '@farris/mobile-devkit';
import { DateConverter } from "@farris/mobile-vue-adapter";


export class CardFormComponentForm extends Form {
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
      bindingPath: 'orderCode',
      
    })
    orderCode: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'merchant.merchant_MerchantCode',
      
    })
    merchant_Merchant_MerchantCode: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'orderTime',
      
    })
    orderTime: FormControl;

}