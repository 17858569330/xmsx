
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { GoodsQueryFormFrmEntity } from './entities/goodsqueryformfrmentity';

import { GoodsQueryFormFrmProxy } from './goodsqueryformfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/hotwave/ordermrg/v1.0/goodsqueryform_frm',
    entityType: GoodsQueryFormFrmEntity
})
export class GoodsQueryFormFrmRepository extends BefRepository<GoodsQueryFormFrmEntity> {
    public name = 'GoodsQueryFormFrmRepository';

    public proxy: GoodsQueryFormFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(GoodsQueryFormFrmProxy, null);
    }
}