{
  "Header" : {
    "Code" : "SaleOrderList",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front",
    "CertId" : null,
    "Name" : "销售订单表单",
    "FileName" : "SaleOrderList.frm",
    "BizobjectID" : "ee0af0b4-e947-7987-a85d-5072623dc1e6",
    "Language" : null,
    "Extendable" : false,
    "ID" : "e4bc7189-d658-454a-929e-fdbbc7baace0",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "419c40dc-0f1c-4bf7-bdaf-fce1e14f0367",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front",
      "Code" : "SaleOrderList.frm",
      "Name" : "SaleOrderList.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "ee0af0b4-e947-7987-a85d-5072623dc1e6"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "e4bc7189-d658-454a-929e-fdbbc7baace0",
    "Contents" : {
      "module" : {
        "id" : "SaleOrderList",
        "code" : "SaleOrderList",
        "name" : "销售订单表单",
        "caption" : "销售订单表单",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-26T06:40:09.954Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "name" : "销售订单表单_frm",
          "id" : "ce692bc1-d105-47a6-a1d0-719863e2a602",
          "sourceType" : "vo",
          "variables" : [ ],
          "code" : "SaleOrderList_frm",
          "entities" : [ {
            "name" : "业务订单",
            "id" : "22651393-02fa-4074-b9ed-92c9cbea4024",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : true,
                "name" : "主键",
                "id" : "733efd3c-f6e8-4531-9376-f75141601f7e",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "label" : "id",
                "code" : "ID",
                "originalId" : "733efd3c-f6e8-4531-9376-f75141601f7e",
                "bindingField" : "id",
                "bindingPath" : "id"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "版本",
                "id" : "2482e064-3e32-4792-b5be-9fdf4cc79af4",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "label" : "version",
                "code" : "Version",
                "originalId" : "2482e064-3e32-4792-b5be-9fdf4cc79af4",
                "bindingField" : "version",
                "bindingPath" : "version"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "订单编号",
                "id" : "767a620f-1ef5-4853-9790-fd32a7e95641",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderCode",
                "label" : "orderCode",
                "code" : "OrderCode",
                "originalId" : "767a620f-1ef5-4853-9790-fd32a7e95641",
                "bindingField" : "orderCode",
                "bindingPath" : "orderCode"
              }, {
                "$type" : "ComplexField",
                "name" : "商户",
                "id" : "6dc9d068-3e15-45c0-8a48-acb7766a3504",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "商户",
                    "id" : "96976ac9-3bb4-4663-8f10-887f7a17d914",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant",
                    "label" : "merchant",
                    "code" : "Merchant",
                    "originalId" : "96976ac9-3bb4-4663-8f10-887f7a17d914",
                    "bindingField" : "merchant",
                    "bindingPath" : "merchant.merchant"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "商户名称",
                    "id" : "c0169d08-558e-45b7-a8c3-29f411eb25e8",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantName",
                    "label" : "merchant_MerchantName",
                    "code" : "MerchantName",
                    "originalId" : "c0169d08-558e-45b7-a8c3-29f411eb25e8",
                    "bindingField" : "merchant_Merchant_MerchantName",
                    "bindingPath" : "merchant.merchant_MerchantName"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "商户编号",
                    "id" : "40871ebf-bd7e-4838-8ef2-836d45e805ef",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantCode",
                    "label" : "merchant_MerchantCode",
                    "code" : "MerchantCode",
                    "originalId" : "40871ebf-bd7e-4838-8ef2-836d45e805ef",
                    "bindingField" : "merchant_Merchant_MerchantCode",
                    "bindingPath" : "merchant.merchant_MerchantCode"
                  } ],
                  "primary" : "merchant",
                  "entities" : [ ],
                  "name" : "MerChant9697",
                  "displayName" : "商户"
                },
                "path" : "Merchant",
                "label" : "merchant",
                "code" : "Merchant",
                "originalId" : "6dc9d068-3e15-45c0-8a48-acb7766a3504",
                "bindingField" : "merchant",
                "bindingPath" : "merchant"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "下单时间",
                "id" : "308bc30d-b0e8-4d30-855a-b50d3ed42a63",
                "type" : {
                  "$type" : "StringType",
                  "length" : 30,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderTime",
                "label" : "orderTime",
                "code" : "OrderTime",
                "originalId" : "308bc30d-b0e8-4d30-855a-b50d3ed42a63",
                "bindingField" : "orderTime",
                "bindingPath" : "orderTime"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "EnumField"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "支付方式",
                "id" : "29a89f50-5554-4bb0-9046-03d5a5610358",
                "type" : {
                  "$type" : "EnumType",
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 20,
                    "name" : "String",
                    "displayName" : "字符串"
                  },
                  "enumValues" : [ {
                    "name" : "现金",
                    "value" : "Cash"
                  }, {
                    "name" : "支付宝",
                    "value" : "AliPay"
                  }, {
                    "name" : "微信支付",
                    "value" : "WeChat"
                  }, {
                    "name" : "银联",
                    "value" : "UPay"
                  } ]
                },
                "path" : "PayMethod",
                "label" : "payMethod",
                "code" : "PayMethod",
                "originalId" : "29a89f50-5554-4bb0-9046-03d5a5610358",
                "bindingField" : "payMethod",
                "bindingPath" : "payMethod"
              }, {
                "$type" : "ComplexField",
                "name" : "下单人",
                "id" : "ac8434be-a97f-41b7-bb97-02ef1b2072d0",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "下单人",
                    "id" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson",
                    "label" : "orderPerson",
                    "code" : "OrderPerson",
                    "originalId" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                    "bindingField" : "orderPerson",
                    "bindingPath" : "orderPerson.orderPerson"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "编号",
                    "id" : "a2bef0a2-4eff-4d83-af88-c8ff337f808e",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 120,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson_code",
                    "label" : "orderPerson_code",
                    "code" : "code",
                    "originalId" : "a2bef0a2-4eff-4d83-af88-c8ff337f808e",
                    "bindingField" : "orderPerson_OrderPerson_code",
                    "bindingPath" : "orderPerson.orderPerson_code"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "名称",
                    "id" : "4481a4c2-43d1-4211-b56b-16f265165340",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 120,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson_name",
                    "label" : "orderPerson_name",
                    "code" : "name",
                    "originalId" : "4481a4c2-43d1-4211-b56b-16f265165340",
                    "bindingField" : "orderPerson_OrderPerson_name",
                    "bindingPath" : "orderPerson.orderPerson_name"
                  } ],
                  "primary" : "orderPerson",
                  "entities" : [ ],
                  "name" : "GspUserWithOrgName771c",
                  "displayName" : "系统用户"
                },
                "path" : "OrderPerson",
                "label" : "orderPerson",
                "code" : "OrderPerson",
                "originalId" : "ac8434be-a97f-41b7-bb97-02ef1b2072d0",
                "bindingField" : "orderPerson",
                "bindingPath" : "orderPerson"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "联系电话",
                "id" : "866d4620-a685-4388-8ce1-9be5291dc38e",
                "type" : {
                  "$type" : "StringType",
                  "length" : 20,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Telephone",
                "label" : "telephone",
                "code" : "Telephone",
                "originalId" : "866d4620-a685-4388-8ce1-9be5291dc38e",
                "bindingField" : "telephone",
                "bindingPath" : "telephone"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "EnumField"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "发货状态",
                "id" : "11e5bd1a-1487-4031-b74a-3db20379c62d",
                "type" : {
                  "$type" : "EnumType",
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 20,
                    "name" : "String",
                    "displayName" : "字符串"
                  },
                  "enumValues" : [ {
                    "name" : "未发货",
                    "value" : "UnShipped"
                  }, {
                    "name" : "已发货",
                    "value" : "Shipped"
                  }, {
                    "name" : "已收货",
                    "value" : "Done"
                  } ]
                },
                "path" : "SendState",
                "label" : "sendState",
                "code" : "SendState",
                "originalId" : "11e5bd1a-1487-4031-b74a-3db20379c62d",
                "bindingField" : "sendState",
                "bindingPath" : "sendState"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "备注",
                "id" : "743dc1bc-be9d-46e4-bd4c-36048d3b10a7",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Remark",
                "label" : "remark",
                "code" : "Remark",
                "originalId" : "743dc1bc-be9d-46e4-bd4c-36048d3b10a7",
                "bindingField" : "remark",
                "bindingPath" : "remark"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "NumericBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "订单金额",
                "id" : "cd60f924-00e3-49d1-b3f9-a20e437439f7",
                "type" : {
                  "$type" : "NumericType",
                  "length" : 10,
                  "name" : "Number",
                  "displayName" : "数字",
                  "precision" : 2
                },
                "path" : "TotalPrice",
                "label" : "totalPrice",
                "code" : "TotalPrice",
                "originalId" : "cd60f924-00e3-49d1-b3f9-a20e437439f7",
                "bindingField" : "totalPrice",
                "bindingPath" : "totalPrice"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "NumericBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "折扣优惠",
                "id" : "dadf3137-4061-41b5-aed2-bbc5866de901",
                "type" : {
                  "$type" : "NumericType",
                  "length" : 10,
                  "name" : "Number",
                  "displayName" : "数字",
                  "precision" : 2
                },
                "path" : "TotalDiscounts",
                "label" : "totalDiscounts",
                "code" : "TotalDiscounts",
                "originalId" : "dadf3137-4061-41b5-aed2-bbc5866de901",
                "bindingField" : "totalDiscounts",
                "bindingPath" : "totalDiscounts"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "NumericBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "合计实付",
                "id" : "6310d9f5-36da-4b43-8c21-5e32e23725ef",
                "type" : {
                  "$type" : "NumericType",
                  "length" : 10,
                  "name" : "Number",
                  "displayName" : "数字",
                  "precision" : 2
                },
                "path" : "ActualPay",
                "label" : "actualPay",
                "code" : "ActualPay",
                "originalId" : "6310d9f5-36da-4b43-8c21-5e32e23725ef",
                "bindingField" : "actualPay",
                "bindingPath" : "actualPay"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "readonly" : false,
                "require" : false,
                "name" : "订单来源",
                "id" : "070516f9-8648-4811-8500-2263aa14f150",
                "type" : {
                  "$type" : "StringType",
                  "length" : 20,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderSource",
                "label" : "orderSource",
                "code" : "OrderSource",
                "originalId" : "070516f9-8648-4811-8500-2263aa14f150",
                "bindingField" : "orderSource",
                "bindingPath" : "orderSource"
              } ],
              "primary" : "id",
              "entities" : [ {
                "name" : "订单明细",
                "id" : "9ff6d450-b2c4-4876-877e-27a75b9131e3",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : true,
                    "name" : "主键",
                    "id" : "768c9c49-220d-4047-a571-5fb6f8ae1ed6",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ID",
                    "label" : "id",
                    "code" : "ID",
                    "originalId" : "768c9c49-220d-4047-a571-5fb6f8ae1ed6",
                    "bindingField" : "id",
                    "bindingPath" : "id"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : true,
                    "name" : "上级对象主键",
                    "id" : "d905d64c-5075-4790-9684-513a39235152",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentID",
                    "label" : "parentID",
                    "code" : "ParentID",
                    "originalId" : "d905d64c-5075-4790-9684-513a39235152",
                    "bindingField" : "parentID",
                    "bindingPath" : "parentID"
                  }, {
                    "$type" : "ComplexField",
                    "name" : "商品",
                    "id" : "17126044-8a7a-4e25-8b26-018841dd1dc1",
                    "type" : {
                      "$type" : "EntityType",
                      "fields" : [ {
                        "$type" : "SimpleField",
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "multiLanguage" : false,
                        "readonly" : false,
                        "require" : false,
                        "name" : "商品",
                        "id" : "d3829541-fe43-4618-9e7b-da3e04fb7b94",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods",
                        "label" : "goods",
                        "code" : "Goods",
                        "originalId" : "d3829541-fe43-4618-9e7b-da3e04fb7b94",
                        "bindingField" : "goods",
                        "bindingPath" : "goods.goods"
                      }, {
                        "$type" : "SimpleField",
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "multiLanguage" : false,
                        "readonly" : false,
                        "require" : false,
                        "name" : "商品名称",
                        "id" : "d9d312b6-72c7-4913-80c7-16af451e600f",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsName",
                        "label" : "goods_GoodsName",
                        "code" : "GoodsName",
                        "originalId" : "d9d312b6-72c7-4913-80c7-16af451e600f",
                        "bindingField" : "goods_Goods_GoodsName",
                        "bindingPath" : "goods.goods_GoodsName"
                      }, {
                        "$type" : "SimpleField",
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "multiLanguage" : false,
                        "readonly" : false,
                        "require" : false,
                        "name" : "商品编号",
                        "id" : "6086a51d-7f4a-41a2-a37f-d6babcdca8c2",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsCode",
                        "label" : "goods_GoodsCode",
                        "code" : "GoodsCode",
                        "originalId" : "6086a51d-7f4a-41a2-a37f-d6babcdca8c2",
                        "bindingField" : "goods_Goods_GoodsCode",
                        "bindingPath" : "goods.goods_GoodsCode"
                      } ],
                      "primary" : "goods",
                      "entities" : [ ],
                      "name" : "GoodsD382",
                      "displayName" : "商品"
                    },
                    "path" : "Goods",
                    "label" : "goods",
                    "code" : "Goods",
                    "originalId" : "17126044-8a7a-4e25-8b26-018841dd1dc1",
                    "bindingField" : "goods",
                    "bindingPath" : "goods"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "规格型号",
                    "id" : "507ccb09-8b30-4d37-886d-7248618dd529",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Specification",
                    "label" : "specification",
                    "code" : "Specification",
                    "originalId" : "507ccb09-8b30-4d37-886d-7248618dd529",
                    "bindingField" : "specification",
                    "bindingPath" : "specification"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "数量",
                    "id" : "b60c3cf4-72b4-4fc5-92d2-88c7b465cbd9",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 0,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 0
                    },
                    "path" : "Quality",
                    "label" : "quality",
                    "code" : "Quality",
                    "originalId" : "b60c3cf4-72b4-4fc5-92d2-88c7b465cbd9",
                    "bindingField" : "quality",
                    "bindingPath" : "quality"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "标准单价",
                    "id" : "469f8d96-166c-45b7-9f7e-3e52c47353cd",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 10,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 2
                    },
                    "path" : "Price",
                    "label" : "price",
                    "code" : "Price",
                    "originalId" : "469f8d96-166c-45b7-9f7e-3e52c47353cd",
                    "bindingField" : "price",
                    "bindingPath" : "price"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "金额",
                    "id" : "9ec9f292-0d5f-48bb-bfbd-98d285c25a38",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 10,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 2
                    },
                    "path" : "Amount",
                    "label" : "amount",
                    "code" : "Amount",
                    "originalId" : "9ec9f292-0d5f-48bb-bfbd-98d285c25a38",
                    "bindingField" : "amount",
                    "bindingPath" : "amount"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "EnumField"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "折扣类型",
                    "id" : "1412792e-ebb3-486f-a1c5-adb45205824f",
                    "type" : {
                      "$type" : "EnumType",
                      "name" : "Enum",
                      "displayName" : "枚举",
                      "valueType" : {
                        "$type" : "StringType",
                        "length" : 20,
                        "name" : "String",
                        "displayName" : "字符串"
                      },
                      "enumValues" : [ {
                        "name" : "无折扣",
                        "value" : "none"
                      }, {
                        "name" : "有折扣",
                        "value" : "dis"
                      } ]
                    },
                    "path" : "DiscountType",
                    "label" : "discountType",
                    "code" : "DiscountType",
                    "originalId" : "1412792e-ebb3-486f-a1c5-adb45205824f",
                    "bindingField" : "discountType",
                    "bindingPath" : "discountType"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "折扣金额",
                    "id" : "cad3bed5-2bf6-4396-b67e-b327a624d44e",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 10,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 2
                    },
                    "path" : "Discount",
                    "label" : "discount",
                    "code" : "Discount",
                    "originalId" : "cad3bed5-2bf6-4396-b67e-b327a624d44e",
                    "bindingField" : "discount",
                    "bindingPath" : "discount"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "实际结算金额",
                    "id" : "f204c227-3192-4d97-8e37-3fe1d0deae23",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 10,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 2
                    },
                    "path" : "ActualAmount",
                    "label" : "actualAmount",
                    "code" : "ActualAmount",
                    "originalId" : "f204c227-3192-4d97-8e37-3fe1d0deae23",
                    "bindingField" : "actualAmount",
                    "bindingPath" : "actualAmount"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "readonly" : false,
                    "require" : false,
                    "name" : "备注",
                    "id" : "9599fe79-3f69-4ccf-9fee-4aea58f5c87b",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 100,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Remark",
                    "label" : "remark",
                    "code" : "Remark",
                    "originalId" : "9599fe79-3f69-4ccf-9fee-4aea58f5c87b",
                    "bindingField" : "remark",
                    "bindingPath" : "remark"
                  } ],
                  "primary" : "id",
                  "entities" : [ ],
                  "name" : "OrderDetail",
                  "displayName" : "订单明细"
                },
                "label" : "orderDetails",
                "code" : "OrderDetail"
              } ],
              "name" : "SaleOrder",
              "displayName" : "业务订单"
            },
            "label" : "saleOrders",
            "code" : "SaleOrder"
          } ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceUri" : "api/hotwave/ordermrg/v1.0/SaleOrderList_frm",
          "eapiId" : "f19373ef-4974-4acc-bd4f-b898831881e0",
          "eapiCode" : "SaleOrderList_frm",
          "eapiName" : "销售订单表单_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front",
          "voPath" : "HotWave/OrderMrg/SaleOrder/bo-saleorder-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "SaleOrderList_state_machine",
          "name" : "销售订单表单_frm",
          "uri" : "6b159c39-622d-46e1-958e-af7db718a862",
          "code" : "SaleOrderList_frm",
          "nameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "业务订单",
          "fields" : [ ],
          "stateMachine" : "SaleOrderList_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "93ee1cd2-cf0b-40b3-b99f-958a3d1fad1c",
            "code" : "Load1",
            "name" : "加载数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : ""
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            } ],
            "handlerName" : "Load",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "71ae8a4c-6202-4875-9246-2e2d959da37f",
            "code" : "Search1",
            "name" : "查询数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : ""
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            }, {
              "name" : "pageSize",
              "shownName" : "分页大小",
              "value" : ""
            }, {
              "name" : "pageIndex",
              "shownName" : "当前页码",
              "value" : ""
            } ],
            "handlerName" : "Search",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "6d5a354f-871f-43e6-82bc-7837184380d3",
            "code" : "RemoveRows1",
            "name" : "删除多行数据",
            "params" : [ {
              "name" : "ids",
              "shownName" : "待删除数据的标识",
              "value" : "{UISTATE~/data-grid-component/ids}"
            } ],
            "handlerName" : "RemoveRows",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "77556491-41c0-4356-8ccf-25e39817060e",
            "code" : "Add1",
            "name" : "在新页签中新增数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "9389af85-4208-4e39-9c97-24cb316d19c9"
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
          }, {
            "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "code" : "View1",
            "name" : "在新页签中查看数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "9389af85-4208-4e39-9c97-24cb316d19c9"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndView1\",\"id\":\"{DATA~/data-grid-component/id}\"}"
            }, {
              "name" : "idToView",
              "shownName" : "待查看数据的标识",
              "value" : "{DATA~/data-grid-component/id}{DATA~/data-grid-component/id}"
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
            "handlerName" : "View",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "code" : "Edit1",
            "name" : "在新页签中编辑数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "9389af85-4208-4e39-9c97-24cb316d19c9"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndEdit1\",\"id\":\"{DATA~/data-grid-component/id}\"}"
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/data-grid-component/id}{DATA~/data-grid-component/id}"
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
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "code" : "Remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "code" : "Filter1",
            "name" : "过滤并加载数据1",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "{UISTATE~/root-component/originalFilterConditionList}"
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            } ],
            "handlerName" : "Filter",
            "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "a6e4aeea-c842-4d9b-8204-609c07440f95",
            "code" : "rootviewmodelsendGoods1",
            "name" : "sendGoods1",
            "params" : [ {
              "name" : "id",
              "shownName" : "单据ID",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "sendstate",
              "shownName" : "单据状态",
              "value" : "Shipped"
            }, {
              "name" : "loadCmdName",
              "shownName" : "数据刷新命令名称",
              "value" : "Load1"
            }, {
              "name" : "loadCmdFrameId",
              "shownName" : "数据刷新命令对应的FrameId",
              "value" : "#{root-component}"
            } ],
            "handlerName" : "sendGoods",
            "cmpId" : "e3680bc9-dddb-4f91-9b99-3d15ca68f1b3",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "root-component"
          } ],
          "states" : [ {
            "id" : "ad1250a9-fe0c-4dcf-81fe-9c2c52608c66",
            "category" : "locale",
            "code" : "originalFilterConditionList",
            "name" : "筛选方案筛选条件",
            "type" : "String"
          } ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "业务订单",
          "fields" : [ {
            "type" : "Form",
            "id" : "767a620f-1ef5-4853-9790-fd32a7e95641",
            "fieldName" : "orderCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c0169d08-558e-45b7-a8c3-29f411eb25e8",
            "fieldName" : "merchant_Merchant_MerchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "308bc30d-b0e8-4d30-855a-b50d3ed42a63",
            "fieldName" : "orderTime",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "29a89f50-5554-4bb0-9046-03d5a5610358",
            "fieldName" : "payMethod",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "4481a4c2-43d1-4211-b56b-16f265165340",
            "fieldName" : "orderPerson_OrderPerson_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "下单人"
            }
          }, {
            "type" : "Form",
            "id" : "866d4620-a685-4388-8ce1-9be5291dc38e",
            "fieldName" : "telephone",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "11e5bd1a-1487-4031-b74a-3db20379c62d",
            "fieldName" : "sendState",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "743dc1bc-be9d-46e4-bd4c-36048d3b10a7",
            "fieldName" : "remark",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "cd60f924-00e3-49d1-b3f9-a20e437439f7",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "dadf3137-4061-41b5-aed2-bbc5866de901",
            "fieldName" : "totalDiscounts",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "6310d9f5-36da-4b43-8c21-5e32e23725ef",
            "fieldName" : "actualPay",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          } ],
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
            "code" : "ChangePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "切换页面后回调方法",
              "value" : "Filter1"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "目标组件",
              "value" : "root-component"
            } ],
            "handlerName" : "ChangePage",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
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
          "enableValidation" : false
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "componentType" : "Frame",
          "viewModel" : "root-viewmodel",
          "onInit" : "Filter1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-is-managelist f-page-has-scheme"
            },
            "size" : null,
            "contents" : [ {
              "id" : "query-scheme-section",
              "type" : "Section",
              "appearance" : {
                "class" : "f-section-scheme f-section-in-managelist"
              },
              "size" : null,
              "fill" : false,
              "expanded" : true,
              "showHeader" : false,
              "contents" : [ {
                "id" : "query-scheme-1",
                "type" : "QueryScheme",
                "appearance" : null,
                "fieldConfigs" : [ {
                  "id" : "733efd3c-f6e8-4531-9376-f75141601f7e",
                  "labelCode" : "ID",
                  "code" : "ID",
                  "name" : "主键",
                  "control" : {
                    "id" : "733efd3c-f6e8-4531-9376-f75141601f7e",
                    "controltype" : "text",
                    "require" : false,
                    "className" : "",
                    "modalConfig" : {
                      "modalCmp" : null,
                      "mapFields" : null,
                      "showHeader" : true,
                      "title" : "",
                      "showCloseButton" : true,
                      "showMaxButton" : true,
                      "width" : 800,
                      "height" : 600,
                      "showFooterButtons" : true,
                      "footerButtons" : [ ]
                    }
                  }
                }, {
                  "id" : "2482e064-3e32-4792-b5be-9fdf4cc79af4",
                  "labelCode" : "Version",
                  "code" : "Version",
                  "name" : "版本",
                  "control" : {
                    "id" : "2482e064-3e32-4792-b5be-9fdf4cc79af4",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "767a620f-1ef5-4853-9790-fd32a7e95641",
                  "labelCode" : "OrderCode",
                  "code" : "OrderCode",
                  "name" : "订单编号",
                  "control" : {
                    "id" : "767a620f-1ef5-4853-9790-fd32a7e95641",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "96976ac9-3bb4-4663-8f10-887f7a17d914",
                  "labelCode" : "Merchant.Merchant",
                  "code" : "Merchant",
                  "name" : "商户",
                  "control" : {
                    "id" : "96976ac9-3bb4-4663-8f10-887f7a17d914",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556",
                    "uri" : "SaleOrder.merchant",
                    "idField" : "id",
                    "valueField" : "id",
                    "textField" : "merchantName",
                    "displayType" : "TreeList",
                    "enableExtendLoadMethod" : false,
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "multiSelect" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
                    "expandLevel" : -1,
                    "className" : "",
                    "nosearch" : false,
                    "displayFields" : "",
                    "clearFields" : "",
                    "editable" : false,
                    "pageList" : "10,20,30,50,100",
                    "pageSize" : 20,
                    "dialogTitle" : "",
                    "panelHeight" : null,
                    "panelWidth" : null,
                    "quickSelect" : {
                      "enable" : false,
                      "showItemsCount" : 10,
                      "formatter" : null,
                      "showMore" : true
                    },
                    "conditions" : [ ]
                  }
                }, {
                  "id" : "c0169d08-558e-45b7-a8c3-29f411eb25e8",
                  "labelCode" : "Merchant.Merchant_MerchantName",
                  "code" : "MerchantName",
                  "name" : "商户名称",
                  "control" : {
                    "id" : "c0169d08-558e-45b7-a8c3-29f411eb25e8",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "40871ebf-bd7e-4838-8ef2-836d45e805ef",
                  "labelCode" : "Merchant.Merchant_MerchantCode",
                  "code" : "MerchantCode",
                  "name" : "商户编号",
                  "control" : {
                    "id" : "40871ebf-bd7e-4838-8ef2-836d45e805ef",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "308bc30d-b0e8-4d30-855a-b50d3ed42a63",
                  "labelCode" : "OrderTime",
                  "code" : "OrderTime",
                  "name" : "下单时间",
                  "control" : {
                    "id" : "308bc30d-b0e8-4d30-855a-b50d3ed42a63",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "29a89f50-5554-4bb0-9046-03d5a5610358",
                  "labelCode" : "PayMethod",
                  "code" : "PayMethod",
                  "name" : "支付方式",
                  "control" : {
                    "id" : "29a89f50-5554-4bb0-9046-03d5a5610358",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "name" : "现金",
                      "value" : "Cash"
                    }, {
                      "name" : "支付宝",
                      "value" : "AliPay"
                    }, {
                      "name" : "微信支付",
                      "value" : "WeChat"
                    }, {
                      "name" : "银联",
                      "value" : "UPay"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                }, {
                  "id" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                  "labelCode" : "OrderPerson.OrderPerson",
                  "code" : "OrderPerson",
                  "name" : "下单人",
                  "control" : {
                    "id" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "99891fee-285e-420d-841a-93e522af0c5a",
                    "uri" : "SaleOrder.orderPerson",
                    "idField" : "id",
                    "valueField" : "id",
                    "textField" : "name",
                    "displayType" : "List",
                    "enableExtendLoadMethod" : false,
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "multiSelect" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
                    "expandLevel" : -1,
                    "className" : "",
                    "nosearch" : false,
                    "displayFields" : "",
                    "clearFields" : "",
                    "editable" : false,
                    "pageList" : "10,20,30,50,100",
                    "pageSize" : 20,
                    "dialogTitle" : "",
                    "panelHeight" : null,
                    "panelWidth" : null,
                    "quickSelect" : {
                      "enable" : false,
                      "showItemsCount" : 10,
                      "formatter" : null,
                      "showMore" : true
                    },
                    "conditions" : null
                  }
                }, {
                  "id" : "a2bef0a2-4eff-4d83-af88-c8ff337f808e",
                  "labelCode" : "OrderPerson.OrderPerson_code",
                  "code" : "code",
                  "name" : "编号",
                  "control" : {
                    "id" : "a2bef0a2-4eff-4d83-af88-c8ff337f808e",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "4481a4c2-43d1-4211-b56b-16f265165340",
                  "labelCode" : "OrderPerson.OrderPerson_name",
                  "code" : "name",
                  "name" : "名称",
                  "control" : {
                    "id" : "4481a4c2-43d1-4211-b56b-16f265165340",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "866d4620-a685-4388-8ce1-9be5291dc38e",
                  "labelCode" : "Telephone",
                  "code" : "Telephone",
                  "name" : "联系电话",
                  "control" : {
                    "id" : "866d4620-a685-4388-8ce1-9be5291dc38e",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "11e5bd1a-1487-4031-b74a-3db20379c62d",
                  "labelCode" : "SendState",
                  "code" : "SendState",
                  "name" : "发货状态",
                  "control" : {
                    "id" : "11e5bd1a-1487-4031-b74a-3db20379c62d",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "name" : "未发货",
                      "value" : "UnShipped"
                    }, {
                      "name" : "已发货",
                      "value" : "Shipped"
                    }, {
                      "name" : "已收货",
                      "value" : "Done"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                }, {
                  "id" : "743dc1bc-be9d-46e4-bd4c-36048d3b10a7",
                  "labelCode" : "Remark",
                  "code" : "Remark",
                  "name" : "备注",
                  "control" : {
                    "id" : "743dc1bc-be9d-46e4-bd4c-36048d3b10a7",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "cd60f924-00e3-49d1-b3f9-a20e437439f7",
                  "labelCode" : "TotalPrice",
                  "code" : "TotalPrice",
                  "name" : "订单金额",
                  "control" : {
                    "id" : "cd60f924-00e3-49d1-b3f9-a20e437439f7",
                    "controltype" : "number",
                    "require" : false,
                    "className" : "",
                    "textAlign" : "left",
                    "precision" : 2,
                    "isBigNumber" : false
                  }
                }, {
                  "id" : "dadf3137-4061-41b5-aed2-bbc5866de901",
                  "labelCode" : "TotalDiscounts",
                  "code" : "TotalDiscounts",
                  "name" : "折扣优惠",
                  "control" : {
                    "id" : "dadf3137-4061-41b5-aed2-bbc5866de901",
                    "controltype" : "number",
                    "require" : false,
                    "className" : "",
                    "textAlign" : "left",
                    "precision" : 2,
                    "isBigNumber" : false
                  }
                }, {
                  "id" : "6310d9f5-36da-4b43-8c21-5e32e23725ef",
                  "labelCode" : "ActualPay",
                  "code" : "ActualPay",
                  "name" : "合计实付",
                  "control" : {
                    "id" : "6310d9f5-36da-4b43-8c21-5e32e23725ef",
                    "controltype" : "number",
                    "require" : false,
                    "className" : "",
                    "textAlign" : "left",
                    "precision" : 2,
                    "isBigNumber" : false
                  }
                }, {
                  "id" : "070516f9-8648-4811-8500-2263aa14f150",
                  "labelCode" : "OrderSource",
                  "code" : "OrderSource",
                  "name" : "订单来源",
                  "control" : {
                    "id" : "070516f9-8648-4811-8500-2263aa14f150",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                } ],
                "presetFieldConfigs" : [ {
                  "id" : "96976ac9-3bb4-4663-8f10-887f7a17d914",
                  "labelCode" : "Merchant.Merchant",
                  "code" : "Merchant",
                  "name" : "商户",
                  "control" : {
                    "id" : "96976ac9-3bb4-4663-8f10-887f7a17d914",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556",
                    "uri" : "SaleOrder.merchant",
                    "idField" : "id",
                    "valueField" : "id",
                    "textField" : "merchantName",
                    "displayType" : "TreeList",
                    "enableExtendLoadMethod" : false,
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "multiSelect" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
                    "expandLevel" : -1,
                    "className" : "",
                    "nosearch" : false,
                    "displayFields" : "",
                    "clearFields" : "",
                    "editable" : false,
                    "pageList" : "10,20,30,50,100",
                    "pageSize" : 20,
                    "dialogTitle" : "",
                    "panelHeight" : null,
                    "panelWidth" : null,
                    "quickSelect" : {
                      "enable" : false,
                      "showItemsCount" : 10,
                      "formatter" : null,
                      "showMore" : true
                    },
                    "conditions" : [ ]
                  }
                }, {
                  "id" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                  "labelCode" : "OrderPerson.OrderPerson",
                  "code" : "OrderPerson",
                  "name" : "下单人",
                  "control" : {
                    "id" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                    "controltype" : "help",
                    "require" : false,
                    "helpId" : "99891fee-285e-420d-841a-93e522af0c5a",
                    "uri" : "SaleOrder.orderPerson",
                    "idField" : "id",
                    "valueField" : "id",
                    "textField" : "name",
                    "displayType" : "List",
                    "enableExtendLoadMethod" : false,
                    "enableFullTree" : false,
                    "loadTreeDataType" : "default",
                    "multiSelect" : false,
                    "enableCascade" : false,
                    "cascadeStatus" : "enable",
                    "expandLevel" : -1,
                    "className" : "",
                    "nosearch" : false,
                    "displayFields" : "",
                    "clearFields" : "",
                    "editable" : false,
                    "pageList" : "10,20,30,50,100",
                    "pageSize" : 20,
                    "dialogTitle" : "",
                    "panelHeight" : null,
                    "panelWidth" : null,
                    "quickSelect" : {
                      "enable" : false,
                      "showItemsCount" : 10,
                      "formatter" : null,
                      "showMore" : true
                    },
                    "conditions" : null
                  }
                } ],
                "formId" : "SaleOrderList",
                "isDisabled" : false,
                "presetQuerySolutionName" : "默认筛选方案",
                "onQuery" : "Filter1",
                "isControlInline" : true,
                "visible" : true,
                "binding" : null,
                "enableInitQuery" : false,
                "showCompleteLabel" : false,
                "expanded" : true,
                "enableHistory" : false
              } ],
              "visible" : true,
              "mainTitle" : "主标题",
              "subTitle" : "",
              "headerClass" : "",
              "titleClass" : "",
              "extendedHeaderAreaClass" : "",
              "toolbarClass" : "",
              "extendedAreaClass" : "",
              "contentTemplateClass" : "",
              "enableMaximize" : false,
              "enableAccordion" : true,
              "accordionMode" : "default",
              "headerTemplate" : "",
              "titleTemplate" : "",
              "extendedHeaderAreaTemplate" : "",
              "toolbarTemplate" : "",
              "extendedAreaTemplate" : "",
              "isScrollSpyItem" : false,
              "toolbar" : {
                "type" : "SectionToolbar",
                "position" : "inHead",
                "contents" : [ ]
              }
            }, {
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
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'销售订单表单'}}</h4>"
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
                    "id" : "button-view",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canView']",
                    "text" : "查看",
                    "visible" : true,
                    "click" : "View1",
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
                  }, {
                    "id" : "toolBarItem-1ra7",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : false,
                    "text" : "发货",
                    "items" : [ ],
                    "visible" : true,
                    "click" : "rootviewmodelsendGoods1",
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
            "enableAccordion" : true,
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
              "dataSource" : "saleOrders",
              "fields" : [ {
                "id" : "merchant_Merchant_MerchantName_c0169d08_9r7o",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商户名称",
                "captionTemplate" : null,
                "dataField" : "merchant.merchant_MerchantName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant_Merchant_MerchantName",
                  "field" : "c0169d08-558e-45b7-a8c3-29f411eb25e8",
                  "fullPath" : "Merchant.Merchant_MerchantName"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "id" : "orderCode_767a620f_0314",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "订单编号",
                "captionTemplate" : null,
                "dataField" : "orderCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderCode",
                  "field" : "767a620f-1ef5-4853-9790-fd32a7e95641",
                  "fullPath" : "OrderCode"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "id" : "orderPerson_OrderPerson_name_4481a4c2_lfg9",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "下单人",
                "captionTemplate" : null,
                "dataField" : "orderPerson.orderPerson_name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderPerson_OrderPerson_name",
                  "field" : "4481a4c2-43d1-4211-b56b-16f265165340",
                  "fullPath" : "OrderPerson.OrderPerson_name"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "id" : "orderTime_308bc30d_axsq",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "下单时间",
                "captionTemplate" : null,
                "dataField" : "orderTime",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderTime",
                  "field" : "308bc30d-b0e8-4d30-855a-b50d3ed42a63",
                  "fullPath" : "OrderTime"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "id" : "telephone_866d4620_1gi0",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "联系电话",
                "captionTemplate" : null,
                "dataField" : "telephone",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "telephone",
                  "field" : "866d4620-a685-4388-8ce1-9be5291dc38e",
                  "fullPath" : "Telephone"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "id" : "payMethod_29a89f50_3c87",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "支付方式",
                "captionTemplate" : null,
                "dataField" : "payMethod",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "payMethod",
                  "field" : "29a89f50-5554-4bb0-9046-03d5a5610358",
                  "fullPath" : "PayMethod"
                },
                "enumData" : [ {
                  "name" : "现金",
                  "value" : "Cash"
                }, {
                  "name" : "支付宝",
                  "value" : "AliPay"
                }, {
                  "name" : "微信支付",
                  "value" : "WeChat"
                }, {
                  "name" : "银联",
                  "value" : "UPay"
                } ],
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "colTemplate" : "<div style=\"display: flex;flex-direction: row;align-items: center;\">\r\n    <ng-container [ngSwitch]=\"ctx.rowData['payMethod']\">\r\n        <ng-container *ngSwitchCase=\"'Cash'\">\r\n            <span class=\"badge badge-round-info\" style=\"margin-right: 5px;\"></span> 现金\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'Wechat'\">\r\n            <span class=\"badge badge-round-warning\" style=\"margin-right: 5px;\"></span> 微信\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'ALipay'\">\r\n            <span class=\"badge badge-round-success\" style=\"margin-right: 5px;\"></span> 支付宝\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'UPay'\">\r\n            <span class=\"badge badge-round-danger\" style=\"margin-right: 5px;\"></span> 银联\r\n        </ng-container>\r\n        <ng-container *ngSwitchDefault>\r\n        </ng-container>\r\n    </ng-container>\r\n</div>",
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
                "captionTipStyler" : ""
              }, {
                "id" : "sendState_11e5bd1a_wmm0",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "发货状态",
                "captionTemplate" : null,
                "dataField" : "sendState",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "sendState",
                  "field" : "11e5bd1a-1487-4031-b74a-3db20379c62d",
                  "fullPath" : "SendState"
                },
                "enumData" : [ {
                  "name" : "未发货",
                  "value" : "UnShipped"
                }, {
                  "name" : "已发货",
                  "value" : "Shipped"
                }, {
                  "name" : "已收货",
                  "value" : "Done"
                } ],
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "colTemplate" : "<div style=\"display: flex;flex-direction: row;align-items: center;\" class=\"f-datagrid-cell-content\">\r\n    <ng-container [ngSwitch]=\"ctx.rowData['sendState']\">\r\n        <span class=\"badge badge-border-danger\" *ngSwitchCase=\"'UnShipped'\">未发货</span>\r\n        <span class=\"badge badge-border-info\" *ngSwitchCase=\"'Shipped'\">已发货</span>\r\n        <span class=\"badge badge-border-success\" *ngSwitchCase=\"'Done'\">已收货</span>\r\n        <span *ngSwitchDefault></span>\r\n    </ng-container>\r\n</div>",
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
                "captionTipStyler" : ""
              }, {
                "id" : "totalPrice_cd60f924_2r7f",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "订单金额",
                "captionTemplate" : null,
                "dataField" : "totalPrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "totalPrice",
                  "field" : "cd60f924-00e3-49d1-b3f9-a20e437439f7",
                  "fullPath" : "TotalPrice"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "id" : "totalDiscounts_dadf3137_toe5",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "折扣优惠",
                "captionTemplate" : null,
                "dataField" : "totalDiscounts",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "totalDiscounts",
                  "field" : "dadf3137-4061-41b5-aed2-bbc5866de901",
                  "fullPath" : "TotalDiscounts"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "styler" : "(value, rowData, rowIndex) => {\r\n    return {\r\n        style: {\r\n            color: 'red',\r\n            fontWeight: 600\r\n        }\r\n    };\r\n}",
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
                "id" : "actualPay_6310d9f5_3uu8",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "合计实付",
                "captionTemplate" : null,
                "dataField" : "actualPay",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "actualPay",
                  "field" : "6310d9f5-36da-4b43-8c21-5e32e23725ef",
                  "fullPath" : "ActualPay"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
                "id" : "remark_743dc1bc_nr9s",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "备注",
                "captionTemplate" : null,
                "dataField" : "remark",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "remark",
                  "field" : "743dc1bc-be9d-46e4-bd4c-36048d3b10a7",
                  "fullPath" : "Remark"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
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
              "fitColumns" : false,
              "autoFitColumns" : false,
              "virtualized" : false,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : "ChangePage1",
              "onSelectionChange" : "",
              "fieldEditable" : false,
              "appendRow" : null,
              "disable" : false,
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
              "pagination" : true,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "showPageSize" : false,
              "editable" : null,
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
          "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "ListController.webcmd",
          "refedHandlers" : [ {
            "host" : "93ee1cd2-cf0b-40b3-b99f-958a3d1fad1c",
            "handler" : "Load"
          }, {
            "host" : "71ae8a4c-6202-4875-9246-2e2d959da37f",
            "handler" : "Search"
          }, {
            "host" : "77556491-41c0-4356-8ccf-25e39817060e",
            "handler" : "Add"
          }, {
            "host" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "handler" : "View"
          }, {
            "host" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "handler" : "Edit"
          }, {
            "host" : "6d5a354f-871f-43e6-82bc-7837184380d3",
            "handler" : "RemoveRows"
          }, {
            "host" : "1a1b7c33-38f0-469f-a017-223086ee6259",
            "handler" : "ChangePage"
          }, {
            "host" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "handler" : "Remove"
          } ],
          "code" : "ListController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
          "path" : "igix/Web/WebCmp/bo-webcmp/metadata/webcmd/data-commands",
          "name" : "LoadCommands.webcmd",
          "refedHandlers" : [ {
            "host" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "handler" : "Filter"
          } ],
          "code" : "LoadCommands",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "e3680bc9-dddb-4f91-9b99-3d15ca68f1b3",
          "path" : "HotWave/OrderMrg/SaleOrder/bo-saleorder-front/metadata/components",
          "name" : "SaleOrderList_frm_Controller.webcmd",
          "refedHandlers" : [ {
            "host" : "a6e4aeea-c842-4d9b-8204-609c07440f95",
            "handler" : "sendGoods"
          } ],
          "code" : "SaleOrderList_frm_Controller",
          "nameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-saleorder-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "e4bc7189-d658-454a-929e-fdbbc7baace0",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "query-scheme-1",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onQuery",
                "name" : "查询"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
                "label" : "Filter1",
                "name" : "过滤并加载数据1",
                "handlerName" : "Filter",
                "params" : [ {
                  "name" : "filter",
                  "shownName" : "过滤条件",
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}"
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : ""
                } ],
                "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "label" : "LoadCommands",
                "name" : "数据加载相关命令"
              }
            } ]
          }
        }, {
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
                "id" : "77556491-41c0-4356-8ccf-25e39817060e",
                "label" : "Add1",
                "name" : "在新页签中新增数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "9389af85-4208-4e39-9c97-24cb316d19c9"
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
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
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
                "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
                "label" : "Edit1",
                "name" : "在新页签中编辑数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "9389af85-4208-4e39-9c97-24cb316d19c9"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndEdit1\",\"id\":\"{DATA~/data-grid-component/id}\"}"
                }, {
                  "name" : "idToEdit",
                  "shownName" : "待编辑数据的标识",
                  "value" : "{DATA~/data-grid-component/id}{DATA~/data-grid-component/id}"
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
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
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
            "id" : "button-view",
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
                "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
                "label" : "View1",
                "name" : "在新页签中查看数据",
                "handlerName" : "View",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "9389af85-4208-4e39-9c97-24cb316d19c9"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndView1\",\"id\":\"{DATA~/data-grid-component/id}\"}"
                }, {
                  "name" : "idToView",
                  "shownName" : "待查看数据的标识",
                  "value" : "{DATA~/data-grid-component/id}{DATA~/data-grid-component/id}"
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
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
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
                "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
                "label" : "Remove1",
                "name" : "删除当前数据",
                "handlerName" : "Remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/data-grid-component/id}"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
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
                "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
                "label" : "Filter1",
                "name" : "过滤并加载数据1",
                "handlerName" : "Filter",
                "params" : [ {
                  "name" : "filter",
                  "shownName" : "过滤条件",
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}"
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : ""
                } ],
                "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "label" : "LoadCommands",
                "name" : "数据加载相关命令"
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
                "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "root-component"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
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
                "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "root-component"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "scrollYLoad",
                "name" : "滚动加载事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "root-component"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
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
            "id" : "toolBarItem-1ra7",
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
                "id" : "a6e4aeea-c842-4d9b-8204-609c07440f95",
                "label" : "rootviewmodelsendGoods1",
                "name" : "sendGoods1",
                "handlerName" : "sendGoods",
                "params" : [ {
                  "id" : "c8b716e9-a16b-4dae-a90e-6c8f9e78a8f8",
                  "name" : "id",
                  "value" : "{DATA~/data-grid-component/id}",
                  "shownName" : "单据ID",
                  "description" : "",
                  "editorType" : "",
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
                    "Code" : "id",
                    "Name" : "单据ID",
                    "Description" : "",
                    "ParameterType" : "any",
                    "controlSource" : null,
                    "Id" : "c8b716e9-a16b-4dae-a90e-6c8f9e78a8f8",
                    "IsRetVal" : false,
                    "EditorType" : ""
                  }
                }, {
                  "id" : "cb7e0e9d-9007-454d-9d2f-69b27fa7dbc2",
                  "name" : "sendstate",
                  "value" : "Shipped",
                  "shownName" : "单据状态",
                  "description" : "",
                  "editorType" : "",
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
                    "Code" : "sendstate",
                    "Name" : "单据状态",
                    "Description" : "",
                    "ParameterType" : "any",
                    "controlSource" : null,
                    "Id" : "cb7e0e9d-9007-454d-9d2f-69b27fa7dbc2",
                    "IsRetVal" : false,
                    "EditorType" : ""
                  }
                }, {
                  "id" : "972aa2a7-7526-451e-be24-2f9443267b53",
                  "name" : "loadCmdName",
                  "value" : "Load1",
                  "shownName" : "数据刷新命令名称",
                  "description" : "数据刷新命令名称",
                  "editorType" : "",
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
                    "Code" : "loadCmdName",
                    "Name" : "数据刷新命令名称",
                    "Description" : "数据刷新命令名称",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "972aa2a7-7526-451e-be24-2f9443267b53",
                    "IsRetVal" : false,
                    "EditorType" : ""
                  }
                }, {
                  "id" : "927cbcb8-4e3d-4d42-b11b-8c11fa7ab25b",
                  "name" : "loadCmdFrameId",
                  "value" : "#{root-component}",
                  "shownName" : "数据刷新命令对应的FrameId",
                  "description" : "数据刷新命令对应的FrameId",
                  "editorType" : "",
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
                    "Code" : "loadCmdFrameId",
                    "Name" : "数据刷新命令对应的FrameId",
                    "Description" : "数据刷新命令对应的FrameId",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "927cbcb8-4e3d-4d42-b11b-8c11fa7ab25b",
                    "IsRetVal" : false,
                    "EditorType" : ""
                  }
                } ],
                "isNewGenerated" : true,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "e3680bc9-dddb-4f91-9b99-3d15ca68f1b3",
                "label" : "SaleOrderList_frm_Controller",
                "name" : "销售订单表单_frm_Controller"
              }
            } ]
          }
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid"
      }
    },
    "CreationDate" : null
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/OrderMrg/SaleOrder/bo-saleorder-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}