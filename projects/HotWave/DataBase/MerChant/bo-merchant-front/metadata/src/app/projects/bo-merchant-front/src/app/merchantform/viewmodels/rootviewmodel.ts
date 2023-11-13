
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { TreeGridComponentViewmodel } from './treegridcomponentviewmodel';

import { DetailFormComponentViewmodel } from './detailformcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'TreeGridComponentViewmodel' : 'treeGridComponentViewmodel',
        'DetailFormComponentViewmodel' : 'detailFormComponentViewmodel'
    }
    public treeGridComponentViewmodel: TreeGridComponentViewmodel;
    public detailFormComponentViewmodel: DetailFormComponentViewmodel;
    @NgCommand({
        name: 'dataImport1',
        params: {
            type: '',
            ruleID: '357abe92-4dd4-49a1-8c8f-792f7d7e5f08',
            option: ' {"importdbRefresh":true}'
        },
        paramDescriptions: {
            type: { type: 'int' },
            ruleID: { type: 'string' },
            option: { type: 'string' }
        }
    })
    public dataImport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'dataExport1',
        params: {
            type: '',
            ruleID: '77d2079a-f302-4446-8fd7-0be2b44b1246',
            option: '   {"selectFilterGridComponent":"data-grid-component"}'
        },
        paramDescriptions: {
            type: { type: 'int' },
            ruleID: { type: 'string' },
            option: { type: 'string' }
        }
    })
    public dataExport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'listDataExport1',
        params: {
            ruleID: '',
            option: ''
        },
        paramDescriptions: {
            ruleID: { type: 'string' },
            option: { type: 'string' }
        }
    })
    public listDataExport1(commandParam?: any): Observable<any> { return; }

}