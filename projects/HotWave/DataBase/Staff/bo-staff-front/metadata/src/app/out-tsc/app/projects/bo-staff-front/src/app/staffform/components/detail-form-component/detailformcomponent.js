import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { LookupGridComponent } from '@farris/ui-lookup';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { DetailFormComponentViewmodel } from '../../viewmodels/detailformcomponentviewmodel';
import { StaffRepository } from '../../models/staffrepository';
import { LangService } from '../../lang/lang-pipe';
import { DetailFormComponentViewmodelForm } from '../../viewmodels/form/detailformcomponentviewmodelform';
import { DetailFormComponentViewmodelUIState } from '../../viewmodels/uistate/detailformcomponentviewmodeluistate';
import { edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { save1Handler } from '../../viewmodels/handlers/save1handler';
import { cancel1Handler } from '../../viewmodels/handlers/cancel1handler';
var DetailFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponent, _super);
    function DetailFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, componentManagerService, sanitizer, injector) {
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
        _this.componentManagerService = componentManagerService;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.cls = 'f-struct-wrapper ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectiondetailformsectionMainTitle = _this.langService.transform("Section/detail-form-section/mainTitle", _this.lang, "基本信息");
        _this.SectiondetailformsectionSubTitle = _this.langService.transform("Section/detail-form-section/subTitle", _this.lang, "");
        _this.LookupEditmerchant91fbe3b16p9zDialogTitle = _this.langService.transform("LookupEdit/merchant_91fbe3b1_6p9z/dialogTitle", _this.lang, "");
        _this.merchant_91fbe3b1_6p9z_PlaceHolder = _this.langService.transform("LookupEdit/merchant_91fbe3b1_6p9z/placeHolder", _this.lang, "");
        _this.merchant_91fbe3b1_6p9zQuickSelect = {
            "enable": false,
            "showItemsCount": 10,
            "showMore": true
        };
        _this.name_77b424b2_jp3d_PlaceHolder = _this.langService.transform("TextBox/name_77b424b2_jp3d/placeHolder", _this.lang, "");
        _this.code_95ef2878_w1gd_PlaceHolder = _this.langService.transform("TextBox/code_95ef2878_w1gd/placeHolder", _this.lang, "");
        _this.telephone_TelephoneNumber_fdb78443_na4c_PlaceHolder = _this.langService.transform("TextBox/telephone_TelephoneNumber_fdb78443_na4c/placeHolder", _this.lang, "");
        _this.mailbox_Email_58c17137_hc82_PlaceHolder = _this.langService.transform("TextBox/mailbox_Email_58c17137_hc82/placeHolder", _this.lang, "");
        _this.idNumber_02e51691_6ivb_PlaceHolder = _this.langService.transform("TextBox/idNumber_02e51691_6ivb/placeHolder", _this.lang, "");
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
    DetailFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.onFormLoad();
    };
    DetailFormComponent.prototype.ngAfterViewInit = function () {
        this.componentManagerService.appendControl('merchant_91fbe3b1_6p9z', this.merchant_91fbe3b1_6p9z);
    };
    DetailFormComponent.prototype.ngOnDestroy = function () {
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
    DetailFormComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    DetailFormComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('merchant_91fbe3b1_6p9z'),
        tslib_1.__metadata("design:type", LookupGridComponent)
    ], DetailFormComponent.prototype, "merchant_91fbe3b1_6p9z", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], DetailFormComponent.prototype, "cls", void 0);
    DetailFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-detailformcomponent',
            templateUrl: './detailformcomponent.html',
            styleUrls: ['./detailformcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'detail-form-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: StaffRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: DetailFormComponentViewmodelForm },
                { provide: UIState, useClass: DetailFormComponentViewmodelUIState },
                { provide: ViewModel, useClass: DetailFormComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: edit1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: save1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: cancel1Handler, multi: true },
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
            ComponentManagerService,
            DomSanitizer,
            Injector])
    ], DetailFormComponent);
    return DetailFormComponent;
}(FrameComponent));
export { DetailFormComponent };
