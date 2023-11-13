{
  "Header" : {
    "Code" : "MerChant",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back",
    "CertId" : null,
    "Name" : "商户",
    "FileName" : "MerChant.be",
    "BizobjectID" : "86748f14-54c0-bedd-9337-a23a74fbb6ff",
    "Language" : null,
    "Extendable" : false,
    "ID" : "be844cb7-4ddf-4c37-8a56-cd9660900acc",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "2f446058-90be-4cfb-8870-580b82dbc991",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonCmp",
      "Code" : "PathHierarchyCreateChildLayer",
      "Name" : "分级码分级方式新增子级",
      "Type" : "BEMgrComponent",
      "BizobjectID" : "CommonCmp"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "344519d9-b271-4aa0-8800-48a8762fbe20",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonCmp",
      "Code" : "PathHierarchyCreateSibling",
      "Name" : "分级码分级方式新增同级",
      "Type" : "BEMgrComponent",
      "BizobjectID" : "CommonCmp"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "dbfbe55d-ba65-4a7f-a9d4-4f664ec6ec68",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "PathHierarchyInfo",
      "Name" : "分级码分级信息",
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
      "ID" : "a65f5549-2670-4b69-9eba-769b59d59022",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back",
      "Code" : "MerChant.be",
      "Name" : "MerChant.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "86748f14-54c0-bedd-9337-a23a74fbb6ff"
    }
  } ],
  "Content" : {
    "ID" : "be844cb7-4ddf-4c37-8a56-cd9660900acc",
    "Code" : "MerChant",
    "Name" : "商户",
    "GeneratingAssembly" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "0aedf48b-7796-4fc8-a2cd-a294cc245bed"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "4d152341-0dcd-4468-bf75-f784a486d293",
      "Code" : "Merchant",
      "Name" : "商户",
      "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant.Merchant",
      "ContainElements" : [ {
        "ID" : "45cb1697-9f39-482e-8155-ba0726c017ca",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "24e66a70-cd1b-41bb-8b5b-e9a0a7116e98",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "0aedf48b-7796-4fc8-a2cd-a294cc245bed",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "3a8e5cee-2523-4eb9-8b5c-ef00ebffd208",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "c61fc0af-727a-4d70-8499-0b665d052b0c",
        "LabelID" : "MerchantName",
        "ChildAssociations" : [ ],
        "ColumnID" : "21bd0ac4-20e3-449e-a3fc-d141c14dafe7",
        "Code" : "MerchantName",
        "Name" : "商户名称",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "f50c0dfb-514b-4c35-90be-47a2836e4c96",
        "LabelID" : "MerchantCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "c7c38b59-70ff-4eda-979e-0de51e48de50",
        "Code" : "MerchantCode",
        "Name" : "商户编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "8d54670f-8898-48da-bb71-49186b89e2b1",
        "LabelID" : "CompanyType",
        "ChildAssociations" : [ ],
        "ColumnID" : "db9815db-0f9f-4a41-b312-2ed8c879e2e0",
        "Code" : "CompanyType",
        "Name" : "企业类型",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant.Merchant.CompanyType.qy",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "Name" : "企业",
          "StringIndex" : "qy",
          "Value" : "qy"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant.Merchant.CompanyType.gt",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "Name" : "个体工商户",
          "StringIndex" : "gt",
          "Value" : "gt"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant.Merchant.CompanyType.gr",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "Name" : "个人",
          "StringIndex" : "gr",
          "Value" : "gr"
        } ]
      }, {
        "ID" : "bc92499f-21f9-409b-9ee5-8e37118cf4d7",
        "LabelID" : "MerchantType",
        "ChildAssociations" : [ ],
        "ColumnID" : "1dedc316-dccd-4374-81d2-01d6db83b00e",
        "Code" : "MerchantType",
        "Name" : "商户类型",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant.Merchant.MerchantType.rz",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "Name" : "入驻商户",
          "StringIndex" : "rz",
          "Value" : "rz"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant.Merchant.MerchantType.jx",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "Name" : "经销商",
          "StringIndex" : "jx",
          "Value" : "jx"
        } ]
      }, {
        "ID" : "51ad9740-bc2c-4e13-b9da-e0527c0e0f91",
        "LabelID" : "RealName",
        "ChildAssociations" : [ ],
        "ColumnID" : "ec3bf185-2ec8-4b11-8c35-69c66988b6b8",
        "Code" : "RealName",
        "Name" : "真实姓名",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "c505c5d3-f89d-4e61-8ab9-8624068ae110",
        "LabelID" : "FullName",
        "ChildAssociations" : [ ],
        "ColumnID" : "f991b7ed-6c46-4d56-b40c-bbb371ab18b9",
        "Code" : "FullName",
        "Name" : "企业全称",
        "MDataType" : "String",
        "Length" : 50,
        "EnableRtrim" : true
      }, {
        "ID" : "60a77e9e-d62a-46f1-aa33-0b8206e97038",
        "LabelID" : "BusinessLicense",
        "ChildAssociations" : [ ],
        "ColumnID" : "444cd1ac-a349-4a94-b763-2e4b00906e14",
        "Code" : "BusinessLicense",
        "Name" : "营业执照编码",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "6a860a18-e819-4445-ab63-f6192344b618",
        "LabelID" : "Address",
        "ChildAssociations" : [ ],
        "ColumnID" : "387b7c59-00c8-42cb-8b7e-e2fc7bb9af95",
        "Code" : "Address",
        "Name" : "商户地址",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      }, {
        "ID" : "6ef7486f-d83f-4e83-a2fc-ce89a467a0de",
        "LabelID" : "Email",
        "ChildAssociations" : [ ],
        "ColumnID" : "10be478d-fd59-46ac-b1d6-5d93dad11755",
        "Code" : "Email",
        "Name" : "邮箱",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "366131ee-8cb6-4cf4-bf29-229c42ddfd03",
        "LabelID" : "Telephone",
        "ChildAssociations" : [ ],
        "ColumnID" : "05064cba-a7f9-4b6a-8757-b5bb25079360",
        "Code" : "Telephone",
        "Name" : "联系电话",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true
      }, {
        "ID" : "6e2610c5-33c4-4fc9-b019-45b8229a2804",
        "LabelID" : "Adminstrator",
        "ChildAssociations" : [ ],
        "ColumnID" : "41497a76-72e3-41ae-bb94-d1f87525017a",
        "Code" : "Adminstrator",
        "Name" : "管理员",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "a6c7d3be-0e85-4935-9cd3-e9c685639ebe",
        "LabelID" : "TreeInfo",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "80977eb2-f5c1-4dff-92e8-fee64a39f556",
          "LabelID" : "TreeInfo_Path",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "d2cc6101-e4c8-4948-a4d1-4156a9f0dc64",
          "Code" : "TreeInfo_Path",
          "Name" : "分级码",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        }, {
          "ID" : "ac0dd12e-1ab3-42bf-8736-e6e775092ca8",
          "LabelID" : "TreeInfo_Layer",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "1688b630-d8d4-4520-88c5-da4d28bd4c4d",
          "Code" : "TreeInfo_Layer",
          "Name" : "级数",
          "MDataType" : "Integer",
          "EnableRtrim" : true
        }, {
          "ID" : "f781e226-be14-4256-9a8b-f403d61ea013",
          "LabelID" : "TreeInfo_IsDetail",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "43c01095-3ade-43de-b4c2-6d5f7d1c0504",
          "Code" : "TreeInfo_IsDetail",
          "Name" : "是否明细",
          "MDataType" : "Boolean",
          "Length" : 1,
          "EnableRtrim" : true
        } ],
        "Code" : "TreeInfo",
        "Name" : "分级码信息",
        "MDataType" : "String",
        "Length" : 36,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "dbfbe55d-ba65-4a7f-a9d4-4f664ec6ec68",
        "UdtName" : "分级码分级信息",
        "MappingRelation" : [ {
          "f781e226-be14-4256-9a8b-f403d61ea013" : "65e4346d-5cfd-4d47-be11-5fc771b58852"
        }, {
          "ac0dd12e-1ab3-42bf-8736-e6e775092ca8" : "47a7321b-8147-4d67-95fa-9a4438d17092"
        }, {
          "80977eb2-f5c1-4dff-92e8-fee64a39f556" : "a614192a-890d-437e-bc5a-344d583e3fa8"
        } ]
      }, {
        "ID" : "d4ea41a7-f79d-474f-b98a-664f2dddc726",
        "LabelID" : "ParentMerchantID",
        "ChildAssociations" : [ {
          "ID" : "2f791209-1e73-4709-8b0d-c3af73e3b443",
          "RefElementCollection" : [ {
            "ID" : "fcb23540-fffc-426a-a4c7-12e940733158",
            "LabelID" : "ParentMerchantID_MerchantName",
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
            "ID" : "a822deb9-b4e2-46e8-87f0-b0ab5c400b8a",
            "LabelID" : "ParentMerchantID_Adminstrator",
            "ChildAssociations" : [ ],
            "ColumnID" : "41497a76-72e3-41ae-bb94-d1f87525017a",
            "Code" : "Adminstrator",
            "Name" : "管理员",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "6e2610c5-33c4-4fc9-b019-45b8229a2804",
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
            "TargetElement" : "d4ea41a7-f79d-474f-b98a-664f2dddc726",
            "TargetElementDisplay" : "上游商户"
          } ],
          "AssoModelInfo" : {
            "MainObjCode" : "Merchant",
            "ModelConfigId" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back.MerChant"
          }
        } ],
        "ColumnID" : "ebd8488e-0b0d-4cc7-b7b3-aab315e9a20b",
        "Code" : "ParentMerchantID",
        "Name" : "上游商户",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "660e780f-4c66-4756-9b0b-64304ab6b2df",
        "LabelID" : "Remark",
        "ChildAssociations" : [ ],
        "ColumnID" : "470ecc1d-3fc7-4f75-aabb-a2ee736a7161",
        "Code" : "Remark",
        "Name" : "备注",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "93559483-d563-49ac-a910-691ab630b0bb",
      "DtmBeforeSave" : [ {
        "ID" : "3010b335-7c5c-479b-a0a3-1b647bba1ead",
        "Code" : "DtmBeforeSave1",
        "Name" : "保存前1",
        "ComponentId" : "5c30b632-3a5e-477a-9802-a88e64cb9919",
        "ComponentName" : "MerChantDtmBeforeSave1DeterminationController1",
        "GetExecutingDataStatus" : 3,
        "RunOnce" : true
      } ],
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "45cb1697-9f39-482e-8155-ba0726c017ca",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "be844cb7-4ddf-4c37-8a56-cd9660900acc"
    },
    "Variables" : {
      "ID" : "44d6db26-9c78-4756-8f30-78d94f56360e",
      "Code" : "MerChantVariable",
      "Name" : "商户变量",
      "I18nResourceInfoPrefix" : ""
    },
    "BizMgrActions" : [ {
      "ID" : "d22bf78d-053c-4a9a-85a6-d38d2cc78768",
      "Code" : "PathHierarchyCreateChildLayer",
      "Name" : "分级码分级方式新增子级",
      "ComponentId" : "2f446058-90be-4cfb-8870-580b82dbc991",
      "ComponentName" : "PathHierarchyCreateChildLayer",
      "ComponentPkgName" : "Inspur.Gsp.Common.CommonCmp",
      "IsGenerateComponent" : false,
      "Parameters" : [ {
        "ID" : "7606bff4-5531-47ce-bd38-8e14c13339f4",
        "ParamCode" : "dataID",
        "ParamName" : "dataID",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String",
        "ParamDescription" : "要新增子级的父节点dataID"
      } ],
      "ReturnValue" : {
        "ID" : "8c083897-3dfa-44a2-94dd-b21f65b4671d",
        "ParameterType" : 7,
        "Assembly" : "Inspur.Gsp.Cef.Entity",
        "ClassName" : "Inspur.Gsp.Cef.Entity.IEntityData",
        "JavaClassName" : "com.inspur.edp.cef.entity.entity.IEntityData",
        "Mode" : 1,
        "ParamDescription" : "新增的子级树节点信息"
      }
    }, {
      "ID" : "2cb77289-4cbc-49a1-a057-d5b44ee60518",
      "Code" : "PathHierarchyCreateSibling",
      "Name" : "分级码分级方式新增同级",
      "ComponentId" : "344519d9-b271-4aa0-8800-48a8762fbe20",
      "ComponentName" : "PathHierarchyCreateSibling",
      "ComponentPkgName" : "Inspur.Gsp.Common.CommonCmp",
      "IsGenerateComponent" : false,
      "Parameters" : [ {
        "ID" : "b6f39c6d-f42b-4a3e-8bb5-8939b56f4604",
        "ParamCode" : "dataID",
        "ParamName" : "dataID",
        "ParameterType" : 0,
        "Assembly" : "mscorlib.dll",
        "ClassName" : "System.String",
        "JavaClassName" : "java.lang.String",
        "ParamDescription" : "当前焦点dataID"
      } ],
      "ReturnValue" : {
        "ID" : "fb86619c-0c76-40e6-998b-2d0c5514d701",
        "ParameterType" : 7,
        "Assembly" : "Inspur.Gsp.Cef.Entity",
        "ClassName" : "Inspur.Gsp.Cef.Entity.IEntityData",
        "JavaClassName" : "com.inspur.edp.cef.entity.entity.IEntityData",
        "Mode" : 1,
        "ParamDescription" : "新增的同级树节点信息"
      }
    } ],
    "ComponentAssemblyName" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/DataBase/MerChant/bo-merchant-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}