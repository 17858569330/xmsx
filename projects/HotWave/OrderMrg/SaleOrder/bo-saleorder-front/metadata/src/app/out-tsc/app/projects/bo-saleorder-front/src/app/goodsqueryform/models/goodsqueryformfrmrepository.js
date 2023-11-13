import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { GoodsQueryFormFrmEntity } from './entities/goodsqueryformfrmentity';
import { GoodsQueryFormFrmProxy } from './goodsqueryformfrmproxy';
var GoodsQueryFormFrmRepository = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsQueryFormFrmRepository, _super);
    function GoodsQueryFormFrmRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'GoodsQueryFormFrmRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(GoodsQueryFormFrmProxy, null);
        return _this;
    }
    GoodsQueryFormFrmRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/hotwave/ordermrg/v1.0/goodsqueryform_frm',
            entityType: GoodsQueryFormFrmEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], GoodsQueryFormFrmRepository);
    return GoodsQueryFormFrmRepository;
}(BefRepository));
export { GoodsQueryFormFrmRepository };
