
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

import { ListListviewComponentForm } from "./list-listview-component.form";
import { ListListviewComponentUIState } from "./list-listview-component.uistate";
import { ListListviewComponentViewModel } from "./list-listview-component.viewmodel";
import { OpenCardAndEditHandler } from "./handlers/opencardandedit.handler";
import { MyOrderCom5a2bHandler } from "./handlers/myordercom5a2b.handler";
import {ListListviewComponentBindingData} from "./list-listview-component.bindingdata";

export const ListListviewComponentProvider: StaticProvider[] = [
    { provide: Repository, useExisting: ModelRepository, deps: []},
    { provide: BindingData, useClass: ListListviewComponentBindingData, deps: []},
    { provide: UIState, useClass: ListListviewComponentUIState, deps: []},
    { provide: Form, useClass: ListListviewComponentForm, deps: [ViewModelContext ] },
    { provide: ViewModel, useClass: ListListviewComponentViewModel, deps: [Injector] },
    { provide: COMMAND_HANDLERS_TOKEN, useClass: OpenCardAndEditHandler, deps: [RouterService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: MyOrderCom5a2bHandler, deps: [MyOrderFrmMyOrderWebService1, LoadDataService], multi: true},
    { provide: MyOrderFrmMyOrderWebService1, useClass: MyOrderFrmMyOrderWebService1, deps: [ViewModelContext]},
].concat(COMMAND_SERVICES_VIEWMODEL_PROVIDERS).concat(BEF_VIEWMODEL_PROVIDERS);