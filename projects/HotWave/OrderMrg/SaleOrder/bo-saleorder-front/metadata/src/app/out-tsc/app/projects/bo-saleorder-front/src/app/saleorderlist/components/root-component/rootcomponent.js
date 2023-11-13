import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { ExceptionHandler } from '@farris/command-services';
import { FrameworkSessionService, UriService } from '@farris/bef';
import { FrameworkService } from '@gsp-sys/rtf-common';
import { ApplicationParamService } from '@farris/command-services';
import { EventDeclaration } from '../../events/event';
import { FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS } from '@farris/devkit';
import { WFSubmiteService } from '@gsp-wf/rtdevkit';
import { CloudprintService } from '@gsp-svc/cloudprint';
import { WFFlowchartService } from '@gsp-wf/ui-flowchart';
import { CHANGE_SET_POLICY_TOKEN } from '@farris/devkit';
import { TranslateToken, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS } from '@farris/devkit';
import { VerifyDetailService } from '@farris/ui-verify-detail';
import { AppContext, FORM_ID, PARAM_TYPE_TRANSFORM_TOKEN } from '@farris/devkit';
import { BE_SESSION_HANDLING_STRATEGY_TOKEN } from '@farris/bef';
import { BACK_END_MESSAGE_HANDLER_TOKEN } from '@farris/devkit';
import { BackEndMessageHandler } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { SaleOrderRepository } from '../../models/saleorderrepository';
import { LangService } from '../../lang/lang-pipe';
import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelStateMachine } from '../../viewmodels/statemachine/rootviewmodelstatemachine';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { Search1Handler } from '../../viewmodels/handlers/search1handler';
import { RemoveRows1Handler } from '../../viewmodels/handlers/removerows1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { View1Handler } from '../../viewmodels/handlers/view1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { Filter1Handler } from '../../viewmodels/handlers/filter1handler';
import { rootviewmodelsendGoods1Handler } from '../../viewmodels/handlers/rootviewmodelsendgoods1handler';
import { SaleOrderListFrmControllerService as SaleOrderListFrmControllerService1 } from '../../services/saleorderlist_frm_controller';
import { SaleOrderProxy } from '../../models/saleorderproxy';
var RootComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RootComponent, _super);
    function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, frameworkService, applicationParamsService, verifyService, stateMachine, sanitizer, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.localizationService = localizationService;
        _this.frmI18nSettingService = frmI18nSettingService;
        _this.frameworkService = frameworkService;
        _this.applicationParamsService = applicationParamsService;
        _this.verifyService = verifyService;
        _this.stateMachine = stateMachine;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.cls = 'f-page-root  ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.pageHeaderToolbarToolbarItems = [{
                "id": "button-add",
                "text": _this.langService.transform("button-add", _this.lang, "新增"),
                "resourceId": "button-add",
                "isDP": false,
                "class": "btn-primary",
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-edit",
                "text": _this.langService.transform("button-edit", _this.lang, "编辑"),
                "resourceId": "button-edit",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-view",
                "text": _this.langService.transform("button-view", _this.lang, "查看"),
                "resourceId": "button-view",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-delete",
                "text": _this.langService.transform("button-delete", _this.lang, "删除"),
                "resourceId": "button-delete",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "toolBarItem-1ra7",
                "text": _this.langService.transform("toolBarItem-1ra7", _this.lang, "发货"),
                "resourceId": "toolBarItem-1ra7",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }
        ];
        _this.pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
        _this.pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.sectionsToolbarStates = new BehaviorSubject({});
        _this.sectionsToolbarVisibleStates = new BehaviorSubject({});
        _this.querySchemeSection = {
            position: 'inHead',
            contents: []
        };
        _this.SectionqueryschemesectionMainTitle = _this.langService.transform("Section/query-scheme-section/mainTitle", _this.lang, "主标题");
        _this.SectionqueryschemesectionSubTitle = _this.langService.transform("Section/query-scheme-section/subTitle", _this.lang, "");
        _this.QuerySolutionqueryscheme1 = _this.langService.transform("query-scheme-1", _this.lang, "默认筛选方案");
        _this.fieldConfigsqueryscheme1 = [
            {
                "id": "733efd3c-f6e8-4531-9376-f75141601f7e",
                "labelCode": "ID",
                "code": "ID",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/733efd3c-f6e8-4531-9376-f75141601f7e", _this.lang, "主键"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/733efd3c-f6e8-4531-9376-f75141601f7e/placeHolder", _this.lang, ""),
                "control": { "id": "733efd3c-f6e8-4531-9376-f75141601f7e", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
            },
            {
                "id": "2482e064-3e32-4792-b5be-9fdf4cc79af4",
                "labelCode": "Version",
                "code": "Version",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/2482e064-3e32-4792-b5be-9fdf4cc79af4", _this.lang, "版本"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/2482e064-3e32-4792-b5be-9fdf4cc79af4/placeHolder", _this.lang, ""),
                "control": { "id": "2482e064-3e32-4792-b5be-9fdf4cc79af4", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
            },
            {
                "id": "767a620f-1ef5-4853-9790-fd32a7e95641",
                "labelCode": "OrderCode",
                "code": "OrderCode",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/767a620f-1ef5-4853-9790-fd32a7e95641", _this.lang, "订单编号"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/767a620f-1ef5-4853-9790-fd32a7e95641/placeHolder", _this.lang, ""),
                "control": { "id": "767a620f-1ef5-4853-9790-fd32a7e95641", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "96976ac9-3bb4-4663-8f10-887f7a17d914",
                "labelCode": "Merchant.Merchant",
                "code": "Merchant",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914", _this.lang, "商户"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/placeHolder", _this.lang, ""),
                "control": {
                    "controltype": "help",
                    "require": false,
                    "uri": "SaleOrder.merchant",
                    "textField": "merchantName",
                    "valueField": "id",
                    "idField": "id",
                    "helpId": "b610c446-71ea-4aed-bb9b-f46ccc45a556",
                    "displayType": "TreeList",
                    "loadTreeDataType": 'default',
                    "enableFullTree": false,
                    "editable": false,
                    "dialogTitle": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/control/help/dialogTitle", _this.lang, ""),
                    "singleSelect": true,
                    "enableCascade": false,
                    "cascadeStatus": "enable",
                    "pageSize": 20,
                    "pageList": "10,20,30,50,100",
                    "nosearch": false,
                    "expandLevel": -1,
                    "context": {
                        "enableExtendLoadMethod": false
                    },
                    "quickSelect": {
                        "enable": false,
                        "showMore": true,
                        "showItemsCount": 10
                    }
                }
            },
            {
                "id": "c0169d08-558e-45b7-a8c3-29f411eb25e8",
                "labelCode": "Merchant.Merchant_MerchantName",
                "code": "MerchantName",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/c0169d08-558e-45b7-a8c3-29f411eb25e8", _this.lang, "商户名称"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/c0169d08-558e-45b7-a8c3-29f411eb25e8/placeHolder", _this.lang, ""),
                "control": { "id": "c0169d08-558e-45b7-a8c3-29f411eb25e8", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "40871ebf-bd7e-4838-8ef2-836d45e805ef",
                "labelCode": "Merchant.Merchant_MerchantCode",
                "code": "MerchantCode",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/40871ebf-bd7e-4838-8ef2-836d45e805ef", _this.lang, "商户编号"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/40871ebf-bd7e-4838-8ef2-836d45e805ef/placeHolder", _this.lang, ""),
                "control": { "id": "40871ebf-bd7e-4838-8ef2-836d45e805ef", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "308bc30d-b0e8-4d30-855a-b50d3ed42a63",
                "labelCode": "OrderTime",
                "code": "OrderTime",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/308bc30d-b0e8-4d30-855a-b50d3ed42a63", _this.lang, "下单时间"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/308bc30d-b0e8-4d30-855a-b50d3ed42a63/placeHolder", _this.lang, ""),
                "control": { "id": "308bc30d-b0e8-4d30-855a-b50d3ed42a63", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "29a89f50-5554-4bb0-9046-03d5a5610358",
                "labelCode": "PayMethod",
                "code": "PayMethod",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358", _this.lang, "支付方式"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/placeHolder", _this.lang, ""),
                "control": {
                    "controltype": "dropdown",
                    "require": false,
                    "valueType": "1",
                    "multiSelect": false,
                    "enumValues": [
                        {
                            "value": "Cash",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/Cash", _this.lang, "现金")
                        },
                        {
                            "value": "AliPay",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/AliPay", _this.lang, "支付宝")
                        },
                        {
                            "value": "WeChat",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/WeChat", _this.lang, "微信支付")
                        },
                        {
                            "value": "UPay",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/UPay", _this.lang, "银联")
                        }
                    ]
                }
            },
            {
                "id": "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                "labelCode": "OrderPerson.OrderPerson",
                "code": "OrderPerson",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb", _this.lang, "下单人"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/placeHolder", _this.lang, ""),
                "control": {
                    "controltype": "help",
                    "require": false,
                    "uri": "SaleOrder.orderPerson",
                    "textField": "name",
                    "valueField": "id",
                    "idField": "id",
                    "helpId": "99891fee-285e-420d-841a-93e522af0c5a",
                    "displayType": "List",
                    "loadTreeDataType": 'default',
                    "enableFullTree": false,
                    "editable": false,
                    "dialogTitle": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/control/help/dialogTitle", _this.lang, ""),
                    "singleSelect": true,
                    "enableCascade": false,
                    "cascadeStatus": "enable",
                    "pageSize": 20,
                    "pageList": "10,20,30,50,100",
                    "nosearch": false,
                    "expandLevel": -1,
                    "context": {
                        "enableExtendLoadMethod": false
                    },
                    "quickSelect": {
                        "enable": false,
                        "showMore": true,
                        "showItemsCount": 10
                    }
                }
            },
            {
                "id": "a2bef0a2-4eff-4d83-af88-c8ff337f808e",
                "labelCode": "OrderPerson.OrderPerson_code",
                "code": "code",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/a2bef0a2-4eff-4d83-af88-c8ff337f808e", _this.lang, "编号"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/a2bef0a2-4eff-4d83-af88-c8ff337f808e/placeHolder", _this.lang, ""),
                "control": { "id": "a2bef0a2-4eff-4d83-af88-c8ff337f808e", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "4481a4c2-43d1-4211-b56b-16f265165340",
                "labelCode": "OrderPerson.OrderPerson_name",
                "code": "name",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/4481a4c2-43d1-4211-b56b-16f265165340", _this.lang, "名称"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/4481a4c2-43d1-4211-b56b-16f265165340/placeHolder", _this.lang, ""),
                "control": { "id": "4481a4c2-43d1-4211-b56b-16f265165340", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "866d4620-a685-4388-8ce1-9be5291dc38e",
                "labelCode": "Telephone",
                "code": "Telephone",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/866d4620-a685-4388-8ce1-9be5291dc38e", _this.lang, "联系电话"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/866d4620-a685-4388-8ce1-9be5291dc38e/placeHolder", _this.lang, ""),
                "control": { "id": "866d4620-a685-4388-8ce1-9be5291dc38e", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "11e5bd1a-1487-4031-b74a-3db20379c62d",
                "labelCode": "SendState",
                "code": "SendState",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d", _this.lang, "发货状态"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/placeHolder", _this.lang, ""),
                "control": {
                    "controltype": "dropdown",
                    "require": false,
                    "valueType": "1",
                    "multiSelect": false,
                    "enumValues": [
                        {
                            "value": "UnShipped",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/UnShipped", _this.lang, "未发货")
                        },
                        {
                            "value": "Shipped",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/Shipped", _this.lang, "已发货")
                        },
                        {
                            "value": "Done",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/Done", _this.lang, "已收货")
                        }
                    ]
                }
            },
            {
                "id": "743dc1bc-be9d-46e4-bd4c-36048d3b10a7",
                "labelCode": "Remark",
                "code": "Remark",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/743dc1bc-be9d-46e4-bd4c-36048d3b10a7", _this.lang, "备注"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/743dc1bc-be9d-46e4-bd4c-36048d3b10a7/placeHolder", _this.lang, ""),
                "control": { "id": "743dc1bc-be9d-46e4-bd4c-36048d3b10a7", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "cd60f924-00e3-49d1-b3f9-a20e437439f7",
                "labelCode": "TotalPrice",
                "code": "TotalPrice",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/cd60f924-00e3-49d1-b3f9-a20e437439f7", _this.lang, "订单金额"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/cd60f924-00e3-49d1-b3f9-a20e437439f7/placeHolder", _this.lang, ""),
                "control": { "id": "cd60f924-00e3-49d1-b3f9-a20e437439f7", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
            },
            {
                "id": "dadf3137-4061-41b5-aed2-bbc5866de901",
                "labelCode": "TotalDiscounts",
                "code": "TotalDiscounts",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/dadf3137-4061-41b5-aed2-bbc5866de901", _this.lang, "折扣优惠"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/dadf3137-4061-41b5-aed2-bbc5866de901/placeHolder", _this.lang, ""),
                "control": { "id": "dadf3137-4061-41b5-aed2-bbc5866de901", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
            },
            {
                "id": "6310d9f5-36da-4b43-8c21-5e32e23725ef",
                "labelCode": "ActualPay",
                "code": "ActualPay",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/6310d9f5-36da-4b43-8c21-5e32e23725ef", _this.lang, "合计实付"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/6310d9f5-36da-4b43-8c21-5e32e23725ef/placeHolder", _this.lang, ""),
                "control": { "id": "6310d9f5-36da-4b43-8c21-5e32e23725ef", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
            },
            {
                "id": "070516f9-8648-4811-8500-2263aa14f150",
                "labelCode": "OrderSource",
                "code": "OrderSource",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/070516f9-8648-4811-8500-2263aa14f150", _this.lang, "订单来源"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/070516f9-8648-4811-8500-2263aa14f150/placeHolder", _this.lang, ""),
                "control": { "id": "070516f9-8648-4811-8500-2263aa14f150", "controltype": "text", "require": false, "className": "" }
            }
        ];
        _this.presetFieldConfigsqueryscheme1 = [
            {
                "id": "96976ac9-3bb4-4663-8f10-887f7a17d914",
                "labelCode": "Merchant.Merchant",
                "code": "Merchant",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914", _this.lang, "商户"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/placeHolder", _this.lang, ""),
                "control": {
                    "controltype": "help",
                    "require": false,
                    "uri": "SaleOrder.merchant",
                    "textField": "merchantName",
                    "valueField": "id",
                    "idField": "id",
                    "helpId": "b610c446-71ea-4aed-bb9b-f46ccc45a556",
                    "displayType": "TreeList",
                    "loadTreeDataType": 'default',
                    "enableFullTree": false,
                    "editable": false,
                    "dialogTitle": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/control/help/dialogTitle", _this.lang, ""),
                    "singleSelect": true,
                    "enableCascade": false,
                    "cascadeStatus": "enable",
                    "pageSize": 20,
                    "pageList": "10,20,30,50,100",
                    "nosearch": false,
                    "expandLevel": -1,
                    "context": {
                        "enableExtendLoadMethod": false
                    },
                    "quickSelect": {
                        "enable": false,
                        "showMore": true,
                        "showItemsCount": 10
                    }
                }
            },
            {
                "id": "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                "labelCode": "OrderPerson.OrderPerson",
                "code": "OrderPerson",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb", _this.lang, "下单人"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/placeHolder", _this.lang, ""),
                "control": {
                    "controltype": "help",
                    "require": false,
                    "uri": "SaleOrder.orderPerson",
                    "textField": "name",
                    "valueField": "id",
                    "idField": "id",
                    "helpId": "99891fee-285e-420d-841a-93e522af0c5a",
                    "displayType": "List",
                    "loadTreeDataType": 'default',
                    "enableFullTree": false,
                    "editable": false,
                    "dialogTitle": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/control/help/dialogTitle", _this.lang, ""),
                    "singleSelect": true,
                    "enableCascade": false,
                    "cascadeStatus": "enable",
                    "pageSize": 20,
                    "pageList": "10,20,30,50,100",
                    "nosearch": false,
                    "expandLevel": -1,
                    "context": {
                        "enableExtendLoadMethod": false
                    },
                    "quickSelect": {
                        "enable": false,
                        "showMore": true,
                        "showItemsCount": 10
                    }
                }
            }
        ];
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        if (_this.frmI18nSettingService) {
            var i18nSetting = _this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach(function (item) {
                    _this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            }
            else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
        return _this;
    }
    RootComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            if (verifyInformations.length) {
                _this.verifyService.createVerify({
                    'parent': _this.rootElement,
                    'verifyList': verifyInformations,
                    'showType': 'all'
                });
            }
            else {
                _this.verifyService.clear();
            }
        });
        this.stateMachine.stateChange.subscribe(function () {
            var pageHeaderToolbarToolbarItemsstates = {
                'button-add': !_this.viewModel.stateMachine['canAdd'],
                'button-edit': !_this.viewModel.stateMachine['canEdit'],
                'button-view': !_this.viewModel.stateMachine['canView'],
                'button-delete': !_this.viewModel.stateMachine['canRemove'],
                'toolBarItem-1ra7': false,
            };
            _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        this.stateMachine.stateChange.subscribe(function () {
            var pageHeaderToolbarToolbarItemsvisibleStates = {
                'button-add': true,
                'button-edit': true,
                'button-view': true,
                'button-delete': true,
                'toolBarItem-1ra7': true,
            };
            _this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
        });
        this.pageHeaderToolbarToolbarItems.forEach(function (toolbarItem) {
            var transformText = _this.langService.transform(toolbarItem.resourceId, _this.lang, toolbarItem.text);
            if (transformText) {
                toolbarItem.text = transformText;
            }
        });
        this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, function () {
            _this.onFormLoad();
        });
    };
    RootComponent.prototype.ngAfterViewInit = function () {
    };
    RootComponent.prototype.ngOnDestroy = function () {
        // 增加表单的自我销毁
        this.context.dispose && this.context.dispose();
        this.context = null;
        this.subscription = null;
        this.declaration = null;
        this.wizardSer = null;
        this.keybindingService = null;
        this.langService = null;
        this.route = null;
        this.router = null;
        this.rootElement = null;
        this.localizationService = null;
        this.frmI18nSettingService = null;
        this.frameworkService = null;
        this.applicationParamsService = null;
        this.verifyService.clear();
        this.verifyService = null;
        this.stateMachine = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    RootComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    RootComponent.prototype.onFormLoad = function () {
        this.viewModel.Filter1();
    };
    RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
        switch (args.id) {
            case 'button-add':
                this.viewModel.Add1(args);
                break;
            case 'button-edit':
                this.viewModel.Edit1(args);
                break;
            case 'button-view':
                this.viewModel.View1(args);
                break;
            case 'button-delete':
                this.viewModel.Remove1(args);
                break;
            case 'toolBarItem-1ra7':
                this.viewModel.rootviewmodelsendGoods1(args);
                break;
        }
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], RootComponent.prototype, "cls", void 0);
    tslib_1.__decorate([
        ViewChild(ConditionDialogComponent),
        tslib_1.__metadata("design:type", ConditionDialogComponent)
    ], RootComponent.prototype, "conditionDialog", void 0);
    tslib_1.__decorate([
        ViewChild(QdpViewComponent),
        tslib_1.__metadata("design:type", QdpViewComponent)
    ], RootComponent.prototype, "qdpViewComponent", void 0);
    tslib_1.__decorate([
        ViewChild(QueryFrameworkLayoutComponent),
        tslib_1.__metadata("design:type", QueryFrameworkLayoutComponent)
    ], RootComponent.prototype, "queryFrameworkLayoutComponent", void 0);
    RootComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rootcomponent',
            templateUrl: './rootcomponent.html',
            styleUrls: ['./rootcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'root-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: SaleOrderRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                QDP_COMMAND_SERVICE_PROVIDERS,
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: RootViewmodelForm },
                { provide: StateMachine, useClass: RootViewmodelStateMachine },
                { provide: UIState, useClass: RootViewmodelUIState },
                SaleOrderListFrmControllerService1,
                FrameworkSessionService,
                UriService,
                SaleOrderProxy,
                SaleOrderRepository,
                { provide: ViewModel, useClass: RootViewmodel },
                { provide: Declaration, useClass: EventDeclaration },
                { provide: TranslateToken, useExisting: LangService },
                VerifyDetailService,
                { provide: WFSubmiteService, useClass: WFSubmiteService },
                { provide: CloudprintService, useClass: CloudprintService },
                { provide: WFFlowchartService, useClass: WFFlowchartService },
                FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS,
                FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS,
                FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS,
                AppContext,
                ComponentManagerService,
                { provide: PARAM_TYPE_TRANSFORM_TOKEN, useValue: false },
                { provide: FORM_ID, useValue: "ce692bc1-d105-47a6-a1d0-719863e2a602" },
                { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                { provide: CHANGE_SET_POLICY_TOKEN, useValue: 'valid' },
                { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Search1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: RemoveRows1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: View1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Filter1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelsendGoods1Handler, multi: true },
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [WizardService,
            KeybindingService,
            LangService,
            ActivatedRoute,
            Router,
            ElementRef,
            LocalizationService,
            FrmI18nSettingService,
            FrameworkService,
            ApplicationParamService,
            VerifyDetailService,
            StateMachine,
            DomSanitizer,
            Injector])
    ], RootComponent);
    return RootComponent;
}(FrameComponent));
export { RootComponent };
