
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
            transitionAction: 'Save',
            commandName: 'Save1',
            frameId: 'data-grid-component',
            successMsg: ''
        },
        paramDescriptions: {
            transitionAction: { type: 'string' },
            commandName: { type: 'string' },
            frameId: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public Save1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Cancel1',
        params: {
            transitionAction: 'Cancel',
            loadCmdName: '',
            loadCmdFrameId: ''
        },
        paramDescriptions: {
            transitionAction: { type: 'string' },
            loadCmdName: { type: 'string' },
            loadCmdFrameId: { type: 'string' }
        }
    })
    public Cancel1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Remove1',
        params: {
            id: '{DATA~/data-grid-component/id}',
            ifSave: '{STATEMACHINE~/renderStates/canEdit}',
            refreshCommandName: '',
            refreshCommandFrameId: '',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            ifSave: { type: 'boolean' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public Remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelbatchAppend1',
        params: {
            frameId: '#{data-grid-component}',
            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
            transitAction: 'Edit'
        },
        paramDescriptions: {
            frameId: { type: 'string' },
            mapFields: { type: 'string' },
            transitAction: { type: 'string' }
        }
    })
    public rootviewmodelbatchAppend1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelopenHiddenHelp1',
        params: {
            helpId: 'helpId'
        },
        paramDescriptions: {
            helpId: { type: 'string' }
        }
    })
    public rootviewmodelopenHiddenHelp1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelbatchAppend2',
        params: {
            frameId: '#{data-grid-component}',
            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
            transitAction: 'Create'
        },
        paramDescriptions: {
            frameId: { type: 'string' },
            mapFields: { type: 'string' },
            transitAction: { type: 'string' }
        }
    })
    public rootviewmodelbatchAppend2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelSave1',
        params: {
            transitionAction: 'Save',
            commandName: '',
            frameId: '',
            successMsg: ''
        },
        paramDescriptions: {
            transitionAction: { type: 'string' },
            commandName: { type: 'string' },
            frameId: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public rootviewmodelSave1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelbatchAppend3',
        params: {
            frameId: '#{data-grid-component}',
            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
            transitAction: 'Create'
        },
        paramDescriptions: {
            frameId: { type: 'string' },
            mapFields: { type: 'string' },
            transitAction: { type: 'string' }
        }
    })
    public rootviewmodelbatchAppend3(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelbatchAppend4',
        params: {
            frameId: '#{data-grid-component}',
            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
            transitAction: 'Create'
        },
        paramDescriptions: {
            frameId: { type: 'string' },
            mapFields: { type: 'string' },
            transitAction: { type: 'string' }
        }
    })
    public rootviewmodelbatchAppend4(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelbatchAppend5',
        params: {
            frameId: '#{data-grid-component}',
            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
            transitAction: 'Create'
        },
        paramDescriptions: {
            frameId: { type: 'string' },
            mapFields: { type: 'string' },
            transitAction: { type: 'string' }
        }
    })
    public rootviewmodelbatchAppend5(commandParam?: any): Observable<any> { return; }

}