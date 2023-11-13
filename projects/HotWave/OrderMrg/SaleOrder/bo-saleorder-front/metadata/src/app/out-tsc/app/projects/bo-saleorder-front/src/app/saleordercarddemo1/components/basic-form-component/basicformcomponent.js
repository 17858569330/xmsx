import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
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
import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { SaleOrderRepository } from '../../models/saleorderrepository';
import { LangService } from '../../lang/lang-pipe';
import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';
var BasicFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormComponent, _super);
    function BasicFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, componentManagerService, sanitizer, injector) {
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
        _this.FieldSetTitle3f39ffed72a34484a6794c6ddb9f3913 = _this.langService.transform("3f39ffed-72a3-4484-a679-4c6ddb9f3913", _this.lang, "基本信息");
        _this.FieldSetCollapseText3f39ffed72a34484a6794c6ddb9f3913 = _this.langService.transform("FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/collapseText", _this.lang, "");
        _this.FieldSetExpandText3f39ffed72a34484a6794c6ddb9f3913 = _this.langService.transform("FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/expandText", _this.lang, "");
        _this.FieldSetTitle59cd9ebd181749ecb9c4cc38d330585c = _this.langService.transform("59cd9ebd-1817-49ec-b9c4-cc38d330585c", _this.lang, "支付信息");
        _this.FieldSetCollapseText59cd9ebd181749ecb9c4cc38d330585c = _this.langService.transform("FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/collapseText", _this.lang, "");
        _this.FieldSetExpandText59cd9ebd181749ecb9c4cc38d330585c = _this.langService.transform("FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/expandText", _this.lang, "");
        _this.SectionbasicformsectionMainTitle = _this.langService.transform("Section/basic-form-section/mainTitle", _this.lang, "基本信息");
        _this.SectionbasicformsectionSubTitle = _this.langService.transform("Section/basic-form-section/subTitle", _this.lang, "");
        _this.LookupEditmerchantMerchantMerchantName147deab41zy9DialogTitle = _this.langService.transform("LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/dialogTitle", _this.lang, "");
        _this.merchant_Merchant_MerchantName_147deab4_1zy9_PlaceHolder = _this.langService.transform("LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/placeHolder", _this.lang, "");
        _this.merchant_Merchant_MerchantName_147deab4_1zy9QuickSelect = {
            "enable": false,
            "showItemsCount": 10,
            "showMore": true
        };
        _this.LookupEditorderPerson771cf8b532o4DialogTitle = _this.langService.transform("LookupEdit/orderPerson_771cf8b5_32o4/dialogTitle", _this.lang, "");
        _this.orderPerson_771cf8b5_32o4_PlaceHolder = _this.langService.transform("LookupEdit/orderPerson_771cf8b5_32o4/placeHolder", _this.lang, "");
        _this.orderPerson_771cf8b5_32o4QuickSelect = {
            "enable": false,
            "showItemsCount": 10,
            "showMore": true
        };
        _this.totalPrice_559ae1d0_tdrx_PlaceHolder = _this.langService.transform("NumericBox/totalPrice_559ae1d0_tdrx/placeHolder", _this.lang, "");
        _this.totalPrice559ae1d0TdrxTextOptions = {
            "type": "number",
            "useThousands": true,
            "precision": 2,
        };
        _this.totalDiscounts_878ff42f_djm9_PlaceHolder = _this.langService.transform("NumericBox/totalDiscounts_878ff42f_djm9/placeHolder", _this.lang, "");
        _this.totalDiscounts878ff42fDjm9TextOptions = {
            "type": "number",
            "useThousands": true,
            "precision": 2,
        };
        _this.actualPay_090e17ef_mvgt_PlaceHolder = _this.langService.transform("NumericBox/actualPay_090e17ef_mvgt/placeHolder", _this.lang, "");
        _this.actualPay090e17efMvgtTextOptions = {
            "type": "number",
            "useThousands": true,
            "precision": 2,
        };
        _this.payMethod_ba5f52c1_xz4xEnumData = [
            {
                "name": _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/Cash", _this.lang, "现金"),
                "value": "Cash"
            },
            {
                "name": _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/AliPay", _this.lang, "支付宝"),
                "value": "AliPay"
            },
            {
                "name": _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/WeChat", _this.lang, "微信支付"),
                "value": "WeChat"
            },
            {
                "name": _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/UPay", _this.lang, "银联"),
                "value": "UPay"
            }
        ];
        _this.payMethod_ba5f52c1_xz4x_PlaceHolder = _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/placeHolder", _this.lang, "");
        _this.sendState_3584b1dc_xv9jEnumData = [
            {
                "name": _this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/UnShipped", _this.lang, "未发货"),
                "value": "UnShipped"
            },
            {
                "name": _this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/Shipped", _this.lang, "已发货"),
                "value": "Shipped"
            },
            {
                "name": _this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/Done", _this.lang, "已收货"),
                "value": "Done"
            }
        ];
        _this.sendState_3584b1dc_xv9j_PlaceHolder = _this.langService.transform("EnumField/sendState_3584b1dc_xv9j/placeHolder", _this.lang, "");
        _this.orderCode_1d7fb675_wqcn_PlaceHolder = _this.langService.transform("TextBox/orderCode_1d7fb675_wqcn/placeHolder", _this.lang, "");
        _this.orderPerson_OrderPerson_name_676aa1fa_yg9q_PlaceHolder = _this.langService.transform("TextBox/orderPerson_OrderPerson_name_676aa1fa_yg9q/placeHolder", _this.lang, "");
        _this.orderTime_e0e86794_fc6z_PlaceHolder = _this.langService.transform("TextBox/orderTime_e0e86794_fc6z/placeHolder", _this.lang, "");
        _this.telephone_a8621f05_4hyo_PlaceHolder = _this.langService.transform("TextBox/telephone_a8621f05_4hyo/placeHolder", _this.lang, "");
        _this.remark_71281e54_dqeo_PlaceHolder = _this.langService.transform("TextBox/remark_71281e54_dqeo/placeHolder", _this.lang, "");
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
    BasicFormComponent.prototype.ngOnInit = function () {
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
    BasicFormComponent.prototype.ngAfterViewInit = function () {
        this.componentManagerService.appendControl('merchant_Merchant_MerchantName_147deab4_1zy9', this.merchant_Merchant_MerchantName_147deab4_1zy9);
        this.componentManagerService.appendControl('orderPerson_771cf8b5_32o4', this.orderPerson_771cf8b5_32o4);
    };
    BasicFormComponent.prototype.ngOnDestroy = function () {
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
    BasicFormComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    BasicFormComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('merchant_Merchant_MerchantName_147deab4_1zy9'),
        tslib_1.__metadata("design:type", LookupGridComponent)
    ], BasicFormComponent.prototype, "merchant_Merchant_MerchantName_147deab4_1zy9", void 0);
    tslib_1.__decorate([
        ViewChild('orderPerson_771cf8b5_32o4'),
        tslib_1.__metadata("design:type", LookupGridComponent)
    ], BasicFormComponent.prototype, "orderPerson_771cf8b5_32o4", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], BasicFormComponent.prototype, "cls", void 0);
    tslib_1.__decorate([
        ViewChild(ConditionDialogComponent),
        tslib_1.__metadata("design:type", ConditionDialogComponent)
    ], BasicFormComponent.prototype, "conditionDialog", void 0);
    tslib_1.__decorate([
        ViewChild(QdpViewComponent),
        tslib_1.__metadata("design:type", QdpViewComponent)
    ], BasicFormComponent.prototype, "qdpViewComponent", void 0);
    tslib_1.__decorate([
        ViewChild(QueryFrameworkLayoutComponent),
        tslib_1.__metadata("design:type", QueryFrameworkLayoutComponent)
    ], BasicFormComponent.prototype, "queryFrameworkLayoutComponent", void 0);
    BasicFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-basicformcomponent',
            templateUrl: './basicformcomponent.html',
            styleUrls: ['./basicformcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'basic-form-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: SaleOrderRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                QDP_COMMAND_SERVICE_PROVIDERS,
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: Form, useClass: BasicFormViewmodelForm },
                { provide: UIState, useClass: BasicFormViewmodelUIState },
                { provide: ViewModel, useClass: BasicFormViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
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
    ], BasicFormComponent);
    return BasicFormComponent;
}(FrameComponent));
export { BasicFormComponent };
