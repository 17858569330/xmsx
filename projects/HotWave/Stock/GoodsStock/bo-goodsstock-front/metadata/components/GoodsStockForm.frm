{
  "Header" : {
    "Code" : "GoodsStockForm",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
    "CertId" : null,
    "Name" : "商品库表单",
    "FileName" : "GoodsStockForm.frm",
    "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099",
    "Language" : null,
    "Extendable" : false,
    "ID" : "01fff89f-683c-4d09-83ef-b6390d4a3061",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "4fc6d9aa-d981-4c84-95bb-154218d3634b",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
      "Code" : "GoodsStockForm.frm",
      "Name" : "GoodsStockForm.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "01fff89f-683c-4d09-83ef-b6390d4a3061",
    "Contents" : {
      "module" : {
        "id" : "GoodsStockForm",
        "code" : "GoodsStockForm",
        "name" : "商品库表单",
        "caption" : "商品库表单",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-25T03:03:05.701Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "id" : "68b0e22e-93be-4c86-8718-8a1f2f07e8fc",
          "sourceType" : "vo",
          "sourceUri" : "api/hotwave/stock/v1.0/GoodsStockForm_frm",
          "variables" : [ ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "GoodsStockForm_frm",
          "entities" : [ {
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : true,
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "label" : "id",
                "path" : "ID",
                "id" : "7ce95158-0ae6-44f2-bb1f-8f7766ade170",
                "code" : "ID",
                "originalId" : "7ce95158-0ae6-44f2-bb1f-8f7766ade170",
                "bindingField" : "id",
                "bindingPath" : "id",
                "name" : "主键"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "label" : "version",
                "path" : "Version",
                "id" : "42615683-2527-4988-81c8-cbcf48511cb5",
                "code" : "Version",
                "originalId" : "42615683-2527-4988-81c8-cbcf48511cb5",
                "bindingField" : "version",
                "bindingPath" : "version",
                "name" : "版本"
              }, {
                "$type" : "ComplexField",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "label" : "merchantID",
                    "path" : "MerchantID.MerchantID",
                    "id" : "55213b02-11bb-483a-928c-7c026e25b6e8",
                    "code" : "MerchantID",
                    "originalId" : "55213b02-11bb-483a-928c-7c026e25b6e8",
                    "bindingField" : "merchantID",
                    "bindingPath" : "merchantID.merchantID",
                    "name" : "商户ID"
                  }, {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "label" : "merchantID_MerchantName",
                    "path" : "MerchantID.MerchantID_MerchantName",
                    "id" : "79ed0464-70fc-4204-8683-81c939cc20b3",
                    "code" : "MerchantName",
                    "originalId" : "79ed0464-70fc-4204-8683-81c939cc20b3",
                    "bindingField" : "merchantID_MerchantID_MerchantName",
                    "bindingPath" : "merchantID.merchantID_MerchantName",
                    "name" : "商户名称"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "require" : false,
                    "name" : "商户名称",
                    "id" : "69737d7a-d14f-4ac3-bc70-e1dd78c4a16d",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "MerchantID.MerchantID_ParentMerchantID_MerchantName",
                    "code" : "MerchantName(ParentMerchantID)",
                    "label" : "merchantID_ParentMerchantID_MerchantName",
                    "originalId" : "69737d7a-d14f-4ac3-bc70-e1dd78c4a16d",
                    "bindingPath" : "merchantID.merchantID_ParentMerchantID_MerchantName",
                    "bindingField" : "merchantID_MerchantID_ParentMerchantID_MerchantName"
                  } ],
                  "primary" : "merchantID",
                  "entities" : [ ],
                  "displayName" : "商户",
                  "name" : "MerChant5521"
                },
                "label" : "merchantID",
                "path" : "MerchantID",
                "id" : "32f90e17-8636-43a6-b6eb-df0f278d9a85",
                "code" : "MerchantID",
                "originalId" : "32f90e17-8636-43a6-b6eb-df0f278d9a85",
                "bindingField" : "merchantID",
                "bindingPath" : "merchantID",
                "name" : "商户ID"
              }, {
                "$type" : "ComplexField",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "label" : "goodsID",
                    "path" : "GoodsID.GoodsID",
                    "id" : "28bac24b-122e-452a-9780-cb12e992da74",
                    "code" : "GoodsID",
                    "originalId" : "28bac24b-122e-452a-9780-cb12e992da74",
                    "bindingField" : "goodsID",
                    "bindingPath" : "goodsID.goodsID",
                    "name" : "商品ID"
                  }, {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "label" : "goodsID_GoodsName",
                    "path" : "GoodsID.GoodsID_GoodsName",
                    "id" : "ade04dc1-4559-4c0a-82a7-3227f3cae104",
                    "code" : "GoodsName",
                    "originalId" : "ade04dc1-4559-4c0a-82a7-3227f3cae104",
                    "bindingField" : "goodsID_GoodsID_GoodsName",
                    "bindingPath" : "goodsID.goodsID_GoodsName",
                    "name" : "商品名称"
                  }, {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "label" : "goodsID_Specification",
                    "path" : "GoodsID.GoodsID_Specification",
                    "id" : "d208e853-a9c7-4975-8c71-78dc4129857b",
                    "code" : "Specification",
                    "originalId" : "d208e853-a9c7-4975-8c71-78dc4129857b",
                    "bindingField" : "goodsID_GoodsID_Specification",
                    "bindingPath" : "goodsID.goodsID_Specification",
                    "name" : "规格型号"
                  }, {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 30,
                      "name" : "String"
                    },
                    "label" : "goodsID_Category",
                    "path" : "GoodsID.GoodsID_Category",
                    "id" : "7571fc2d-fe99-40e6-8937-3fbe64a7d97c",
                    "code" : "Category",
                    "originalId" : "7571fc2d-fe99-40e6-8937-3fbe64a7d97c",
                    "bindingField" : "goodsID_GoodsID_Category",
                    "bindingPath" : "goodsID.goodsID_Category",
                    "name" : "分类名称"
                  }, {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "NumericType",
                      "displayName" : "数字",
                      "precision" : 2,
                      "length" : 10,
                      "name" : "Number"
                    },
                    "label" : "goodsID_Price",
                    "path" : "GoodsID.GoodsID_Price",
                    "id" : "bc6384c0-6e21-4825-800f-cb4372bc8c64",
                    "code" : "Price",
                    "originalId" : "bc6384c0-6e21-4825-800f-cb4372bc8c64",
                    "bindingField" : "goodsID_GoodsID_Price",
                    "bindingPath" : "goodsID.goodsID_Price",
                    "name" : "单价"
                  }, {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "NumericType",
                      "displayName" : "数字",
                      "precision" : 0,
                      "length" : 0,
                      "name" : "Number"
                    },
                    "label" : "goodsID_Number",
                    "path" : "GoodsID.GoodsID_Number",
                    "id" : "7c020a3a-b762-4946-87e9-dcc2648897e8",
                    "code" : "Number",
                    "originalId" : "7c020a3a-b762-4946-87e9-dcc2648897e8",
                    "bindingField" : "goodsID_GoodsID_Number",
                    "bindingPath" : "goodsID.goodsID_Number",
                    "name" : "上架数量"
                  } ],
                  "primary" : "goodsID",
                  "entities" : [ ],
                  "displayName" : "商品",
                  "name" : "Goods28ba"
                },
                "label" : "goodsID",
                "path" : "GoodsID",
                "id" : "e6d5ad33-6c1b-4be4-b0ed-f953142162ba",
                "code" : "GoodsID",
                "originalId" : "e6d5ad33-6c1b-4be4-b0ed-f953142162ba",
                "bindingField" : "goodsID",
                "bindingPath" : "goodsID",
                "name" : "商品ID"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "stockNum",
                "path" : "StockNum",
                "id" : "f152e4b2-81c7-4f46-8e54-5513484624e2",
                "code" : "StockNum",
                "originalId" : "f152e4b2-81c7-4f46-8e54-5513484624e2",
                "bindingField" : "stockNum",
                "bindingPath" : "stockNum",
                "name" : "当前库存量"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "dailySalesNum",
                "path" : "DailySalesNum",
                "id" : "e07398d6-5c63-4b32-a4b8-bb4b41159c2c",
                "code" : "DailySalesNum",
                "originalId" : "e07398d6-5c63-4b32-a4b8-bb4b41159c2c",
                "bindingField" : "dailySalesNum",
                "bindingPath" : "dailySalesNum",
                "name" : "日销量"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 0,
                  "length" : 0,
                  "name" : "Number"
                },
                "label" : "safetyStockDays",
                "path" : "SafetyStockDays",
                "id" : "e6d815e3-dec7-49d9-96dc-6801e0a09a46",
                "code" : "SafetyStockDays",
                "originalId" : "e6d815e3-dec7-49d9-96dc-6801e0a09a46",
                "bindingField" : "safetyStockDays",
                "bindingPath" : "safetyStockDays",
                "name" : "安全库存天数"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "safetyStockNum",
                "path" : "SafetyStockNum",
                "id" : "d7ccc8ec-6477-4110-bc15-5967315c647e",
                "code" : "SafetyStockNum",
                "originalId" : "d7ccc8ec-6477-4110-bc15-5967315c647e",
                "bindingField" : "safetyStockNum",
                "bindingPath" : "safetyStockNum",
                "name" : "安全库存量"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "inPurchaseNum",
                "path" : "InPurchaseNum",
                "id" : "4f37dfbd-07f6-4b0e-b775-144d271a76b3",
                "code" : "InPurchaseNum",
                "originalId" : "4f37dfbd-07f6-4b0e-b775-144d271a76b3",
                "bindingField" : "inPurchaseNum",
                "bindingPath" : "inPurchaseNum",
                "name" : "采购在订量"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "inSalesNum",
                "path" : "InSalesNum",
                "id" : "219eda43-8c41-41a1-ac46-6e7283ccb01d",
                "code" : "InSalesNum",
                "originalId" : "219eda43-8c41-41a1-ac46-6e7283ccb01d",
                "bindingField" : "inSalesNum",
                "bindingPath" : "inSalesNum",
                "name" : "销售在订量"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "suggestPurchaseNum",
                "path" : "SuggestPurchaseNum",
                "id" : "1ad0bdfb-2e6b-4db0-be05-c0d73c562f6e",
                "code" : "SuggestPurchaseNum",
                "originalId" : "1ad0bdfb-2e6b-4db0-be05-c0d73c562f6e",
                "bindingField" : "suggestPurchaseNum",
                "bindingPath" : "suggestPurchaseNum",
                "name" : "建议采购量"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "recentPurchasePrice",
                "path" : "RecentPurchasePrice",
                "id" : "f12f2884-1fdc-406a-8a49-ac07fc1d9c28",
                "code" : "RecentPurchasePrice",
                "originalId" : "f12f2884-1fdc-406a-8a49-ac07fc1d9c28",
                "bindingField" : "recentPurchasePrice",
                "bindingPath" : "recentPurchasePrice",
                "name" : "最近采购价"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "stockAmount",
                "path" : "StockAmount",
                "id" : "c9df397b-2b09-49bc-a955-a3c0d06192c5",
                "code" : "StockAmount",
                "originalId" : "c9df397b-2b09-49bc-a955-a3c0d06192c5",
                "bindingField" : "stockAmount",
                "bindingPath" : "stockAmount",
                "name" : "金额"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "displayName" : "商品库",
              "name" : "GoodsStock"
            },
            "label" : "goodsStocks",
            "id" : "39a0088b-81a6-4a1d-8784-04bc44d2085c",
            "code" : "GoodsStock",
            "name" : "商品库"
          } ],
          "name" : "商品库表单_frm",
          "eapiId" : "966ddbfe-237e-433c-af56-7dd0ba99485a",
          "eapiCode" : "GoodsStockForm_frm",
          "eapiName" : "商品库表单_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
          "voPath" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "GoodsStockForm_state_machine",
          "name" : "商品库表单_frm",
          "uri" : "c4ce0680-dd5b-4e8a-a74f-16707deb408d",
          "code" : "GoodsStockForm_frm",
          "nameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "商品库",
          "fields" : [ {
            "type" : "Variable",
            "id" : "c9d063fe-3e8d-44b4-b258-d6041d352a5f",
            "fieldName" : "goodsInfo",
            "groupId" : "",
            "groupName" : "",
            "editor" : {
              "$type" : "LookupEdit"
            }
          }, {
            "type" : "Variable",
            "id" : "6e5dcdbc-1cc4-4547-9915-797db10a1ba2",
            "fieldName" : "goodsinfo",
            "groupId" : "",
            "groupName" : "",
            "editor" : {
              "$type" : "LookupEdit"
            }
          }, {
            "type" : "Variable",
            "id" : "ee0059fe-4ef2-4316-81d4-abea7c3bdf26",
            "fieldName" : "goodsinfo",
            "groupId" : "",
            "groupName" : ""
          } ],
          "stateMachine" : "GoodsStockForm_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "279090c9-553d-4936-b1ab-c485ec7e92fc",
            "code" : "Load1",
            "name" : "加载列表数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Load",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "d61e870d-464e-4f68-9a70-2dd1da750c59",
            "code" : "Add1",
            "name" : "新增一条数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "Add",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "dd1a68e5-f404-4c07-81ab-77e3cb545c4f",
            "code" : "Edit1",
            "name" : "编辑当前数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit",
              "defaultValue" : null
            } ],
            "handlerName" : "Edit",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "05da19e1-247e-4d03-bad7-48ce024ef5c3",
            "code" : "Save1",
            "name" : "保存变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Save",
              "defaultValue" : null
            }, {
              "name" : "commandName",
              "shownName" : "保存后回调方法",
              "value" : "Save1",
              "defaultValue" : null
            }, {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "data-grid-component",
              "defaultValue" : null
            }, {
              "name" : "successMsg",
              "shownName" : "保存成功提示信息",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Save",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c011b77d-5baf-49be-b35a-19e89d69134f",
            "code" : "Cancel1",
            "name" : "取消变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            }, {
              "name" : "loadCmdName",
              "shownName" : "取消后回调方法",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "loadCmdFrameId",
              "shownName" : "目标组件",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "9a011b2d-27e3-4e8f-b86d-46c58e5abffe",
            "code" : "Remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/data-grid-component/id}",
              "defaultValue" : null
            }, {
              "name" : "ifSave",
              "shownName" : "是否保存",
              "value" : "{STATEMACHINE~/renderStates/canEdit}",
              "defaultValue" : null
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Remove",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "08976f17-eec0-4a0b-a058-071279bda6b4",
            "code" : "rootviewmodelbatchAppend1",
            "name" : "批量新增主表数据1",
            "params" : [ {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "#{data-grid-component}",
              "defaultValue" : null
            }, {
              "name" : "mapFields",
              "shownName" : "字段映射",
              "value" : "{\"id\":\"goodsID.goodsID\",\"goodsName\":\"goodsID.goodsID_GoodsName\",\"specification\":\"goodsID.goodsID_Specification\",\"price\":\"goodsID.goodsID_Price\"}",
              "defaultValue" : null
            }, {
              "name" : "transitAction",
              "shownName" : "状态机动作",
              "value" : "Edit",
              "defaultValue" : null
            } ],
            "handlerName" : "batchAppend",
            "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "942f8e5e-529f-4d02-ac0e-4d0dee32d2ad",
            "code" : "rootviewmodelopenHiddenHelp1",
            "name" : "参照帮助批量新增数据1",
            "params" : [ {
              "name" : "helpId",
              "shownName" : "帮助元数据标识",
              "value" : "helpId",
              "defaultValue" : null
            } ],
            "handlerName" : "openHiddenHelp",
            "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ff612952-0aab-4124-801a-2e8e48dbe7bb",
            "code" : "rootviewmodelbatchAppend2",
            "name" : "批量新增主表数据2",
            "params" : [ {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "#{data-grid-component}",
              "defaultValue" : null
            }, {
              "name" : "mapFields",
              "shownName" : "字段映射",
              "value" : "{\"id\":\"goodsID.goodsID\",\"goodsName\":\"goodsID.goodsID_GoodsName\",\"specification\":\"goodsID.goodsID_Specification\",\"price\":\"goodsID.goodsID_Price\"}",
              "defaultValue" : null
            }, {
              "name" : "transitAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "batchAppend",
            "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ffd1e9ac-1bfb-455f-9aae-b85f22518356",
            "code" : "rootviewmodelSave1",
            "name" : "保存变更1",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Save",
              "defaultValue" : null
            }, {
              "name" : "commandName",
              "shownName" : "保存后回调方法",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "successMsg",
              "shownName" : "保存成功提示信息",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Save",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "85ac3a47-4883-4e81-8364-1dff1b7451a4",
            "code" : "rootviewmodelbatchAppend3",
            "name" : "批量新增主表数据3",
            "params" : [ {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "#{data-grid-component}",
              "defaultValue" : null
            }, {
              "name" : "mapFields",
              "shownName" : "字段映射",
              "value" : "{\"id\":\"goodsID.goodsID\",\"goodsName\":\"goodsID.goodsID_GoodsName\",\"specification\":\"goodsID.goodsID_Specification\",\"price\":\"goodsID.goodsID_Price\"}",
              "defaultValue" : null
            }, {
              "name" : "transitAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "batchAppend",
            "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "cc3041ab-6b36-4ba9-8904-4f0f4a52d8ad",
            "code" : "rootviewmodelbatchAppend4",
            "name" : "批量新增主表数据4",
            "params" : [ {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "#{data-grid-component}",
              "defaultValue" : null
            }, {
              "name" : "mapFields",
              "shownName" : "字段映射",
              "value" : "{\"id\":\"goodsID.goodsID\",\"goodsName\":\"goodsID.goodsID_GoodsName\",\"specification\":\"goodsID.goodsID_Specification\",\"price\":\"goodsID.goodsID_Price\"}",
              "defaultValue" : null
            }, {
              "name" : "transitAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "batchAppend",
            "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "f09d5dfe-da51-4608-89c0-b36a11924bcc",
            "code" : "rootviewmodelbatchAppend5",
            "name" : "批量新增主表数据5",
            "params" : [ {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "#{data-grid-component}",
              "defaultValue" : null
            }, {
              "name" : "mapFields",
              "shownName" : "字段映射",
              "value" : "{\"id\":\"goodsID.goodsID\",\"goodsName\":\"goodsID.goodsID_GoodsName\",\"specification\":\"goodsID.goodsID_Specification\",\"price\":\"goodsID.goodsID_Price\"}",
              "defaultValue" : null
            }, {
              "name" : "transitAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "batchAppend",
            "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "states" : [ {
            "id" : "ee0059fe-4ef2-4316-81d4-abea7c3bdf26",
            "code" : "goodsinfo",
            "name" : "商品信息",
            "type" : "String",
            "category" : "locale"
          } ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "商品库",
          "fields" : [ {
            "type" : "Form",
            "id" : "79ed0464-70fc-4204-8683-81c939cc20b3",
            "fieldName" : "merchantID_MerchantID_MerchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "GoodsStock.merchantID_MerchantID_MerchantName",
                  "displayName" : "商户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "merchantName",
                "displayType" : "TreeList",
                "mapFields" : "{'merchantName':'merchantID.merchantID_MerchantName','parentMerchantID.parentMerchantID_MerchantName':'merchantID.merchantID_ParentMerchantID_MerchantName','id':'merchantID.merchantID'}",
                "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556"
              },
              "name" : "商户名称",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "ade04dc1-4559-4c0a-82a7-3227f3cae104",
            "fieldName" : "goodsID_GoodsID_GoodsName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "d208e853-a9c7-4975-8c71-78dc4129857b",
            "fieldName" : "goodsID_GoodsID_Specification",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "bc6384c0-6e21-4825-800f-cb4372bc8c64",
            "fieldName" : "goodsID_GoodsID_Price",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "69737d7a-d14f-4ac3-bc70-e1dd78c4a16d",
            "fieldName" : "merchantID_MerchantID_ParentMerchantID_MerchantName",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "上游商户/经销商"
            }
          }, {
            "type" : "Form",
            "id" : "f152e4b2-81c7-4f46-8e54-5513484624e2",
            "fieldName" : "stockNum",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : { }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "cc60a94a-68e9-43b2-9252-95e057e1279a",
            "code" : "ChangePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "切换页面后回调方法",
              "value" : "Load1"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "目标组件",
              "value" : "root-component"
            } ],
            "handlerName" : "ChangePage",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "fe5f7ca3-e508-469b-8068-b44a7c8e6cd7",
            "code" : "rootviewmodelopenBatchEditDialog1",
            "name" : "批量编辑列表数据1",
            "params" : [ {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "data-grid-component"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "openBatchEditDialog",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "data-grid-component"
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "pagination" : {
            "enable" : true,
            "pageSize" : 20,
            "pageList" : "10,20,30,50,100"
          },
          "enableValidation" : true
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "componentType" : "Frame",
          "viewModel" : "root-viewmodel",
          "onInit" : "Load1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-is-managelist"
            },
            "size" : null,
            "contents" : [ {
              "id" : "page-header",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-header"
              },
              "size" : null,
              "contents" : [ {
                "id" : "header-nav",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-page-header-base"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "header-title-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-title"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "page-header-title",
                    "type" : "HtmlTemplate",
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'商品库表单'}}</h4>"
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false
                }, {
                  "id" : "page-header-toolbar",
                  "type" : "ToolBar",
                  "appearance" : {
                    "class" : "col-7 f-toolbar"
                  },
                  "size" : null,
                  "items" : [ {
                    "id" : "button-add",
                    "type" : "ToolBarItem",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "text" : "新增",
                    "visible" : true,
                    "click" : "Add1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "ToolBar-cloned-lit8",
                    "type" : "ToolBarItem",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "text" : "批量新增",
                    "visible" : true,
                    "click" : "rootviewmodelopenHiddenHelp1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canEdit']",
                    "text" : "批量编辑",
                    "visible" : true,
                    "click" : "root-viewmodel.data-grid-component-viewmodel.rootviewmodelopenBatchEditDialog1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-save",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canSave']",
                    "text" : "保存",
                    "visible" : true,
                    "click" : "rootviewmodelSave1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancel']",
                    "text" : "取消",
                    "visible" : true,
                    "click" : "Cancel1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-delete",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canRemove']",
                    "text" : "删除",
                    "visible" : true,
                    "click" : "Remove1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  } ],
                  "visible" : true,
                  "buttonSize" : "default",
                  "popDirection" : "default"
                } ],
                "visible" : true,
                "isScrollspyContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            }, {
              "id" : "page-main",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "data-grid-component-ref",
                "type" : "ComponentRef",
                "component" : "data-grid-component",
                "visible" : true
              }, {
                "id" : "HiddenContainer-form",
                "type" : "HiddenContainer",
                "appearance" : {
                  "class" : "d-flex flex-wrap  flex-fill"
                },
                "border" : null,
                "font" : null,
                "margin" : null,
                "padding" : null,
                "size" : null,
                "contents" : [ {
                  "id" : "helpId",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "商品帮助",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : { },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "root-viewmodel.goodsinfo",
                    "displayName" : "商品帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "goodsName",
                  "valueField" : "id",
                  "displayType" : "List",
                  "multiSelect" : true,
                  "pageList" : "10,20,30,50,100",
                  "pageSize" : 20,
                  "pageIndex" : null,
                  "pagination" : null,
                  "dialogTitle" : "",
                  "showMaxButton" : null,
                  "showCloseButton" : null,
                  "resizable" : null,
                  "buttonAlign" : null,
                  "mapFields" : "{'id':'goodsinfo'}",
                  "lookupStyle" : "popup",
                  "holdPlace" : false,
                  "isTextArea" : null,
                  "useTip" : false,
                  "useFavorite" : true,
                  "noSearch" : false,
                  "maxSearchLength" : null,
                  "enableToSelect" : true,
                  "isRecordSize" : false,
                  "lookupPicking" : null,
                  "lookupPicked" : "rootviewmodelbatchAppend5",
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "enableExtendLoadMethod" : true,
                  "editable" : false,
                  "enableFullTree" : false,
                  "enableClear" : false,
                  "clear" : null,
                  "loadTreeDataType" : "default",
                  "expandLevel" : -1,
                  "enableCascade" : false,
                  "cascadeStatus" : "enable",
                  "onShown" : null,
                  "onHidden" : null,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "textAlign" : "left",
                  "useExtendInfo" : false,
                  "extInfoFields" : null,
                  "extInfoFormatter" : null,
                  "customFormatter" : null,
                  "customNavFormatter" : null,
                  "selectFirstInNav" : false,
                  "loadDataWhenOpen" : true,
                  "onlySelectLeaf" : "default",
                  "viewType" : "text",
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "autoWidth" : true,
                  "showHeader" : true,
                  "beforeSelectData" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "enableContextMenu" : false,
                  "quickSelect" : {
                    "enable" : false,
                    "showItemsCount" : 10,
                    "formatter" : null,
                    "showMore" : true
                  },
                  "treeToList" : false,
                  "navTreeToList" : false,
                  "showNavigation" : true,
                  "isRTControl" : false,
                  "labelAutoOverflow" : false,
                  "helpId" : "bdb254aa-5b96-4088-8aca-8548df8f45aa",
                  "valueChange" : null
                } ],
                "controlsInline" : false,
                "visible" : true,
                "formAutoIntl" : true,
                "draggable" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
          } ],
          "appearance" : null,
          "visible" : true,
          "afterViewInit" : null,
          "name" : "根组件"
        }, {
          "id" : "data-grid-component",
          "type" : "Component",
          "componentType" : "dataGrid",
          "viewModel" : "data-grid-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-wrapper f-utils-fill-flex-column"
          },
          "onInit" : "",
          "contents" : [ {
            "id" : "data-grid-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-grid f-section-in-managelist"
            },
            "size" : null,
            "mainTitle" : "",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : true,
            "expanded" : true,
            "enableMaximize" : true,
            "enableAccordion" : "true",
            "accordionMode" : "default",
            "showHeader" : false,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "dataGrid",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "appearance" : {
                "class" : "f-component-grid"
              },
              "size" : null,
              "dataSource" : "goodsStocks",
              "fields" : [ {
                "id" : "merchantID_MerchantID_MerchantName_79ed0464_zoer",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商户名称",
                "captionTemplate" : null,
                "dataField" : "merchantID.merchantID_MerchantName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchantID_MerchantID_MerchantName",
                  "field" : "79ed0464-70fc-4204-8683-81c939cc20b3",
                  "fullPath" : "MerchantID.MerchantID_MerchantName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "merchantID_MerchantID_MerchantName_79ed0464_8y3y",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "merchantID_MerchantID_MerchantName",
                    "field" : "79ed0464-70fc-4204-8683-81c939cc20b3",
                    "fullPath" : "MerchantID.MerchantID_MerchantName"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "GoodsStock.merchantID_MerchantID_MerchantName",
                    "displayName" : "商户帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "merchantName",
                  "valueField" : "id",
                  "displayType" : "TreeList",
                  "multiSelect" : false,
                  "pageList" : "10,20,30,50,100",
                  "pageSize" : 20,
                  "pageIndex" : null,
                  "pagination" : null,
                  "dialogTitle" : "",
                  "showMaxButton" : null,
                  "showCloseButton" : null,
                  "resizable" : null,
                  "buttonAlign" : null,
                  "mapFields" : "{'merchantName':'merchantID.merchantID_MerchantName','parentMerchantID.parentMerchantID_MerchantName':'merchantID.merchantID_ParentMerchantID_MerchantName','id':'merchantID.merchantID'}",
                  "lookupStyle" : "popup",
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "useTip" : false,
                  "useFavorite" : true,
                  "noSearch" : false,
                  "maxSearchLength" : 36,
                  "enableToSelect" : true,
                  "isRecordSize" : false,
                  "lookupPicking" : null,
                  "lookupPicked" : null,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "enableExtendLoadMethod" : true,
                  "editable" : false,
                  "enableFullTree" : false,
                  "enableClear" : true,
                  "clear" : null,
                  "loadTreeDataType" : "default",
                  "expandLevel" : -1,
                  "enableCascade" : false,
                  "cascadeStatus" : "enable",
                  "onShown" : null,
                  "onHidden" : null,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "textAlign" : "left",
                  "useExtendInfo" : false,
                  "extInfoFields" : null,
                  "extInfoFormatter" : null,
                  "customFormatter" : null,
                  "customNavFormatter" : null,
                  "selectFirstInNav" : false,
                  "loadDataWhenOpen" : true,
                  "onlySelectLeaf" : "default",
                  "viewType" : "text",
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "autoWidth" : true,
                  "showHeader" : true,
                  "beforeSelectData" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "enableContextMenu" : false,
                  "quickSelect" : {
                    "enable" : false,
                    "showItemsCount" : 10,
                    "formatter" : null,
                    "showMore" : true
                  },
                  "treeToList" : false,
                  "navTreeToList" : false,
                  "showNavigation" : true,
                  "path" : "merchantID.merchantID_MerchantName",
                  "isRTControl" : false,
                  "updateOn" : "blur",
                  "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556",
                  "readonly" : false
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date",
                "enableBatchEdit" : "true"
              }, {
                "id" : "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "上游商户/经销商",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchantID_MerchantID_ParentMerchantID_MerchantName",
                  "field" : "69737d7a-d14f-4ac3-bc70-e1dd78c4a16d",
                  "fullPath" : "MerchantID.MerchantID_ParentMerchantID_MerchantName"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "merchantID.merchantID_ParentMerchantID_MerchantName",
                "dataType" : "string",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : {
                  "id" : "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "商户名称",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "merchantID_MerchantID_ParentMerchantID_MerchantName",
                    "field" : "69737d7a-d14f-4ac3-bc70-e1dd78c4a16d",
                    "fullPath" : "MerchantID.MerchantID_ParentMerchantID_MerchantName"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 36,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "merchantID.merchantID_ParentMerchantID_MerchantName",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "readonly" : false,
                  "updateOn" : "blur",
                  "fieldValueChanging" : "",
                  "fieldValueChanged" : ""
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "enumData" : null,
                "idField" : "value",
                "textField" : "name",
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "visible" : true,
                "enableFilter" : false,
                "headerStyler" : "",
                "styler" : "",
                "localization" : false,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date",
                "enableBatchEdit" : "true",
                "path" : "merchantID.merchantID_ParentMerchantID_MerchantName"
              }, {
                "id" : "goodsID_GoodsID_GoodsName_ade04dc1_1mgy",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商品名称",
                "captionTemplate" : null,
                "dataField" : "goodsID.goodsID_GoodsName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsID_GoodsID_GoodsName",
                  "field" : "ade04dc1-4559-4c0a-82a7-3227f3cae104",
                  "fullPath" : "GoodsID.GoodsID_GoodsName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goodsID_GoodsID_GoodsName_ade04dc1_89ef",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goodsID_GoodsID_GoodsName",
                    "field" : "ade04dc1-4559-4c0a-82a7-3227f3cae104"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 36,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "goodsID.goodsID_GoodsName",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date",
                "enableBatchEdit" : "true"
              }, {
                "id" : "goodsID_GoodsID_Specification_d208e853_2hno",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "规格型号",
                "captionTemplate" : null,
                "dataField" : "goodsID.goodsID_Specification",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsID_GoodsID_Specification",
                  "field" : "d208e853-a9c7-4975-8c71-78dc4129857b",
                  "fullPath" : "GoodsID.GoodsID_Specification"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goodsID_GoodsID_Specification_d208e853_2i8n",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goodsID_GoodsID_Specification",
                    "field" : "d208e853-a9c7-4975-8c71-78dc4129857b"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 36,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "isPassword" : false,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "goodsID.goodsID_Specification",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date",
                "enableBatchEdit" : "true"
              }, {
                "id" : "goodsID_GoodsID_Price_bc6384c0_fjgd",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "单价",
                "captionTemplate" : null,
                "dataField" : "goodsID.goodsID_Price",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsID_GoodsID_Price",
                  "field" : "bc6384c0-6e21-4825-800f-cb4372bc8c64",
                  "fullPath" : "GoodsID.GoodsID_Price"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goodsID_GoodsID_Price_bc6384c0_fq6p",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goodsID_GoodsID_Price",
                    "field" : "bc6384c0-6e21-4825-800f-cb4372bc8c64"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 2,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 10,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "showZero" : true,
                  "showButton" : true,
                  "path" : "goodsID.goodsID_Price",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "blur"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "number",
                  "precision" : 2,
                  "thousand" : ",",
                  "decimal" : "."
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : "true"
              }, {
                "id" : "stockNum_f152e4b2_fhhp",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "当前库存量",
                "binding" : {
                  "type" : "Form",
                  "path" : "stockNum",
                  "field" : "f152e4b2-81c7-4f46-8e54-5513484624e2",
                  "fullPath" : "StockNum"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "stockNum",
                "dataType" : "number",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : {
                  "id" : "stockNum_f152e4b2_k1ri",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "当前库存量",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "stockNum",
                    "field" : "f152e4b2-81c7-4f46-8e54-5513484624e2",
                    "fullPath" : "StockNum"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 2,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 10,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "localization" : false,
                  "showZero" : true,
                  "showButton" : true,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "path" : "stockNum",
                  "readonly" : false,
                  "updateOn" : "blur",
                  "fieldValueChanging" : "",
                  "fieldValueChanged" : ""
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "enumData" : null,
                "idField" : "value",
                "textField" : "name",
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "number",
                  "precision" : 2,
                  "thousand" : ",",
                  "decimal" : "."
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "visible" : true,
                "enableFilter" : false,
                "headerStyler" : "",
                "styler" : "",
                "localization" : false,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : true
              } ],
              "focusedItem" : null,
              "focusedIndex" : null,
              "identifyField" : null,
              "multiSelect" : true,
              "selectable" : null,
              "showCheckbox" : true,
              "showAllCheckbox" : true,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "groupable" : false,
              "group" : null,
              "showGroupColumn" : true,
              "groupFormatter" : null,
              "groupStyler" : null,
              "groupFooter" : false,
              "onSelectionChange" : "",
              "fieldEditable" : true,
              "appendRow" : null,
              "disable" : false,
              "fitColumns" : false,
              "autoFitColumns" : false,
              "pageChange" : "ChangePage1",
              "pageSizeChanged" : "ChangePage1",
              "styler" : "",
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "showLineNumber" : false,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "showFooter" : false,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : false,
              "autoHeight" : false,
              "showSelectedList" : false,
              "selectedItemFormatter" : null,
              "lineNumberWidth" : 36,
              "enableMorePageSelect" : false,
              "editable" : "viewModel.stateMachine['editable']",
              "pagination" : true,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "showPageSize" : false,
              "fixedColumns" : [ ],
              "enableCommandColumn" : false,
              "onEditClicked" : "",
              "onDeleteClicked" : "",
              "commandColumnWidth" : 120,
              "showCommandColumn" : true,
              "checkedChange" : null,
              "footerHeight" : 29,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "",
              "rowClick" : null,
              "headerWrap" : false,
              "emptyTemplate" : null,
              "emptyDataHeight" : 36,
              "maxHeight" : 300,
              "rowHeight" : 30,
              "enableHighlightCell" : false,
              "enableEditCellStyle" : false,
              "showRowGroupPanel" : false,
              "enableDragColumn" : false,
              "groupSummaryPosition" : "groupFooterRow",
              "clearSelectionsWhenDataIsEmpty" : true,
              "keepSelect" : true,
              "enableEditByCard" : "none",
              "visible" : true,
              "showGotoInput" : false,
              "scrollBarShowMode" : "auto",
              "showScrollArrow" : false,
              "footerPosition" : "bottom",
              "footerStyler" : null,
              "selectOnEditing" : false,
              "selectionMode" : "default",
              "enableContextMenu" : false,
              "disableGroupOnEditing" : true,
              "enableSimpleMode" : false,
              "enableScheme" : false,
              "beforeEdit" : null,
              "nowrap" : true,
              "mergeCell" : false,
              "remoteSort" : false,
              "columnSorted" : null,
              "enableHeaderGroup" : false,
              "headerGroup" : null,
              "AutoColumnWidthUseDblclick" : true,
              "virtualized" : false,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : null,
              "pagerContentTemplate" : null,
              "expandGroupRows" : true,
              "useBlankWhenDataIsEmpty" : false,
              "pageList" : "10,20,30,50,100",
              "pageSize" : 20
            } ],
            "visible" : true,
            "isScrollSpyItem" : false,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null,
          "name" : "表格组件"
        } ],
        "webcmds" : [ {
          "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "EditableListController.webcmd",
          "refedHandlers" : [ {
            "host" : "279090c9-553d-4936-b1ab-c485ec7e92fc",
            "handler" : "Load"
          }, {
            "host" : "d61e870d-464e-4f68-9a70-2dd1da750c59",
            "handler" : "Add"
          }, {
            "host" : "dd1a68e5-f404-4c07-81ab-77e3cb545c4f",
            "handler" : "Edit"
          }, {
            "host" : "05da19e1-247e-4d03-bad7-48ce024ef5c3",
            "handler" : "Save"
          }, {
            "host" : "c011b77d-5baf-49be-b35a-19e89d69134f",
            "handler" : "Cancel"
          }, {
            "host" : "9a011b2d-27e3-4e8f-b86d-46c58e5abffe",
            "handler" : "Remove"
          }, {
            "host" : "cc60a94a-68e9-43b2-9252-95e057e1279a",
            "handler" : "ChangePage"
          }, {
            "host" : "fe5f7ca3-e508-469b-8068-b44a7c8e6cd7",
            "handler" : "openBatchEditDialog"
          }, {
            "host" : "ffd1e9ac-1bfb-455f-9aae-b85f22518356",
            "handler" : "Save"
          } ],
          "code" : "EditableListController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "696df86c-e6a6-4af3-bccb-03b649b62917",
          "path" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
          "name" : "GoodsStockForm_frm_Controller.webcmd",
          "refedHandlers" : [ ],
          "code" : "GoodsStockForm_frm_Controller",
          "nameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        }, {
          "id" : "43f68561-eae4-4495-b318-d629615523f8",
          "path" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
          "name" : "BatchEditCommands.webcmd",
          "refedHandlers" : [ {
            "host" : "08976f17-eec0-4a0b-a058-071279bda6b4",
            "handler" : "batchAppend"
          }, {
            "host" : "942f8e5e-529f-4d02-ac0e-4d0dee32d2ad",
            "handler" : "openHiddenHelp"
          }, {
            "host" : "ff612952-0aab-4124-801a-2e8e48dbe7bb",
            "handler" : "batchAppend"
          }, {
            "host" : "85ac3a47-4883-4e81-8364-1dff1b7451a4",
            "handler" : "batchAppend"
          }, {
            "host" : "cc3041ab-6b36-4ba9-8904-4f0f4a52d8ad",
            "handler" : "batchAppend"
          }, {
            "host" : "f09d5dfe-da51-4608-89c0-b36a11924bcc",
            "handler" : "batchAppend"
          } ],
          "code" : "BatchEditCommands",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-goodsstock-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "01fff89f-683c-4d09-83ef-b6390d4a3061",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "button-add",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "d61e870d-464e-4f68-9a70-2dd1da750c59",
                "label" : "Add1",
                "name" : "新增一条数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Create",
                  "defaultValue" : null
                } ],
                "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "label" : "EditableListController",
                "name" : "可编辑列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "ToolBar-cloned-lit8",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "942f8e5e-529f-4d02-ac0e-4d0dee32d2ad",
                "label" : "rootviewmodelopenHiddenHelp1",
                "name" : "参照帮助批量新增数据1",
                "handlerName" : "openHiddenHelp",
                "params" : [ {
                  "name" : "helpId",
                  "shownName" : "帮助元数据标识",
                  "value" : "helpId",
                  "defaultValue" : null
                } ],
                "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "43f68561-eae4-4495-b318-d629615523f8",
                "label" : "BatchEditCommands",
                "name" : "批量编辑控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-edit",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "fe5f7ca3-e508-469b-8068-b44a7c8e6cd7",
                "label" : "rootviewmodelopenBatchEditDialog1",
                "name" : "批量编辑列表数据1",
                "handlerName" : "openBatchEditDialog",
                "params" : [ {
                  "name" : "frameId",
                  "shownName" : "目标组件",
                  "value" : "data-grid-component"
                }, {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Edit"
                } ],
                "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "label" : "EditableListController",
                "name" : "可编辑列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-save",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "ffd1e9ac-1bfb-455f-9aae-b85f22518356",
                "label" : "rootviewmodelSave1",
                "name" : "保存变更1",
                "handlerName" : "Save",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Save",
                  "defaultValue" : null
                }, {
                  "name" : "commandName",
                  "shownName" : "保存后回调方法",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "frameId",
                  "shownName" : "目标组件",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "successMsg",
                  "shownName" : "保存成功提示信息",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "label" : "EditableListController",
                "name" : "可编辑列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-cancel",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "c011b77d-5baf-49be-b35a-19e89d69134f",
                "label" : "Cancel1",
                "name" : "取消变更",
                "handlerName" : "Cancel",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel",
                  "defaultValue" : null
                }, {
                  "name" : "loadCmdName",
                  "shownName" : "取消后回调方法",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "loadCmdFrameId",
                  "shownName" : "目标组件",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "label" : "EditableListController",
                "name" : "可编辑列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-delete",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "9a011b2d-27e3-4e8f-b86d-46c58e5abffe",
                "label" : "Remove1",
                "name" : "删除当前数据",
                "handlerName" : "Remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/data-grid-component/id}",
                  "defaultValue" : null
                }, {
                  "name" : "ifSave",
                  "shownName" : "是否保存",
                  "value" : "{STATEMACHINE~/renderStates/canEdit}",
                  "defaultValue" : null
                }, {
                  "name" : "refreshCommandName",
                  "shownName" : "删除后回调方法",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "refreshCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "successMsg",
                  "shownName" : "删除成功提示信息",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "label" : "EditableListController",
                "name" : "可编辑列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "helpId",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "lookupPicked",
                "name" : "帮助后事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "f09d5dfe-da51-4608-89c0-b36a11924bcc",
                "label" : "rootviewmodelbatchAppend5",
                "name" : "批量新增主表数据5",
                "handlerName" : "batchAppend",
                "params" : [ {
                  "name" : "frameId",
                  "shownName" : "目标组件",
                  "value" : "#{data-grid-component}",
                  "defaultValue" : null
                }, {
                  "name" : "mapFields",
                  "shownName" : "字段映射",
                  "value" : "{\"id\":\"goodsID.goodsID\",\"goodsName\":\"goodsID.goodsID_GoodsName\",\"specification\":\"goodsID.goodsID_Specification\",\"price\":\"goodsID.goodsID_Price\"}",
                  "defaultValue" : null
                }, {
                  "name" : "transitAction",
                  "shownName" : "状态机动作",
                  "value" : "Create",
                  "defaultValue" : null
                } ],
                "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "43f68561-eae4-4495-b318-d629615523f8",
                "label" : "BatchEditCommands",
                "name" : "批量编辑控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "root-component",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onInit",
                "name" : "初始化事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "279090c9-553d-4936-b1ab-c485ec7e92fc",
                "label" : "Load1",
                "name" : "加载列表数据",
                "handlerName" : "Load",
                "params" : [ {
                  "name" : "filter",
                  "shownName" : "过滤条件",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "label" : "EditableListController",
                "name" : "可编辑列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "dataGrid",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "pageChange",
                "name" : "切换页码"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "cc60a94a-68e9-43b2-9252-95e057e1279a",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Load1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "root-component"
                } ],
                "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "label" : "EditableListController",
                "name" : "可编辑列表控制器"
              }
            }, {
              "event" : {
                "label" : "pageSizeChanged",
                "name" : "分页条数变化事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "cc60a94a-68e9-43b2-9252-95e057e1279a",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Load1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "root-component"
                } ],
                "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
                "label" : "EditableListController",
                "name" : "可编辑列表控制器"
              }
            } ]
          }
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid",
        "publishFormProcess" : true
      }
    },
    "CreationDate" : null
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}