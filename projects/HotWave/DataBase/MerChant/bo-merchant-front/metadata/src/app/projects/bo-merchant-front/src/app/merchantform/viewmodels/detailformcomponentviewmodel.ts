
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DetailFormComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    @NgCommand({
        name: 'Edit1',
        params: {
        }
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Save1',
        params: {
        }
    })
    public Save1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Cancel1',
        params: {
        }
    })
    public Cancel1(commandParam?: any): Observable<any> { return; }

}