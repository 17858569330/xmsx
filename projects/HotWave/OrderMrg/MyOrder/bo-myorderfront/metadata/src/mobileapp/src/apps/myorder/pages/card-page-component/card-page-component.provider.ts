
import {
    StaticProvider, Injector, Repository,
    ViewModel, BindingData, UIState, StateMachine, Form, ViewModelContext, COMMAND_HANDLERS_TOKEN
} from '@farris/mobile-devkit';
import { BEF_VIEWMODEL_PROVIDERS } from '@farris/mobile-bef';
import {
    LoadDataService,
    RemoveDataService,
    RouterService,
    CreateDataService,
    COMMAND_SERVICES_VIEWMODEL_PROVIDERS,
    CommandService,SaveDataService,
    CancelDataService,
    ApproveService,
    StateMachineService,
    AttachmentService,
    EditDataService,
    UpdateDataService,
    CcWorkService,
    ValidatorServices,
    BusinessAttachmentService,
    CheckDataService,
    DiscussionGroupService,
    DialogService,
    LoadingService,
    NotifyService,
    ToastService,
    JsBridgeService,
    VoVariableService,
    UIDataService
} from '@farris/mobile-command-services';
import { ModelRepository } from '../../models/model.repository'
import { MyOrderFrmMyOrderWebService as MyOrderFrmMyOrderWebService1 } from "../../services/myorder_frm_myorderweb";

import { CardPageComponentForm } from "./card-page-component.form";
import { CardPageComponentUIState } from "./card-page-component.uistate";
import { CardPageComponentStateMachine } from "./card-page-component.statemachine";
import { CardPageComponentViewModel } from "./card-page-component.viewmodel";
import { LoadForCardHandler } from "./handlers/loadforcard.handler";
import { LoadAndAddForCardHandler } from "./handlers/loadandaddforcard.handler";
import { LoadAndEditForCardHandler } from "./handlers/loadandeditforcard.handler";
import { SaveHandler } from "./handlers/save.handler";
import { AddHandler } from "./handlers/add.handler";
import { CancelHandler } from "./handlers/cancel.handler";
import { GoBackToListHandler } from "./handlers/gobacktolist.handler";
import { GoBackAndCheckHandler } from "./handlers/gobackandcheck.handler";
import { LoadCardPageHandler } from "./handlers/loadcardpage.handler";
import { EditHandler } from "./handlers/edit.handler";
import { SubmitWithBizDefKeyHandler } from "./handlers/submitwithbizdefkey.handler";
import { CancelSubmitWithDataIdHandler } from "./handlers/cancelsubmitwithdataid.handler";
import {CardPageComponentBindingData} from "./card-page-component.bindingdata";

export const CardPageComponentProvider: StaticProvider[] = [
    { provide: Repository, useExisting: ModelRepository, deps: []},
    { provide: BindingData, useClass: CardPageComponentBindingData, deps: []},
    { provide: UIState, useClass: CardPageComponentUIState, deps: []},
    { provide: StateMachine, useClass: CardPageComponentStateMachine, deps: []},
    { provide: Form, useClass: CardPageComponentForm, deps: [ViewModelContext ] },
    { provide: ViewModel, useClass: CardPageComponentViewModel, deps: [Injector] },
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadForCardHandler, deps: [CommandService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndAddForCardHandler, deps: [StateMachineService, CreateDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndEditForCardHandler, deps: [StateMachineService, LoadDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: SaveHandler, deps: [ValidatorServices, StateMachineService, SaveDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: AddHandler, deps: [StateMachineService, CreateDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: CancelHandler, deps: [CancelDataService, StateMachineService, UpdateDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: GoBackToListHandler, deps: [RouterService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: GoBackAndCheckHandler, deps: [RouterService, CheckDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadCardPageHandler, deps: [CommandService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: EditHandler, deps: [StateMachineService, EditDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: SubmitWithBizDefKeyHandler, deps: [CommandService, ApproveService, UpdateDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: CancelSubmitWithDataIdHandler, deps: [CommandService, ApproveService, UpdateDataService], multi: true},
    { provide: MyOrderFrmMyOrderWebService1, useClass: MyOrderFrmMyOrderWebService1, deps: [ViewModelContext]},
].concat(COMMAND_SERVICES_VIEWMODEL_PROVIDERS).concat(BEF_VIEWMODEL_PROVIDERS);