import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
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
                        "resourceId": "merchant_Merchant_MerchantName_c0169d08_9r7o",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "merchant_Merchant_MerchantName_c0169d08_9r7o",
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
                            "path": "merchant_Merchant_MerchantName",
                            "fullPath": "Merchant.Merchant_MerchantName",
                            "isExpression": false,
                            "value": "merchant_Merchant_MerchantName"
                        },
                        "dataField": "merchant.merchant_MerchantName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "商户名称",
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
                        "resourceId": "orderCode_767a620f_0314",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "orderCode_767a620f_0314",
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
                            "path": "orderCode",
                            "fullPath": "OrderCode",
                            "isExpression": false,
                            "value": "orderCode"
                        },
                        "dataField": "orderCode",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "订单编号",
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
                        "resourceId": "orderPerson_OrderPerson_name_4481a4c2_lfg9",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "orderPerson_OrderPerson_name_4481a4c2_lfg9",
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
                            "path": "orderPerson_OrderPerson_name",
                            "fullPath": "OrderPerson.OrderPerson_name",
                            "isExpression": false,
                            "value": "orderPerson_OrderPerson_name"
                        },
                        "dataField": "orderPerson.orderPerson_name",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "下单人",
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
                        "resourceId": "orderTime_308bc30d_axsq",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "orderTime_308bc30d_axsq",
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
                            "path": "orderTime",
                            "fullPath": "OrderTime",
                            "isExpression": false,
                            "value": "orderTime"
                        },
                        "dataField": "orderTime",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "下单时间",
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
                        "resourceId": "telephone_866d4620_1gi0",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "telephone_866d4620_1gi0",
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
                            "path": "telephone",
                            "fullPath": "Telephone",
                            "isExpression": false,
                            "value": "telephone"
                        },
                        "dataField": "telephone",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "联系电话",
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
                        "resourceId": "payMethod_29a89f50_3c87",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "payMethod_29a89f50_3c87",
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
                            "path": "payMethod",
                            "fullPath": "PayMethod",
                            "isExpression": false,
                            "value": "payMethod"
                        },
                        "dataField": "payMethod",
                        "dataType": "enum",
                        "multiLanguage": false,
                        "caption": "支付方式",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "enumData": [
                            {
                                "name": "现金",
                                "value": "Cash"
                            },
                            {
                                "name": "支付宝",
                                "value": "AliPay"
                            },
                            {
                                "name": "微信支付",
                                "value": "WeChat"
                            },
                            {
                                "name": "银联",
                                "value": "UPay"
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
                        "resourceId": "sendState_11e5bd1a_wmm0",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "sendState_11e5bd1a_wmm0",
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
                            "path": "sendState",
                            "fullPath": "SendState",
                            "isExpression": false,
                            "value": "sendState"
                        },
                        "dataField": "sendState",
                        "dataType": "enum",
                        "multiLanguage": false,
                        "caption": "发货状态",
                        "draggable": false,
                        "frozen": "none",
                        "sortable": true,
                        "resizeable": true,
                        "enumData": [
                            {
                                "name": "未发货",
                                "value": "UnShipped"
                            },
                            {
                                "name": "已发货",
                                "value": "Shipped"
                            },
                            {
                                "name": "已收货",
                                "value": "Done"
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
                        "resourceId": "totalPrice_cd60f924_2r7f",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "totalPrice_cd60f924_2r7f",
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
                            "path": "totalPrice",
                            "fullPath": "TotalPrice",
                            "isExpression": false,
                            "value": "totalPrice"
                        },
                        "dataField": "totalPrice",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "订单金额",
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
                        "resourceId": "totalDiscounts_dadf3137_toe5",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "totalDiscounts_dadf3137_toe5",
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
                            "path": "totalDiscounts",
                            "fullPath": "TotalDiscounts",
                            "isExpression": false,
                            "value": "totalDiscounts"
                        },
                        "dataField": "totalDiscounts",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "折扣优惠",
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
                        "resourceId": "actualPay_6310d9f5_3uu8",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "actualPay_6310d9f5_3uu8",
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
                            "path": "actualPay",
                            "fullPath": "ActualPay",
                            "isExpression": false,
                            "value": "actualPay"
                        },
                        "dataField": "actualPay",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "合计实付",
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
                        "resourceId": "remark_743dc1bc_nr9s",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "remark_743dc1bc_nr9s",
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
    DataGridComponentViewmodel.prototype.ChangePage1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'ChangePage1',
            params: {
                loadCommandName: 'Filter1',
                loadCommandFrameId: 'root-component'
            },
            paramDescriptions: {
                loadCommandName: { type: 'string' },
                loadCommandFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], DataGridComponentViewmodel.prototype, "ChangePage1", null);
    DataGridComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], DataGridComponentViewmodel);
    return DataGridComponentViewmodel;
}(ViewModel));
export { DataGridComponentViewmodel };
