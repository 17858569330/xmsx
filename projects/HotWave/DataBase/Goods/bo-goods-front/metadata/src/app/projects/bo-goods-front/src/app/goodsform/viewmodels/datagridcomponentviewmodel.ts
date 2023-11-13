
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
    @NgCommand({
        name: 'loadList1',
        params: {
        }
    })
    public loadList1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'remove1',
        params: {
            id: '{DATA~/data-grid-component/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'loadCard1',
        params: {
        }
    })
    public loadCard1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'add1',
        params: {
        }
    })
    public add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'changePage1',
        params: {
            loadCommandName: 'loadList1',
            loadCommandFrameId: 'data-grid-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public changePage1(commandParam?: any): Observable<any> { return; }

}