
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { SaleOrderEntity } from './entities/saleorderentity';

import { SaleOrderProxy } from './saleorderproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/hotwave/ordermrg/v1.0/saleordercarddemo1_frm',
    entityType: SaleOrderEntity
})
export class SaleOrderRepository extends BefRepository<SaleOrderEntity> {
    public name = 'SaleOrderRepository';

    public proxy: SaleOrderProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(SaleOrderProxy, null);
    }
}