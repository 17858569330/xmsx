
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DataGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGridColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
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
        "resourceId": "merchantID_MerchantID_MerchantName_79ed0464_zoer",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "merchantID_MerchantID_MerchantName_79ed0464_zoer",
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
          "type": "LookupEdit",
          "isTextArea": true,
          "resourceId": "merchantID_MerchantID_MerchantName_79ed0464_8y3y",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "merchantID_MerchantID_MerchantName_79ed0464_8y3y",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "merchantID_MerchantID_MerchantName",
            "fullPath": "MerchantID.MerchantID_MerchantName",
            "isExpression": false,
            "value": "merchantID_MerchantID_MerchantName"
          },
          "disable": false,
          "dataSource": {
            "uri": "GoodsStock.merchantID_MerchantID_MerchantName",
            "displayName": "商户帮助",
            "idField": "id",
            "type": "ViewObject"
          },
          "valueField": "id",
          "textField": "merchantName",
          "multiSelect": false,
          "pageSize": 20,
          "mapFields": {
            "merchantName": "merchantID.merchantID_MerchantName",
            "parentMerchantID.parentMerchantID_MerchantName": "merchantID.merchantID_ParentMerchantID_MerchantName",
            "id": "merchantID.merchantID"
          },
          "displayType": "TreeList",
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
        "resourceId": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik",
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
          "resourceId": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824",
          "defaultI18nValue": "商户名称",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824",
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
        "resourceId": "goodsID_GoodsID_GoodsName_ade04dc1_1mgy",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "goodsID_GoodsID_GoodsName_ade04dc1_1mgy",
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
          "resourceId": "goodsID_GoodsID_GoodsName_ade04dc1_89ef",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "goodsID_GoodsID_GoodsName_ade04dc1_89ef",
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
        "resourceId": "goodsID_GoodsID_Specification_d208e853_2hno",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "goodsID_GoodsID_Specification_d208e853_2hno",
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
          "resourceId": "goodsID_GoodsID_Specification_d208e853_2i8n",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "goodsID_GoodsID_Specification_d208e853_2i8n",
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
        "resourceId": "goodsID_GoodsID_Price_bc6384c0_fjgd",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "goodsID_GoodsID_Price_bc6384c0_fjgd",
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
          "resourceId": "goodsID_GoodsID_Price_bc6384c0_fq6p",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "goodsID_GoodsID_Price_bc6384c0_fq6p",
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
        "resourceId": "stockNum_f152e4b2_fhhp",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "stockNum_f152e4b2_fhhp",
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
          "resourceId": "stockNum_f152e4b2_k1ri",
          "defaultI18nValue": "当前库存量",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "stockNum_f152e4b2_k1ri",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "stockNum",
            "fullPath": "StockNum",
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
    "multiSelect": true,
    "editable": "viewModel.stateMachine['editable']",
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'ChangePage1',
        params: {
            loadCommandName: 'Load1',
            loadCommandFrameId: 'root-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public ChangePage1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelopenBatchEditDialog1',
        params: {
            frameId: 'data-grid-component',
            transitionAction: 'Edit'
        },
        paramDescriptions: {
            frameId: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public rootviewmodelopenBatchEditDialog1(commandParam?: any): Observable<any> { return; }

}