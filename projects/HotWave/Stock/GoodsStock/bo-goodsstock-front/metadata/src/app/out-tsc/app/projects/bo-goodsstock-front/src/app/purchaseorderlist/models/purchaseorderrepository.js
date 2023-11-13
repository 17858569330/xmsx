import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { PurchaseOrderEntity } from './entities/purchaseorderentity';
import { PurchaseOrderProxy } from './purchaseorderproxy';
var PurchaseOrderRepository = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseOrderRepository, _super);
    function PurchaseOrderRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'PurchaseOrderRepository';
        _this.paginationInfo = {
            PurchaseOrderEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(PurchaseOrderProxy, null);
        return _this;
    }
    PurchaseOrderRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/hotwave/stock/v1.0/purchaseorderlist_frm',
            entityType: PurchaseOrderEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], PurchaseOrderRepository);
    return PurchaseOrderRepository;
}(BefRepository));
export { PurchaseOrderRepository };
