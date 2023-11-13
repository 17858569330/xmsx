
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

import { ListPageComponentForm } from "./list-page-component.form";
import { ListPageComponentUIState } from "./list-page-component.uistate";
import { ListPageComponentStateMachine } from "./list-page-component.statemachine";
import { ListPageComponentViewModel } from "./list-page-component.viewmodel";
import { LoadForListHandler } from "./handlers/loadforlist.handler";
import { OpenCardAndAddHandler } from "./handlers/opencardandadd.handler";
import { RemoveByIdHandler } from "./handlers/removebyid.handler";
import { LoadListPageHandler } from "./handlers/loadlistpage.handler";
import {ListPageComponentBindingData} from "./list-page-component.bindingdata";

export const ListPageComponentProvider: StaticProvider[] = [
    { provide: Repository, useExisting: ModelRepository, deps: []},
    { provide: BindingData, useClass: ListPageComponentBindingData, deps: []},
    { provide: UIState, useClass: ListPageComponentUIState, deps: []},
    { provide: StateMachine, useClass: ListPageComponentStateMachine, deps: []},
    { provide: Form, useClass: ListPageComponentForm, deps: [ViewModelContext ] },
    { provide: ViewModel, useClass: ListPageComponentViewModel, deps: [Injector] },
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadForListHandler, deps: [LoadDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: OpenCardAndAddHandler, deps: [RouterService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: RemoveByIdHandler, deps: [RemoveDataService], multi: true},
    { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadListPageHandler, deps: [CommandService], multi: true},
    { provide: MyOrderFrmMyOrderWebService1, useClass: MyOrderFrmMyOrderWebService1, deps: [ViewModelContext]},
].concat(COMMAND_SERVICES_VIEWMODEL_PROVIDERS).concat(BEF_VIEWMODEL_PROVIDERS);