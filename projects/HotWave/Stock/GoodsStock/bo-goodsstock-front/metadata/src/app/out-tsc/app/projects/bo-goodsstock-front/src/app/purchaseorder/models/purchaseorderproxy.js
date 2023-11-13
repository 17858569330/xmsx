import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var PurchaseOrderProxy = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseOrderProxy, _super);
    function PurchaseOrderProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/hotwave/stock/v1.0/purchaseorder_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    PurchaseOrderProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], PurchaseOrderProxy);
    return PurchaseOrderProxy;
}(BefProxy));
export { PurchaseOrderProxy };
