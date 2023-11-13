
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { PurchaseOrderEntity } from './entities/purchaseorderentity';

import { PurchaseOrderProxy } from './purchaseorderproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/hotwave/stock/v1.0/purchaseorderlist_frm',
    entityType: PurchaseOrderEntity
})
export class PurchaseOrderRepository extends BefRepository<PurchaseOrderEntity> {
    public name = 'PurchaseOrderRepository';

    public proxy: PurchaseOrderProxy;
    public paginationInfo = {
        PurchaseOrderEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(PurchaseOrderProxy, null);
    }
}