
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { MerChantEntity } from './entities/merchantentity';

import { MerChantProxy } from './merchantproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/hotwave/database/v1.0/merchantform_frm',
    entityType: MerChantEntity
})
export class MerChantRepository extends BefRepository<MerChantEntity> {
    public name = 'MerChantRepository';

    public proxy: MerChantProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(MerChantProxy, null);
    }
}