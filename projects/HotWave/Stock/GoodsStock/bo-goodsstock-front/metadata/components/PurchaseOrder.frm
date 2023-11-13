{
  "Header" : {
    "Code" : "PurchaseOrder",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
    "CertId" : null,
    "Name" : "补货采购单",
    "FileName" : "PurchaseOrder.frm",
    "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099",
    "Language" : null,
    "Extendable" : false,
    "ID" : "0de6d327-9d31-4179-8025-b30a51a03f70",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "3fdc027b-3b8c-4620-b1ed-dfe0efa3e2a3",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
      "Code" : "PurchaseOrder.frm",
      "Name" : "PurchaseOrder.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "0de6d327-9d31-4179-8025-b30a51a03f70",
    "Contents" : {
      "module" : {
        "id" : "PurchaseOrder",
        "code" : "PurchaseOrder",
        "name" : "补货采购单",
        "caption" : "补货采购单",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-25T07:43:14.826Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
        "schemas" : [ {
          "id" : "3ac97901-21e7-4627-bac7-85c4cd3a4998",
          "sourceType" : "vo",
          "sourceUri" : "api/hotwave/stock/v1.0/PurchaseOrder_frm",
          "variables" : [ ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "PurchaseOrder_frm",
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
                "id" : "e1b9346b-3208-4e08-8c2a-ef233488e0ad",
                "code" : "ID",
                "originalId" : "e1b9346b-3208-4e08-8c2a-ef233488e0ad",
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
                "id" : "ba96a65a-4f51-450b-be75-3e41bd8f327a",
                "code" : "Version",
                "originalId" : "ba96a65a-4f51-450b-be75-3e41bd8f327a",
                "bindingField" : "version",
                "bindingPath" : "version",
                "name" : "版本"
              }, {
                "$type" : "ComplexField",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "EnumField"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "require" : false,
                    "type" : {
                      "$type" : "EnumType",
                      "displayName" : "枚举",
                      "valueType" : {
                        "$type" : "StringType",
                        "displayName" : "字符串",
                        "length" : 36,
                        "name" : "String"
                      },
                      "enumValues" : [ {
                        "name" : "制单",
                        "value" : "Billing"
                      }, {
                        "name" : "提交审批",
                        "value" : "SubmitApproval"
                      }, {
                        "name" : "审批通过",
                        "value" : "Approved"
                      }, {
                        "name" : "审批不通过",
                        "value" : "ApprovalNotPassed"
                      } ],
                      "name" : "Enum"
                    },
                    "label" : "billState",
                    "path" : "BillStatus.BillState",
                    "id" : "afb7afb6-0101-468f-ae3f-40c76c0f06b0",
                    "code" : "BillState",
                    "originalId" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
                    "bindingField" : "billStatus_BillState",
                    "bindingPath" : "billStatus.billState",
                    "name" : "状态"
                  } ],
                  "name" : "BillStateAfb7",
                  "displayName" : "状态"
                },
                "label" : "billStatus",
                "path" : "BillStatus",
                "id" : "afb7afb6-bb35-466f-aa46-0a4deaa63a29",
                "code" : "BillStatus",
                "originalId" : "afb7afb6-bb35-466f-aa46-0a4deaa63a29",
                "bindingField" : "billStatus",
                "bindingPath" : "billStatus",
                "name" : "状态"
              }, {
                "$type" : "ComplexField",
                "type" : {
                  "$type" : "ObjectType",
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
                    "label" : "processInstance",
                    "path" : "ProcessInstance.ProcessInstance",
                    "id" : "4dc95047-ad8f-4da3-a430-c8a7f2162135",
                    "code" : "ProcessInstance",
                    "originalId" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135",
                    "bindingField" : "processInstance_ProcessInstance",
                    "bindingPath" : "processInstance.processInstance",
                    "name" : "流程实例"
                  } ],
                  "name" : "ProcessInstance4dc9",
                  "displayName" : "流程实例"
                },
                "label" : "processInstance",
                "path" : "ProcessInstance",
                "id" : "4dc95047-4f88-4537-97fd-8c14e50afa05",
                "code" : "ProcessInstance",
                "originalId" : "4dc95047-4f88-4537-97fd-8c14e50afa05",
                "bindingField" : "processInstance",
                "bindingPath" : "processInstance",
                "name" : "流程实例"
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
                "label" : "orderCode",
                "path" : "OrderCode",
                "id" : "eb2b6329-f4d0-453e-8bd2-745ee0512332",
                "code" : "OrderCode",
                "originalId" : "eb2b6329-f4d0-453e-8bd2-745ee0512332",
                "bindingField" : "orderCode",
                "bindingPath" : "orderCode",
                "name" : "采购编号"
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
                    "label" : "merchant",
                    "path" : "Merchant.Merchant",
                    "id" : "619d0cff-fbfe-4252-9bac-e104ebc0655d",
                    "code" : "Merchant",
                    "originalId" : "619d0cff-fbfe-4252-9bac-e104ebc0655d",
                    "bindingField" : "merchant",
                    "bindingPath" : "merchant.merchant",
                    "name" : "商户"
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
                    "label" : "merchant_MerchantName",
                    "path" : "Merchant.Merchant_MerchantName",
                    "id" : "63a09429-2540-48ad-bdfa-5bcd3739d47a",
                    "code" : "MerchantName",
                    "originalId" : "63a09429-2540-48ad-bdfa-5bcd3739d47a",
                    "bindingField" : "merchant_Merchant_MerchantName",
                    "bindingPath" : "merchant.merchant_MerchantName",
                    "name" : "商户名称"
                  }, {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "商户名称",
                    "id" : "36298a52-4b3e-4af7-b0a3-9821c9070fc7",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_ParentMerchantID_MerchantName",
                    "label" : "merchant_ParentMerchantID_MerchantName",
                    "code" : "MerchantName(ParentMerchantID)",
                    "originalId" : "36298a52-4b3e-4af7-b0a3-9821c9070fc7",
                    "bindingPath" : "merchant.merchant_ParentMerchantID_MerchantName",
                    "bindingField" : "merchant_Merchant_ParentMerchantID_MerchantName"
                  }, {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "管理员",
                    "id" : "3512216e-65a8-4846-933e-9dac783bd3c4",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_ParentMerchantID_Adminstrator",
                    "label" : "merchant_ParentMerchantID_Adminstrator",
                    "code" : "Adminstrator(ParentMerchantID)",
                    "originalId" : "3512216e-65a8-4846-933e-9dac783bd3c4",
                    "bindingPath" : "merchant.merchant_ParentMerchantID_Adminstrator",
                    "bindingField" : "merchant_Merchant_ParentMerchantID_Adminstrator"
                  } ],
                  "primary" : "merchant",
                  "entities" : [ ],
                  "displayName" : "商户",
                  "name" : "MerChant619d"
                },
                "label" : "merchant",
                "path" : "Merchant",
                "id" : "3306626c-c1c9-4c43-a67a-f20849043a2e",
                "code" : "Merchant",
                "originalId" : "3306626c-c1c9-4c43-a67a-f20849043a2e",
                "bindingField" : "merchant",
                "bindingPath" : "merchant",
                "name" : "商户"
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
                  "$type" : "DateType",
                  "displayName" : "日期",
                  "name" : "Date"
                },
                "label" : "expectedTime",
                "path" : "ExpectedTime",
                "id" : "56dc23aa-24a5-441a-9117-2dcf12441a7c",
                "code" : "ExpectedTime",
                "originalId" : "56dc23aa-24a5-441a-9117-2dcf12441a7c",
                "bindingField" : "expectedTime",
                "bindingPath" : "expectedTime",
                "name" : "预计送达时间"
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
                  "$type" : "DateType",
                  "displayName" : "日期",
                  "name" : "Date"
                },
                "label" : "orderTime",
                "path" : "OrderTime",
                "id" : "c4d1b237-bed3-4654-94a3-6b1831bd72ca",
                "code" : "OrderTime",
                "originalId" : "c4d1b237-bed3-4654-94a3-6b1831bd72ca",
                "bindingField" : "orderTime",
                "bindingPath" : "orderTime",
                "name" : "下单时间"
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
                    "label" : "orderPerson",
                    "path" : "OrderPerson.OrderPerson",
                    "id" : "f462f519-1918-4218-be9f-fadfa0d2031b",
                    "code" : "OrderPerson",
                    "originalId" : "f462f519-1918-4218-be9f-fadfa0d2031b",
                    "bindingField" : "orderPerson",
                    "bindingPath" : "orderPerson.orderPerson",
                    "name" : "下单人"
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
                      "length" : 120,
                      "name" : "String"
                    },
                    "label" : "orderPerson_name",
                    "path" : "OrderPerson.OrderPerson_name",
                    "id" : "c00ee193-18a0-4184-8d6b-11c2144a35a9",
                    "code" : "name",
                    "originalId" : "c00ee193-18a0-4184-8d6b-11c2144a35a9",
                    "bindingField" : "orderPerson_OrderPerson_name",
                    "bindingPath" : "orderPerson.orderPerson_name",
                    "name" : "名称"
                  } ],
                  "primary" : "orderPerson",
                  "entities" : [ ],
                  "displayName" : "系统用户",
                  "name" : "GspUserWithOrgNameF462"
                },
                "label" : "orderPerson",
                "path" : "OrderPerson",
                "id" : "6c824023-3f7e-4eac-9f41-0ba40b3f594c",
                "code" : "OrderPerson",
                "originalId" : "6c824023-3f7e-4eac-9f41-0ba40b3f594c",
                "bindingField" : "orderPerson",
                "bindingPath" : "orderPerson",
                "name" : "下单人"
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
                "label" : "totalPrice",
                "path" : "TotalPrice",
                "id" : "6ec93dfd-89c6-4816-a4de-aa073edd51f8",
                "code" : "TotalPrice",
                "originalId" : "6ec93dfd-89c6-4816-a4de-aa073edd51f8",
                "bindingField" : "totalPrice",
                "bindingPath" : "totalPrice",
                "name" : "采购金额"
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
                  "length" : 100,
                  "name" : "String"
                },
                "label" : "remark",
                "path" : "Remark",
                "id" : "d7c25e3d-00bb-4748-bdc6-888b9268e1e1",
                "code" : "Remark",
                "originalId" : "d7c25e3d-00bb-4748-bdc6-888b9268e1e1",
                "bindingField" : "remark",
                "bindingPath" : "remark",
                "name" : "备注"
              } ],
              "primary" : "id",
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
                    "id" : "f9cfbd7c-f541-4afb-9360-b708e9db625a",
                    "code" : "ID",
                    "originalId" : "f9cfbd7c-f541-4afb-9360-b708e9db625a",
                    "bindingField" : "id",
                    "bindingPath" : "id",
                    "name" : "主键"
                  }, {
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
                    "label" : "parentID",
                    "path" : "ParentID",
                    "id" : "4bfd12c4-544a-4d97-b626-e8b504e7a555",
                    "code" : "ParentID",
                    "originalId" : "4bfd12c4-544a-4d97-b626-e8b504e7a555",
                    "bindingField" : "parentID",
                    "bindingPath" : "parentID",
                    "name" : "上级对象主键"
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
                        "label" : "goods",
                        "path" : "Goods.Goods",
                        "id" : "889cc129-df3b-4cc0-aaef-ae1440736f0f",
                        "code" : "Goods",
                        "originalId" : "889cc129-df3b-4cc0-aaef-ae1440736f0f",
                        "bindingField" : "goods",
                        "bindingPath" : "goods.goods",
                        "name" : "商品"
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
                        "label" : "goods_GoodsName",
                        "path" : "Goods.Goods_GoodsName",
                        "id" : "053fe342-66e1-4a50-9e67-fd5aa2c006a5",
                        "code" : "GoodsName",
                        "originalId" : "053fe342-66e1-4a50-9e67-fd5aa2c006a5",
                        "bindingField" : "goods_Goods_GoodsName",
                        "bindingPath" : "goods.goods_GoodsName",
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
                        "label" : "goods_Specification",
                        "path" : "Goods.Goods_Specification",
                        "id" : "7a80c1a7-56a1-4bcd-8c80-897ae2afbfb5",
                        "code" : "Specification",
                        "originalId" : "7a80c1a7-56a1-4bcd-8c80-897ae2afbfb5",
                        "bindingField" : "goods_Goods_Specification",
                        "bindingPath" : "goods.goods_Specification",
                        "name" : "规格型号"
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
                        "label" : "goods_Price",
                        "path" : "Goods.Goods_Price",
                        "id" : "de552d64-f1d1-473c-a098-ebf98ecbdad7",
                        "code" : "Price",
                        "originalId" : "de552d64-f1d1-473c-a098-ebf98ecbdad7",
                        "bindingField" : "goods_Goods_Price",
                        "bindingPath" : "goods.goods_Price",
                        "name" : "单价"
                      } ],
                      "primary" : "goods",
                      "entities" : [ ],
                      "displayName" : "商品",
                      "name" : "Goods889c"
                    },
                    "label" : "goods",
                    "path" : "Goods",
                    "id" : "4ab1bce5-bb1c-41ab-93f6-fdecc247ac91",
                    "code" : "Goods",
                    "originalId" : "4ab1bce5-bb1c-41ab-93f6-fdecc247ac91",
                    "bindingField" : "goods",
                    "bindingPath" : "goods",
                    "name" : "商品"
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
                    "label" : "quality",
                    "path" : "Quality",
                    "id" : "b81a8d03-d102-4552-afe6-34d3f1f57ccd",
                    "code" : "Quality",
                    "originalId" : "b81a8d03-d102-4552-afe6-34d3f1f57ccd",
                    "bindingField" : "quality",
                    "bindingPath" : "quality",
                    "name" : "采购数量"
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
                    "label" : "price",
                    "path" : "Price",
                    "id" : "9ca3c686-46de-4593-bf93-c5f08863212d",
                    "code" : "Price",
                    "originalId" : "9ca3c686-46de-4593-bf93-c5f08863212d",
                    "bindingField" : "price",
                    "bindingPath" : "price",
                    "name" : "采购单价"
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
                    "label" : "amount",
                    "path" : "Amount",
                    "id" : "95e56af1-c949-400f-93fd-65f564abf50c",
                    "code" : "Amount",
                    "originalId" : "95e56af1-c949-400f-93fd-65f564abf50c",
                    "bindingField" : "amount",
                    "bindingPath" : "amount",
                    "name" : "采购小计"
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
                      "length" : 100,
                      "name" : "String"
                    },
                    "label" : "remark",
                    "path" : "Remark",
                    "id" : "668d79eb-1c3d-49ad-8f8c-ae45d6123983",
                    "code" : "Remark",
                    "originalId" : "668d79eb-1c3d-49ad-8f8c-ae45d6123983",
                    "bindingField" : "remark",
                    "bindingPath" : "remark",
                    "name" : "备注"
                  } ],
                  "primary" : "id",
                  "entities" : [ ],
                  "displayName" : "补货采购细节",
                  "name" : "PurchaseDetail"
                },
                "label" : "purchaseDetails",
                "id" : "df90187d-3a39-4f2f-bdee-7726c6e2ea82",
                "code" : "PurchaseDetail",
                "name" : "补货采购细节"
              } ],
              "displayName" : "补货采购单",
              "name" : "PurchaseOrder"
            },
            "label" : "purchaseOrders",
            "id" : "928f5a5f-fd3d-4dda-b450-d15ffe448599",
            "code" : "PurchaseOrder",
            "name" : "补货采购单"
          } ],
          "name" : "补货采购单_frm",
          "eapiId" : "50306863-989d-4ea1-af7c-39aa810af593",
          "eapiCode" : "PurchaseOrder_frm",
          "eapiName" : "补货采购单_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
          "voPath" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "PurchaseOrder_state_machine",
          "name" : "补货采购单_frm",
          "uri" : "0d3babaa-ef38-42b1-ac99-b12504d40742",
          "code" : "PurchaseOrder_frm",
          "nameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "补货采购单",
          "fields" : [ {
            "type" : "Variable",
            "id" : "7dcd74c4-d15d-4669-b904-bf6717d90847",
            "fieldName" : "goodsinfo",
            "groupId" : "",
            "groupName" : ""
          } ],
          "stateMachine" : "PurchaseOrder_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "code" : "Load1",
            "name" : "加载",
            "params" : [ {
              "name" : "action",
              "shownName" : "初始方法",
              "value" : "{UISTATE~/root-component/action}",
              "defaultValue" : null
            } ],
            "handlerName" : "Load",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "code" : "LoadAndAdd1",
            "name" : "加载并新增",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "LoadAndAdd",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "code" : "LoadAndView1",
            "name" : "加载并查看",
            "params" : [ {
              "name" : "id",
              "shownName" : "待查看数据的标识",
              "value" : "{UISTATE~/root-component/id}",
              "defaultValue" : null
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            }, {
              "name" : "transitionActionParamName",
              "shownName" : "状态迁移动作参数编号",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "LoadAndView",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "code" : "LoadAndEdit1",
            "name" : "加载并编辑",
            "params" : [ {
              "name" : "id",
              "shownName" : "待编辑数据的标识",
              "value" : "{UISTATE~/root-component/id}",
              "defaultValue" : null
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit",
              "defaultValue" : null
            }, {
              "name" : "transitionActionParamName",
              "shownName" : "状态迁移动作参数编号",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "LoadAndEdit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "code" : "Add1",
            "name" : "新增数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create",
              "defaultValue" : null
            } ],
            "handlerName" : "Add",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "code" : "Edit1",
            "name" : "编辑数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit",
              "defaultValue" : null
            } ],
            "handlerName" : "Edit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "code" : "Save1",
            "name" : "保存数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            }, {
              "name" : "successMsg",
              "shownName" : "保存成功提示信息",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "Save",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "code" : "Cancel1",
            "name" : "取消变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "code" : "ChangeItem1",
            "name" : "ChangeItem",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/root-component/id}",
              "defaultValue" : null
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "prev",
              "defaultValue" : null
            }, {
              "name" : "parentId",
              "shownName" : "parentId",
              "value" : "{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "code" : "ChangeItem2",
            "name" : "ChangeItem2",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/root-component/id}",
              "defaultValue" : null
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "next",
              "defaultValue" : null
            }, {
              "name" : "parentId",
              "shownName" : "parentId",
              "value" : "{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel",
              "defaultValue" : null
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "0d34f338-b601-4716-8530-493b0752483b",
            "code" : "submitWithBizDefKey1",
            "name" : "提交审批",
            "params" : [ {
              "name" : "dataId",
              "shownName" : "表单数据id",
              "value" : "{DATA~/basic-form-component/id}",
              "defaultValue" : null
            }, {
              "name" : "bizDefKey",
              "shownName" : "流程分类id",
              "value" : "42c8a499-d14a-4d67-b595-3d796ef5c54f",
              "defaultValue" : null
            }, {
              "name" : "action",
              "shownName" : "迁移动作（可选）",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "submitWithBizDefKey",
            "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "e492063e-a22d-4f23-8aed-7fe139843220",
            "code" : "cancelSubmitWithDataId1",
            "name" : "取消提交",
            "params" : [ {
              "name" : "dataId",
              "shownName" : "表单数据id",
              "value" : "{DATA~/basic-form-component/id}",
              "defaultValue" : null
            }, {
              "name" : "bizDefKey",
              "shownName" : "流程分类id",
              "value" : "42c8a499-d14a-4d67-b595-3d796ef5c54f",
              "defaultValue" : null
            }, {
              "name" : "action",
              "shownName" : "迁移动作（可选）",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "cancelSubmitWithDataId",
            "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c9b4893a-4035-461b-afcc-2ea76e233b79",
            "code" : "rootviewmodelbatchAppendByPathBasedOnHelpSelections1",
            "name" : "批量新增从表/从从表1",
            "params" : [ {
              "name" : "frameId",
              "shownName" : "目标组件",
              "value" : "purchasedetail-component",
              "defaultValue" : null
            }, {
              "name" : "mapFields",
              "shownName" : "字段映射",
              "value" : "{\"goodsID.goodsID\":\"goods.goods\",\"goodsID.goodsID_GoodsName\":\"goods.goods_GoodsName\",\"goodsID.goodsID_Specification\":\"goods.goods_Specification\",\"goodsID.goodsID_Price\":\"price,goods.goods_Price\",\"suggestPurchaseNum\":\"quality\"}",
              "defaultValue" : null
            } ],
            "handlerName" : "batchAppendByPathBasedOnHelpSelections",
            "cmpId" : "43f68561-eae4-4495-b318-d629615523f8",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "9f12a923-ad77-4eb6-90e7-4aad9a417cd8",
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
          } ],
          "states" : [ {
            "id" : "7dcd74c4-d15d-4669-b904-bf6717d90847",
            "code" : "goodsinfo",
            "name" : "商品信息",
            "type" : "String",
            "category" : "locale"
          } ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "basic-form-viewmodel",
          "code" : "basic-form-viewmodel",
          "name" : "补货采购单",
          "fields" : [ {
            "type" : "Form",
            "id" : "63a09429-2540-48ad-bdfa-5bcd3739d47a",
            "fieldName" : "merchant_Merchant_MerchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "PurchaseOrder.merchant_Merchant_MerchantName",
                  "displayName" : "商户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "merchantName",
                "displayType" : "TreeList",
                "mapFields" : "{'id':'merchant.merchant','merchantName':'merchant.merchant_MerchantName','parentMerchantID.parentMerchantID_MerchantName':'merchant.merchant_ParentMerchantID_MerchantName'}",
                "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556"
              },
              "name" : "商户",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "56dc23aa-24a5-441a-9117-2dcf12441a7c",
            "fieldName" : "expectedTime",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c4d1b237-bed3-4654-94a3-6b1831bd72ca",
            "fieldName" : "orderTime",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c00ee193-18a0-4184-8d6b-11c2144a35a9",
            "fieldName" : "orderPerson_OrderPerson_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "下单人"
            }
          }, {
            "type" : "Form",
            "id" : "6ec93dfd-89c6-4816-a4de-aa073edd51f8",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "d7c25e3d-00bb-4748-bdc6-888b9268e1e1",
            "fieldName" : "remark",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "36298a52-4b3e-4af7-b0a3-9821c9070fc7",
            "fieldName" : "merchant_Merchant_ParentMerchantID_MerchantName",
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
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        }, {
          "id" : "purchasedetail-component-viewmodel",
          "code" : "purchasedetail-component-viewmodel",
          "name" : "补货采购细节",
          "fields" : [ {
            "type" : "Form",
            "id" : "053fe342-66e1-4a50-9e67-fd5aa2c006a5",
            "fieldName" : "goods_Goods_GoodsName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "7a80c1a7-56a1-4bcd-8c80-897ae2afbfb5",
            "fieldName" : "goods_Goods_Specification",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "b81a8d03-d102-4552-afe6-34d3f1f57ccd",
            "fieldName" : "quality",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "9ca3c686-46de-4593-bf93-c5f08863212d",
            "fieldName" : "price",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "95e56af1-c949-400f-93fd-65f564abf50c",
            "fieldName" : "amount",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "668d79eb-1c3d-49ad-8f8c-ae45d6123983",
            "fieldName" : "remark",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          } ],
          "states" : [ ],
          "bindTo" : "/purchaseDetails",
          "parent" : "root-viewmodel",
          "commands" : [ {
            "id" : "a81e783d-c70d-4e1e-a236-661f0bea99d7",
            "code" : "purchasedetailAddItem1",
            "name" : "增加一条子表数据",
            "params" : [ ],
            "handlerName" : "AddItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "715521e3-5d22-4ecd-afa5-e0a3123c8487",
            "code" : "purchasedetailRemoveItem1",
            "name" : "删除一条子表数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除子表数据的标识",
              "value" : "{DATA~/#{purchasedetail-component}/purchaseDetails/id}"
            } ],
            "handlerName" : "RemoveItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "enableValidation" : true,
          "pagination" : {
            "enable" : false
          }
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "viewModel" : "root-viewmodel",
          "componentType" : "Frame",
          "onInit" : "Load1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-card f-page-is-mainsubcard"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'补货采购单'}}</h4><h5 class=\"f-title-subtitle\">{{viewModel.bindingData.getValue(['orderCode'])}}</h5><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
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
                    "text" : "新增",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "visible" : true,
                    "click" : "Add1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "text" : "编辑",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canEdit']",
                    "visible" : true,
                    "click" : "Edit1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-save",
                    "type" : "ToolBarItem",
                    "text" : "保存",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canSave']",
                    "visible" : true,
                    "click" : "Save1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel",
                    "type" : "ToolBarItem",
                    "text" : "取消",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancel']",
                    "visible" : true,
                    "click" : "Cancel1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-approve",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canApprove']",
                    "text" : "提交审批",
                    "visible" : true,
                    "click" : "submitWithBizDefKey1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel-approve",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancelApprove']",
                    "text" : "取消提交审批",
                    "visible" : true,
                    "click" : "cancelSubmitWithDataId1",
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
              "id" : "main-container",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "like-card-container",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-struct-like-card"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "basic-form-component-ref",
                  "type" : "ComponentRef",
                  "component" : "basic-form-component",
                  "visible" : true
                }, {
                  "id" : "detail-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-struct-wrapper"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "detail-section",
                    "type" : "Section",
                    "appearance" : {
                      "class" : "f-section-tabs f-section-in-mainsubcard"
                    },
                    "visible" : true,
                    "mainTitle" : "",
                    "subTitle" : "",
                    "headerClass" : "",
                    "titleClass" : "",
                    "extendedHeaderAreaClass" : "",
                    "toolbarClass" : "",
                    "extendedAreaClass" : "",
                    "contentTemplateClass" : "",
                    "fill" : false,
                    "expanded" : true,
                    "enableMaximize" : false,
                    "enableAccordion" : true,
                    "accordionMode" : "default",
                    "showHeader" : false,
                    "headerTemplate" : "",
                    "titleTemplate" : "",
                    "extendedHeaderAreaTemplate" : "",
                    "toolbarTemplate" : "",
                    "extendedAreaTemplate" : "",
                    "contents" : [ {
                      "id" : "detail-tab",
                      "type" : "Tab",
                      "controlSource" : "Farris",
                      "appearance" : {
                        "class" : "f-component-tabs f-tabs-has-grid"
                      },
                      "selected" : "purchasedetail-tab-page",
                      "size" : null,
                      "position" : "top",
                      "contents" : [ {
                        "id" : "purchasedetail-tab-page",
                        "type" : "TabPage",
                        "controlSource" : "Farris",
                        "title" : "补货采购细节",
                        "appearance" : null,
                        "size" : null,
                        "removeable" : false,
                        "headerTemplate" : null,
                        "contents" : [ {
                          "id" : "purchasedetail-component-ref",
                          "type" : "ComponentRef",
                          "component" : "purchasedetail-component",
                          "visible" : true
                        } ],
                        "toolbar" : {
                          "id" : "purchasedetail-tab-toolbar",
                          "type" : "TabToolbar",
                          "position" : "inHead",
                          "contents" : [ {
                            "id" : "purchasedetailAddButton",
                            "type" : "TabToolbarItem",
                            "title" : "添加补货商品",
                            "disable" : "!viewModel.stateMachine['canAddDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "rootviewmodelopenHiddenHelp1"
                          }, {
                            "id" : "purchasedetailRemoveButton",
                            "type" : "TabToolbarItem",
                            "title" : "删除",
                            "disable" : "!viewModel.stateMachine['canRemoveDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.purchasedetail-component-viewmodel.purchasedetailRemoveItem1"
                          } ]
                        },
                        "visible" : true
                      } ],
                      "tabChange" : null,
                      "tabRemove" : null,
                      "contentFill" : false,
                      "autoTitleWidth" : false,
                      "titleWidth" : 0,
                      "titleLength" : 7,
                      "visible" : true
                    } ],
                    "isScrollSpyItem" : false,
                    "toolbar" : {
                      "id" : "detail-section-toolbar",
                      "type" : "SectionToolbar",
                      "position" : "inHead",
                      "contents" : [ ]
                    }
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false
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
                    "title" : "商品库帮助",
                    "appearance" : {
                      "class" : "col-12"
                    },
                    "border" : null,
                    "font" : null,
                    "margin" : null,
                    "padding" : null,
                    "size" : null,
                    "binding" : {
                      "type" : "Variable",
                      "path" : "goodsinfo",
                      "field" : "7dcd74c4-d15d-4669-b904-bf6717d90847",
                      "fullPath" : "goodsinfo"
                    },
                    "readonly" : false,
                    "require" : false,
                    "disable" : false,
                    "placeHolder" : "",
                    "format" : null,
                    "validation" : null,
                    "value" : null,
                    "dataSource" : {
                      "uri" : "000.goodsinfo",
                      "displayName" : "商品库帮助",
                      "idField" : "id",
                      "type" : "ViewObject"
                    },
                    "textField" : "goodsID.goodsID_GoodsName",
                    "valueField" : "id",
                    "displayType" : "List",
                    "multiSelect" : true,
                    "pageSize" : null,
                    "pageIndex" : null,
                    "pagination" : null,
                    "dialogTitle" : null,
                    "showMaxButton" : null,
                    "showCloseButton" : null,
                    "resizable" : null,
                    "buttonAlign" : null,
                    "mapFields" : "",
                    "lookupPicking" : null,
                    "lookupPicked" : "rootviewmodelbatchAppendByPathBasedOnHelpSelections1",
                    "linkedLabelEnabled" : false,
                    "linkedLabelClick" : null,
                    "visible" : true,
                    "enableExtendLoadMethod" : true,
                    "editable" : false,
                    "clear" : null,
                    "helpId" : "f7ee3965-d277-40a2-8eb9-8dd531c3ca87",
                    "expandLevel" : -1,
                    "isRecordSize" : false,
                    "lookupStyle" : "popup",
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "isTextArea" : null,
                    "holdPlace" : false,
                    "beforeShow" : null,
                    "beforeHide" : null,
                    "onShown" : null,
                    "onHidden" : null,
                    "titleSourceType" : "static",
                    "pageList" : "10,20,30,50,100",
                    "useTip" : false,
                    "useFavorite" : true,
                    "noSearch" : false,
                    "maxSearchLength" : null,
                    "enableToSelect" : true,
                    "enableClear" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
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
                    "labelAutoOverflow" : false,
                    "valueChange" : null,
                    "panelWidth" : 1150
                  } ],
                  "controlsInline" : false,
                  "visible" : true,
                  "formAutoIntl" : true,
                  "draggable" : false
                } ],
                "visible" : true,
                "draggable" : false,
                "isLikeCardContainer" : true,
                "isScrollspyContainer" : false
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
          "id" : "basic-form-component",
          "type" : "Component",
          "viewModel" : "basic-form-viewmodel",
          "componentType" : "form-col-4",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "onInit" : "",
          "contents" : [ {
            "id" : "basic-form-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-mainsubcard"
            },
            "visible" : true,
            "mainTitle" : "基本信息",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : false,
            "expanded" : true,
            "enableMaximize" : false,
            "enableAccordion" : true,
            "accordionMode" : "default",
            "showHeader" : true,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "basic-form-layout",
              "type" : "Form",
              "appearance" : {
                "class" : "f-form-layout farris-form farris-form-controls-inline"
              },
              "size" : null,
              "contents" : [ {
                "id" : "merchant_Merchant_MerchantName_63a09429_qmzw",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "商户",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant_Merchant_MerchantName",
                  "field" : "63a09429-2540-48ad-bdfa-5bcd3739d47a",
                  "fullPath" : "Merchant.Merchant_MerchantName"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "PurchaseOrder.merchant_Merchant_MerchantName",
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
                "mapFields" : "{'id':'merchant.merchant','merchantName':'merchant.merchant_MerchantName','parentMerchantID.parentMerchantID_MerchantName':'merchant.merchant_ParentMerchantID_MerchantName'}",
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
                "path" : "merchant.merchant_MerchantName",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556"
              }, {
                "id" : "merchant_Merchant_ParentMerchantID_MerchantName_36298a52_yx1o",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "上游商户/经销商",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant_Merchant_ParentMerchantID_MerchantName",
                  "field" : "36298a52-4b3e-4af7-b0a3-9821c9070fc7",
                  "fullPath" : "Merchant.Merchant_ParentMerchantID_MerchantName"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
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
                "path" : "merchant.merchant_ParentMerchantID_MerchantName",
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
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "fieldValueChanging" : "",
                "fieldValueChanged" : ""
              }, {
                "id" : "expectedTime_56dc23aa_uy5z",
                "type" : "DateBox",
                "titleSourceType" : "static",
                "title" : "预计送达时间",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "expectedTime",
                  "field" : "56dc23aa-24a5-441a-9117-2dcf12441a7c",
                  "fullPath" : "ExpectedTime"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "validation" : null,
                "value" : null,
                "editable" : true,
                "dateRange" : false,
                "showTime" : false,
                "showType" : 1,
                "dateFormat" : "yyyy-MM-dd",
                "returnFormat" : "yyyy-MM-dd",
                "maxValue" : null,
                "minValue" : null,
                "disableDates" : [ ],
                "showWeekNumbers" : false,
                "dateRangeDatesDelimiter" : "~",
                "shortcuts" : [ ],
                "fieldType" : "Date",
                "useDefault" : false,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "isTextArea" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "localization" : false,
                "path" : "expectedTime",
                "localizationType" : "Date",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "orderTime_c4d1b237_c7mc",
                "type" : "DateBox",
                "titleSourceType" : "static",
                "title" : "下单时间",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderTime",
                  "field" : "c4d1b237-bed3-4654-94a3-6b1831bd72ca",
                  "fullPath" : "OrderTime"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "validation" : null,
                "value" : null,
                "editable" : true,
                "dateRange" : false,
                "showTime" : false,
                "showType" : 1,
                "dateFormat" : "yyyy-MM-dd",
                "returnFormat" : "yyyy-MM-dd",
                "maxValue" : null,
                "minValue" : null,
                "disableDates" : [ ],
                "showWeekNumbers" : false,
                "dateRangeDatesDelimiter" : "~",
                "shortcuts" : [ ],
                "fieldType" : "Date",
                "useDefault" : false,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "isTextArea" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "localization" : false,
                "path" : "orderTime",
                "localizationType" : "Date",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "orderPerson_OrderPerson_name_c00ee193_ix0g",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "下单人",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderPerson_OrderPerson_name",
                  "field" : "c00ee193-18a0-4184-8d6b-11c2144a35a9",
                  "fullPath" : "OrderPerson.OrderPerson_name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 120,
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
                "path" : "orderPerson.orderPerson_name",
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
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "totalPrice_6ec93dfd_x09n",
                "type" : "NumericBox",
                "titleSourceType" : "static",
                "title" : "采购金额",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "totalPrice",
                  "field" : "6ec93dfd-89c6-4816-a4de-aa073edd51f8",
                  "fullPath" : "TotalPrice"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
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
                "path" : "totalPrice",
                "localization" : false,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "remark_d7c25e3d_8pj7",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "备注",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "remark",
                  "field" : "d7c25e3d-00bb-4748-bdc6-888b9268e1e1",
                  "fullPath" : "Remark"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 100,
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
                "path" : "remark",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500
              } ],
              "controlsInline" : true,
              "formAutoIntl" : true,
              "visible" : true,
              "labelAutoOverflow" : false
            } ],
            "isScrollSpyItem" : false,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null,
          "name" : "基本信息组件"
        }, {
          "id" : "purchasedetail-component",
          "type" : "Component",
          "viewModel" : "purchasedetail-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-is-subgrid"
          },
          "contents" : [ {
            "id" : "purchasedetail-component-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-grid-is-sub f-utils-flex-column"
            },
            "size" : null,
            "contents" : [ {
              "id" : "dataGrid_purchasedetail",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "dataSource" : "purchaseDetails",
              "fields" : [ {
                "id" : "goods_Goods_GoodsName_053fe342_cike",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商品名称",
                "captionTemplate" : null,
                "dataField" : "goods.goods_GoodsName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goods_Goods_GoodsName",
                  "field" : "053fe342-66e1-4a50-9e67-fd5aa2c006a5",
                  "fullPath" : "Goods.Goods_GoodsName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goods_Goods_GoodsName_053fe342_88dg",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goods_Goods_GoodsName",
                    "field" : "053fe342-66e1-4a50-9e67-fd5aa2c006a5"
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
                  "path" : "goods.goods_GoodsName",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500
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
                "localizationType" : "Date"
              }, {
                "id" : "goods_Goods_Specification_7a80c1a7_p7jl",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "规格型号",
                "captionTemplate" : null,
                "dataField" : "goods.goods_Specification",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goods_Goods_Specification",
                  "field" : "7a80c1a7-56a1-4bcd-8c80-897ae2afbfb5",
                  "fullPath" : "Goods.Goods_Specification"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goods_Goods_Specification_7a80c1a7_09tw",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goods_Goods_Specification",
                    "field" : "7a80c1a7-56a1-4bcd-8c80-897ae2afbfb5"
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
                  "path" : "goods.goods_Specification",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500
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
                "localizationType" : "Date"
              }, {
                "id" : "quality_b81a8d03_d8r9",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "采购数量",
                "captionTemplate" : null,
                "dataField" : "quality",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "quality",
                  "field" : "b81a8d03-d102-4552-afe6-34d3f1f57ccd",
                  "fullPath" : "Quality"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "quality_b81a8d03_4uk1",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "quality",
                    "field" : "b81a8d03-d102-4552-afe6-34d3f1f57ccd"
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
                  "path" : "quality",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500
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
                "id" : "price_9ca3c686_362q",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "采购单价",
                "captionTemplate" : null,
                "dataField" : "price",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "price",
                  "field" : "9ca3c686-46de-4593-bf93-c5f08863212d",
                  "fullPath" : "Price"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "price_9ca3c686_bmjk",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "price",
                    "field" : "9ca3c686-46de-4593-bf93-c5f08863212d"
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
                  "path" : "price",
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
                "id" : "amount_95e56af1_2k0y",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "采购小计",
                "captionTemplate" : null,
                "dataField" : "amount",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "amount",
                  "field" : "95e56af1-c949-400f-93fd-65f564abf50c",
                  "fullPath" : "Amount"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "amount_95e56af1_mesz",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "amount",
                    "field" : "95e56af1-c949-400f-93fd-65f564abf50c",
                    "fullPath" : "Amount"
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
                  "path" : "amount",
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
                "path" : "amount"
              }, {
                "id" : "remark_668d79eb_fyk9",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "备注",
                "captionTemplate" : null,
                "dataField" : "remark",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "remark",
                  "field" : "668d79eb-1c3d-49ad-8f8c-ae45d6123983",
                  "fullPath" : "Remark"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "remark_668d79eb_3slt",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "remark",
                    "field" : "668d79eb-1c3d-49ad-8f8c-ae45d6123983"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 100,
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
                  "path" : "remark",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "formatValidation" : {
                    "type" : "none",
                    "expression" : "",
                    "message" : ""
                  },
                  "autoHeight" : false,
                  "maxHeight" : 500
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
                "localizationType" : "Date"
              } ],
              "appearance" : {
                "class" : "f-component-grid f-utils-fill"
              },
              "size" : null,
              "disable" : false,
              "focusedItem" : null,
              "focusedIndex" : null,
              "pagination" : false,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "showPageList" : false,
              "identifyField" : null,
              "multiSelect" : false,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "selectable" : null,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "groupable" : false,
              "group" : null,
              "showGroupColumn" : true,
              "groupFormatter" : null,
              "groupStyler" : null,
              "groupFooter" : false,
              "editable" : "viewModel.stateMachine['editable']",
              "fieldEditable" : true,
              "fitColumns" : false,
              "autoFitColumns" : false,
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "onSelectionChange" : "",
              "styler" : "",
              "showLineNumber" : false,
              "appendRow" : "purchasedetailAddItem1",
              "pageChange" : null,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "virtualized" : false,
              "showFooter" : false,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "footerHeight" : 29,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : false,
              "autoHeight" : false,
              "rowClick" : null,
              "showSelectedList" : false,
              "selectedItemFormatter" : null,
              "lineNumberWidth" : 36,
              "enableMorePageSelect" : false,
              "headerWrap" : false,
              "emptyTemplate" : null,
              "emptyDataHeight" : 240,
              "rowHeight" : 30,
              "showPageSize" : false,
              "fixedColumns" : [ ],
              "enableCommandColumn" : false,
              "onEditClicked" : "",
              "onDeleteClicked" : "",
              "commandColumnWidth" : 120,
              "showCommandColumn" : true,
              "checkedChange" : null,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "",
              "maxHeight" : 300,
              "enableHighlightCell" : false,
              "enableEditCellStyle" : false,
              "showRowGroupPanel" : false,
              "enableDragColumn" : false,
              "groupSummaryPosition" : "groupFooterRow",
              "clearSelectionsWhenDataIsEmpty" : true,
              "keepSelect" : true,
              "enableEditByCard" : "none",
              "pageSizeChanged" : null,
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
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : null,
              "pagerContentTemplate" : null,
              "expandGroupRows" : true,
              "useBlankWhenDataIsEmpty" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
          } ],
          "componentType" : "dataGrid",
          "visible" : true,
          "onInit" : null,
          "afterViewInit" : null,
          "name" : "补货采购细节组件"
        } ],
        "webcmds" : [ {
          "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "CardController.webcmd",
          "refedHandlers" : [ {
            "host" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "handler" : "Load"
          }, {
            "host" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "handler" : "LoadAndAdd"
          }, {
            "host" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "handler" : "LoadAndView"
          }, {
            "host" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "handler" : "LoadAndEdit"
          }, {
            "host" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "handler" : "Add"
          }, {
            "host" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "handler" : "Edit"
          }, {
            "host" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "handler" : "Save"
          }, {
            "host" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "handler" : "Cancel"
          }, {
            "host" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "handler" : "ChangeItem"
          }, {
            "host" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "handler" : "ChangeItem"
          }, {
            "host" : "a81e783d-c70d-4e1e-a236-661f0bea99d7",
            "handler" : "AddItem"
          }, {
            "host" : "715521e3-5d22-4ecd-afa5-e0a3123c8487",
            "handler" : "RemoveItem"
          } ],
          "code" : "CardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
          "path" : null,
          "name" : "ApproveController.webcmd",
          "refedHandlers" : [ {
            "host" : "0d34f338-b601-4716-8530-493b0752483b",
            "handler" : "submitWithBizDefKey"
          }, {
            "host" : "e492063e-a22d-4f23-8aed-7fe139843220",
            "handler" : "cancelSubmitWithDataId"
          } ],
          "code" : "ApproveController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebApprove"
        }, {
          "id" : "43f68561-eae4-4495-b318-d629615523f8",
          "path" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
          "name" : "BatchEditCommands.webcmd",
          "refedHandlers" : [ {
            "host" : "c9b4893a-4035-461b-afcc-2ea76e233b79",
            "handler" : "batchAppendByPathBasedOnHelpSelections"
          }, {
            "host" : "ed1dd931-486b-4dff-9b45-783e813ddc48",
            "handler" : "batchAppendByPathBasedOnHelpSelections"
          }, {
            "host" : "9f12a923-ad77-4eb6-90e7-4aad9a417cd8",
            "handler" : "openHiddenHelp"
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
        "expressions" : [ {
          "fieldId" : "95e56af1-c949-400f-93fd-65f564abf50c",
          "expression" : [ {
            "id" : "95e56af1-c949-400f-93fd-65f564abf50c_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"PurchaseOrder.purchaseDetails.quality*PurchaseOrder.purchaseDetails.price\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "6ec93dfd-89c6-4816-a4de-aa073edd51f8",
          "expression" : [ {
            "id" : "6ec93dfd-89c6-4816-a4de-aa073edd51f8_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"DefaultFunction.SumByProp(\\\"PurchaseOrder.purchaseDetails\\\",\\\"amount\\\")\",\"sexpr\":\"\"}"
          } ]
        } ],
        "metadataId" : "0de6d327-9d31-4179-8025-b30a51a03f70",
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
                "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
                "label" : "Add1",
                "name" : "新增数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Create",
                  "defaultValue" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
                "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
                "label" : "Edit1",
                "name" : "编辑数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Edit",
                  "defaultValue" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
                "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
                "label" : "Save1",
                "name" : "保存数据",
                "handlerName" : "Save",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel",
                  "defaultValue" : null
                }, {
                  "name" : "successMsg",
                  "shownName" : "保存成功提示信息",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
                "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
                "label" : "Cancel1",
                "name" : "取消变更",
                "handlerName" : "Cancel",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel",
                  "defaultValue" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-approve",
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
                "id" : "0d34f338-b601-4716-8530-493b0752483b",
                "label" : "submitWithBizDefKey1",
                "name" : "提交审批",
                "handlerName" : "submitWithBizDefKey",
                "params" : [ {
                  "name" : "dataId",
                  "shownName" : "表单数据id",
                  "value" : "{DATA~/basic-form-component/id}",
                  "defaultValue" : null
                }, {
                  "name" : "bizDefKey",
                  "shownName" : "流程分类id",
                  "value" : "42c8a499-d14a-4d67-b595-3d796ef5c54f",
                  "defaultValue" : null
                }, {
                  "name" : "action",
                  "shownName" : "迁移动作（可选）",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
                "label" : "ApproveController",
                "name" : "审批控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-cancel-approve",
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
                "id" : "e492063e-a22d-4f23-8aed-7fe139843220",
                "label" : "cancelSubmitWithDataId1",
                "name" : "取消提交",
                "handlerName" : "cancelSubmitWithDataId",
                "params" : [ {
                  "name" : "dataId",
                  "shownName" : "表单数据id",
                  "value" : "{DATA~/basic-form-component/id}",
                  "defaultValue" : null
                }, {
                  "name" : "bizDefKey",
                  "shownName" : "流程分类id",
                  "value" : "42c8a499-d14a-4d67-b595-3d796ef5c54f",
                  "defaultValue" : null
                }, {
                  "name" : "action",
                  "shownName" : "迁移动作（可选）",
                  "value" : "",
                  "defaultValue" : null
                } ],
                "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
                "label" : "ApproveController",
                "name" : "审批控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "purchasedetailAddButton",
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
                "id" : "9f12a923-ad77-4eb6-90e7-4aad9a417cd8",
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
            "id" : "purchasedetailRemoveButton",
            "viewModelId" : "purchasedetail-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "purchasedetail-component",
                "viewModelId" : "purchasedetail-component-viewmodel"
              },
              "command" : {
                "id" : "715521e3-5d22-4ecd-afa5-e0a3123c8487",
                "label" : "purchasedetailRemoveItem1",
                "name" : "删除一条子表数据",
                "handlerName" : "RemoveItem",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除子表数据的标识",
                  "value" : "{DATA~/#{purchasedetail-component}/purchaseDetails/id}"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
                "id" : "c9b4893a-4035-461b-afcc-2ea76e233b79",
                "label" : "rootviewmodelbatchAppendByPathBasedOnHelpSelections1",
                "name" : "批量新增从表/从从表1",
                "handlerName" : "batchAppendByPathBasedOnHelpSelections",
                "params" : [ {
                  "name" : "frameId",
                  "shownName" : "目标组件",
                  "value" : "purchasedetail-component",
                  "defaultValue" : null
                }, {
                  "name" : "mapFields",
                  "shownName" : "字段映射",
                  "value" : "{\"goodsID.goodsID\":\"goods.goods\",\"goodsID.goodsID_GoodsName\":\"goods.goods_GoodsName\",\"goodsID.goodsID_Specification\":\"goods.goods_Specification\",\"goodsID.goodsID_Price\":\"price,goods.goods_Price\",\"suggestPurchaseNum\":\"quality\"}",
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
                "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
                "label" : "Load1",
                "name" : "加载",
                "handlerName" : "Load",
                "params" : [ {
                  "name" : "action",
                  "shownName" : "初始方法",
                  "value" : "{UISTATE~/root-component/action}",
                  "defaultValue" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "dataGrid_purchasedetail",
            "viewModelId" : "purchasedetail-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "appendRow",
                "name" : "回车新增行事件"
              },
              "targetComponent" : {
                "id" : "purchasedetail-component",
                "viewModelId" : "purchasedetail-component-viewmodel"
              },
              "command" : {
                "id" : "a81e783d-c70d-4e1e-a236-661f0bea99d7",
                "label" : "purchasedetailAddItem1",
                "name" : "增加一条子表数据",
                "handlerName" : "AddItem",
                "params" : [ ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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