
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';

import { FocusInvalidService } from '@farris/command-services';

import { EditorTypes } from '@farris/ui-datagrid-editors';
import { CalculationType, DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

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

@Component({
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
})
export class OrderdetailComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGrid_orderdetailDataGrid')
    dataGrid_orderdetailDataGrid: DatagridComponent;
    dataGrid_orderdetailColumns =[];

    @HostBinding('class')
    cls = 'f-struct-is-subgrid ';
    public viewModel: OrderdetailComponentViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
    @ViewChild(ConditionDialogComponent) conditionDialog: ConditionDialogComponent;
    @ViewChild(QdpViewComponent) qdpViewComponent: QdpViewComponent;
    @ViewChild(QueryFrameworkLayoutComponent) queryFrameworkLayoutComponent: QueryFrameworkLayoutComponent;
    constructor(
        private wizardSer: WizardService,
        private keybindingService: KeybindingService,
        private langService: LangService,
        private route: ActivatedRoute,
        private router: Router,
        private rootElement: ElementRef,
        private localizationService: LocalizationService,
        private frmI18nSettingService: FrmI18nSettingService,
        private focusInvalidService: FocusInvalidService,
        private farrisGridUtils: CommonUtils,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGrid_orderdetailDataGrid);
        });

        if (this.frmI18nSettingService) {
            const i18nSetting = this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach((item) => {
                    this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            } else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                this.enabledLanguageList.push({ "code": "en", "name": "English" });
                this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
    }
    ngOnInit() {
            
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach((keyBinding, method) => {
                this.keybindingService.register(keyBinding, () => {
                    return this.viewModel[method]();
                });
            });
        }
        this.dataGrid_orderdetailColumns =[
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
                            "mapFields": {'id':'goods.goods','goodsName':'goods.goods_GoodsName','goodsCode':'goods.goods_GoodsCode','specification':'specification','price':'price'},
                            "expandLevel":-1,
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
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
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
                        options: {"id":"goods_Goods_GoodsName_b110ddde_9lx1","title":"商品名称","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
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
                        options: {"id":"specification_63d2f314_or74","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
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
                        options: {"id":"quality_381e93a8_f1hx","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":0,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":0,"thousand":",","decimal":"."}}
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
                        options: {"id":"price_12e9f1a9_5v46","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":2,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":2,"thousand":",","decimal":"."}}
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
                        options: {"id":"amount_62e1cb4c_wdwb","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":2,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":2,"thousand":",","decimal":"."}}
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
                        options: {"id":"discountType_8004a7da_mkma","title":"下拉框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.COMBOLIST","editable":false,"idField":"value","enableClear":false,"textField":"name","nosearch":false,"maxLength":null,"uri":"","multiSelect":false,"data":[{"value": "none","name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/none", this.lang, "无折扣")},{"value": "dis","name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/dis", this.lang, "有折扣")}],"autoWidth":true}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "enum",
                        "options":
                        {
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
                                }]
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
                        options: {"id":"discount_0658848e_3sjx","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":2,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":2,"thousand":",","decimal":"."}}
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
                        options: {"id":"actualAmount_7136b6c1_0q3z","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":2,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":2,"thousand":",","decimal":"."}}
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
                        options: {"id":"remark_f9d55622_tpbx","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":100}
                    },
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                }
            ]
        ]; 
        this.viewModel.dataGrid_orderdetailColumns= this.dataGrid_orderdetailColumns;
        this.viewModel.dataGridColumnsName= "dataGrid_orderdetailColumns";
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
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

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    dataGrid_orderdetaillineNumberTitle = this.langService.transform("DataGrid/dataGrid_orderdetail/lineNumberTitle", this.lang, "");
}