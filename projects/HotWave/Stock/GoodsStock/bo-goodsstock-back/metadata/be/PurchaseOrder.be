{
  "Header" : {
    "Code" : "PurchaseOrder",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back",
    "CertId" : null,
    "Name" : "补货采购单",
    "FileName" : "PurchaseOrder.be",
    "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099",
    "Language" : null,
    "Extendable" : false,
    "ID" : "c15ad6b2-389e-4426-89b6-eca59320e097",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "BillState",
      "Name" : "状态",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "ProcessInstance",
      "Name" : "流程实例",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
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
      "ID" : "3c139eb0-4522-4821-991c-11ae4f0253c2",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back",
      "Code" : "PurchaseOrder.be",
      "Name" : "PurchaseOrder.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099"
    }
  } ],
  "Content" : {
    "ID" : "c15ad6b2-389e-4426-89b6-eca59320e097",
    "Code" : "PurchaseOrder",
    "Name" : "补货采购单",
    "GeneratingAssembly" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "beb543d0-7959-4531-96b7-ef7c512f3f55"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "0b15be12-b438-43c3-8d56-cfe311b5e397",
      "Code" : "PurchaseOrder",
      "Name" : "补货采购单",
      "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back.PurchaseOrder.PurchaseOrder",
      "ContainElements" : [ {
        "ID" : "74ab26a6-a3f2-4f3b-bb2f-ae7b54f5dded",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "4c15e35f-d55f-44d9-94d3-70ba3b1da6d4",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "beb543d0-7959-4531-96b7-ef7c512f3f55",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "36fb621a-61a1-44b6-9909-a84f43082a0c",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "090cc32e-131f-471d-9677-7a3d60018f32",
        "LabelID" : "BillStatus",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "71a6c151-23b3-4836-83c3-fc9fdf966288",
          "LabelID" : "BillStatus_BillStatus",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "a07b7371-7359-4a16-a647-f2f5946f3593",
          "Code" : "BillStatus_BillStatus",
          "Name" : "状态",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "a07b7371-7359-4a16-a647-f2f5946f3593",
        "Code" : "BillStatus",
        "Name" : "状态",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "a0b19650-0101-468f-ae3f-40c76c0f06b0",
        "UdtName" : "状态",
        "EnumIndexType" : 0,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back.PurchaseOrder.PurchaseOrder.BillStatus.Billing",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "Name" : "制单",
          "StringIndex" : "",
          "Value" : "Billing"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back.PurchaseOrder.PurchaseOrder.BillStatus.SubmitApproval",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "Name" : "提交审批",
          "StringIndex" : "",
          "Value" : "SubmitApproval"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back.PurchaseOrder.PurchaseOrder.BillStatus.Approved",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "Name" : "审批通过",
          "StringIndex" : "",
          "Value" : "Approved"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back.PurchaseOrder.PurchaseOrder.BillStatus.ApprovalNotPassed",
          "Index" : 3,
          "IsDefaultEnum" : false,
          "Name" : "审批不通过",
          "StringIndex" : "",
          "Value" : "ApprovalNotPassed"
        } ],
        "MappingRelation" : [ {
          "71a6c151-23b3-4836-83c3-fc9fdf966288" : "a0b19650-0101-468f-ae3f-40c76c0f06b0"
        } ]
      }, {
        "ID" : "71adcb93-ae3d-4361-9275-88dea992369a",
        "LabelID" : "ProcessInstance",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "f1241612-3d50-4aa7-8b22-c288f1cc29f4",
          "LabelID" : "ProcessInstance_ProcessInstance",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "92435023-7fff-4acc-8a39-c7296a718604",
          "Code" : "ProcessInstance_ProcessInstance",
          "Name" : "",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "92435023-7fff-4acc-8a39-c7296a718604",
        "Code" : "ProcessInstance",
        "Name" : "流程实例",
        "MDataType" : "String",
        "Length" : 36,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135",
        "UdtName" : "流程实例",
        "MappingRelation" : [ {
          "f1241612-3d50-4aa7-8b22-c288f1cc29f4" : "2e1beb7d-ad8f-4da3-a430-c8a7f2162135"
        } ]
      }, {
        "ID" : "fdacc616-e37c-4a1a-84f3-437754d5ab93",
        "LabelID" : "OrderCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "ba7fa0a0-996a-4598-9960-b638d386920a",
        "Code" : "OrderCode",
        "Name" : "采购编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "SavingTime",
          "BillCodeName" : "补货采购单号",
          "BillCodeID" : "241e2041-d9fa-4a68-8261-4961fddc245e"
        }
      }, {
        "ID" : "3890c087-7685-4ad5-88c3-13f63c86e4f5",
        "LabelID" : "Merchant",
        "ChildAssociations" : [ {
          "ID" : "619d0cff-fbfe-4252-9bac-e104ebc0655d",
          "RefElementCollection" : [ {
            "ID" : "bed5ab5b-cc3d-4820-8c26-54e08d80266b",
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
            "ID" : "3f1d56f5-b00c-426f-bffa-84268dbea6c7",
            "LabelID" : "Merchant_ParentMerchantID_MerchantName",
            "ChildAssociations" : [ ],
            "ColumnID" : "21bd0ac4-20e3-449e-a3fc-d141c14dafe7",
            "Code" : "MerchantName(ParentMerchantID)",
            "Name" : "商户名称",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "fcb23540-fffc-426a-a4c7-12e940733158",
            "EnableRtrim" : true
          }, {
            "ID" : "059f9ecf-a7e2-4002-85f0-b195da5ccc0a",
            "LabelID" : "Merchant_ParentMerchantID_Adminstrator",
            "ChildAssociations" : [ ],
            "ColumnID" : "41497a76-72e3-41ae-bb94-d1f87525017a",
            "Code" : "Adminstrator(ParentMerchantID)",
            "Name" : "管理员",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "a822deb9-b4e2-46e8-87f0-b0ab5c400b8a",
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
            "TargetElement" : "3890c087-7685-4ad5-88c3-13f63c86e4f5",
            "TargetElementDisplay" : "商户"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "Merchant",
            "ModelConfigId" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant"
          }
        } ],
        "ColumnID" : "1dd47997-f64d-46e4-8b40-238af9834b5c",
        "Code" : "Merchant",
        "Name" : "商户",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "DefaultValueType" : 1,
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "2e692de4-2606-402b-9f0c-d0b9140bb888",
        "LabelID" : "ExpectedTime",
        "ChildAssociations" : [ ],
        "ColumnID" : "88819c73-1c0c-4808-87dd-ecbb068be5ac",
        "Code" : "ExpectedTime",
        "Name" : "预计送达时间",
        "MDataType" : "Date",
        "EnableRtrim" : true
      }, {
        "ID" : "26ffe7a2-d6b7-414b-8415-5393aa2736b8",
        "LabelID" : "OrderTime",
        "ChildAssociations" : [ ],
        "ColumnID" : "4316ef18-e14d-4d6d-9228-fac9f605bdc1",
        "Code" : "OrderTime",
        "Name" : "下单时间",
        "MDataType" : "Date",
        "EnableRtrim" : true
      }, {
        "ID" : "c2f8ee68-b235-438b-9895-38db6ab07d1b",
        "LabelID" : "OrderPerson",
        "ChildAssociations" : [ {
          "ID" : "f462f519-1918-4218-be9f-fadfa0d2031b",
          "RefElementCollection" : [ {
            "ID" : "c078dfe7-21ff-461d-a8b1-a6cfad32f7d0",
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
            "TargetElement" : "c2f8ee68-b235-438b-9895-38db6ab07d1b",
            "TargetElementDisplay" : "下单人"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "GspUserWithOrgName",
            "ModelConfigId" : "Inspur.GS.Gsp.Sys.User.GspUserWithOrgName"
          }
        } ],
        "ColumnID" : "e3bb3270-62cf-47d6-8d2e-1ded1c40b092",
        "Code" : "OrderPerson",
        "Name" : "下单人",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "DefaultValue" : "{\"expr\":\"DefaultFunction.GetSessionValue(\\\"UserId\\\")\",\"sexpr\":\"\"}",
        "DefaultValueType" : 1,
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "dd849bbc-05ce-4cee-816f-7694ad5a66ce",
        "LabelID" : "TotalPrice",
        "ChildAssociations" : [ ],
        "ColumnID" : "81971e0a-0699-4a06-94b3-c3fe5075600f",
        "Code" : "TotalPrice",
        "Name" : "采购金额",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "81e61131-2bd4-4930-a8fa-e8eab17cb791",
        "LabelID" : "Remark",
        "ChildAssociations" : [ ],
        "ColumnID" : "e2ef0d75-44be-4716-9b6a-703c892b6504",
        "Code" : "Remark",
        "Name" : "备注",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      } ],
      "ContainChildObjects" : [ {
        "ID" : "04ec3984-7a31-4b8f-93fc-1801f1a11328",
        "Code" : "PurchaseDetail",
        "Name" : "补货采购细节",
        "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back.PurchaseOrder.PurchaseDetail",
        "ContainElements" : [ {
          "ID" : "1932de76-8329-42b1-ae4e-b88c3b57f0a4",
          "LabelID" : "ID",
          "ChildAssociations" : [ ],
          "ColumnID" : "1a0967f5-7171-4a46-9f8b-d341331b348a",
          "Code" : "ID",
          "Name" : "主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "5dfa4c92-6dcd-4267-8e74-2e181889f629",
          "LabelID" : "ParentID",
          "ChildAssociations" : [ ],
          "ColumnID" : "d4d5f639-6b62-4ab0-bb55-1cea416cb902",
          "Code" : "ParentID",
          "Name" : "上级对象主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "b5d17556-4708-4b99-b011-750d93aa820f",
          "LabelID" : "Goods",
          "ChildAssociations" : [ {
            "ID" : "889cc129-df3b-4cc0-aaef-ae1440736f0f",
            "RefElementCollection" : [ {
              "ID" : "4648332d-76d8-4eac-b58d-df845ebe2d6c",
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
              "ID" : "bd7a3088-0320-446d-863d-347ad66538d5",
              "LabelID" : "Goods_Specification",
              "ChildAssociations" : [ ],
              "ColumnID" : "690d1712-06ee-43eb-a4af-6021ce92556f",
              "Code" : "Specification",
              "Name" : "规格型号",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "f69bea17-83d7-4b96-8a7e-ddb7c63bdb66",
              "EnableRtrim" : true
            }, {
              "ID" : "bb1d93e6-1911-4cff-a7d3-1450e3ec3b15",
              "LabelID" : "Goods_Price",
              "ChildAssociations" : [ ],
              "ColumnID" : "f7487f7f-fdda-41f6-862c-ec39daa044f7",
              "Code" : "Price",
              "Name" : "单价",
              "MDataType" : "Decimal",
              "Length" : 10,
              "Precision" : 2,
              "IsRefElement" : true,
              "RefElementID" : "ca25d509-b383-4aba-bc2b-57d029cde131",
              "EnableRtrim" : true
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
              "TargetElement" : "b5d17556-4708-4b99-b011-750d93aa820f",
              "TargetElementDisplay" : "商品"
            } ],
            "AssoModelInfo" : {
              "MainObjCode" : "Goods",
              "ModelConfigId" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back.Goods"
            }
          } ],
          "ColumnID" : "21b92d28-0f19-486c-90b0-b4f40c8e64c0",
          "Code" : "Goods",
          "Name" : "商品",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        }, {
          "ID" : "c11b4b1b-fc7d-40b2-8630-f2d9bd46f364",
          "LabelID" : "Quality",
          "ChildAssociations" : [ ],
          "ColumnID" : "91f3d469-07d7-470e-a046-467fbb9416e5",
          "Code" : "Quality",
          "Name" : "采购数量",
          "MDataType" : "Integer",
          "EnableRtrim" : true
        }, {
          "ID" : "daedaeb7-7265-4d60-b932-e06967149d80",
          "LabelID" : "Price",
          "ChildAssociations" : [ ],
          "ColumnID" : "119bd28e-a358-4d92-8165-f9f32ca083a4",
          "Code" : "Price",
          "Name" : "采购单价",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "98310701-fd87-4a07-a705-64792d7be382",
          "LabelID" : "Amount",
          "ChildAssociations" : [ ],
          "ColumnID" : "96150c34-e6fa-4029-a45e-292a83a20bad",
          "Code" : "Amount",
          "Name" : "采购小计",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "23f15952-b512-4239-98a5-a94146329266",
          "LabelID" : "Remark",
          "ChildAssociations" : [ ],
          "ColumnID" : "811e136e-5c96-4ca3-9e6f-d67657d1c33e",
          "Code" : "Remark",
          "Name" : "备注",
          "MDataType" : "String",
          "Length" : 100,
          "EnableRtrim" : true
        } ],
        "RefObjectName" : "67814538-6ba1-406c-9562-23e4c41a51a5",
        "ObjectType" : 1,
        "ColumnGenerateID" : {
          "ColumnParameters" : [ ],
          "ElementID" : "1932de76-8329-42b1-ae4e-b88c3b57f0a4",
          "GenerateType" : "Guid"
        },
        "BelongModelID" : "c15ad6b2-389e-4426-89b6-eca59320e097",
        "Keys" : [ {
          "RefDataModelName" : "",
          "SourceElement" : "5dfa4c92-6dcd-4267-8e74-2e181889f629",
          "SourceElementDisplay" : "上级对象主键",
          "TargetElement" : "74ab26a6-a3f2-4f3b-bb2f-ae7b54f5dded",
          "TargetElementDisplay" : "主键"
        } ],
        "ParentObjectID" : "0b15be12-b438-43c3-8d56-cfe311b5e397"
      } ],
      "RefObjectName" : "30c642fd-6fcd-4d41-b3f3-a2e799d65166",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "74ab26a6-a3f2-4f3b-bb2f-ae7b54f5dded",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "c15ad6b2-389e-4426-89b6-eca59320e097"
    },
    "Variables" : {
      "ID" : "fbaa65ee-23a1-4280-815e-4cc3f17ce719",
      "Code" : "PurchaseOrderVariable",
      "Name" : "补货采购单变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back",
    "EnableApproval" : true
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/Stock/GoodsStock/bo-goodsstock-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":true}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}