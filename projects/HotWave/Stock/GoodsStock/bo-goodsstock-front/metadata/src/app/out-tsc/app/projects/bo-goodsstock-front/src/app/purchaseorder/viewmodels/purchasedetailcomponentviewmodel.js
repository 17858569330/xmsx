import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var PurchasedetailComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(PurchasedetailComponentViewmodel, _super);
    function PurchasedetailComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/purchaseDetails';
        _this.dom = {
            "dataGrid_purchasedetail": {
                "type": "DataGrid",
                "resourceId": "dataGrid_purchasedetail",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid_purchasedetail",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "goods_Goods_GoodsName_053fe342_cike",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goods_Goods_GoodsName_053fe342_cike",
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
                            "path": "goods_Goods_GoodsName",
                            "fullPath": "Goods.Goods_GoodsName",
                            "isExpression": false,
                            "value": "goods_Goods_GoodsName"
                        },
                        "dataField": "goods.goods_GoodsName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "商品名称",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "goods_Goods_GoodsName_053fe342_88dg",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "goods_Goods_GoodsName_053fe342_88dg",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "goods_Goods_GoodsName",
                                "isExpression": false,
                                "value": "goods_Goods_GoodsName"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
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
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "goods_Goods_Specification_7a80c1a7_p7jl",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goods_Goods_Specification_7a80c1a7_p7jl",
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
                            "path": "goods_Goods_Specification",
                            "fullPath": "Goods.Goods_Specification",
                            "isExpression": false,
                            "value": "goods_Goods_Specification"
                        },
                        "dataField": "goods.goods_Specification",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "规格型号",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "goods_Goods_Specification_7a80c1a7_09tw",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "goods_Goods_Specification_7a80c1a7_09tw",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "goods_Goods_Specification",
                                "isExpression": false,
                                "value": "goods_Goods_Specification"
                            },
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
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
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "quality_b81a8d03_d8r9",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "quality_b81a8d03_d8r9",
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
                            "path": "quality",
                            "fullPath": "Quality",
                            "isExpression": false,
                            "value": "quality"
                        },
                        "dataField": "quality",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "采购数量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "quality_b81a8d03_4uk1",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "quality_b81a8d03_4uk1",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "quality",
                                "isExpression": false,
                                "value": "quality"
                            },
                            "disable": false,
                            "step": 1,
                            "useThousands": true,
                            "textAlign": "left",
                            "precision": 0
                        },
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
                            "type": "number",
                            "precision": 0,
                            "thousand": ",",
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "price_9ca3c686_362q",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "price_9ca3c686_362q",
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
                            "path": "price",
                            "fullPath": "Price",
                            "isExpression": false,
                            "value": "price"
                        },
                        "dataField": "price",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "采购单价",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "price_9ca3c686_bmjk",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "price_9ca3c686_bmjk",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "price",
                                "isExpression": false,
                                "value": "price"
                            },
                            "disable": false,
                            "step": 1,
                            "useThousands": true,
                            "textAlign": "left",
                            "precision": 2
                        },
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
                            "type": "number",
                            "precision": 2,
                            "thousand": ",",
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "amount_95e56af1_2k0y",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "amount_95e56af1_2k0y",
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
                            "path": "amount",
                            "fullPath": "Amount",
                            "isExpression": false,
                            "value": "amount"
                        },
                        "dataField": "amount",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "采购小计",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "amount_95e56af1_mesz",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "amount_95e56af1_mesz",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "amount",
                                "fullPath": "Amount",
                                "isExpression": false,
                                "value": "amount"
                            },
                            "disable": false,
                            "step": 1,
                            "useThousands": true,
                            "textAlign": "left",
                            "precision": 2
                        },
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
                            "type": "number",
                            "precision": 2,
                            "thousand": ",",
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "remark_668d79eb_fyk9",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "remark_668d79eb_fyk9",
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
                            "path": "remark",
                            "fullPath": "Remark",
                            "isExpression": false,
                            "value": "remark"
                        },
                        "dataField": "remark",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "备注",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "remark_668d79eb_3slt",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "remark_668d79eb_3slt",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "remark",
                                "isExpression": false,
                                "value": "remark"
                            },
                            "disable": false,
                            "maxLength": 100,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
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
                "editable": "viewModel.stateMachine['editable']",
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
    PurchasedetailComponentViewmodel.prototype.purchasedetailAddItem1 = function (commandParam) { return; };
    PurchasedetailComponentViewmodel.prototype.purchasedetailRemoveItem1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'purchasedetailAddItem1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], PurchasedetailComponentViewmodel.prototype, "purchasedetailAddItem1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'purchasedetailRemoveItem1',
            params: {
                id: '{DATA~/#{purchasedetail-component}/purchaseDetails/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], PurchasedetailComponentViewmodel.prototype, "purchasedetailRemoveItem1", null);
    PurchasedetailComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], PurchasedetailComponentViewmodel);
    return PurchasedetailComponentViewmodel;
}(ViewModel));
export { PurchasedetailComponentViewmodel };
export { ɵ0 };
