import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { StaffEntity } from './entities/staffentity';
import { StaffProxy } from './staffproxy';
var StaffRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StaffRepository, _super);
    function StaffRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'StaffRepository';
        _this.paginationInfo = {
            StaffEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(StaffProxy, null);
        return _this;
    }
    StaffRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/hotwave/database/v1.0/staffform_frm',
            entityType: StaffEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], StaffRepository);
    return StaffRepository;
}(BefRepository));
export { StaffRepository };
