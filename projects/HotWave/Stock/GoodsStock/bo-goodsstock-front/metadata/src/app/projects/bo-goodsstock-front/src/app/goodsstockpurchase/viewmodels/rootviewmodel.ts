
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
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Add1',
        params: {
            transitionAction: 'Create'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Edit1',
        params: {
            transitionAction: 'Edit'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Save1',
        params: {
            transitionAction: 'Save'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Save1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Cancel1',
        params: {
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Cancel1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Remove1',
        params: {
            id: '{DATA~/data-grid-component/id}',
            ifSave: '{STATEMACHINE~/renderStates/canEdit}'
        },
        paramDescriptions: {
            id: { type: 'string' },
            ifSave: { type: 'boolean' }
        }
    })
    public Remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelAdd1',
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
    public rootviewmodelAdd1(commandParam?: any): Observable<any> { return; }

}