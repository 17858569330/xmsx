
import { Injector } from '@farris/mobile-devkit';
import { BefRepository, VariablePropMeta } from '@farris/mobile-bef';
import { SaleOrderEntity } from './entities/saleorderentity.entity';

import { SaleOrderProxy } from './model.proxy';

export class ModelRepository extends BefRepository<SaleOrderEntity> {
    public name = 'SaleOrderRepository';

    public apiProxyType = SaleOrderProxy;
    public entityType = SaleOrderEntity;
    public paginationInfo = {
        pageSize: 20
    };
    constructor(injector: Injector) {
        super(injector);
        this.init();
    }
}