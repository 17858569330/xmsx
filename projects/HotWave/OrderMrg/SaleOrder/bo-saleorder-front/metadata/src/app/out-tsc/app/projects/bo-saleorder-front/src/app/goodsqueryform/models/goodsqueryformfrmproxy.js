import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService, Uri } from '@farris/bef';
var GoodsQueryFormFrmProxy = /** @class */ (function (_super) {
    tslib_1.__extends(GoodsQueryFormFrmProxy, _super);
    function GoodsQueryFormFrmProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/hotwave/ordermrg/v1.0/goodsqueryform_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    GoodsQueryFormFrmProxy.prototype.QueryCol = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/querycol', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.QueryData = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/querydata', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.Export = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/export', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetParasMappingList = function (queryId, datasourceId, userId, languageType) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getparasmappinglist', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                datasourceId: datasourceId,
                userId: userId,
                languageType: languageType,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.SaveParasMapping = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveparasmapping', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.DeleteParasMapping = function (queryId, datasourceId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteparasmapping', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                datasourceId: datasourceId,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetJoinSearch = function (formId, queryId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getjoinsearch', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                formId: formId,
                queryId: queryId,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.AddJointSearch = function (joinSearch) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/addjointsearch', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                joinSearch: joinSearch,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.DeleteJointSearch = function (formid, queryId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deletejointsearch', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                formid: formid,
                queryId: queryId,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.VisibleJoint = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/visiblejoint', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetPreSchema = function () {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getpreschema', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetSchemaById = function (id) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getschemabyid', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                id: id,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetSchemaList = function (queryId, userId, languageType) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getschemalist', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                userId: userId,
                languageType: languageType,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.SaveSchema = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveschema', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.DeleteSchema = function (id) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteschema', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                id: id,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetSpreadTemplate = function (id, scheme) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getspreadtemplate', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                id: id,
                scheme: scheme,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetInitSpreadTemplate = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getinitspreadtemplate', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetSpreadTemplateWithDynamicColumn = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getspreadtemplatewithdynamiccolumn', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetFilterList = function (queryId, datasourceId, userId, languageType, queryType) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getfilterlist', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                datasourceId: datasourceId,
                userId: userId,
                languageType: languageType,
                queryType: queryType,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.SaveFilter = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/savefilter', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.DeleteFilter = function (queryId, datasourceId, queryType) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deletefilter', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                datasourceId: datasourceId,
                queryType: queryType,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetCrossTabTemplate = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getcrosstabtemplate', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.GetPrintIntegrationList = function (queryId, schemaId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getprintintegrationlist', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                schemaId: schemaId,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.SavePrintIntegration = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveprintintegration', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.DeletePrintIntegration = function (queryId, schemaId) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteprintintegration', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                queryId: queryId,
                schemaId: schemaId,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy.prototype.Print = function (Param) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/print', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    };
    GoodsQueryFormFrmProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], GoodsQueryFormFrmProxy);
    return GoodsQueryFormFrmProxy;
}(BefProxy));
export { GoodsQueryFormFrmProxy };
