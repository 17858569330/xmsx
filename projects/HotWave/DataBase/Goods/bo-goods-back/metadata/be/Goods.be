{
  "Header" : {
    "Code" : "Goods",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back",
    "CertId" : null,
    "Name" : "商品",
    "FileName" : "Goods.be",
    "BizobjectID" : "dec0e47e-409b-6d3a-8876-85bd5909bf19",
    "Language" : null,
    "Extendable" : false,
    "ID" : "7cbdd71b-7819-44cc-a946-c6ac7c8c94c6",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "3c50a21e-b9ea-447d-beb7-26ef07d54cf8",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back",
      "Code" : "Goods.be",
      "Name" : "Goods.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "dec0e47e-409b-6d3a-8876-85bd5909bf19"
    }
  } ],
  "Content" : {
    "ID" : "7cbdd71b-7819-44cc-a946-c6ac7c8c94c6",
    "Code" : "Goods",
    "Name" : "商品",
    "GeneratingAssembly" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "f526d81a-4e56-488a-84fd-999f7d5625d2"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "9939bb9e-4008-47aa-82fa-159aebaa1b6e",
      "Code" : "Goods",
      "Name" : "商品",
      "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back.Goods.Goods",
      "ContainElements" : [ {
        "ID" : "de814a36-c2dd-4724-97e4-e036aebdfe72",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "e09983f3-85a9-4675-9808-26d6ce432226",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "f526d81a-4e56-488a-84fd-999f7d5625d2",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "64990151-484c-4321-a96f-9be57b5c92ba",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "071aa8a8-ac34-4bae-acb4-e121953a6747",
        "LabelID" : "GoodsName",
        "ChildAssociations" : [ ],
        "ColumnID" : "2825695f-86d4-46dd-aa97-adb4f30dbe24",
        "Code" : "GoodsName",
        "Name" : "商品名称",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "be9ec3b2-5ae4-4ddd-bd87-d97f21af91e8",
        "LabelID" : "GoodsCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "986d9ed7-bc83-455f-94ad-059fde880c42",
        "Code" : "GoodsCode",
        "Name" : "商品编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "SavingTime",
          "BillCodeName" : "商品编号规则",
          "BillCodeID" : "34ad81de-095a-49ef-8ecc-40dd1a65d861"
        }
      }, {
        "ID" : "f69bea17-83d7-4b96-8a7e-ddb7c63bdb66",
        "LabelID" : "Specification",
        "ChildAssociations" : [ ],
        "ColumnID" : "690d1712-06ee-43eb-a4af-6021ce92556f",
        "Code" : "Specification",
        "Name" : "规格型号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "f8a48738-172d-46de-828f-915de126bd75",
        "LabelID" : "Category",
        "ChildAssociations" : [ ],
        "ColumnID" : "0f50581c-21d6-462b-9856-35d08f8c6d8c",
        "Code" : "Category",
        "Name" : "分类名称",
        "MDataType" : "String",
        "Length" : 30,
        "EnableRtrim" : true
      }, {
        "ID" : "ca25d509-b383-4aba-bc2b-57d029cde131",
        "LabelID" : "Price",
        "ChildAssociations" : [ ],
        "ColumnID" : "f7487f7f-fdda-41f6-862c-ec39daa044f7",
        "Code" : "Price",
        "Name" : "单价",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      }, {
        "ID" : "bfa9796d-329b-47c1-be12-ede0b38d0701",
        "LabelID" : "Number",
        "ChildAssociations" : [ ],
        "ColumnID" : "d2fcea1a-75c3-46bb-90cd-1a63bb63dcf4",
        "Code" : "Number",
        "Name" : "上架数量",
        "MDataType" : "Integer",
        "EnableRtrim" : true
      }, {
        "ID" : "39779892-6648-4411-87d4-ce68892f1c91",
        "LabelID" : "Remark",
        "ChildAssociations" : [ ],
        "ColumnID" : "fa2eecfe-c7a4-4e89-82ef-e321cdebc007",
        "Code" : "Remark",
        "Name" : "备注",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "db9552bc-a4da-4c7c-b42d-21fbafdcc34b",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "de814a36-c2dd-4724-97e4-e036aebdfe72",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "7cbdd71b-7819-44cc-a946-c6ac7c8c94c6"
    },
    "Variables" : {
      "ID" : "4d781cac-4063-402c-9673-c105f7bf91cf",
      "Code" : "GoodsVariable",
      "Name" : "商品变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/DataBase/Goods/bo-goods-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}