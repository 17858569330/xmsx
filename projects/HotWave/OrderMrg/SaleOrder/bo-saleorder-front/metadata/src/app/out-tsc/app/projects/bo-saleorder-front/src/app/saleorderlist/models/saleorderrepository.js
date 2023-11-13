import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { SaleOrderEntity } from './entities/saleorderentity';
import { SaleOrderProxy } from './saleorderproxy';
var SaleOrderRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SaleOrderRepository, _super);
    function SaleOrderRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'SaleOrderRepository';
        _this.paginationInfo = {
            SaleOrderEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(SaleOrderProxy, null);
        return _this;
    }
    SaleOrderRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/hotwave/ordermrg/v1.0/saleorderlist_frm',
            entityType: SaleOrderEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], SaleOrderRepository);
    return SaleOrderRepository;
}(BefRepository));
export { SaleOrderRepository };
