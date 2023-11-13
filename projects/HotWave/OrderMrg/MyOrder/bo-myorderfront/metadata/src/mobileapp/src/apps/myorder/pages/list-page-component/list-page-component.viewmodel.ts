
import { Injector, ViewModel, CommandMethodMeta } from '@farris/mobile-devkit';
import { Observable } from 'rxjs';


export class ListPageComponentViewModel extends ViewModel {
    public bindingPath = '/';
    public id = 'list-page-component';

    constructor(injector: Injector){
        super(injector, "list-page-component");
    }

    @CommandMethodMeta({
        name: 'LoadForList',
        params: {
            filters: '[]',
            sorts: '[]'
        },
        paramDescriptions: {
            filters: { type: '' },
            sorts: { type: '' }
        }
    })
    public LoadForList(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'OpenCardAndAdd',
        params: {
            path: '/MyOrder/card-page-component',
            queryParams: '{ "action": "LoadAndAddForCard" }'
        },
        paramDescriptions: {
            path: { type: '' },
            queryParams: { type: '' }
        }
    })
    public OpenCardAndAdd(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'RemoveById',
        params: {
            id: '{DATA~/list-listview-component/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public RemoveById(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'LoadListPage',
        params: {
            commandName: 'LoadForList',
            id: ''
        },
        paramDescriptions: {
            commandName: { type: '' },
            id: { type: '' }
        }
    })
    public LoadListPage(commandParam?: any): Observable<any> { return; }

}