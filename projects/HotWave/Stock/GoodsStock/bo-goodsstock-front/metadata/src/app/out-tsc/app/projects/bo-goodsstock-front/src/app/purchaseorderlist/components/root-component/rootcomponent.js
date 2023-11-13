import * as tslib_1 from "tslib";
import { Component, Injector, HostBinding, ElementRef } from '@angular/core';
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
import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { PurchaseOrderRepository } from '../../models/purchaseorderrepository';
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
import { submitWithBizDefKey1Handler } from '../../viewmodels/handlers/submitwithbizdefkey1handler';
import { cancelSubmitWithDataId1Handler } from '../../viewmodels/handlers/cancelsubmitwithdataid1handler';
import { PurchaseOrderProxy } from '../../models/purchaseorderproxy';
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
                "id": "button-approve",
                "text": _this.langService.transform("button-approve", _this.lang, "提交审批"),
                "resourceId": "button-approve",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-cancel-approve",
                "text": _this.langService.transform("button-cancel-approve", _this.lang, "取消提交审批"),
                "resourceId": "button-cancel-approve",
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
                "id": "b3d11341-0101-468f-ae3f-40c76c0f06b0",
                "labelCode": "BillStatus.BillState",
                "code": "BillState",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0", _this.lang, "状态"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/placeHolder", _this.lang, ""),
                "control": {
                    "controltype": "dropdown",
                    "require": false,
                    "valueType": "1",
                    "multiSelect": false,
                    "enumValues": [
                        {
                            "value": "Billing",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing", _this.lang, "制单")
                        },
                        {
                            "value": "SubmitApproval",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval", _this.lang, "提交审批")
                        },
                        {
                            "value": "Approved",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved", _this.lang, "审批通过")
                        },
                        {
                            "value": "ApprovalNotPassed",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed", _this.lang, "审批不通过")
                        }
                    ]
                }
            },
            {
                "id": "173a6f07-f50e-44db-810d-6c441b941fbc",
                "labelCode": "OrderCode",
                "code": "OrderCode",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc", _this.lang, "采购编号"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc/placeHolder", _this.lang, ""),
                "control": { "id": "173a6f07-f50e-44db-810d-6c441b941fbc", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "b31c76b0-ccdf-42b3-add5-ee7a7894a050",
                "labelCode": "Merchant.Merchant_MerchantName",
                "code": "MerchantName",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/b31c76b0-ccdf-42b3-add5-ee7a7894a050", _this.lang, "商户名称"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/b31c76b0-ccdf-42b3-add5-ee7a7894a050/placeHolder", _this.lang, ""),
                "control": { "id": "b31c76b0-ccdf-42b3-add5-ee7a7894a050", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "c296a2af-7a51-4e24-bb77-dcf4743c1848",
                "labelCode": "Merchant.Merchant_ParentMerchantID_MerchantName",
                "code": "MerchantName(ParentMerchantID)",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/c296a2af-7a51-4e24-bb77-dcf4743c1848", _this.lang, "商户名称"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/c296a2af-7a51-4e24-bb77-dcf4743c1848/placeHolder", _this.lang, ""),
                "control": { "id": "c296a2af-7a51-4e24-bb77-dcf4743c1848", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "1bcac9ae-e281-4528-a702-5b8604dc08ab",
                "labelCode": "Merchant.Merchant_ParentMerchantID_Adminstrator",
                "code": "Adminstrator(ParentMerchantID)",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/1bcac9ae-e281-4528-a702-5b8604dc08ab", _this.lang, "管理员"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/1bcac9ae-e281-4528-a702-5b8604dc08ab/placeHolder", _this.lang, ""),
                "control": { "id": "1bcac9ae-e281-4528-a702-5b8604dc08ab", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "a5f6d271-cbfe-4199-86e0-48ec73d31ac1",
                "labelCode": "ExpectedTime",
                "code": "ExpectedTime",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/a5f6d271-cbfe-4199-86e0-48ec73d31ac1", _this.lang, "预计送达时间"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/a5f6d271-cbfe-4199-86e0-48ec73d31ac1/placeHolder", _this.lang, ""),
                "control": { "id": "a5f6d271-cbfe-4199-86e0-48ec73d31ac1", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
            },
            {
                "id": "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                "labelCode": "OrderTime",
                "code": "OrderTime",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6", _this.lang, "下单时间"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6/placeHolder", _this.lang, ""),
                "control": { "id": "5fb59eb7-9663-4702-9ac9-73611f2710b6", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
            },
            {
                "id": "f462f519-1918-4218-be9f-fadfa0d2031b",
                "labelCode": "OrderPerson.OrderPerson",
                "code": "OrderPerson",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/f462f519-1918-4218-be9f-fadfa0d2031b", _this.lang, "下单人"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/f462f519-1918-4218-be9f-fadfa0d2031b/placeHolder", _this.lang, ""),
                "control": { "id": "f462f519-1918-4218-be9f-fadfa0d2031b", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "4e89a276-7aef-4598-8935-47104b273da7",
                "labelCode": "OrderPerson.OrderPerson_name",
                "code": "name",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/4e89a276-7aef-4598-8935-47104b273da7", _this.lang, "名称"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/4e89a276-7aef-4598-8935-47104b273da7/placeHolder", _this.lang, ""),
                "control": { "id": "4e89a276-7aef-4598-8935-47104b273da7", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "460dc9cc-4652-4024-8a8c-5e7eb9c01288",
                "labelCode": "TotalPrice",
                "code": "TotalPrice",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/460dc9cc-4652-4024-8a8c-5e7eb9c01288", _this.lang, "采购金额"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/460dc9cc-4652-4024-8a8c-5e7eb9c01288/placeHolder", _this.lang, ""),
                "control": { "id": "460dc9cc-4652-4024-8a8c-5e7eb9c01288", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
            },
            {
                "id": "a4978aa8-6491-46fc-8c95-ef7419836f99",
                "labelCode": "Remark",
                "code": "Remark",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/a4978aa8-6491-46fc-8c95-ef7419836f99", _this.lang, "备注"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/a4978aa8-6491-46fc-8c95-ef7419836f99/placeHolder", _this.lang, ""),
                "control": { "id": "a4978aa8-6491-46fc-8c95-ef7419836f99", "controltype": "text", "require": false, "className": "" }
            }
        ];
        _this.presetFieldConfigsqueryscheme1 = [
            {
                "id": "173a6f07-f50e-44db-810d-6c441b941fbc",
                "labelCode": "OrderCode",
                "code": "OrderCode",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc", _this.lang, "采购编号"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc/placeHolder", _this.lang, ""),
                "control": { "id": "173a6f07-f50e-44db-810d-6c441b941fbc", "controltype": "text", "require": false, "className": "" }
            },
            {
                "id": "5fb59eb7-9663-4702-9ac9-73611f2710b6",
                "labelCode": "OrderTime",
                "code": "OrderTime",
                "name": _this.langService.transform("QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6", _this.lang, "下单时间"),
                "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6/placeHolder", _this.lang, ""),
                "control": { "id": "5fb59eb7-9663-4702-9ac9-73611f2710b6", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
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
                'button-approve': !_this.viewModel.stateMachine['canApprove'],
                'button-cancel-approve': !_this.viewModel.stateMachine['canCancelApprove'],
            };
            _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        this.stateMachine.stateChange.subscribe(function () {
            var pageHeaderToolbarToolbarItemsvisibleStates = {
                'button-add': true,
                'button-edit': true,
                'button-view': true,
                'button-delete': true,
                'button-approve': true,
                'button-cancel-approve': true,
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
            case 'button-approve':
                this.viewModel.submitWithBizDefKey1(args);
                break;
            case 'button-cancel-approve':
                this.viewModel.cancelSubmitWithDataId1(args);
                break;
        }
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], RootComponent.prototype, "cls", void 0);
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
                { provide: Repository, useExisting: PurchaseOrderRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: RootViewmodelForm },
                { provide: StateMachine, useClass: RootViewmodelStateMachine },
                { provide: UIState, useClass: RootViewmodelUIState },
                FrameworkSessionService,
                UriService,
                PurchaseOrderProxy,
                PurchaseOrderRepository,
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
                { provide: FORM_ID, useValue: "644ee3ae-010d-4974-aeff-5018a0898985" },
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
                { provide: COMMAND_HANDLERS_TOKEN, useClass: submitWithBizDefKey1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: cancelSubmitWithDataId1Handler, multi: true },
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
