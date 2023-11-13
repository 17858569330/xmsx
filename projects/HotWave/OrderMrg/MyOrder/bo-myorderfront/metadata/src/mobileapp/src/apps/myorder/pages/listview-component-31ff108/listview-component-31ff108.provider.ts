
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

import { ListviewComponent31ff108Form } from "./listview-component-31ff108.form";
import { ListviewComponent31ff108UIState } from "./listview-component-31ff108.uistate";
import { ListviewComponent31ff108ViewModel } from "./listview-component-31ff108.viewmodel";
import {ListviewComponent31ff108BindingData} from "./listview-component-31ff108.bindingdata";

export const ListviewComponent31ff108Provider: StaticProvider[] = [
    { provide: Repository, useExisting: ModelRepository, deps: []},
    { provide: BindingData, useClass: ListviewComponent31ff108BindingData, deps: []},
    { provide: UIState, useClass: ListviewComponent31ff108UIState, deps: []},
    { provide: Form, useClass: ListviewComponent31ff108Form, deps: [ViewModelContext ] },
    { provide: ViewModel, useClass: ListviewComponent31ff108ViewModel, deps: [Injector] },
    { provide: MyOrderFrmMyOrderWebService1, useClass: MyOrderFrmMyOrderWebService1, deps: [ViewModelContext]},
].concat(COMMAND_SERVICES_VIEWMODEL_PROVIDERS).concat(BEF_VIEWMODEL_PROVIDERS);