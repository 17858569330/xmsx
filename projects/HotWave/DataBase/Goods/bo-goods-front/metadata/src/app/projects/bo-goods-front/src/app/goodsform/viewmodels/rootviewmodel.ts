
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { DataGridComponentViewmodel } from './datagridcomponentviewmodel';

import { DetailFormComponentViewmodel } from './detailformcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'DataGridComponentViewmodel' : 'dataGridComponentViewmodel',
        'DetailFormComponentViewmodel' : 'detailFormComponentViewmodel'
    }
    public dataGridComponentViewmodel: DataGridComponentViewmodel;
    public detailFormComponentViewmodel: DetailFormComponentViewmodel;
    @NgCommand({
        name: 'dataImport1',
        params: {
            type: '',
            ruleID: '4de28998-7ff7-4fc6-9404-6ab36130ff28',
            option: '   {"importdbRefresh":true}'
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
        }
    })
    public dataExport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'listDataExport1',
        params: {
            ruleID: '4de28998-7ff7-4fc6-9404-6ab36130ff28',
            option: ' {"selectFilterGridComponent":"data-grid-component"}'
        },
        paramDescriptions: {
            ruleID: { type: 'string' },
            option: { type: 'string' }
        }
    })
    public listDataExport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelDataExport1',
        params: {
            type: '',
            ruleID: '4de28998-7ff7-4fc6-9404-6ab36130ff28',
            option: '{"selectFilterGridComponent":"data-grid-component"}'
        },
        paramDescriptions: {
            type: { type: 'int' },
            ruleID: { type: 'string' },
            option: { type: 'string' }
        }
    })
    public rootviewmodelDataExport1(commandParam?: any): Observable<any> { return; }

}