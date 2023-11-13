import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { GoodsEntity } from './entities/goodsentity';
import { GoodsProxy } from './goodsproxy';
var GoodsRepository = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsRepository, _super);
    function GoodsRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'GoodsRepository';
        _this.paginationInfo = {
            GoodsEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(GoodsProxy, null);
        return _this;
    }
    GoodsRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/hotwave/database/v1.0/goodsform_frm',
            entityType: GoodsEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], GoodsRepository);
    return GoodsRepository;
}(BefRepository));
export { GoodsRepository };
