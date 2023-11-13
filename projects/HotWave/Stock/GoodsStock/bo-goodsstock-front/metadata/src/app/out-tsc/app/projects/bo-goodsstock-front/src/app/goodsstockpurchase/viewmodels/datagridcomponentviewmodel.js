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
                        "resourceId": "merchantID_MerchantID_MerchantName_449ab777_1loy",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "merchantID_MerchantID_MerchantName_449ab777_1loy",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "merchantID_MerchantID_MerchantName",
                            "fullPath": "MerchantID.MerchantID_MerchantName",
                            "isExpression": false,
                            "value": "merchantID_MerchantID_MerchantName"
                        },
                        "dataField": "merchantID.merchantID_MerchantName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "商户名称",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "merchantID_MerchantID_MerchantName_449ab777_04y5",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "merchantID_MerchantID_MerchantName_449ab777_04y5",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "merchantID_MerchantID_MerchantName",
                                "isExpression": false,
                                "value": "merchantID_MerchantID_MerchantName"
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
                        "resourceId": "merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_nrnh",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_nrnh",
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
                            "path": "merchantID_MerchantID_ParentMerchantID_MerchantName",
                            "fullPath": "MerchantID.MerchantID_ParentMerchantID_MerchantName",
                            "isExpression": false,
                            "value": "merchantID_MerchantID_ParentMerchantID_MerchantName"
                        },
                        "dataField": "merchantID.merchantID_ParentMerchantID_MerchantName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "上游商户/经销商",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_487y",
                            "defaultI18nValue": "商户名称",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_487y",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "merchantID_MerchantID_ParentMerchantID_MerchantName",
                                "fullPath": "MerchantID.MerchantID_ParentMerchantID_MerchantName",
                                "isExpression": false,
                                "value": "merchantID_MerchantID_ParentMerchantID_MerchantName"
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
                        "resourceId": "goodsID_GoodsID_GoodsName_4d203697_hjqn",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goodsID_GoodsID_GoodsName_4d203697_hjqn",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "goodsID_GoodsID_GoodsName",
                            "fullPath": "GoodsID.GoodsID_GoodsName",
                            "isExpression": false,
                            "value": "goodsID_GoodsID_GoodsName"
                        },
                        "dataField": "goodsID.goodsID_GoodsName",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "商品名称",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "goodsID_GoodsID_GoodsName_4d203697_ofi2",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "goodsID_GoodsID_GoodsName_4d203697_ofi2",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "goodsID_GoodsID_GoodsName",
                                "isExpression": false,
                                "value": "goodsID_GoodsID_GoodsName"
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
                        "resourceId": "goodsID_GoodsID_Specification_b1978607_m5lu",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goodsID_GoodsID_Specification_b1978607_m5lu",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "goodsID_GoodsID_Specification",
                            "fullPath": "GoodsID.GoodsID_Specification",
                            "isExpression": false,
                            "value": "goodsID_GoodsID_Specification"
                        },
                        "dataField": "goodsID.goodsID_Specification",
                        "dataType": "string",
                        "multiLanguage": false,
                        "caption": "规格型号",
                        "editor": {
                            "type": "TextBox",
                            "isTextArea": true,
                            "resourceId": "goodsID_GoodsID_Specification_b1978607_zciu",
                            "defaultI18nValue": "文本",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "goodsID_GoodsID_Specification_b1978607_zciu",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "goodsID_GoodsID_Specification",
                                "isExpression": false,
                                "value": "goodsID_GoodsID_Specification"
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
                        "resourceId": "goodsID_GoodsID_Price_c6bb9f5c_v1zr",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "goodsID_GoodsID_Price_c6bb9f5c_v1zr",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "goodsID_GoodsID_Price",
                            "fullPath": "GoodsID.GoodsID_Price",
                            "isExpression": false,
                            "value": "goodsID_GoodsID_Price"
                        },
                        "dataField": "goodsID.goodsID_Price",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "单价",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "goodsID_GoodsID_Price_c6bb9f5c_ht84",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "goodsID_GoodsID_Price_c6bb9f5c_ht84",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "goodsID_GoodsID_Price",
                                "isExpression": false,
                                "value": "goodsID_GoodsID_Price"
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
                        "formatter": {
                            "type": "number",
                            "precision": 2,
                            "thousand": ",",
                            "decimal": "."
                        }
                    },
                    {
                        "type": "GridField",
                        "resourceId": "stockNum_a92c4fee_3qma",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "stockNum_a92c4fee_3qma",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "stockNum",
                            "fullPath": "StockNum",
                            "isExpression": false,
                            "value": "stockNum"
                        },
                        "dataField": "stockNum",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "当前库存量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "stockNum_a92c4fee_i4zf",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "stockNum_a92c4fee_i4zf",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "stockNum",
                                "isExpression": false,
                                "value": "stockNum"
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
                        "resourceId": "dailySalesNum_4c701678_jvc7",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "dailySalesNum_4c701678_jvc7",
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
                            "path": "dailySalesNum",
                            "fullPath": "DailySalesNum",
                            "isExpression": false,
                            "value": "dailySalesNum"
                        },
                        "dataField": "dailySalesNum",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "日销量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "dailySalesNum_4c701678_se6r",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "dailySalesNum_4c701678_se6r",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "dailySalesNum",
                                "isExpression": false,
                                "value": "dailySalesNum"
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
                        "resourceId": "safetyStockDays_2e8b73c1_jlxv",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "safetyStockDays_2e8b73c1_jlxv",
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
                            "path": "safetyStockDays",
                            "fullPath": "SafetyStockDays",
                            "isExpression": false,
                            "value": "safetyStockDays"
                        },
                        "dataField": "safetyStockDays",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "安全库存天数",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "safetyStockDays_2e8b73c1_qaf6",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "safetyStockDays_2e8b73c1_qaf6",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "safetyStockDays",
                                "isExpression": false,
                                "value": "safetyStockDays"
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
                        "resourceId": "safetyStockNum_b650091f_j94p",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "safetyStockNum_b650091f_j94p",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "safetyStockNum",
                            "fullPath": "SafetyStockNum",
                            "isExpression": false,
                            "value": "safetyStockNum"
                        },
                        "dataField": "safetyStockNum",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "安全库存量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "safetyStockNum_b650091f_dw29",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "safetyStockNum_b650091f_dw29",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "safetyStockNum",
                                "isExpression": false,
                                "value": "safetyStockNum"
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
                        "resourceId": "inPurchaseNum_aad3f44b_d4kf",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "inPurchaseNum_aad3f44b_d4kf",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "inPurchaseNum",
                            "fullPath": "InPurchaseNum",
                            "isExpression": false,
                            "value": "inPurchaseNum"
                        },
                        "dataField": "inPurchaseNum",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "采购在订量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "inPurchaseNum_aad3f44b_9taw",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "inPurchaseNum_aad3f44b_9taw",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "inPurchaseNum",
                                "isExpression": false,
                                "value": "inPurchaseNum"
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
                        "resourceId": "inSalesNum_e3ff082d_onrr",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "inSalesNum_e3ff082d_onrr",
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
                            "path": "inSalesNum",
                            "fullPath": "InSalesNum",
                            "isExpression": false,
                            "value": "inSalesNum"
                        },
                        "dataField": "inSalesNum",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "销售在订量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "inSalesNum_e3ff082d_f00v",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "inSalesNum_e3ff082d_f00v",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "inSalesNum",
                                "isExpression": false,
                                "value": "inSalesNum"
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
                        "resourceId": "suggestPurchaseNum_5da37cfa_iizm",
                        "visible": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "id": "suggestPurchaseNum_5da37cfa_iizm",
                        "size": {
                            "width": 120
                        },
                        "readonly": {
                            "useQuote": false,
                            "isExpression": false,
                            "value": true
                        },
                        "binding": {
                            "type": "Form",
                            "path": "suggestPurchaseNum",
                            "fullPath": "SuggestPurchaseNum",
                            "isExpression": false,
                            "value": "suggestPurchaseNum"
                        },
                        "dataField": "suggestPurchaseNum",
                        "dataType": "number",
                        "multiLanguage": false,
                        "caption": "建议采购量",
                        "editor": {
                            "type": "FarrisNumberSpinner",
                            "isTextArea": true,
                            "resourceId": "suggestPurchaseNum_5da37cfa_orwk",
                            "defaultI18nValue": "数值框",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "suggestPurchaseNum_5da37cfa_orwk",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "binding": {
                                "type": "Form",
                                "path": "suggestPurchaseNum",
                                "isExpression": false,
                                "value": "suggestPurchaseNum"
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
    DataGridComponentViewmodel.prototype.ChangePage1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'ChangePage1',
            params: {
                loadCommandName: 'Load1',
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
