{
  "Header" : {
    "Code" : "SaleOrderCardDemo1",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front",
    "CertId" : null,
    "Name" : "销售订单表单",
    "FileName" : "SaleOrderCardDemo1.frm",
    "BizobjectID" : "ee0af0b4-e947-7987-a85d-5072623dc1e6",
    "Language" : null,
    "Extendable" : false,
    "ID" : "169d1fcf-a555-4de9-9d0e-7bb1e54f3125",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "8d8e5a1b-e420-4301-8ca5-77a9e47c3760",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front",
      "Code" : "SaleOrderCardDemo1.frm",
      "Name" : "SaleOrderCardDemo1.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "ee0af0b4-e947-7987-a85d-5072623dc1e6"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "169d1fcf-a555-4de9-9d0e-7bb1e54f3125",
    "Contents" : {
      "module" : {
        "id" : "SaleOrderCardDemo1",
        "code" : "SaleOrderCardDemo1",
        "name" : "销售订单表单",
        "caption" : "销售订单表单",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-26T02:14:28.164Z",
        "updateVersion" : "190123",
        "showTitle" : true,
        "bootstrap" : "new-card-spy-template",
        "templateId" : "new-card-spy-template",
        "schemas" : [ {
          "name" : "销售订单表单_frm",
          "id" : "71b7c83c-da25-4dcd-a5d3-27bab284178b",
          "sourceType" : "vo",
          "variables" : [ ],
          "code" : "SaleOrderCardDemo1_frm",
          "entities" : [ {
            "name" : "业务订单",
            "id" : "19b6d11c-fdda-4ea9-8a79-c2fe067911cc",
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
                "id" : "bbdf5d40-559e-4d88-96da-af067ae85a59",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "label" : "id",
                "code" : "ID",
                "originalId" : "bbdf5d40-559e-4d88-96da-af067ae85a59",
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
                "id" : "838d698d-e9d7-4a94-9ca6-6494cbd1787e",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "label" : "version",
                "code" : "Version",
                "originalId" : "838d698d-e9d7-4a94-9ca6-6494cbd1787e",
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
                "id" : "1d7fb675-62d4-4050-b7a3-4dd8dbbec640",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderCode",
                "label" : "orderCode",
                "code" : "OrderCode",
                "originalId" : "1d7fb675-62d4-4050-b7a3-4dd8dbbec640",
                "bindingField" : "orderCode",
                "bindingPath" : "orderCode"
              }, {
                "$type" : "ComplexField",
                "name" : "商户",
                "id" : "0fa5ed67-3676-4d5e-bd79-62bbe6af8b66",
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
                    "id" : "147deab4-1711-4eb4-af40-f94d1150e179",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantName",
                    "label" : "merchant_MerchantName",
                    "code" : "MerchantName",
                    "originalId" : "147deab4-1711-4eb4-af40-f94d1150e179",
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
                    "id" : "b1e06085-0488-4c42-9371-5d88d0720193",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantCode",
                    "label" : "merchant_MerchantCode",
                    "code" : "MerchantCode",
                    "originalId" : "b1e06085-0488-4c42-9371-5d88d0720193",
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
                "originalId" : "0fa5ed67-3676-4d5e-bd79-62bbe6af8b66",
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
                "id" : "e0e86794-57ef-4fc3-8953-b6f8ae67c8f6",
                "type" : {
                  "$type" : "StringType",
                  "length" : 30,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderTime",
                "label" : "orderTime",
                "code" : "OrderTime",
                "originalId" : "e0e86794-57ef-4fc3-8953-b6f8ae67c8f6",
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
                "id" : "ba5f52c1-80e7-4007-93b9-ef405ac8ca90",
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
                "originalId" : "ba5f52c1-80e7-4007-93b9-ef405ac8ca90",
                "bindingField" : "payMethod",
                "bindingPath" : "payMethod"
              }, {
                "$type" : "ComplexField",
                "name" : "下单人",
                "id" : "9fbed952-b3b2-47d5-92ce-ee3f7aed612e",
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
                    "id" : "9ae1bc07-c5bf-4a0d-b027-0c32a529b145",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 120,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson_code",
                    "label" : "orderPerson_code",
                    "code" : "code",
                    "originalId" : "9ae1bc07-c5bf-4a0d-b027-0c32a529b145",
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
                    "id" : "676aa1fa-6bf6-4bb1-a78a-0b357f62de9b",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 120,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson_name",
                    "label" : "orderPerson_name",
                    "code" : "name",
                    "originalId" : "676aa1fa-6bf6-4bb1-a78a-0b357f62de9b",
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
                "originalId" : "9fbed952-b3b2-47d5-92ce-ee3f7aed612e",
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
                "id" : "a8621f05-6daa-4ec2-a36d-ed6585944164",
                "type" : {
                  "$type" : "StringType",
                  "length" : 20,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Telephone",
                "label" : "telephone",
                "code" : "Telephone",
                "originalId" : "a8621f05-6daa-4ec2-a36d-ed6585944164",
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
                "id" : "3584b1dc-a636-4965-acd7-0161e34799da",
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
                "originalId" : "3584b1dc-a636-4965-acd7-0161e34799da",
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
                "id" : "71281e54-80b9-4fd6-80a1-12274c099619",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Remark",
                "label" : "remark",
                "code" : "Remark",
                "originalId" : "71281e54-80b9-4fd6-80a1-12274c099619",
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
                "id" : "559ae1d0-3e06-4218-aee0-05006e54037d",
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
                "originalId" : "559ae1d0-3e06-4218-aee0-05006e54037d",
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
                "id" : "878ff42f-c8d8-4207-8195-c59d44a435af",
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
                "originalId" : "878ff42f-c8d8-4207-8195-c59d44a435af",
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
                "id" : "090e17ef-ade0-4e98-8106-47d3254745e2",
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
                "originalId" : "090e17ef-ade0-4e98-8106-47d3254745e2",
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
                "id" : "977690a8-a6fa-4124-a382-c089b243842b",
                "type" : {
                  "$type" : "StringType",
                  "length" : 20,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderSource",
                "label" : "orderSource",
                "code" : "OrderSource",
                "originalId" : "977690a8-a6fa-4124-a382-c089b243842b",
                "bindingField" : "orderSource",
                "bindingPath" : "orderSource"
              } ],
              "primary" : "id",
              "entities" : [ {
                "name" : "订单明细",
                "id" : "3b6b01cc-c44c-4b1e-8e0c-a1c2c40e5a6f",
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
                    "id" : "e09a5e87-37d0-4123-b101-de03a1556233",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ID",
                    "label" : "id",
                    "code" : "ID",
                    "originalId" : "e09a5e87-37d0-4123-b101-de03a1556233",
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
                    "id" : "0b5f6403-2911-4512-a32b-39e7c013347b",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentID",
                    "label" : "parentID",
                    "code" : "ParentID",
                    "originalId" : "0b5f6403-2911-4512-a32b-39e7c013347b",
                    "bindingField" : "parentID",
                    "bindingPath" : "parentID"
                  }, {
                    "$type" : "ComplexField",
                    "name" : "商品",
                    "id" : "d86a78fd-cec8-49e5-a000-8ebcd3831f92",
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
                        "id" : "b110ddde-ee94-42e6-bd76-9acf8ab337f3",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsName",
                        "label" : "goods_GoodsName",
                        "code" : "GoodsName",
                        "originalId" : "b110ddde-ee94-42e6-bd76-9acf8ab337f3",
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
                        "id" : "7c6edb37-56e3-447a-8574-f15ba6d9c467",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsCode",
                        "label" : "goods_GoodsCode",
                        "code" : "GoodsCode",
                        "originalId" : "7c6edb37-56e3-447a-8574-f15ba6d9c467",
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
                    "originalId" : "d86a78fd-cec8-49e5-a000-8ebcd3831f92",
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
                    "id" : "63d2f314-6da0-4058-9b06-82822c71e4df",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Specification",
                    "label" : "specification",
                    "code" : "Specification",
                    "originalId" : "63d2f314-6da0-4058-9b06-82822c71e4df",
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
                    "id" : "381e93a8-499d-4bad-99c5-b1731e98a592",
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
                    "originalId" : "381e93a8-499d-4bad-99c5-b1731e98a592",
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
                    "id" : "12e9f1a9-7d85-4748-9be1-2266902dc08a",
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
                    "originalId" : "12e9f1a9-7d85-4748-9be1-2266902dc08a",
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
                    "id" : "62e1cb4c-561d-4989-8ed2-6e3a727f3ea1",
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
                    "originalId" : "62e1cb4c-561d-4989-8ed2-6e3a727f3ea1",
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
                    "id" : "8004a7da-f535-4ff8-aa0e-a46e7dead43f",
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
                    "originalId" : "8004a7da-f535-4ff8-aa0e-a46e7dead43f",
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
                    "id" : "0658848e-1fc4-42d7-8689-c6c800eb4a64",
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
                    "originalId" : "0658848e-1fc4-42d7-8689-c6c800eb4a64",
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
                    "id" : "7136b6c1-59f5-4640-8d54-853e82ead9e5",
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
                    "originalId" : "7136b6c1-59f5-4640-8d54-853e82ead9e5",
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
                    "id" : "f9d55622-636a-4def-b5c5-d027b261ebc1",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 100,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Remark",
                    "label" : "remark",
                    "code" : "Remark",
                    "originalId" : "f9d55622-636a-4def-b5c5-d027b261ebc1",
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
          "sourceUri" : "api/hotwave/ordermrg/v1.0/SaleOrderCardDemo1_frm",
          "eapiId" : "08b2798f-cada-4527-aa7f-f1e8d23f529f",
          "eapiCode" : "SaleOrderCardDemo1_frm",
          "eapiName" : "销售订单表单_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front",
          "voPath" : "HotWave/OrderMrg/SaleOrder/bo-saleorder-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "SaleOrderCardDemo1_state_machine",
          "name" : "销售订单表单_frm",
          "uri" : "20b1df29-6ac6-4e63-a463-3aaf71b9ddde",
          "code" : "SaleOrderCardDemo1_frm",
          "nameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "业务订单",
          "fields" : [ ],
          "stateMachine" : "SaleOrderCardDemo1_state_machine",
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
          } ],
          "states" : [ {
            "id" : "879ca3af-ec43-46f1-914a-f21b8cfc4ec4",
            "code" : "action",
            "name" : "初始动作",
            "type" : "String",
            "category" : "locale"
          } ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "basic-form-viewmodel",
          "code" : "basic-form-viewmodel",
          "name" : "业务订单",
          "fields" : [ {
            "type" : "Form",
            "id" : "1d7fb675-62d4-4050-b7a3-4dd8dbbec640",
            "fieldName" : "orderCode",
            "groupId" : "3f39ffed-72a3-4484-a679-4c6ddb9f3913",
            "groupName" : "基本信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "147deab4-1711-4eb4-af40-f94d1150e179",
            "fieldName" : "merchant_Merchant_MerchantName",
            "groupId" : "3f39ffed-72a3-4484-a679-4c6ddb9f3913",
            "groupName" : "基本信息",
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "SaleOrder.merchant_Merchant_MerchantName",
                  "displayName" : "商户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "merchantName",
                "displayType" : "TreeList",
                "mapFields" : "{'id':'merchant.merchant','merchantName':'merchant.merchant_MerchantName','merchantCode':'merchant.merchant_MerchantCode'}",
                "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556"
              },
              "name" : "商户名称",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "e0e86794-57ef-4fc3-8953-b6f8ae67c8f6",
            "fieldName" : "orderTime",
            "groupId" : "3f39ffed-72a3-4484-a679-4c6ddb9f3913",
            "groupName" : "基本信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "ba5f52c1-80e7-4007-93b9-ef405ac8ca90",
            "fieldName" : "payMethod",
            "groupId" : "59cd9ebd-1817-49ec-b9c4-cc38d330585c",
            "groupName" : "支付信息",
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "a8621f05-6daa-4ec2-a36d-ed6585944164",
            "fieldName" : "telephone",
            "groupId" : "3f39ffed-72a3-4484-a679-4c6ddb9f3913",
            "groupName" : "基本信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "3584b1dc-a636-4965-acd7-0161e34799da",
            "fieldName" : "sendState",
            "groupId" : "59cd9ebd-1817-49ec-b9c4-cc38d330585c",
            "groupName" : "支付信息",
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "71281e54-80b9-4fd6-80a1-12274c099619",
            "fieldName" : "remark",
            "groupId" : "59cd9ebd-1817-49ec-b9c4-cc38d330585c",
            "groupName" : "支付信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "559ae1d0-3e06-4218-aee0-05006e54037d",
            "fieldName" : "totalPrice",
            "groupId" : "59cd9ebd-1817-49ec-b9c4-cc38d330585c",
            "groupName" : "支付信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "878ff42f-c8d8-4207-8195-c59d44a435af",
            "fieldName" : "totalDiscounts",
            "groupId" : "59cd9ebd-1817-49ec-b9c4-cc38d330585c",
            "groupName" : "支付信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "090e17ef-ade0-4e98-8106-47d3254745e2",
            "fieldName" : "actualPay",
            "groupId" : "59cd9ebd-1817-49ec-b9c4-cc38d330585c",
            "groupName" : "支付信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
            "fieldName" : "orderPerson",
            "groupId" : "3f39ffed-72a3-4484-a679-4c6ddb9f3913",
            "groupName" : "基本信息",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "SaleOrder.orderPerson",
                  "displayName" : "系统用户",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'id':'orderPerson.orderPerson','code':'orderPerson.orderPerson_code','name':'orderPerson.orderPerson_name'}",
                "helpId" : "99891fee-285e-420d-841a-93e522af0c5a"
              },
              "name" : "下单人",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "676aa1fa-6bf6-4bb1-a78a-0b357f62de9b",
            "fieldName" : "orderPerson_OrderPerson_name",
            "groupId" : "3f39ffed-72a3-4484-a679-4c6ddb9f3913",
            "groupName" : "基本信息",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "下单人名称"
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        }, {
          "id" : "orderdetail-component-viewmodel",
          "code" : "orderdetail-component-viewmodel",
          "name" : "订单明细",
          "fields" : [ {
            "type" : "Form",
            "id" : "d3829541-fe43-4618-9e7b-da3e04fb7b94",
            "fieldName" : "goods",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "OrderDetail.goods",
                  "displayName" : "商品帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "goodsName",
                "displayType" : "List",
                "mapFields" : "{'id':'goods.goods','goodsName':'goods.goods_GoodsName','goodsCode':'goods.goods_GoodsCode','specification':'specification','price':'price'}",
                "helpId" : "bdb254aa-5b96-4088-8aca-8548df8f45aa"
              },
              "name" : "商品",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "63d2f314-6da0-4058-9b06-82822c71e4df",
            "fieldName" : "specification",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "381e93a8-499d-4bad-99c5-b1731e98a592",
            "fieldName" : "quality",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "12e9f1a9-7d85-4748-9be1-2266902dc08a",
            "fieldName" : "price",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "62e1cb4c-561d-4989-8ed2-6e3a727f3ea1",
            "fieldName" : "amount",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "8004a7da-f535-4ff8-aa0e-a46e7dead43f",
            "fieldName" : "discountType",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "0658848e-1fc4-42d7-8689-c6c800eb4a64",
            "fieldName" : "discount",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "7136b6c1-59f5-4640-8d54-853e82ead9e5",
            "fieldName" : "actualAmount",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "f9d55622-636a-4def-b5c5-d027b261ebc1",
            "fieldName" : "remark",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "b110ddde-ee94-42e6-bd76-9acf8ab337f3",
            "fieldName" : "goods_Goods_GoodsName",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "TextBox"
              },
              "name" : "商品名称",
              "require" : false,
              "readonly" : false
            }
          } ],
          "states" : [ ],
          "bindTo" : "/orderDetails",
          "parent" : "root-viewmodel",
          "commands" : [ {
            "id" : "22f29925-185f-4e3e-bbeb-51c5fd89d02c",
            "code" : "orderdetailAddItem1",
            "name" : "增加一条子表数据",
            "params" : [ ],
            "handlerName" : "AddItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "9bd16e6e-92a3-45a0-b5a9-20d67882ac6d",
            "code" : "orderdetailRemoveItem1",
            "name" : "删除一条子表数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除子表数据的标识",
              "value" : "{DATA~/#{orderdetail-component}/orderDetails/id}"
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
              "class" : "f-page f-page-card f-page-is-mainsubcard f-page-is-sidescrollspy"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span>\r\n<h4 class=\"f-title-text\">销售订单制单</h4>"
                  }, {
                    "id" : "page-header-state",
                    "type" : "HtmlTemplate",
                    "html" : "<h5 class=\"f-title-subtitle\" style=\"min-width:162px;\">\r\n    {{viewModel.bindingData['orderCode']}}\r\n    <ng-container [ngSwitch]=\"viewModel.bindingData['sendState']\">\r\n        <span class=\"badge badge-border-warning\" *ngSwitchCase=\"'UnShipped'\">未发货</span>\r\n        <span class=\"badge badge-border-info\" *ngSwitchCase=\"'Shipped'\">已发货</span>\r\n        <span class=\"badge badge-border-success\" *ngSwitchCase=\"'Done'\">已收货</span>\r\n        <span *ngSwitchDefault></span>\r\n    </ng-container>\r\n</h5>"
                  }, {
                    "id" : "page-header-nav",
                    "type" : "HtmlTemplate",
                    "html" : "<div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span>\r\n    <span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span>\r\n</div>"
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
                  } ],
                  "visible" : true,
                  "buttonSize" : "default",
                  "popDirection" : "default"
                } ],
                "visible" : true,
                "isScrollspyContainer" : false
              }, {
                "id" : "scrollCollapsibleArea",
                "type" : "ScrollCollapsibleArea",
                "expanded" : "!(!!this.viewModel.bindingData['id']? this.viewModel.stateMachine['editable'] : this.viewModel.stateMachine['collapseForTop'])",
                "contentTemplate" : "<div class=\"d-flex no-gutters\" style=\"border-top: 1px dashed #D1DEE7;padding:6px 18px 18px 56px;font-size:12px;color: rgba(0,0,0,0.70);\">\r\n    <div class=\"d-none d-lg-block col-2 pr-3\">\r\n        <p style=\"margin:0 0 4px 0;font-size:13px;\">基本信息</p>\r\n        <p class=\"mb-0 text-truncate\"><span class=\"f-text-lighter\">订单编号：</span><span>{{viewModel.bindingData.orderCode}}</span>\r\n        </p>\r\n        <p class=\"mb-0 text-truncate\"><span class=\"f-text-lighter\">下单人：</span><span>{{viewModel.bindingData.orderPerson.orderPerson_Name}}</span>\r\n        </p>\r\n        <p class=\"mb-0 text-truncate\"><span class=\"f-text-lighter\">下单时间：</span><span>{{viewModel.bindingData.orderTime}}</span>\r\n        </p>\r\n    </div>\r\n    <div class=\"d-none d-lg-block col-2 pr-3\">\r\n        <p style=\"margin:0 0 4px 0;font-size:13px;\">支付信息</p>\r\n        <p class=\"mb-0 text-truncate\"><span class=\"f-text-lighter\">支付方式：</span>\r\n            <ng-container [ngSwitch]='viewModel.bindingData.payMethod'>\r\n                <ng-container *ngSwitchDefault>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'Cash'\">\r\n                    <span class='state_icon' style=\"background-image: url('/apps/hotwave/ordermgr/web/assets/todo.svg');\"></span>\r\n                    <span>现金</span>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'Wechat'\">\r\n                    <span class='state_icon' style=\"background-image: url('/apps/hotwave/ordermgr/web/assets/doing.svg');\"></span>\r\n                    <span>微信</span>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'ALiPay'\">\r\n                    <span class='state_icon' style=\"background-image: url('/apps/hotwave/ordermgr/web/assets/doing.svg');\"></span>\r\n                    <span>支付宝</span>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'UPay'\">\r\n                    <span class='state_icon' style=\"background-image: url('/apps/hotwave/ordermgr/web/assets/done.svg');\"></span>\r\n                    <span>银联</span>\r\n                </ng-container>\r\n            </ng-container>\r\n        </p>\r\n        <p class=\"mb-0 text-truncate\"><span class=\"f-text-lighter\">发货状态：</span>\r\n            <ng-container [ngSwitch]= 'viewModel.bindingData.sendState'>\r\n                <ng-container *ngSwitchDefault>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'UnShipped'\">\r\n                    <span class='state_icon' style=\"background-image: url('/apps/hotwave/ordermgr/web/assets/todo.svg');\"></span>\r\n                    <span>未发货</span>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'Shipped'\">\r\n                    <span class='state_icon' style=\"background-image: url('/apps/hotwave/ordermgr/web/assets/doing.svg');\"></span>\r\n                    <span>已发货</span>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'Done'\">\r\n                    <span class='state_icon' style=\"background-image: url('/apps/hotwave/ordermgr/web/assets/doing.svg');\"></span>\r\n                    <span>已收货</span>\r\n                </ng-container>\r\n            </ng-container>\r\n        </p>\r\n    </div>\r\n    <div class=\"col-12 col-lg-8 col-xl-6\" style=\"padding:0!important;\">\r\n        <div class=\"d-flex\">\r\n            <div class=\"col-4 pr-3\">\r\n                <p style=\"margin:0;font-size:13px;\">订单金额</p>\r\n                <p style=\"font-size:24px;color:#FF6C29;font-weight:700;margin:0;height:38px;\">\r\n                    {{viewModel.bindingData.totalPrice}}\r\n                    <span style=\"font-size:15px;\"> RMB</span>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-4 pr-3\">\r\n                <p style=\"margin:0;font-size:13px;\">折扣优惠</p>\r\n                <p style=\"font-size:24px;color: #51BD78;font-weight:700;margin:0;height:38px;\">\r\n                    {{viewModel.bindingData.totalDiscounts}}\r\n                    <span style=\"font-size:15px;\"> RMB</span>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-4 pr-3\">\r\n                <p style=\"margin:0;font-size:13px;\">合计支付</p>\r\n                <p style=\"font-size:24px;color: rgba(67,80,105,0.70);font-weight:700;margin:0;height:38px;\">\r\n                    {{viewModel.bindingData.actualPay}}\r\n                    <span style=\"font-size:15px;\">RMB</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                "visible" : true,
                "appearance" : null,
                "title" : "导航",
                "size" : {
                  "width" : 240
                },
                "contents" : [ ],
                "hideNav" : false,
                "position" : "left",
                "showEntry" : true
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            }, {
              "id" : "main-container",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main h-100"
              },
              "size" : null,
              "contents" : [ {
                "id" : "scrollspy",
                "type" : "Scrollspy",
                "appearance" : {
                  "class" : ""
                },
                "currentSectionId" : "basic-form-section",
                "followType" : "(!!this.viewModel.bindingData['id']? this.viewModel.stateMachine['editable'] : this.viewModel.stateMachine['collapseForTop'])?'fixedTab':'side'",
                "items" : [ {
                  "id" : "basic-form-section",
                  "title" : "基本信息"
                }, {
                  "id" : "section-orderdetail",
                  "title" : "订单明细"
                } ],
                "itemsType" : "static",
                "visible" : true
              }, {
                "id" : "scrollspy-container",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-scrollspy-content d-block"
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
                    "id" : "detail-container-orderdetail",
                    "type" : "ContentContainer",
                    "appearance" : {
                      "class" : "f-struct-wrapper"
                    },
                    "size" : null,
                    "contents" : [ {
                      "id" : "section-orderdetail",
                      "type" : "Section",
                      "appearance" : {
                        "class" : "f-section-in-mainsubcard"
                      },
                      "visible" : true,
                      "mainTitle" : "订单明细",
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
                      "enableAccordion" : false,
                      "accordionMode" : "default",
                      "showHeader" : true,
                      "headerTemplate" : "",
                      "titleTemplate" : "",
                      "extendedHeaderAreaTemplate" : "",
                      "toolbarTemplate" : "",
                      "extendedAreaTemplate" : "",
                      "contents" : [ {
                        "id" : "orderdetail-component-ref",
                        "type" : "ComponentRef",
                        "component" : "orderdetail-component",
                        "visible" : true
                      } ],
                      "isScrollSpyItem" : true,
                      "toolbar" : {
                        "id" : "toolbar-orderdetail",
                        "type" : "SectionToolbar",
                        "position" : "inHead",
                        "contents" : [ {
                          "id" : "button-add-orderdetail",
                          "type" : "SectionToolbarItem",
                          "title" : "新增",
                          "disable" : "!viewModel.stateMachine['canAddDetail']",
                          "appearance" : {
                            "class" : "btn btn-secondary f-btn-ml"
                          },
                          "visible" : true,
                          "click" : "root-viewmodel.orderdetail-component-viewmodel.orderdetailAddItem1"
                        }, {
                          "id" : "button-remove-orderdetail",
                          "type" : "SectionToolbarItem",
                          "title" : "删除",
                          "disable" : "!viewModel.stateMachine['canRemoveDetail']",
                          "appearance" : {
                            "class" : "btn btn-secondary f-btn-ml"
                          },
                          "visible" : true,
                          "click" : "root-viewmodel.orderdetail-component-viewmodel.orderdetailRemoveItem1"
                        } ]
                      }
                    } ],
                    "visible" : true,
                    "isScrollspyContainer" : false
                  } ],
                  "visible" : true,
                  "draggable" : false,
                  "isLikeCardContainer" : true,
                  "isScrollspyContainer" : false
                } ],
                "isScrollspyContainer" : true,
                "scrollOffset" : 0,
                "visible" : true,
                "isScrollArea" : true,
                "isScrollCollapsibleArea" : false
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
                "id" : "3f39ffed-72a3-4484-a679-4c6ddb9f3913",
                "type" : "FieldSet",
                "title" : "基本信息",
                "appearance" : {
                  "class" : "col-12 px-0"
                },
                "collapse" : false,
                "expandText" : "",
                "collapseText" : "",
                "contentTemplate" : null,
                "headerTemplate" : null,
                "contents" : [ {
                  "id" : "orderCode_1d7fb675_wqcn",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "订单编号",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "orderCode",
                    "field" : "1d7fb675-62d4-4050-b7a3-4dd8dbbec640",
                    "fullPath" : "OrderCode"
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
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "enableTips" : true,
                  "path" : "orderCode",
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
                }, {
                  "id" : "merchant_Merchant_MerchantName_147deab4_1zy9",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "商户名称",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "merchant_Merchant_MerchantName",
                    "field" : "147deab4-1711-4eb4-af40-f94d1150e179",
                    "fullPath" : "Merchant.Merchant_MerchantName"
                  },
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "SaleOrder.merchant_Merchant_MerchantName",
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
                  "mapFields" : "{'id':'merchant.merchant','merchantName':'merchant.merchant_MerchantName','merchantCode':'merchant.merchant_MerchantCode'}",
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
                  "id" : "orderPerson_771cf8b5_32o4",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "下单人",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "orderPerson",
                    "field" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                    "fullPath" : "OrderPerson.OrderPerson"
                  },
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "SaleOrder.orderPerson",
                    "displayName" : "系统用户",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "name",
                  "valueField" : "id",
                  "displayType" : "List",
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
                  "mapFields" : "{'id':'orderPerson.orderPerson','code':'orderPerson.orderPerson_code','name':'orderPerson.orderPerson_name'}",
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
                  "path" : "orderPerson.orderPerson",
                  "isRTControl" : false,
                  "labelAutoOverflow" : false,
                  "updateOn" : "blur",
                  "fieldValueChanging" : "",
                  "fieldValueChanged" : "",
                  "helpId" : "99891fee-285e-420d-841a-93e522af0c5a"
                }, {
                  "id" : "orderPerson_OrderPerson_name_676aa1fa_yg9q",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "下单人名称",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "orderPerson_OrderPerson_name",
                    "field" : "676aa1fa-6bf6-4bb1-a78a-0b357f62de9b",
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
                  "tabindex" : 0,
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
                  "updateOn" : "blur",
                  "fieldValueChanging" : "",
                  "fieldValueChanged" : ""
                }, {
                  "id" : "orderTime_e0e86794_fc6z",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "下单时间",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "orderTime",
                    "field" : "e0e86794-57ef-4fc3-8953-b6f8ae67c8f6",
                    "fullPath" : "OrderTime"
                  },
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 30,
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
                  "path" : "orderTime",
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
                }, {
                  "id" : "telephone_a8621f05_4hyo",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "联系电话",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "telephone",
                    "field" : "a8621f05-6daa-4ec2-a36d-ed6585944164",
                    "fullPath" : "Telephone"
                  },
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 20,
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
                  "path" : "telephone",
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
                "sectionCollapseVisible" : false,
                "isScrollSpyItem" : false,
                "visible" : true
              }, {
                "id" : "59cd9ebd-1817-49ec-b9c4-cc38d330585c",
                "type" : "FieldSet",
                "title" : "支付信息",
                "appearance" : {
                  "class" : "col-12 px-0"
                },
                "collapse" : false,
                "expandText" : "",
                "collapseText" : "",
                "contentTemplate" : null,
                "headerTemplate" : null,
                "contents" : [ {
                  "id" : "payMethod_ba5f52c1_xz4x",
                  "type" : "EnumField",
                  "titleSourceType" : "static",
                  "title" : "支付方式",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "payMethod",
                    "field" : "ba5f52c1-80e7-4007-93b9-ef405ac8ca90",
                    "fullPath" : "PayMethod"
                  },
                  "placeHolder" : "",
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
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
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "idField" : "value",
                  "textField" : "name",
                  "multiSelect" : false,
                  "uri" : "",
                  "autoWidth" : true,
                  "enableClear" : false,
                  "onClear" : null,
                  "valueChanged" : null,
                  "onShown" : null,
                  "onHidden" : null,
                  "editable" : false,
                  "enableCancelSelected" : false,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "dataSourceType" : "static",
                  "path" : "payMethod",
                  "viewType" : "text",
                  "noSearch" : false,
                  "maxSearchLength" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500
                }, {
                  "id" : "sendState_3584b1dc_xv9j",
                  "type" : "EnumField",
                  "titleSourceType" : "static",
                  "title" : "发货状态",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "sendState",
                    "field" : "3584b1dc-a636-4965-acd7-0161e34799da",
                    "fullPath" : "SendState"
                  },
                  "placeHolder" : "",
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
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
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "idField" : "value",
                  "textField" : "name",
                  "multiSelect" : false,
                  "uri" : "",
                  "autoWidth" : true,
                  "enableClear" : false,
                  "onClear" : null,
                  "valueChanged" : null,
                  "onShown" : null,
                  "onHidden" : null,
                  "editable" : false,
                  "enableCancelSelected" : false,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "dataSourceType" : "static",
                  "path" : "sendState",
                  "viewType" : "text",
                  "noSearch" : false,
                  "maxSearchLength" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500
                }, {
                  "id" : "totalPrice_559ae1d0_tdrx",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "订单金额",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "totalPrice",
                    "field" : "559ae1d0-3e06-4218-aee0-05006e54037d",
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
                  "id" : "totalDiscounts_878ff42f_djm9",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "折扣优惠",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "totalDiscounts",
                    "field" : "878ff42f-c8d8-4207-8195-c59d44a435af",
                    "fullPath" : "TotalDiscounts"
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
                  "path" : "totalDiscounts",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "labelAutoOverflow" : false,
                  "updateOn" : "blur"
                }, {
                  "id" : "actualPay_090e17ef_mvgt",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "合计实付",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "actualPay",
                    "field" : "090e17ef-ade0-4e98-8106-47d3254745e2",
                    "fullPath" : "ActualPay"
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
                  "path" : "actualPay",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "labelAutoOverflow" : false,
                  "updateOn" : "blur"
                }, {
                  "id" : "remark_71281e54_dqeo",
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
                    "field" : "71281e54-80b9-4fd6-80a1-12274c099619",
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
                "sectionCollapseVisible" : false,
                "isScrollSpyItem" : false,
                "visible" : true
              } ],
              "controlsInline" : true,
              "formAutoIntl" : true,
              "visible" : true,
              "labelAutoOverflow" : false
            } ],
            "isScrollSpyItem" : true,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null
        }, {
          "id" : "orderdetail-component",
          "type" : "Component",
          "viewModel" : "orderdetail-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-is-subgrid"
          },
          "contents" : [ {
            "id" : "orderdetail-component-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-grid-is-sub f-utils-flex-column"
            },
            "size" : null,
            "contents" : [ {
              "id" : "dataGrid_orderdetail",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "dataSource" : "orderDetails",
              "fields" : [ {
                "id" : "goods_d3829541_0hbn",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商品",
                "captionTemplate" : null,
                "dataField" : "goods.goods",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goods",
                  "field" : "d3829541-fe43-4618-9e7b-da3e04fb7b94",
                  "fullPath" : "Goods.Goods"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goods_d3829541_zhpt",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goods",
                    "field" : "d3829541-fe43-4618-9e7b-da3e04fb7b94",
                    "fullPath" : "Goods.Goods"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "OrderDetail.goods",
                    "displayName" : "商品帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "goodsName",
                  "valueField" : "id",
                  "displayType" : "List",
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
                  "mapFields" : "{'id':'goods.goods','goodsName':'goods.goods_GoodsName','goodsCode':'goods.goods_GoodsCode','specification':'specification','price':'price'}",
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
                  "path" : "goods.goods",
                  "isRTControl" : false,
                  "updateOn" : "blur",
                  "helpId" : "bdb254aa-5b96-4088-8aca-8548df8f45aa",
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
                "localizationType" : "Date"
              }, {
                "id" : "goods_Goods_GoodsName_b110ddde_h94h",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商品名称",
                "binding" : {
                  "type" : "Form",
                  "path" : "goods_Goods_GoodsName",
                  "field" : "b110ddde-ee94-42e6-bd76-9acf8ab337f3",
                  "fullPath" : "Goods.Goods_GoodsName"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "goods.goods_GoodsName",
                "dataType" : "string",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : {
                  "id" : "goods_Goods_GoodsName_b110ddde_9lx1",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "商品名称",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goods_Goods_GoodsName",
                    "field" : "b110ddde-ee94-42e6-bd76-9acf8ab337f3",
                    "fullPath" : "Goods.Goods_GoodsName"
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
                  "maxHeight" : 500,
                  "isRTControl" : false,
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
                "id" : "specification_63d2f314_8ks8",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "规格型号",
                "captionTemplate" : null,
                "dataField" : "specification",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "specification",
                  "field" : "63d2f314-6da0-4058-9b06-82822c71e4df",
                  "fullPath" : "Specification"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "specification_63d2f314_or74",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "specification",
                    "field" : "63d2f314-6da0-4058-9b06-82822c71e4df"
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
                  "path" : "specification",
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
                "id" : "quality_381e93a8_lzmz",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "数量",
                "captionTemplate" : null,
                "dataField" : "quality",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "quality",
                  "field" : "381e93a8-499d-4bad-99c5-b1731e98a592",
                  "fullPath" : "Quality"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "quality_381e93a8_f1hx",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "quality",
                    "field" : "381e93a8-499d-4bad-99c5-b1731e98a592"
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
                "id" : "price_12e9f1a9_0oqq",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "标准单价",
                "captionTemplate" : null,
                "dataField" : "price",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "price",
                  "field" : "12e9f1a9-7d85-4748-9be1-2266902dc08a",
                  "fullPath" : "Price"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "price_12e9f1a9_5v46",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "price",
                    "field" : "12e9f1a9-7d85-4748-9be1-2266902dc08a"
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
                "id" : "amount_62e1cb4c_sk4g",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "金额",
                "captionTemplate" : null,
                "dataField" : "amount",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "amount",
                  "field" : "62e1cb4c-561d-4989-8ed2-6e3a727f3ea1",
                  "fullPath" : "Amount"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "amount_62e1cb4c_wdwb",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "amount",
                    "field" : "62e1cb4c-561d-4989-8ed2-6e3a727f3ea1"
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
                "captionTipStyler" : ""
              }, {
                "id" : "discountType_8004a7da_qc99",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "折扣类型",
                "captionTemplate" : null,
                "dataField" : "discountType",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "discountType",
                  "field" : "8004a7da-f535-4ff8-aa0e-a46e7dead43f",
                  "fullPath" : "DiscountType"
                },
                "enumData" : [ {
                  "name" : "无折扣",
                  "value" : "none"
                }, {
                  "name" : "有折扣",
                  "value" : "dis"
                } ],
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "discountType_8004a7da_mkma",
                  "type" : "EnumField",
                  "titleSourceType" : "static",
                  "title" : "下拉框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "discountType",
                    "field" : "8004a7da-f535-4ff8-aa0e-a46e7dead43f"
                  },
                  "placeHolder" : "",
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "enumData" : [ {
                    "name" : "无折扣",
                    "value" : "none"
                  }, {
                    "name" : "有折扣",
                    "value" : "dis"
                  } ],
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "idField" : "value",
                  "textField" : "name",
                  "multiSelect" : false,
                  "uri" : "",
                  "autoWidth" : true,
                  "enableClear" : false,
                  "onClear" : null,
                  "valueChanged" : null,
                  "onShown" : null,
                  "onHidden" : null,
                  "editable" : false,
                  "enableCancelSelected" : false,
                  "beforeShow" : null,
                  "beforeHide" : null,
                  "dataSourceType" : "static",
                  "path" : "discountType",
                  "viewType" : "text",
                  "noSearch" : false,
                  "maxSearchLength" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "updateOn" : "change"
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
                "captionTipStyler" : ""
              }, {
                "id" : "discount_0658848e_zq1k",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "折扣金额",
                "captionTemplate" : null,
                "dataField" : "discount",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "discount",
                  "field" : "0658848e-1fc4-42d7-8689-c6c800eb4a64",
                  "fullPath" : "Discount"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "discount_0658848e_3sjx",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "discount",
                    "field" : "0658848e-1fc4-42d7-8689-c6c800eb4a64"
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
                  "path" : "discount",
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
                "id" : "actualAmount_7136b6c1_m0aj",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "实际结算金额",
                "captionTemplate" : null,
                "dataField" : "actualAmount",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "actualAmount",
                  "field" : "7136b6c1-59f5-4640-8d54-853e82ead9e5",
                  "fullPath" : "ActualAmount"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "actualAmount_7136b6c1_0q3z",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "actualAmount",
                    "field" : "7136b6c1-59f5-4640-8d54-853e82ead9e5"
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
                  "path" : "actualAmount",
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
                "id" : "remark_f9d55622_0rpu",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "备注",
                "captionTemplate" : null,
                "dataField" : "remark",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "remark",
                  "field" : "f9d55622-636a-4def-b5c5-d027b261ebc1",
                  "fullPath" : "Remark"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "remark_f9d55622_tpbx",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "remark",
                    "field" : "f9d55622-636a-4def-b5c5-d027b261ebc1"
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
              "appendRow" : "orderdetailAddItem1",
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
          "afterViewInit" : null
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
            "host" : "22f29925-185f-4e3e-bbeb-51c5fd89d02c",
            "handler" : "AddItem"
          }, {
            "host" : "9bd16e6e-92a3-45a0-b5a9-20d67882ac6d",
            "handler" : "RemoveItem"
          } ],
          "code" : "CardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-saleorder-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ {
          "fieldId" : "7136b6c1-59f5-4640-8d54-853e82ead9e5",
          "expression" : [ {
            "id" : "7136b6c1-59f5-4640-8d54-853e82ead9e5_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"SaleOrder.orderDetails.quality*SaleOrder.orderDetails.price-SaleOrder.orderDetails.discount\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "62e1cb4c-561d-4989-8ed2-6e3a727f3ea1",
          "expression" : [ {
            "id" : "62e1cb4c-561d-4989-8ed2-6e3a727f3ea1_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"SaleOrder.orderDetails.quality*SaleOrder.orderDetails.price\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "0658848e-1fc4-42d7-8689-c6c800eb4a64",
          "expression" : [ {
            "id" : "0658848e-1fc4-42d7-8689-c6c800eb4a64_validate",
            "type" : "validate",
            "value" : "{\"expr\":\"if(SaleOrder.orderDetails.discountType=='dis'&&SaleOrder.orderDetails.discount==0)\\r\\n{\\r\\n  return false;\\r\\n}\\r\\nelse if(SaleOrder.orderDetails.discountType=='none'&&SaleOrder.orderDetails.discount>0)\\r\\n{\\r\\n return false;\\r\\n}\\r\\nelse\\r\\n{\\r\\n return true;\\r\\n}\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "090e17ef-ade0-4e98-8106-47d3254745e2",
          "expression" : [ {
            "id" : "090e17ef-ade0-4e98-8106-47d3254745e2_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"DefaultFunction.SumByProp(\\\"SaleOrder.orderDetails\\\",\\\"actualAmount\\\")\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "559ae1d0-3e06-4218-aee0-05006e54037d",
          "expression" : [ {
            "id" : "559ae1d0-3e06-4218-aee0-05006e54037d_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"DefaultFunction.SumByProp(\\\"SaleOrder.orderDetails\\\",\\\"amount\\\")\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "878ff42f-c8d8-4207-8195-c59d44a435af",
          "expression" : [ {
            "id" : "878ff42f-c8d8-4207-8195-c59d44a435af_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"DefaultFunction.SumByProp(\\\"SaleOrder.orderDetails\\\",\\\"discount\\\")\",\"sexpr\":\"\"}"
          } ]
        } ],
        "metadataId" : "169d1fcf-a555-4de9-9d0e-7bb1e54f3125",
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
            "id" : "button-add-orderdetail",
            "viewModelId" : "orderdetail-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "orderdetail-component",
                "viewModelId" : "orderdetail-component-viewmodel"
              },
              "command" : {
                "id" : "22f29925-185f-4e3e-bbeb-51c5fd89d02c",
                "label" : "orderdetailAddItem1",
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
        }, {
          "sourceComponent" : {
            "id" : "button-remove-orderdetail",
            "viewModelId" : "orderdetail-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "orderdetail-component",
                "viewModelId" : "orderdetail-component-viewmodel"
              },
              "command" : {
                "id" : "9bd16e6e-92a3-45a0-b5a9-20d67882ac6d",
                "label" : "orderdetailRemoveItem1",
                "name" : "删除一条子表数据",
                "handlerName" : "RemoveItem",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除子表数据的标识",
                  "value" : "{DATA~/#{orderdetail-component}/orderDetails/id}"
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
            "id" : "dataGrid_orderdetail",
            "viewModelId" : "orderdetail-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "appendRow",
                "name" : "回车新增行事件"
              },
              "targetComponent" : {
                "id" : "orderdetail-component",
                "viewModelId" : "orderdetail-component-viewmodel"
              },
              "command" : {
                "id" : "22f29925-185f-4e3e-bbeb-51c5fd89d02c",
                "label" : "orderdetailAddItem1",
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