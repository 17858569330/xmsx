{
  "Header" : {
    "Code" : "MerChantForm",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Front",
    "CertId" : null,
    "Name" : "商户表单",
    "FileName" : "MerChantForm.frm",
    "BizobjectID" : "86748f14-54c0-bedd-9337-a23a74fbb6ff",
    "Language" : null,
    "Extendable" : false,
    "ID" : "b57238a6-8fdf-4c16-8f5a-c8451b8045a2",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "aa614147-a078-4cb3-a684-de3df080c2e5",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Front",
      "Code" : "MerChantForm.frm",
      "Name" : "MerChantForm.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "86748f14-54c0-bedd-9337-a23a74fbb6ff"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "b57238a6-8fdf-4c16-8f5a-c8451b8045a2",
    "Contents" : {
      "module" : {
        "id" : "MerChantForm",
        "code" : "MerChantForm",
        "name" : "商户表单",
        "caption" : "商户表单",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-21T01:54:07.085Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "tree-card-template",
        "templateId" : "tree-card-template",
        "schemas" : [ {
          "name" : "商户表单_frm",
          "id" : "4e198864-4ada-4989-8380-b36a77e5e502",
          "sourceType" : "vo",
          "variables" : [ ],
          "sourceUri" : "api/hotwave/database/v1.0/MerChantForm_frm",
          "code" : "MerChantForm_frm",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "entities" : [ {
            "name" : "商户",
            "id" : "3a8eaead-35d2-4368-84da-b6dcb6a2b7ca",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : true,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "主键",
                "id" : "61a1ec95-a52d-40a7-993c-3a399cf573f8",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "bindingField" : "id",
                "bindingPath" : "id",
                "originalId" : "61a1ec95-a52d-40a7-993c-3a399cf573f8",
                "code" : "ID",
                "label" : "id"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "name" : "版本",
                "id" : "6307ba8a-dd90-4839-831d-203c51c4175f",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "bindingField" : "version",
                "bindingPath" : "version",
                "originalId" : "6307ba8a-dd90-4839-831d-203c51c4175f",
                "code" : "Version",
                "label" : "version"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "商户名称",
                "id" : "c80a3305-1379-4519-b9b1-08979d14b14f",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "MerchantName",
                "bindingField" : "merchantName",
                "bindingPath" : "merchantName",
                "originalId" : "c80a3305-1379-4519-b9b1-08979d14b14f",
                "code" : "MerchantName",
                "label" : "merchantName"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "商户编号",
                "id" : "decf103d-3e2b-433f-8dab-70b4fda83d60",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "MerchantCode",
                "bindingField" : "merchantCode",
                "bindingPath" : "merchantCode",
                "originalId" : "decf103d-3e2b-433f-8dab-70b4fda83d60",
                "code" : "MerchantCode",
                "label" : "merchantCode"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "name" : "企业类型",
                "id" : "34a5b660-2370-434b-b0ee-081fd2be7f5c",
                "type" : {
                  "$type" : "EnumType",
                  "enumValues" : [ {
                    "name" : "企业",
                    "value" : "qy"
                  }, {
                    "name" : "个体工商户",
                    "value" : "gt"
                  }, {
                    "name" : "个人",
                    "value" : "gr"
                  } ],
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 20,
                    "name" : "String",
                    "displayName" : "字符串"
                  }
                },
                "path" : "CompanyType",
                "bindingField" : "companyType",
                "bindingPath" : "companyType",
                "originalId" : "34a5b660-2370-434b-b0ee-081fd2be7f5c",
                "code" : "CompanyType",
                "label" : "companyType"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "name" : "商户类型",
                "id" : "2e73fcca-47d3-485a-bed9-fb8c7350b4d7",
                "type" : {
                  "$type" : "EnumType",
                  "enumValues" : [ {
                    "name" : "入驻商户",
                    "value" : "rz"
                  }, {
                    "name" : "经销商",
                    "value" : "jx"
                  } ],
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 20,
                    "name" : "String",
                    "displayName" : "字符串"
                  }
                },
                "path" : "MerchantType",
                "bindingField" : "merchantType",
                "bindingPath" : "merchantType",
                "originalId" : "2e73fcca-47d3-485a-bed9-fb8c7350b4d7",
                "code" : "MerchantType",
                "label" : "merchantType"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "真实姓名",
                "id" : "ef543f0d-a41e-4892-b514-e64df42cb6c8",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "RealName",
                "bindingField" : "realName",
                "bindingPath" : "realName",
                "originalId" : "ef543f0d-a41e-4892-b514-e64df42cb6c8",
                "code" : "RealName",
                "label" : "realName"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "企业全称",
                "id" : "1a36d5d9-2e3d-497f-8d9d-2fa9b9e1c096",
                "type" : {
                  "$type" : "StringType",
                  "length" : 50,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "FullName",
                "bindingField" : "fullName",
                "bindingPath" : "fullName",
                "originalId" : "1a36d5d9-2e3d-497f-8d9d-2fa9b9e1c096",
                "code" : "FullName",
                "label" : "fullName"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "营业执照编码",
                "id" : "14ec2d6c-04df-4166-89c4-29b2753b16e7",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "BusinessLicense",
                "bindingField" : "businessLicense",
                "bindingPath" : "businessLicense",
                "originalId" : "14ec2d6c-04df-4166-89c4-29b2753b16e7",
                "code" : "BusinessLicense",
                "label" : "businessLicense"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "商户地址",
                "id" : "ce9be2ba-debb-492f-9ed9-f90ac195d862",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Address",
                "bindingField" : "address",
                "bindingPath" : "address",
                "originalId" : "ce9be2ba-debb-492f-9ed9-f90ac195d862",
                "code" : "Address",
                "label" : "address"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "邮箱",
                "id" : "5eeacb83-791b-4105-bfec-5ba5c6de98e6",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Email",
                "bindingField" : "email",
                "bindingPath" : "email",
                "originalId" : "5eeacb83-791b-4105-bfec-5ba5c6de98e6",
                "code" : "Email",
                "label" : "email"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "联系电话",
                "id" : "ab7face1-a52d-49a5-a5b6-7528831698db",
                "type" : {
                  "$type" : "StringType",
                  "length" : 20,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Telephone",
                "bindingField" : "telephone",
                "bindingPath" : "telephone",
                "originalId" : "ab7face1-a52d-49a5-a5b6-7528831698db",
                "code" : "Telephone",
                "label" : "telephone"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "管理员",
                "id" : "31187f7c-e675-4ee2-8e66-b9cd513d1b89",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Adminstrator",
                "bindingField" : "adminstrator",
                "bindingPath" : "adminstrator",
                "originalId" : "31187f7c-e675-4ee2-8e66-b9cd513d1b89",
                "code" : "Adminstrator",
                "label" : "adminstrator"
              }, {
                "$type" : "ComplexField",
                "name" : "分级码信息",
                "id" : "82a6c55f-0593-4a8d-94ae-38f534aad97c",
                "type" : {
                  "$type" : "HierarchyType",
                  "name" : "PathHierarchyInfo82a6",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "name" : "分级码",
                    "id" : "82a6c55f-890d-437e-bc5a-344d583e3fa8",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "TreeInfo.Path",
                    "bindingField" : "treeInfo_Path",
                    "bindingPath" : "treeInfo.path",
                    "originalId" : "a614192a-890d-437e-bc5a-344d583e3fa8",
                    "code" : "Path",
                    "label" : "path"
                  }, {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "name" : "级数",
                    "id" : "82a6c55f-8147-4d67-95fa-9a4438d17092",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 0,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 0
                    },
                    "path" : "TreeInfo.Layer",
                    "bindingField" : "treeInfo_Layer",
                    "bindingPath" : "treeInfo.layer",
                    "originalId" : "47a7321b-8147-4d67-95fa-9a4438d17092",
                    "code" : "Layer",
                    "label" : "layer"
                  }, {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "CheckBox"
                    },
                    "name" : "是否明细",
                    "id" : "82a6c55f-5cfd-4d47-be11-5fc771b58852",
                    "type" : {
                      "$type" : "BooleanType",
                      "name" : "Boolean",
                      "displayName" : "布尔"
                    },
                    "path" : "TreeInfo.IsDetail",
                    "bindingField" : "treeInfo_IsDetail",
                    "bindingPath" : "treeInfo.isDetail",
                    "originalId" : "65e4346d-5cfd-4d47-be11-5fc771b58852",
                    "code" : "IsDetail",
                    "label" : "isDetail"
                  } ],
                  "displayName" : "分级码分级信息"
                },
                "path" : "TreeInfo",
                "bindingField" : "treeInfo",
                "bindingPath" : "treeInfo",
                "originalId" : "82a6c55f-0593-4a8d-94ae-38f534aad97c",
                "code" : "TreeInfo",
                "label" : "treeInfo"
              }, {
                "$type" : "ComplexField",
                "name" : "上游商户",
                "id" : "091777d9-388b-45d0-9526-25201d478106",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "require" : false,
                    "name" : "上游商户",
                    "id" : "2f791209-1e73-4709-8b0d-c3af73e3b443",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentMerchantID.ParentMerchantID",
                    "code" : "ParentMerchantID",
                    "label" : "parentMerchantID",
                    "originalId" : "2f791209-1e73-4709-8b0d-c3af73e3b443",
                    "bindingPath" : "parentMerchantID.parentMerchantID",
                    "bindingField" : "parentMerchantID"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "require" : false,
                    "name" : "商户名称",
                    "id" : "1953ca9e-97f9-49f7-804e-1db6811787b9",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentMerchantID.ParentMerchantID_MerchantName",
                    "code" : "MerchantName",
                    "label" : "parentMerchantID_MerchantName",
                    "originalId" : "1953ca9e-97f9-49f7-804e-1db6811787b9",
                    "bindingPath" : "parentMerchantID.parentMerchantID_MerchantName",
                    "bindingField" : "parentMerchantID_ParentMerchantID_MerchantName"
                  }, {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "require" : false,
                    "name" : "管理员",
                    "id" : "43517922-e19a-4718-83ec-ed05512c2e26",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentMerchantID.ParentMerchantID_Adminstrator",
                    "code" : "Adminstrator",
                    "label" : "parentMerchantID_Adminstrator",
                    "originalId" : "43517922-e19a-4718-83ec-ed05512c2e26",
                    "bindingPath" : "parentMerchantID.parentMerchantID_Adminstrator",
                    "bindingField" : "parentMerchantID_ParentMerchantID_Adminstrator"
                  } ],
                  "primary" : "parentMerchantID",
                  "entities" : [ ],
                  "name" : "MerChant2f79",
                  "displayName" : "商户"
                },
                "path" : "ParentMerchantID",
                "bindingField" : "parentMerchantID",
                "bindingPath" : "parentMerchantID",
                "originalId" : "091777d9-388b-45d0-9526-25201d478106",
                "code" : "ParentMerchantID",
                "label" : "parentMerchantID"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "备注",
                "id" : "19c6ed5f-014e-4d95-975b-b453da0d74b0",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Remark",
                "bindingField" : "remark",
                "bindingPath" : "remark",
                "originalId" : "19c6ed5f-014e-4d95-975b-b453da0d74b0",
                "code" : "Remark",
                "label" : "remark"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "name" : "MerChant",
              "displayName" : "商户"
            },
            "code" : "MerChant",
            "label" : "merChants"
          } ],
          "eapiId" : "8a4b94a7-272f-4253-82f8-2f0c14570cf0",
          "eapiCode" : "MerChantForm_frm",
          "eapiName" : "商户表单_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Front",
          "voPath" : "HotWave/DataBase/MerChant/bo-merchant-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "MerChantForm_state_machine",
          "name" : "商户表单_frm",
          "uri" : "ad9eb23f-09b6-4f2e-b20d-43b6bb59ec13",
          "code" : "MerChantForm_frm",
          "nameSpace" : "Inspur.GS.HotWave.DataBase.MerChant.MerChant.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "商户",
          "fields" : [ ],
          "stateMachine" : "MerChantForm_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "70ec6403-d11e-42a5-92b3-ce8c84f67947",
            "code" : "dataImport1",
            "name" : "数据导入1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导入类型",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "357abe92-4dd4-49a1-8c8f-792f7d7e5f08",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : " {\"importdbRefresh\":true}",
              "defaultValue" : null
            } ],
            "handlerName" : "DataImport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4cc18d88-b8cd-485a-bcc3-75d5ebc6f708",
            "code" : "dataExport1",
            "name" : "数据导出1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导出类型",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "77d2079a-f302-4446-8fd7-0be2b44b1246",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "   {\"selectFilterGridComponent\":\"data-grid-component\"}",
              "defaultValue" : null
            } ],
            "handlerName" : "DataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "1d4fc8b3-58a8-46d3-953c-8ee595a1012f",
            "code" : "listDataExport1",
            "name" : "列表导出命令1",
            "params" : [ {
              "name" : "ruleID",
              "shownName" : "规则ID",
              "value" : "",
              "defaultValue" : null
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "",
              "defaultValue" : null
            } ],
            "handlerName" : "ListDataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "tree-grid-component-viewmodel",
          "code" : "tree-grid-component-viewmodel",
          "name" : "商户",
          "fields" : [ {
            "type" : "Form",
            "id" : "c80a3305-1379-4519-b9b1-08979d14b14f",
            "fieldName" : "merchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "decf103d-3e2b-433f-8dab-70b4fda83d60",
            "fieldName" : "merchantCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          } ],
          "commands" : [ {
            "id" : "b10de35a-6f79-49ed-8e5e-72959ce73c61",
            "code" : "LoadTree1",
            "name" : "加载树列表数据",
            "params" : [ ],
            "handlerName" : "LoadTree",
            "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "aa2caeda-76f9-477a-b68d-914d14a1a336",
            "code" : "LoadCard1",
            "name" : "加载卡片数据",
            "params" : [ ],
            "handlerName" : "LoadCard",
            "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "cf10f2eb-547d-4e6e-9385-b25a6e0959a9",
            "code" : "AddSibling1",
            "name" : "新增同级节点",
            "params" : [ ],
            "handlerName" : "AddSibling",
            "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "59390923-6f53-42ee-9c2c-a95ff9a89550",
            "code" : "AddChild1",
            "name" : "新增下级节点",
            "params" : [ ],
            "handlerName" : "AddChild",
            "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "428cc625-c8b8-45a5-9465-59da516474f7",
            "code" : "Remove1",
            "name" : "删除当前数据",
            "params" : [ ],
            "handlerName" : "Remove",
            "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : false,
          "pagination" : {
            "enable" : false
          }
        }, {
          "id" : "detail-form-component-viewmodel",
          "code" : "detail-form-component-viewmodel",
          "name" : "商户",
          "fields" : [ {
            "type" : "Form",
            "id" : "c80a3305-1379-4519-b9b1-08979d14b14f",
            "fieldName" : "merchantName",
            "groupId" : "25e4424a-9608-4843-9a81-efb1caca83fc",
            "groupName" : "基本信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "decf103d-3e2b-433f-8dab-70b4fda83d60",
            "fieldName" : "merchantCode",
            "groupId" : "25e4424a-9608-4843-9a81-efb1caca83fc",
            "groupName" : "基本信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "34a5b660-2370-434b-b0ee-081fd2be7f5c",
            "fieldName" : "companyType",
            "groupId" : "25e4424a-9608-4843-9a81-efb1caca83fc",
            "groupName" : "基本信息",
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "2e73fcca-47d3-485a-bed9-fb8c7350b4d7",
            "fieldName" : "merchantType",
            "groupId" : "25e4424a-9608-4843-9a81-efb1caca83fc",
            "groupName" : "基本信息",
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "ef543f0d-a41e-4892-b514-e64df42cb6c8",
            "fieldName" : "realName",
            "groupId" : "25e4424a-9608-4843-9a81-efb1caca83fc",
            "groupName" : "基本信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "1a36d5d9-2e3d-497f-8d9d-2fa9b9e1c096",
            "fieldName" : "fullName",
            "groupId" : "37f46890-a278-4ae1-8ef6-b7bd8e377cfb",
            "groupName" : "企业信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "14ec2d6c-04df-4166-89c4-29b2753b16e7",
            "fieldName" : "businessLicense",
            "groupId" : "37f46890-a278-4ae1-8ef6-b7bd8e377cfb",
            "groupName" : "企业信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "ce9be2ba-debb-492f-9ed9-f90ac195d862",
            "fieldName" : "address",
            "groupId" : "25e4424a-9608-4843-9a81-efb1caca83fc",
            "groupName" : "基本信息",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "5eeacb83-791b-4105-bfec-5ba5c6de98e6",
            "fieldName" : "email",
            "groupId" : "04dee6bd-2a7b-4793-b0a2-7edea32b23dc",
            "groupName" : "管理员",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "ab7face1-a52d-49a5-a5b6-7528831698db",
            "fieldName" : "telephone",
            "groupId" : "04dee6bd-2a7b-4793-b0a2-7edea32b23dc",
            "groupName" : "管理员",
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "19c6ed5f-014e-4d95-975b-b453da0d74b0",
            "fieldName" : "remark",
            "groupId" : "25e4424a-9608-4843-9a81-efb1caca83fc",
            "groupName" : "基本信息",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : { }
          }, {
            "type" : "Form",
            "id" : "1953ca9e-97f9-49f7-804e-1db6811787b9",
            "fieldName" : "parentMerchantID_ParentMerchantID_MerchantName",
            "groupId" : "25e4424a-9608-4843-9a81-efb1caca83fc",
            "groupName" : "基本信息",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "上游商户/经销商"
            }
          } ],
          "commands" : [ {
            "id" : "fdac76be-212d-4cb0-adbd-e83dddf2194b",
            "code" : "Edit1",
            "name" : "编辑数据",
            "params" : [ ],
            "handlerName" : "Edit",
            "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "1f064bb2-975a-4306-8813-39aeced57bc6",
            "code" : "Save1",
            "name" : "保存变更",
            "params" : [ ],
            "handlerName" : "Save",
            "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "7dc22d95-586d-4a3a-9493-dc077d059e3b",
            "code" : "Cancel1",
            "name" : "取消变更",
            "params" : [ ],
            "handlerName" : "Cancel",
            "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "componentType" : "Frame",
          "viewModel" : "root-viewmodel",
          "onInit" : "",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-navigate f-page-is-tree-card"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-dict\"><i class=\"f-icon f-icon-page-title-dictionary\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'商户表单'}}</h4>"
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
                    "id" : "button-addSibling",
                    "type" : "ToolBarItem",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "text" : "新增同级",
                    "visible" : true,
                    "click" : "root-viewmodel.tree-grid-component-viewmodel.AddSibling1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-addChild",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "text" : "新增子级",
                    "visible" : true,
                    "click" : "root-viewmodel.tree-grid-component-viewmodel.AddChild1",
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
                    "click" : "root-viewmodel.detail-form-component-viewmodel.Edit1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-save",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canSave']",
                    "text" : "保存",
                    "visible" : true,
                    "click" : "root-viewmodel.detail-form-component-viewmodel.Save1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancel']",
                    "text" : "取消",
                    "visible" : true,
                    "click" : "root-viewmodel.detail-form-component-viewmodel.Cancel1",
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
                    "click" : "root-viewmodel.tree-grid-component-viewmodel.Remove1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-data-import",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : false,
                    "text" : "导入",
                    "visible" : true,
                    "click" : "dataImport1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-data-export",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : false,
                    "text" : "导出",
                    "visible" : true,
                    "click" : "dataExport1",
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
                "id" : "content-splitter",
                "type" : "Splitter",
                "appearance" : {
                  "class" : "f-page-content"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "content-tree",
                  "type" : "SplitterPane",
                  "appearance" : {
                    "class" : "f-col-w6 f-page-content-nav"
                  },
                  "size" : null,
                  "resizable" : true,
                  "resizeHandlers" : "e",
                  "contents" : [ {
                    "id" : "tree-grid-component-ref",
                    "type" : "ComponentRef",
                    "component" : "tree-grid-component",
                    "visible" : true
                  } ],
                  "visible" : true
                }, {
                  "id" : "content-main",
                  "type" : "SplitterPane",
                  "appearance" : {
                    "class" : "f-page-content-main"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "detail-component-ref",
                    "type" : "ComponentRef",
                    "component" : "detail-form-component",
                    "visible" : true
                  } ],
                  "visible" : true,
                  "resizable" : false,
                  "resizeHandlers" : ""
                } ],
                "visible" : true,
                "orientation" : "horizontal"
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
          "id" : "tree-grid-component",
          "type" : "Component",
          "componentType" : "dataGrid",
          "viewModel" : "tree-grid-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-wrapper  f-utils-fill-flex-column"
          },
          "onInit" : "LoadTree1",
          "contents" : [ {
            "id" : "tree-grid-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-treegrid f-section-in-nav"
            },
            "size" : null,
            "visible" : true,
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
              "id" : "treeGrid",
              "type" : "TreeGrid",
              "controlSource" : "Farris",
              "appearance" : {
                "class" : "f-component-treetable"
              },
              "size" : null,
              "dataSource" : "merChants",
              "idField" : "id",
              "udtField" : "treeInfo",
              "fieldEditable" : false,
              "editable" : false,
              "fields" : [ {
                "id" : "merchantName_c80a3305_atir",
                "type" : "TreeGridField",
                "controlSource" : "Farris",
                "caption" : "商户名称",
                "captionTemplate" : null,
                "dataField" : "merchantName",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchantName",
                  "field" : "c80a3305-1379-4519-b9b1-08979d14b14f",
                  "fullPath" : "MerchantName"
                },
                "appearance" : null,
                "size" : null,
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : false,
                "sortable" : false,
                "sortOrder" : null,
                "resizeable" : true,
                "localization" : false,
                "colTemplate" : "",
                "visible" : true,
                "dataType" : "string",
                "format" : "",
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "styler" : null,
                "localizationType" : "Date"
              }, {
                "id" : "merchantCode_decf103d_nbo2",
                "type" : "TreeGridField",
                "controlSource" : "Farris",
                "caption" : "商户编号",
                "captionTemplate" : null,
                "dataField" : "merchantCode",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchantCode",
                  "field" : "decf103d-3e2b-433f-8dab-70b4fda83d60",
                  "fullPath" : "MerchantCode"
                },
                "appearance" : null,
                "size" : null,
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : false,
                "sortable" : false,
                "sortOrder" : null,
                "resizeable" : true,
                "localization" : false,
                "colTemplate" : "",
                "visible" : true,
                "dataType" : "string",
                "format" : "",
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "styler" : null,
                "localizationType" : "Date"
              } ],
              "fixedHeader" : true,
              "fit" : true,
              "focusedItem" : null,
              "focusedIndex" : null,
              "identifyField" : null,
              "multiSelect" : false,
              "selectable" : null,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "expendAll" : null,
              "expandLevel" : -1,
              "parentField" : null,
              "onSelectionChange" : "LoadCard1",
              "disable" : "viewModel.stateMachine['editable']",
              "expandNode" : null,
              "nowrap" : true,
              "virtualized" : false,
              "showBorder" : false,
              "showHeader" : true,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "cascadeCheck" : true,
              "cascadeDown" : true,
              "cascadeUp" : true,
              "keepSelect" : true,
              "onlySelectSelf" : true,
              "striped" : true,
              "styler" : null,
              "showIcon" : false,
              "useIconFromData" : false,
              "leafIcon" : null,
              "expandIcon" : null,
              "collapseIcon" : null,
              "headerWrap" : false,
              "fitColumns" : true,
              "autoWidth" : false,
              "visible" : true,
              "resizableColumns" : true,
              "checkAll" : null,
              "unCheckAll" : null,
              "nodeChecked" : null,
              "nodeUnChecked" : null,
              "showGotoInput" : false,
              "enableHeaderGroup" : false,
              "headerGroup" : null,
              "paginationForChildren" : false,
              "showTotalForChildren" : false,
              "pagination" : false
            } ],
            "isScrollSpyItem" : false,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null
        }, {
          "id" : "detail-form-component",
          "type" : "Component",
          "componentType" : "form-col-1",
          "viewModel" : "detail-form-component-viewmodel",
          "onInit" : "",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "contents" : [ {
            "id" : "detail-form-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-main"
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
            "enableAccordion" : false,
            "accordionMode" : "default",
            "showHeader" : true,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "detail-form-layout",
              "type" : "Form",
              "appearance" : {
                "class" : "f-form-layout farris-form farris-form-controls-inline"
              },
              "size" : null,
              "contents" : [ {
                "id" : "25e4424a-9608-4843-9a81-efb1caca83fc",
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
                  "id" : "merchantName_c80a3305_jl53",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "商户名称",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "merchantName",
                    "field" : "c80a3305-1379-4519-b9b1-08979d14b14f",
                    "fullPath" : "MerchantName"
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
                  "path" : "merchantName",
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
                  "id" : "merchantCode_decf103d_sgwn",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "商户编号",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "merchantCode",
                    "field" : "decf103d-3e2b-433f-8dab-70b4fda83d60",
                    "fullPath" : "MerchantCode"
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
                  "path" : "merchantCode",
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
                  "id" : "parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "上游商户/经销商",
                  "appearance" : {
                    "class" : "col-12 col-md-12 col-xl-12 col-el-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "parentMerchantID_ParentMerchantID_MerchantName",
                    "field" : "1953ca9e-97f9-49f7-804e-1db6811787b9",
                    "fullPath" : "ParentMerchantID.ParentMerchantID_MerchantName"
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
                  "path" : "parentMerchantID.parentMerchantID_MerchantName",
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
                  "id" : "companyType_34a5b660_aq4u",
                  "type" : "EnumField",
                  "titleSourceType" : "static",
                  "title" : "企业类型",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "companyType",
                    "field" : "34a5b660-2370-434b-b0ee-081fd2be7f5c",
                    "fullPath" : "CompanyType"
                  },
                  "placeHolder" : "",
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
                  "enumData" : [ {
                    "name" : "企业",
                    "value" : "qy"
                  }, {
                    "name" : "个体工商户",
                    "value" : "gt"
                  }, {
                    "name" : "个人",
                    "value" : "gr"
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
                  "path" : "companyType",
                  "viewType" : "text",
                  "noSearch" : false,
                  "maxSearchLength" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "labelAutoOverflow" : false,
                  "updateOn" : "change"
                }, {
                  "id" : "merchantType_2e73fcca_2h7w",
                  "type" : "EnumField",
                  "titleSourceType" : "static",
                  "title" : "商户类型",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "merchantType",
                    "field" : "2e73fcca-47d3-485a-bed9-fb8c7350b4d7",
                    "fullPath" : "MerchantType"
                  },
                  "placeHolder" : "",
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
                  "enumData" : [ {
                    "name" : "入驻商户",
                    "value" : "rz"
                  }, {
                    "name" : "经销商",
                    "value" : "jx"
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
                  "path" : "merchantType",
                  "viewType" : "text",
                  "noSearch" : false,
                  "maxSearchLength" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "autoHeight" : false,
                  "maxHeight" : 500,
                  "labelAutoOverflow" : false,
                  "updateOn" : "change"
                }, {
                  "id" : "realName_ef543f0d_9x4a",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "真实姓名",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "realName",
                    "field" : "ef543f0d-a41e-4892-b514-e64df42cb6c8",
                    "fullPath" : "RealName"
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
                  "path" : "realName",
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
                  "id" : "address_ce9be2ba_di1t",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "商户地址",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "address",
                    "field" : "ce9be2ba-debb-492f-9ed9-f90ac195d862",
                    "fullPath" : "Address"
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
                  "path" : "address",
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
                  "id" : "remark_19c6ed5f_de82",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "备注",
                  "appearance" : {
                    "class" : "col-12 col-md-12 col-xl-12 col-el-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "remark",
                    "field" : "19c6ed5f-014e-4d95-975b-b453da0d74b0",
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
                  "tabindex" : 0,
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
              }, {
                "id" : "37f46890-a278-4ae1-8ef6-b7bd8e377cfb",
                "type" : "FieldSet",
                "title" : "企业信息",
                "appearance" : {
                  "class" : "col-12 px-0"
                },
                "collapse" : false,
                "expandText" : "",
                "collapseText" : "",
                "contentTemplate" : null,
                "headerTemplate" : null,
                "contents" : [ {
                  "id" : "fullName_1a36d5d9_rlsi",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "企业全称",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "fullName",
                    "field" : "1a36d5d9-2e3d-497f-8d9d-2fa9b9e1c096",
                    "fullPath" : "FullName"
                  },
                  "readonly" : "!viewModel.stateMachine['editable']",
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 50,
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
                  "path" : "fullName",
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
                  "id" : "businessLicense_14ec2d6c_97z6",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "营业执照编码",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "businessLicense",
                    "field" : "14ec2d6c-04df-4166-89c4-29b2753b16e7",
                    "fullPath" : "BusinessLicense"
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
                  "path" : "businessLicense",
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
                "id" : "04dee6bd-2a7b-4793-b0a2-7edea32b23dc",
                "type" : "FieldSet",
                "title" : "管理员",
                "appearance" : {
                  "class" : "col-12 px-0"
                },
                "collapse" : false,
                "expandText" : "",
                "collapseText" : "",
                "contentTemplate" : null,
                "headerTemplate" : null,
                "contents" : [ {
                  "id" : "email_5eeacb83_5dxr",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "邮箱",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "email",
                    "field" : "5eeacb83-791b-4105-bfec-5ba5c6de98e6",
                    "fullPath" : "Email"
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
                  "path" : "email",
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
                  "id" : "telephone_ab7face1_3ghr",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "联系电话",
                  "appearance" : {
                    "class" : "col-12"
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "telephone",
                    "field" : "ab7face1-a52d-49a5-a5b6-7528831698db",
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
          "afterViewInit" : null
        } ],
        "webcmds" : [ {
          "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "TreeCardController.webcmd",
          "refedHandlers" : [ {
            "host" : "b10de35a-6f79-49ed-8e5e-72959ce73c61",
            "handler" : "LoadTree"
          }, {
            "host" : "aa2caeda-76f9-477a-b68d-914d14a1a336",
            "handler" : "LoadCard"
          }, {
            "host" : "cf10f2eb-547d-4e6e-9385-b25a6e0959a9",
            "handler" : "AddSibling"
          }, {
            "host" : "59390923-6f53-42ee-9c2c-a95ff9a89550",
            "handler" : "AddChild"
          }, {
            "host" : "428cc625-c8b8-45a5-9465-59da516474f7",
            "handler" : "Remove"
          }, {
            "host" : "fdac76be-212d-4cb0-adbd-e83dddf2194b",
            "handler" : "Edit"
          }, {
            "host" : "1f064bb2-975a-4306-8813-39aeced57bc6",
            "handler" : "Save"
          }, {
            "host" : "7dc22d95-586d-4a3a-9493-dc077d059e3b",
            "handler" : "Cancel"
          } ],
          "code" : "TreeCardController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
          "path" : null,
          "name" : "DataImportExportCommand.webcmd",
          "refedHandlers" : [ {
            "host" : "70ec6403-d11e-42a5-92b3-ce8c84f67947",
            "handler" : "DataImport"
          }, {
            "host" : "4cc18d88-b8cd-485a-bcc3-75d5ebc6f708",
            "handler" : "DataExport"
          }, {
            "host" : "1d4fc8b3-58a8-46d3-953c-8ee595a1012f",
            "handler" : "ListDataExport"
          } ],
          "code" : "DataImportExportCommand",
          "nameSpace" : "Inspur.GS.Gsp.Common.DataIE"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-merchant-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "b57238a6-8fdf-4c16-8f5a-c8451b8045a2",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "button-addSibling",
            "viewModelId" : "tree-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "tree-grid-component",
                "viewModelId" : "tree-grid-component-viewmodel"
              },
              "command" : {
                "id" : "cf10f2eb-547d-4e6e-9385-b25a6e0959a9",
                "label" : "AddSibling1",
                "name" : "新增同级节点",
                "handlerName" : "AddSibling",
                "params" : [ ],
                "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "label" : "TreeCardController",
                "name" : "树卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-addChild",
            "viewModelId" : "tree-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "tree-grid-component",
                "viewModelId" : "tree-grid-component-viewmodel"
              },
              "command" : {
                "id" : "59390923-6f53-42ee-9c2c-a95ff9a89550",
                "label" : "AddChild1",
                "name" : "新增下级节点",
                "handlerName" : "AddChild",
                "params" : [ ],
                "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "label" : "TreeCardController",
                "name" : "树卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-edit",
            "viewModelId" : "detail-form-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "detail-form-component",
                "viewModelId" : "detail-form-component-viewmodel"
              },
              "command" : {
                "id" : "fdac76be-212d-4cb0-adbd-e83dddf2194b",
                "label" : "Edit1",
                "name" : "编辑数据",
                "handlerName" : "Edit",
                "params" : [ ],
                "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "label" : "TreeCardController",
                "name" : "树卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-save",
            "viewModelId" : "detail-form-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "detail-form-component",
                "viewModelId" : "detail-form-component-viewmodel"
              },
              "command" : {
                "id" : "1f064bb2-975a-4306-8813-39aeced57bc6",
                "label" : "Save1",
                "name" : "保存变更",
                "handlerName" : "Save",
                "params" : [ ],
                "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "label" : "TreeCardController",
                "name" : "树卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-cancel",
            "viewModelId" : "detail-form-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "detail-form-component",
                "viewModelId" : "detail-form-component-viewmodel"
              },
              "command" : {
                "id" : "7dc22d95-586d-4a3a-9493-dc077d059e3b",
                "label" : "Cancel1",
                "name" : "取消变更",
                "handlerName" : "Cancel",
                "params" : [ ],
                "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "label" : "TreeCardController",
                "name" : "树卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-delete",
            "viewModelId" : "tree-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "tree-grid-component",
                "viewModelId" : "tree-grid-component-viewmodel"
              },
              "command" : {
                "id" : "428cc625-c8b8-45a5-9465-59da516474f7",
                "label" : "Remove1",
                "name" : "删除当前数据",
                "handlerName" : "Remove",
                "params" : [ ],
                "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "label" : "TreeCardController",
                "name" : "树卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-data-import",
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
                "id" : "70ec6403-d11e-42a5-92b3-ce8c84f67947",
                "label" : "dataImport1",
                "name" : "数据导入1",
                "handlerName" : "DataImport",
                "params" : [ {
                  "name" : "type",
                  "shownName" : "导入类型",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "357abe92-4dd4-49a1-8c8f-792f7d7e5f08",
                  "defaultValue" : null
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : " {\"importdbRefresh\":true}",
                  "defaultValue" : null
                } ],
                "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "label" : "DataImportExportCommand",
                "name" : "导入导出通用命令构件"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-data-export",
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
                "id" : "4cc18d88-b8cd-485a-bcc3-75d5ebc6f708",
                "label" : "dataExport1",
                "name" : "数据导出1",
                "handlerName" : "DataExport",
                "params" : [ {
                  "name" : "type",
                  "shownName" : "导出类型",
                  "value" : "",
                  "defaultValue" : null
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "77d2079a-f302-4446-8fd7-0be2b44b1246",
                  "defaultValue" : null
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : "   {\"selectFilterGridComponent\":\"data-grid-component\"}",
                  "defaultValue" : null
                } ],
                "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "label" : "DataImportExportCommand",
                "name" : "导入导出通用命令构件"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "treeGrid",
            "viewModelId" : "tree-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onSelectionChange",
                "name" : "行切换事件"
              },
              "targetComponent" : {
                "id" : "tree-grid-component",
                "viewModelId" : "tree-grid-component-viewmodel"
              },
              "command" : {
                "id" : "aa2caeda-76f9-477a-b68d-914d14a1a336",
                "label" : "LoadCard1",
                "name" : "加载卡片数据",
                "handlerName" : "LoadCard",
                "params" : [ ],
                "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "label" : "TreeCardController",
                "name" : "树卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "tree-grid-component",
            "viewModelId" : "tree-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onInit",
                "name" : "初始化事件"
              },
              "targetComponent" : {
                "id" : "tree-grid-component",
                "viewModelId" : "tree-grid-component-viewmodel"
              },
              "command" : {
                "id" : "b10de35a-6f79-49ed-8e5e-72959ce73c61",
                "label" : "LoadTree1",
                "name" : "加载树列表数据",
                "handlerName" : "LoadTree",
                "params" : [ ],
                "cmpId" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8fe977a1-2b32-4f0f-a6b3-2657c4d03574",
                "label" : "TreeCardController",
                "name" : "树卡控制器"
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
  "RelativePath" : "HotWave/DataBase/MerChant/bo-merchant-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}