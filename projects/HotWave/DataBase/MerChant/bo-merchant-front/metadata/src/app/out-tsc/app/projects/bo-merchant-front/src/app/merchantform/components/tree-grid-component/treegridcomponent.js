import * as tslib_1 from "tslib";
import { Component, Injector, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { TreeGridComponentViewmodel } from '../../viewmodels/treegridcomponentviewmodel';
import { MerChantRepository } from '../../models/merchantrepository';
import { LangService } from '../../lang/lang-pipe';
import { TreeGridComponentViewmodelForm } from '../../viewmodels/form/treegridcomponentviewmodelform';
import { TreeGridComponentViewmodelUIState } from '../../viewmodels/uistate/treegridcomponentviewmodeluistate';
import { LoadTree1Handler } from '../../viewmodels/handlers/loadtree1handler';
import { LoadCard1Handler } from '../../viewmodels/handlers/loadcard1handler';
import { AddSibling1Handler } from '../../viewmodels/handlers/addsibling1handler';
import { AddChild1Handler } from '../../viewmodels/handlers/addchild1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';
var TreeGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TreeGridComponent, _super);
    function TreeGridComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, sanitizer, injector) {
        var _this = _super.call(this, injector) || this;
        _this.wizardSer = wizardSer;
        _this.keybindingService = keybindingService;
        _this.langService = langService;
        _this.route = route;
        _this.router = router;
        _this.rootElement = rootElement;
        _this.localizationService = localizationService;
        _this.frmI18nSettingService = frmI18nSettingService;
        _this.focusInvalidService = focusInvalidService;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.treeGridColumns = [];
        _this.cls = 'f-struct-wrapper  f-utils-fill-flex-column ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectiontreegridsectionMainTitle = _this.langService.transform("Section/tree-grid-section/mainTitle", _this.lang, "");
        _this.SectiontreegridsectionSubTitle = _this.langService.transform("Section/tree-grid-section/subTitle", _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusInvalidInput(verifyInformations, _this.rootElement);
        });
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
    TreeGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.treeGridColumns = [
            {
                "id": "merchantName_c80a3305_atir",
                "title": this.langService.transform("merchantName_c80a3305_atir", this.lang, "商户名称"),
                "dataType": "string",
                "visible": true,
                "field": "merchantName",
                "width": 100,
                "sortable": false,
                "formatter": {},
                "halign": "left",
                "align": "left"
            },
            {
                "id": "merchantCode_decf103d_nbo2",
                "title": this.langService.transform("merchantCode_decf103d_nbo2", this.lang, "商户编号"),
                "dataType": "string",
                "visible": true,
                "field": "merchantCode",
                "width": 100,
                "sortable": false,
                "formatter": {},
                "halign": "left",
                "align": "left"
            }
        ];
        this.onFormLoad();
    };
    TreeGridComponent.prototype.ngAfterViewInit = function () {
    };
    TreeGridComponent.prototype.ngOnDestroy = function () {
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
        this.focusInvalidService = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    TreeGridComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    TreeGridComponent.prototype.onFormLoad = function () {
        this.viewModel.LoadTree1();
    };
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], TreeGridComponent.prototype, "cls", void 0);
    TreeGridComponent = tslib_1.__decorate([
        Component({
            selector: 'app-treegridcomponent',
            templateUrl: './treegridcomponent.html',
            styleUrls: ['./treegridcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'tree-grid-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: MerChantRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: TreeGridComponentViewmodelForm },
                { provide: UIState, useClass: TreeGridComponentViewmodelUIState },
                DIP_DATAIE_SERVICE,
                { provide: ViewModel, useClass: TreeGridComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadTree1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadCard1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: AddSibling1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: AddChild1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
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
            FocusInvalidService,
            DomSanitizer,
            Injector])
    ], TreeGridComponent);
    return TreeGridComponent;
}(FrameComponent));
export { TreeGridComponent };
