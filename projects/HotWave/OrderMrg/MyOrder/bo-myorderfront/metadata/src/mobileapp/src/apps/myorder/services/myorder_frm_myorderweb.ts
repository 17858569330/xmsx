import { Injectable } from '@angular/core';
import { ViewModelContext } from '@farris/mobile-devkit';
import { CommandService, BeActionService, BaseDataService, NotifyService } from '@farris/mobile-command-services';
import { tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { BefRepository } from '@farris/mobile-bef';
@Injectable()
export class MyOrderFrmMyOrderWebService extends BaseDataService {
    public beActionService: BeActionService;
    public notifyService: NotifyService;
    constructor(
        public viewModelContext: ViewModelContext
    ) {
        super(viewModelContext);
        this.beActionService = this.getService<BeActionService>(BeActionService);
        this.notifyService = this.getService<NotifyService>(NotifyService);
    }
    sendGoods(id, sendstate) {
        const repsitory = this.viewModelContext.repository as BefRepository<any>;
        const actionUri = 'sendgoods';
        const body = {
            id: id,
            sendstate: sendstate
        }
        return this.beActionService.invokeAction(actionUri, 'PUT', null, null, body).pipe(tap((res) => {
            this.notifyService.info('已确认收货');
        }))
    }
}