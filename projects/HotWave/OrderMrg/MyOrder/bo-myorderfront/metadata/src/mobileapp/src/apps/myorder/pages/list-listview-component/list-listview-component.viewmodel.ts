
import { Injector, ViewModel, CommandMethodMeta } from '@farris/mobile-devkit';
import { Observable } from 'rxjs';


export class ListListviewComponentViewModel extends ViewModel {
    public bindingPath = '/';
    public id = 'list-listview-component';

    constructor(injector: Injector){
        super(injector, "list-listview-component");
    }

    @CommandMethodMeta({
        name: 'OpenCardAndEdit',
        params: {
            path: '/MyOrder/card-page-component',
            queryParams: '{ "action": "LoadAndEditForCard", "id":"{DATA~/list-listview-component/id}"}',
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
    public OpenCardAndEdit(commandParam?: any): Observable<any> { return; }

    @CommandMethodMeta({
        name: 'MyOrderCom5a2b',
        params: {
            sendGoods_id: '{DATA~/list-listview-component/id}',
            sendGoods_sendstate: 'Done',
            loadForList_过滤条件: '{UISTATE~/list-page-component/filterState/filters}',
            loadForList_排序条件: ''
        },
        paramDescriptions: {
            sendGoods_id: { type: '' },
            sendGoods_sendstate: { type: '' },
            loadForList_过滤条件: { type: '' },
            loadForList_排序条件: { type: '' }
        }
    })
    public MyOrderCom5a2b(commandParam?: any): Observable<any> { return; }

}