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
import { GoodsRepository } from '../../models/goodsrepository';
import { LangService } from '../../lang/lang-pipe';
import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelStateMachine } from '../../viewmodels/statemachine/rootviewmodelstatemachine';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { dataImport1Handler } from '../../viewmodels/handlers/dataimport1handler';
import { dataExport1Handler } from '../../viewmodels/handlers/dataexport1handler';
import { listDataExport1Handler } from '../../viewmodels/handlers/listdataexport1handler';
import { rootviewmodelDataExport1Handler } from '../../viewmodels/handlers/rootviewmodeldataexport1handler';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';
import { GoodsProxy } from '../../models/goodsproxy';
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
                "id": "button-save",
                "text": _this.langService.transform("button-save", _this.lang, "保存"),
                "resourceId": "button-save",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-cancel",
                "text": _this.langService.transform("button-cancel", _this.lang, "取消"),
                "resourceId": "button-cancel",
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
                "id": "button-data-import",
                "text": _this.langService.transform("button-data-import", _this.lang, "导入"),
                "resourceId": "button-data-import",
                "isDP": false,
                "tipsEnable": false,
                "icon": "",
                "children": []
            }, {
                "id": "button-data-export",
                "text": _this.langService.transform("button-data-export", _this.lang, "导出"),
                "resourceId": "button-data-export",
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
                'button-save': !_this.viewModel.stateMachine['canSave'],
                'button-cancel': !_this.viewModel.stateMachine['canCancel'],
                'button-delete': !_this.viewModel.stateMachine['canRemove'],
                'button-data-import': false,
                'button-data-export': false,
            };
            _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        this.stateMachine.stateChange.subscribe(function () {
            var pageHeaderToolbarToolbarItemsvisibleStates = {
                'button-add': true,
                'button-edit': true,
                'button-save': true,
                'button-cancel': true,
                'button-delete': true,
                'button-data-import': true,
                'button-data-export': true,
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
    };
    RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
        switch (args.id) {
            case 'button-add':
                this.viewModel.dataGridComponentViewmodel.add1(args);
                break;
            case 'button-edit':
                this.viewModel.detailFormComponentViewmodel.edit1(args);
                break;
            case 'button-save':
                this.viewModel.detailFormComponentViewmodel.save1(args);
                break;
            case 'button-cancel':
                this.viewModel.detailFormComponentViewmodel.cancel1(args);
                break;
            case 'button-delete':
                this.viewModel.dataGridComponentViewmodel.remove1(args);
                break;
            case 'button-data-import':
                this.viewModel.dataImport1(args);
                break;
            case 'button-data-export':
                this.viewModel.rootviewmodelDataExport1(args);
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
                { provide: Repository, useExisting: GoodsRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: RootViewmodelForm },
                { provide: StateMachine, useClass: RootViewmodelStateMachine },
                { provide: UIState, useClass: RootViewmodelUIState },
                DIP_DATAIE_SERVICE,
                FrameworkSessionService,
                UriService,
                GoodsProxy,
                GoodsRepository,
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
                { provide: FORM_ID, useValue: "9d9e5460-9b9c-46b6-b30b-650724a5d768" },
                { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                { provide: CHANGE_SET_POLICY_TOKEN, useValue: 'valid' },
                { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: dataImport1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: dataExport1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: listDataExport1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelDataExport1Handler, multi: true },
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
