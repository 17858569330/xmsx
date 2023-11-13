import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var DataGridComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodel, _super);
    function DataGridComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {
            "dataGrid": {
                "type": "DataGrid",
                "resourceId": "dataGrid",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "goodsName_f5c45c50_xevr",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goodsName_f5c45c50_xevr",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "goodsName",
                            "fullPath": "GoodsName",
                            "isExpression": false,
                            "value": "goodsName"
                        },
                        "dataField": "goodsName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "商品名称",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "goodsCode_68f83985_nuka",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goodsCode_68f83985_nuka",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": false
                        },
                        "binding": {
                            "type": "Form",
                            "path": "goodsCode",
                            "fullPath": "GoodsCode",
                            "isExpression": false,
                            "value": "goodsCode"
                        },
                        "dataField": "goodsCode",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "商品编号",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "aggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "groupAggregate": {
                            "type": "none",
                            "formatter": {
                                "type": "none"
                            }
                        },
                        "linkedLabelEnabled": false,
                        "updateOn": "blur",
                        "formatter": {
                            "type": "none"
                        }
                    }
                ],
                "multiSelect": false,
                "showLineNumber": false,
                "lineNumberTitle": "#",
                "groupTotalText": "Total",
                "filterable": false,
                "groupable": false,
                "rowClass": ""
            }
        };
        return _this;
    }
    DataGridComponentViewmodel.prototype.loadList1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.remove1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.loadCard1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.add1 = function (commandParam) { return; };
    DataGridComponentViewmodel.prototype.changePage1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'loadList1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "loadList1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'remove1',
            params: {
                id: '{DATA~/data-grid-component/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "remove1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'loadCard1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "loadCard1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'add1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "add1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'changePage1',
            params: {
                loadCommandName: 'loadList1',
                loadCommandFrameId: 'data-grid-component'
            },
            paramDescriptions: {
                loadCommandName: { type: 'string' },
                loadCommandFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "changePage1", null);
    DataGridComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DataGridComponentViewmodel);
    return DataGridComponentViewmodel;
}(ViewModel));
export { DataGridComponentViewmodel };
export { ɵ0 };
