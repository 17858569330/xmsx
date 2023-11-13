import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var SaleOrderProxy = /** @class */ (function (_super) {
    tslib_1.__extends(SaleOrderProxy, _super);
    function SaleOrderProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/hotwave/ordermrg/v1.0/saleordercarddemo1_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    SaleOrderProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], SaleOrderProxy);
    return SaleOrderProxy;
}(BefProxy));
export { SaleOrderProxy };
