
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

import { PurchasedetailComponentViewmodel } from '../../viewmodels/purchasedetailcomponentviewmodel';
import { PurchaseOrderRepository } from '../../models/purchaseorderrepository';
import { LangService } from '../../lang/lang-pipe';

import { PurchasedetailComponentViewmodelForm } from '../../viewmodels/form/purchasedetailcomponentviewmodelform';
import { PurchasedetailComponentViewmodelUIState } from '../../viewmodels/uistate/purchasedetailcomponentviewmodeluistate';
import { purchasedetailAddItem1Handler } from '../../viewmodels/handlers/purchasedetailadditem1handler';
import { purchasedetailRemoveItem1Handler } from '../../viewmodels/handlers/purchasedetailremoveitem1handler';

@Component({
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
})
export class PurchasedetailComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGrid_purchasedetailDataGrid')
    dataGrid_purchasedetailDataGrid: DatagridComponent;
    dataGrid_purchasedetailColumns =[];

    @HostBinding('class')
    cls = 'f-struct-is-subgrid ';
    public viewModel: PurchasedetailComponentViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
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
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGrid_purchasedetailDataGrid);
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
        this.dataGrid_purchasedetailColumns =[
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
                        options: {"id":"goods_Goods_GoodsName_053fe342_88dg","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
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
                        options: {"id":"goods_Goods_Specification_7a80c1a7_09tw","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
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
                        options: {"id":"quality_b81a8d03_4uk1","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":0,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
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
                        options: {"id":"price_9ca3c686_bmjk","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":2,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
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
                        options: {"id":"amount_95e56af1_mesz","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":2,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
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
                        options: {"id":"remark_668d79eb_3slt","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":100}
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
        this.viewModel.dataGrid_purchasedetailColumns= this.dataGrid_purchasedetailColumns;
        this.viewModel.dataGridColumnsName= "dataGrid_purchasedetailColumns";
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
    dataGrid_purchasedetaillineNumberTitle = this.langService.transform("DataGrid/dataGrid_purchasedetail/lineNumberTitle", this.lang, "");
}