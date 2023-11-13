import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var OrderdetailComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(OrderdetailComponentViewmodel, _super);
    function OrderdetailComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/orderDetails';
        _this.dom = {
            "dataGrid_orderdetail": {
                "type": "DataGrid",
                "resourceId": "dataGrid_orderdetail",
                "visible": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": true
                },
                "id": "dataGrid_orderdetail",
                "size": {},
                "readonly": {
                    "useQuote": false,
                    "isExpression": false,
                    "value": false
                },
                "fields": [
                    {
                        "type": "GridField",
                        "resourceId": "goods_d3829541_0hbn",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goods_d3829541_0hbn",
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
                            "path": "goods",
                            "fullPath": "Goods.Goods",
                            "isExpression": false,
                            "value": "goods"
                        },
                        "dataField": "goods.goods",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "商品",
                        "editor": {
                            "type": "LookupEdit",
                            "isTextArea": true,
                            "resourceId": "goods_d3829541_zhpt",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "goods_d3829541_zhpt",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "goods",
                                "fullPath": "Goods.Goods",
                                "isExpression": false,
                                "value": "goods"
                            },
                            "disable": false,
                            "dataSource": {
                                "uri": "OrderDetail.goods",
                                "displayName": "商品帮助",
                                "idField": "id",
                                "type": "ViewObject"
                            },
                            "valueField": "id",
                            "textField": "goodsName",
                            "multiSelect": false,
                            "pageSize": 20,
                            "mapFields": {
                                "id": "goods.goods",
                                "goodsName": "goods.goods_GoodsName",
                                "goodsCode": "goods.goods_GoodsCode",
                                "specification": "specification",
                                "price": "price"
                            },
                            "displayType": "List",
                            "enableExtendLoadMethod": true,
                            "editable": false,
                            "noSearch": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "useTip": false,
                            "useFavorite": true,
                            "enableToSelect": true,
                            "isRecordSize": false,
                            "expandLevel": -1,
                            "enableFullTree": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "loadTreeDataType": "default",
                            "enableClear": true,
                            "enableCascade": false
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
                        "resourceId": "goods_Goods_GoodsName_b110ddde_h94h",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goods_Goods_GoodsName_b110ddde_h94h",
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
                            "resourceId": "goods_Goods_GoodsName_b110ddde_9lx1",
                            "defaultI18nValue": "商品名称",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "goods_Goods_GoodsName_b110ddde_9lx1",
                            "size": {},
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
                            "disable": false,
                            "maxLength": 36,
                            "isPassword": false,
                            "enableViewPassword": false
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
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
                        "resourceId": "specification_63d2f314_8ks8",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "specification_63d2f314_8ks8",
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
                            "path": "specification",
                            "fullPath": "Specification",
                            "isExpression": false,
                            "value": "specification"
                        },
                        "dataField": "specification",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "规格型号",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "specification_63d2f314_or74",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "specification_63d2f314_or74",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "specification",
                                "isExpression": false,
                                "value": "specification"
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
                        "updateOn": "blur",
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "quality_381e93a8_lzmz",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "quality_381e93a8_lzmz",
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
                        "caption": "数量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "quality_381e93a8_f1hx",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "quality_381e93a8_f1hx",
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
                        "resourceId": "price_12e9f1a9_0oqq",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "price_12e9f1a9_0oqq",
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
                        "caption": "标准单价",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "price_12e9f1a9_5v46",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "price_12e9f1a9_5v46",
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
                        "resourceId": "amount_62e1cb4c_sk4g",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "amount_62e1cb4c_sk4g",
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
                        "caption": "金额",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "amount_62e1cb4c_wdwb",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "amount_62e1cb4c_wdwb",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "amount",
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
                        "resourceId": "discountType_8004a7da_qc99",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "discountType_8004a7da_qc99",
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
                            "path": "discountType",
                            "fullPath": "DiscountType",
                            "isExpression": false,
                            "value": "discountType"
                        },
                        "dataField": "discountType",
                        "dataType": "enum",
                        "multiLanguage": false,
                        "caption": "折扣类型",
                        "editor": {
                            "type": "ComboList",
                            "isTextArea": true,
                            "resourceId": "discountType_8004a7da_mkma",
                            "defaultI18nValue": "下拉框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "discountType_8004a7da_mkma",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "discountType",
                                "isExpression": false,
                                "value": "discountType"
                            },
                            "disable": false,
                            "editable": false,
                            "idField": "value",
                            "textField": "name",
                            "multiSelect": false,
                            "data": [
                                {
                                    "name": "无折扣",
                                    "value": "none"
                                },
                                {
                                    "name": "有折扣",
                                    "value": "dis"
                                }
                            ],
                            "autoWidth": true
                        },
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "enumData": [
                            {
                                "name": "无折扣",
                                "value": "none"
                            },
                            {
                                "name": "有折扣",
                                "value": "dis"
                            }
                        ],
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
                        "updateOn": "change",
                        "formatter": {
                            "type": "none"
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "discount_0658848e_zq1k",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "discount_0658848e_zq1k",
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
                            "path": "discount",
                            "fullPath": "Discount",
                            "isExpression": false,
                            "value": "discount"
                        },
                        "dataField": "discount",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "折扣金额",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "discount_0658848e_3sjx",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "discount_0658848e_3sjx",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "discount",
                                "isExpression": false,
                                "value": "discount"
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
                        "resourceId": "actualAmount_7136b6c1_m0aj",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "actualAmount_7136b6c1_m0aj",
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
                            "path": "actualAmount",
                            "fullPath": "ActualAmount",
                            "isExpression": false,
                            "value": "actualAmount"
                        },
                        "dataField": "actualAmount",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "实际结算金额",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "actualAmount_7136b6c1_0q3z",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "actualAmount_7136b6c1_0q3z",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "actualAmount",
                                "isExpression": false,
                                "value": "actualAmount"
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
                        "resourceId": "remark_f9d55622_0rpu",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "remark_f9d55622_0rpu",
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
                            "resourceId": "remark_f9d55622_tpbx",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "remark_f9d55622_tpbx",
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
    OrderdetailComponentViewmodel.prototype.orderdetailAddItem1 = function (commandParam) { return; };
    OrderdetailComponentViewmodel.prototype.orderdetailRemoveItem1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'orderdetailAddItem1',
            params: {}
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], OrderdetailComponentViewmodel.prototype, "orderdetailAddItem1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'orderdetailRemoveItem1',
            params: {
                id: '{DATA~/#{orderdetail-component}/orderDetails/id}'
            },
            paramDescriptions: {
                id: ɵ0
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], OrderdetailComponentViewmodel.prototype, "orderdetailRemoveItem1", null);
    OrderdetailComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], OrderdetailComponentViewmodel);
    return OrderdetailComponentViewmodel;
}(ViewModel));
export { OrderdetailComponentViewmodel };
export { ɵ0 };
