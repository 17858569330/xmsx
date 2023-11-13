
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class TreeGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    @NgCommand({
        name: 'LoadTree1',
        params: {
        }
    })
    public LoadTree1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadCard1',
        params: {
        }
    })
    public LoadCard1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'AddSibling1',
        params: {
        }
    })
    public AddSibling1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'AddChild1',
        params: {
        }
    })
    public AddChild1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Remove1',
        params: {
        }
    })
    public Remove1(commandParam?: any): Observable<any> { return; }

}