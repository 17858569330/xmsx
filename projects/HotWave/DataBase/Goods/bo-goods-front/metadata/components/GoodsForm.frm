{
  "Header" : {
    "Code" : "GoodsForm",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Front",
    "CertId" : null,
    "Name" : "商品表单",
    "FileName" : "GoodsForm.frm",
    "BizobjectID" : "dec0e47e-409b-6d3a-8876-85bd5909bf19",
    "Language" : null,
    "Extendable" : false,
    "ID" : "47987c1f-7db8-4d88-ad1d-daea61415bac",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "ad2fa06c-be7e-4f97-9f4b-e89e0ce12037",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Front",
      "Code" : "GoodsForm.frm",
      "Name" : "GoodsForm.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "dec0e47e-409b-6d3a-8876-85bd5909bf19"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "CreationDate" : null,
    "Contents" : {
      "module" : {
        "id" : "GoodsForm",
        "code" : "GoodsForm",
        "name" : "商品表单",
        "caption" : "商品表单",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-25T01:51:36.881Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-card-template",
        "templateId" : "list-card-template",
        "schemas" : [ {
          "id" : "9d9e5460-9b9c-46b6-b30b-650724a5d768",
          "sourceType" : "vo",
          "sourceUri" : "api/hotwave/database/v1.0/GoodsForm_frm",
          "variables" : [ ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "GoodsForm_frm",
          "entities" : [ {
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : true,
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "label" : "id",
                "path" : "ID",
                "id" : "fcadfd1a-a424-4912-82d7-4d64a6edfce6",
                "code" : "ID",
                "originalId" : "fcadfd1a-a424-4912-82d7-4d64a6edfce6",
                "bindingField" : "id",
                "bindingPath" : "id",
                "name" : "主键"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "label" : "version",
                "path" : "Version",
                "id" : "ab6b214b-8c7f-47bf-8c56-de943b25055a",
                "code" : "Version",
                "originalId" : "ab6b214b-8c7f-47bf-8c56-de943b25055a",
                "bindingField" : "version",
                "bindingPath" : "version",
                "name" : "版本"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "label" : "goodsName",
                "path" : "GoodsName",
                "id" : "f5c45c50-f3b1-4596-b474-25b1924d637c",
                "code" : "GoodsName",
                "originalId" : "f5c45c50-f3b1-4596-b474-25b1924d637c",
                "bindingField" : "goodsName",
                "bindingPath" : "goodsName",
                "name" : "商品名称"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "label" : "goodsCode",
                "path" : "GoodsCode",
                "id" : "68f83985-c7f1-4802-8def-523411391941",
                "code" : "GoodsCode",
                "originalId" : "68f83985-c7f1-4802-8def-523411391941",
                "bindingField" : "goodsCode",
                "bindingPath" : "goodsCode",
                "name" : "商品编号"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "label" : "specification",
                "path" : "Specification",
                "id" : "d87a107d-b808-4fd6-ad6f-105a79bee9ed",
                "code" : "Specification",
                "originalId" : "d87a107d-b808-4fd6-ad6f-105a79bee9ed",
                "bindingField" : "specification",
                "bindingPath" : "specification",
                "name" : "规格型号"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 30,
                  "name" : "String"
                },
                "label" : "category",
                "path" : "Category",
                "id" : "54897081-7eb7-4731-98f1-000facc3ae98",
                "code" : "Category",
                "originalId" : "54897081-7eb7-4731-98f1-000facc3ae98",
                "bindingField" : "category",
                "bindingPath" : "category",
                "name" : "分类名称"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 2,
                  "length" : 10,
                  "name" : "Number"
                },
                "label" : "price",
                "path" : "Price",
                "id" : "d0345408-e400-4a87-9b88-12d02bf74ca7",
                "code" : "Price",
                "originalId" : "d0345408-e400-4a87-9b88-12d02bf74ca7",
                "bindingField" : "price",
                "bindingPath" : "price",
                "name" : "单价"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "NumericType",
                  "displayName" : "数字",
                  "precision" : 0,
                  "length" : 0,
                  "name" : "Number"
                },
                "label" : "number",
                "path" : "Number",
                "id" : "cff57161-e73b-4c19-ac3b-cff5ef3e6a24",
                "code" : "Number",
                "originalId" : "cff57161-e73b-4c19-ac3b-cff5ef3e6a24",
                "bindingField" : "number",
                "bindingPath" : "number",
                "name" : "上架数量"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "require" : false,
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 100,
                  "name" : "String"
                },
                "label" : "remark",
                "path" : "Remark",
                "id" : "1477fc42-e434-4a64-a531-6fc19357af71",
                "code" : "Remark",
                "originalId" : "1477fc42-e434-4a64-a531-6fc19357af71",
                "bindingField" : "remark",
                "bindingPath" : "remark",
                "name" : "备注"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "displayName" : "商品",
              "name" : "Goods"
            },
            "label" : "goodss",
            "id" : "f185e11f-930b-4157-92fc-d5950af1a057",
            "code" : "Goods",
            "name" : "商品"
          } ],
          "name" : "商品表单_frm",
          "eapiId" : "0d7e1a9d-3361-4035-af11-3219ff33b0a2",
          "eapiCode" : "GoodsForm_frm",
          "eapiName" : "商品表单_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Front",
          "voPath" : "HotWave/DataBase/Goods/bo-goods-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "GoodsForm_state_machine",
          "name" : "商品表单_frm",
          "uri" : "dbde8327-e4b4-4ca2-95a8-31ab06df4b79",
          "code" : "GoodsForm_frm",
          "nameSpace" : "Inspur.GS.HotWave.DataBase.Goods.Goods.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "商品",
          "fields" : [ ],
          "stateMachine" : "GoodsForm_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "70ec6403-d11e-42a5-92b3-ce8c84f67947",
            "code" : "dataImport1",
            "name" : "数据导入1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导入类型",
              "value" : ""
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "4de28998-7ff7-4fc6-9404-6ab36130ff28"
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "   {\"importdbRefresh\":true}"
            } ],
            "handlerName" : "DataImport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "4cc18d88-b8cd-485a-bcc3-75d5ebc6f708",
            "code" : "dataExport1",
            "name" : "数据导出1",
            "params" : [ ],
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
              "value" : "4de28998-7ff7-4fc6-9404-6ab36130ff28"
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : " {\"selectFilterGridComponent\":\"data-grid-component\"}"
            } ],
            "handlerName" : "ListDataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "eb1bd5aa-e39a-4f9c-a2de-8b4ef3e3c3b0",
            "code" : "rootviewmodelDataExport1",
            "name" : "数据导出1",
            "params" : [ {
              "name" : "type",
              "shownName" : "导出类型",
              "value" : ""
            }, {
              "name" : "ruleID",
              "shownName" : "规则Id",
              "value" : "4de28998-7ff7-4fc6-9404-6ab36130ff28"
            }, {
              "name" : "option",
              "shownName" : "参数配置",
              "value" : "{\"selectFilterGridComponent\":\"data-grid-component\"}"
            } ],
            "handlerName" : "DataExport",
            "cmpId" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "root-component"
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "商品",
          "fields" : [ {
            "type" : "Form",
            "id" : "f5c45c50-f3b1-4596-b474-25b1924d637c",
            "fieldName" : "goodsName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "68f83985-c7f1-4802-8def-523411391941",
            "fieldName" : "goodsCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          } ],
          "commands" : [ {
            "id" : "fda876c8-7230-46e7-af3d-d38233642275",
            "code" : "loadList1",
            "name" : "加载列表数据",
            "params" : [ ],
            "handlerName" : "loadList",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "22576fc1-08fb-49a9-b132-295c7392b481",
            "code" : "remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/data-grid-component/id}"
            } ],
            "handlerName" : "remove",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "8788c27e-722a-4b98-9d57-98eafb526fe5",
            "code" : "loadCard1",
            "name" : "加载卡片数据",
            "params" : [ ],
            "handlerName" : "loadCard",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "ef281c13-4480-4256-901e-4bef5f92bd9e",
            "code" : "add1",
            "name" : "新增一条数据",
            "params" : [ ],
            "handlerName" : "add",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
            "code" : "changePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "切换页面后回调方法",
              "value" : "loadList1"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "目标组件",
              "value" : "data-grid-component"
            } ],
            "handlerName" : "changePage",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "pagination" : {
            "enable" : true,
            "pageSize" : 20,
            "pageList" : "10,20,30,50,100"
          },
          "enableValidation" : false
        }, {
          "id" : "detail-form-component-viewmodel",
          "code" : "detail-form-component-viewmodel",
          "name" : "商品",
          "fields" : [ {
            "type" : "Form",
            "id" : "f5c45c50-f3b1-4596-b474-25b1924d637c",
            "fieldName" : "goodsName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "68f83985-c7f1-4802-8def-523411391941",
            "fieldName" : "goodsCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "d87a107d-b808-4fd6-ad6f-105a79bee9ed",
            "fieldName" : "specification",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "54897081-7eb7-4731-98f1-000facc3ae98",
            "fieldName" : "category",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "d0345408-e400-4a87-9b88-12d02bf74ca7",
            "fieldName" : "price",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "cff57161-e73b-4c19-ac3b-cff5ef3e6a24",
            "fieldName" : "number",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "1477fc42-e434-4a64-a531-6fc19357af71",
            "fieldName" : "remark",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          } ],
          "commands" : [ {
            "id" : "d12acc4e-6274-44dc-95e6-cedeb5e66707",
            "code" : "edit1",
            "name" : "编辑数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/detail-form-component/id}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "edit",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "5707d460-c441-45c4-8fe1-f77abd9f75b1",
            "code" : "save1",
            "name" : "保存变更",
            "params" : [ ],
            "handlerName" : "save",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "b3897b4b-a37f-48e3-afb3-8489cec02806",
            "code" : "cancel1",
            "name" : "取消变更",
            "params" : [ ],
            "handlerName" : "cancel",
            "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
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
              "class" : "f-page f-page-navigate f-page-is-grid-card"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-dict\"><i class=\"f-icon f-icon-page-title-dictionary\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'商品表单'}}</h4>"
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
                    "click" : "root-viewmodel.data-grid-component-viewmodel.add1",
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
                    "click" : "root-viewmodel.detail-form-component-viewmodel.edit1",
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
                    "click" : "root-viewmodel.detail-form-component-viewmodel.save1",
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
                    "click" : "root-viewmodel.detail-form-component-viewmodel.cancel1",
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
                    "click" : "root-viewmodel.data-grid-component-viewmodel.remove1",
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
                    "click" : "rootviewmodelDataExport1",
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
                  "id" : "content-list",
                  "type" : "SplitterPane",
                  "appearance" : {
                    "class" : "f-col-w6 f-page-content-nav"
                  },
                  "size" : null,
                  "resizable" : true,
                  "resizeHandlers" : "e",
                  "contents" : [ {
                    "id" : "data-grid-component-ref",
                    "type" : "ComponentRef",
                    "component" : "data-grid-component",
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
          "id" : "data-grid-component",
          "type" : "Component",
          "componentType" : "dataGrid",
          "viewModel" : "data-grid-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-wrapper  f-utils-fill-flex-column"
          },
          "onInit" : "loadList1",
          "contents" : [ {
            "id" : "data-grid-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-grid f-section-in-nav"
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
            "fill" : false,
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
              "dataSource" : "goodss",
              "fields" : [ {
                "id" : "goodsName_f5c45c50_xevr",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商品名称",
                "captionTemplate" : null,
                "dataField" : "goodsName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsName",
                  "field" : "f5c45c50-f3b1-4596-b474-25b1924d637c",
                  "fullPath" : "GoodsName"
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
                "id" : "goodsCode_68f83985_nuka",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商品编号",
                "captionTemplate" : null,
                "dataField" : "goodsCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsCode",
                  "field" : "68f83985-c7f1-4802-8def-523411391941",
                  "fullPath" : "GoodsCode"
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
              "onSelectionChange" : "loadCard1",
              "fieldEditable" : false,
              "appendRow" : null,
              "disable" : "viewModel.stateMachine['editable']",
              "pageChange" : "changePage1",
              "pageSizeChanged" : "changePage1",
              "fitColumns" : true,
              "autoFitColumns" : false,
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
              "virtualized" : false,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : null,
              "pagerContentTemplate" : null,
              "expandGroupRows" : true,
              "useBlankWhenDataIsEmpty" : false,
              "pageList" : "10,20,30,50,100",
              "pageSize" : 20
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
                "id" : "goodsName_f5c45c50_1xh8",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "商品名称",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsName",
                  "field" : "f5c45c50-f3b1-4596-b474-25b1924d637c",
                  "fullPath" : "GoodsName"
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
                "path" : "goodsName",
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
                "id" : "goodsCode_68f83985_ou4c",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "商品编号",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "goodsCode",
                  "field" : "68f83985-c7f1-4802-8def-523411391941",
                  "fullPath" : "GoodsCode"
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
                "path" : "goodsCode",
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
                "id" : "specification_d87a107d_kxuw",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "规格型号",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "specification",
                  "field" : "d87a107d-b808-4fd6-ad6f-105a79bee9ed",
                  "fullPath" : "Specification"
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
              }, {
                "id" : "category_54897081_hal5",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "分类名称",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "category",
                  "field" : "54897081-7eb7-4731-98f1-000facc3ae98",
                  "fullPath" : "Category"
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
                "path" : "category",
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
                "id" : "price_d0345408_4pk3",
                "type" : "NumericBox",
                "titleSourceType" : "static",
                "title" : "单价",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "price",
                  "field" : "d0345408-e400-4a87-9b88-12d02bf74ca7",
                  "fullPath" : "Price"
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
                "path" : "price",
                "localization" : false,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500
              }, {
                "id" : "number_cff57161_7eok",
                "type" : "NumericBox",
                "titleSourceType" : "static",
                "title" : "上架数量",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "number",
                  "field" : "cff57161-e73b-4c19-ac3b-cff5ef3e6a24",
                  "fullPath" : "Number"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
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
                "path" : "number",
                "localization" : false,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500
              }, {
                "id" : "remark_1477fc42_atby",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "备注",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "remark",
                  "field" : "1477fc42-e434-4a64-a531-6fc19357af71",
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
          "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "ListCardController.webcmd",
          "refedHandlers" : [ {
            "host" : "fda876c8-7230-46e7-af3d-d38233642275",
            "handler" : "loadList"
          }, {
            "host" : "8788c27e-722a-4b98-9d57-98eafb526fe5",
            "handler" : "loadCard"
          }, {
            "host" : "ef281c13-4480-4256-901e-4bef5f92bd9e",
            "handler" : "add"
          }, {
            "host" : "d12acc4e-6274-44dc-95e6-cedeb5e66707",
            "handler" : "edit"
          }, {
            "host" : "5707d460-c441-45c4-8fe1-f77abd9f75b1",
            "handler" : "save"
          }, {
            "host" : "b3897b4b-a37f-48e3-afb3-8489cec02806",
            "handler" : "cancel"
          }, {
            "host" : "22576fc1-08fb-49a9-b132-295c7392b481",
            "handler" : "remove"
          }, {
            "host" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
            "handler" : "changePage"
          } ],
          "code" : "ListCardController",
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
          }, {
            "host" : "eb1bd5aa-e39a-4f9c-a2de-8b4ef3e3c3b0",
            "handler" : "DataExport"
          } ],
          "code" : "DataImportExportCommand",
          "nameSpace" : "Inspur.GS.Gsp.Common.DataIE"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-goods-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "47987c1f-7db8-4d88-ad1d-daea61415bac",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "button-add",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "ef281c13-4480-4256-901e-4bef5f92bd9e",
                "label" : "add1",
                "name" : "新增一条数据",
                "handlerName" : "add",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
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
                "id" : "d12acc4e-6274-44dc-95e6-cedeb5e66707",
                "label" : "edit1",
                "name" : "编辑数据",
                "handlerName" : "edit",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待编辑数据的标识",
                  "value" : "{DATA~/detail-form-component/id}"
                }, {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Edit"
                } ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
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
                "id" : "5707d460-c441-45c4-8fe1-f77abd9f75b1",
                "label" : "save1",
                "name" : "保存变更",
                "handlerName" : "save",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
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
                "id" : "b3897b4b-a37f-48e3-afb3-8489cec02806",
                "label" : "cancel1",
                "name" : "取消变更",
                "handlerName" : "cancel",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-delete",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "22576fc1-08fb-49a9-b132-295c7392b481",
                "label" : "remove1",
                "name" : "删除当前数据",
                "handlerName" : "remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/data-grid-component/id}"
                } ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
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
                  "value" : ""
                }, {
                  "name" : "ruleID",
                  "shownName" : "规则Id",
                  "value" : "4de28998-7ff7-4fc6-9404-6ab36130ff28"
                }, {
                  "name" : "option",
                  "shownName" : "参数配置",
                  "value" : "   {\"importdbRefresh\":true}"
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
            "id" : "dataGrid",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onSelectionChange",
                "name" : "行切换事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "8788c27e-722a-4b98-9d57-98eafb526fe5",
                "label" : "loadCard1",
                "name" : "加载卡片数据",
                "handlerName" : "loadCard",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            }, {
              "event" : {
                "label" : "pageChange",
                "name" : "切换页码"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
                "label" : "changePage1",
                "name" : "切换页码",
                "handlerName" : "changePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "loadList1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "data-grid-component"
                } ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
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
                "id" : "e7cf83c2-e52d-4dce-aded-047a819c8068",
                "label" : "changePage1",
                "name" : "切换页码",
                "handlerName" : "changePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "loadList1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "data-grid-component"
                } ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "data-grid-component",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onInit",
                "name" : "初始化事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "fda876c8-7230-46e7-af3d-d38233642275",
                "label" : "loadList1",
                "name" : "加载列表数据",
                "handlerName" : "loadList",
                "params" : [ ],
                "cmpId" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "7c48ef46-339c-42d4-8365-a21236c63044",
                "label" : "ListCardController",
                "name" : "列卡控制器"
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
                "id" : "eb1bd5aa-e39a-4f9c-a2de-8b4ef3e3c3b0",
                "label" : "rootviewmodelDataExport1",
                "name" : "数据导出1",
                "handlerName" : "DataExport",
                "params" : [ {
                  "id" : "b2155432-d325-4191-2e47-7ca3fdc28828",
                  "name" : "type",
                  "value" : "",
                  "shownName" : "导出类型",
                  "description" : "0(缺省)基本导出,1导出当前分页,2根据模型导出,3导出当前子表",
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
                    "Code" : "type",
                    "Name" : "导出类型",
                    "Description" : "0(缺省)基本导出,1导出当前分页,2根据模型导出,3导出当前子表",
                    "ParameterType" : "int",
                    "controlSource" : null,
                    "Id" : "b2155432-d325-4191-2e47-7ca3fdc28828",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "4b2a8e8f-f0a7-b527-6643-2fe4377c98c3",
                  "name" : "ruleID",
                  "value" : "4de28998-7ff7-4fc6-9404-6ab36130ff28",
                  "shownName" : "规则Id",
                  "description" : "导出规则ID(缺省取VO下规则)",
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
                    "Code" : "ruleID",
                    "Name" : "规则Id",
                    "Description" : "导出规则ID(缺省取VO下规则)",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "4b2a8e8f-f0a7-b527-6643-2fe4377c98c3",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "c84d2b08-7f08-b64a-4ff7-8bb3c145d5ad",
                  "name" : "option",
                  "value" : "{\"selectFilterGridComponent\":\"data-grid-component\"}",
                  "shownName" : "参数配置",
                  "description" : "配置其他参数",
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
                    "Code" : "option",
                    "Name" : "参数配置",
                    "Description" : "配置其他参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "c84d2b08-7f08-b64a-4ff7-8bb3c145d5ad",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "isNewGenerated" : true,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "3f40288a-d11e-4dbd-89ba-388abf931ca3",
                "label" : "DataImportExportCommand",
                "name" : "导入导出通用命令构件"
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
    "Id" : "47987c1f-7db8-4d88-ad1d-daea61415bac"
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/DataBase/Goods/bo-goods-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}