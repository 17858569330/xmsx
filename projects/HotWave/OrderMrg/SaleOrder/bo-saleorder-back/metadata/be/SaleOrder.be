{
  "Header" : {
    "Code" : "SaleOrder",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back",
    "CertId" : null,
    "Name" : "业务订单",
    "FileName" : "SaleOrder.be",
    "BizobjectID" : "ee0af0b4-e947-7987-a85d-5072623dc1e6",
    "Language" : null,
    "Extendable" : false,
    "ID" : "adeb56c1-6032-4907-b051-6358aa17b5fb",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "998eca12-ec1c-46ce-979d-89808547b46e",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back",
      "Code" : "SaleOrderSendGoodsMgrActionController",
      "Name" : "SaleOrderSendGoodsMgrActionController",
      "Type" : "BEMgrComponent",
      "BizobjectID" : "ee0af0b4-e947-7987-a85d-5072623dc1e6"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "be844cb7-4ddf-4c37-8a56-cd9660900acc",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back",
      "Code" : "MerChant",
      "Name" : "商户",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "86748f14-54c0-bedd-9337-a23a74fbb6ff"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "d47a96bf-9b52-446c-b1d2-42f4d73c34c8",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.Gsp.Sys.User",
      "Code" : "GspUserWithOrgName",
      "Name" : "系统用户",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "User"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "1d32c104-fc50-478b-8141-887ad1080ff8",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back",
      "Code" : "SaleOrderSendStateActionActionController",
      "Name" : "SaleOrderSendStateActionActionController",
      "Type" : "BEComponent",
      "BizobjectID" : "ee0af0b4-e947-7987-a85d-5072623dc1e6"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "7cbdd71b-7819-44cc-a946-c6ac7c8c94c6",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back",
      "Code" : "Goods",
      "Name" : "商品",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "dec0e47e-409b-6d3a-8876-85bd5909bf19"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "dd8cb60f-c57f-4a09-9493-e924c4e9f2ca",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back",
      "Code" : "SaleOrder.be",
      "Name" : "SaleOrder.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "ee0af0b4-e947-7987-a85d-5072623dc1e6"
    }
  } ],
  "Content" : {
    "ID" : "adeb56c1-6032-4907-b051-6358aa17b5fb",
    "Code" : "SaleOrder",
    "Name" : "业务订单",
    "GeneratingAssembly" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "d1e52491-049a-4406-8eb0-ba44fabd5e65"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "230d8cab-6a20-433f-87db-d4d33c68e5a1",
      "Code" : "SaleOrder",
      "Name" : "业务订单",
      "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder",
      "ContainElements" : [ {
        "ID" : "01eb63b7-33fb-4a1b-8618-21971fe7f1cb",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "7e2adbca-91f0-48a2-b526-5b63b5997804",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "d1e52491-049a-4406-8eb0-ba44fabd5e65",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "d93f0841-ef14-428a-8191-6d07b4d91421",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "d14022e7-894c-4137-9753-a6282e3ff182",
        "LabelID" : "OrderCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "e37aeb94-53a6-43c3-8521-6d5a8c834513",
        "Code" : "OrderCode",
        "Name" : "订单编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "SavingTime",
          "BillCodeName" : "销售订单",
          "BillCodeID" : "4d214720-01a5-43f5-930b-8fa27f6ca71a"
        }
      }, {
        "ID" : "e4d721db-0d9c-4d39-9b4b-2d6c32298dca",
        "LabelID" : "Merchant",
        "ChildAssociations" : [ {
          "ID" : "96976ac9-3bb4-4663-8f10-887f7a17d914",
          "RefElementCollection" : [ {
            "ID" : "3a664d0f-327c-4763-8fba-2a4609c44df6",
            "LabelID" : "Merchant_MerchantName",
            "ChildAssociations" : [ ],
            "ColumnID" : "21bd0ac4-20e3-449e-a3fc-d141c14dafe7",
            "Code" : "MerchantName",
            "Name" : "商户名称",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "c61fc0af-727a-4d70-8499-0b665d052b0c",
            "EnableRtrim" : true
          }, {
            "ID" : "c1ab7d5b-0e52-4318-960d-aef6c28a373b",
            "LabelID" : "Merchant_MerchantCode",
            "ChildAssociations" : [ ],
            "ColumnID" : "c7c38b59-70ff-4eda-979e-0de51e48de50",
            "Code" : "MerchantCode",
            "Name" : "商户编号",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "f50c0dfb-514b-4c35-90be-47a2836e4c96",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "be844cb7-4ddf-4c37-8a56-cd9660900acc",
          "RefModelName" : "商户",
          "RefModelCode" : "MerChant",
          "RefObjectID" : "4d152341-0dcd-4468-bf75-f784a486d293",
          "RefObjectCode" : "Merchant",
          "RefObjectName" : "商户",
          "KeyCollection" : [ {
            "RefDataModelName" : "",
            "SourceElement" : "45cb1697-9f39-482e-8155-ba0726c017ca",
            "SourceElementDisplay" : "主键",
            "TargetElement" : "e4d721db-0d9c-4d39-9b4b-2d6c32298dca",
            "TargetElementDisplay" : "商户"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "Merchant",
            "ModelConfigId" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant"
          }
        } ],
        "ColumnID" : "201c914a-f529-4c28-a9b6-32777bef22f1",
        "Code" : "Merchant",
        "Name" : "商户",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "4d33ed0c-34b7-4ec6-9c11-01ff30170ba2",
        "LabelID" : "OrderTime",
        "ChildAssociations" : [ ],
        "ColumnID" : "c6cece5e-2ca2-47f7-8630-099b1781a830",
        "Code" : "OrderTime",
        "Name" : "下单时间",
        "MDataType" : "String",
        "DefaultValue" : "{\"expr\":\"DefaultFunction.FormatDate(\\\"yyyy-MM-dd HH:mm:ss\\\")\",\"sexpr\":\"\"}",
        "DefaultValueType" : 1,
        "Length" : 30,
        "EnableRtrim" : true
      }, {
        "ID" : "7ed0b6fd-f582-4cc2-b820-a6a8534d80bc",
        "LabelID" : "PayMethod",
        "ChildAssociations" : [ ],
        "ColumnID" : "d85d0b1b-34db-4d11-a4f7-b344541c0541",
        "Code" : "PayMethod",
        "Name" : "支付方式",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.PayMethod.Cash",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "Name" : "现金",
          "StringIndex" : "Cash",
          "Value" : "Cash"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.PayMethod.AliPay",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "Name" : "支付宝",
          "StringIndex" : "AliPay",
          "Value" : "AliPay"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.PayMethod.WeChat",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "Name" : "微信支付",
          "StringIndex" : "WeChat",
          "Value" : "WeChat"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.PayMethod.UPay",
          "Index" : 3,
          "IsDefaultEnum" : false,
          "Name" : "银联",
          "StringIndex" : "UPay",
          "Value" : "UPay"
        } ]
      }, {
        "ID" : "62f6948e-8dae-408e-8e77-3b419258cda3",
        "LabelID" : "OrderPerson",
        "ChildAssociations" : [ {
          "ID" : "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
          "RefElementCollection" : [ {
            "ID" : "12ee0c0a-0e62-45fd-af05-c829ebbb8c7b",
            "LabelID" : "OrderPerson_code",
            "ChildAssociations" : [ ],
            "ColumnID" : "3c737876-3ae5-4018-960e-b9337a0afb94",
            "Code" : "code",
            "Name" : "编号",
            "MDataType" : "String",
            "Length" : 120,
            "IsRefElement" : true,
            "RefElementID" : "4840f895-d902-4739-b52a-ec1edacc8f64",
            "EnableRtrim" : true
          }, {
            "ID" : "f436dde0-0049-4f85-8aa4-188b7a4a0e49",
            "LabelID" : "OrderPerson_name",
            "ChildAssociations" : [ ],
            "ColumnID" : "55569631-de1d-46a5-bf27-2d9663989d58",
            "Code" : "name",
            "Name" : "名称",
            "MDataType" : "String",
            "Length" : 120,
            "IsMultiLanguage" : true,
            "IsRefElement" : true,
            "RefElementID" : "3416092e-dff8-4a97-8d8b-5a1b6a07b141",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "d47a96bf-9b52-446c-b1d2-42f4d73c34c8",
          "RefModelName" : "系统用户",
          "RefModelCode" : "GspUserWithOrgName",
          "RefModelPkgName" : "Inspur.GS.Gsp.Sys.User",
          "RefObjectID" : "1908dac6-b1f4-4ebc-814d-28340e9b2c20",
          "RefObjectCode" : "GspUserWithOrgName",
          "RefObjectName" : "系统用户",
          "KeyCollection" : [ {
            "RefDataModelName" : "",
            "SourceElement" : "f35011b5-a424-4c75-9030-d83648d59f7c",
            "SourceElementDisplay" : "ID",
            "TargetElement" : "62f6948e-8dae-408e-8e77-3b419258cda3",
            "TargetElementDisplay" : "下单人"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "GspUserWithOrgName",
            "ModelConfigId" : "Inspur.GS.Gsp.Sys.User.GspUserWithOrgName"
          }
        } ],
        "ColumnID" : "8b5d0be9-f585-4b76-977d-47945c7d7143",
        "Code" : "OrderPerson",
        "Name" : "下单人",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "93ab16c4-121e-441a-9de8-f137a8eb1257",
        "LabelID" : "Telephone",
        "ChildAssociations" : [ ],
        "ColumnID" : "d79c3b18-66ea-4ad9-98dd-1e8eded71937",
        "Code" : "Telephone",
        "Name" : "联系电话",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true
      }, {
        "ID" : "c36e9a96-bf7c-49f5-805a-cf3e119be73d",
        "LabelID" : "SendState",
        "ChildAssociations" : [ ],
        "ColumnID" : "613c4b49-a186-490a-b56c-50f7cbac27e6",
        "Code" : "SendState",
        "Name" : "发货状态",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.SendState.UnShipped",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "Name" : "未发货",
          "StringIndex" : "UnShipped",
          "Value" : "UnShipped"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.SendState.Shipped",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "Name" : "已发货",
          "StringIndex" : "Shipped",
          "Value" : "Shipped"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.SendState.Done",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "Name" : "已收货",
          "StringIndex" : "Done",
          "Value" : "Done"
        } ]
      }, {
        "ID" : "c05e4bf6-77bc-4b07-898c-01332566b958",
        "LabelID" : "Remark",
        "ChildAssociations" : [ ],
        "ColumnID" : "fff42f99-8320-4dd9-9761-e1616cfaf3c5",
        "Code" : "Remark",
        "Name" : "备注",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      }, {
        "ID" : "62b76d97-09cb-4f40-bd1c-c217929a7bcf",
        "LabelID" : "TotalPrice",
        "ChildAssociations" : [ ],
        "ColumnID" : "50060e26-cfd5-43ac-a5e0-d5784365e53e",
        "Code" : "TotalPrice",
        "Name" : "订单金额",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "85421c1b-bd8f-489a-b121-35392ef79f53",
        "LabelID" : "TotalDiscounts",
        "ChildAssociations" : [ ],
        "ColumnID" : "a721707e-3aa7-4c72-b7fa-abf074d9000e",
        "Code" : "TotalDiscounts",
        "Name" : "折扣优惠",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "af47386a-bbdc-4892-8381-959956bf9fb2",
        "LabelID" : "ActualPay",
        "ChildAssociations" : [ ],
        "ColumnID" : "f3e1049c-6348-4c43-8edb-1e32342fe980",
        "Code" : "ActualPay",
        "Name" : "合计实付",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "83fc12da-4865-4530-9234-23448a253e52",
        "LabelID" : "OrderSource",
        "ChildAssociations" : [ ],
        "ColumnID" : "1640957f-2d37-4268-b1dc-6dbea834fb42",
        "Code" : "OrderSource",
        "Name" : "订单来源",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true
      } ],
      "ContainChildObjects" : [ {
        "ID" : "3832af8b-d0a2-4b9d-9720-2727e5c72ea8",
        "Code" : "OrderDetail",
        "Name" : "订单明细",
        "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.OrderDetail",
        "ContainElements" : [ {
          "ID" : "c9a72bda-b989-47bb-b1ee-dbf52b211004",
          "LabelID" : "ID",
          "ChildAssociations" : [ ],
          "ColumnID" : "5497c634-4306-4779-bc3e-34341c2cf8cf",
          "Code" : "ID",
          "Name" : "主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "cecf931e-ae7c-4d90-b874-2e4c6908bbe3",
          "LabelID" : "ParentID",
          "ChildAssociations" : [ ],
          "ColumnID" : "08406c25-9f67-443c-a42b-ece47abb71cc",
          "Code" : "ParentID",
          "Name" : "上级对象主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "a3102a9f-d04d-48fd-b0a8-0657227de982",
          "LabelID" : "Goods",
          "ChildAssociations" : [ {
            "ID" : "d3829541-fe43-4618-9e7b-da3e04fb7b94",
            "RefElementCollection" : [ {
              "ID" : "7c483f35-348a-428b-82cb-c2b3e877a43a",
              "LabelID" : "Goods_GoodsName",
              "ChildAssociations" : [ ],
              "ColumnID" : "2825695f-86d4-46dd-aa97-adb4f30dbe24",
              "Code" : "GoodsName",
              "Name" : "商品名称",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "071aa8a8-ac34-4bae-acb4-e121953a6747",
              "EnableRtrim" : true
            }, {
              "ID" : "3b54af74-e60c-4a86-a6b3-77ee66b9ad33",
              "LabelID" : "Goods_GoodsCode",
              "ChildAssociations" : [ ],
              "ColumnID" : "986d9ed7-bc83-455f-94ad-059fde880c42",
              "Code" : "GoodsCode",
              "Name" : "商品编号",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "be9ec3b2-5ae4-4ddd-bd87-d97f21af91e8",
              "EnableRtrim" : true,
              "BillCodeConfig" : {
                "CanBillCode" : true,
                "CodeGenerateOccasion" : "SavingTime",
                "BillCodeName" : "商品编号规则",
                "BillCodeID" : "34ad81de-095a-49ef-8ecc-40dd1a65d861"
              }
            } ],
            "RefModelID" : "7cbdd71b-7819-44cc-a946-c6ac7c8c94c6",
            "RefModelName" : "商品",
            "RefModelCode" : "Goods",
            "RefObjectID" : "9939bb9e-4008-47aa-82fa-159aebaa1b6e",
            "RefObjectCode" : "Goods",
            "RefObjectName" : "商品",
            "KeyCollection" : [ {
              "RefDataModelName" : "",
              "SourceElement" : "de814a36-c2dd-4724-97e4-e036aebdfe72",
              "SourceElementDisplay" : "主键",
              "TargetElement" : "a3102a9f-d04d-48fd-b0a8-0657227de982",
              "TargetElementDisplay" : "商品"
            } ],
            "AssoModelInfo" : {
              "MainObjCode" : "Goods",
              "ModelConfigId" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back.Goods"
            }
          } ],
          "ColumnID" : "4de00921-bae2-42c1-8fea-3cb2a417ed0c",
          "Code" : "Goods",
          "Name" : "商品",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        }, {
          "ID" : "a020e7f1-0c9e-4893-afab-5b4c58d1eab2",
          "LabelID" : "Specification",
          "ChildAssociations" : [ ],
          "ColumnID" : "bbc0238c-42fc-4de1-8a99-55fea12a9a74",
          "Code" : "Specification",
          "Name" : "规格型号",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        }, {
          "ID" : "69b67d44-a300-47d0-a45f-3248222fa4b7",
          "LabelID" : "Quality",
          "ChildAssociations" : [ ],
          "ColumnID" : "e81afca8-b5d1-4199-af68-eb0b55bf2ba5",
          "Code" : "Quality",
          "Name" : "数量",
          "MDataType" : "Integer",
          "EnableRtrim" : true
        }, {
          "ID" : "fb281ac8-de4f-46c7-be6e-e084145d5d23",
          "LabelID" : "Price",
          "ChildAssociations" : [ ],
          "ColumnID" : "f0a588a0-64bc-40b1-9c9d-cc92162f8271",
          "Code" : "Price",
          "Name" : "标准单价",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "d6967d6f-1a46-4361-a7b6-476d0d5b57aa",
          "LabelID" : "Amount",
          "ChildAssociations" : [ ],
          "ColumnID" : "591c37ba-24dc-4305-bee0-54dc22632f1c",
          "Code" : "Amount",
          "Name" : "金额",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "b98ccbdf-5692-4950-823a-f11d72b5dfc4",
          "LabelID" : "DiscountType",
          "ChildAssociations" : [ ],
          "ColumnID" : "39309db3-c979-4905-8e3a-7073f0a67ddd",
          "Code" : "DiscountType",
          "Name" : "折扣类型",
          "ObjectType" : "Enum",
          "MDataType" : "String",
          "Length" : 20,
          "EnableRtrim" : true,
          "EnumIndexType" : 1,
          "ContainEnumValues" : [ {
            "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.OrderDetail.DiscountType.none",
            "Index" : 0,
            "IsDefaultEnum" : true,
            "Name" : "无折扣",
            "StringIndex" : "none",
            "Value" : "none"
          }, {
            "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back.SaleOrder.OrderDetail.DiscountType.dis",
            "Index" : 1,
            "IsDefaultEnum" : false,
            "Name" : "有折扣",
            "StringIndex" : "dis",
            "Value" : "dis"
          } ]
        }, {
          "ID" : "97bab4db-f35a-4314-94a9-34ed35bd6f3d",
          "LabelID" : "Discount",
          "ChildAssociations" : [ ],
          "ColumnID" : "e4dd58af-19df-4c30-bf28-ce3da3d7e8da",
          "Code" : "Discount",
          "Name" : "折扣金额",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "76ec402d-a333-4d79-81d9-c0bceaef3b9a",
          "LabelID" : "ActualAmount",
          "ChildAssociations" : [ ],
          "ColumnID" : "f770da42-367b-41d1-b0a0-e4275465746b",
          "Code" : "ActualAmount",
          "Name" : "实际结算金额",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "9c46c294-6e06-4b78-88e5-6e3f386c7df5",
          "LabelID" : "Remark",
          "ChildAssociations" : [ ],
          "ColumnID" : "19a8e6fc-0a92-4cb6-8b99-04300c9cec17",
          "Code" : "Remark",
          "Name" : "备注",
          "MDataType" : "String",
          "Length" : 100,
          "EnableRtrim" : true
        } ],
        "RefObjectName" : "bc4c62d5-a407-443e-8a8c-72aebfe82304",
        "ObjectType" : 1,
        "ColumnGenerateID" : {
          "ColumnParameters" : [ ],
          "ElementID" : "c9a72bda-b989-47bb-b1ee-dbf52b211004",
          "GenerateType" : "Guid"
        },
        "BelongModelID" : "adeb56c1-6032-4907-b051-6358aa17b5fb",
        "Keys" : [ {
          "RefDataModelName" : "",
          "SourceElement" : "cecf931e-ae7c-4d90-b874-2e4c6908bbe3",
          "SourceElementDisplay" : "上级对象主键",
          "TargetElement" : "01eb63b7-33fb-4a1b-8618-21971fe7f1cb",
          "TargetElementDisplay" : "主键"
        } ],
        "ParentObjectID" : "230d8cab-6a20-433f-87db-d4d33c68e5a1"
      } ],
      "RefObjectName" : "303de6f7-0a17-4728-ab91-a0a567daf01e",
      "BizActions" : [ {
        "ID" : "933ab68b-a1ab-4c38-8d80-dc514987de1a",
        "Code" : "SendStateAction",
        "Name" : "发货",
        "ComponentId" : "1d32c104-fc50-478b-8141-887ad1080ff8",
        "ComponentName" : "SaleOrderSendStateActionActionController",
        "Parameters" : [ {
          "ID" : "c6903c9b-718d-45db-90e0-1c15bd1e4d7e",
          "ParamCode" : "sendstate",
          "ParamName" : "parameter1",
          "ParameterType" : 0,
          "Assembly" : "mscorlib.dll",
          "ClassName" : "System.String",
          "JavaClassName" : "java.lang.String"
        } ],
        "ReturnValue" : {
          "ID" : "fee5b592-7e96-4717-90b3-67f7d4a935f9",
          "ParameterType" : 0,
          "Assembly" : "mscorlib.dll",
          "ClassName" : "Void",
          "JavaClassName" : "void",
          "Mode" : 1
        }
      } ],
      "DtmAfterCreate" : [ {
        "ID" : "9302ac6c-adbd-42b9-a80c-3c4b72ffba57",
        "Code" : "SaleOrderAfterCreate",
        "Name" : "新增后1",
        "ComponentId" : "8a30101f-b239-4df8-ba1c-eaefa38287ec",
        "ComponentName" : "SaleOrderSaleOrderAfterCreateDeterminationController"
      } ],
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "01eb63b7-33fb-4a1b-8618-21971fe7f1cb",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "adeb56c1-6032-4907-b051-6358aa17b5fb"
    },
    "Variables" : {
      "ID" : "b9a1668a-61c7-4e60-b967-4db10221d640",
      "Code" : "SaleOrderVariable",
      "Name" : "业务订单变量",
      "I18nResourceInfoPrefix" : ""
    },
    "BizMgrActions" : [ {
      "ID" : "f2d1d326-ff59-4c33-bf36-45347b94bebc",
      "Code" : "SendGoods",
      "Name" : "发货",
      "ComponentId" : "998eca12-ec1c-46ce-979d-89808547b46e",
      "ComponentName" : "SaleOrderSendGoodsMgrActionController",
      "Parameters" : [ {
        "ID" : "bc6e61c2-21f0-4875-accf-ee22e9776751",
        "ParamCode" : "id",
        "ParamName" : "单据ID",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String"
      }, {
        "ID" : "cc577fa6-cbaf-4e03-9e2c-845362b8f2a1",
        "ParamCode" : "sendstate",
        "ParamName" : "parameter1",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String"
      } ],
      "ReturnValue" : {
        "ID" : "1a17df05-e16e-4da8-9c41-9c514ac6fd39",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "Void",
        "JavaClassName" : "void",
        "Mode" : 1
      }
    } ],
    "ComponentAssemblyName" : "Inspur.GS.HotWave.OrderMrg.SaleOrder.SaleOrder.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/OrderMrg/SaleOrder/bo-saleorder-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}