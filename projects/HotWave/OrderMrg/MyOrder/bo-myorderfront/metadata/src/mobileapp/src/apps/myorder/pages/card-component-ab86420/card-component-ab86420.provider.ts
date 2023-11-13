
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

import { CardComponentAb86420Form } from "./card-component-ab86420.form";
import { CardComponentAb86420UIState } from "./card-component-ab86420.uistate";
import { CardComponentAb86420ViewModel } from "./card-component-ab86420.viewmodel";
import {CardComponentAb86420BindingData} from "./card-component-ab86420.bindingdata";

export const CardComponentAb86420Provider: StaticProvider[] = [
    { provide: Repository, useExisting: ModelRepository, deps: []},
    { provide: BindingData, useClass: CardComponentAb86420BindingData, deps: []},
    { provide: UIState, useClass: CardComponentAb86420UIState, deps: []},
    { provide: Form, useClass: CardComponentAb86420Form, deps: [ViewModelContext ] },
    { provide: ViewModel, useClass: CardComponentAb86420ViewModel, deps: [Injector] },
    { provide: MyOrderFrmMyOrderWebService1, useClass: MyOrderFrmMyOrderWebService1, deps: [ViewModelContext]},
].concat(COMMAND_SERVICES_VIEWMODEL_PROVIDERS).concat(BEF_VIEWMODEL_PROVIDERS);