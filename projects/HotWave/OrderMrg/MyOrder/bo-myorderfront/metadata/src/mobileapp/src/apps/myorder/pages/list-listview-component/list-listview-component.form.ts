
import { ViewModelContext,  FormControl, Form, FormControlPropMeta, BindingType  } from '@farris/mobile-devkit';
import { DateConverter } from "@farris/mobile-vue-adapter";


export class ListListviewComponentForm extends Form {
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
      bindingPath: 'merchant.merchant_MerchantName',
      
    })
    merchant_Merchant_MerchantName: FormControl;

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

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'payMethod',
      
    })
    payMethod: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'orderPerson.orderPerson_name',
      
    })
    orderPerson_OrderPerson_name: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'telephone',
      
    })
    telephone: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'sendState',
      
    })
    sendState: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'totalPrice',
      
    })
    totalPrice: FormControl;

  @FormControlPropMeta({
      bindingType: BindingType.EntityState,
      bindingPath: 'actualPay',
      
    })
    actualPay: FormControl;

}