
import { Injector, ViewModel, CommandMethodMeta } from '@farris/mobile-devkit';
import { Observable } from 'rxjs';


export class CardFormComponentViewModel extends ViewModel {
    public bindingPath = '/';
    public id = 'card-form-component';

    constructor(injector: Injector){
        super(injector, "card-form-component");
    }

}