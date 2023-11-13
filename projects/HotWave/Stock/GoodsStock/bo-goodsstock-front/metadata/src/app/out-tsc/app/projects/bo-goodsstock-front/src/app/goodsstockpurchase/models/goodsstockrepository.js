import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { GoodsStockEntity } from './entities/goodsstockentity';
import { GoodsStockProxy } from './goodsstockproxy';
var GoodsStockRepository = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsStockRepository, _super);
    function GoodsStockRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'GoodsStockRepository';
        _this.paginationInfo = {
            GoodsStockEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(GoodsStockProxy, null);
        return _this;
    }
    GoodsStockRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/hotwave/stock/v1.0/goodsstockpurchase_frm',
            entityType: GoodsStockEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], GoodsStockRepository);
    return GoodsStockRepository;
}(BefRepository));
export { GoodsStockRepository };
