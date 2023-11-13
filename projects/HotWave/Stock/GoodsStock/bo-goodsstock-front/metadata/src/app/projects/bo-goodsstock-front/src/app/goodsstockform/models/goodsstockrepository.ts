
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { GoodsStockEntity } from './entities/goodsstockentity';

import { GoodsStockProxy } from './goodsstockproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/hotwave/stock/v1.0/goodsstockform_frm',
    entityType: GoodsStockEntity
})
export class GoodsStockRepository extends BefRepository<GoodsStockEntity> {
    public name = 'GoodsStockRepository';

    public proxy: GoodsStockProxy;
    public paginationInfo = {
        GoodsStockEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(GoodsStockProxy, null);
    }
}