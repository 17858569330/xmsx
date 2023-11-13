
import { Injector, ViewModel, CommandMethodMeta } from '@farris/mobile-devkit';
import { Observable } from 'rxjs';


export class CardPageComponentViewModel extends ViewModel {
    public bindingPath = '/';
    public id = 'card-page-component';

    constructor(injector: Injector){
        super(injector, "card-page-component");
    }

    @CommandMethodMeta({
        name: 'LoadForCard',
        params: {
            action: '{UISTATE~/card-page-component/routerState/queryParams/action}'
        },
        paramDescriptions: {
            action: { type: '' }
        }
    })
    public LoadForCard(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'LoadAndAddForCard',
        params: {
            action: 'addAction'
        },
        paramDescriptions: {
            action: { type: '' }
        }
    })
    public LoadAndAddForCard(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'LoadAndEditForCard',
        params: {
            id: '{UISTATE~/card-page-component/routerState/queryParams/id}',
            action: 'editAction'
        },
        paramDescriptions: {
            id: { type: '' },
            action: { type: '' }
        }
    })
    public LoadAndEditForCard(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'Save',
        params: {
            action: 'viewAction'
        },
        paramDescriptions: {
            action: { type: 'string' }
        }
    })
    public Save(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'Add',
        params: {
            action: 'addAction'
        },
        paramDescriptions: {
            action: { type: 'string' }
        }
    })
    public Add(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'Cancel',
        params: {
            id: '{DATA~/card-page-component/id}',
            action: 'cancelAction'
        },
        paramDescriptions: {
            id: { type: 'string' },
            action: { type: 'string' }
        }
    })
    public Cancel(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'GoBackToList',
        params: {
            path: '/MyOrder/list-page-component',
            queryParams: '{}'
        },
        paramDescriptions: {
            path: { type: '' },
            queryParams: { type: '' }
        }
    })
    public GoBackToList(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'GoBackAndCheck',
        params: {
            params: '{}'
        },
        paramDescriptions: {
            params: { type: '' }
        }
    })
    public GoBackAndCheck(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'LoadCardPage',
        params: {
            commandName: '{UISTATE~/card-page-component/routerState/queryParams/id}',
            id: ''
        },
        paramDescriptions: {
            commandName: { type: '' },
            id: { type: '' }
        }
    })
    public LoadCardPage(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'Edit',
        params: {
            id: '{DATA~/card-page-component/id}',
            action: 'editAction'
        },
        paramDescriptions: {
            id: { type: 'string' },
            action: { type: 'string' }
        }
    })
    public Edit(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'SubmitWithBizDefKey',
        params: {
            dataId: '{DATA~/card-page-component/id}',
            bizDefKey: '',
            id: '{DATA~/card-page-component/id}',
            commandName: 'noop',
            viewModelId: ''
        },
        paramDescriptions: {
            dataId: { type: '' },
            bizDefKey: { type: '' },
            id: { type: '' },
            commandName: { type: '' },
            viewModelId: { type: '' }
        }
    })
    public SubmitWithBizDefKey(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'CancelSubmitWithDataId',
        params: {
            dataId: '{DATA~/card-page-component/id}',
            bizDefKey: '',
            id: '{DATA~/card-page-component/id}',
            commandName: 'noop',
            viewModelId: ''
        },
        paramDescriptions: {
            dataId: { type: '' },
            bizDefKey: { type: '' },
            id: { type: '' },
            commandName: { type: '' },
            viewModelId: { type: '' }
        }
    })
    public CancelSubmitWithDataId(commandParam?: any): Observable<any> { return; }

}