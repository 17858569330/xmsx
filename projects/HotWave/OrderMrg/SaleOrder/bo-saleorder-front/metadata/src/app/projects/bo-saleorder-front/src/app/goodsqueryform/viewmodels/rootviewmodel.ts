
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    @NgCommand({
        name: 'Close1',
        params: {
            url: '',
            params: ''
        }
    })
    public Close1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Load1',
        params: {
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'filterQDP1',
        params: {
            queryId: '680c07a4-9a46-41a9-aa94-092aeca38c6c',
            filterCondition: ''
        },
        paramDescriptions: {
            queryId: { type: 'string' },
            filterCondition: { type: 'string' }
        }
    })
    public filterQDP1(commandParam?: any): Observable<any> { return; }

}