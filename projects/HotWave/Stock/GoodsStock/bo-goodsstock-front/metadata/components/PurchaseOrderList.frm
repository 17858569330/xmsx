{
  "Header" : {
    "Code" : "PurchaseOrderList",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
    "CertId" : null,
    "Name" : "补货代购单列表",
    "FileName" : "PurchaseOrderList.frm",
    "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099",
    "Language" : null,
    "Extendable" : false,
    "ID" : "78a3d45c-e9bb-492a-9ef1-f63aca22a73d",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "480116da-61ed-4597-9acd-ae68f40a895c",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
      "Code" : "PurchaseOrderList.frm",
      "Name" : "PurchaseOrderList.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "78a3d45c-e9bb-492a-9ef1-f63aca22a73d",
    "Contents" : {
      "module" : {
        "id" : "PurchaseOrderList",
        "code" : "PurchaseOrderList",
        "name" : "补货代购单列表",
        "caption" : "补货代购单列表",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-28T01:28:07.870Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "name" : "补货代购单列表_frm",
          "id" : "644ee3ae-010d-4974-aeff-5018a0898985",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceType" : "vo",
          "variables" : [ ],
          "code" : "PurchaseOrderList_frm",
          "sourceUri" : "api/hotwave/stock/v1.0/PurchaseOrderList_frm",
          "entities" : [ {
            "name" : "补货采购单",
            "id" : "785a2e21-7fc9-4ae0-ae6f-f974ee852513",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "readonly" : false,
                "name" : "主键",
                "id" : "d5416a01-bbd3-4fcc-99ea-931016857efe",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "label" : "id",
                "code" : "ID",
                "originalId" : "d5416a01-bbd3-4fcc-99ea-931016857efe",
                "bindingPath" : "id",
                "bindingField" : "id"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "defaultValue" : "",
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "readonly" : false,
                "name" : "版本",
                "id" : "d194b354-40e8-46e3-b207-9ba97de41a4a",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "label" : "version",
                "code" : "Version",
                "originalId" : "d194b354-40e8-46e3-b207-9ba97de41a4a",
                "bindingPath" : "version",
                "bindingField" : "version"
              }, {
                "$type" : "ComplexField",
                "name" : "状态",
                "id" : "b3d11341-73b5-4f9e-a06c-5d083e5f1ead",
                "type" : {
                  "$type" : "ObjectType",
                  "name" : "BillStateB3d1",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "EnumField"
                    },
                    "readonly" : false,
                    "name" : "状态",
                    "id" : "b3d11341-0101-468f-ae3f-40c76c0f06b0",
                    "type" : {
                      "$type" : "EnumType",
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
                      "name" : "Enum",
                      "displayName" : "枚举",
                      "valueType" : {
                        "$type" : "StringType",
                        "length" : 36,
                        "name" : "String",
                        "displayName" : "字符串"
                      }
                    },
                    "path" : "BillStatus.BillState",
                    "label" : "billState",
                    "code" : "BillState",
                    "originalId" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
                    "bindingPath" : "billStatus.billState",
                    "bindingField" : "billStatus_BillState"
                  } ],
                  "displayName" : "状态"
                },
                "path" : "BillStatus",
                "label" : "billStatus",
                "code" : "BillStatus",
                "originalId" : "b3d11341-73b5-4f9e-a06c-5d083e5f1ead",
                "bindingPath" : "billStatus",
                "bindingField" : "billStatus"
              }, {
                "$type" : "ComplexField",
                "name" : "流程实例",
                "id" : "a2d882f0-e87c-47a8-9d62-1d6ca8bfcc0c",
                "type" : {
                  "$type" : "ObjectType",
                  "name" : "ProcessInstanceA2d8",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "流程实例",
                    "id" : "a2d882f0-ad8f-4da3-a430-c8a7f2162135",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ProcessInstance.ProcessInstance",
                    "label" : "processInstance",
                    "code" : "ProcessInstance",
                    "originalId" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135",
                    "bindingPath" : "processInstance.processInstance",
                    "bindingField" : "processInstance_ProcessInstance"
                  } ],
                  "displayName" : "流程实例"
                },
                "path" : "ProcessInstance",
                "label" : "processInstance",
                "code" : "ProcessInstance",
                "originalId" : "a2d882f0-e87c-47a8-9d62-1d6ca8bfcc0c",
                "bindingPath" : "processInstance",
                "bindingField" : "processInstance"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "readonly" : false,
                "name" : "采购编号",
                "id" : "173a6f07-f50e-44db-810d-6c441b941fbc",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderCode",
                "label" : "orderCode",
                "code" : "OrderCode",
                "originalId" : "173a6f07-f50e-44db-810d-6c441b941fbc",
                "bindingPath" : "orderCode",
                "bindingField" : "orderCode"
              }, {
                "$type" : "ComplexField",
                "name" : "商户",
                "id" : "1fa2dada-2a78-46fb-8f8f-e075e353390d",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "商户",
                    "id" : "619d0cff-fbfe-4252-9bac-e104ebc0655d",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant",
                    "label" : "merchant",
                    "code" : "Merchant",
                    "originalId" : "619d0cff-fbfe-4252-9bac-e104ebc0655d",
                    "bindingPath" : "merchant.merchant",
                    "bindingField" : "merchant"
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
                    "id" : "b31c76b0-ccdf-42b3-add5-ee7a7894a050",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantName",
                    "label" : "merchant_MerchantName",
                    "code" : "MerchantName",
                    "originalId" : "b31c76b0-ccdf-42b3-add5-ee7a7894a050",
                    "bindingPath" : "merchant.merchant_MerchantName",
                    "bindingField" : "merchant_Merchant_MerchantName"
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
                    "id" : "c296a2af-7a51-4e24-bb77-dcf4743c1848",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_ParentMerchantID_MerchantName",
                    "label" : "merchant_ParentMerchantID_MerchantName",
                    "code" : "MerchantName(ParentMerchantID)",
                    "originalId" : "c296a2af-7a51-4e24-bb77-dcf4743c1848",
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
                    "id" : "1bcac9ae-e281-4528-a702-5b8604dc08ab",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_ParentMerchantID_Adminstrator",
                    "label" : "merchant_ParentMerchantID_Adminstrator",
                    "code" : "Adminstrator(ParentMerchantID)",
                    "originalId" : "1bcac9ae-e281-4528-a702-5b8604dc08ab",
                    "bindingPath" : "merchant.merchant_ParentMerchantID_Adminstrator",
                    "bindingField" : "merchant_Merchant_ParentMerchantID_Adminstrator"
                  } ],
                  "primary" : "merchant",
                  "entities" : [ ],
                  "name" : "MerChant619d",
                  "displayName" : "商户"
                },
                "path" : "Merchant",
                "label" : "merchant",
                "code" : "Merchant",
                "originalId" : "1fa2dada-2a78-46fb-8f8f-e075e353390d",
                "bindingPath" : "merchant",
                "bindingField" : "merchant"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "defaultValue" : "",
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "readonly" : false,
                "name" : "预计送达时间",
                "id" : "a5f6d271-cbfe-4199-86e0-48ec73d31ac1",
                "type" : {
                  "$type" : "DateType",
                  "name" : "Date",
                  "displayName" : "日期"
                },
                "path" : "ExpectedTime",
                "label" : "expectedTime",
                "code" : "ExpectedTime",
                "originalId" : "a5f6d271-cbfe-4199-86e0-48ec73d31ac1",
                "bindingPath" : "expectedTime",
                "bindingField" : "expectedTime"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "defaultValue" : "",
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "readonly" : false,
                "name" : "下单时间",
                "id" : "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                "type" : {
                  "$type" : "DateType",
                  "name" : "Date",
                  "displayName" : "日期"
                },
                "path" : "OrderTime",
                "label" : "orderTime",
                "code" : "OrderTime",
                "originalId" : "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                "bindingPath" : "orderTime",
                "bindingField" : "orderTime"
              }, {
                "$type" : "ComplexField",
                "name" : "下单人",
                "id" : "2d0c5c6b-f07e-4f78-9e8e-238a25be93e1",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "下单人",
                    "id" : "f462f519-1918-4218-be9f-fadfa0d2031b",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson",
                    "label" : "orderPerson",
                    "code" : "OrderPerson",
                    "originalId" : "f462f519-1918-4218-be9f-fadfa0d2031b",
                    "bindingPath" : "orderPerson.orderPerson",
                    "bindingField" : "orderPerson"
                  }, {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "名称",
                    "id" : "4e89a276-7aef-4598-8935-47104b273da7",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 120,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson_name",
                    "label" : "orderPerson_name",
                    "code" : "name",
                    "originalId" : "4e89a276-7aef-4598-8935-47104b273da7",
                    "bindingPath" : "orderPerson.orderPerson_name",
                    "bindingField" : "orderPerson_OrderPerson_name"
                  } ],
                  "primary" : "orderPerson",
                  "entities" : [ ],
                  "name" : "GspUserWithOrgNameF462",
                  "displayName" : "系统用户"
                },
                "path" : "OrderPerson",
                "label" : "orderPerson",
                "code" : "OrderPerson",
                "originalId" : "2d0c5c6b-f07e-4f78-9e8e-238a25be93e1",
                "bindingPath" : "orderPerson",
                "bindingField" : "orderPerson"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "defaultValue" : "",
                "editor" : {
                  "$type" : "NumericBox"
                },
                "readonly" : false,
                "name" : "采购金额",
                "id" : "460dc9cc-4652-4024-8a8c-5e7eb9c01288",
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
                "originalId" : "460dc9cc-4652-4024-8a8c-5e7eb9c01288",
                "bindingPath" : "totalPrice",
                "bindingField" : "totalPrice"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "defaultValue" : "",
                "editor" : {
                  "$type" : "TextBox"
                },
                "readonly" : false,
                "name" : "备注",
                "id" : "a4978aa8-6491-46fc-8c95-ef7419836f99",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Remark",
                "label" : "remark",
                "code" : "Remark",
                "originalId" : "a4978aa8-6491-46fc-8c95-ef7419836f99",
                "bindingPath" : "remark",
                "bindingField" : "remark"
              } ],
              "primary" : "id",
              "entities" : [ {
                "name" : "补货采购细节",
                "id" : "21d6bc5f-0b5c-4386-a4d2-b4b3f454ef43",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "require" : true,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "主键",
                    "id" : "891f7e43-e607-41a9-91e5-8da0f7d6e2c3",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ID",
                    "label" : "id",
                    "code" : "ID",
                    "originalId" : "891f7e43-e607-41a9-91e5-8da0f7d6e2c3",
                    "bindingPath" : "id",
                    "bindingField" : "id"
                  }, {
                    "$type" : "SimpleField",
                    "require" : true,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "上级对象主键",
                    "id" : "da869d1f-2d66-4932-a04c-788fb8c30571",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentID",
                    "label" : "parentID",
                    "code" : "ParentID",
                    "originalId" : "da869d1f-2d66-4932-a04c-788fb8c30571",
                    "bindingPath" : "parentID",
                    "bindingField" : "parentID"
                  }, {
                    "$type" : "ComplexField",
                    "name" : "商品",
                    "id" : "0acfd4a5-2f8b-43a4-8d79-831af41d14e1",
                    "type" : {
                      "$type" : "EntityType",
                      "fields" : [ {
                        "$type" : "SimpleField",
                        "require" : false,
                        "multiLanguage" : false,
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "readonly" : false,
                        "name" : "商品",
                        "id" : "889cc129-df3b-4cc0-aaef-ae1440736f0f",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods",
                        "label" : "goods",
                        "code" : "Goods",
                        "originalId" : "889cc129-df3b-4cc0-aaef-ae1440736f0f",
                        "bindingPath" : "goods.goods",
                        "bindingField" : "goods"
                      }, {
                        "$type" : "SimpleField",
                        "require" : false,
                        "multiLanguage" : false,
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "readonly" : false,
                        "name" : "商品名称",
                        "id" : "94fa261d-abbb-4837-bea8-f35318c4d8a8",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsName",
                        "label" : "goods_GoodsName",
                        "code" : "GoodsName",
                        "originalId" : "94fa261d-abbb-4837-bea8-f35318c4d8a8",
                        "bindingPath" : "goods.goods_GoodsName",
                        "bindingField" : "goods_Goods_GoodsName"
                      }, {
                        "$type" : "SimpleField",
                        "require" : false,
                        "multiLanguage" : false,
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "readonly" : false,
                        "name" : "规格型号",
                        "id" : "0648282c-33de-403b-94f7-3c66f44874c1",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_Specification",
                        "label" : "goods_Specification",
                        "code" : "Specification",
                        "originalId" : "0648282c-33de-403b-94f7-3c66f44874c1",
                        "bindingPath" : "goods.goods_Specification",
                        "bindingField" : "goods_Goods_Specification"
                      }, {
                        "$type" : "SimpleField",
                        "require" : false,
                        "multiLanguage" : false,
                        "defaultValue" : "",
                        "editor" : {
                          "$type" : "NumericBox"
                        },
                        "readonly" : false,
                        "name" : "单价",
                        "id" : "27826f27-f0c3-45f2-a3a1-11cd21101c24",
                        "type" : {
                          "$type" : "NumericType",
                          "length" : 10,
                          "name" : "Number",
                          "displayName" : "数字",
                          "precision" : 2
                        },
                        "path" : "Goods.Goods_Price",
                        "label" : "goods_Price",
                        "code" : "Price",
                        "originalId" : "27826f27-f0c3-45f2-a3a1-11cd21101c24",
                        "bindingPath" : "goods.goods_Price",
                        "bindingField" : "goods_Goods_Price"
                      } ],
                      "primary" : "goods",
                      "entities" : [ ],
                      "name" : "Goods889c",
                      "displayName" : "商品"
                    },
                    "path" : "Goods",
                    "label" : "goods",
                    "code" : "Goods",
                    "originalId" : "0acfd4a5-2f8b-43a4-8d79-831af41d14e1",
                    "bindingPath" : "goods",
                    "bindingField" : "goods"
                  }, {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "readonly" : false,
                    "name" : "采购数量",
                    "id" : "a86e162d-497f-476a-9530-57c22377b71c",
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
                    "originalId" : "a86e162d-497f-476a-9530-57c22377b71c",
                    "bindingPath" : "quality",
                    "bindingField" : "quality"
                  }, {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "readonly" : false,
                    "name" : "采购单价",
                    "id" : "d4e88b20-185b-4054-ad45-05fdf89a191b",
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
                    "originalId" : "d4e88b20-185b-4054-ad45-05fdf89a191b",
                    "bindingPath" : "price",
                    "bindingField" : "price"
                  }, {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "readonly" : false,
                    "name" : "采购小计",
                    "id" : "da828492-6ba4-4c42-8fd5-ed7f525aa5be",
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
                    "originalId" : "da828492-6ba4-4c42-8fd5-ed7f525aa5be",
                    "bindingPath" : "amount",
                    "bindingField" : "amount"
                  }, {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "defaultValue" : "",
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "备注",
                    "id" : "6c863fba-63b9-4e5a-873e-a5e8375985dd",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 100,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Remark",
                    "label" : "remark",
                    "code" : "Remark",
                    "originalId" : "6c863fba-63b9-4e5a-873e-a5e8375985dd",
                    "bindingPath" : "remark",
                    "bindingField" : "remark"
                  } ],
                  "primary" : "id",
                  "entities" : [ ],
                  "name" : "PurchaseDetail",
                  "displayName" : "补货采购细节"
                },
                "label" : "purchaseDetails",
                "code" : "PurchaseDetail"
              } ],
              "name" : "PurchaseOrder",
              "displayName" : "补货采购单"
            },
            "label" : "purchaseOrders",
            "code" : "PurchaseOrder"
          } ],
          "eapiId" : "1624780a-9875-4108-923d-8e773076fa74",
          "eapiCode" : "PurchaseOrderList_frm",
          "eapiName" : "补货代购单列表_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front",
          "voPath" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "PurchaseOrderList_state_machine",
          "name" : "补货代购单列表_frm",
          "uri" : "9e31e50d-e066-48b8-8949-f7c26b88f2bd",
          "code" : "PurchaseOrderList_frm",
          "nameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "补货采购单",
          "fields" : [ ],
          "stateMachine" : "PurchaseOrderList_state_machine",
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
          }, {
            "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "code" : "View1",
            "name" : "在新页签中查看数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}"
            }, {
              "name" : "idToView",
              "shownName" : "待查看数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
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
              "value" : "4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}"
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
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
            "id" : "0d34f338-b601-4716-8530-493b0752483b",
            "code" : "submitWithBizDefKey1",
            "name" : "提交审批",
            "params" : [ {
              "name" : "dataId",
              "shownName" : "表单数据id",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "bizDefKey",
              "shownName" : "流程分类id",
              "value" : "42c8a499-d14a-4d67-b595-3d796ef5c54f"
            }, {
              "name" : "action",
              "shownName" : "迁移动作（可选）",
              "value" : ""
            } ],
            "handlerName" : "submitWithBizDefKey",
            "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "e492063e-a22d-4f23-8aed-7fe139843220",
            "code" : "cancelSubmitWithDataId1",
            "name" : "取消提交",
            "params" : [ {
              "name" : "dataId",
              "shownName" : "表单数据id",
              "value" : "{DATA~/data-grid-component/id}"
            }, {
              "name" : "bizDefKey",
              "shownName" : "流程分类id",
              "value" : ""
            }, {
              "name" : "action",
              "shownName" : "迁移动作（可选）",
              "value" : ""
            } ],
            "handlerName" : "cancelSubmitWithDataId",
            "cmpId" : "a7cb7d01-9df1-4a32-8202-99c9d0f4c339",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
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
          "name" : "补货采购单",
          "fields" : [ {
            "type" : "Form",
            "id" : "b3d11341-0101-468f-ae3f-40c76c0f06b0",
            "fieldName" : "billStatus_BillState",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change",
            "fieldSchema" : {
              "name" : "单据状态"
            }
          }, {
            "type" : "Form",
            "id" : "173a6f07-f50e-44db-810d-6c441b941fbc",
            "fieldName" : "orderCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "b31c76b0-ccdf-42b3-add5-ee7a7894a050",
            "fieldName" : "merchant_Merchant_MerchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c296a2af-7a51-4e24-bb77-dcf4743c1848",
            "fieldName" : "merchant_Merchant_ParentMerchantID_MerchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "上游商户/经销商"
            }
          }, {
            "type" : "Form",
            "id" : "a5f6d271-cbfe-4199-86e0-48ec73d31ac1",
            "fieldName" : "expectedTime",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "4e89a276-7aef-4598-8935-47104b273da7",
            "fieldName" : "orderPerson_OrderPerson_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "下单人"
            }
          }, {
            "type" : "Form",
            "id" : "460dc9cc-4652-4024-8a8c-5e7eb9c01288",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "5fb59eb7-9663-4702-9ac9-73611f2710b6",
            "fieldName" : "orderTime",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : { }
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
                  "id" : "b3d11341-0101-468f-ae3f-40c76c0f06b0",
                  "labelCode" : "BillStatus.BillState",
                  "code" : "BillState",
                  "name" : "状态",
                  "control" : {
                    "id" : "b3d11341-0101-468f-ae3f-40c76c0f06b0",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
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
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                }, {
                  "id" : "173a6f07-f50e-44db-810d-6c441b941fbc",
                  "labelCode" : "OrderCode",
                  "code" : "OrderCode",
                  "name" : "采购编号",
                  "control" : {
                    "id" : "173a6f07-f50e-44db-810d-6c441b941fbc",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "b31c76b0-ccdf-42b3-add5-ee7a7894a050",
                  "labelCode" : "Merchant.Merchant_MerchantName",
                  "code" : "MerchantName",
                  "name" : "商户名称",
                  "control" : {
                    "id" : "b31c76b0-ccdf-42b3-add5-ee7a7894a050",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "c296a2af-7a51-4e24-bb77-dcf4743c1848",
                  "labelCode" : "Merchant.Merchant_ParentMerchantID_MerchantName",
                  "code" : "MerchantName(ParentMerchantID)",
                  "name" : "商户名称",
                  "control" : {
                    "id" : "c296a2af-7a51-4e24-bb77-dcf4743c1848",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "1bcac9ae-e281-4528-a702-5b8604dc08ab",
                  "labelCode" : "Merchant.Merchant_ParentMerchantID_Adminstrator",
                  "code" : "Adminstrator(ParentMerchantID)",
                  "name" : "管理员",
                  "control" : {
                    "id" : "1bcac9ae-e281-4528-a702-5b8604dc08ab",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "a5f6d271-cbfe-4199-86e0-48ec73d31ac1",
                  "labelCode" : "ExpectedTime",
                  "code" : "ExpectedTime",
                  "name" : "预计送达时间",
                  "control" : {
                    "id" : "a5f6d271-cbfe-4199-86e0-48ec73d31ac1",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                  "labelCode" : "OrderTime",
                  "code" : "OrderTime",
                  "name" : "下单时间",
                  "control" : {
                    "id" : "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                }, {
                  "id" : "f462f519-1918-4218-be9f-fadfa0d2031b",
                  "labelCode" : "OrderPerson.OrderPerson",
                  "code" : "OrderPerson",
                  "name" : "下单人",
                  "control" : {
                    "id" : "f462f519-1918-4218-be9f-fadfa0d2031b",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "4e89a276-7aef-4598-8935-47104b273da7",
                  "labelCode" : "OrderPerson.OrderPerson_name",
                  "code" : "name",
                  "name" : "名称",
                  "control" : {
                    "id" : "4e89a276-7aef-4598-8935-47104b273da7",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "460dc9cc-4652-4024-8a8c-5e7eb9c01288",
                  "labelCode" : "TotalPrice",
                  "code" : "TotalPrice",
                  "name" : "采购金额",
                  "control" : {
                    "id" : "460dc9cc-4652-4024-8a8c-5e7eb9c01288",
                    "controltype" : "number",
                    "require" : false,
                    "className" : "",
                    "textAlign" : "left",
                    "precision" : 2,
                    "isBigNumber" : false
                  }
                }, {
                  "id" : "a4978aa8-6491-46fc-8c95-ef7419836f99",
                  "labelCode" : "Remark",
                  "code" : "Remark",
                  "name" : "备注",
                  "control" : {
                    "id" : "a4978aa8-6491-46fc-8c95-ef7419836f99",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                } ],
                "presetFieldConfigs" : [ {
                  "id" : "173a6f07-f50e-44db-810d-6c441b941fbc",
                  "labelCode" : "OrderCode",
                  "code" : "OrderCode",
                  "name" : "采购编号",
                  "control" : {
                    "id" : "173a6f07-f50e-44db-810d-6c441b941fbc",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                  "labelCode" : "OrderTime",
                  "code" : "OrderTime",
                  "name" : "下单时间",
                  "control" : {
                    "id" : "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false
                  }
                } ],
                "formId" : "PurchaseOrderList",
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
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'补货代购单列表'}}</h4>"
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
              "dataSource" : "purchaseOrders",
              "fields" : [ {
                "id" : "orderCode_173a6f07_6v9a",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "采购编号",
                "captionTemplate" : null,
                "dataField" : "orderCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderCode",
                  "field" : "173a6f07-f50e-44db-810d-6c441b941fbc",
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
                "id" : "merchant_Merchant_MerchantName_b31c76b0_ui74",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商户名称",
                "captionTemplate" : null,
                "dataField" : "merchant.merchant_MerchantName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant_Merchant_MerchantName",
                  "field" : "b31c76b0-ccdf-42b3-add5-ee7a7894a050",
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
                "id" : "merchant_Merchant_ParentMerchantID_MerchantName_c296a2af_usp5",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "上游商户/经销商",
                "captionTemplate" : null,
                "dataField" : "merchant.merchant_ParentMerchantID_MerchantName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant_Merchant_ParentMerchantID_MerchantName",
                  "field" : "c296a2af-7a51-4e24-bb77-dcf4743c1848",
                  "fullPath" : "Merchant.Merchant_ParentMerchantID_MerchantName"
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
                "id" : "expectedTime_a5f6d271_bs1j",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "预计送达时间",
                "captionTemplate" : null,
                "dataField" : "expectedTime",
                "dataType" : "date",
                "binding" : {
                  "type" : "Form",
                  "path" : "expectedTime",
                  "field" : "a5f6d271-cbfe-4199-86e0-48ec73d31ac1",
                  "fullPath" : "ExpectedTime"
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
                  "type" : "date",
                  "dateFormat" : "yyyy-MM-dd"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "localizationType" : "Date",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : ""
              }, {
                "id" : "orderTime_5fb59eb7_5a6y",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "下单时间",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderTime",
                  "field" : "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                  "fullPath" : "OrderTime"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "orderTime",
                "dataType" : "date",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : null,
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
                  "type" : "date",
                  "dateFormat" : "yyyy-MM-dd"
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
                "id" : "orderPerson_OrderPerson_name_4e89a276_0b64",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "下单人",
                "captionTemplate" : null,
                "dataField" : "orderPerson.orderPerson_name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderPerson_OrderPerson_name",
                  "field" : "4e89a276-7aef-4598-8935-47104b273da7",
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
                "id" : "billStatus_BillState_b3d11341_iqfk",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "单据状态",
                "captionTemplate" : null,
                "dataField" : "billStatus.billState",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "billStatus_BillState",
                  "field" : "b3d11341-0101-468f-ae3f-40c76c0f06b0",
                  "fullPath" : "BillStatus.BillState"
                },
                "enumData" : [ {
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
                "captionTipStyler" : ""
              }, {
                "id" : "totalPrice_460dc9cc_54te",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "采购金额",
                "captionTemplate" : null,
                "dataField" : "totalPrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "totalPrice",
                  "field" : "460dc9cc-4652-4024-8a8c-5e7eb9c01288",
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
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-goodsstock-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "78a3d45c-e9bb-492a-9ef1-f63aca22a73d",
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
                "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
                "label" : "Edit1",
                "name" : "在新页签中编辑数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
                  "name" : "url",
                  "value" : "4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e",
                  "shownName" : "功能菜单标识",
                  "description" : "必填，请选择编辑数据页面的功能菜单",
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
                    "Description" : "必填，请选择编辑数据页面的功能菜单",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "MenuIdSelector",
                      "context" : null
                    },
                    "Id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
                  "shownName" : "附加参数",
                  "description" : "由列表界面传递给编辑数据页面的参数",
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
                    "Description" : "由列表界面传递给编辑数据页面的参数",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "ConfigurationParameterEditor",
                      "context" : {
                        "schema" : {
                          "type" : "object",
                          "value" : "[{\"id\":\"action\",\"label\":\"action\",\"description\":\"进入页面后执行的初始动作\"},{\"id\":\"id\",\"label\":\"id\",\"description\":\"要编辑的数据id\"},{\"id\":\"sync\",\"label\":\"sync\",\"description\":\"进入页面后切换到编辑状态\",\"defaultValue\": true,\"editorType\":\"Switch\"}]"
                        }
                      }
                    },
                    "Id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
                  "name" : "idToEdit",
                  "value" : "{DATA~/data-grid-component/id}",
                  "shownName" : "待编辑数据的标识",
                  "description" : "必填，一般为指向列表当前行id的数据表达式，例如：{DATA~/data-grid-component/id}",
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
                    "Code" : "idToEdit",
                    "Name" : "待编辑数据的标识",
                    "Description" : "必填，一般为指向列表当前行id的数据表达式，例如：{DATA~/data-grid-component/id}",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
                  "name" : "enableRefresh",
                  "value" : "",
                  "shownName" : "支持刷新列表数据",
                  "description" : "启用此选项后，由编辑数据页面切换回列表页面时，会自动刷新列表数据",
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
                    "Description" : "启用此选项后，由编辑数据页面切换回列表页面时，会自动刷新列表数据",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "Switch",
                      "context" : null
                    },
                    "Id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "编辑数据页签的标题",
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
                    "Description" : "编辑数据页签的标题",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
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
                    "Id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
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
                  "id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                  "name" : "url",
                  "value" : "4bdf73e6-dd0c-4ca8-9467-2995d1bbd33e",
                  "shownName" : "功能菜单标识",
                  "description" : "必填，请选择查看数据页面的功能菜单",
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
                    "Description" : "必填，请选择查看数据页面的功能菜单",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "MenuIdSelector",
                      "context" : null
                    },
                    "Id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
                  "shownName" : "附加参数",
                  "description" : "由列表界面传递给查看数据页面的参数",
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
                    "Description" : "由列表界面传递给查看数据页面的参数",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "ConfigurationParameterEditor",
                      "context" : {
                        "schema" : {
                          "type" : "object",
                          "value" : "[{\"id\":\"action\",\"label\":\"action\",\"description\":\"进入页面后执行的初始动作\"},{\"id\":\"id\",\"label\":\"id\",\"description\":\"要查看的数据id\"},{\"id\":\"sync\",\"label\":\"sync\",\"description\":\"进入页面后切换到查看状态\",\"defaultValue\": true,\"editorType\":\"Switch\"}]"
                        }
                      }
                    },
                    "Id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "5dd191f6-b4a1-91b3-bdab-f9aac8c105ba",
                  "name" : "idToView",
                  "value" : "{DATA~/data-grid-component/id}",
                  "shownName" : "待查看数据的标识",
                  "description" : "必填，一般为指向列表当前行id的数据表达式，例如：{DATA~/data-grid-component/id}",
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
                    "Code" : "idToView",
                    "Name" : "待查看数据的标识",
                    "Description" : "必填，一般为指向列表当前行id的数据表达式，例如：{DATA~/data-grid-component/id}",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "5dd191f6-b4a1-91b3-bdab-f9aac8c105ba",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "c8fd36e7-f507-5931-30ac-2d0c82919e61",
                  "name" : "enableRefresh",
                  "value" : "",
                  "shownName" : "支持刷新列表数据",
                  "description" : "启用此选项后，由查看数据页面切换回列表页面时，会自动刷新列表数据",
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
                    "Description" : "启用此选项后，由查看数据页面切换回列表页面时，会自动刷新列表数据",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "Switch",
                      "context" : null
                    },
                    "Id" : "c8fd36e7-f507-5931-30ac-2d0c82919e61",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "ff8249ec-37ac-c52b-b2cf-328b5b0011fe",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "查看数据页签的标题",
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
                    "Description" : "查看数据页签的标题",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "ff8249ec-37ac-c52b-b2cf-328b5b0011fe",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "1ee9c6b8-3eb1-ca43-7711-1bc284293b5a",
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
                    "Id" : "1ee9c6b8-3eb1-ca43-7711-1bc284293b5a",
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
                  "id" : "225c49b2-e620-8236-a72a-daa668499923",
                  "name" : "dataId",
                  "value" : "{DATA~/data-grid-component/id}",
                  "shownName" : "表单数据id",
                  "description" : "表单数据id",
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
                    "Code" : "dataId",
                    "Name" : "表单数据id",
                    "Description" : "表单数据id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "225c49b2-e620-8236-a72a-daa668499923",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "eafd1876-ea8f-b4c1-fa04-4a51cc75ae8c",
                  "name" : "bizDefKey",
                  "value" : "42c8a499-d14a-4d67-b595-3d796ef5c54f",
                  "shownName" : "流程分类id",
                  "description" : "流程分类id",
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
                    "Code" : "bizDefKey",
                    "Name" : "流程分类id",
                    "Description" : "流程分类id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "eafd1876-ea8f-b4c1-fa04-4a51cc75ae8c",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "7cb8ef64-0038-4bdf-9466-e04f6200f6fd",
                  "name" : "action",
                  "value" : "",
                  "shownName" : "迁移动作（可选）",
                  "description" : "迁移动作（可选）",
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
                    "Code" : "action",
                    "Name" : "迁移动作（可选）",
                    "Description" : "迁移动作（可选）",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "7cb8ef64-0038-4bdf-9466-e04f6200f6fd",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
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
                  "value" : "{DATA~/data-grid-component/id}"
                }, {
                  "name" : "bizDefKey",
                  "shownName" : "流程分类id",
                  "value" : ""
                }, {
                  "name" : "action",
                  "shownName" : "迁移动作（可选）",
                  "value" : ""
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
  "RelativePath" : "HotWave/Stock/GoodsStock/bo-goodsstock-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}