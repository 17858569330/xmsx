
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

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { DetailFormComponentViewmodel } from '../../viewmodels/detailformcomponentviewmodel';
import { MerChantRepository } from '../../models/merchantrepository';
import { LangService } from '../../lang/lang-pipe';

import { DetailFormComponentViewmodelForm } from '../../viewmodels/form/detailformcomponentviewmodelform';
import { DetailFormComponentViewmodelUIState } from '../../viewmodels/uistate/detailformcomponentviewmodeluistate';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Save1Handler } from '../../viewmodels/handlers/save1handler';
import { Cancel1Handler } from '../../viewmodels/handlers/cancel1handler';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';

@Component({
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
})
export class DetailFormComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: DetailFormComponentViewmodel;
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
    FieldSetTitle25e4424a960848439a81efb1caca83fc = this.langService.transform("25e4424a-9608-4843-9a81-efb1caca83fc", this.lang, "基本信息");
    FieldSetCollapseText25e4424a960848439a81efb1caca83fc = this.langService.transform("FieldSet/25e4424a-9608-4843-9a81-efb1caca83fc/collapseText", this.lang, "");
    FieldSetExpandText25e4424a960848439a81efb1caca83fc = this.langService.transform("FieldSet/25e4424a-9608-4843-9a81-efb1caca83fc/expandText", this.lang, "");
    FieldSetTitle37f46890a2784ae18ef6b7bd8e377cfb = this.langService.transform("37f46890-a278-4ae1-8ef6-b7bd8e377cfb", this.lang, "企业信息");
    FieldSetCollapseText37f46890a2784ae18ef6b7bd8e377cfb = this.langService.transform("FieldSet/37f46890-a278-4ae1-8ef6-b7bd8e377cfb/collapseText", this.lang, "");
    FieldSetExpandText37f46890a2784ae18ef6b7bd8e377cfb = this.langService.transform("FieldSet/37f46890-a278-4ae1-8ef6-b7bd8e377cfb/expandText", this.lang, "");
    FieldSetTitle04dee6bd2a7b4793b0a27edea32b23dc = this.langService.transform("04dee6bd-2a7b-4793-b0a2-7edea32b23dc", this.lang, "管理员");
    FieldSetCollapseText04dee6bd2a7b4793b0a27edea32b23dc = this.langService.transform("FieldSet/04dee6bd-2a7b-4793-b0a2-7edea32b23dc/collapseText", this.lang, "");
    FieldSetExpandText04dee6bd2a7b4793b0a27edea32b23dc = this.langService.transform("FieldSet/04dee6bd-2a7b-4793-b0a2-7edea32b23dc/expandText", this.lang, "");
    SectiondetailformsectionMainTitle = this.langService.transform("Section/detail-form-section/mainTitle", this.lang, "基本信息");
    SectiondetailformsectionSubTitle = this.langService.transform("Section/detail-form-section/subTitle", this.lang, "");
    companyType_34a5b660_aq4uEnumData = [
        {
            "name": this.langService.transform("EnumField/companyType_34a5b660_aq4u/enumData/qy", this.lang, "企业"),
            "value": "qy"
        },
        {
            "name": this.langService.transform("EnumField/companyType_34a5b660_aq4u/enumData/gt", this.lang, "个体工商户"),
            "value": "gt"
        },
        {
            "name": this.langService.transform("EnumField/companyType_34a5b660_aq4u/enumData/gr", this.lang, "个人"),
            "value": "gr"
        }
    ];
    companyType_34a5b660_aq4u_PlaceHolder = this.langService.transform("EnumField/companyType_34a5b660_aq4u/placeHolder", this.lang, "");
    merchantType_2e73fcca_2h7wEnumData = [
        {
            "name": this.langService.transform("EnumField/merchantType_2e73fcca_2h7w/enumData/rz", this.lang, "入驻商户"),
            "value": "rz"
        },
        {
            "name": this.langService.transform("EnumField/merchantType_2e73fcca_2h7w/enumData/jx", this.lang, "经销商"),
            "value": "jx"
        }
    ];
    merchantType_2e73fcca_2h7w_PlaceHolder = this.langService.transform("EnumField/merchantType_2e73fcca_2h7w/placeHolder", this.lang, "");
    merchantName_c80a3305_jl53_PlaceHolder = this.langService.transform("TextBox/merchantName_c80a3305_jl53/placeHolder", this.lang, "");
    merchantCode_decf103d_sgwn_PlaceHolder = this.langService.transform("TextBox/merchantCode_decf103d_sgwn/placeHolder", this.lang, "");
    parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh_PlaceHolder = this.langService.transform("TextBox/parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh/placeHolder", this.lang, "");
    realName_ef543f0d_9x4a_PlaceHolder = this.langService.transform("TextBox/realName_ef543f0d_9x4a/placeHolder", this.lang, "");
    address_ce9be2ba_di1t_PlaceHolder = this.langService.transform("TextBox/address_ce9be2ba_di1t/placeHolder", this.lang, "");
    remark_19c6ed5f_de82_PlaceHolder = this.langService.transform("TextBox/remark_19c6ed5f_de82/placeHolder", this.lang, "");
    fullName_1a36d5d9_rlsi_PlaceHolder = this.langService.transform("TextBox/fullName_1a36d5d9_rlsi/placeHolder", this.lang, "");
    businessLicense_14ec2d6c_97z6_PlaceHolder = this.langService.transform("TextBox/businessLicense_14ec2d6c_97z6/placeHolder", this.lang, "");
    email_5eeacb83_5dxr_PlaceHolder = this.langService.transform("TextBox/email_5eeacb83_5dxr/placeHolder", this.lang, "");
    telephone_ab7face1_3ghr_PlaceHolder = this.langService.transform("TextBox/telephone_ab7face1_3ghr/placeHolder", this.lang, "");
}