import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { MerChantEntity } from './entities/merchantentity';
import { MerChantProxy } from './merchantproxy';
var MerChantRepository = /** @class */ (function (_super) {
    tslib_1.__extends(MerChantRepository, _super);
    function MerChantRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'MerChantRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(MerChantProxy, null);
        return _this;
    }
    MerChantRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/hotwave/database/v1.0/merchantform_frm',
            entityType: MerChantEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], MerChantRepository);
    return MerChantRepository;
}(BefRepository));
export { MerChantRepository };
