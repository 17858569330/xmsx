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
import { DataGridComponentViewmodel } from '../../viewmodels/datagridcomponentviewmodel';
import { GoodsStockRepository } from '../../models/goodsstockrepository';
import { LangService } from '../../lang/lang-pipe';
import { DataGridComponentViewmodelForm } from '../../viewmodels/form/datagridcomponentviewmodelform';
import { DataGridComponentViewmodelUIState } from '../../viewmodels/uistate/datagridcomponentviewmodeluistate';
import { ChangePage1Handler } from '../../viewmodels/handlers/changepage1handler';
import { rootviewmodelopenBatchEditDialog1Handler } from '../../viewmodels/handlers/rootviewmodelopenbatcheditdialog1handler';
var DataGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponent, _super);
    function DataGridComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
        _this.dataGridColumns = [];
        _this.cls = 'f-struct-wrapper f-utils-fill-flex-column ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.SectiondatagridsectionMainTitle = _this.langService.transform("Section/data-grid-section/mainTitle", _this.lang, "");
        _this.SectiondatagridsectionSubTitle = _this.langService.transform("Section/data-grid-section/subTitle", _this.lang, "");
        _this.dataGridlineNumberTitle = _this.langService.transform("DataGrid/dataGrid/lineNumberTitle", _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGridDataGrid);
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
    DataGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGridColumns = [
            [
                {
                    id: 'merchantID_MerchantID_MerchantName_79ed0464_zoer',
                    field: 'merchantID.merchantID_MerchantName',
                    width: 120,
                    title: this.langService.transform("merchantID_MerchantID_MerchantName_79ed0464_zoer", this.lang, "商户名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    enableBatchEdit: true,
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.LOOKUP,
                        options: {
                            "type": 'EditorTypes.LOOKUP',
                            "uri": 'GoodsStock.merchantID_MerchantID_MerchantName',
                            "readonly": false,
                            "idField": 'id',
                            "singleSelect": true,
                            "textField": 'merchantName',
                            "valueField": 'id',
                            "pagination": null,
                            "pageSize": 20,
                            "pageIndex": null,
                            "displayType": 'TreeList',
                            "mapFields": { 'merchantName': 'merchantID.merchantID_MerchantName', 'parentMerchantID.parentMerchantID_MerchantName': 'merchantID.merchantID_ParentMerchantID_MerchantName', 'id': 'merchantID.merchantID' },
                            "expandLevel": -1,
                            "showNavigation": true,
                            "cascadeStatus": 'enable',
                            "navTreeToList": false,
                            "treeToList": false,
                            "editable": false,
                            "enableCascade": false,
                            "quickSelect": {
                                "enable": false,
                                "showItemsCount": 10,
                                "showMore": true
                            },
                            "useFavorite": true,
                            "enableFullTree": false,
                            "enableClear": true,
                            "loadTreeDataType": 'default',
                            "useTip": false,
                            "treeInfo": { 'onlySelectLeaf': 'default' },
                            "selectFirstInNav": false,
                            "loadDataWhenOpen": true,
                            "title": this.langService.transform("GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/LookupEdit/merchantID_MerchantID_MerchantName_79ed0464_8y3y/dialogTitle", this.lang, ""),
                            "nosearch": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "isRecordSize": false,
                            treeTableOptions: {
                                enableContextMenu: false
                            },
                            "viewType": 'text'
                        }
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
                    id: 'merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik',
                    field: 'merchantID.merchantID_ParentMerchantID_MerchantName',
                    width: 120,
                    title: this.langService.transform("merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik", this.lang, "上游商户/经销商"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    enableBatchEdit: true,
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824", "title": "商户名称", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'goodsID_GoodsID_GoodsName_ade04dc1_1mgy',
                    field: 'goodsID.goodsID_GoodsName',
                    width: 120,
                    title: this.langService.transform("goodsID_GoodsID_GoodsName_ade04dc1_1mgy", this.lang, "商品名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    enableBatchEdit: true,
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "goodsID_GoodsID_GoodsName_ade04dc1_89ef", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'goodsID_GoodsID_Specification_d208e853_2hno',
                    field: 'goodsID.goodsID_Specification',
                    width: 120,
                    title: this.langService.transform("goodsID_GoodsID_Specification_d208e853_2hno", this.lang, "规格型号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    enableBatchEdit: true,
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "goodsID_GoodsID_Specification_d208e853_2i8n", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'goodsID_GoodsID_Price_bc6384c0_fjgd',
                    field: 'goodsID.goodsID_Price',
                    width: 120,
                    title: this.langService.transform("goodsID_GoodsID_Price_bc6384c0_fjgd", this.lang, "单价"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    enableBatchEdit: true,
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "goodsID_GoodsID_Price_bc6384c0_fq6p", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    id: 'stockNum_f152e4b2_fhhp',
                    field: 'stockNum',
                    width: 120,
                    title: this.langService.transform("stockNum_f152e4b2_fhhp", this.lang, "当前库存量"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    enableBatchEdit: true,
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "stockNum_f152e4b2_k1ri", "title": "当前库存量", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                }
            ]
        ];
        this.viewModel.dataGridColumns = this.dataGridColumns;
        this.viewModel.dataGridColumnsName = "dataGridColumns";
        this.onFormLoad();
    };
    DataGridComponent.prototype.ngAfterViewInit = function () {
    };
    DataGridComponent.prototype.ngOnDestroy = function () {
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
    DataGridComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    DataGridComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGridDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], DataGridComponent.prototype, "dataGridDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], DataGridComponent.prototype, "cls", void 0);
    DataGridComponent = tslib_1.__decorate([
        Component({
            selector: 'app-datagridcomponent',
            templateUrl: './datagridcomponent.html',
            styleUrls: ['./datagridcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'data-grid-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: GoodsStockRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: DataGridComponentViewmodelForm },
                { provide: UIState, useClass: DataGridComponentViewmodelUIState },
                { provide: ViewModel, useClass: DataGridComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangePage1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelopenBatchEditDialog1Handler, multi: true },
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
    ], DataGridComponent);
    return DataGridComponent;
}(FrameComponent));
export { DataGridComponent };
