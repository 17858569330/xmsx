{
  "Header" : {
    "Code" : "StaffForm",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Front",
    "CertId" : null,
    "Name" : "员工表单",
    "FileName" : "StaffForm.frm",
    "BizobjectID" : "b1d99340-20e0-c926-9f0c-748712e5c3d0",
    "Language" : null,
    "Extendable" : false,
    "ID" : "d001feb9-fb06-4140-88f6-90e6c68477f3",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "399f8248-948c-4eb1-a9a6-e1afb5d8434f",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Front",
      "Code" : "StaffForm.frm",
      "Name" : "StaffForm.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "b1d99340-20e0-c926-9f0c-748712e5c3d0"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "CreationDate" : null,
    "Contents" : {
      "module" : {
        "id" : "StaffForm",
        "code" : "StaffForm",
        "name" : "员工表单",
        "caption" : "员工表单",
        "type" : "Module",
        "creator" : "0001",
        "creationDate" : "2023-06-21T05:40:17.357Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-card-template",
        "templateId" : "list-card-template",
        "schemas" : [ {
          "name" : "员工表单_frm",
          "id" : "5dc72654-a312-44b1-ae03-2c48edd7a75b",
          "sourceType" : "vo",
          "variables" : [ ],
          "sourceUri" : "api/hotwave/database/v1.0/StaffForm_frm",
          "code" : "StaffForm_frm",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "entities" : [ {
            "name" : "员工",
            "id" : "2a7b5e0f-8338-47fe-8b0d-f57e928e3b3a",
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
                "id" : "8b3bd68f-1d34-4e0d-aa6e-e0e26dbd940d",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "bindingField" : "id",
                "bindingPath" : "id",
                "originalId" : "8b3bd68f-1d34-4e0d-aa6e-e0e26dbd940d",
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
                "id" : "a194cf43-cc20-4360-a9a4-dbe6e0f9cc63",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "bindingField" : "version",
                "bindingPath" : "version",
                "originalId" : "a194cf43-cc20-4360-a9a4-dbe6e0f9cc63",
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
                "name" : "名称",
                "id" : "77b424b2-11bd-41dd-8fdc-53c8d55c52cf",
                "type" : {
                  "$type" : "StringType",
                  "length" : 1000,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Name",
                "bindingField" : "name",
                "bindingPath" : "name",
                "originalId" : "77b424b2-11bd-41dd-8fdc-53c8d55c52cf",
                "code" : "Name",
                "label" : "name"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "编号",
                "id" : "95ef2878-fdb7-4965-a6b8-5fb77f657d10",
                "type" : {
                  "$type" : "StringType",
                  "length" : 1000,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Code",
                "bindingField" : "code",
                "bindingPath" : "code",
                "originalId" : "95ef2878-fdb7-4965-a6b8-5fb77f657d10",
                "code" : "Code",
                "label" : "code"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "商户",
                "id" : "91fbe3b1-0826-4850-ae75-d046d74d6130",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Merchant",
                "bindingField" : "merchant",
                "bindingPath" : "merchant",
                "originalId" : "91fbe3b1-0826-4850-ae75-d046d74d6130",
                "code" : "Merchant",
                "label" : "merchant"
              }, {
                "$type" : "ComplexField",
                "name" : "联系电话",
                "id" : "fdb78443-b6f8-47f8-9392-44ef72a46c32",
                "type" : {
                  "$type" : "ObjectType",
                  "name" : "TelephoneNumberFdb7",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "name" : "电话号码",
                    "id" : "fdb78443-de2d-4842-84d3-5ce40df8a536",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 18,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Telephone.TelephoneNumber",
                    "bindingField" : "telephone_TelephoneNumber",
                    "bindingPath" : "telephone.telephoneNumber",
                    "originalId" : "40c87bd0-de2d-4842-84d3-5ce40df8a536",
                    "code" : "TelephoneNumber",
                    "label" : "telephoneNumber"
                  } ],
                  "displayName" : "电话号码"
                },
                "path" : "Telephone",
                "bindingField" : "telephone",
                "bindingPath" : "telephone",
                "originalId" : "fdb78443-b6f8-47f8-9392-44ef72a46c32",
                "code" : "Telephone",
                "label" : "telephone"
              }, {
                "$type" : "ComplexField",
                "name" : "邮箱",
                "id" : "58c17137-d8f7-4a07-809e-3dfc57aefd78",
                "type" : {
                  "$type" : "ObjectType",
                  "name" : "Email58c1",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "multiLanguage" : false,
                    "require" : false,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "name" : "邮箱",
                    "id" : "58c17137-fa0f-456c-9c58-7ab52433e9b2",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 500,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Mailbox.Email",
                    "bindingField" : "mailbox_Email",
                    "bindingPath" : "mailbox.email",
                    "originalId" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2",
                    "code" : "Email",
                    "label" : "email"
                  } ],
                  "displayName" : "邮箱"
                },
                "path" : "Mailbox",
                "bindingField" : "mailbox",
                "bindingPath" : "mailbox",
                "originalId" : "58c17137-d8f7-4a07-809e-3dfc57aefd78",
                "code" : "Mailbox",
                "label" : "mailbox"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "name" : "身份证号",
                "id" : "02e51691-4d5f-4e30-9e86-1598a489e05a",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "IDNumber",
                "bindingField" : "idNumber",
                "bindingPath" : "idNumber",
                "originalId" : "02e51691-4d5f-4e30-9e86-1598a489e05a",
                "code" : "IDNumber",
                "label" : "idNumber"
              }, {
                "$type" : "SimpleField",
                "multiLanguage" : false,
                "require" : false,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "CheckBox"
                },
                "name" : "是否法人/负责人",
                "id" : "1917e65b-ca7b-4a26-a554-c8de814e5056",
                "type" : {
                  "$type" : "BooleanType",
                  "name" : "Boolean",
                  "displayName" : "布尔"
                },
                "path" : "OrCorPor",
                "bindingField" : "orCorPor",
                "bindingPath" : "orCorPor",
                "originalId" : "1917e65b-ca7b-4a26-a554-c8de814e5056",
                "code" : "OrCorPor",
                "label" : "orCorPor"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "name" : "Staff",
              "displayName" : "员工"
            },
            "code" : "Staff",
            "label" : "staffs"
          } ],
          "eapiId" : "75542f0c-eebb-4de1-aac9-925cb06c658c",
          "eapiCode" : "StaffForm_frm",
          "eapiName" : "员工表单_frm",
          "eapiNameSpace" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Front",
          "voPath" : "HotWave/DataBase/Staff/bo-staff-front/metadata/components",
          "voNameSpace" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Front"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "StaffForm_state_machine",
          "name" : "员工表单_frm",
          "uri" : "eb02c023-3047-4b9c-9cbd-b1c5f141fa4f",
          "code" : "StaffForm_frm",
          "nameSpace" : "Inspur.GS.HotWave.DataBase.Staff.Staff.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "员工",
          "fields" : [ ],
          "stateMachine" : "StaffForm_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "员工",
          "fields" : [ {
            "type" : "Form",
            "id" : "77b424b2-11bd-41dd-8fdc-53c8d55c52cf",
            "fieldName" : "name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "95ef2878-fdb7-4965-a6b8-5fb77f657d10",
            "fieldName" : "code",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "91fbe3b1-0826-4850-ae75-d046d74d6130",
            "fieldName" : "merchant",
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
          "name" : "员工",
          "fields" : [ {
            "type" : "Form",
            "id" : "77b424b2-11bd-41dd-8fdc-53c8d55c52cf",
            "fieldName" : "name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "95ef2878-fdb7-4965-a6b8-5fb77f657d10",
            "fieldName" : "code",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "91fbe3b1-0826-4850-ae75-d046d74d6130",
            "fieldName" : "merchant",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "Staff.merchant",
                  "displayName" : "商户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "merchantName",
                "displayType" : "TreeList",
                "mapFields" : "{'merchantName':'merchant'}",
                "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556"
              },
              "name" : "商户",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "fdb78443-de2d-4842-84d3-5ce40df8a536",
            "fieldName" : "telephone_TelephoneNumber",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "58c17137-fa0f-456c-9c58-7ab52433e9b2",
            "fieldName" : "mailbox_Email",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "02e51691-4d5f-4e30-9e86-1598a489e05a",
            "fieldName" : "idNumber",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "1917e65b-ca7b-4a26-a554-c8de814e5056",
            "fieldName" : "orCorPor",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-dict\"><i class=\"f-icon f-icon-page-title-dictionary\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'员工表单'}}</h4>"
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
              "dataSource" : "staffs",
              "fields" : [ {
                "id" : "name_77b424b2_isk2",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "名称",
                "captionTemplate" : null,
                "dataField" : "name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "name",
                  "field" : "77b424b2-11bd-41dd-8fdc-53c8d55c52cf",
                  "fullPath" : "Name"
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
                "id" : "code_95ef2878_ewnw",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "编号",
                "captionTemplate" : null,
                "dataField" : "code",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "code",
                  "field" : "95ef2878-fdb7-4965-a6b8-5fb77f657d10",
                  "fullPath" : "Code"
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
                "id" : "merchant_91fbe3b1_be3q",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商户",
                "captionTemplate" : null,
                "dataField" : "merchant",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant",
                  "field" : "91fbe3b1-0826-4850-ae75-d046d74d6130",
                  "fullPath" : "Merchant"
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
                "id" : "name_77b424b2_jp3d",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "名称",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "name",
                  "field" : "77b424b2-11bd-41dd-8fdc-53c8d55c52cf",
                  "fullPath" : "Name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 1000,
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
                "path" : "name",
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
                "id" : "code_95ef2878_w1gd",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "编号",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "code",
                  "field" : "95ef2878-fdb7-4965-a6b8-5fb77f657d10",
                  "fullPath" : "Code"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 1000,
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
                "path" : "code",
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
                "id" : "merchant_91fbe3b1_6p9z",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "商户",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant",
                  "field" : "91fbe3b1-0826-4850-ae75-d046d74d6130",
                  "fullPath" : "Merchant"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "Staff.merchant",
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
                "mapFields" : "{'merchantName':'merchant'}",
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
                "path" : "merchant",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "helpId" : "b610c446-71ea-4aed-bb9b-f46ccc45a556"
              }, {
                "id" : "telephone_TelephoneNumber_fdb78443_na4c",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "电话号码",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "telephone_TelephoneNumber",
                  "field" : "fdb78443-de2d-4842-84d3-5ce40df8a536",
                  "fullPath" : "Telephone.TelephoneNumber"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 18,
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
                "path" : "telephone.telephoneNumber",
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
                "id" : "mailbox_Email_58c17137_hc82",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "邮箱",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "mailbox_Email",
                  "field" : "58c17137-fa0f-456c-9c58-7ab52433e9b2",
                  "fullPath" : "Mailbox.Email"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 500,
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
                "path" : "mailbox.email",
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
                "id" : "idNumber_02e51691_6ivb",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "身份证号",
                "appearance" : {
                  "class" : "col-12"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "idNumber",
                  "field" : "02e51691-4d5f-4e30-9e86-1598a489e05a",
                  "fullPath" : "IDNumber"
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
                "path" : "idNumber",
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
                "id" : "orCorPor_1917e65b_04lg",
                "type" : "CheckBox",
                "titleSourceType" : "static",
                "title" : "是否法人/负责人",
                "checked" : false,
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "binding" : {
                  "type" : "Form",
                  "path" : "orCorPor",
                  "field" : "1917e65b-ca7b-4a26-a554-c8de814e5056",
                  "fullPath" : "OrCorPor"
                },
                "visible" : true,
                "appearance" : {
                  "class" : "col-12"
                },
                "vsize" : null,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "holdPlace" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "path" : "orCorPor",
                "size" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false
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
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-staff-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "d001feb9-fb06-4140-88f6-90e6c68477f3",
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
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid"
      }
    },
    "Id" : "d001feb9-fb06-4140-88f6-90e6c68477f3"
  },
  "ExtendRule" : null,
  "RelativePath" : "HotWave/DataBase/Staff/bo-staff-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}