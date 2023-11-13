import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService, Uri } from '@farris/bef';
var GoodsProxy = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsProxy, _super);
    function GoodsProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/hotwave/database/v1.0/goodsform_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    GoodsProxy.prototype.DataImportVMAction = function (dataImportContext) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/dataimportvmaction', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                dataImportContext: dataImportContext,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsProxy.prototype.DataExportVMAction = function (exportContext) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/dataexportvmaction', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                exportContext: exportContext,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], GoodsProxy);
    return GoodsProxy;
}(BefProxy));
export { GoodsProxy };
