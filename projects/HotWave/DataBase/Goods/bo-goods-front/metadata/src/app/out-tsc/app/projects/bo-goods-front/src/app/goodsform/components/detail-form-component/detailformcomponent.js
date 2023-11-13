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
import { GoodsRepository } from '../../models/goodsrepository';
import { LangService } from '../../lang/lang-pipe';
import { DetailFormComponentViewmodelForm } from '../../viewmodels/form/detailformcomponentviewmodelform';
import { DetailFormComponentViewmodelUIState } from '../../viewmodels/uistate/detailformcomponentviewmodeluistate';
import { edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { save1Handler } from '../../viewmodels/handlers/save1handler';
import { cancel1Handler } from '../../viewmodels/handlers/cancel1handler';
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
        _this.SectiondetailformsectionMainTitle = _this.langService.transform("Section/detail-form-section/mainTitle", _this.lang, "基本信息");
        _this.SectiondetailformsectionSubTitle = _this.langService.transform("Section/detail-form-section/subTitle", _this.lang, "");
        _this.price_d0345408_4pk3_PlaceHolder = _this.langService.transform("NumericBox/price_d0345408_4pk3/placeHolder", _this.lang, "");
        _this.priceD03454084pk3TextOptions = {
            "type": "number",
            "useThousands": true,
            "precision": 2,
        };
        _this.number_cff57161_7eok_PlaceHolder = _this.langService.transform("NumericBox/number_cff57161_7eok/placeHolder", _this.lang, "");
        _this.numberCff571617eokTextOptions = {
            "type": "number",
            "useThousands": true,
            "precision": 0,
        };
        _this.goodsName_f5c45c50_1xh8_PlaceHolder = _this.langService.transform("TextBox/goodsName_f5c45c50_1xh8/placeHolder", _this.lang, "");
        _this.goodsCode_68f83985_ou4c_PlaceHolder = _this.langService.transform("TextBox/goodsCode_68f83985_ou4c/placeHolder", _this.lang, "");
        _this.specification_d87a107d_kxuw_PlaceHolder = _this.langService.transform("TextBox/specification_d87a107d_kxuw/placeHolder", _this.lang, "");
        _this.category_54897081_hal5_PlaceHolder = _this.langService.transform("TextBox/category_54897081_hal5/placeHolder", _this.lang, "");
        _this.remark_1477fc42_atby_PlaceHolder = _this.langService.transform("TextBox/remark_1477fc42_atby/placeHolder", _this.lang, "");
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
                { provide: Repository, useExisting: GoodsRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: DetailFormComponentViewmodelForm },
                { provide: UIState, useClass: DetailFormComponentViewmodelUIState },
                DIP_DATAIE_SERVICE,
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
            DomSanitizer,
            Injector])
    ], DetailFormComponent);
    return DetailFormComponent;
}(FrameComponent));
export { DetailFormComponent };
