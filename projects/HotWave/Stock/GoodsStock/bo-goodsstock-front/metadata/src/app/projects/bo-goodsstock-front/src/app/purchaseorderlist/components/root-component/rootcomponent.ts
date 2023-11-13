
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';

import { ExceptionHandler } from '@farris/command-services';
import { FrameworkSessionService, UriService } from '@farris/bef';
import { FrameworkService } from '@gsp-sys/rtf-common';
import { ApplicationParamService } from '@farris/command-services';
import { EventDeclaration } from '../../events/event';
import { FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS} from '@farris/devkit';
import { WFSubmiteService } from '@gsp-wf/rtdevkit';
import { CloudprintService } from '@gsp-svc/cloudprint';
import { WFFlowchartService } from '@gsp-wf/ui-flowchart';

import { CHANGE_SET_POLICY_TOKEN } from '@farris/devkit';
import { TranslateToken, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS } from '@farris/devkit';
import { VerifyDetailService } from '@farris/ui-verify-detail';
import { AppContext, FORM_ID,  PARAM_TYPE_TRANSFORM_TOKEN } from '@farris/devkit';
import { BE_SESSION_HANDLING_STRATEGY_TOKEN } from '@farris/bef';
import { BACK_END_MESSAGE_HANDLER_TOKEN } from '@farris/devkit';
import { BackEndMessageHandler } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { PurchaseOrderRepository } from '../../models/purchaseorderrepository';
import { LangService } from '../../lang/lang-pipe';

import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelStateMachine } from '../../viewmodels/statemachine/rootviewmodelstatemachine';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { Search1Handler } from '../../viewmodels/handlers/search1handler';
import { RemoveRows1Handler } from '../../viewmodels/handlers/removerows1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { View1Handler } from '../../viewmodels/handlers/view1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { Filter1Handler } from '../../viewmodels/handlers/filter1handler';
import { submitWithBizDefKey1Handler } from '../../viewmodels/handlers/submitwithbizdefkey1handler';
import { cancelSubmitWithDataId1Handler } from '../../viewmodels/handlers/cancelsubmitwithdataid1handler';
import { PurchaseOrderProxy } from '../../models/purchaseorderproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: PurchaseOrderRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: StateMachine, useClass: RootViewmodelStateMachine },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        PurchaseOrderProxy,
        PurchaseOrderRepository,
        { provide: ViewModel, useClass: RootViewmodel },
        { provide: Declaration, useClass: EventDeclaration },
        { provide: TranslateToken, useExisting: LangService },
        VerifyDetailService,
        { provide: WFSubmiteService, useClass: WFSubmiteService },
        { provide: CloudprintService, useClass: CloudprintService },
        { provide: WFFlowchartService, useClass: WFFlowchartService },
        FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS,

        AppContext,
        ComponentManagerService,
        { provide: PARAM_TYPE_TRANSFORM_TOKEN, useValue: false },
        { provide: FORM_ID, useValue: "644ee3ae-010d-4974-aeff-5018a0898985" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: CHANGE_SET_POLICY_TOKEN, useValue: 'valid' },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Search1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: RemoveRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: View1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Filter1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: submitWithBizDefKey1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: cancelSubmitWithDataId1Handler, multi: true },
]
})
export class RootComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class')
    cls = 'f-page-root  ';
    public viewModel: RootViewmodel;
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
        private frameworkService: FrameworkService,
        private applicationParamsService: ApplicationParamService,
        private verifyService: VerifyDetailService,
        private stateMachine: StateMachine,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
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
        this.viewModel.verifycationChanged.subscribe((verifyInformations) => {
            if (verifyInformations.length) {
                this.verifyService.createVerify({
                    'parent': this.rootElement,
                    'verifyList': verifyInformations,
                    'showType': 'all'
                });
            } else {
                this.verifyService.clear();
            }
        });
        this.stateMachine.stateChange.subscribe(() => {
            const pageHeaderToolbarToolbarItemsstates = {
                'button-add': !this.viewModel.stateMachine['canAdd'],
                'button-edit': !this.viewModel.stateMachine['canEdit'],
                'button-view': !this.viewModel.stateMachine['canView'],
                'button-delete': !this.viewModel.stateMachine['canRemove'],
                'button-approve': !this.viewModel.stateMachine['canApprove'],
                'button-cancel-approve': !this.viewModel.stateMachine['canCancelApprove'],
            }
        this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        
        this.stateMachine.stateChange.subscribe(() => {
            
            const pageHeaderToolbarToolbarItemsvisibleStates = {
            'button-add': true,
            'button-edit': true,
            'button-view': true,
            'button-delete': true,
            'button-approve': true,
            'button-cancel-approve': true,
        }
            this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
    });

        this.pageHeaderToolbarToolbarItems.forEach((toolbarItem) => {
            
            const transformText = this.langService.transform(toolbarItem.resourceId, this.lang, toolbarItem.text);
            if (transformText) {
                toolbarItem.text = transformText;
            }
        });
        this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, () => {
            this.onFormLoad();
        })
                
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
        
        this.frameworkService = null;
        this.applicationParamsService = null;
        this.verifyService.clear();
        this.verifyService = null;
        this.stateMachine = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
        this.viewModel.Filter1(); 
    } 
    pageHeaderToolbarToolbarItems = [{
        "id": "button-add",
        "text": this.langService.transform("button-add", this.lang, "新增"),
        "resourceId": "button-add",
        "isDP": false,
        "class": "btn-primary",
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-edit",
        "text": this.langService.transform("button-edit", this.lang, "编辑"),
        "resourceId": "button-edit",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-view",
        "text": this.langService.transform("button-view", this.lang, "查看"),
        "resourceId": "button-view",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-delete",
        "text": this.langService.transform("button-delete", this.lang, "删除"),
        "resourceId": "button-delete",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-approve",
        "text": this.langService.transform("button-approve", this.lang, "提交审批"),
        "resourceId": "button-approve",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-cancel-approve",
        "text": this.langService.transform("button-cancel-approve", this.lang, "取消提交审批"),
        "resourceId": "button-cancel-approve",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        }
    ]; 

    pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
    pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});

    pageHeaderToolbarClickHandler (args) {
        
        switch (args.id) {

            case 'button-add': 
                this.viewModel.Add1(args);
                break;
            case 'button-edit': 
                this.viewModel.Edit1(args);
                break;
            case 'button-view': 
                this.viewModel.View1(args);
                break;
            case 'button-delete': 
                this.viewModel.Remove1(args);
                break;
            case 'button-approve': 
                this.viewModel.submitWithBizDefKey1(args);
                break;
            case 'button-cancel-approve': 
                this.viewModel.cancelSubmitWithDataId1(args);
                break;
        }
    }
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    sectionsToolbarStates = new BehaviorSubject({});
    sectionsToolbarVisibleStates = new BehaviorSubject({});
    querySchemeSection = {
        position: 'inHead',
        contents: [
        ]
    }
    SectionqueryschemesectionMainTitle = this.langService.transform("Section/query-scheme-section/mainTitle", this.lang, "主标题");
    SectionqueryschemesectionSubTitle = this.langService.transform("Section/query-scheme-section/subTitle", this.lang, "");
    QuerySolutionqueryscheme1 = this.langService.transform("query-scheme-1", this.lang, "默认筛选方案"); 
    fieldConfigsqueryscheme1 = [
        {
            "id": "b3d11341-0101-468f-ae3f-40c76c0f06b0",
            "labelCode": "BillStatus.BillState",
            "code": "BillState",
            "name": this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0", this.lang, "状态"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/placeHolder", this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "Billing",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing", this.lang, "制单")
                    },
                    {
                        "value": "SubmitApproval",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval", this.lang, "提交审批")
                    },
                    {
                        "value": "Approved",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved", this.lang, "审批通过")
                    },
                    {
                        "value": "ApprovalNotPassed",
                        "name": this.langService.transform("QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed", this.lang, "审批不通过")
                    }]
            }
        },
        {
            "id": "173a6f07-f50e-44db-810d-6c441b941fbc",
            "labelCode": "OrderCode",
            "code": "OrderCode",
            "name": this.langService.transform("QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc", this.lang, "采购编号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc/placeHolder", this.lang, ""),
            "control": {"id":"173a6f07-f50e-44db-810d-6c441b941fbc","controltype":"text","require":false,"className":""}
        },
        {
            "id": "b31c76b0-ccdf-42b3-add5-ee7a7894a050",
            "labelCode": "Merchant.Merchant_MerchantName",
            "code": "MerchantName",
            "name": this.langService.transform("QueryScheme/query-scheme-1/b31c76b0-ccdf-42b3-add5-ee7a7894a050", this.lang, "商户名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/b31c76b0-ccdf-42b3-add5-ee7a7894a050/placeHolder", this.lang, ""),
            "control": {"id":"b31c76b0-ccdf-42b3-add5-ee7a7894a050","controltype":"text","require":false,"className":""}
        },
        {
            "id": "c296a2af-7a51-4e24-bb77-dcf4743c1848",
            "labelCode": "Merchant.Merchant_ParentMerchantID_MerchantName",
            "code": "MerchantName(ParentMerchantID)",
            "name": this.langService.transform("QueryScheme/query-scheme-1/c296a2af-7a51-4e24-bb77-dcf4743c1848", this.lang, "商户名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/c296a2af-7a51-4e24-bb77-dcf4743c1848/placeHolder", this.lang, ""),
            "control": {"id":"c296a2af-7a51-4e24-bb77-dcf4743c1848","controltype":"text","require":false,"className":""}
        },
        {
            "id": "1bcac9ae-e281-4528-a702-5b8604dc08ab",
            "labelCode": "Merchant.Merchant_ParentMerchantID_Adminstrator",
            "code": "Adminstrator(ParentMerchantID)",
            "name": this.langService.transform("QueryScheme/query-scheme-1/1bcac9ae-e281-4528-a702-5b8604dc08ab", this.lang, "管理员"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/1bcac9ae-e281-4528-a702-5b8604dc08ab/placeHolder", this.lang, ""),
            "control": {"id":"1bcac9ae-e281-4528-a702-5b8604dc08ab","controltype":"text","require":false,"className":""}
        },
        {
            "id": "a5f6d271-cbfe-4199-86e0-48ec73d31ac1",
            "labelCode": "ExpectedTime",
            "code": "ExpectedTime",
            "name": this.langService.transform("QueryScheme/query-scheme-1/a5f6d271-cbfe-4199-86e0-48ec73d31ac1", this.lang, "预计送达时间"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/a5f6d271-cbfe-4199-86e0-48ec73d31ac1/placeHolder", this.lang, ""),
            "control": {"id":"a5f6d271-cbfe-4199-86e0-48ec73d31ac1","controltype":"date","require":false,"format":"yyyy-MM-dd","weekSelect":false}
        },
        {
            "id": "5fb59eb7-9663-4702-9ac9-73611f2710b6",
            "labelCode": "OrderTime",
            "code": "OrderTime",
            "name": this.langService.transform("QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6", this.lang, "下单时间"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6/placeHolder", this.lang, ""),
            "control": {"id":"5fb59eb7-9663-4702-9ac9-73611f2710b6","controltype":"date","require":false,"format":"yyyy-MM-dd","weekSelect":false}
        },
        {
            "id": "f462f519-1918-4218-be9f-fadfa0d2031b",
            "labelCode": "OrderPerson.OrderPerson",
            "code": "OrderPerson",
            "name": this.langService.transform("QueryScheme/query-scheme-1/f462f519-1918-4218-be9f-fadfa0d2031b", this.lang, "下单人"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/f462f519-1918-4218-be9f-fadfa0d2031b/placeHolder", this.lang, ""),
            "control": {"id":"f462f519-1918-4218-be9f-fadfa0d2031b","controltype":"text","require":false,"className":""}
        },
        {
            "id": "4e89a276-7aef-4598-8935-47104b273da7",
            "labelCode": "OrderPerson.OrderPerson_name",
            "code": "name",
            "name": this.langService.transform("QueryScheme/query-scheme-1/4e89a276-7aef-4598-8935-47104b273da7", this.lang, "名称"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/4e89a276-7aef-4598-8935-47104b273da7/placeHolder", this.lang, ""),
            "control": {"id":"4e89a276-7aef-4598-8935-47104b273da7","controltype":"text","require":false,"className":""}
        },
        {
            "id": "460dc9cc-4652-4024-8a8c-5e7eb9c01288",
            "labelCode": "TotalPrice",
            "code": "TotalPrice",
            "name": this.langService.transform("QueryScheme/query-scheme-1/460dc9cc-4652-4024-8a8c-5e7eb9c01288", this.lang, "采购金额"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/460dc9cc-4652-4024-8a8c-5e7eb9c01288/placeHolder", this.lang, ""),
            "control": {"id":"460dc9cc-4652-4024-8a8c-5e7eb9c01288","controltype":"number","require":false,"className":"","textAlign":"left","precision":2,"isBigNumber":false}
        },
        {
            "id": "a4978aa8-6491-46fc-8c95-ef7419836f99",
            "labelCode": "Remark",
            "code": "Remark",
            "name": this.langService.transform("QueryScheme/query-scheme-1/a4978aa8-6491-46fc-8c95-ef7419836f99", this.lang, "备注"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/a4978aa8-6491-46fc-8c95-ef7419836f99/placeHolder", this.lang, ""),
            "control": {"id":"a4978aa8-6491-46fc-8c95-ef7419836f99","controltype":"text","require":false,"className":""}
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "173a6f07-f50e-44db-810d-6c441b941fbc",
            "labelCode": "OrderCode",
            "code": "OrderCode",
            "name": this.langService.transform("QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc", this.lang, "采购编号"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc/placeHolder", this.lang, ""),
            "control": {"id":"173a6f07-f50e-44db-810d-6c441b941fbc","controltype":"text","require":false,"className":""}
        },
        {
            "id": "5fb59eb7-9663-4702-9ac9-73611f2710b6",
            "labelCode": "OrderTime",
            "code": "OrderTime",
            "name": this.langService.transform("QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6", this.lang, "下单时间"),
            "placeHolder": this.langService.transform("QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6/placeHolder", this.lang, ""),
            "control": {"id":"5fb59eb7-9663-4702-9ac9-73611f2710b6","controltype":"date","require":false,"format":"yyyy-MM-dd","weekSelect":false}
        }]
                
                
}