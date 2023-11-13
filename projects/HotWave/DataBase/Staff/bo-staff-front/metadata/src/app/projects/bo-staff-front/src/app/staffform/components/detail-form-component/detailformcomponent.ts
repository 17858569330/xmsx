
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

import { DetailFormComponentViewmodel } from '../../viewmodels/detailformcomponentviewmodel';
import { StaffRepository } from '../../models/staffrepository';
import { LangService } from '../../lang/lang-pipe';

import { DetailFormComponentViewmodelForm } from '../../viewmodels/form/detailformcomponentviewmodelform';
import { DetailFormComponentViewmodelUIState } from '../../viewmodels/uistate/detailformcomponentviewmodeluistate';
import { edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { save1Handler } from '../../viewmodels/handlers/save1handler';
import { cancel1Handler } from '../../viewmodels/handlers/cancel1handler';

@Component({
    selector: 'app-detailformcomponent',
    templateUrl: './detailformcomponent.html',
    styleUrls: ['./detailformcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'detail-form-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: StaffRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: DetailFormComponentViewmodelForm },
        { provide: UIState, useClass: DetailFormComponentViewmodelUIState },
        { provide: ViewModel, useClass: DetailFormComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: save1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: cancel1Handler, multi: true },
]
})
export class DetailFormComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('merchant_91fbe3b1_6p9z')
    merchant_91fbe3b1_6p9z: LookupGridComponent;
            

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
        this.componentManagerService.appendControl('merchant_91fbe3b1_6p9z', this.merchant_91fbe3b1_6p9z);
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
    SectiondetailformsectionMainTitle = this.langService.transform("Section/detail-form-section/mainTitle", this.lang, "基本信息");
    SectiondetailformsectionSubTitle = this.langService.transform("Section/detail-form-section/subTitle", this.lang, "");
    LookupEditmerchant91fbe3b16p9zDialogTitle = this.langService.transform("LookupEdit/merchant_91fbe3b1_6p9z/dialogTitle", this.lang, "");
    merchant_91fbe3b1_6p9z_PlaceHolder = this.langService.transform("LookupEdit/merchant_91fbe3b1_6p9z/placeHolder", this.lang, "");
    merchant_91fbe3b1_6p9zQuickSelect = {
        "enable": false,
        "showItemsCount": 10,
        "showMore": true
    }
    name_77b424b2_jp3d_PlaceHolder = this.langService.transform("TextBox/name_77b424b2_jp3d/placeHolder", this.lang, "");
    code_95ef2878_w1gd_PlaceHolder = this.langService.transform("TextBox/code_95ef2878_w1gd/placeHolder", this.lang, "");
    telephone_TelephoneNumber_fdb78443_na4c_PlaceHolder = this.langService.transform("TextBox/telephone_TelephoneNumber_fdb78443_na4c/placeHolder", this.lang, "");
    mailbox_Email_58c17137_hc82_PlaceHolder = this.langService.transform("TextBox/mailbox_Email_58c17137_hc82/placeHolder", this.lang, "");
    idNumber_02e51691_6ivb_PlaceHolder = this.langService.transform("TextBox/idNumber_02e51691_6ivb/placeHolder", this.lang, "");
}