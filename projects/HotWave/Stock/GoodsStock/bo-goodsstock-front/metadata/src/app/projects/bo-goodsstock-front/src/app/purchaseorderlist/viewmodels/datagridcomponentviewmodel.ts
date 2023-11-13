
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
        "resourceId": "orderCode_173a6f07_6v9a",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "orderCode_173a6f07_6v9a",
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
        "caption": "采购编号",
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
        "resourceId": "merchant_Merchant_MerchantName_b31c76b0_ui74",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "merchant_Merchant_MerchantName_b31c76b0_ui74",
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
        "resourceId": "merchant_Merchant_ParentMerchantID_MerchantName_c296a2af_usp5",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "merchant_Merchant_ParentMerchantID_MerchantName_c296a2af_usp5",
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
          "path": "merchant_Merchant_ParentMerchantID_MerchantName",
          "fullPath": "Merchant.Merchant_ParentMerchantID_MerchantName",
          "isExpression": false,
          "value": "merchant_Merchant_ParentMerchantID_MerchantName"
        },
        "dataField": "merchant.merchant_ParentMerchantID_MerchantName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "上游商户/经销商",
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
        "resourceId": "expectedTime_a5f6d271_bs1j",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "expectedTime_a5f6d271_bs1j",
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
          "path": "expectedTime",
          "fullPath": "ExpectedTime",
          "isExpression": false,
          "value": "expectedTime"
        },
        "dataField": "expectedTime",
        "dataType": "date",
        "multiLanguage": false,
        "caption": "预计送达时间",
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
          "type": "date",
          "dateFormat": "yyyy-MM-dd"
        }
      },
      {
        "type": "GridField",
        "resourceId": "orderTime_5fb59eb7_5a6y",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "orderTime_5fb59eb7_5a6y",
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
        "dataType": "date",
        "multiLanguage": false,
        "caption": "下单时间",
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
          "type": "date",
          "dateFormat": "yyyy-MM-dd"
        }
      },
      {
        "type": "GridField",
        "resourceId": "orderPerson_OrderPerson_name_4e89a276_0b64",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "orderPerson_OrderPerson_name_4e89a276_0b64",
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
        "resourceId": "billStatus_BillState_b3d11341_iqfk",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billStatus_BillState_b3d11341_iqfk",
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
          "path": "billStatus_BillState",
          "fullPath": "BillStatus.BillState",
          "isExpression": false,
          "value": "billStatus_BillState"
        },
        "dataField": "billStatus.billState",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "单据状态",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "name": "制单",
            "value": "Billing"
          },
          {
            "name": "提交审批",
            "value": "SubmitApproval"
          },
          {
            "name": "审批通过",
            "value": "Approved"
          },
          {
            "name": "审批不通过",
            "value": "ApprovalNotPassed"
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
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "totalPrice_460dc9cc_54te",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "totalPrice_460dc9cc_54te",
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
        "caption": "采购金额",
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
            loadCommandName: 'Filter1',
            loadCommandFrameId: 'root-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public ChangePage1(commandParam?: any): Observable<any> { return; }

}