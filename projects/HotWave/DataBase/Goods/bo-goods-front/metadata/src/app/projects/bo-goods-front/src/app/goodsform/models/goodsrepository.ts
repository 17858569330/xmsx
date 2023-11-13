
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { GoodsEntity } from './entities/goodsentity';

import { GoodsProxy } from './goodsproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/hotwave/database/v1.0/goodsform_frm',
    entityType: GoodsEntity
})
export class GoodsRepository extends BefRepository<GoodsEntity> {
    public name = 'GoodsRepository';

    public proxy: GoodsProxy;
    public paginationInfo = {
        GoodsEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(GoodsProxy, null);
    }
}