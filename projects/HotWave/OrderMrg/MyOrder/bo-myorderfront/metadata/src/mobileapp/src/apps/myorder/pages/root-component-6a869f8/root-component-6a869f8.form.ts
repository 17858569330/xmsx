
import { ViewModelContext,  FormControl, Form, FormControlPropMeta, BindingType  } from '@farris/mobile-devkit';
import { DateConverter } from "@farris/mobile-vue-adapter";


export class RootComponent6a869f8Form extends Form {
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

}