{
  "Header" : {
    "Code" : "Staff",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Back",
    "CertId" : null,
    "Name" : "员工",
    "FileName" : "Staff.be",
    "BizobjectID" : "b1d99340-20e0-c926-9f0c-748712e5c3d0",
    "Language" : null,
    "Extendable" : false,
    "ID" : "bf305489-3c17-49c4-98bc-2f969f7526d3",
    "IsTranslating" : false
  },
  "Refs" : [ {
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
      "ID" : "40c87bd0-de2d-4842-84d3-5ce40df8a536",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "TelephoneNumber",
      "Name" : "电话号码",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "Email",
      "Name" : "邮箱",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "5e94ed51-eeee-48ed-8e49-a09f878b0e55",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Back",
      "Code" : "Staff.be",
      "Name" : "Staff.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "b1d99340-20e0-c926-9f0c-748712e5c3d0"
    }
  } ],
  "Content" : {
    "ID" : "bf305489-3c17-49c4-98bc-2f969f7526d3",
    "Code" : "Staff",
    "Name" : "员工",
    "GeneratingAssembly" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "b1c88858-53a2-461b-815c-9e824d05a318"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "0185e8b4-f087-4763-a657-e2ac11990677",
      "Code" : "Staff",
      "Name" : "员工",
      "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Back.Staff.Staff",
      "ContainElements" : [ {
        "ID" : "ec06fd38-59a8-4667-aa7a-ece1ace6e3e1",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "0dd2ffa7-c2f1-4ff9-a56e-bafef78780cc",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "b1c88858-53a2-461b-815c-9e824d05a318",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "9bd87c86-b7c4-4320-88af-35c615ee73dc",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "5500af7c-44f2-463a-bb4f-33b9f31e55e8",
        "LabelID" : "Name",
        "ChildAssociations" : [ ],
        "ColumnID" : "ca8e64f3-6eca-4d93-97af-0a6b3efa8b2a",
        "Code" : "Name",
        "Name" : "名称",
        "MDataType" : "String",
        "Length" : 1000,
        "EnableRtrim" : true
      }, {
        "ID" : "d75784dc-0cbb-4c30-b84f-38926d21acb7",
        "LabelID" : "Code",
        "ChildAssociations" : [ ],
        "ColumnID" : "58be1cc0-bacd-4fa3-a3a9-ac9f788fc58a",
        "Code" : "Code",
        "Name" : "编号",
        "MDataType" : "String",
        "Length" : 1000,
        "EnableRtrim" : true
      }, {
        "ID" : "872b4f4f-e687-4b2f-8eff-430678889193",
        "LabelID" : "Merchant",
        "ChildAssociations" : [ {
          "ID" : "c9afd0a9-96b8-41af-b1e6-ef7ce58e7d5e",
          "RefElementCollection" : [ {
            "ID" : "d6b43e29-4a37-4fb6-9b75-18c7ecd8083e",
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
          } ],
          "RefModelID" : "be844cb7-4ddf-4c37-8a56-cd9660900acc",
          "RefModelName" : "商户",
          "RefModelCode" : "MerChant",
          "RefObjectID" : "4d152341-0dcd-4468-bf75-f784a486d293",
          "RefObjectCode" : "MerChant",
          "RefObjectName" : "商户",
          "KeyCollection" : [ {
            "RefDataModelName" : "",
            "SourceElement" : "45cb1697-9f39-482e-8155-ba0726c017ca",
            "SourceElementDisplay" : "主键",
            "TargetElement" : "872b4f4f-e687-4b2f-8eff-430678889193",
            "TargetElementDisplay" : "商户"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "MerChant",
            "ModelConfigId" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant"
          }
        } ],
        "ColumnID" : "5c393a97-791c-40da-a5e9-22f8a4144cb7",
        "Code" : "Merchant",
        "Name" : "商户",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "6c6e7b65-637b-42d0-a606-2d0a97028a04",
        "LabelID" : "Telephone",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "b5192545-f1ee-4837-addd-7a84100051f3",
          "LabelID" : "Telephone_TelephoneNumber",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "17aaf254-aa27-4015-9e43-e0b48dbd8ea3",
          "Code" : "Telephone_TelephoneNumber",
          "Name" : "电话号码",
          "MDataType" : "String",
          "Length" : 18,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "17aaf254-aa27-4015-9e43-e0b48dbd8ea3",
        "Code" : "Telephone",
        "Name" : "联系电话",
        "MDataType" : "String",
        "Length" : 18,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "40c87bd0-de2d-4842-84d3-5ce40df8a536",
        "UdtName" : "电话号码",
        "MappingRelation" : [ {
          "b5192545-f1ee-4837-addd-7a84100051f3" : "40c87bd0-de2d-4842-84d3-5ce40df8a536"
        } ]
      }, {
        "ID" : "1b94e7fa-0237-4ab3-8200-63804eb02fc5",
        "LabelID" : "Mailbox",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "fb231621-648a-42ea-bec4-8686df97955f",
          "LabelID" : "Mailbox_Email",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "39f8ffcc-a8c9-49f0-984f-56457e7ec885",
          "Code" : "Mailbox_Email",
          "Name" : "邮箱",
          "MDataType" : "String",
          "Length" : 500,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "39f8ffcc-a8c9-49f0-984f-56457e7ec885",
        "Code" : "Mailbox",
        "Name" : "邮箱",
        "MDataType" : "String",
        "Length" : 500,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2",
        "UdtName" : "邮箱",
        "MappingRelation" : [ {
          "fb231621-648a-42ea-bec4-8686df97955f" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2"
        } ]
      }, {
        "ID" : "6a89a8f4-532d-4618-ae50-563147945d10",
        "LabelID" : "IDNumber",
        "ChildAssociations" : [ ],
        "ColumnID" : "de8c8ac0-6a23-49d7-9bd9-a60de91cd173",
        "Code" : "IDNumber",
        "Name" : "身份证号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "157b92cd-c718-46d0-9809-42836df6ac4b",
        "LabelID" : "OrCorPor",
        "ChildAssociations" : [ ],
        "ColumnID" : "6ac0bbae-6440-456c-948c-fc7bb1cc5296",
        "Code" : "OrCorPor",
        "Name" : "是否法人/负责人",
        "MDataType" : "Boolean",
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "96344247-397f-40e1-a408-0d59f3c2c812",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "ec06fd38-59a8-4667-aa7a-ece1ace6e3e1",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "bf305489-3c17-49c4-98bc-2f969f7526d3"
    },
    "Variables" : {
      "ID" : "0d6044e5-767e-4064-9250-f4180d64ba00",
      "Code" : "StaffVariable",
      "Name" : "员工变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/DataBase/Staff/bo-staff-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}