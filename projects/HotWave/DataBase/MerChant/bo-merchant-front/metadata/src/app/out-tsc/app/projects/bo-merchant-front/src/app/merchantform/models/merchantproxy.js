import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService, Uri } from '@farris/bef';
var MerChantProxy = /** @class */ (function (_super) {
    tslib_1.__extends(MerChantProxy, _super);
    function MerChantProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/hotwave/database/v1.0/merchantform_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    MerChantProxy.prototype.PathHierarchyCreateChildLayer = function (dataID) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/pathhierarchycreatechildlayer', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                dataID: dataID,
            }
        };
        return this.invoke(url, method, options);
    };
    MerChantProxy.prototype.PathHierarchyCreateSibling = function (dataID) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/pathhierarchycreatesibling', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                dataID: dataID,
            }
        };
        return this.invoke(url, method, options);
    };
    MerChantProxy.prototype.DataImportVMAction = function (dataImportContext) {
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
    MerChantProxy.prototype.DataExportVMAction = function (exportContext) {
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
    MerChantProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], MerChantProxy);
    return MerChantProxy;
}(BefProxy));
export { MerChantProxy };
