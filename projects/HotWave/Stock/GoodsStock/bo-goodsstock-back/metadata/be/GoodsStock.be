{
  "Header" : {
    "Code" : "GoodsStock",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back",
    "CertId" : null,
    "Name" : "商品库",
    "FileName" : "GoodsStock.be",
    "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099",
    "Language" : null,
    "Extendable" : false,
    "ID" : "b3a372d3-4d4e-48a0-988d-6a7c0ddfd561",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "42128097-ddc2-4e22-8bc0-62363589c462",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back",
      "Code" : "GoodsStockStockWriteBackMgrActionController",
      "Name" : "GoodsStockStockWriteBackMgrActionController",
      "Type" : "BEMgrComponent",
      "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099"
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
      "ID" : "44f269bf-511a-4aa2-8492-d3c81523fe6f",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back",
      "Code" : "GoodsStock.be",
      "Name" : "GoodsStock.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e093e8c4-7764-1bc4-bf0e-76bd4b1a9099"
    }
  } ],
  "Content" : {
    "ID" : "b3a372d3-4d4e-48a0-988d-6a7c0ddfd561",
    "Code" : "GoodsStock",
    "Name" : "商品库",
    "GeneratingAssembly" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "7897de16-e84f-4c66-89c3-0dae50a6a097"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "e673cf2b-3faa-4dc6-a411-2a1853880441",
      "Code" : "GoodsStock",
      "Name" : "商品库",
      "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back.GoodsStock.GoodsStock",
      "ContainElements" : [ {
        "ID" : "8cfab836-83bf-4dae-8637-abe3e4fd3a44",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "e3c1680c-57d3-4b98-bc81-2ae3b538e503",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "7897de16-e84f-4c66-89c3-0dae50a6a097",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "136d60d3-4442-4267-84d0-638dabe07bff",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "67392774-2184-49b1-aa81-1f3d83415566",
        "LabelID" : "MerchantID",
        "ChildAssociations" : [ {
          "ID" : "55213b02-11bb-483a-928c-7c026e25b6e8",
          "RefElementCollection" : [ {
            "ID" : "db4e3d8e-4090-42fe-ad77-11bcdc8b2d98",
            "LabelID" : "MerchantID_MerchantName",
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
            "ID" : "be2e0fb2-1e32-41a0-992c-a7c0598cc1a4",
            "LabelID" : "MerchantID_ParentMerchantID_MerchantName",
            "ChildAssociations" : [ ],
            "ColumnID" : "21bd0ac4-20e3-449e-a3fc-d141c14dafe7",
            "Code" : "MerchantName(ParentMerchantID)",
            "Name" : "商户名称",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "fcb23540-fffc-426a-a4c7-12e940733158",
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
            "TargetElement" : "67392774-2184-49b1-aa81-1f3d83415566",
            "TargetElementDisplay" : "商户ID"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "Merchant",
            "ModelConfigId" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant"
          }
        } ],
        "ColumnID" : "95b78388-84fe-4ec0-ba6d-82ce3b428fcd",
        "Code" : "MerchantID",
        "Name" : "商户ID",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "ccf9c63e-9404-4b9b-94f3-6e24b5a12b30",
        "LabelID" : "GoodsID",
        "ChildAssociations" : [ {
          "ID" : "28bac24b-122e-452a-9780-cb12e992da74",
          "RefElementCollection" : [ {
            "ID" : "fe412c98-31b2-4baa-8d48-41084cea62f5",
            "LabelID" : "GoodsID_GoodsName",
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
            "ID" : "6e98348b-bb2d-4bc4-881c-54d1b4112412",
            "LabelID" : "GoodsID_Specification",
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
            "ID" : "fb1e6199-9d1c-4e9b-98bc-bc067233f407",
            "LabelID" : "GoodsID_Category",
            "ChildAssociations" : [ ],
            "ColumnID" : "0f50581c-21d6-462b-9856-35d08f8c6d8c",
            "Code" : "Category",
            "Name" : "分类名称",
            "MDataType" : "String",
            "Length" : 30,
            "IsRefElement" : true,
            "RefElementID" : "f8a48738-172d-46de-828f-915de126bd75",
            "EnableRtrim" : true
          }, {
            "ID" : "5c1f7f81-2e5b-4f5d-84b8-315a00dca386",
            "LabelID" : "GoodsID_Price",
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
          }, {
            "ID" : "a67259ca-80aa-446e-b01e-f37587931b46",
            "LabelID" : "GoodsID_Number",
            "ChildAssociations" : [ ],
            "ColumnID" : "d2fcea1a-75c3-46bb-90cd-1a63bb63dcf4",
            "Code" : "Number",
            "Name" : "上架数量",
            "MDataType" : "Integer",
            "IsRefElement" : true,
            "RefElementID" : "bfa9796d-329b-47c1-be12-ede0b38d0701",
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
            "TargetElement" : "ccf9c63e-9404-4b9b-94f3-6e24b5a12b30",
            "TargetElementDisplay" : "商品ID"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "Goods",
            "ModelConfigId" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back.Goods"
          }
        } ],
        "ColumnID" : "b6f77682-7582-4b1d-8ae2-cc4b1237802d",
        "Code" : "GoodsID",
        "Name" : "商品ID",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "8a9da5a4-8c27-46d2-bcda-ea9d753d9ad6",
        "LabelID" : "StockNum",
        "ChildAssociations" : [ ],
        "ColumnID" : "32c22080-6313-4089-9521-b3bd755196e9",
        "Code" : "StockNum",
        "Name" : "当前库存量",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "7f828350-e0bf-4944-90a8-d499b565cec4",
        "LabelID" : "DailySalesNum",
        "ChildAssociations" : [ ],
        "ColumnID" : "0f129421-d63f-45da-9e75-e44e36e6158c",
        "Code" : "DailySalesNum",
        "Name" : "日销量",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "a3b1f961-1b74-4306-80e0-a874fbb2b5bf",
        "LabelID" : "SafetyStockDays",
        "ChildAssociations" : [ ],
        "ColumnID" : "a35ad17f-17d9-457c-8b5a-43c3b8229461",
        "Code" : "SafetyStockDays",
        "Name" : "安全库存天数",
        "MDataType" : "Integer",
        "EnableRtrim" : true
      }, {
        "ID" : "3c4d8d2e-0721-4d8f-90a2-923f64bf0c29",
        "LabelID" : "SafetyStockNum",
        "ChildAssociations" : [ ],
        "ColumnID" : "f820a41a-4456-4133-9c44-40afe5cbdbf7",
        "Code" : "SafetyStockNum",
        "Name" : "安全库存量",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "4c2e4d66-50b6-4b29-91c9-c62f73b12d63",
        "LabelID" : "InPurchaseNum",
        "ChildAssociations" : [ ],
        "ColumnID" : "8ad4ac9c-f119-4fb4-96e1-1349ba6e25d0",
        "Code" : "InPurchaseNum",
        "Name" : "采购在订量",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "b144832b-dada-4828-8cd0-1ae8649645e8",
        "LabelID" : "InSalesNum",
        "ChildAssociations" : [ ],
        "ColumnID" : "83da1320-2000-4815-9c59-eedabc14720f",
        "Code" : "InSalesNum",
        "Name" : "销售在订量",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "f7b7f7f1-cfe3-49cb-9848-f6c197db8414",
        "LabelID" : "SuggestPurchaseNum",
        "ChildAssociations" : [ ],
        "ColumnID" : "a69add27-ffb6-48f2-872d-4a8e29f6b74a",
        "Code" : "SuggestPurchaseNum",
        "Name" : "建议采购量",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "523e7816-ab74-4698-bafd-cdc4c2c2de95",
        "LabelID" : "RecentPurchasePrice",
        "ChildAssociations" : [ ],
        "ColumnID" : "1284c4c3-a18a-415e-b1c7-add7d0c6768e",
        "Code" : "RecentPurchasePrice",
        "Name" : "最近采购价",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "b96884c3-e6d7-407b-b121-683a4f89d999",
        "LabelID" : "StockAmount",
        "ChildAssociations" : [ ],
        "ColumnID" : "fa5a189d-5bfe-49a6-91eb-70ed7a7cb723",
        "Code" : "StockAmount",
        "Name" : "金额",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "089ade3d-4488-49ac-89ab-c53675f2e253",
      "DtmAfterCreate" : [ {
        "ID" : "2b747a66-36f7-4d89-ab5c-2514b43d1b65",
        "Code" : "DtmAfterCreate1",
        "Name" : "新增后1",
        "ComponentId" : "9378d132-3df3-40c4-af99-6e4a8369099c",
        "ComponentName" : "GoodsStockDtmAfterCreate1DeterminationController"
      } ],
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "8cfab836-83bf-4dae-8637-abe3e4fd3a44",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "b3a372d3-4d4e-48a0-988d-6a7c0ddfd561"
    },
    "Variables" : {
      "ID" : "b7ab1056-bbb4-447b-8c07-3b04e004e28c",
      "Code" : "GoodsStockVariable",
      "Name" : "商品库变量",
      "I18nResourceInfoPrefix" : ""
    },
    "BizMgrActions" : [ {
      "ID" : "8a2744cc-d823-4160-a70f-19bb46f661af",
      "Code" : "StockWriteBack",
      "Name" : "补货回写库存",
      "ComponentId" : "42128097-ddc2-4e22-8bc0-62363589c462",
      "ComponentName" : "GoodsStockStockWriteBackMgrActionController",
      "Parameters" : [ {
        "ID" : "a8199652-8188-4037-9739-36e9081f7d1c",
        "ParamCode" : "dataid",
        "ParamName" : "单据id",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String"
      }, {
        "ID" : "fe734aec-21d3-433b-95c5-ca45b098cf37",
        "ParamCode" : "spjl",
        "ParamName" : "审批结论",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String"
      }, {
        "ID" : "7b995bff-6b02-4e7e-918d-1ffe0653d551",
        "ParamCode" : "beid",
        "ParamName" : "业务实体id",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String"
      } ],
      "ReturnValue" : {
        "ID" : "9944c0ec-a621-4473-8e9b-881f13596348",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "Void",
        "JavaClassName" : "void",
        "Mode" : 1
      }
    } ],
    "ComponentAssemblyName" : "Inspur.GS.HotWave.Stock.GoodsStock.GoodsStock.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/Stock/GoodsStock/bo-goodsstock-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}