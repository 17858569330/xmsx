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
import { DetailFormComponentViewmodel } from '../../viewmodels/detailformcomponentviewmodel';
import { MerChantRepository } from '../../models/merchantrepository';
import { LangService } from '../../lang/lang-pipe';
import { DetailFormComponentViewmodelForm } from '../../viewmodels/form/detailformcomponentviewmodelform';
import { DetailFormComponentViewmodelUIState } from '../../viewmodels/uistate/detailformcomponentviewmodeluistate';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Save1Handler } from '../../viewmodels/handlers/save1handler';
import { Cancel1Handler } from '../../viewmodels/handlers/cancel1handler';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';
var DetailFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponent, _super);
    function DetailFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, sanitizer, injector) {
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
        _this.cls = 'f-struct-wrapper ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.FieldSetTitle25e4424a960848439a81efb1caca83fc = _this.langService.transform("25e4424a-9608-4843-9a81-efb1caca83fc", _this.lang, "基本信息");
        _this.FieldSetCollapseText25e4424a960848439a81efb1caca83fc = _this.langService.transform("FieldSet/25e4424a-9608-4843-9a81-efb1caca83fc/collapseText", _this.lang, "");
        _this.FieldSetExpandText25e4424a960848439a81efb1caca83fc = _this.langService.transform("FieldSet/25e4424a-9608-4843-9a81-efb1caca83fc/expandText", _this.lang, "");
        _this.FieldSetTitle37f46890a2784ae18ef6b7bd8e377cfb = _this.langService.transform("37f46890-a278-4ae1-8ef6-b7bd8e377cfb", _this.lang, "企业信息");
        _this.FieldSetCollapseText37f46890a2784ae18ef6b7bd8e377cfb = _this.langService.transform("FieldSet/37f46890-a278-4ae1-8ef6-b7bd8e377cfb/collapseText", _this.lang, "");
        _this.FieldSetExpandText37f46890a2784ae18ef6b7bd8e377cfb = _this.langService.transform("FieldSet/37f46890-a278-4ae1-8ef6-b7bd8e377cfb/expandText", _this.lang, "");
        _this.FieldSetTitle04dee6bd2a7b4793b0a27edea32b23dc = _this.langService.transform("04dee6bd-2a7b-4793-b0a2-7edea32b23dc", _this.lang, "管理员");
        _this.FieldSetCollapseText04dee6bd2a7b4793b0a27edea32b23dc = _this.langService.transform("FieldSet/04dee6bd-2a7b-4793-b0a2-7edea32b23dc/collapseText", _this.lang, "");
        _this.FieldSetExpandText04dee6bd2a7b4793b0a27edea32b23dc = _this.langService.transform("FieldSet/04dee6bd-2a7b-4793-b0a2-7edea32b23dc/expandText", _this.lang, "");
        _this.SectiondetailformsectionMainTitle = _this.langService.transform("Section/detail-form-section/mainTitle", _this.lang, "基本信息");
        _this.SectiondetailformsectionSubTitle = _this.langService.transform("Section/detail-form-section/subTitle", _this.lang, "");
        _this.companyType_34a5b660_aq4uEnumData = [
            {
                "name": _this.langService.transform("EnumField/companyType_34a5b660_aq4u/enumData/qy", _this.lang, "企业"),
                "value": "qy"
            },
            {
                "name": _this.langService.transform("EnumField/companyType_34a5b660_aq4u/enumData/gt", _this.lang, "个体工商户"),
                "value": "gt"
            },
            {
                "name": _this.langService.transform("EnumField/companyType_34a5b660_aq4u/enumData/gr", _this.lang, "个人"),
                "value": "gr"
            }
        ];
        _this.companyType_34a5b660_aq4u_PlaceHolder = _this.langService.transform("EnumField/companyType_34a5b660_aq4u/placeHolder", _this.lang, "");
        _this.merchantType_2e73fcca_2h7wEnumData = [
            {
                "name": _this.langService.transform("EnumField/merchantType_2e73fcca_2h7w/enumData/rz", _this.lang, "入驻商户"),
                "value": "rz"
            },
            {
                "name": _this.langService.transform("EnumField/merchantType_2e73fcca_2h7w/enumData/jx", _this.lang, "经销商"),
                "value": "jx"
            }
        ];
        _this.merchantType_2e73fcca_2h7w_PlaceHolder = _this.langService.transform("EnumField/merchantType_2e73fcca_2h7w/placeHolder", _this.lang, "");
        _this.merchantName_c80a3305_jl53_PlaceHolder = _this.langService.transform("TextBox/merchantName_c80a3305_jl53/placeHolder", _this.lang, "");
        _this.merchantCode_decf103d_sgwn_PlaceHolder = _this.langService.transform("TextBox/merchantCode_decf103d_sgwn/placeHolder", _this.lang, "");
        _this.parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh_PlaceHolder = _this.langService.transform("TextBox/parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh/placeHolder", _this.lang, "");
        _this.realName_ef543f0d_9x4a_PlaceHolder = _this.langService.transform("TextBox/realName_ef543f0d_9x4a/placeHolder", _this.lang, "");
        _this.address_ce9be2ba_di1t_PlaceHolder = _this.langService.transform("TextBox/address_ce9be2ba_di1t/placeHolder", _this.lang, "");
        _this.remark_19c6ed5f_de82_PlaceHolder = _this.langService.transform("TextBox/remark_19c6ed5f_de82/placeHolder", _this.lang, "");
        _this.fullName_1a36d5d9_rlsi_PlaceHolder = _this.langService.transform("TextBox/fullName_1a36d5d9_rlsi/placeHolder", _this.lang, "");
        _this.businessLicense_14ec2d6c_97z6_PlaceHolder = _this.langService.transform("TextBox/businessLicense_14ec2d6c_97z6/placeHolder", _this.lang, "");
        _this.email_5eeacb83_5dxr_PlaceHolder = _this.langService.transform("TextBox/email_5eeacb83_5dxr/placeHolder", _this.lang, "");
        _this.telephone_ab7face1_3ghr_PlaceHolder = _this.langService.transform("TextBox/telephone_ab7face1_3ghr/placeHolder", _this.lang, "");
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
                { provide: Repository, useExisting: MerChantRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: DetailFormComponentViewmodelForm },
                { provide: UIState, useClass: DetailFormComponentViewmodelUIState },
                DIP_DATAIE_SERVICE,
                { provide: ViewModel, useClass: DetailFormComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Save1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: Cancel1Handler, multi: true },
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
    ], DetailFormComponent);
    return DetailFormComponent;
}(FrameComponent));
export { DetailFormComponent };
