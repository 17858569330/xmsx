
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

import { TreeGridComponentViewmodel } from '../../viewmodels/treegridcomponentviewmodel';
import { MerChantRepository } from '../../models/merchantrepository';
import { LangService } from '../../lang/lang-pipe';

import { TreeGridComponentViewmodelForm } from '../../viewmodels/form/treegridcomponentviewmodelform';
import { TreeGridComponentViewmodelUIState } from '../../viewmodels/uistate/treegridcomponentviewmodeluistate';
import { LoadTree1Handler } from '../../viewmodels/handlers/loadtree1handler';
import { LoadCard1Handler } from '../../viewmodels/handlers/loadcard1handler';
import { AddSibling1Handler } from '../../viewmodels/handlers/addsibling1handler';
import { AddChild1Handler } from '../../viewmodels/handlers/addchild1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { DIP_DATAIE_SERVICE } from '@gsp-dip/data-imp-exp';

@Component({
    selector: 'app-treegridcomponent',
    templateUrl: './treegridcomponent.html',
    styleUrls: ['./treegridcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'tree-grid-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: MerChantRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: TreeGridComponentViewmodelForm },
        { provide: UIState, useClass: TreeGridComponentViewmodelUIState },
        DIP_DATAIE_SERVICE,
        { provide: ViewModel, useClass: TreeGridComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadTree1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadCard1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: AddSibling1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: AddChild1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
]
})
export class TreeGridComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    treeGridColumns =[];

    @HostBinding('class')
    cls = 'f-struct-wrapper  f-utils-fill-flex-column ';
    public viewModel: TreeGridComponentViewmodel;
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
        this.treeGridColumns = [
            {
                "id": "merchantName_c80a3305_atir",
                "title": this.langService.transform("merchantName_c80a3305_atir", this.lang, "商户名称"),
                "dataType": "string",
                "visible": true,
                "field": "merchantName",
                "width": 100,
                "sortable": false,
                "formatter": {},
                "halign": "left",
                "align": "left"
            },
            {
                "id": "merchantCode_decf103d_nbo2",
                "title": this.langService.transform("merchantCode_decf103d_nbo2", this.lang, "商户编号"),
                "dataType": "string",
                "visible": true,
                "field": "merchantCode",
                "width": 100,
                "sortable": false,
                "formatter": {},
                "halign": "left",
                "align": "left"
            }]
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
        this.viewModel.LoadTree1(); 
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    SectiontreegridsectionMainTitle = this.langService.transform("Section/tree-grid-section/mainTitle", this.lang, "");
    SectiontreegridsectionSubTitle = this.langService.transform("Section/tree-grid-section/subTitle", this.lang, "");
}