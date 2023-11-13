
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

import { LookupGridComponent } from '@farris/ui-lookup';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { SaleOrderRepository } from '../../models/saleorderrepository';
import { LangService } from '../../lang/lang-pipe';

import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';

@Component({
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
})
export class BasicFormComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('merchant_Merchant_MerchantName_147deab4_1zy9')
    merchant_Merchant_MerchantName_147deab4_1zy9: LookupGridComponent;
            
    @ViewChild('orderPerson_771cf8b5_32o4')
    orderPerson_771cf8b5_32o4: LookupGridComponent;
            

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: BasicFormViewmodel;
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
        private componentManagerService: ComponentManagerService,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusInvalidInput(verifyInformations, this.rootElement);
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
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
        this.componentManagerService.appendControl('merchant_Merchant_MerchantName_147deab4_1zy9', this.merchant_Merchant_MerchantName_147deab4_1zy9);
        this.componentManagerService.appendControl('orderPerson_771cf8b5_32o4', this.orderPerson_771cf8b5_32o4);
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
    FieldSetTitle3f39ffed72a34484a6794c6ddb9f3913 = this.langService.transform("3f39ffed-72a3-4484-a679-4c6ddb9f3913", this.lang, "基本信息");
    FieldSetCollapseText3f39ffed72a34484a6794c6ddb9f3913 = this.langService.transform("FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/collapseText", this.lang, "");
    FieldSetExpandText3f39ffed72a34484a6794c6ddb9f3913 = this.langService.transform("FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/expandText", this.lang, "");
    FieldSetTitle59cd9ebd181749ecb9c4cc38d330585c = this.langService.transform("59cd9ebd-1817-49ec-b9c4-cc38d330585c", this.lang, "支付信息");
    FieldSetCollapseText59cd9ebd181749ecb9c4cc38d330585c = this.langService.transform("FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/collapseText", this.lang, "");
    FieldSetExpandText59cd9ebd181749ecb9c4cc38d330585c = this.langService.transform("FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/expandText", this.lang, "");
    SectionbasicformsectionMainTitle = this.langService.transform("Section/basic-form-section/mainTitle", this.lang, "基本信息");
    SectionbasicformsectionSubTitle = this.langService.transform("Section/basic-form-section/subTitle", this.lang, "");
    LookupEditmerchantMerchantMerchantName147deab41zy9DialogTitle = this.langService.transform("LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/dialogTitle", this.lang, "");
    merchant_Merchant_MerchantName_147deab4_1zy9_PlaceHolder = this.langService.transform("LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/placeHolder", this.lang, "");
    merchant_Merchant_MerchantName_147deab4_1zy9QuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }
    LookupEditorderPerson771cf8b532o4DialogTitle = this.langService.transform("LookupEdit/orderPerson_771cf8b5_32o4/dialogTitle", this.lang, "");
    orderPerson_771cf8b5_32o4_PlaceHolder = this.langService.transform("LookupEdit/orderPerson_771cf8b5_32o4/placeHolder", this.lang, "");
    orderPerson_771cf8b5_32o4QuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }

    totalPrice_559ae1d0_tdrx_PlaceHolder = this.langService.transform("NumericBox/totalPrice_559ae1d0_tdrx/placeHolder", this.lang, "");
    totalPrice559ae1d0TdrxTextOptions = {
        "type": "number",
        "useThousands": true,
        "precision": 2,
    }
    totalDiscounts_878ff42f_djm9_PlaceHolder = this.langService.transform("NumericBox/totalDiscounts_878ff42f_djm9/placeHolder", this.lang, "");
    totalDiscounts878ff42fDjm9TextOptions = {
        "type": "number",
        "useThousands": true,
        "precision": 2,
    }
    actualPay_090e17ef_mvgt_PlaceHolder = this.langService.transform("NumericBox/actualPay_090e17ef_mvgt/placeHolder", this.lang, "");
    actualPay090e17efMvgtTextOptions = {
        "type": "number",
        "useThousands": true,
        "precision": 2,
    }
    payMethod_ba5f52c1_xz4xEnumData = [
        {
            "name": this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/Cash", this.lang, "现金"),
            "value": "Cash"
        },
        {
            "name": this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/AliPay", this.lang, "支付宝"),
            "value": "AliPay"
        },
        {
            "name": this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/WeChat", this.lang, "微信支付"),
            "value": "WeChat"
        },
        {
            "name": this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/UPay", this.lang, "银联"),
            "value": "UPay"
        }
    ];
    payMethod_ba5f52c1_xz4x_PlaceHolder = this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/placeHolder", this.lang, "");
    sendState_3584b1dc_xv9jEnumData = [
        {
            "name": this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/UnShipped", this.lang, "未发货"),
            "value": "UnShipped"
        },
        {
            "name": this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/Shipped", this.lang, "已发货"),
            "value": "Shipped"
        },
        {
            "name": this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/Done", this.lang, "已收货"),
            "value": "Done"
        }
    ];
    sendState_3584b1dc_xv9j_PlaceHolder = this.langService.transform("EnumField/sendState_3584b1dc_xv9j/placeHolder", this.lang, "");
    orderCode_1d7fb675_wqcn_PlaceHolder = this.langService.transform("TextBox/orderCode_1d7fb675_wqcn/placeHolder", this.lang, "");
    orderPerson_OrderPerson_name_676aa1fa_yg9q_PlaceHolder = this.langService.transform("TextBox/orderPerson_OrderPerson_name_676aa1fa_yg9q/placeHolder", this.lang, "");
    orderTime_e0e86794_fc6z_PlaceHolder = this.langService.transform("TextBox/orderTime_e0e86794_fc6z/placeHolder", this.lang, "");
    telephone_a8621f05_4hyo_PlaceHolder = this.langService.transform("TextBox/telephone_a8621f05_4hyo/placeHolder", this.lang, "");
    remark_71281e54_dqeo_PlaceHolder = this.langService.transform("TextBox/remark_71281e54_dqeo/placeHolder", this.lang, "");
}