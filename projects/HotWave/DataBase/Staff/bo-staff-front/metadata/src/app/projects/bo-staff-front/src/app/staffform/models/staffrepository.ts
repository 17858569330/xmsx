
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { StaffEntity } from './entities/staffentity';

import { StaffProxy } from './staffproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/hotwave/database/v1.0/staffform_frm',
    entityType: StaffEntity
})
export class StaffRepository extends BefRepository<StaffEntity> {
    public name = 'StaffRepository';

    public proxy: StaffProxy;
    public paginationInfo = {
        StaffEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(StaffProxy, null);
    }
}