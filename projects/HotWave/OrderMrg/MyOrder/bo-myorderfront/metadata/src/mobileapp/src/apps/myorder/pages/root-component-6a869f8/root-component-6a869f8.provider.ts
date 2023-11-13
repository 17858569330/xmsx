
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

import { RootComponent6a869f8Form } from "./root-component-6a869f8.form";
import { RootComponent6a869f8UIState } from "./root-component-6a869f8.uistate";
import { RootComponent6a869f8StateMachine } from "./root-component-6a869f8.statemachine";
import { RootComponent6a869f8ViewModel } from "./root-component-6a869f8.viewmodel";
import { LoadPageForChildCardHandler } from "./handlers/loadpageforchildcard.handler";
import { LoadAndAddForChildCardHandler } from "./handlers/loadandaddforchildcard.handler";
import { LoadAndEditForChildCardHandler } from "./handlers/loadandeditforchildcard.handler";
import { SaveAndGoBackForChildCardHandler } from "./handlers/saveandgobackforchildcard.handler";
import { GoBackForChildCardHandler } from "./handlers/gobackforchildcard.handler";
import { Navigate05f8Handler } from "./handlers/navigate05f8.handler";
import {RootComponent6a869f8BindingData} from "./root-component-6a869f8.bindingdata";

export const RootComponent6a869f8Provider: StaticProvider[] = [
    { provide: Repository, useExisting: ModelRepository, deps: []},
    { provide: BindingData, useClass: RootComponent6a869f8BindingData, deps: []},
    { provide: UIState, useClass: RootComponent6a869f8UIState, deps: []},
    { provide: StateMachine, useClass: RootComponent6a869f8StateMachine, deps: []},
    { provide: Form, useClass: RootComponent6a869f8Form, deps: [ViewModelContext ] },
    { provide: ViewModel, useClass: RootComponent6a869f8ViewModel, deps: [Injector] },
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadPageForChildCardHandler, deps: [CommandService, ValidatorServices], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndAddForChildCardHandler, deps: [StateMachineService, CreateDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndEditForChildCardHandler, deps: [ValidatorServices, StateMachineService, EditDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: SaveAndGoBackForChildCardHandler, deps: [ValidatorServices, RouterService, SaveDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: GoBackForChildCardHandler, deps: [RouterService, CheckDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: Navigate05f8Handler, deps: [RouterService], multi: true},
    { provide: MyOrderFrmMyOrderWebService1, useClass: MyOrderFrmMyOrderWebService1, deps: [ViewModelContext]},
].concat(COMMAND_SERVICES_VIEWMODEL_PROVIDERS).concat(BEF_VIEWMODEL_PROVIDERS);