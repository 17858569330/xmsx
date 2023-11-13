{
  "Header" : {
    "Code" : "GoodsStockPurchase",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
    "CertId" : null,
    "Name" : "智能补货",
    "FileName" : "GoodsStockPurchase.frm",
    "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099",
    "Language" : null,
    "Extendable" : false,
    "ID" : "e59a9c2f-3674-4a75-b49b-b0156671a618",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "fa3f3b31-2c31-48d2-8d04-013e93248087",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
      "Code" : "GoodsStockPurchase.frm",
      "Name" : "GoodsStockPurchase.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "CreationDate" : null,
    "Id" : "e59a9c2f-3674-4a75-b49b-b0156671a618",
    "Contents" : {
      "module" : {
        "id" : "GoodsStockPurchase",
        "code" : "GoodsStockPurchase",
        "name" : "智能补货",
        "caption" : "智能补货",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-25T06:02:44.170Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "id" : "cb5d51c9-e9ca-4c4d-b5a8-4f21f7357a5f",
          "sourceType" : "vo",
          "sourceUri" : "api/hotwave/stock/v1.0/GoodsStockPurchase_frm",
          "variables" : [ ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "GoodsStockPurchase_frm",
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
                "id" : "b4181e3b-5cf6-49fa-b079-5aa5751dc5b3",
                "code" : "ID",
                "originalId" : "b4181e3b-5cf6-49fa-b079-5aa5751dc5b3",
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
                "id" : "5fde6001-3e8b-45d3-86e1-dc87a29a5303",
                "code" : "Version",
                "originalId" : "5fde6001-3e8b-45d3-86e1-dc87a29a5303",
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
                    "id" : "449ab777-5b01-4601-b668-d0bfa8c94a4b",
                    "code" : "MerchantName",
                    "originalId" : "449ab777-5b01-4601-b668-d0bfa8c94a4b",
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
                    "id" : "a0506f55-ced7-4dee-90bd-a9fb269d52d9",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "MerchantID.MerchantID_ParentMerchantID_MerchantName",
                    "code" : "MerchantName(ParentMerchantID)",
                    "label" : "merchantID_ParentMerchantID_MerchantName",
                    "originalId" : "a0506f55-ced7-4dee-90bd-a9fb269d52d9",
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
                "id" : "4328ae87-7e9e-425b-bb1c-2b6f53967938",
                "code" : "MerchantID",
                "originalId" : "4328ae87-7e9e-425b-bb1c-2b6f53967938",
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
                    "id" : "4d203697-263b-4f3c-a780-71ebd01403f2",
                    "code" : "GoodsName",
                    "originalId" : "4d203697-263b-4f3c-a780-71ebd01403f2",
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
                    "id" : "b1978607-4e33-4a31-8acd-54be69c51a3f",
                    "code" : "Specification",
                    "originalId" : "b1978607-4e33-4a31-8acd-54be69c51a3f",
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
                    "id" : "866a29d8-2b06-48c3-a641-91a981ca965b",
                    "code" : "Category",
                    "originalId" : "866a29d8-2b06-48c3-a641-91a981ca965b",
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
                    "id" : "c6bb9f5c-d9f7-4316-be87-61421d9eed63",
                    "code" : "Price",
                    "originalId" : "c6bb9f5c-d9f7-4316-be87-61421d9eed63",
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
                    "id" : "6325e90d-f129-4b74-acb4-028fb3d7c073",
                    "code" : "Number",
                    "originalId" : "6325e90d-f129-4b74-acb4-028fb3d7c073",
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
                "id" : "ccba9e3d-6459-4bda-bd2f-de71a3126b48",
                "code" : "GoodsID",
                "originalId" : "ccba9e3d-6459-4bda-bd2f-de71a3126b48",
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
                "id" : "a92c4fee-810f-48fb-a9fd-4cb2dfefe473",
                "code" : "StockNum",
                "originalId" : "a92c4fee-810f-48fb-a9fd-4cb2dfefe473",
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
                "id" : "4c701678-656a-476d-8186-bc11ba15ab47",
                "code" : "DailySalesNum",
                "originalId" : "4c701678-656a-476d-8186-bc11ba15ab47",
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
                "id" : "2e8b73c1-86e7-4afb-98df-849e3ce85952",
                "code" : "SafetyStockDays",
                "originalId" : "2e8b73c1-86e7-4afb-98df-849e3ce85952",
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
                "id" : "b650091f-924a-491d-b5df-905f97856ce8",
                "code" : "SafetyStockNum",
                "originalId" : "b650091f-924a-491d-b5df-905f97856ce8",
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
                "id" : "aad3f44b-3c01-40a7-93ed-470adf840dd5",
                "code" : "InPurchaseNum",
                "originalId" : "aad3f44b-3c01-40a7-93ed-470adf840dd5",
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
                "id" : "e3ff082d-7ce3-4dac-8b8c-2e5d395ec6b0",
                "code" : "InSalesNum",
                "originalId" : "e3ff082d-7ce3-4dac-8b8c-2e5d395ec6b0",
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
                "id" : "5da37cfa-d1b5-4981-a755-d759651f0a2c",
                "code" : "SuggestPurchaseNum",
                "originalId" : "5da37cfa-d1b5-4981-a755-d759651f0a2c",
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
                "id" : "0857b6f4-39ad-44c6-96f4-200a64dc0a39",
                "code" : "RecentPurchasePrice",
                "originalId" : "0857b6f4-39ad-44c6-96f4-200a64dc0a39",
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
                "id" : "5bf05a98-4db8-449f-8a16-4ee425061ee0",
                "code" : "StockAmount",
                "originalId" : "5bf05a98-4db8-449f-8a16-4ee425061ee0",
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
            "id" : "7cd1d93b-c312-4970-bb9e-1bed3c7c02b7",
            "code" : "GoodsStock",
            "name" : "商品库"
          } ],
          "name" : "智能补货_frm",
          "eapiId" : "a17c04f7-fab7-434b-8420-3437a986a9cb",
          "eapiCode" : "GoodsStockPurchase_frm",
          "eapiName" : "智能补货_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
          "voPath" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "GoodsStockPurchase_state_machine",
          "name" : "智能补货_frm",
          "uri" : "bba9211a-fcf0-48bd-9058-74c3a5be7f74",
          "code" : "GoodsStockPurchase_frm",
          "nameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "商品库",
          "fields" : [ ],
          "stateMachine" : "GoodsStockPurchase_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "279090c9-553d-4936-b1ab-c485ec7e92fc",
            "code" : "Load1",
            "name" : "加载列表数据",
            "params" : [ ],
            "handlerName" : "Load",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "d61e870d-464e-4f68-9a70-2dd1da750c59",
            "code" : "Add1",
            "name" : "新增一条数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create"
            } ],
            "handlerName" : "Add",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "dd1a68e5-f404-4c07-81ab-77e3cb545c4f",
            "code" : "Edit1",
            "name" : "编辑当前数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "Edit",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "05da19e1-247e-4d03-bad7-48ce024ef5c3",
            "code" : "Save1",
            "name" : "保存变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Save"
            } ],
            "handlerName" : "Save",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c011b77d-5baf-49be-b35a-19e89d69134f",
            "code" : "Cancel1",
            "name" : "取消变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "9a011b2d-27e3-4e8f-b86d-46c58e5abffe",
            "code" : "Remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "ifSave",
              "shownName" : "是否保存",
              "value" : "{STATEMACHINE~/renderStates/canEdit}"
            } ],
            "handlerName" : "Remove",
            "cmpId" : "d7ce1ba6-49c7-4a27-805f-f78f42e72725",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ff2a373e-e7f2-411e-b201-b354a2c7dfb0",
            "code" : "rootviewmodelAdd1",
            "name" : "在新页签中新增数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndAdd1\"}"
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "Add",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "商品库",
          "fields" : [ {
            "type" : "Form",
            "id" : "449ab777-5b01-4601-b668-d0bfa8c94a4b",
            "fieldName" : "merchantID_MerchantID_MerchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "4d203697-263b-4f3c-a780-71ebd01403f2",
            "fieldName" : "goodsID_GoodsID_GoodsName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "b1978607-4e33-4a31-8acd-54be69c51a3f",
            "fieldName" : "goodsID_GoodsID_Specification",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "c6bb9f5c-d9f7-4316-be87-61421d9eed63",
            "fieldName" : "goodsID_GoodsID_Price",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "a92c4fee-810f-48fb-a9fd-4cb2dfefe473",
            "fieldName" : "stockNum",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "4c701678-656a-476d-8186-bc11ba15ab47",
            "fieldName" : "dailySalesNum",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "2e8b73c1-86e7-4afb-98df-849e3ce85952",
            "fieldName" : "safetyStockDays",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "b650091f-924a-491d-b5df-905f97856ce8",
            "fieldName" : "safetyStockNum",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "aad3f44b-3c01-40a7-93ed-470adf840dd5",
            "fieldName" : "inPurchaseNum",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "e3ff082d-7ce3-4dac-8b8c-2e5d395ec6b0",
            "fieldName" : "inSalesNum",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "5da37cfa-d1b5-4981-a755-d759651f0a2c",
            "fieldName" : "suggestPurchaseNum",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "readonly" : true
            }
          }, {
            "type" : "Form",
            "id" : "a0506f55-ced7-4dee-90bd-a9fb269d52d9",
            "fieldName" : "merchantID_MerchantID_ParentMerchantID_MerchantName",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "上游商户/经销商"
            }
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
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'智能补货'}}</h4>"
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
                    "text" : "生成补货单",
                    "visible" : true,
                    "click" : "rootviewmodelAdd1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canEdit']",
                    "text" : "编辑",
                    "visible" : true,
                    "click" : "Edit1",
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
                    "click" : "Save1",
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
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
          } ],
          "appearance" : null,
          "visible" : true,
          "afterViewInit" : null
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
                "id" : "merchantID_MerchantID_MerchantName_449ab777_1loy",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商户名称",
                "captionTemplate" : null,
                "dataField" : "merchantID.merchantID_MerchantName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchantID_MerchantID_MerchantName",
                  "field" : "449ab777-5b01-4601-b668-d0bfa8c94a4b",
                  "fullPath" : "MerchantID.MerchantID_MerchantName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "merchantID_MerchantID_MerchantName_449ab777_04y5",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "merchantID_MerchantID_MerchantName",
                    "field" : "449ab777-5b01-4601-b668-d0bfa8c94a4b"
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
                  "path" : "merchantID.merchantID_MerchantName",
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_nrnh",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "上游商户/经销商",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchantID_MerchantID_ParentMerchantID_MerchantName",
                  "field" : "a0506f55-ced7-4dee-90bd-a9fb269d52d9",
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
                  "id" : "merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_487y",
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
                    "field" : "a0506f55-ced7-4dee-90bd-a9fb269d52d9",
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
                "localizationType" : "Date"
              }, {
                "id" : "goodsID_GoodsID_GoodsName_4d203697_hjqn",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商品名称",
                "captionTemplate" : null,
                "dataField" : "goodsID.goodsID_GoodsName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsID_GoodsID_GoodsName",
                  "field" : "4d203697-263b-4f3c-a780-71ebd01403f2",
                  "fullPath" : "GoodsID.GoodsID_GoodsName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goodsID_GoodsID_GoodsName_4d203697_ofi2",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goodsID_GoodsID_GoodsName",
                    "field" : "4d203697-263b-4f3c-a780-71ebd01403f2"
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "goodsID_GoodsID_Specification_b1978607_m5lu",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "规格型号",
                "captionTemplate" : null,
                "dataField" : "goodsID.goodsID_Specification",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsID_GoodsID_Specification",
                  "field" : "b1978607-4e33-4a31-8acd-54be69c51a3f",
                  "fullPath" : "GoodsID.GoodsID_Specification"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goodsID_GoodsID_Specification_b1978607_zciu",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goodsID_GoodsID_Specification",
                    "field" : "b1978607-4e33-4a31-8acd-54be69c51a3f"
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "localizationType" : "Date"
              }, {
                "id" : "goodsID_GoodsID_Price_c6bb9f5c_v1zr",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "单价",
                "captionTemplate" : null,
                "dataField" : "goodsID.goodsID_Price",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsID_GoodsID_Price",
                  "field" : "c6bb9f5c-d9f7-4316-be87-61421d9eed63",
                  "fullPath" : "GoodsID.GoodsID_Price"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goodsID_GoodsID_Price_c6bb9f5c_ht84",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goodsID_GoodsID_Price",
                    "field" : "c6bb9f5c-d9f7-4316-be87-61421d9eed63"
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "stockNum_a92c4fee_3qma",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "当前库存量",
                "captionTemplate" : null,
                "dataField" : "stockNum",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "stockNum",
                  "field" : "a92c4fee-810f-48fb-a9fd-4cb2dfefe473",
                  "fullPath" : "StockNum"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "stockNum_a92c4fee_i4zf",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "stockNum",
                    "field" : "a92c4fee-810f-48fb-a9fd-4cb2dfefe473"
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
                  "path" : "stockNum",
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "dailySalesNum_4c701678_jvc7",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "日销量",
                "captionTemplate" : null,
                "dataField" : "dailySalesNum",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "dailySalesNum",
                  "field" : "4c701678-656a-476d-8186-bc11ba15ab47",
                  "fullPath" : "DailySalesNum"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "dailySalesNum_4c701678_se6r",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "dailySalesNum",
                    "field" : "4c701678-656a-476d-8186-bc11ba15ab47"
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
                  "path" : "dailySalesNum",
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
                "captionTipStyler" : ""
              }, {
                "id" : "safetyStockDays_2e8b73c1_jlxv",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "安全库存天数",
                "captionTemplate" : null,
                "dataField" : "safetyStockDays",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "safetyStockDays",
                  "field" : "2e8b73c1-86e7-4afb-98df-849e3ce85952",
                  "fullPath" : "SafetyStockDays"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "safetyStockDays_2e8b73c1_qaf6",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "safetyStockDays",
                    "field" : "2e8b73c1-86e7-4afb-98df-849e3ce85952"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 0,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 0,
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
                  "path" : "safetyStockDays",
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
                  "precision" : 0,
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
                "captionTipStyler" : ""
              }, {
                "id" : "safetyStockNum_b650091f_j94p",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "安全库存量",
                "captionTemplate" : null,
                "dataField" : "safetyStockNum",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "safetyStockNum",
                  "field" : "b650091f-924a-491d-b5df-905f97856ce8",
                  "fullPath" : "SafetyStockNum"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "safetyStockNum_b650091f_dw29",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "safetyStockNum",
                    "field" : "b650091f-924a-491d-b5df-905f97856ce8"
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
                  "path" : "safetyStockNum",
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "inPurchaseNum_aad3f44b_d4kf",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "采购在订量",
                "captionTemplate" : null,
                "dataField" : "inPurchaseNum",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "inPurchaseNum",
                  "field" : "aad3f44b-3c01-40a7-93ed-470adf840dd5",
                  "fullPath" : "InPurchaseNum"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "inPurchaseNum_aad3f44b_9taw",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "inPurchaseNum",
                    "field" : "aad3f44b-3c01-40a7-93ed-470adf840dd5"
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
                  "path" : "inPurchaseNum",
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "inSalesNum_e3ff082d_onrr",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "销售在订量",
                "captionTemplate" : null,
                "dataField" : "inSalesNum",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "inSalesNum",
                  "field" : "e3ff082d-7ce3-4dac-8b8c-2e5d395ec6b0",
                  "fullPath" : "InSalesNum"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "inSalesNum_e3ff082d_f00v",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "inSalesNum",
                    "field" : "e3ff082d-7ce3-4dac-8b8c-2e5d395ec6b0"
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
                  "path" : "inSalesNum",
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
                "captionTipStyler" : ""
              }, {
                "id" : "suggestPurchaseNum_5da37cfa_iizm",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "建议采购量",
                "captionTemplate" : null,
                "dataField" : "suggestPurchaseNum",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "suggestPurchaseNum",
                  "field" : "5da37cfa-d1b5-4981-a755-d759651f0a2c",
                  "fullPath" : "SuggestPurchaseNum"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "suggestPurchaseNum_5da37cfa_orwk",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "suggestPurchaseNum",
                    "field" : "5da37cfa-d1b5-4981-a755-d759651f0a2c"
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
                  "path" : "suggestPurchaseNum",
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
                "readonly" : true,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              } ],
              "focusedItem" : null,
              "focusedIndex" : null,
              "identifyField" : null,
              "multiSelect" : false,
              "selectable" : null,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
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
              "styler" : "(rowData) => {\r\n    if(rowData.stockNum<rowData.safetyStockNum)\r\n    return {\r\n        style: {\r\n            color: 'red', \r\n        }\r\n    };\r\n}",
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
          "afterViewInit" : null
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
          } ],
          "code" : "EditableListController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
          "path" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
          "name" : "ListController.webcmd",
          "refedHandlers" : [ {
            "host" : "ff2a373e-e7f2-411e-b201-b354a2c7dfb0",
            "handler" : "Add"
          } ],
          "code" : "ListController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-goodsstock-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ {
          "fieldId" : "b650091f-924a-491d-b5df-905f97856ce8",
          "expression" : [ {
            "id" : "b650091f-924a-491d-b5df-905f97856ce8_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"GoodsStock.dailySalesNum*GoodsStock.safetyStockDays\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "a92c4fee-810f-48fb-a9fd-4cb2dfefe473",
          "expression" : [ ]
        }, {
          "fieldId" : "5da37cfa-d1b5-4981-a755-d759651f0a2c",
          "expression" : [ {
            "id" : "5da37cfa-d1b5-4981-a755-d759651f0a2c_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"if(GoodsStock.dailySalesNum*GoodsStock.safetyStockDays>=GoodsStock.stockNum){\\r\\n    return GoodsStock.dailySalesNum*GoodsStock.safetyStockDays-GoodsStock.stockNum;\\r\\n}\\r\\nelse{\\r\\n    return DefaultFunction.ToBigDecimal(\\\"0\\\");\\r\\n}\",\"sexpr\":\"\"}"
          } ]
        } ],
        "metadataId" : "e59a9c2f-3674-4a75-b49b-b0156671a618",
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
                "id" : "ff2a373e-e7f2-411e-b201-b354a2c7dfb0",
                "label" : "rootviewmodelAdd1",
                "name" : "在新页签中新增数据1",
                "handlerName" : "Add",
                "params" : [ {
                  "id" : "cb4250e7-2911-0d35-c21c-469232265847",
                  "name" : "url",
                  "value" : "4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e",
                  "shownName" : "功能菜单标识",
                  "description" : "必填，请选择新增数据页面的功能菜单",
                  "editorType" : "MenuIdSelector",
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "url",
                    "Name" : "功能菜单标识",
                    "Description" : "必填，请选择新增数据页面的功能菜单",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "MenuIdSelector",
                      "context" : null
                    },
                    "Id" : "cb4250e7-2911-0d35-c21c-469232265847",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "ee492ea6-57f9-ce39-6e5b-3e4ea3350898",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndAdd1\"}",
                  "shownName" : "附加参数",
                  "description" : "由列表界面传递给新增数据页面的参数",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "params",
                    "Name" : "附加参数",
                    "Description" : "由列表界面传递给新增数据页面的参数",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "ConfigurationParameterEditor",
                      "context" : {
                        "schema" : {
                          "type" : "object",
                          "value" : "[{\"id\":\"action\",\"label\":\"action\",\"description\":\"进入页面后执行的初始动作\"},{\"id\":\"sync\",\"label\":\"sync\",\"description\":\"进入页面后切换到新增状态\",\"defaultValue\": true,\"editorType\":\"Switch\"}]"
                        }
                      }
                    },
                    "Id" : "ee492ea6-57f9-ce39-6e5b-3e4ea3350898",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "6f174254-d33d-1236-994a-fb48f0a306d8",
                  "name" : "enableRefresh",
                  "value" : "",
                  "shownName" : "支持刷新列表数据",
                  "description" : "启用此选项后，由新增数据页面切换回列表页面时，会自动刷新列表数据",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "enableRefresh",
                    "Name" : "支持刷新列表数据",
                    "Description" : "启用此选项后，由新增数据页面切换回列表页面时，会自动刷新列表数据",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "Switch",
                      "context" : null
                    },
                    "Id" : "6f174254-d33d-1236-994a-fb48f0a306d8",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "d8902678-d71d-5d10-a151-1114a0c1c4da",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "新增数据页签的标题",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "tabName",
                    "Name" : "标签页标题",
                    "Description" : "新增数据页签的标题",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "d8902678-d71d-5d10-a151-1114a0c1c4da",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "5ddcfd0b-c390-6f09-2a31-748b9ed4f759",
                  "name" : "destructuring",
                  "value" : "",
                  "shownName" : "是否解构参数",
                  "description" : "是否解构参数",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "destructuring",
                    "Name" : "是否解构参数",
                    "Description" : "是否解构参数",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "Switch",
                      "context" : null
                    },
                    "Id" : "5ddcfd0b-c390-6f09-2a31-748b9ed4f759",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-edit",
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
                "id" : "dd1a68e5-f404-4c07-81ab-77e3cb545c4f",
                "label" : "Edit1",
                "name" : "编辑当前数据",
                "handlerName" : "Edit",
                "params" : [ {
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
                "id" : "05da19e1-247e-4d03-bad7-48ce024ef5c3",
                "label" : "Save1",
                "name" : "保存变更",
                "handlerName" : "Save",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Save"
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
                  "value" : "Cancel"
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
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "ifSave",
                  "shownName" : "是否保存",
                  "value" : "{STATEMACHINE~/renderStates/canEdit}"
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
                "params" : [ ],
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
    }
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}