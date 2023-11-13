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
import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { OrderdetailComponentViewmodel } from '../../viewmodels/orderdetailcomponentviewmodel';
import { SaleOrderRepository } from '../../models/saleorderrepository';
import { LangService } from '../../lang/lang-pipe';
import { OrderdetailComponentViewmodelForm } from '../../viewmodels/form/orderdetailcomponentviewmodelform';
import { OrderdetailComponentViewmodelUIState } from '../../viewmodels/uistate/orderdetailcomponentviewmodeluistate';
import { orderdetailAddItem1Handler } from '../../viewmodels/handlers/orderdetailadditem1handler';
import { orderdetailRemoveItem1Handler } from '../../viewmodels/handlers/orderdetailremoveitem1handler';
var OrderdetailComponent = /** @class */ (function (_super) {
    tslib_1.__extends(OrderdetailComponent, _super);
    function OrderdetailComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
        _this.dataGrid_orderdetailColumns = [];
        _this.cls = 'f-struct-is-subgrid ';
        _this.lang = "";
        _this.size = {};
        _this.enabledLanguageList = [];
        _this.tabsToolbarStates = new BehaviorSubject({});
        _this.tabsToolbarVisibleStates = new BehaviorSubject({});
        _this.dataGrid_orderdetaillineNumberTitle = _this.langService.transform("DataGrid/dataGrid_orderdetail/lineNumberTitle", _this.lang, "");
        _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
            _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_orderdetailDataGrid);
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
    OrderdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                _this.keybindingService.register(keyBinding, function () {
                    return _this.viewModel[method]();
                });
            });
        }
        this.dataGrid_orderdetailColumns = [
            [
                {
                    id: 'goods_d3829541_0hbn',
                    field: 'goods.goods',
                    width: 120,
                    title: this.langService.transform("goods_d3829541_0hbn", this.lang, "商品"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.LOOKUP,
                        options: {
                            "type": 'EditorTypes.LOOKUP',
                            "uri": 'OrderDetail.goods',
                            "readonly": false,
                            "idField": 'id',
                            "singleSelect": true,
                            "textField": 'goodsName',
                            "valueField": 'id',
                            "pagination": null,
                            "pageSize": 20,
                            "pageIndex": null,
                            "displayType": 'List',
                            "mapFields": { 'id': 'goods.goods', 'goodsName': 'goods.goods_GoodsName', 'goodsCode': 'goods.goods_GoodsCode', 'specification': 'specification', 'price': 'price' },
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
                            "selectFirstInNav": false,
                            "loadDataWhenOpen": true,
                            "title": this.langService.transform("GridField/goods_d3829541_0hbn/editor/LookupEdit/goods_d3829541_zhpt/dialogTitle", this.lang, ""),
                            "nosearch": false,
                            "context": {
                                "enableExtendLoadMethod": true
                            },
                            "isRecordSize": false,
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
                    id: 'goods_Goods_GoodsName_b110ddde_h94h',
                    field: 'goods.goods_GoodsName',
                    width: 120,
                    title: this.langService.transform("goods_Goods_GoodsName_b110ddde_h94h", this.lang, "商品名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "goods_Goods_GoodsName_b110ddde_9lx1", "title": "商品名称", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'specification_63d2f314_8ks8',
                    field: 'specification',
                    width: 120,
                    title: this.langService.transform("specification_63d2f314_8ks8", this.lang, "规格型号"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "specification_63d2f314_or74", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                    id: 'quality_381e93a8_lzmz',
                    field: 'quality',
                    width: 120,
                    title: this.langService.transform("quality_381e93a8_lzmz", this.lang, "数量"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "quality_381e93a8_f1hx", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 0, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    id: 'price_12e9f1a9_0oqq',
                    field: 'price',
                    width: 120,
                    title: this.langService.transform("price_12e9f1a9_0oqq", this.lang, "标准单价"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "price_12e9f1a9_5v46", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    id: 'amount_62e1cb4c_sk4g',
                    field: 'amount',
                    width: 120,
                    title: this.langService.transform("amount_62e1cb4c_sk4g", this.lang, "金额"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "amount_62e1cb4c_wdwb", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    id: 'discountType_8004a7da_qc99',
                    field: 'discountType',
                    width: 120,
                    title: this.langService.transform("discountType_8004a7da_qc99", this.lang, "折扣类型"),
                    dataType: 'enum',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.COMBOLIST,
                        options: { "id": "discountType_8004a7da_mkma", "title": "下拉框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.COMBOLIST", "editable": false, "idField": "value", "enableClear": false, "textField": "name", "nosearch": false, "maxLength": null, "uri": "", "multiSelect": false, "data": [{ "value": "none", "name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/none", this.lang, "无折扣") }, { "value": "dis", "name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/dis", this.lang, "有折扣") }], "autoWidth": true }
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
                    formatter: {
                        "type": "enum",
                        "options": {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "none",
                                    "name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/none", this.lang, "无折扣")
                                },
                                {
                                    "value": "dis",
                                    "name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/dis", this.lang, "有折扣")
                                }
                            ]
                        }
                    }
                },
                {
                    id: 'discount_0658848e_zq1k',
                    field: 'discount',
                    width: 120,
                    title: this.langService.transform("discount_0658848e_zq1k", this.lang, "折扣金额"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "discount_0658848e_3sjx", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    id: 'actualAmount_7136b6c1_m0aj',
                    field: 'actualAmount',
                    width: 120,
                    title: this.langService.transform("actualAmount_7136b6c1_m0aj", this.lang, "实际结算金额"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: { "id": "actualAmount_7136b6c1_0q3z", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                    id: 'remark_f9d55622_0rpu',
                    field: 'remark',
                    width: 120,
                    title: this.langService.transform("remark_f9d55622_0rpu", this.lang, "备注"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: { "id": "remark_f9d55622_tpbx", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
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
        this.viewModel.dataGrid_orderdetailColumns = this.dataGrid_orderdetailColumns;
        this.viewModel.dataGridColumnsName = "dataGrid_orderdetailColumns";
        this.onFormLoad();
    };
    OrderdetailComponent.prototype.ngAfterViewInit = function () {
    };
    OrderdetailComponent.prototype.ngOnDestroy = function () {
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
    OrderdetailComponent.prototype.handleSizeChange = function (size) {
        this.size = size;
    };
    OrderdetailComponent.prototype.onFormLoad = function () {
    };
    tslib_1.__decorate([
        ViewChild('dataGrid_orderdetailDataGrid'),
        tslib_1.__metadata("design:type", DatagridComponent)
    ], OrderdetailComponent.prototype, "dataGrid_orderdetailDataGrid", void 0);
    tslib_1.__decorate([
        HostBinding('class'),
        tslib_1.__metadata("design:type", Object)
    ], OrderdetailComponent.prototype, "cls", void 0);
    tslib_1.__decorate([
        ViewChild(ConditionDialogComponent),
        tslib_1.__metadata("design:type", ConditionDialogComponent)
    ], OrderdetailComponent.prototype, "conditionDialog", void 0);
    tslib_1.__decorate([
        ViewChild(QdpViewComponent),
        tslib_1.__metadata("design:type", QdpViewComponent)
    ], OrderdetailComponent.prototype, "qdpViewComponent", void 0);
    tslib_1.__decorate([
        ViewChild(QueryFrameworkLayoutComponent),
        tslib_1.__metadata("design:type", QueryFrameworkLayoutComponent)
    ], OrderdetailComponent.prototype, "queryFrameworkLayoutComponent", void 0);
    OrderdetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-orderdetailcomponent',
            templateUrl: './orderdetailcomponent.html',
            styleUrls: ['./orderdetailcomponent.scss'],
            providers: [
                FARRIS_DEVKIT_FRAME_PROVIDERS,
                FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                { provide: FRAME_ID, useValue: 'orderdetail-component' },
                { provide: BindingData, useClass: BindingData },
                { provide: Repository, useExisting: SaleOrderRepository },
                LangService,
                { provide: NAMESPACE, useValue: '' },
                QDP_COMMAND_SERVICE_PROVIDERS,
                { provide: ServerSideToken, useClass: BefLookupRestService },
                { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                { provide: Form, useClass: OrderdetailComponentViewmodelForm },
                { provide: UIState, useClass: OrderdetailComponentViewmodelUIState },
                { provide: ViewModel, useClass: OrderdetailComponentViewmodel },
                { provide: EXCEPTION_HANDLER, useValue: null },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: orderdetailAddItem1Handler, multi: true },
                { provide: COMMAND_HANDLERS_TOKEN, useClass: orderdetailRemoveItem1Handler, multi: true },
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
    ], OrderdetailComponent);
    return OrderdetailComponent;
}(FrameComponent));
export { OrderdetailComponent };
