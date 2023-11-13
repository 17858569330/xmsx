import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Form, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, BindingData, Repository, UIState, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';
import { EditorTypes } from '@farris/ui-datagrid-editors';
import { DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { PurchasedetailComponentViewmodel } from '../../viewmodels/purchasedetailcomponentviewmodel';
import { PurchaseOrderRepository } from '../../models/purchaseorderrepository';
import { LangService } from '../../lang/lang-pipe';
import { PurchasedetailComponentViewmodelForm } from '../../viewmodels/form/purchasedetailcomponentviewmodelform';
import { PurchasedetailComponentViewmodelUIState } from '../../viewmodels/uistate/purchasedetailcomponentviewmodeluistate';
import { purchasedetailAddItem1Handler } from '../../viewmodels/handlers/purchasedetailadditem1handler';
import { purchasedetailRemoveItem1Handler } from '../../viewmodels/handlers/purchasedetailremoveitem1handler';
var PurchasedetailComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PurchasedetailComponent, _super);
    function PurchasedetailComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
        _this.farrisGridUtils = farrisGridUtils;
        _this.sanitizer = sanitizer;
        _this.injector = injector;
        _this.dataGrid_purchasedetailColumns = [];
        _this.cls = 'f-struct-is-subgrid ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.dataGrid_purchasedetaillineNumberTitle = _this.langService.transform("DataGrid/dataGrid_purchasedetail/lineNumberTitle", _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_purchasedetailDataGrid);
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
    PurchasedetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGrid_purchasedetailColumns = [
            [
                {
                    id: 'goods_Goods_GoodsName_053fe342_cike',
                    field: 'goods.goods_GoodsName',
                    width: 120,
                    title: this.langService.transform("goods_Goods_GoodsName_053fe342_cike", this.lang, "商品名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "goods_Goods_GoodsName_053fe342_88dg", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'goods_Goods_Specification_7a80c1a7_p7jl',
                    field: 'goods.goods_Specification',
                    width: 120,
                    title: this.langService.transform("goods_Goods_Specification_7a80c1a7_p7jl", this.lang, "规格型号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "goods_Goods_Specification_7a80c1a7_09tw", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'quality_b81a8d03_d8r9',
                    field: 'quality',
                    width: 120,
                    title: this.langService.transform("quality_b81a8d03_d8r9", this.lang, "采购数量"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "quality_b81a8d03_4uk1", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 0, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: { "type": "number", "options": { "precision": 0, "thousand": ",", "decimal": "." } }
                },
                {
                    id: 'price_9ca3c686_362q',
                    field: 'price',
                    width: 120,
                    title: this.langService.transform("price_9ca3c686_362q", this.lang, "采购单价"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "price_9ca3c686_bmjk", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "decimal": "." } }
                },
                {
                    id: 'amount_95e56af1_2k0y',
                    field: 'amount',
                    width: 120,
                    title: this.langService.transform("amount_95e56af1_2k0y", this.lang, "采购小计"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "amount_95e56af1_mesz", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "decimal": "." } }
                },
                {
                    id: 'remark_668d79eb_fyk9',
                    field: 'remark',
                    width: 120,
                    title: this.langService.transform("remark_668d79eb_fyk9", this.lang, "备注"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "remark_668d79eb_3slt", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
                    },
                    sortable: true,
                    footer: {
                        options: {},
                    },
                    groupFooter: {
                        options: {},
                        formatter: { "type": "none" },
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                }
            ]
        ];
        this.viewModel.dataGrid_purchasedetailColumns = this.dataGrid_purchasedetailColumns;
        this.viewModel.dataGridColumnsName = "dataGrid_purchasedetailColumns";
        this.onFormLoad();
    };
    PurchasedetailComponent.prototype.ngAfterViewInit = function () {
    };
    PurchasedetailComponent.prototype.ngOnDestroy = function () {
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
        this.farrisGridUtils = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];
    };
    PurchasedetailComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    PurchasedetailComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGrid_purchasedetailDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], PurchasedetailComponent.prototype, "dataGrid_purchasedetailDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], PurchasedetailComponent.prototype, "cls", void 0);
    PurchasedetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-purchasedetailcomponent',
            templateUrl: './purchasedetailcomponent.html',
            styleUrls: ['./purchasedetailcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'purchasedetail-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: PurchaseOrderRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: PurchasedetailComponentViewmodelForm },
                { provide: UIState, useClass: PurchasedetailComponentViewmodelUIState },
                { provide: ViewModel, useClass: PurchasedetailComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: purchasedetailAddItem1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: purchasedetailRemoveItem1Handler, multi: true },
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
            CommonUtils,
            DomSanitizer,
            Injector])
    ], PurchasedetailComponent);
    return PurchasedetailComponent;
}(FrameComponent));
export { PurchasedetailComponent };
