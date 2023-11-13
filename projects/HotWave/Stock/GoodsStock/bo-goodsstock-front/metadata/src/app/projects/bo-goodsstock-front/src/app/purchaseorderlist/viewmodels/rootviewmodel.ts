
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { DataGridComponentViewmodel } from './datagridcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'DataGridComponentViewmodel' : 'dataGridComponentViewmodel'
    }
    public dataGridComponentViewmodel: DataGridComponentViewmodel;
    @NgCommand({
        name: 'Load1',
        params: {
            filter: '',
            sort: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' }
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Search1',
        params: {
            filter: '',
            sort: '',
            pageSize: '',
            pageIndex: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' },
            pageSize: { type: 'int' },
            pageIndex: { type: 'int' }
        }
    })
    public Search1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'RemoveRows1',
        params: {
            ids: '{UISTATE~/data-grid-component/ids}'
        },
        paramDescriptions: {
            ids: { type: 'decimal' }
        }
    })
    public RemoveRows1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Add1',
        params: {
            url: '4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e',
            params: '{"action":"LoadAndAdd1"}',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public Add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'View1',
        params: {
            url: '4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e',
            params: '{"action":"LoadAndView1", "id":"{DATA~/data-grid-component/id}"}',
            idToView: '{DATA~/data-grid-component/id}',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToView: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public View1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Edit1',
        params: {
            url: '4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e',
            params: '{"action":"LoadAndEdit1", "id":"{DATA~/data-grid-component/id}"}',
            idToEdit: '{DATA~/data-grid-component/id}',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToEdit: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Remove1',
        params: {
            id: '{DATA~/data-grid-component/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public Remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Filter1',
        params: {
            filter: '{UISTATE~/root-component/originalFilterConditionList}',
            sort: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' }
        }
    })
    public Filter1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'submitWithBizDefKey1',
        params: {
            dataId: '{DATA~/data-grid-component/id}',
            bizDefKey: '42c8a499-d14a-4d67-b595-3d796ef5c54f',
            action: ''
        },
        paramDescriptions: {
            dataId: { type: 'string' },
            bizDefKey: { type: 'string' },
            action: { type: 'string' }
        }
    })
    public submitWithBizDefKey1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'cancelSubmitWithDataId1',
        params: {
            dataId: '{DATA~/data-grid-component/id}',
            bizDefKey: '',
            action: ''
        },
        paramDescriptions: {
            dataId: { type: 'string' },
            bizDefKey: { type: 'string' },
            action: { type: 'string' }
        }
    })
    public cancelSubmitWithDataId1(commandParam?: any): Observable<any> { return; }

}