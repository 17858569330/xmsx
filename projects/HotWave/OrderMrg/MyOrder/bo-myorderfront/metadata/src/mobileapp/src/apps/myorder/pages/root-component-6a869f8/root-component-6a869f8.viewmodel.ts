
import { Injector, ViewModel, CommandMethodMeta } from '@farris/mobile-devkit';
import { Observable } from 'rxjs';


export class RootComponent6a869f8ViewModel extends ViewModel {
    public bindingPath = '/';
    public id = 'root-component-6a869f8';

    constructor(injector: Injector){
        super(injector, "root-component-6a869f8");
    }

    @CommandMethodMeta({
        name: 'LoadPageForChildCard',
        params: {
            commandName: '{UISTATE~/root-component-6a869f8/routerState/queryParams/action}',
            viewModelId: ''
        },
        paramDescriptions: {
            commandName: { type: 'string' },
            viewModelId: { type: 'string' }
        }
    })
    public LoadPageForChildCard(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'LoadAndAddForChildCard',
        params: {
            path: '/orderDetails',
            action: 'addAction'
        },
        paramDescriptions: {
            path: { type: 'string' },
            action: { type: 'string' }
        }
    })
    public LoadAndAddForChildCard(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'LoadAndEditForChildCard',
        params: {
            path: '/orderDetails',
            id: '{UISTATE~/root-component-6a869f8/routerState/queryParams/id}',
            action: 'editAction'
        },
        paramDescriptions: {
            path: { type: 'string' },
            id: { type: 'string' },
            action: { type: 'string' }
        }
    })
    public LoadAndEditForChildCard(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'SaveAndGoBackForChildCard',
        params: {
            childTablePath: '/orderDetails',
            backParams: '{"action":"noop"}'
        },
        paramDescriptions: {
            childTablePath: { type: 'string' },
            backParams: { type: '' }
        }
    })
    public SaveAndGoBackForChildCard(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'GoBackForChildCard',
        params: {
            childTablePath: 'orderDetails',
            backParams: '{"action":"noop"}'
        },
        paramDescriptions: {
            childTablePath: { type: 'string' },
            backParams: { type: '' }
        }
    })
    public GoBackForChildCard(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'Navigate05f8',
        params: {
            path: '/MyOrder/root-component-235c86b',
            queryParams: '{ "action": "LoadAndAddForChildCard"}',
            backParams: '',
            backPath: ''
        },
        paramDescriptions: {
            path: { type: '' },
            queryParams: { type: '' },
            backParams: { type: '' },
            backPath: { type: '' }
        }
    })
    public Navigate05f8(commandParam?: any): Observable<any> { return; }

}