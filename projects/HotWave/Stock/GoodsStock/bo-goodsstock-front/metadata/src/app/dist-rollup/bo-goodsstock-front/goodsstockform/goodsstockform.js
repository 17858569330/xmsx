/*! UPDATE TIME: 2023/7/6 16:00:37 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@farris/ui-common', '@farris/ui-common/date', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@angular/router', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-forms/farris-ui-forms.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-enum-editor/farris-ui-enum-editor.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-organization-selector/farris-ui-organization-selector.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-locale', '@farris/ui-shortcuts', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@farris/ui-dialog', '@farris/ui-section/farris-ui-section.ngfactory', '@farris/ui-modal', '@gsp-wf/wf-task-handler', '@progress/kendo-angular-dialog', '@progress/kendo-angular-l10n', '@farris/ui-common/number', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-pagination', '@farris/ui-popover', '@farris/ui-common/column', '@progress/kendo-angular-popup', '@gsp-wf/wf-approval-logs', '@farris/ui-context-menu', '@farris/ui-common/events', '@farris/ui-filter-condition', '@progress/kendo-angular-resize-sensor', '@farris/component-querycondition', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@farris/ui-perfect-scrollbar', '@farris/ui-area-response', '@farris/ui-datatable', '@farris/ui-datalist', '@farris/ui-layout', '@farris/ui-dropdown', '@farris/ui-filter-panel', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-enum-editor', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-tree', '@farris/ui-organization-selector'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, ViewChild, HostBinding, Component, ElementRef, NgModule, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, ɵprd, ApplicationRef, ɵnov, ɵqud, ɵand, TemplateRef, NgZone, Renderer2, ɵpad, ɵpid, IterableDiffers, KeyValueDiffers, ɵpod, ɵppd, ɵted, ɵinlineInterpolate, ɵunv, Inject, InjectionToken, PLATFORM_ID, RendererFactory2, ErrorHandler, __decorate, __metadata, __extends, CommonModule, NgIf, NgClass, DOCUMENT, isPlatformBrowser, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, FormControl, FormsModule, ReactiveFormsModule, FormGroupDirective, ControlContainer, NgControlStatusGroup, NG_VALUE_ACCESSOR, ɵangular_packages_forms_forms_j, FormBuilder, ɵangular_packages_forms_forms_bc, KendoBindingModule, SectionComponentRefDirective, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, DatagridComponentRefDirective, LookupDataMappingDirective, InputEndEditDirective, LookupGridComponentRefDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, FlexLayoutModule, FarrisFormsModule, FormMessageModule, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, switchMap, catchError, HttpClient, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpClientModule, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, DomSanitizer, EventManager, Declaration, NgCommand, ViewModel, NgField, NgEntity, Entity, NgObject, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, NgAction, StateMachine, NgParam, UIState, NgCommandHandler, CommandHandler, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, CHANGE_SET_POLICY_TOKEN, BACK_END_MESSAGE_HANDLER_TOKEN, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, FrameContext, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService, VARIABLE_PARSERS, FrameIdVariableParser, ɵa$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, NavigationMiddlewareService, ListDataService, StateMachineService, EndEditService, ValidationService, CommandService, DataGridService, BatchEditService, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, GridMiddlewareService, FocusInvalidService, CommandServicesModule, FormMessageService, LanguageService, FormLoadingService, FormNotifyService, FormErrorService, FilterConditionService, ChangeItemService, UIStateService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, TreeDataService, SubTreeDataService, CardDataService, RuntimeFrameworkService, SubListDataService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, NavigationEventService, MenuStateService, QuerystringService, NavigationService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService, RouterService, AuthorityService, ɵb, ɵc, DiscussionGroupService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, PaginationService, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, DataCheckService, EventService, FilterService$2, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, SessionService, HttpService, LanguageService$1, CacheStorageAbstract, CacheMemoryStorage, CacheService, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, GridModule, GridComponent, BrowserSupportService, SelectionService, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, ExcelService, ScrollSyncService, DomEventsService, ColumnResizingService, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, NavigationService$2, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, TOUCH_ENABLED, touchEnabled, CommonUtils, FarrisCommonModule, RuntimeStateService, IdService, OverLayHiddenService, DateHelperModule, DateTimeHelperService, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, LookupGridComponent, ServerSideToken, LookupModule, PersonalConfigService, LookupDefaultMapping, LookupUtils, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, ɵa$1, FarrisTabsModule, NgbDropdownConfig, NgbTooltipConfig, TabService, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, FarrisTimeSpinnerModule, DatagridComponent, GRID_SETTINGS_HTTP, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ɵt, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, SplitterModule, ListNavModule, TextModule, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, ComboServerSideToken, ComboListModule, ComboLocaleService, FarrisHtmlEditorModule, ɵb$3, defaultModules, CloudprintService, CloudPrintModule, ɵa, ɵb$1, ɵc$1, ɵe, EditorTypes, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$4, ɵb$2, ɵc$2, ɵd$1, ɵe$1, ɵf$1, ɵg$1, ɵh$1, ɵi, ɵj$1, ɵk, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, SwitchModule, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$1, ConvertorService, SolutionService, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, ComboLookupModule, ScrollspyModule, FarrisScrollSpyService, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵu, ɵv, ɵo, ɵz, ɵd, ɵa$2, ɵy, ɵf, ɵh, ɵbe, ɵg, ɵt$1, ɵbg, ɵbh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, View_LookupGridComponent_0, RenderType_LookupGridComponent, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, SingleListComponentNgFactory, FilterPanelComponentNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$1, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, LocaleService, FARRIS_LOCAL_CUSTOM_DATA, LocaleModule, ShortcutsService, View_DatagridComponent_0, RenderType_DatagridComponent, DialogService$1, FarrisDialogModule, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, BsModalService, ModalModule, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$2, WindowModule, DialogModule, LocalizationService$1, NumberHelperService, NumberHelperModule, PositioningService, ComponentLoaderFactory, PaginationService$1, PaginationModule, PopoverConfig, PopoverModule, ColumnFormatService, DataColumnModule, PopupService, POPUP_CONTAINER, PopupModule, WfApprovalLogsService, WfApprovalLogsModule, FarrisContextMenuService, FarrisContextMenuModule, ResizeService, QuerySolutionService, FilterConditionModule, ResizeBatchService, ResizeSensorModule, SolutionService$1, ConvertorService$1, QueryConditionModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, PerfectScrollbarModule, FAreaResponseModule, DataTableModule, DatalistModule, LayoutModule$1, FDropdownDirectiveTypeModule, FilterPanelModule, TaskImplApiModule, WfSignModule, EnumEditorModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, TreeModule, OrganizationSelectorModule;
    return {
        setters: [function (module) {
            Pipe = module.Pipe;
            Injectable = module.Injectable;
            Injector = module.Injector;
            ViewChild = module.ViewChild;
            HostBinding = module.HostBinding;
            Component = module.Component;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
            LOCALE_ID = module.LOCALE_ID;
            ɵcmf = module.ɵcmf;
            ɵmod = module.ɵmod;
            ɵmpd = module.ɵmpd;
            ComponentFactoryResolver = module.ComponentFactoryResolver;
            ɵCodegenComponentFactoryResolver = module.ɵCodegenComponentFactoryResolver;
            NgModuleRef = module.NgModuleRef;
            ɵcrt = module.ɵcrt;
            ɵccf = module.ɵccf;
            ɵvid = module.ɵvid;
            ɵeld = module.ɵeld;
            ɵdid = module.ɵdid;
            ViewContainerRef = module.ViewContainerRef;
            ChangeDetectorRef = module.ChangeDetectorRef;
            ɵprd = module.ɵprd;
            ApplicationRef = module.ApplicationRef;
            ɵnov = module.ɵnov;
            ɵqud = module.ɵqud;
            ɵand = module.ɵand;
            TemplateRef = module.TemplateRef;
            NgZone = module.NgZone;
            Renderer2 = module.Renderer2;
            ɵpad = module.ɵpad;
            ɵpid = module.ɵpid;
            IterableDiffers = module.IterableDiffers;
            KeyValueDiffers = module.KeyValueDiffers;
            ɵpod = module.ɵpod;
            ɵppd = module.ɵppd;
            ɵted = module.ɵted;
            ɵinlineInterpolate = module.ɵinlineInterpolate;
            ɵunv = module.ɵunv;
            Inject = module.Inject;
            InjectionToken = module.InjectionToken;
            PLATFORM_ID = module.PLATFORM_ID;
            RendererFactory2 = module.RendererFactory2;
            ErrorHandler = module.ErrorHandler;
        }, function (module) {
            __decorate = module.__decorate;
            __metadata = module.__metadata;
            __extends = module.__extends;
        }, function (module) {
            CommonModule = module.CommonModule;
            NgIf = module.NgIf;
            NgClass = module.NgClass;
            DOCUMENT = module.DOCUMENT;
            isPlatformBrowser = module.isPlatformBrowser;
            NgLocalization = module.NgLocalization;
            NgLocaleLocalization = module.NgLocaleLocalization;
            ɵangular_packages_common_common_a = module.ɵangular_packages_common_common_a;
        }, function (module) {
            FormControl = module.FormControl;
            FormsModule = module.FormsModule;
            ReactiveFormsModule = module.ReactiveFormsModule;
            FormGroupDirective = module.FormGroupDirective;
            ControlContainer = module.ControlContainer;
            NgControlStatusGroup = module.NgControlStatusGroup;
            NG_VALUE_ACCESSOR = module.NG_VALUE_ACCESSOR;
            ɵangular_packages_forms_forms_j = module.ɵangular_packages_forms_forms_j;
            FormBuilder = module.FormBuilder;
            ɵangular_packages_forms_forms_bc = module.ɵangular_packages_forms_forms_bc;
        }, function (module) {
            KendoBindingModule = module.KendoBindingModule;
            SectionComponentRefDirective = module.SectionComponentRefDirective;
            FarrisDatagridUseBindingDataDirective = module.FarrisDatagridUseBindingDataDirective;
            EditableDirective = module.EditableDirective;
            FarrisDataGridEndEditDirective = module.FarrisDataGridEndEditDirective;
            FarrisDataGridRemoteSummaryDirective = module.FarrisDataGridRemoteSummaryDirective;
            DatagridComponentRefDirective = module.DatagridComponentRefDirective;
            LookupDataMappingDirective = module.LookupDataMappingDirective;
            InputEndEditDirective = module.InputEndEditDirective;
            LookupGridComponentRefDirective = module.LookupGridComponentRefDirective;
            FarrisKendoGridFormatService = module.FarrisKendoGridFormatService;
            FarrisTreetableFormatService = module.FarrisTreetableFormatService;
        }, function (module) {
            LayoutModule = module.LayoutModule;
            PanelBarModule = module.PanelBarModule;
            SplitterModule$1 = module.SplitterModule;
            TabStripModule = module.TabStripModule;
        }, function (module) {
            FlexLayoutModule = module.FlexLayoutModule;
        }, function (module) {
            FarrisFormsModule = module.FarrisFormsModule;
        }, function (module) {
            FormMessageModule = module.FormMessageModule;
        }, function (module) {
            LoadingModule = module.LoadingModule;
            LoadingService = module.LoadingService;
            LOADING_DEFAULT_CONFIG = module.LOADING_DEFAULT_CONFIG;
            loaddingDefaultConfig = module.loaddingDefaultConfig;
        }, function (module) {
            MessagerModule = module.MessagerModule;
            MessagerService = module.MessagerService;
            MESSAGER_DEFAULT_CONFIG = module.MESSAGER_DEFAULT_CONFIG;
            MessagerDefaultConfig = module.MessagerDefaultConfig;
        }, function (module) {
            NotifyModule = module.NotifyModule;
            NotifyService = module.NotifyService;
        }, function (module) {
            FResponseToolbarModule = module.FResponseToolbarModule;
            ResponseToolbarComponent = module.ResponseToolbarComponent;
        }, function (module) {
            UriService = module.UriService;
            BefProxy = module.BefProxy;
            BefRepository = module.BefRepository;
            BefLookupRestService = module.BefLookupRestService;
            DefaultComboHttpService = module.DefaultComboHttpService;
            FrameworkSessionService = module.FrameworkSessionService;
            BE_SESSION_HANDLING_STRATEGY_TOKEN = module.BE_SESSION_HANDLING_STRATEGY_TOKEN;
            BE_SERVER_URI_TOKEN = module.BE_SERVER_URI_TOKEN;
        }, function (module) {
            TranslateService = module.TranslateService;
            TranslateModule = module.TranslateModule;
            TranslateLoader = module.TranslateLoader;
            MissingTranslationHandler = module.MissingTranslationHandler;
            TranslateStore = module.TranslateStore;
            TranslateCompiler = module.TranslateCompiler;
            TranslateFakeCompiler = module.TranslateFakeCompiler;
            TranslateParser = module.TranslateParser;
            TranslateDefaultParser = module.TranslateDefaultParser;
            USE_DEFAULT_LANG = module.USE_DEFAULT_LANG;
            USE_STORE = module.USE_STORE;
        }, function (module) {
            TranslateHttpLoader = module.TranslateHttpLoader;
        }, function (module) {
            of = module.of;
            Observable = module.Observable;
            BehaviorSubject = module.BehaviorSubject;
        }, function (module) {
            switchMap = module.switchMap;
            catchError = module.catchError;
        }, function (module) {
            HttpClient = module.HttpClient;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ɵangular_packages_common_http_http_g = module.ɵangular_packages_common_http_http_g;
            ɵangular_packages_common_http_http_e = module.ɵangular_packages_common_http_http_e;
            ɵangular_packages_common_http_http_h = module.ɵangular_packages_common_http_http_h;
            ɵangular_packages_common_http_http_f = module.ɵangular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
            HttpClientModule = module.HttpClientModule;
            ɵangular_packages_common_http_http_d = module.ɵangular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ɵHttpInterceptingHandler = module.ɵHttpInterceptingHandler;
        }, function (module) {
            DomSanitizer = module.DomSanitizer;
            EventManager = module.EventManager;
        }, function (module) {
            Declaration = module.Declaration;
            NgCommand = module.NgCommand;
            ViewModel = module.ViewModel;
            NgField = module.NgField;
            NgEntity = module.NgEntity;
            Entity = module.Entity;
            NgObject = module.NgObject;
            NgRepository = module.NgRepository;
            NgValidateForm = module.NgValidateForm;
            Form = module.Form;
            NgState = module.NgState;
            State = module.State;
            NgRenderState = module.NgRenderState;
            NgAction = module.NgAction;
            StateMachine = module.StateMachine;
            NgParam = module.NgParam;
            UIState = module.UIState;
            NgCommandHandler = module.NgCommandHandler;
            CommandHandler = module.CommandHandler;
            FARRIS_DEVKIT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_FRAME_PROVIDERS;
            FRAME_ID = module.FRAME_ID;
            BindingData = module.BindingData;
            Repository = module.Repository;
            NAMESPACE = module.NAMESPACE;
            TranslateToken = module.TranslateToken;
            FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS;
            FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS;
            FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS = module.FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS;
            AppContext = module.AppContext;
            PARAM_TYPE_TRANSFORM_TOKEN = module.PARAM_TYPE_TRANSFORM_TOKEN;
            FORM_ID = module.FORM_ID;
            EXCEPTION_HANDLER = module.EXCEPTION_HANDLER;
            CHANGE_SET_POLICY_TOKEN = module.CHANGE_SET_POLICY_TOKEN;
            BACK_END_MESSAGE_HANDLER_TOKEN = module.BACK_END_MESSAGE_HANDLER_TOKEN;
            COMMAND_HANDLERS_TOKEN = module.COMMAND_HANDLERS_TOKEN;
            FrameComponent = module.FrameComponent;
            NgFormControl = module.NgFormControl;
            FARRIS_DEVKIT_APP_PROVIDERS = module.FARRIS_DEVKIT_APP_PROVIDERS;
            FORM_PATH_TOKEN = module.FORM_PATH_TOKEN;
            FrameContext = module.FrameContext;
            CommandHandlerRegistry = module.CommandHandlerRegistry;
            CommandHandlerExtenderRegistry = module.CommandHandlerExtenderRegistry;
            COMMAND_HANDLER_EXTENDERS_TOKEN = module.COMMAND_HANDLER_EXTENDERS_TOKEN;
            CommandHandlerFactory = module.CommandHandlerFactory;
            VariableParseService = module.VariableParseService;
            CommandBus = module.CommandBus;
            RouterParamService = module.RouterParamService;
            ResolveService = module.ResolveService;
            ExpressionExecutor = module.ExpressionExecutor;
            FORM_MANIFEST_SERVICE_TOKEN = module.FORM_MANIFEST_SERVICE_TOKEN;
            FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN = module.FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN;
            MESSAGE_SERVICE_TOKEN = module.MESSAGE_SERVICE_TOKEN;
            NOTIFY_SERVICE_TOKEN = module.NOTIFY_SERVICE_TOKEN;
            FRAME_COMPONENT_INIT_HANDLER_TOKEN = module.FRAME_COMPONENT_INIT_HANDLER_TOKEN;
            UserSettingsToken = module.UserSettingsToken;
            AppContextManager = module.AppContextManager;
            RESOLVER_TOKEN = module.RESOLVER_TOKEN;
            EntityDependencyResolver = module.EntityDependencyResolver;
            StateDependencyResolver = module.StateDependencyResolver;
            CommentDependencyResolver = module.CommentDependencyResolver;
            ResolverRegistry = module.ResolverRegistry;
            LISTENER_TOKEN = module.LISTENER_TOKEN;
            UIStateChangeListener = module.UIStateChangeListener;
            RepositoryChangeListener = module.RepositoryChangeListener;
            BindingDataChangeListener = module.BindingDataChangeListener;
            EFFECTOR_TOKEN = module.EFFECTOR_TOKEN;
            RepositoryEffector = module.RepositoryEffector;
            UIStateEffector = module.UIStateEffector;
            ReadonlyEffector = module.ReadonlyEffector;
            DependencyEffector = module.DependencyEffector;
            RelativeEffector = module.RelativeEffector;
            ValidateEffector = module.ValidateEffector;
            RequiredEffector = module.RequiredEffector;
            VisibleEffector = module.VisibleEffector;
            ListenerRegistry = module.ListenerRegistry;
            Listeners = module.Listeners;
            EffectorRegistry = module.EffectorRegistry;
            EffectorFactory = module.EffectorFactory;
            ExpressionRegistry = module.ExpressionRegistry;
            ExpressionEventEmitter = module.ExpressionEventEmitter;
            ExpressionResult = module.ExpressionResult;
            ExpressionManager = module.ExpressionManager;
            ExpressionResultFactory = module.ExpressionResultFactory;
            EVENT_HANDLER_TOKEN = module.EVENT_HANDLER_TOKEN;
            RepositoryAddEntityEventHandler = module.RepositoryAddEntityEventHandler;
            RepositoryRemoveEntityEventHandler = module.RepositoryRemoveEntityEventHandler;
            EntityValueChangedEventHandler = module.EntityValueChangedEventHandler;
            StateValueChangedEventHandler = module.StateValueChangedEventHandler;
            RepositoryLoadEventHandler = module.RepositoryLoadEventHandler;
            EntityUpdateEventHandler = module.EntityUpdateEventHandler;
            BindingDataAppendObjectEventHandler = module.BindingDataAppendObjectEventHandler;
            BindingDataValueChangeEventHandler = module.BindingDataValueChangeEventHandler;
            BindingDataRemoveObjectEventHandler = module.BindingDataRemoveObjectEventHandler;
            BindingDataLoadEventHandler = module.BindingDataLoadEventHandler;
            BindingDataSelectionChangedEventHandler = module.BindingDataSelectionChangedEventHandler;
            EventHandlerRegistry = module.EventHandlerRegistry;
            ExpressionEngineImpl = module.ExpressionEngineImpl;
            FrameEventBus = module.FrameEventBus;
            EventBus = module.EventBus;
            Subscription = module.Subscription;
            RestfulService = module.RestfulService;
            VARIABLE_PARSERS = module.VARIABLE_PARSERS;
            FrameIdVariableParser = module.FrameIdVariableParser;
            ɵa$3 = module.ɵa;
            EventParamVariableParser = module.EventParamVariableParser;
            DataVariableParser = module.DataVariableParser;
            UIStateVariableParser = module.UIStateVariableParser;
            StateMachineVariableParser = module.StateMachineVariableParser;
            CommandVariableParser = module.CommandVariableParser;
        }, function (module) {
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            ListDataService = module.ListDataService;
            StateMachineService = module.StateMachineService;
            EndEditService = module.EndEditService;
            ValidationService = module.ValidationService;
            CommandService = module.CommandService;
            DataGridService = module.DataGridService;
            BatchEditService = module.BatchEditService;
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ComponentManagerService = module.ComponentManagerService;
            ExceptionHandler = module.ExceptionHandler;
            BackEndMessageHandler = module.BackEndMessageHandler;
            KeybindingService = module.KeybindingService;
            LocalizationService = module.LocalizationService;
            ApplicationParamService = module.ApplicationParamService;
            GridMiddlewareService = module.GridMiddlewareService;
            FocusInvalidService = module.FocusInvalidService;
            CommandServicesModule = module.CommandServicesModule;
            FormMessageService = module.FormMessageService;
            LanguageService = module.LanguageService;
            FormLoadingService = module.FormLoadingService;
            FormNotifyService = module.FormNotifyService;
            FormErrorService = module.FormErrorService;
            FilterConditionService = module.FilterConditionService;
            ChangeItemService = module.ChangeItemService;
            UIStateService = module.UIStateService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            TreeDataService = module.TreeDataService;
            SubTreeDataService = module.SubTreeDataService;
            CardDataService = module.CardDataService;
            RuntimeFrameworkService = module.RuntimeFrameworkService;
            SubListDataService = module.SubListDataService;
            RemoveDataService = module.RemoveDataService;
            SaveDataService = module.SaveDataService;
            EditDataService = module.EditDataService;
            FilterConditionDataService = module.FilterConditionDataService;
            RemoteSummaryService = module.RemoteSummaryService;
            BeActionService = module.BeActionService;
            ApproveService = module.ApproveService;
            PrintService = module.PrintService;
            AttachmentDataService = module.AttachmentDataService;
            AttachmentService = module.AttachmentService;
            FileService = module.FileService;
            NavigationEventService = module.NavigationEventService;
            MenuStateService = module.MenuStateService;
            QuerystringService = module.QuerystringService;
            NavigationService = module.NavigationService;
            SidebarService = module.SidebarService;
            FarrisFormService = module.FarrisFormService;
            FARRIS_FORM_COMPONENTS = module.FARRIS_FORM_COMPONENTS;
            DialogService = module.DialogService;
            RouterService = module.RouterService;
            AuthorityService = module.AuthorityService;
            ɵb = module.ɵb;
            ɵc = module.ɵc;
            DiscussionGroupService = module.DiscussionGroupService;
            FormAttentionService = module.FormAttentionService;
            FeatureDataService = module.FeatureDataService;
            FeatureRepository = module.FeatureRepository;
            FeatureEditService = module.FeatureEditService;
            ExpressionService = module.ExpressionService;
            PopUpService = module.PopUpService;
            DirtyCheckingService = module.DirtyCheckingService;
            FormService = module.FormService;
            ViewModelService = module.ViewModelService;
            PaginationService = module.PaginationService;
            FormManifestService = module.FormManifestService;
            FormExpressionManifestService = module.FormExpressionManifestService;
            WorkFlowMessageHandler = module.WorkFlowMessageHandler;
            WorkFlowMessageService = module.WorkFlowMessageService;
            WorkFlowMessage = module.WorkFlowMessage;
            BindingPathService = module.BindingPathService;
            FormControlService = module.FormControlService;
            FrameContextService = module.FrameContextService;
            HideEventService = module.HideEventService;
            FormWizardService = module.FormWizardService;
            CheckService = module.CheckService;
            DataCheckService = module.DataCheckService;
            EventService = module.EventService;
            FilterService$2 = module.FilterService;
            ParamService = module.ParamService;
            UserSettingsService = module.UserSettingsService;
        }, function (module) {
            VerifyDetailService = module.VerifyDetailService;
            VerifyDetailModule = module.VerifyDetailModule;
        }, function (module) {
            FrmCommonModule = module.FrmCommonModule;
            SessionService = module.SessionService;
            HttpService = module.HttpService;
            LanguageService$1 = module.LanguageService;
            CacheStorageAbstract = module.CacheStorageAbstract;
            CacheMemoryStorage = module.CacheMemoryStorage;
            CacheService = module.CacheService;
            WindowVariableService = module.WindowVariableService;
            TabEntityService = module.TabEntityService;
        }, function (module) {
            FrmI18nSettingService = module.FrmI18nSettingService;
            FrameworkService = module.FrameworkService;
            FrameworkVariableService = module.FrameworkVariableService;
            AppService = module.AppService;
            FrmEventBus = module.FrmEventBus;
            FuncsService = module.FuncsService;
            LoadingService$1 = module.LoadingService;
            CommonSharedModule = module.CommonSharedModule;
        }, function (module) {
            FarrisTooltipModule = module.FarrisTooltipModule;
            AttentionService = module.AttentionService;
        }, function (module) {
            GridModule = module.GridModule;
            GridComponent = module.GridComponent;
            BrowserSupportService = module.BrowserSupportService;
            SelectionService = module.SelectionService;
            GroupInfoService = module.GroupInfoService;
            GroupsService = module.GroupsService;
            ChangeNotificationService = module.ChangeNotificationService;
            DetailsService = module.DetailsService;
            EditService$1 = module.EditService$1;
            FilterService = module.FilterService;
            PDFService = module.PDFService;
            ResponsiveService = module.ResponsiveService;
            ExcelService = module.ExcelService;
            ScrollSyncService = module.ScrollSyncService;
            DomEventsService = module.DomEventsService;
            ColumnResizingService = module.ColumnResizingService;
            ColumnReorderService = module.ColumnReorderService;
            ColumnInfoService = module.ColumnInfoService;
            NavigationService$1 = module.NavigationService;
            SortService = module.SortService;
            SharedModule = module.SharedModule;
            DragAndDropModule = module.DragAndDropModule;
            GroupModule = module.GroupModule;
            BodyModule = module.BodyModule;
            SharedFilterModule = module.SharedFilterModule;
            RowFilterModule = module.RowFilterModule;
            FilterMenuModule = module.FilterMenuModule;
            ColumnMenuModule = module.ColumnMenuModule;
            HeaderModule = module.HeaderModule;
            FooterModule = module.FooterModule;
            PagerModule = module.PagerModule;
        }, function (module) {
            DateInputsModule = module.DateInputsModule;
            DOMService = module.DOMService;
            CenturyViewService = module.CenturyViewService;
            DecadeViewService = module.DecadeViewService;
            MonthViewService = module.MonthViewService;
            YearViewService = module.YearViewService;
            WeekNamesService = module.WeekNamesService;
            NavigationService$2 = module.NavigationService;
            BusViewService = module.BusViewService;
            DOMService$1 = module.DOMService$1;
            HoursService = module.HoursService;
            MinutesService = module.MinutesService;
            SecondsService = module.SecondsService;
            DayPeriodService = module.DayPeriodService;
            EventsModule$1 = module.EventsModule;
            DateInputModule = module.DateInputModule;
            CalendarCommonModule = module.CalendarCommonModule;
            TemplatesModule = module.TemplatesModule;
            VirtualizationModule = module.VirtualizationModule;
            CalendarModule$1 = module.CalendarModule;
            DatePickerModule = module.DatePickerModule;
            MultiViewCalendarModule = module.MultiViewCalendarModule;
            CalendarsModule = module.CalendarsModule;
            TimePickerModule$1 = module.TimePickerModule;
            DateRangeModule = module.DateRangeModule;
            TOUCH_ENABLED = module.TOUCH_ENABLED;
            touchEnabled = module.touchEnabled;
        }, function (module) {
            CommonUtils = module.CommonUtils;
            FarrisCommonModule = module.FarrisCommonModule;
            RuntimeStateService = module.RuntimeStateService;
            IdService = module.IdService;
            OverLayHiddenService = module.OverLayHiddenService;
        }, function (module) {
            DateHelperModule = module.DateHelperModule;
            DateTimeHelperService = module.DateTimeHelperService;
        }, function (module) {
            DropDownsModule = module.DropDownsModule;
            SharedDirectivesModule = module.SharedDirectivesModule;
            SharedModule$1 = module.SharedModule;
            DropDownListModule = module.DropDownListModule;
            AutoCompleteModule = module.AutoCompleteModule;
            ComboBoxModule = module.ComboBoxModule;
            MultiSelectModule$1 = module.MultiSelectModule;
            TOUCH_ENABLED$1 = module.TOUCH_ENABLED;
            touchEnabled$1 = module.touchEnabled;
        }, function (module) {
            ButtonsModule = module.ButtonsModule;
            ButtonModule = module.ButtonModule;
            ButtonGroupModule = module.ButtonGroupModule;
            ListModule = module.ListModule;
            SplitButtonModule = module.SplitButtonModule;
            DropDownButtonModule = module.DropDownButtonModule;
        }, function (module) {
            InputsModule = module.InputsModule;
            EventsModule = module.EventsModule;
            NumericTextBoxModule = module.NumericTextBoxModule;
            TextBoxModule = module.TextBoxModule;
            DraggableModule = module.DraggableModule;
            SliderModule = module.SliderModule;
            SwitchModule$1 = module.SwitchModule;
            MaskedTextBoxModule = module.MaskedTextBoxModule;
        }, function (module) {
            IntlModule = module.IntlModule;
            IntlService = module.IntlService;
            CldrIntlService = module.CldrIntlService;
        }, function () {}, function (module) {
            LookupGridComponent = module.LookupGridComponent;
            ServerSideToken = module.ServerSideToken;
            LookupModule = module.LookupModule;
            PersonalConfigService = module.PersonalConfigService;
            LookupDefaultMapping = module.LookupDefaultMapping;
            LookupUtils = module.LookupUtils;
        }, function (module) {
            TreeTableModule = module.TreeTableModule;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }, function (module) {
            FieldGroupModule = module.FieldGroupModule;
            ɵa$1 = module.ɵa;
        }, function (module) {
            FarrisTabsModule = module.FarrisTabsModule;
            NgbDropdownConfig = module.NgbDropdownConfig;
            NgbTooltipConfig = module.NgbTooltipConfig;
            TabService = module.TabService;
            TabConfig = module.TabConfig;
            NgbDropdownModule = module.NgbDropdownModule;
            NgbTooltipModule = module.NgbTooltipModule;
        }, function (module) {
            FarrisTagModule = module.FarrisTagModule;
        }, function (module) {
            FarrisSidebarModule = module.FarrisSidebarModule;
            FarrisSidebarService = module.FarrisSidebarService;
        }, function (module) {
            UploadDialogMoudle = module.UploadDialogMoudle;
            UploadDialogService = module.UploadDialogService;
            DownloadService = module.DownloadService;
            UploadService = module.UploadService;
            UploadModule = module.UploadModule;
        }, function (module) {
            FarrisSectionModule = module.FarrisSectionModule;
            FarrisSectionComponent = module.FarrisSectionComponent;
        }, function (module) {
            FarrisDatePickerModule = module.FarrisDatePickerModule;
        }, function (module) {
            FarrisTimeSpinnerModule = module.FarrisTimeSpinnerModule;
        }, function (module) {
            DatagridComponent = module.DatagridComponent;
            GRID_SETTINGS_HTTP = module.GRID_SETTINGS_HTTP;
            DatagridModule = module.DatagridModule;
            DatagridSmartFilterService = module.DatagridSmartFilterService;
            DatagridFacadeService = module.DatagridFacadeService;
            DatagridService = module.DatagridService;
            ɵt = module.ɵt;
            ValidatorMessagerService = module.ValidatorMessagerService;
            GRID_SETTINGS_SERVICE = module.GRID_SETTINGS_SERVICE;
            NgxPaginationModule = module.NgxPaginationModule;
            ScrollbarModule = module.ScrollbarModule;
            DatagridSmartFilterModule = module.DatagridSmartFilterModule;
            SCROLLBAR_CONFIG = module.SCROLLBAR_CONFIG;
            GRID_EDITORS = module.GRID_EDITORS;
            GRID_FILTER_ROW = module.GRID_FILTER_ROW;
        }, function (module) {
            WizardService = module.WizardService;
            WizardModule = module.WizardModule;
        }, function (module) {
            QuerySolutionModule = module.QuerySolutionModule;
            QUERYSOLUTION_HANDLER_TOKEN = module.QUERYSOLUTION_HANDLER_TOKEN;
        }, function (module) {
            FarrisButtonModule = module.FarrisButtonModule;
        }, function (module) {
            ListViewModule = module.ListViewModule;
        }, function (module) {
            TimePickerModule = module.TimePickerModule;
        }, function (module) {
            AngularDraggableModule = module.AngularDraggableModule;
        }, function (module) {
            SplitterModule = module.SplitterModule;
        }, function (module) {
            ListNavModule = module.ListNavModule;
        }, function (module) {
            TextModule = module.TextModule;
        }, function (module) {
            WFSubmiteService = module.WFSubmiteService;
            WFRuntimeModule = module.WFRuntimeModule;
            I18nService$1 = module.I18nService;
            TaskService$1 = module.TaskService;
            UserService = module.UserService;
        }, function (module) {
            MultiSelectModule = module.MultiSelectModule;
        }, function (module) {
            InputGroupModule = module.InputGroupModule;
        }, function (module) {
            ComboServerSideToken = module.ComboServerSideToken;
            ComboListModule = module.ComboListModule;
            ComboLocaleService = module.ComboLocaleService;
        }, function (module) {
            FarrisHtmlEditorModule = module.FarrisHtmlEditorModule;
            ɵb$3 = module.ɵb;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ɵa = module.ɵa;
            ɵb$1 = module.ɵb;
            ɵc$1 = module.ɵc;
            ɵe = module.ɵe;
        }, function (module) {
            EditorTypes = module.EditorTypes;
            DatagridEditorsModule = module.DatagridEditorsModule;
            EditorProviders = module.EditorProviders;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ɵa$4 = module.ɵa;
            ɵb$2 = module.ɵb;
            ɵc$2 = module.ɵc;
            ɵd$1 = module.ɵd;
            ɵe$1 = module.ɵe;
            ɵf$1 = module.ɵf;
            ɵg$1 = module.ɵg;
            ɵh$1 = module.ɵh;
            ɵi = module.ɵi;
            ɵj$1 = module.ɵj;
            ɵk = module.ɵk;
            DatagridEnumEditorComponent = module.DatagridEnumEditorComponent;
            DatagridFilterEditorComponent = module.DatagridFilterEditorComponent;
            DatagridSortEditorComponent = module.DatagridSortEditorComponent;
        }, function (module) {
            ViewChangeModule = module.ViewChangeModule;
        }, function (module) {
            SwitchModule = module.SwitchModule;
            SWITCH_OPTIONS = module.SWITCH_OPTIONS;
        }, function (module) {
            ListFilterModule = module.ListFilterModule;
            LISTFILTER_HANDLER_TOKEN = module.LISTFILTER_HANDLER_TOKEN;
            ConvertorService$2 = module.ConvertorService;
            SolutionService$2 = module.SolutionService;
            QuerySolutionService$1 = module.QuerySolutionService;
        }, function (module) {
            SimpleFilterModule = module.SimpleFilterModule;
            FilterService$1 = module.FilterService;
            ConvertorService = module.ConvertorService;
            SolutionService = module.SolutionService;
        }, function (module) {
            AvatarModule = module.AvatarModule;
        }, function (module) {
            CalendarModule = module.CalendarModule;
        }, function (module) {
            WFFlowchartService = module.WFFlowchartService;
            UiFlowchartModule = module.UiFlowchartModule;
            UiFlowchartService = module.UiFlowchartService;
        }, function (module) {
            NumberSpinnerModule = module.NumberSpinnerModule;
        }, function (module) {
            ComboLookupModule = module.ComboLookupModule;
        }, function (module) {
            ScrollspyModule = module.ScrollspyModule;
            FarrisScrollSpyService = module.FarrisScrollSpyService;
        }, function (module) {
            FileListModule = module.FileListModule;
            FileViewerService = module.FileViewerService;
            ɵj = module.ɵj;
            ɵs = module.ɵs;
            ɵn = module.ɵn;
            ɵu = module.ɵu;
            ɵv = module.ɵv;
            ɵo = module.ɵo;
            ɵz = module.ɵz;
            ɵd = module.ɵd;
            ɵa$2 = module.ɵa;
            ɵy = module.ɵy;
            ɵf = module.ɵf;
            ɵh = module.ɵh;
            ɵbe = module.ɵbe;
            ɵg = module.ɵg;
            ɵt$1 = module.ɵt;
            ɵbg = module.ɵbg;
            ɵbh = module.ɵbh;
        }, function (module) {
            LanguageTextboxModule = module.LanguageTextboxModule;
        }, function (module) {
            DynamicControlGroupModule = module.DynamicControlGroupModule;
        }, function (module) {
            BatchEditDialogModule = module.BatchEditDialogModule;
            BatchEditDialogService = module.BatchEditDialogService;
        }, function (module) {
            DatagridFilterRowModule = module.DatagridFilterRowModule;
            FilterRowComponent = module.FilterRowComponent;
        }, function (module) {
            DatagridSettingsModule = module.DatagridSettingsModule;
            DatagridSettingsService = module.DatagridSettingsService;
        }, function (module) {
            FarrisFooterModule = module.FarrisFooterModule;
        }, function (module) {
            DiscussionGroupModule = module.DiscussionGroupModule;
            DiscussionListService = module.DiscussionListService;
        }, function (module) {
            NavModule = module.NavModule;
        }, function (module) {
            TagsModule = module.TagsModule;
        }, function (module) {
            EditorModule = module.EditorModule;
            EditorService = module.EditorService;
            TINYMCE_SCRIPT_SRC = module.TINYMCE_SCRIPT_SRC;
        }, function (module) {
            FfileuploadAdaptUnifileModule = module.FfileuploadAdaptUnifileModule;
            FFileUploadAdaptUnifileConfigService = module.FFileUploadAdaptUnifileConfigService;
            FFileUploadAdaptUnifileConfigToken = module.FFileUploadAdaptUnifileConfigToken;
            FfileuploadAdaptUnifileService = module.FfileuploadAdaptUnifileService;
            FfilepreviewAdaptUnifileService = module.FfilepreviewAdaptUnifileService;
        }, function (module) {
            FEHeaderFooterModule = module.FEHeaderFooterModule;
        }, function (module) {
            FEPageModalModule = module.FEPageModalModule;
            FEPageModalService = module.FEPageModalService;
        }, function (module) {
            FeatureEditorModule = module.FeatureEditorModule;
            FeatureEditorService = module.FeatureEditorService;
            I18nService = module.I18nService;
        }, function (module) {
            FEScrollCollapsibleAreaModule = module.FEScrollCollapsibleAreaModule;
            FEScrollCollapsibleAreaService = module.FEScrollCollapsibleAreaService;
        }, function (module) {
            ActivatedRoute = module.ActivatedRoute;
            Router = module.Router;
            RouterModule = module.RouterModule;
            ɵangular_packages_router_router_a = module.ɵangular_packages_router_router_a;
            ɵEmptyOutletComponent = module.ɵEmptyOutletComponent;
            RouterOutlet = module.RouterOutlet;
            ChildrenOutletContexts = module.ChildrenOutletContexts;
            ROUTES = module.ROUTES;
        }, function (module) {
            LoadingComponentNgFactory = module.LoadingComponentNgFactory;
        }, function (module) {
            TooltipComponentNgFactory = module.TooltipComponentNgFactory;
        }, function (module) {
            ModalBackdropComponentNgFactory = module.ModalBackdropComponentNgFactory;
            ModalContainerComponentNgFactory = module.ModalContainerComponentNgFactory;
        }, function (module) {
            MessagerComponentNgFactory = module.MessagerComponentNgFactory;
        }, function (module) {
            NotifyContainerComponentNgFactory = module.NotifyContainerComponentNgFactory;
        }, function (module) {
            PopoverContainerComponentNgFactory = module.PopoverContainerComponentNgFactory;
        }, function (module) {
            PopupComponentNgFactory = module.PopupComponentNgFactory;
        }, function (module) {
            ɵbNgFactory = module.ɵbNgFactory;
            ɵiNgFactory = module.ɵiNgFactory;
            ɵwNgFactory = module.ɵwNgFactory;
            ɵbfNgFactory = module.ɵbfNgFactory;
            ɵcNgFactory = module.ɵcNgFactory;
            ɵeNgFactory = module.ɵeNgFactory;
            ɵbbNgFactory = module.ɵbbNgFactory;
            ɵbcNgFactory = module.ɵbcNgFactory;
            FileListComponentNgFactory = module.FileListComponentNgFactory;
        }, function (module) {
            WfApprovalLogsComponentNgFactory = module.WfApprovalLogsComponentNgFactory;
        }, function (module) {
            TimePickerPanelComponentNgFactory = module.TimePickerPanelComponentNgFactory;
        }, function (module) {
            CalendarComponentNgFactory = module.CalendarComponentNgFactory;
        }, function (module) {
            FarrisContextMenuComponentNgFactory = module.FarrisContextMenuComponentNgFactory;
        }, function (module) {
            DataTableComponentNgFactory = module.DataTableComponentNgFactory;
        }, function (module) {
            TreeTableComponentNgFactory = module.TreeTableComponentNgFactory;
        }, function (module) {
            View_LookupGridComponent_0 = module.View_LookupGridComponent_0;
            RenderType_LookupGridComponent = module.RenderType_LookupGridComponent;
            LookupLeftComponentNgFactory = module.LookupLeftComponentNgFactory;
            LookupTabsComponentNgFactory = module.LookupTabsComponentNgFactory;
            LookupQuickSelectPanelComponentNgFactory = module.LookupQuickSelectPanelComponentNgFactory;
        }, function (module) {
            SingleListComponentNgFactory = module.SingleListComponentNgFactory;
        }, function (module) {
            FilterPanelComponentNgFactory = module.FilterPanelComponentNgFactory;
        }, function (module) {
            UIFlowchartComponentNgFactory = module.UIFlowchartComponentNgFactory;
        }, function (module) {
            LanguageTextPanelComponentNgFactory = module.LanguageTextPanelComponentNgFactory;
        }, function (module) {
            EnumEditorComponentNgFactory = module.EnumEditorComponentNgFactory;
        }, function (module) {
            FilterEditorComponentNgFactory = module.FilterEditorComponentNgFactory;
        }, function (module) {
            SortEditorComponentNgFactory = module.SortEditorComponentNgFactory;
        }, function (module) {
            ɵlNgFactory = module.ɵlNgFactory;
            DatagridTextboxComponentNgFactory = module.DatagridTextboxComponentNgFactory;
            DatagridTextareaComponentNgFactory = module.DatagridTextareaComponentNgFactory;
            ɵaNgFactory = module.ɵaNgFactory;
            ɵbNgFactory$1 = module.ɵbNgFactory;
            ɵcNgFactory$1 = module.ɵcNgFactory;
            ɵdNgFactory = module.ɵdNgFactory;
            ɵeNgFactory$1 = module.ɵeNgFactory;
            ɵfNgFactory = module.ɵfNgFactory;
            ɵgNgFactory = module.ɵgNgFactory;
            ɵhNgFactory = module.ɵhNgFactory;
            ɵiNgFactory$1 = module.ɵiNgFactory;
            ɵjNgFactory = module.ɵjNgFactory;
            ɵkNgFactory = module.ɵkNgFactory;
            DatagridEnumEditorComponentNgFactory = module.DatagridEnumEditorComponentNgFactory;
            DatagridSortEditorComponentNgFactory = module.DatagridSortEditorComponentNgFactory;
            DatagridFilterEditorComponentNgFactory = module.DatagridFilterEditorComponentNgFactory;
        }, function (module) {
            TaskExecuteComponentNgFactory = module.TaskExecuteComponentNgFactory;
            TaskAssigninfoComponentNgFactory = module.TaskAssigninfoComponentNgFactory;
            ProcessSelectorComponentNgFactory = module.ProcessSelectorComponentNgFactory;
            AssigneeInfoComponentNgFactory = module.AssigneeInfoComponentNgFactory;
            TaskCommentComponentNgFactory = module.TaskCommentComponentNgFactory;
            CommentManageComponentNgFactory = module.CommentManageComponentNgFactory;
        }, function (module) {
            VerifyDetailComponentNgFactory = module.VerifyDetailComponentNgFactory;
        }, function (module) {
            StringFilterCellComponentNgFactory = module.StringFilterCellComponentNgFactory;
            NumericFilterCellComponentNgFactory = module.NumericFilterCellComponentNgFactory;
            BooleanFilterCellComponentNgFactory = module.BooleanFilterCellComponentNgFactory;
            DateFilterCellComponentNgFactory = module.DateFilterCellComponentNgFactory;
            StringFilterMenuComponentNgFactory = module.StringFilterMenuComponentNgFactory;
            NumericFilterMenuComponentNgFactory = module.NumericFilterMenuComponentNgFactory;
            DateFilterMenuComponentNgFactory = module.DateFilterMenuComponentNgFactory;
            BooleanFilterMenuComponentNgFactory = module.BooleanFilterMenuComponentNgFactory;
        }, function (module) {
            NgbTooltipWindowNgFactory = module.NgbTooltipWindowNgFactory;
        }, function (module) {
            FileUploadComponentNgFactory = module.FileUploadComponentNgFactory;
            UploadDialogComponentNgFactory = module.UploadDialogComponentNgFactory;
        }, function (module) {
            ɵbNgFactory$2 = module.ɵbNgFactory;
            QueryConditionComponentNgFactory = module.QueryConditionComponentNgFactory;
        }, function (module) {
            ɵcNgFactory$2 = module.ɵcNgFactory;
            ɵeNgFactory$2 = module.ɵeNgFactory;
        }, function (module) {
            ɵaNgFactory$1 = module.ɵaNgFactory;
        }, function (module) {
            ProcessSelectorComponentNgFactory$1 = module.ProcessSelectorComponentNgFactory;
            WfWorkitemHandleComponentNgFactory = module.WfWorkitemHandleComponentNgFactory;
            UserHelperComponentNgFactory = module.UserHelperComponentNgFactory;
            TaskAssignComponentNgFactory = module.TaskAssignComponentNgFactory;
            TaskSignaddComponentNgFactory = module.TaskSignaddComponentNgFactory;
            TaskTransferComponentNgFactory = module.TaskTransferComponentNgFactory;
            ɵaNgFactory$2 = module.ɵaNgFactory;
        }, function (module) {
            WindowComponentNgFactory = module.WindowComponentNgFactory;
            WindowTitleBarComponentNgFactory = module.WindowTitleBarComponentNgFactory;
            DialogComponentNgFactory = module.DialogComponentNgFactory;
            DialogTitleBarComponentNgFactory = module.DialogTitleBarComponentNgFactory;
        }, function (module) {
            ɵdNgFactory$1 = module.ɵdNgFactory;
            ɵfNgFactory$1 = module.ɵfNgFactory;
            ɵgNgFactory$1 = module.ɵgNgFactory;
            ɵhNgFactory$1 = module.ɵhNgFactory;
        }, function (module) {
            ɵbNgFactory$3 = module.ɵbNgFactory;
            ɵcNgFactory$3 = module.ɵcNgFactory;
            ɵdNgFactory$2 = module.ɵdNgFactory;
            ɵeNgFactory$3 = module.ɵeNgFactory;
            ɵfNgFactory$2 = module.ɵfNgFactory;
            ɵgNgFactory$2 = module.ɵgNgFactory;
            ɵhNgFactory$2 = module.ɵhNgFactory;
        }, function (module) {
            BatchEditDialogComponentNgFactory = module.BatchEditDialogComponentNgFactory;
            ResultConfirmComponentNgFactory = module.ResultConfirmComponentNgFactory;
        }, function (module) {
            DiscussionPersonnelComponentNgFactory = module.DiscussionPersonnelComponentNgFactory;
        }, function (module) {
            MultiDownloadInfoComponentNgFactory = module.MultiDownloadInfoComponentNgFactory;
        }, function (module) {
            FilterRowComponentNgFactory = module.FilterRowComponentNgFactory;
            FilterTextboxComponentNgFactory = module.FilterTextboxComponentNgFactory;
            FilterCheckboxComponentNgFactory = module.FilterCheckboxComponentNgFactory;
            ConditionEditorComponentNgFactory = module.ConditionEditorComponentNgFactory;
            FilterDatalistComponentNgFactory = module.FilterDatalistComponentNgFactory;
            FilterRowPanelComponentNgFactory = module.FilterRowPanelComponentNgFactory;
            FilterRowEditorComponentNgFactory = module.FilterRowEditorComponentNgFactory;
            FilterSelectComponentNgFactory = module.FilterSelectComponentNgFactory;
        }, function (module) {
            OrganizationSelectorComponentNgFactory = module.OrganizationSelectorComponentNgFactory;
            GridOrganizationSelectorComponentNgFactory = module.GridOrganizationSelectorComponentNgFactory;
        }, function (module) {
            DatagridSettingsComponentNgFactory = module.DatagridSettingsComponentNgFactory;
            SimpleColumnsComponentNgFactory = module.SimpleColumnsComponentNgFactory;
            NewSchemeComponentNgFactory = module.NewSchemeComponentNgFactory;
            SchemeListComponentNgFactory = module.SchemeListComponentNgFactory;
        }, function (module) {
            FEPageModalComponentNgFactory = module.FEPageModalComponentNgFactory;
            FEModalBackdropComponentNgFactory = module.FEModalBackdropComponentNgFactory;
            ɵaNgFactory$3 = module.ɵaNgFactory;
        }, function (module) {
            FeatureEditorComponentNgFactory = module.FeatureEditorComponentNgFactory;
        }, function (module) {
            View_ResponseToolbarComponent_0 = module.View_ResponseToolbarComponent_0;
            RenderType_ResponseToolbarComponent = module.RenderType_ResponseToolbarComponent;
        }, function (module) {
            LocaleService = module.LocaleService;
            FARRIS_LOCAL_CUSTOM_DATA = module.FARRIS_LOCAL_CUSTOM_DATA;
            LocaleModule = module.LocaleModule;
        }, function (module) {
            ShortcutsService = module.ShortcutsService;
        }, function (module) {
            View_DatagridComponent_0 = module.View_DatagridComponent_0;
            RenderType_DatagridComponent = module.RenderType_DatagridComponent;
        }, function (module) {
            DialogService$1 = module.DialogService;
            FarrisDialogModule = module.FarrisDialogModule;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
        }, function (module) {
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
        }, function (module) {
            WfTaskHandlerService = module.WfTaskHandlerService;
            TaskService = module.TaskService;
            I18nService$2 = module.I18nService;
            WfTaskHandlerModule = module.WfTaskHandlerModule;
        }, function (module) {
            WindowService = module.WindowService;
            WindowContainerService = module.WindowContainerService;
            DialogContainerService = module.DialogContainerService;
            DialogService$2 = module.DialogService;
            SharedModule$2 = module.SharedModule;
            WindowModule = module.WindowModule;
            DialogModule = module.DialogModule;
        }, function (module) {
            LocalizationService$1 = module.LocalizationService;
        }, function (module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
        }, function (module) {
            PositioningService = module.PositioningService;
        }, function (module) {
            ComponentLoaderFactory = module.ComponentLoaderFactory;
        }, function (module) {
            PaginationService$1 = module.PaginationService;
            PaginationModule = module.PaginationModule;
        }, function (module) {
            PopoverConfig = module.PopoverConfig;
            PopoverModule = module.PopoverModule;
        }, function (module) {
            ColumnFormatService = module.ColumnFormatService;
            DataColumnModule = module.DataColumnModule;
        }, function (module) {
            PopupService = module.PopupService;
            POPUP_CONTAINER = module.POPUP_CONTAINER;
            PopupModule = module.PopupModule;
        }, function (module) {
            WfApprovalLogsService = module.WfApprovalLogsService;
            WfApprovalLogsModule = module.WfApprovalLogsModule;
        }, function (module) {
            FarrisContextMenuService = module.FarrisContextMenuService;
            FarrisContextMenuModule = module.FarrisContextMenuModule;
        }, function (module) {
            ResizeService = module.ResizeService;
        }, function (module) {
            QuerySolutionService = module.QuerySolutionService;
            FilterConditionModule = module.FilterConditionModule;
        }, function (module) {
            ResizeBatchService = module.ResizeBatchService;
            ResizeSensorModule = module.ResizeSensorModule;
        }, function (module) {
            SolutionService$1 = module.SolutionService;
            ConvertorService$1 = module.ConvertorService;
            QueryConditionModule = module.QueryConditionModule;
        }, function (module) {
            TaskCommentService = module.TaskCommentService;
            TaskCommentUIState = module.TaskCommentUIState;
            TaskCommentViewModel = module.TaskCommentViewModel;
            I18nService$3 = module.I18nService;
            TaskCommentRepository = module.TaskCommentRepository;
            WFCommentModule = module.WFCommentModule;
        }, function (module) {
            UploadServerService = module.UploadServerService;
            FFileUploaderService = module.FFileUploaderService;
            FFileUploadModule = module.FFileUploadModule;
            FFileUploadAPIServiceToken = module.FFileUploadAPIServiceToken;
        }, function (module) {
            PerfectScrollbarModule = module.PerfectScrollbarModule;
        }, function (module) {
            FAreaResponseModule = module.FAreaResponseModule;
        }, function (module) {
            DataTableModule = module.DataTableModule;
        }, function (module) {
            DatalistModule = module.DatalistModule;
        }, function (module) {
            LayoutModule$1 = module.LayoutModule;
        }, function (module) {
            FDropdownDirectiveTypeModule = module.FDropdownDirectiveTypeModule;
        }, function (module) {
            FilterPanelModule = module.FilterPanelModule;
        }, function (module) {
            TaskImplApiModule = module.TaskImplApiModule;
        }, function (module) {
            WfSignModule = module.WfSignModule;
        }, function (module) {
            EnumEditorModule = module.EnumEditorModule;
        }, function (module) {
            FilterModule = module.FilterModule;
        }, function (module) {
            SorterModule = module.SorterModule;
        }, function (module) {
            ProgressModule = module.ProgressModule;
        }, function (module) {
            ProgressStepModule = module.ProgressStepModule;
        }, function (module) {
            TreeModule = module.TreeModule;
        }, function (module) {
            OrganizationSelectorModule = module.OrganizationSelectorModule;
        }],
        execute: function () {

            function createTranslateLoader(http, version) {
                var versionSuffix = "";
                if (version) {
                    versionSuffix = "?v=" + version;
                }
                return new TranslateHttpLoader(http, '/apps/hotwave/stock/web/bo-goodsstock-front/goodsstockform/i18n/', '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/TextBox/merchantID_MerchantID_MerchantName_79ed0464_8y3y/placeHolder": "", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5/editor/LookupEdit/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_s77w/placeHolder": "", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5/editor/LookupEdit/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_s77w/dialogTitle": "", "merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5": "上游商户/经销商", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5/editor/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_s77w": "文本", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5/editor/TextBox/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_s77w/placeHolder": "", "goodsID_GoodsID_Number_7c020a3a_3vys": "上架数量", "GridField/goodsID_GoodsID_Number_7c020a3a_3vys/editor/goodsID_GoodsID_Number_7c020a3a_kdpj": "数值框", "GridField/goodsID_GoodsID_Number_7c020a3a_3vys/editor/NumberSpinner/goodsID_GoodsID_Number_7c020a3a_kdpj/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "商品库表单", "page-header-toolbar": "", "button-add": "新增", "ToolBar-cloned-lit8": "批量新增", "button-edit": "批量编辑", "button-save": "保存", "button-cancel": "取消", "button-delete": "删除", "page-main": "", "data-grid-component-ref": "", "HiddenContainer-form": "", "helpId": "商品帮助", "LookupEdit/helpId/placeHolder": "", "LookupEdit/helpId/dialogTitle": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "merchantID_MerchantID_MerchantName_79ed0464_zoer": "商户名称", "GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/merchantID_MerchantID_MerchantName_79ed0464_8y3y": "文本", "GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/LookupEdit/merchantID_MerchantID_MerchantName_79ed0464_8y3y/placeHolder": "", "GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/LookupEdit/merchantID_MerchantID_MerchantName_79ed0464_8y3y/dialogTitle": "", "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik": "上游商户/经销商", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik/editor/merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824": "商户名称", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik/editor/TextBox/merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824/placeHolder": "", "goodsID_GoodsID_GoodsName_ade04dc1_1mgy": "商品名称", "GridField/goodsID_GoodsID_GoodsName_ade04dc1_1mgy/editor/goodsID_GoodsID_GoodsName_ade04dc1_89ef": "文本", "GridField/goodsID_GoodsID_GoodsName_ade04dc1_1mgy/editor/TextBox/goodsID_GoodsID_GoodsName_ade04dc1_89ef/placeHolder": "", "goodsID_GoodsID_Specification_d208e853_2hno": "规格型号", "GridField/goodsID_GoodsID_Specification_d208e853_2hno/editor/goodsID_GoodsID_Specification_d208e853_2i8n": "文本", "GridField/goodsID_GoodsID_Specification_d208e853_2hno/editor/TextBox/goodsID_GoodsID_Specification_d208e853_2i8n/placeHolder": "", "goodsID_GoodsID_Price_bc6384c0_fjgd": "单价", "GridField/goodsID_GoodsID_Price_bc6384c0_fjgd/editor/goodsID_GoodsID_Price_bc6384c0_fq6p": "数值框", "GridField/goodsID_GoodsID_Price_bc6384c0_fjgd/editor/NumberSpinner/goodsID_GoodsID_Price_bc6384c0_fq6p/placeHolder": "", "stockNum_f152e4b2_fhhp": "当前库存量", "GridField/stockNum_f152e4b2_fhhp/editor/stockNum_f152e4b2_k1ri": "当前库存量", "GridField/stockNum_f152e4b2_fhhp/editor/NumberSpinner/stockNum_f152e4b2_k1ri/placeHolder": "" } };
            var LangPipe = /** @class */ (function () {
                function LangPipe(translate, http) {
                    this.translate = translate;
                    this.http = http;
                }
                LangPipe.prototype.transform = function (key, langCode, defaultValue) {
                    var translateValue = this.translate.instant(key);
                    if (translateValue == "JitI18nDefaultValue") {
                        return defaultValue ? defaultValue : "";
                    }
                    return translateValue;
                };
                LangPipe = __decorate([
                    Pipe({ name: 'lang' }),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], LangPipe);
                return LangPipe;
            }());
            var SafeHtmlPipe = /** @class */ (function () {
                function SafeHtmlPipe(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                SafeHtmlPipe.prototype.transform = function (url) {
                    if (!url) {
                        url = "";
                    }
                    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
                };
                SafeHtmlPipe = __decorate([
                    Pipe({ name: 'safeHtml' }),
                    __metadata("design:paramtypes", [DomSanitizer])
                ], SafeHtmlPipe);
                return SafeHtmlPipe;
            }());
            var LangService = /** @class */ (function () {
                function LangService(translate) {
                    this.translate = translate;
                }
                LangService.prototype.transform = function (key, langCode, defaultValue) {
                    var translateValue = this.translate.instant(key);
                    if (translateValue == "JitI18nDefaultValue") {
                        return defaultValue ? defaultValue : "";
                    }
                    return translateValue;
                };
                LangService.prototype.getCurrentLanguage = function () {
                    return this.translate.currentLang;
                };
                LangService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService])
                ], LangService);
                return LangService;
            }());
            var TranslateResolveService = /** @class */ (function () {
                function TranslateResolveService(translate, http) {
                    this.translate = translate;
                    this.http = http;
                    translate.defaultLang = 'zh-CHS';
                    translate.setTranslation('zh-CHS', lang['zh-CHS']);
                }
                TranslateResolveService.prototype.resolve = function (route, state) {
                    var _this = this;
                    var langCode = localStorage.getItem('languageCode');
                    if (!langCode) {
                        langCode = "zh-CHS";
                    }
                    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http, null))) {
                        this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
                        return of(this.translate[langCode]);
                    }
                    else {
                        var httpOb = this.http.get("/apps/hotwave/stock/web/bo-goodsstock-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                            var currentVersion = null;
                            if (data instanceof Array) {
                                var versionKey_1 = "goodsstockform/" + langCode + ".json";
                                data.forEach(function (item) {
                                    if (item.category == "i18n" && item.key == versionKey_1) {
                                        currentVersion = item.value;
                                    }
                                });
                            }
                            _this.translate.defaultLang = langCode;
                            _this.translate.currentLang = langCode;
                            _this.translate.currentLoader = createTranslateLoader(_this.http, currentVersion);
                            var tran = _this.translate.getTranslation(langCode).pipe(catchError(function (err) {
                                console.error("read resource file failed,please check!!! " + err);
                                return of(err);
                            }));
                            return tran;
                        }));
                        return httpOb;
                    }
                };
                TranslateResolveService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [TranslateService, HttpClient])
                ], TranslateResolveService);
                return TranslateResolveService;
            }());

            var EventDeclaration = /** @class */ (function (_super) {
                __extends(EventDeclaration, _super);
                function EventDeclaration() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EventDeclaration = __decorate([
                    Injectable()
                ], EventDeclaration);
                return EventDeclaration;
            }(Declaration));

            var ɵ0 = { type: 'string' };
            var RootViewmodel = /** @class */ (function (_super) {
                __extends(RootViewmodel, _super);
                function RootViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    _this.childViewModels = {
                        'DataGridComponentViewmodel': 'dataGridComponentViewmodel'
                    };
                    return _this;
                }
                RootViewmodel.prototype.Load1 = function (commandParam) { return; };
                RootViewmodel.prototype.Add1 = function (commandParam) { return; };
                RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Save1 = function (commandParam) { return; };
                RootViewmodel.prototype.Cancel1 = function (commandParam) { return; };
                RootViewmodel.prototype.Remove1 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelbatchAppend1 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelopenHiddenHelp1 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelbatchAppend2 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelSave1 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelbatchAppend3 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelbatchAppend4 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelbatchAppend5 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'Load1',
                        params: {
                            filter: '',
                            sort: ''
                        },
                        paramDescriptions: {
                            filter: { type: 'string' },
                            sort: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Load1", null);
                __decorate([
                    NgCommand({
                        name: 'Add1',
                        params: {
                            transitionAction: 'Create'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Add1", null);
                __decorate([
                    NgCommand({
                        name: 'Edit1',
                        params: {
                            transitionAction: 'Edit'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Edit1", null);
                __decorate([
                    NgCommand({
                        name: 'Save1',
                        params: {
                            transitionAction: 'Save',
                            commandName: 'Save1',
                            frameId: 'data-grid-component',
                            successMsg: ''
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' },
                            commandName: { type: 'string' },
                            frameId: { type: 'string' },
                            successMsg: { type: '' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Save1", null);
                __decorate([
                    NgCommand({
                        name: 'Cancel1',
                        params: {
                            transitionAction: 'Cancel',
                            loadCmdName: '',
                            loadCmdFrameId: ''
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' },
                            loadCmdName: { type: 'string' },
                            loadCmdFrameId: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Cancel1", null);
                __decorate([
                    NgCommand({
                        name: 'Remove1',
                        params: {
                            id: '{DATA~/data-grid-component/id}',
                            ifSave: '{STATEMACHINE~/renderStates/canEdit}',
                            refreshCommandName: '',
                            refreshCommandFrameId: '',
                            successMsg: ''
                        },
                        paramDescriptions: {
                            id: ɵ0,
                            ifSave: { type: 'boolean' },
                            refreshCommandName: { type: 'string' },
                            refreshCommandFrameId: { type: 'string' },
                            successMsg: { type: '' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Remove1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelbatchAppend1',
                        params: {
                            frameId: '#{data-grid-component}',
                            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                            transitAction: 'Edit'
                        },
                        paramDescriptions: {
                            frameId: { type: 'string' },
                            mapFields: { type: 'string' },
                            transitAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelbatchAppend1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelopenHiddenHelp1',
                        params: {
                            helpId: 'helpId'
                        },
                        paramDescriptions: {
                            helpId: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelopenHiddenHelp1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelbatchAppend2',
                        params: {
                            frameId: '#{data-grid-component}',
                            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                            transitAction: 'Create'
                        },
                        paramDescriptions: {
                            frameId: { type: 'string' },
                            mapFields: { type: 'string' },
                            transitAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelbatchAppend2", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelSave1',
                        params: {
                            transitionAction: 'Save',
                            commandName: '',
                            frameId: '',
                            successMsg: ''
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' },
                            commandName: { type: 'string' },
                            frameId: { type: 'string' },
                            successMsg: { type: '' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelSave1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelbatchAppend3',
                        params: {
                            frameId: '#{data-grid-component}',
                            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                            transitAction: 'Create'
                        },
                        paramDescriptions: {
                            frameId: { type: 'string' },
                            mapFields: { type: 'string' },
                            transitAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelbatchAppend3", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelbatchAppend4',
                        params: {
                            frameId: '#{data-grid-component}',
                            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                            transitAction: 'Create'
                        },
                        paramDescriptions: {
                            frameId: { type: 'string' },
                            mapFields: { type: 'string' },
                            transitAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelbatchAppend4", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelbatchAppend5',
                        params: {
                            frameId: '#{data-grid-component}',
                            mapFields: '{"id":"goodsID.goodsID","goodsName":"goodsID.goodsID_GoodsName","specification":"goodsID.goodsID_Specification","price":"goodsID.goodsID_Price"}',
                            transitAction: 'Create'
                        },
                        paramDescriptions: {
                            frameId: { type: 'string' },
                            mapFields: { type: 'string' },
                            transitAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelbatchAppend5", null);
                RootViewmodel = __decorate([
                    Injectable()
                ], RootViewmodel);
                return RootViewmodel;
            }(ViewModel));

            var MerChant5521Entity = /** @class */ (function (_super) {
                __extends(MerChant5521Entity, _super);
                function MerChant5521Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'MerchantID',
                        dataField: 'merchantID',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'MerchantID.MerchantID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MerChant5521Entity.prototype, "merchantID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'MerchantName',
                        dataField: 'merchantID_MerchantName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'MerchantID.MerchantID_MerchantName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MerChant5521Entity.prototype, "merchantID_MerchantName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'MerchantName(ParentMerchantID)',
                        dataField: 'merchantID_ParentMerchantID_MerchantName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'MerchantID.MerchantID_ParentMerchantID_MerchantName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MerChant5521Entity.prototype, "merchantID_ParentMerchantID_MerchantName", void 0);
                MerChant5521Entity = __decorate([
                    NgEntity({
                        originalCode: "MerchantID",
                        nodeCode: "merchantID"
                    })
                ], MerChant5521Entity);
                return MerChant5521Entity;
            }(Entity));

            var Goods28baEntity = /** @class */ (function (_super) {
                __extends(Goods28baEntity, _super);
                function Goods28baEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'GoodsID',
                        dataField: 'goodsID',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'GoodsID.GoodsID',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Goods28baEntity.prototype, "goodsID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'GoodsName',
                        dataField: 'goodsID_GoodsName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'GoodsID.GoodsID_GoodsName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Goods28baEntity.prototype, "goodsID_GoodsName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Specification',
                        dataField: 'goodsID_Specification',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'GoodsID.GoodsID_Specification',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Goods28baEntity.prototype, "goodsID_Specification", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Category',
                        dataField: 'goodsID_Category',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'GoodsID.GoodsID_Category',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [30],
                                message: '最大长度为30',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], Goods28baEntity.prototype, "goodsID_Category", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Price',
                        dataField: 'goodsID_Price',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'GoodsID.GoodsID_Price',
                    }),
                    __metadata("design:type", Object)
                ], Goods28baEntity.prototype, "goodsID_Price", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Number',
                        dataField: 'goodsID_Number',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'GoodsID.GoodsID_Number',
                    }),
                    __metadata("design:type", Object)
                ], Goods28baEntity.prototype, "goodsID_Number", void 0);
                Goods28baEntity = __decorate([
                    NgEntity({
                        originalCode: "GoodsID",
                        nodeCode: "goodsID"
                    })
                ], Goods28baEntity);
                return Goods28baEntity;
            }(Entity));

            var GoodsStockEntity = /** @class */ (function (_super) {
                __extends(GoodsStockEntity, _super);
                function GoodsStockEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'ID',
                        dataField: 'id',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ID',
                        validRules: [
                            {
                                type: 'required',
                                constraints: [true],
                            },
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GoodsStockEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Version',
                        dataField: 'version',
                        originalDataFieldType: 'DateTime',
                        initValue: '0001-01-01T00:00:00',
                        path: 'Version',
                        enableTimeZone: true,
                    }),
                    __metadata("design:type", String)
                ], GoodsStockEntity.prototype, "version", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'StockNum',
                        dataField: 'stockNum',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'StockNum',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "stockNum", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'DailySalesNum',
                        dataField: 'dailySalesNum',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'DailySalesNum',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "dailySalesNum", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'SafetyStockDays',
                        dataField: 'safetyStockDays',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'SafetyStockDays',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "safetyStockDays", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'SafetyStockNum',
                        dataField: 'safetyStockNum',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'SafetyStockNum',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "safetyStockNum", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'InPurchaseNum',
                        dataField: 'inPurchaseNum',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'InPurchaseNum',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "inPurchaseNum", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'InSalesNum',
                        dataField: 'inSalesNum',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'InSalesNum',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "inSalesNum", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'SuggestPurchaseNum',
                        dataField: 'suggestPurchaseNum',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'SuggestPurchaseNum',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "suggestPurchaseNum", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'RecentPurchasePrice',
                        dataField: 'recentPurchasePrice',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'RecentPurchasePrice',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "recentPurchasePrice", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'StockAmount',
                        dataField: 'stockAmount',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'StockAmount',
                    }),
                    __metadata("design:type", Object)
                ], GoodsStockEntity.prototype, "stockAmount", void 0);
                __decorate([
                    NgObject({
                        dataField: 'merchantID',
                        originalDataField: 'MerchantID',
                        type: MerChant5521Entity
                    }),
                    __metadata("design:type", MerChant5521Entity)
                ], GoodsStockEntity.prototype, "merchantID", void 0);
                __decorate([
                    NgObject({
                        dataField: 'goodsID',
                        originalDataField: 'GoodsID',
                        type: Goods28baEntity
                    }),
                    __metadata("design:type", Goods28baEntity)
                ], GoodsStockEntity.prototype, "goodsID", void 0);
                GoodsStockEntity = __decorate([
                    NgEntity({
                        originalCode: "GoodsStock",
                        nodeCode: "goodsStocks"
                    })
                ], GoodsStockEntity);
                return GoodsStockEntity;
            }(Entity));

            var GoodsStockProxy = /** @class */ (function (_super) {
                __extends(GoodsStockProxy, _super);
                function GoodsStockProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/hotwave/stock/v1.0/goodsstockform_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
                GoodsStockProxy = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [HttpClient,
                        UriService])
                ], GoodsStockProxy);
                return GoodsStockProxy;
            }(BefProxy));

            var GoodsStockRepository = /** @class */ (function (_super) {
                __extends(GoodsStockRepository, _super);
                function GoodsStockRepository(injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.name = 'GoodsStockRepository';
                    _this.paginationInfo = {
                        GoodsStockEntity: {
                            pageSize: 20,
                        }
                    };
                    _this.proxy = injector.get(GoodsStockProxy, null);
                    return _this;
                }
                GoodsStockRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/hotwave/stock/v1.0/goodsstockform_frm',
                        entityType: GoodsStockEntity
                    }),
                    __metadata("design:paramtypes", [Injector])
                ], GoodsStockRepository);
                return GoodsStockRepository;
            }(BefRepository));

            var RootViewmodelForm = /** @class */ (function (_super) {
                __extends(RootViewmodelForm, _super);
                function RootViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '商品库',
                        enableValidate: false
                    }),
                    Injectable()
                ], RootViewmodelForm);
                return RootViewmodelForm;
            }(Form));

            var ɵ0$1 = function (context) { return context.state === 'add' || context.state === 'edit' || context.state === 'init'; }, ɵ1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ2 = function (context) { return context.state === 'init'; }, ɵ3 = function (context) { return context.state === 'add' || context.state === 'init'; }, ɵ4 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ5 = function (context) { return context.state === 'add' || context.state === 'edit'; };
            var RootViewmodelStateMachine = /** @class */ (function (_super) {
                __extends(RootViewmodelStateMachine, _super);
                function RootViewmodelStateMachine() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgState({ name: "新增" }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "add", void 0);
                __decorate([
                    NgState({
                        initialState: true,
                        name: "初始"
                    }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "init", void 0);
                __decorate([
                    NgState({ name: "编辑" }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "edit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ0$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "editable", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ2
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canEdit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ3
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ4
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canSave", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ5
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canCancel", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Cancel", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'add'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Create", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'edit'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Edit", void 0);
                __decorate([
                    NgAction({
                        transitTo: 'init'
                    }),
                    __metadata("design:type", Function)
                ], RootViewmodelStateMachine.prototype, "Save", void 0);
                RootViewmodelStateMachine = __decorate([
                    Injectable()
                ], RootViewmodelStateMachine);
                return RootViewmodelStateMachine;
            }(StateMachine));

            var RootViewmodelUIState = /** @class */ (function (_super) {
                __extends(RootViewmodelUIState, _super);
                function RootViewmodelUIState() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.goodsinfo = '';
                    return _this;
                }
                __decorate([
                    NgParam({ originalDataType: "String", category: "locale" }),
                    __metadata("design:type", String)
                ], RootViewmodelUIState.prototype, "goodsinfo", void 0);
                RootViewmodelUIState = __decorate([
                    Injectable()
                ], RootViewmodelUIState);
                return RootViewmodelUIState;
            }(UIState));

            var Load1Handler = /** @class */ (function (_super) {
                __extends(Load1Handler, _super);
                function Load1Handler(_NavigationMiddlewareService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                Load1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onClosing', function (context) {
                        var args = [];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/sort}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'load', args, context);
                    });
                    this.addLink('onClosing', 'load', "1==1");
                };
                Load1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Load1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        ListDataService])
                ], Load1Handler);
                return Load1Handler;
            }(CommandHandler));

            var Add1Handler = /** @class */ (function (_super) {
                __extends(Add1Handler, _super);
                function Add1Handler(_ListDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Add1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('append', function (context) {
                        var args = [];
                        return _this.invoke(_this._ListDataService1, 'append', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('append', 'transit', "1==1");
                };
                Add1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Add1'
                    }),
                    __metadata("design:paramtypes", [ListDataService,
                        StateMachineService])
                ], Add1Handler);
                return Add1Handler;
            }(CommandHandler));

            var Edit1Handler = /** @class */ (function (_super) {
                __extends(Edit1Handler, _super);
                function Edit1Handler(_StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Edit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                };
                Edit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Edit1'
                    }),
                    __metadata("design:paramtypes", [StateMachineService])
                ], Edit1Handler);
                return Edit1Handler;
            }(CommandHandler));

            var Save1Handler = /** @class */ (function (_super) {
                __extends(Save1Handler, _super);
                function Save1Handler(_EndEditService1, _ValidationService1, _ListDataService1, _CommandService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._EndEditService1 = _EndEditService1;
                    _this._ValidationService1 = _ValidationService1;
                    _this._ListDataService1 = _ListDataService1;
                    _this._CommandService1 = _CommandService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Save1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('validateAll', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'validateAll', args, context);
                    });
                    this.addTask('save', function (context) {
                        var args = [
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'save', args, context);
                    });
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/commandName}',
                            '{COMMAND~/params/frameId}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'validateAll', "1==1");
                    this.addLink('validateAll', 'save', "1==1");
                    this.addLink('save', 'execute', "1==1");
                    this.addLink('execute', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                Save1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Save1'
                    }),
                    __metadata("design:paramtypes", [EndEditService,
                        ValidationService,
                        ListDataService,
                        CommandService,
                        StateMachineService])
                ], Save1Handler);
                return Save1Handler;
            }(CommandHandler));

            var Cancel1Handler = /** @class */ (function (_super) {
                __extends(Cancel1Handler, _super);
                function Cancel1Handler(_ValidationService1, _ListDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ValidationService1 = _ValidationService1;
                    _this._ListDataService1 = _ListDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Cancel1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('cancel', function (context) {
                        var args = [];
                        return _this.invoke(_this._ListDataService1, 'cancel', args, context);
                    });
                    this.addTask('refresh', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCmdName}',
                            '{COMMAND~/params/loadCmdFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refresh', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('cancel', 'refresh', "1==1");
                    this.addLink('refresh', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                Cancel1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Cancel1'
                    }),
                    __metadata("design:paramtypes", [ValidationService,
                        ListDataService,
                        StateMachineService])
                ], Cancel1Handler);
                return Cancel1Handler;
            }(CommandHandler));

            var Remove1Handler = /** @class */ (function (_super) {
                __extends(Remove1Handler, _super);
                function Remove1Handler(_DataGridService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                Remove1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            '{COMMAND~/params/ifSave}',
                            '{COMMAND~/params/successMsg}',
                            'true',
                            'true'
                        ];
                        return _this.invoke(_this._ListDataService1, 'remove', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
                    });
                    this.addTask('refreshAfterRemoving', function (context) {
                        var args = [
                            '{COMMAND~/params/refreshCommandName}',
                            '{COMMAND~/params/refreshCommandFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refreshAfterRemoving', args, context);
                    });
                    this.addLink('remove', 'uncheckDeletedRows', "1==1");
                    this.addLink('uncheckDeletedRows', 'refreshAfterRemoving', "1==1");
                };
                Remove1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Remove1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        ListDataService])
                ], Remove1Handler);
                return Remove1Handler;
            }(CommandHandler));

            var rootviewmodelbatchAppend1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelbatchAppend1Handler, _super);
                function rootviewmodelbatchAppend1Handler(_BatchEditService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._BatchEditService1 = _BatchEditService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                rootviewmodelbatchAppend1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('batchAppend', function (context) {
                        var args = [
                            '{COMMAND~/params/frameId}',
                            '{COMMAND~/params/mapFields}'
                        ];
                        return _this.invoke(_this._BatchEditService1, 'batchAppend', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('batchAppend', 'transit', "1==1");
                };
                rootviewmodelbatchAppend1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelbatchAppend1'
                    }),
                    __metadata("design:paramtypes", [BatchEditService,
                        StateMachineService])
                ], rootviewmodelbatchAppend1Handler);
                return rootviewmodelbatchAppend1Handler;
            }(CommandHandler));

            var rootviewmodelopenHiddenHelp1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelopenHiddenHelp1Handler, _super);
                function rootviewmodelopenHiddenHelp1Handler(_BatchEditService1) {
                    var _this = _super.call(this) || this;
                    _this._BatchEditService1 = _BatchEditService1;
                    return _this;
                }
                rootviewmodelopenHiddenHelp1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('openHiddenHelp', function (context) {
                        var args = [
                            '{COMMAND~/params/helpId}'
                        ];
                        return _this.invoke(_this._BatchEditService1, 'openHiddenHelp', args, context);
                    });
                };
                rootviewmodelopenHiddenHelp1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelopenHiddenHelp1'
                    }),
                    __metadata("design:paramtypes", [BatchEditService])
                ], rootviewmodelopenHiddenHelp1Handler);
                return rootviewmodelopenHiddenHelp1Handler;
            }(CommandHandler));

            var rootviewmodelbatchAppend2Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelbatchAppend2Handler, _super);
                function rootviewmodelbatchAppend2Handler(_BatchEditService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._BatchEditService1 = _BatchEditService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                rootviewmodelbatchAppend2Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('batchAppend', function (context) {
                        var args = [
                            '{COMMAND~/params/frameId}',
                            '{COMMAND~/params/mapFields}'
                        ];
                        return _this.invoke(_this._BatchEditService1, 'batchAppend', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('batchAppend', 'transit', "1==1");
                };
                rootviewmodelbatchAppend2Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelbatchAppend2'
                    }),
                    __metadata("design:paramtypes", [BatchEditService,
                        StateMachineService])
                ], rootviewmodelbatchAppend2Handler);
                return rootviewmodelbatchAppend2Handler;
            }(CommandHandler));

            var rootviewmodelSave1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelSave1Handler, _super);
                function rootviewmodelSave1Handler(_EndEditService1, _ValidationService1, _ListDataService1, _CommandService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._EndEditService1 = _EndEditService1;
                    _this._ValidationService1 = _ValidationService1;
                    _this._ListDataService1 = _ListDataService1;
                    _this._CommandService1 = _CommandService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                rootviewmodelSave1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('validateAll', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'validateAll', args, context);
                    });
                    this.addTask('save', function (context) {
                        var args = [
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'save', args, context);
                    });
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/commandName}',
                            '{COMMAND~/params/frameId}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addLink('endEdit', 'validateAll', "1==1");
                    this.addLink('validateAll', 'save', "1==1");
                    this.addLink('save', 'execute', "1==1");
                    this.addLink('execute', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                rootviewmodelSave1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelSave1'
                    }),
                    __metadata("design:paramtypes", [EndEditService,
                        ValidationService,
                        ListDataService,
                        CommandService,
                        StateMachineService])
                ], rootviewmodelSave1Handler);
                return rootviewmodelSave1Handler;
            }(CommandHandler));

            var rootviewmodelbatchAppend3Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelbatchAppend3Handler, _super);
                function rootviewmodelbatchAppend3Handler(_BatchEditService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._BatchEditService1 = _BatchEditService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                rootviewmodelbatchAppend3Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('batchAppend', function (context) {
                        var args = [
                            '{COMMAND~/params/frameId}',
                            '{COMMAND~/params/mapFields}'
                        ];
                        return _this.invoke(_this._BatchEditService1, 'batchAppend', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('batchAppend', 'transit', "1==1");
                };
                rootviewmodelbatchAppend3Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelbatchAppend3'
                    }),
                    __metadata("design:paramtypes", [BatchEditService,
                        StateMachineService])
                ], rootviewmodelbatchAppend3Handler);
                return rootviewmodelbatchAppend3Handler;
            }(CommandHandler));

            var rootviewmodelbatchAppend4Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelbatchAppend4Handler, _super);
                function rootviewmodelbatchAppend4Handler(_BatchEditService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._BatchEditService1 = _BatchEditService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                rootviewmodelbatchAppend4Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('batchAppend', function (context) {
                        var args = [
                            '{COMMAND~/params/frameId}',
                            '{COMMAND~/params/mapFields}'
                        ];
                        return _this.invoke(_this._BatchEditService1, 'batchAppend', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('batchAppend', 'transit', "1==1");
                };
                rootviewmodelbatchAppend4Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelbatchAppend4'
                    }),
                    __metadata("design:paramtypes", [BatchEditService,
                        StateMachineService])
                ], rootviewmodelbatchAppend4Handler);
                return rootviewmodelbatchAppend4Handler;
            }(CommandHandler));

            var rootviewmodelbatchAppend5Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelbatchAppend5Handler, _super);
                function rootviewmodelbatchAppend5Handler(_BatchEditService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._BatchEditService1 = _BatchEditService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                rootviewmodelbatchAppend5Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('batchAppend', function (context) {
                        var args = [
                            '{COMMAND~/params/frameId}',
                            '{COMMAND~/params/mapFields}'
                        ];
                        return _this.invoke(_this._BatchEditService1, 'batchAppend', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('batchAppend', 'transit', "1==1");
                };
                rootviewmodelbatchAppend5Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelbatchAppend5'
                    }),
                    __metadata("design:paramtypes", [BatchEditService,
                        StateMachineService])
                ], rootviewmodelbatchAppend5Handler);
                return rootviewmodelbatchAppend5Handler;
            }(CommandHandler));

            var RootComponent = /** @class */ (function (_super) {
                __extends(RootComponent, _super);
                function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, componentManagerService, frameworkService, applicationParamsService, verifyService, stateMachine, sanitizer, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.localizationService = localizationService;
                    _this.frmI18nSettingService = frmI18nSettingService;
                    _this.componentManagerService = componentManagerService;
                    _this.frameworkService = frameworkService;
                    _this.applicationParamsService = applicationParamsService;
                    _this.verifyService = verifyService;
                    _this.stateMachine = stateMachine;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.cls = 'f-page-root  ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.helpIdLookupPicked = function (data) {
                        return _this.viewModel.rootviewmodelbatchAppend5.call(_this, data);
                    };
                    _this.pageHeaderToolbarToolbarItems = [{
                            "id": "button-add",
                            "text": _this.langService.transform("button-add", _this.lang, "新增"),
                            "resourceId": "button-add",
                            "isDP": false,
                            "class": "btn-primary",
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "ToolBar-cloned-lit8",
                            "text": _this.langService.transform("ToolBar-cloned-lit8", _this.lang, "批量新增"),
                            "resourceId": "ToolBar-cloned-lit8",
                            "isDP": false,
                            "class": "btn-primary",
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-edit",
                            "text": _this.langService.transform("button-edit", _this.lang, "批量编辑"),
                            "resourceId": "button-edit",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-save",
                            "text": _this.langService.transform("button-save", _this.lang, "保存"),
                            "resourceId": "button-save",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-cancel",
                            "text": _this.langService.transform("button-cancel", _this.lang, "取消"),
                            "resourceId": "button-cancel",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-delete",
                            "text": _this.langService.transform("button-delete", _this.lang, "删除"),
                            "resourceId": "button-delete",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }
                    ];
                    _this.pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
                    _this.pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.LookupEdithelpIdDialogTitle = _this.langService.transform("LookupEdit/helpId/dialogTitle", _this.lang, "");
                    _this.helpId_PlaceHolder = _this.langService.transform("LookupEdit/helpId/placeHolder", _this.lang, "");
                    _this.helpIdQuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    if (_this.frmI18nSettingService) {
                        var i18nSetting = _this.frmI18nSettingService.getSetting();
                        if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                            i18nSetting.languages.forEach(function (item) {
                                _this.enabledLanguageList.push({
                                    code: item.code,
                                    name: item.name
                                });
                            });
                        }
                        else {
                            console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                            _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                            _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
                        }
                    }
                    return _this;
                }
                RootComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        if (verifyInformations.length) {
                            _this.verifyService.createVerify({
                                'parent': _this.rootElement,
                                'verifyList': verifyInformations,
                                'showType': 'all'
                            });
                        }
                        else {
                            _this.verifyService.clear();
                        }
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsstates = {
                            'button-add': !_this.viewModel.stateMachine['canAdd'],
                            'ToolBar-cloned-lit8': !_this.viewModel.stateMachine['canAdd'],
                            'button-edit': !_this.viewModel.stateMachine['canEdit'],
                            'button-save': !_this.viewModel.stateMachine['canSave'],
                            'button-cancel': !_this.viewModel.stateMachine['canCancel'],
                            'button-delete': !_this.viewModel.stateMachine['canRemove'],
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-add': true,
                            'ToolBar-cloned-lit8': true,
                            'button-edit': true,
                            'button-save': true,
                            'button-cancel': true,
                            'button-delete': true,
                        };
                        _this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
                    });
                    this.pageHeaderToolbarToolbarItems.forEach(function (toolbarItem) {
                        var transformText = _this.langService.transform(toolbarItem.resourceId, _this.lang, toolbarItem.text);
                        if (transformText) {
                            toolbarItem.text = transformText;
                        }
                    });
                    this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, function () {
                        _this.onFormLoad();
                    });
                };
                RootComponent.prototype.ngAfterViewInit = function () {
                    this.componentManagerService.appendControl('helpId', this.helpId);
                };
                RootComponent.prototype.ngOnDestroy = function () {
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
                };
                RootComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                RootComponent.prototype.onFormLoad = function () {
                    this.viewModel.Load1();
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
                    switch (args.id) {
                        case 'button-add':
                            this.viewModel.Add1(args);
                            break;
                        case 'ToolBar-cloned-lit8':
                            this.viewModel.rootviewmodelopenHiddenHelp1(args);
                            break;
                        case 'button-edit':
                            this.viewModel.dataGridComponentViewmodel.rootviewmodelopenBatchEditDialog1(args);
                            break;
                        case 'button-save':
                            this.viewModel.rootviewmodelSave1(args);
                            break;
                        case 'button-cancel':
                            this.viewModel.Cancel1(args);
                            break;
                        case 'button-delete':
                            this.viewModel.Remove1(args);
                            break;
                    }
                };
                __decorate([
                    ViewChild('helpId'),
                    __metadata("design:type", LookupGridComponent)
                ], RootComponent.prototype, "helpId", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], RootComponent.prototype, "cls", void 0);
                RootComponent = __decorate([
                    Component({
                        selector: 'app-rootcomponent',
                        templateUrl: './rootcomponent.html',
                        styleUrls: ['./rootcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'root-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: GoodsStockRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: RootViewmodelForm },
                            { provide: StateMachine, useClass: RootViewmodelStateMachine },
                            { provide: UIState, useClass: RootViewmodelUIState },
                            FrameworkSessionService,
                            UriService,
                            GoodsStockProxy,
                            GoodsStockRepository,
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
                            { provide: FORM_ID, useValue: "68b0e22e-93be-4c86-8718-8a1f2f07e8fc" },
                            { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                            { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                            { provide: CHANGE_SET_POLICY_TOKEN, useValue: 'valid' },
                            { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Save1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Cancel1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelbatchAppend1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelopenHiddenHelp1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelbatchAppend2Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelSave1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelbatchAppend3Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelbatchAppend4Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelbatchAppend5Handler, multi: true },
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        LocalizationService,
                        FrmI18nSettingService,
                        ComponentManagerService,
                        FrameworkService,
                        ApplicationParamService,
                        VerifyDetailService,
                        StateMachine,
                        DomSanitizer,
                        Injector])
                ], RootComponent);
                return RootComponent;
            }(FrameComponent));

            var routes = [
                {
                    path: '',
                    component: RootComponent,
                    children: [],
                    resolve: {
                        'translate': TranslateResolveService
                    }
                }
            ];
            var GoodsStockFormRoutingModule = /** @class */ (function () {
                function GoodsStockFormRoutingModule() {
                }
                GoodsStockFormRoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], GoodsStockFormRoutingModule);
                return GoodsStockFormRoutingModule;
            }());

            var DataGridComponentViewmodel = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodel, _super);
                function DataGridComponentViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {
                        "dataGrid": {
                            "type": "DataGrid",
                            "resourceId": "dataGrid",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "dataGrid",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "fields": [
                                {
                                    "type": "GridField",
                                    "resourceId": "merchantID_MerchantID_MerchantName_79ed0464_zoer",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "merchantID_MerchantID_MerchantName_79ed0464_zoer",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "merchantID_MerchantID_MerchantName",
                                        "fullPath": "MerchantID.MerchantID_MerchantName",
                                        "isExpression": false,
                                        "value": "merchantID_MerchantID_MerchantName"
                                    },
                                    "dataField": "merchantID.merchantID_MerchantName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "商户名称",
                                    "editor": {
                                        "type": "LookupEdit",
                                        "isTextArea": true,
                                        "resourceId": "merchantID_MerchantID_MerchantName_79ed0464_8y3y",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "merchantID_MerchantID_MerchantName_79ed0464_8y3y",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "merchantID_MerchantID_MerchantName",
                                            "fullPath": "MerchantID.MerchantID_MerchantName",
                                            "isExpression": false,
                                            "value": "merchantID_MerchantID_MerchantName"
                                        },
                                        "disable": false,
                                        "dataSource": {
                                            "uri": "GoodsStock.merchantID_MerchantID_MerchantName",
                                            "displayName": "商户帮助",
                                            "idField": "id",
                                            "type": "ViewObject"
                                        },
                                        "valueField": "id",
                                        "textField": "merchantName",
                                        "multiSelect": false,
                                        "pageSize": 20,
                                        "mapFields": {
                                            "merchantName": "merchantID.merchantID_MerchantName",
                                            "parentMerchantID.parentMerchantID_MerchantName": "merchantID.merchantID_ParentMerchantID_MerchantName",
                                            "id": "merchantID.merchantID"
                                        },
                                        "displayType": "TreeList",
                                        "enableExtendLoadMethod": true,
                                        "editable": false,
                                        "noSearch": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "useTip": false,
                                        "useFavorite": true,
                                        "enableToSelect": true,
                                        "isRecordSize": false,
                                        "expandLevel": -1,
                                        "enableFullTree": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "loadTreeDataType": "default",
                                        "enableClear": true,
                                        "enableCascade": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "merchantID_MerchantID_ParentMerchantID_MerchantName",
                                        "fullPath": "MerchantID.MerchantID_ParentMerchantID_MerchantName",
                                        "isExpression": false,
                                        "value": "merchantID_MerchantID_ParentMerchantID_MerchantName"
                                    },
                                    "dataField": "merchantID.merchantID_ParentMerchantID_MerchantName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "上游商户/经销商",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824",
                                        "defaultI18nValue": "商户名称",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "merchantID_MerchantID_ParentMerchantID_MerchantName",
                                            "fullPath": "MerchantID.MerchantID_ParentMerchantID_MerchantName",
                                            "isExpression": false,
                                            "value": "merchantID_MerchantID_ParentMerchantID_MerchantName"
                                        },
                                        "disable": false,
                                        "maxLength": 36,
                                        "isPassword": false,
                                        "enableViewPassword": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "goodsID_GoodsID_GoodsName_ade04dc1_1mgy",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "goodsID_GoodsID_GoodsName_ade04dc1_1mgy",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "goodsID_GoodsID_GoodsName",
                                        "fullPath": "GoodsID.GoodsID_GoodsName",
                                        "isExpression": false,
                                        "value": "goodsID_GoodsID_GoodsName"
                                    },
                                    "dataField": "goodsID.goodsID_GoodsName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "商品名称",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "goodsID_GoodsID_GoodsName_ade04dc1_89ef",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "goodsID_GoodsID_GoodsName_ade04dc1_89ef",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "goodsID_GoodsID_GoodsName",
                                            "isExpression": false,
                                            "value": "goodsID_GoodsID_GoodsName"
                                        },
                                        "disable": false,
                                        "maxLength": 36,
                                        "isPassword": false,
                                        "enableViewPassword": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "goodsID_GoodsID_Specification_d208e853_2hno",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "goodsID_GoodsID_Specification_d208e853_2hno",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "goodsID_GoodsID_Specification",
                                        "fullPath": "GoodsID.GoodsID_Specification",
                                        "isExpression": false,
                                        "value": "goodsID_GoodsID_Specification"
                                    },
                                    "dataField": "goodsID.goodsID_Specification",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "规格型号",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "goodsID_GoodsID_Specification_d208e853_2i8n",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "goodsID_GoodsID_Specification_d208e853_2i8n",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "goodsID_GoodsID_Specification",
                                            "isExpression": false,
                                            "value": "goodsID_GoodsID_Specification"
                                        },
                                        "disable": false,
                                        "maxLength": 36,
                                        "isPassword": false,
                                        "enableViewPassword": false
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "goodsID_GoodsID_Price_bc6384c0_fjgd",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "goodsID_GoodsID_Price_bc6384c0_fjgd",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "goodsID_GoodsID_Price",
                                        "fullPath": "GoodsID.GoodsID_Price",
                                        "isExpression": false,
                                        "value": "goodsID_GoodsID_Price"
                                    },
                                    "dataField": "goodsID.goodsID_Price",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "单价",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "goodsID_GoodsID_Price_bc6384c0_fq6p",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "goodsID_GoodsID_Price_bc6384c0_fq6p",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "goodsID_GoodsID_Price",
                                            "isExpression": false,
                                            "value": "goodsID_GoodsID_Price"
                                        },
                                        "disable": false,
                                        "step": 1,
                                        "useThousands": true,
                                        "textAlign": "left",
                                        "precision": 2
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "formatter": {
                                        "type": "number",
                                        "precision": 2,
                                        "thousand": ",",
                                        "decimal": "."
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "stockNum_f152e4b2_fhhp",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "stockNum_f152e4b2_fhhp",
                                    "size": {
                                        "width": 120
                                    },
                                    "readonly": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": false
                                    },
                                    "binding": {
                                        "type": "Form",
                                        "path": "stockNum",
                                        "fullPath": "StockNum",
                                        "isExpression": false,
                                        "value": "stockNum"
                                    },
                                    "dataField": "stockNum",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "当前库存量",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "stockNum_f152e4b2_k1ri",
                                        "defaultI18nValue": "当前库存量",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "stockNum_f152e4b2_k1ri",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "stockNum",
                                            "fullPath": "StockNum",
                                            "isExpression": false,
                                            "value": "stockNum"
                                        },
                                        "disable": false,
                                        "step": 1,
                                        "useThousands": true,
                                        "textAlign": "left",
                                        "precision": 2
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "aggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "groupAggregate": {
                                        "type": "none",
                                        "formatter": {
                                            "type": "none"
                                        }
                                    },
                                    "linkedLabelEnabled": false,
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "number",
                                        "precision": 2,
                                        "thousand": ",",
                                        "decimal": "."
                                    }
                                }
                            ],
                            "multiSelect": true,
                            "editable": "viewModel.stateMachine['editable']",
                            "showLineNumber": false,
                            "lineNumberTitle": "#",
                            "groupTotalText": "Total",
                            "filterable": false,
                            "groupable": false,
                            "rowClass": ""
                        }
                    };
                    return _this;
                }
                DataGridComponentViewmodel.prototype.ChangePage1 = function (commandParam) { return; };
                DataGridComponentViewmodel.prototype.rootviewmodelopenBatchEditDialog1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'ChangePage1',
                        params: {
                            loadCommandName: 'Load1',
                            loadCommandFrameId: 'root-component'
                        },
                        paramDescriptions: {
                            loadCommandName: { type: 'string' },
                            loadCommandFrameId: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "ChangePage1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelopenBatchEditDialog1',
                        params: {
                            frameId: 'data-grid-component',
                            transitionAction: 'Edit'
                        },
                        paramDescriptions: {
                            frameId: { type: 'string' },
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], DataGridComponentViewmodel.prototype, "rootviewmodelopenBatchEditDialog1", null);
                DataGridComponentViewmodel = __decorate([
                    Injectable()
                ], DataGridComponentViewmodel);
                return DataGridComponentViewmodel;
            }(ViewModel));

            var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodelForm, _super);
                function DataGridComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'merchantID.merchantID_MerchantName',
                        name: "{{merchantID_MerchantID_MerchantName_79ed0464_zoer}}",
                        binding: 'merchantID.merchantID_MerchantName',
                        updateOn: 'blur',
                        defaultI18nValue: '商户名称',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "merchantID_MerchantID_MerchantName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'goodsID.goodsID_GoodsName',
                        name: "{{goodsID_GoodsID_GoodsName_ade04dc1_1mgy}}",
                        binding: 'goodsID.goodsID_GoodsName',
                        updateOn: 'blur',
                        defaultI18nValue: '商品名称',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "goodsID_GoodsID_GoodsName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'goodsID.goodsID_Specification',
                        name: "{{goodsID_GoodsID_Specification_d208e853_2hno}}",
                        binding: 'goodsID.goodsID_Specification',
                        updateOn: 'blur',
                        defaultI18nValue: '规格型号',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "goodsID_GoodsID_Specification", void 0);
                __decorate([
                    NgFormControl({
                        id: 'goodsID.goodsID_Price',
                        name: "{{goodsID_GoodsID_Price_bc6384c0_fjgd}}",
                        binding: 'goodsID.goodsID_Price',
                        updateOn: 'blur',
                        defaultI18nValue: '单价',
                        validRules: [
                            {
                                type: 'maxValue',
                                constraints: [1.7976931348623157e+308],
                            },
                            {
                                type: 'minValue',
                                constraints: [-1.7976931348623157e+308],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "goodsID_GoodsID_Price", void 0);
                __decorate([
                    NgFormControl({
                        id: 'merchantID.merchantID_ParentMerchantID_MerchantName',
                        name: "{{merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik}}",
                        binding: 'merchantID.merchantID_ParentMerchantID_MerchantName',
                        updateOn: 'blur',
                        defaultI18nValue: '上游商户/经销商',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "merchantID_MerchantID_ParentMerchantID_MerchantName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'stockNum',
                        name: "{{stockNum_f152e4b2_fhhp}}",
                        binding: 'stockNum',
                        updateOn: 'blur',
                        defaultI18nValue: '当前库存量',
                        validRules: [
                            {
                                type: 'maxValue',
                                constraints: [1.7976931348623157e+308],
                            },
                            {
                                type: 'minValue',
                                constraints: [-1.7976931348623157e+308],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "stockNum", void 0);
                DataGridComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '商品库',
                        enableValidate: true
                    }),
                    Injectable()
                ], DataGridComponentViewmodelForm);
                return DataGridComponentViewmodelForm;
            }(Form));

            var DataGridComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(DataGridComponentViewmodelUIState, _super);
                function DataGridComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DataGridComponentViewmodelUIState = __decorate([
                    Injectable()
                ], DataGridComponentViewmodelUIState);
                return DataGridComponentViewmodelUIState;
            }(UIState));

            var ChangePage1Handler = /** @class */ (function (_super) {
                __extends(ChangePage1Handler, _super);
                function ChangePage1Handler(_GridMiddlewareService1, _ListDataService1, _CommandService1) {
                    var _this = _super.call(this) || this;
                    _this._GridMiddlewareService1 = _GridMiddlewareService1;
                    _this._ListDataService1 = _ListDataService1;
                    _this._CommandService1 = _CommandService1;
                    return _this;
                }
                ChangePage1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onPageChanging', function (context) {
                        var args = [];
                        return _this.invoke(_this._GridMiddlewareService1, 'onPageChanging', args, context);
                    });
                    this.addTask('revert', function (context) {
                        var args = [];
                        return _this.invoke(_this._ListDataService1, 'revert', args, context);
                    });
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCommandName}',
                            '{COMMAND~/params/loadCommandFrameId}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                    this.addLink('onPageChanging', 'revert', "1==1");
                    this.addLink('revert', 'execute', "1==1");
                };
                ChangePage1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangePage1'
                    }),
                    __metadata("design:paramtypes", [GridMiddlewareService,
                        ListDataService,
                        CommandService])
                ], ChangePage1Handler);
                return ChangePage1Handler;
            }(CommandHandler));

            var rootviewmodelopenBatchEditDialog1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelopenBatchEditDialog1Handler, _super);
                function rootviewmodelopenBatchEditDialog1Handler(_BatchEditService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._BatchEditService1 = _BatchEditService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                rootviewmodelopenBatchEditDialog1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('openBatchEditDialog', function (context) {
                        var args = [
                            '{COMMAND~/params/frameId}'
                        ];
                        return _this.invoke(_this._BatchEditService1, 'openBatchEditDialog', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('openBatchEditDialog', 'transit', "1==1");
                };
                rootviewmodelopenBatchEditDialog1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelopenBatchEditDialog1'
                    }),
                    __metadata("design:paramtypes", [BatchEditService,
                        StateMachineService])
                ], rootviewmodelopenBatchEditDialog1Handler);
                return rootviewmodelopenBatchEditDialog1Handler;
            }(CommandHandler));

            var DataGridComponent = /** @class */ (function (_super) {
                __extends(DataGridComponent, _super);
                function DataGridComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.localizationService = localizationService;
                    _this.frmI18nSettingService = frmI18nSettingService;
                    _this.focusInvalidService = focusInvalidService;
                    _this.farrisGridUtils = farrisGridUtils;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.dataGridColumns = [];
                    _this.cls = 'f-struct-wrapper f-utils-fill-flex-column ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.SectiondatagridsectionMainTitle = _this.langService.transform("Section/data-grid-section/mainTitle", _this.lang, "");
                    _this.SectiondatagridsectionSubTitle = _this.langService.transform("Section/data-grid-section/subTitle", _this.lang, "");
                    _this.dataGridlineNumberTitle = _this.langService.transform("DataGrid/dataGrid/lineNumberTitle", _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGridDataGrid);
                    });
                    if (_this.frmI18nSettingService) {
                        var i18nSetting = _this.frmI18nSettingService.getSetting();
                        if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                            i18nSetting.languages.forEach(function (item) {
                                _this.enabledLanguageList.push({
                                    code: item.code,
                                    name: item.name
                                });
                            });
                        }
                        else {
                            console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                            _this.enabledLanguageList.push({ "code": "en", "name": "English" });
                            _this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
                        }
                    }
                    return _this;
                }
                DataGridComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.dataGridColumns = [
                        [
                            {
                                id: 'merchantID_MerchantID_MerchantName_79ed0464_zoer',
                                field: 'merchantID.merchantID_MerchantName',
                                width: 120,
                                title: this.langService.transform("merchantID_MerchantID_MerchantName_79ed0464_zoer", this.lang, "商户名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                enableBatchEdit: true,
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.LOOKUP,
                                    options: {
                                        "type": 'EditorTypes.LOOKUP',
                                        "uri": 'GoodsStock.merchantID_MerchantID_MerchantName',
                                        "readonly": false,
                                        "idField": 'id',
                                        "singleSelect": true,
                                        "textField": 'merchantName',
                                        "valueField": 'id',
                                        "pagination": null,
                                        "pageSize": 20,
                                        "pageIndex": null,
                                        "displayType": 'TreeList',
                                        "mapFields": { 'merchantName': 'merchantID.merchantID_MerchantName', 'parentMerchantID.parentMerchantID_MerchantName': 'merchantID.merchantID_ParentMerchantID_MerchantName', 'id': 'merchantID.merchantID' },
                                        "expandLevel": -1,
                                        "showNavigation": true,
                                        "cascadeStatus": 'enable',
                                        "navTreeToList": false,
                                        "treeToList": false,
                                        "editable": false,
                                        "enableCascade": false,
                                        "quickSelect": {
                                            "enable": false,
                                            "showItemsCount": 10,
                                            "showMore": true
                                        },
                                        "useFavorite": true,
                                        "enableFullTree": false,
                                        "enableClear": true,
                                        "loadTreeDataType": 'default',
                                        "useTip": false,
                                        "treeInfo": { 'onlySelectLeaf': 'default' },
                                        "selectFirstInNav": false,
                                        "loadDataWhenOpen": true,
                                        "title": this.langService.transform("GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/LookupEdit/merchantID_MerchantID_MerchantName_79ed0464_8y3y/dialogTitle", this.lang, ""),
                                        "nosearch": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "isRecordSize": false,
                                        treeTableOptions: {
                                            enableContextMenu: false
                                        },
                                        "viewType": 'text'
                                    }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik',
                                field: 'merchantID.merchantID_ParentMerchantID_MerchantName',
                                width: 120,
                                title: this.langService.transform("merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik", this.lang, "上游商户/经销商"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                enableBatchEdit: true,
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824", "title": "商户名称", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'goodsID_GoodsID_GoodsName_ade04dc1_1mgy',
                                field: 'goodsID.goodsID_GoodsName',
                                width: 120,
                                title: this.langService.transform("goodsID_GoodsID_GoodsName_ade04dc1_1mgy", this.lang, "商品名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                enableBatchEdit: true,
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "goodsID_GoodsID_GoodsName_ade04dc1_89ef", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'goodsID_GoodsID_Specification_d208e853_2hno',
                                field: 'goodsID.goodsID_Specification',
                                width: 120,
                                title: this.langService.transform("goodsID_GoodsID_Specification_d208e853_2hno", this.lang, "规格型号"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                enableBatchEdit: true,
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "goodsID_GoodsID_Specification_d208e853_2i8n", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: {}
                            },
                            {
                                id: 'goodsID_GoodsID_Price_bc6384c0_fjgd',
                                field: 'goodsID.goodsID_Price',
                                width: 120,
                                title: this.langService.transform("goodsID_GoodsID_Price_bc6384c0_fjgd", this.lang, "单价"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                enableBatchEdit: true,
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "goodsID_GoodsID_Price_bc6384c0_fq6p", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "decimal": "." } }
                            },
                            {
                                id: 'stockNum_f152e4b2_fhhp',
                                field: 'stockNum',
                                width: 120,
                                title: this.langService.transform("stockNum_f152e4b2_fhhp", this.lang, "当前库存量"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                enableBatchEdit: true,
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "stockNum_f152e4b2_k1ri", "title": "当前库存量", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
                                },
                                sortable: true,
                                footer: {
                                    options: {},
                                },
                                groupFooter: {
                                    options: {},
                                    formatter: { "type": "none" },
                                },
                                readonly: false,
                                visible: true,
                                allowGrouping: true,
                                filter: false,
                                formatter: { "type": "number", "options": { "precision": 2, "thousand": ",", "decimal": "." } }
                            }
                        ]
                    ];
                    this.viewModel.dataGridColumns = this.dataGridColumns;
                    this.viewModel.dataGridColumnsName = "dataGridColumns";
                    this.onFormLoad();
                };
                DataGridComponent.prototype.ngAfterViewInit = function () {
                };
                DataGridComponent.prototype.ngOnDestroy = function () {
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
                    this.farrisGridUtils = null;
                    this.sanitizer = null;
                    this.injector = null;
                    this.enabledLanguageList = [];
                };
                DataGridComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                DataGridComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    ViewChild('dataGridDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], DataGridComponent.prototype, "dataGridDataGrid", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], DataGridComponent.prototype, "cls", void 0);
                DataGridComponent = __decorate([
                    Component({
                        selector: 'app-datagridcomponent',
                        templateUrl: './datagridcomponent.html',
                        styleUrls: ['./datagridcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'data-grid-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: GoodsStockRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                            { provide: Form, useClass: DataGridComponentViewmodelForm },
                            { provide: UIState, useClass: DataGridComponentViewmodelUIState },
                            { provide: ViewModel, useClass: DataGridComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangePage1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelopenBatchEditDialog1Handler, multi: true },
                        ]
                    }),
                    __metadata("design:paramtypes", [WizardService,
                        KeybindingService,
                        LangService,
                        ActivatedRoute,
                        Router,
                        ElementRef,
                        LocalizationService,
                        FrmI18nSettingService,
                        FocusInvalidService,
                        CommonUtils,
                        DomSanitizer,
                        Injector])
                ], DataGridComponent);
                return DataGridComponent;
            }(FrameComponent));

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ɵ0$2 = (createTranslateLoader$1), ɵ1$1 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$1 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var GoodsStockFormModule = /** @class */ (function () {
                function GoodsStockFormModule(trans) {
                    this.trans = trans;
                }
                GoodsStockFormModule = __decorate([
                    NgModule({
                        exports: [
                            RootComponent
                        ],
                        bootstrap: [
                            RootComponent
                        ],
                        entryComponents: [
                            RootComponent
                        ],
                        declarations: [
                            LangPipe,
                            SafeHtmlPipe,
                            RootComponent,
                            DataGridComponent
                        ],
                        imports: [
                            CommonModule,
                            FormsModule,
                            ReactiveFormsModule,
                            LayoutModule,
                            KendoBindingModule,
                            FlexLayoutModule,
                            LoadingModule.forRoot(),
                            MessagerModule.forRoot(),
                            NotifyModule.forRoot(),
                            CommandServicesModule,
                            FResponseToolbarModule,
                            FarrisFormsModule,
                            FormMessageModule,
                            TranslateModule.forRoot({
                                loader: {
                                    provide: TranslateLoader,
                                    useFactory: ɵ0$2,
                                    deps: [HttpClient]
                                },
                                missingTranslationHandler: { provide: MissingTranslationHandler, useClass: JitMissingTranslationHandler }
                            }),
                            VerifyDetailModule,
                            FarrisTooltipModule,
                            GridModule,
                            DateInputsModule,
                            FarrisCommonModule,
                            DateHelperModule.forRoot(),
                            DropDownsModule,
                            ButtonsModule,
                            FarrisTabsModule,
                            FarrisTagModule,
                            FarrisSidebarModule,
                            UploadDialogMoudle,
                            InputsModule,
                            IntlModule,
                            LookupModule,
                            TreeTableModule,
                            FieldGroupModule,
                            FarrisSectionModule,
                            FarrisDatePickerModule,
                            FarrisTimeSpinnerModule,
                            WizardModule,
                            QuerySolutionModule,
                            FarrisButtonModule,
                            ListViewModule,
                            TimePickerModule,
                            AngularDraggableModule,
                            SplitterModule,
                            ListNavModule,
                            TextModule,
                            WFRuntimeModule,
                            MultiSelectModule,
                            InputGroupModule,
                            ComboListModule,
                            CloudPrintModule,
                            DatagridEditorsModule,
                            FarrisHtmlEditorModule,
                            ViewChangeModule,
                            ListFilterModule,
                            SimpleFilterModule,
                            AvatarModule,
                            UiFlowchartModule,
                            CalendarModule,
                            NumberSpinnerModule,
                            ComboLookupModule,
                            ScrollspyModule,
                            LanguageTextboxModule,
                            DynamicControlGroupModule,
                            FileListModule,
                            SwitchModule.forRoot(),
                            FarrisFooterModule,
                            BatchEditDialogModule,
                            DiscussionGroupModule,
                            NavModule,
                            TagsModule,
                            FfileuploadAdaptUnifileModule,
                            DatagridFilterRowModule.forRoot(),
                            DatagridSettingsModule.forRoot(),
                            DatagridModule.forRoot(EditorProviders.slice()),
                            EditorModule.forRoot('/platform/common/web/assets/tinymce/tinymce.min.js'),
                            FrmCommonModule.forRoot(),
                            FEHeaderFooterModule,
                            FEPageModalModule.forRoot(),
                            FeatureEditorModule,
                            FEScrollCollapsibleAreaModule,
                            GoodsStockFormRoutingModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$1 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/hotwave/stock/web/bo-goodsstock-front/goodsstockform/' },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ2$1 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], GoodsStockFormModule);
                return GoodsStockFormModule;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/hotwave/stock/web/bo-goodsstock-front/goodsstockform/i18n/', '.json');
            }

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var RouterModuleNgFactory = ɵcmf(RouterModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]])]); });
            var styles_ɵEmptyOutletComponent = [];
            var RenderType_ɵEmptyOutletComponent = ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
            function View_ɵEmptyOutletComponent_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), ɵdid(1, 212992, null, 0, RouterOutlet, [ChildrenOutletContexts, ViewContainerRef, ComponentFactoryResolver, [8, null], ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_ɵEmptyOutletComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), ɵdid(1, 49152, null, 0, ɵEmptyOutletComponent, [], null, null)], null, null); }
            var ɵEmptyOutletComponentNgFactory = ɵccf("ng-component", ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$1 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_DataGridComponent = [styles$1];
            var RenderType_DataGridComponent = ɵcrt({ encapsulation: 0, styles: styles_DataGridComponent, data: {} });
            function View_DataGridComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-datagrid", [["class", "f-component-grid"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "pageChanged"], [null, "pageSizeChanged"], [null, "click"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (ɵnov(_v, 4).onClick($event) !== false);
                    ad = (pd_0 && ad);
                } if (("pageChanged" === en)) {
                    var pd_1 = (ɵnov(_v, 7).pageChangedHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectChanged" === en)) {
                    var pd_2 = (ɵnov(_v, 7).selectedRowChanged($event) !== false);
                    ad = (pd_2 && ad);
                } if (("unSelect" === en)) {
                    var pd_3 = (ɵnov(_v, 7).unSelected($event) !== false);
                    ad = (pd_3 && ad);
                } if (("checkedChange" === en)) {
                    var pd_4 = (ɵnov(_v, 7).checkedChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (ɵnov(_v, 7).pageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_6 = (ɵnov(_v, 7).scrollY($event) !== false);
                    ad = (pd_6 && ad);
                } if (("filterChanged" === en)) {
                    var pd_7 = (ɵnov(_v, 7).filterChanged($event) !== false);
                    ad = (pd_7 && ad);
                } if (("pageChanged" === en)) {
                    var pd_8 = (_co.viewModel.ChangePage1($event) !== false);
                    ad = (pd_8 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_9 = (_co.viewModel.ChangePage1($event) !== false);
                    ad = (pd_9 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(4, 6275072, [[1, 4], ["dataGridDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], maxHeight: [2, "maxHeight"], showBorder: [3, "showBorder"], striped: [4, "striped"], headerWrap: [5, "headerWrap"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], pagination: [18, "pagination"], pageList: [19, "pageList"], pageSize: [20, "pageSize"], showPageList: [21, "showPageList"], showGotoInput: [22, "showGotoInput"], multiSelect: [23, "multiSelect"], showCheckbox: [24, "showCheckbox"], showAllCheckbox: [25, "showAllCheckbox"], checkOnSelect: [26, "checkOnSelect"], selectOnCheck: [27, "selectOnCheck"], selectionMode: [28, "selectionMode"], keepSelect: [29, "keepSelect"], useBlankWhenDataIsEmpty: [30, "useBlankWhenDataIsEmpty"], emptyDataHeight: [31, "emptyDataHeight"], fields: [32, "fields"], nowrap: [33, "nowrap"], virtualized: [34, "virtualized"], virtualizedAsyncLoad: [35, "virtualizedAsyncLoad"], editMode: [36, "editMode"], enableEditCellStyle: [37, "enableEditCellStyle"], selectOnEditing: [38, "selectOnEditing"], enableDragColumn: [39, "enableDragColumn"], expandGroupRows: [40, "expandGroupRows"], groupSummaryPosition: [41, "groupSummaryPosition"], showGroupColumn: [42, "showGroupColumn"], showRowGroupPanel: [43, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [44, "AutoColumnWidthUseDblclick"], mergeCell: [45, "mergeCell"], enableSimpleMode: [46, "enableSimpleMode"], enableScheme: [47, "enableScheme"], clearSelectionsWhenDataIsEmpty: [48, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [49, "enableContextMenu"], enableHighlightCell: [50, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 9, { dgColumns: 1 }), ɵpad(6, 5), ɵdid(7, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, null), ɵdid(8, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService$1, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ɵdid(9, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(10, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), ɵdid(11, 212992, null, 0, DatagridComponentRefDirective, [Injector, DatagridComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid"; var currVal_4 = false; var currVal_5 = 300; var currVal_6 = false; var currVal_7 = true; var currVal_8 = false; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGridlineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = true; var currVal_22 = _ck(_v, 6, 0, 10, 20, 30, 50, 100); var currVal_23 = 20; var currVal_24 = false; var currVal_25 = false; var currVal_26 = true; var currVal_27 = true; var currVal_28 = true; var currVal_29 = false; var currVal_30 = false; var currVal_31 = "default"; var currVal_32 = true; var currVal_33 = false; var currVal_34 = 36; var currVal_35 = _co.viewModel.dataGridColumns; var currVal_36 = true; var currVal_37 = false; var currVal_38 = false; var currVal_39 = "cell"; var currVal_40 = false; var currVal_41 = false; var currVal_42 = false; var currVal_43 = true; var currVal_44 = "groupFooterRow"; var currVal_45 = true; var currVal_46 = false; var currVal_47 = true; var currVal_48 = false; var currVal_49 = false; var currVal_50 = false; var currVal_51 = true; var currVal_52 = false; var currVal_53 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53]); _ck(_v, 7, 0); var currVal_54 = _co.viewModel.stateMachine["editable"]; var currVal_55 = true; _ck(_v, 8, 0, currVal_54, currVal_55); var currVal_56 = ""; _ck(_v, 10, 0, currVal_56); _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).pos; var currVal_1 = ɵnov(_v, 4).hostCls; var currVal_2 = ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_DataGridComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "farris-section", [["class", "f-section-grid f-section-in-managelist"], ["id", "data-grid-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 2, { headerDirective: 0 }), ɵqud(335544320, 3, { headerTitleDirective: 0 }), ɵqud(335544320, 4, { headerContentDirective: 0 }), ɵqud(335544320, 5, { headerToolbarDirective: 0 }), ɵqud(335544320, 6, { extendDirective: 0 }), ɵqud(335544320, 7, { contentDirective: 0 }), ɵqud(335544320, 8, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵeld(10, 0, null, 0, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_2)), ɵdid(12, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondatagridsectionMainTitle; var currVal_7 = _co.SectiondatagridsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = true; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 12, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_DataGridComponent_0(_l) { return ɵvid(0, [ɵqud(671088640, 1, { dataGridDataGrid: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_1)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_DataGridComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 82, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ɵprd(4608, null, ViewModel, DataGridComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p0_2, p1_0, p1_1) { return [new ChangePage1Handler(p0_0, p0_1, p0_2), new rootviewmodelopenBatchEditDialog1Handler(p1_0, p1_1)]; }, [GridMiddlewareService, ListDataService, CommandService, BatchEditService, StateMachineService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, DataGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [GoodsStockRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "data-grid-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            var DataGridComponentNgFactory = ɵccf("app-datagridcomponent", DataGridComponent, View_DataGridComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-manage"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-administer"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 2, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(4, null, ["", ""])), ɵppd(5, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 4, 0, _ck(_v, 5, 0, ɵnov(_v.parent.parent.parent.parent, 0), "title", _co.lang, "\u5546\u54C1\u5E93\u8868\u5355")); _ck(_v, 4, 0, currVal_0); }); }
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"], buttonSize: [3, "buttonSize"], popDirection: [4, "popDirection"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; var currVal_5 = "default"; var currVal_6 = "default"; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_3)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_RootComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 28, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 27, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 26, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "helpId"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_8)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 16, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(13, 0, null, null, 14, "farris-lookup-grid", [["data-mapping", ""], ["id", "helpId"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(5120, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(19, 13352960, [[1, 4], ["helpId", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], dictPicked: [10, "dictPicked"], viewType: [11, "viewType"], displayType: [12, "displayType"], enableClear: [13, "enableClear"], singleSelect: [14, "singleSelect"], idField: [15, "idField"], uri: [16, "uri"], pagination: [17, "pagination"], pageIndex: [18, "pageIndex"], pageSize: [19, "pageSize"], pageList: [20, "pageList"], nosearch: [21, "nosearch"], cascadeStatus: [22, "cascadeStatus"], placeholder: [23, "placeholder"], useFavorite: [24, "useFavorite"], useTip: [25, "useTip"], isRecordSize: [26, "isRecordSize"], enableToSelect: [27, "enableToSelect"], expandLevel: [28, "expandLevel"], loadTreeDataType: [29, "loadTreeDataType"], loadDataWhenOpen: [30, "loadDataWhenOpen"], selectFirstInNav: [31, "selectFirstInNav"], enableFullTree: [32, "enableFullTree"], useExtendInfo: [33, "useExtendInfo"], quickSelect: [34, "quickSelect"], treeToList: [35, "treeToList"], navTreeToList: [36, "navTreeToList"], showNavigation: [37, "showNavigation"] }, null), ɵpod(20, { "id": 0 }), ɵpod(21, { "enableExtendLoadMethod": 0 }), ɵpad(22, 5), ɵppd(23, 3), ɵdid(24, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(25, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(26, 212992, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(27, 4276224, null, 0, ɵa$1, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null), (_l()(), ɵeld(28, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_6 = _co.LookupEdithelpIdDialogTitle; var currVal_7 = true; var currVal_8 = true; var currVal_9 = true; var currVal_10 = false; var currVal_11 = false; var currVal_12 = _ck(_v, 20, 0, "goodsinfo"); var currVal_13 = "id"; var currVal_14 = "goodsName"; var currVal_15 = _ck(_v, 21, 0, true); var currVal_16 = _co.helpIdLookupPicked; var currVal_17 = "text"; var currVal_18 = "List"; var currVal_19 = false; var currVal_20 = false; var currVal_21 = "id"; var currVal_22 = "root-viewmodel.goodsinfo"; var currVal_23 = true; var currVal_24 = 1; var currVal_25 = 20; var currVal_26 = _ck(_v, 22, 0, 10, 20, 30, 50, 100); var currVal_27 = false; var currVal_28 = "enable"; var currVal_29 = ɵinlineInterpolate(1, "", ɵunv(_v, 19, 23, _ck(_v, 23, 0, ɵnov(_v.parent.parent.parent, 0), "LookupEdit/helpId/placeHolder", _co.lang, "")), ""); var currVal_30 = true; var currVal_31 = false; var currVal_32 = false; var currVal_33 = true; var currVal_34 = (0 - 1); var currVal_35 = "default"; var currVal_36 = true; var currVal_37 = false; var currVal_38 = false; var currVal_39 = false; var currVal_40 = _co.helpIdQuickSelect; var currVal_41 = false; var currVal_42 = false; var currVal_43 = true; _ck(_v, 19, 1, [currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43]); _ck(_v, 24, 0); _ck(_v, 25, 0); _ck(_v, 26, 0); var currVal_44 = 0; _ck(_v, 27, 0, currVal_44); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent, 0), "helpId", _co.lang, "\u5546\u54C1\u5E2E\u52A9")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent, 0), "helpId", _co.lang, "\u5546\u54C1\u5E2E\u52A9")); _ck(_v, 10, 0, currVal_4); var currVal_5 = ɵnov(_v, 19).hostCls; _ck(_v, 13, 0, currVal_5); }); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 86, "div", [["class", "f-page-main"], ["id", "page-main"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 82, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ɵprd(4608, null, ViewModel, DataGridComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p0_2, p1_0, p1_1) { return [new ChangePage1Handler(p0_0, p0_1, p0_2), new rootviewmodelopenBatchEditDialog1Handler(p1_0, p1_1)]; }, [GridMiddlewareService, ListDataService, CommandService, BatchEditService, StateMachineService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, DataGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [GoodsStockRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(80, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "data-grid-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, []), (_l()(), ɵeld(84, 0, null, null, 2, "div", [["style", "display:none"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_7)), ɵdid(86, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { _ck(_v, 80, 0); var currVal_1 = true; _ck(_v, 86, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 80).cls; _ck(_v, 1, 0, currVal_0); }); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "div", [["class", "f-page f-page-is-managelist"], ["id", "root-layout"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.viewModel.form; _ck(_v, 1, 0, currVal_7); var currVal_8 = true; _ck(_v, 5, 0, currVal_8); var currVal_9 = true; _ck(_v, 7, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 3).ngClassUntouched; var currVal_1 = ɵnov(_v, 3).ngClassTouched; var currVal_2 = ɵnov(_v, 3).ngClassPristine; var currVal_3 = ɵnov(_v, 3).ngClassDirty; var currVal_4 = ɵnov(_v, 3).ngClassValid; var currVal_5 = ɵnov(_v, 3).ngClassInvalid; var currVal_6 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
            function View_RootComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(671088640, 1, { helpId: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(3, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 3, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 117, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(135680, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(135680, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(135680, null, GoodsStockRepository, GoodsStockRepository, [Injector]), ɵprd(6144, null, Repository, null, [GoodsStockRepository]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p5_0, p5_1, p6_0, p6_1, p7_0, p8_0, p8_1, p9_0, p9_1, p9_2, p9_3, p9_4, p10_0, p10_1, p11_0, p11_1, p12_0, p12_1) { return [new Load1Handler(p0_0, p0_1), new Add1Handler(p1_0, p1_1), new Edit1Handler(p2_0), new Save1Handler(p3_0, p3_1, p3_2, p3_3, p3_4), new Cancel1Handler(p4_0, p4_1, p4_2), new Remove1Handler(p5_0, p5_1), new rootviewmodelbatchAppend1Handler(p6_0, p6_1), new rootviewmodelopenHiddenHelp1Handler(p7_0), new rootviewmodelbatchAppend2Handler(p8_0, p8_1), new rootviewmodelSave1Handler(p9_0, p9_1, p9_2, p9_3, p9_4), new rootviewmodelbatchAppend3Handler(p10_0, p10_1), new rootviewmodelbatchAppend4Handler(p11_0, p11_1), new rootviewmodelbatchAppend5Handler(p12_0, p12_1)]; }, [NavigationMiddlewareService, ListDataService, ListDataService, StateMachineService, StateMachineService, EndEditService, ValidationService, ListDataService, CommandService, StateMachineService, ValidationService, ListDataService, StateMachineService, DataGridService, ListDataService, BatchEditService, StateMachineService, BatchEditService, BatchEditService, StateMachineService, EndEditService, ValidationService, ListDataService, CommandService, StateMachineService, BatchEditService, StateMachineService, BatchEditService, StateMachineService, BatchEditService, StateMachineService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(4608, null, FormControlService, FormControlService, []), ɵprd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ɵprd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ɵprd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ɵprd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, GoodsStockProxy, GoodsStockProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ɵprd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ɵprd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ɵprd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ɵprd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ɵprd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ɵprd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ɵprd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ɵprd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ɵprd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ɵprd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ɵprd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ɵprd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ɵprd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(512, null, ComponentManagerService, ComponentManagerService, []), ɵprd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(111, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, ComponentManagerService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ɵprd(256, null, FORM_ID, "68b0e22e-93be-4c86-8718-8a1f2f07e8fc", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", []), ɵprd(256, null, CHANGE_SET_POLICY_TOKEN, "valid", [])], function (_ck, _v) { _ck(_v, 111, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 111).cls; _ck(_v, 0, 0, currVal_0); }); }
            var RootComponentNgFactory = ɵccf("app-rootcomponent", RootComponent, View_RootComponent_Host_0, {}, {}, []);

            // This service is based on the `ng2-cookies` package which sadly is not a service and does
            // not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
            // Package: https://github.com/BCJTI/ng2-cookies
            var CookieService = (function () {
                /**
                 * @param {?} document
                 * @param {?} platformId
                 */
                function CookieService(document, platformId) {
                    this.document = document;
                    this.platformId = platformId;
                    this.documentIsAccessible = isPlatformBrowser(this.platformId);
                }
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.check = function (name) {
                    if (!this.documentIsAccessible) {
                        return false;
                    }
                    name = encodeURIComponent(name);
                    var /** @type {?} */ regExp = this.getCookieRegExp(name);
                    var /** @type {?} */ exists = regExp.test(this.document.cookie);
                    return exists;
                };
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.get = function (name) {
                    if (this.documentIsAccessible && this.check(name)) {
                        name = encodeURIComponent(name);
                        var /** @type {?} */ regExp = this.getCookieRegExp(name);
                        var /** @type {?} */ result = regExp.exec(this.document.cookie);
                        return decodeURIComponent(result[1]);
                    }
                    else {
                        return '';
                    }
                };
                /**
                 * @return {?}
                 */
                CookieService.prototype.getAll = function () {
                    if (!this.documentIsAccessible) {
                        return {};
                    }
                    var /** @type {?} */ cookies = {};
                    var /** @type {?} */ document = this.document;
                    if (document.cookie && document.cookie !== '') {
                        var /** @type {?} */ split = document.cookie.split(';');
                        for (var /** @type {?} */ i = 0; i < split.length; i += 1) {
                            var /** @type {?} */ currentCookie = split[i].split('=');
                            currentCookie[0] = currentCookie[0].replace(/^ /, '');
                            cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
                        }
                    }
                    return cookies;
                };
                /**
                 * @param {?} name     Cookie name
                 * @param {?} value    Cookie value
                 * @param {?=} expires  Number of days until the cookies expires or an actual `Date`
                 * @param {?=} path     Cookie path
                 * @param {?=} domain   Cookie domain
                 * @param {?=} secure   Secure flag
                 * @param {?=} sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `None`
                 * @return {?}
                 */
                CookieService.prototype.set = function (name, value, expires, path, domain, secure, sameSite) {
                    if (sameSite === void 0) { sameSite = 'None'; }
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    var /** @type {?} */ cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
                    if (expires) {
                        if (typeof expires === 'number') {
                            var /** @type {?} */ dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                            cookieString += 'expires=' + dateExpires.toUTCString() + ';';
                        }
                        else {
                            cookieString += 'expires=' + expires.toUTCString() + ';';
                        }
                    }
                    if (path) {
                        cookieString += 'path=' + path + ';';
                    }
                    if (domain) {
                        cookieString += 'domain=' + domain + ';';
                    }
                    if (secure) {
                        cookieString += 'secure;';
                    }
                    cookieString += 'sameSite=' + sameSite + ';';
                    this.document.cookie = cookieString;
                };
                /**
                 * @param {?} name   Cookie name
                 * @param {?=} path   Cookie path
                 * @param {?=} domain Cookie domain
                 * @return {?}
                 */
                CookieService.prototype.delete = function (name, path, domain) {
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, undefined, 'Lax');
                };
                /**
                 * @param {?=} path   Cookie path
                 * @param {?=} domain Cookie domain
                 * @return {?}
                 */
                CookieService.prototype.deleteAll = function (path, domain) {
                    if (!this.documentIsAccessible) {
                        return;
                    }
                    var /** @type {?} */ cookies = this.getAll();
                    for (var /** @type {?} */ cookieName in cookies) {
                        if (cookies.hasOwnProperty(cookieName)) {
                            this.delete(cookieName, path, domain);
                        }
                    }
                };
                /**
                 * @param {?} name Cookie name
                 * @return {?}
                 */
                CookieService.prototype.getCookieRegExp = function (name) {
                    var /** @type {?} */ escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
                    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
                };
                return CookieService;
            }());
            CookieService.decorators = [
                { type: Injectable },
            ];
            /**
             * @nocollapse
             */
            CookieService.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
                { type: InjectionToken, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
            ]; };

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var GoodsStockFormModuleNgFactory = exports('GoodsStockFormModuleNgFactory', ɵcmf(GoodsStockFormModule, [RootComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, SingleListComponentNgFactory, FilterPanelComponentNgFactory, UIFlowchartComponentNgFactory, ɵEmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$1, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$2, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$3, FeatureEditorComponentNgFactory, RootComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, OverLayHiddenService, OverLayHiddenService, []), ɵmpd(4608, DialogService$1, DialogService$1, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService$1]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(4608, ɵu, ɵu, []), ɵmpd(4608, ɵv, ɵv, [ɵu]), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵz, ɵz, []), ɵmpd(4608, ɵd, ɵd, [HttpService, HttpClient, ɵz]), ɵmpd(4608, ɵa$2, ɵa$2, [HttpService, HttpClient]), ɵmpd(4608, ɵy, ɵy, []), ɵmpd(4608, ɵa, ɵa, [HttpClient]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc$1, ɵc$1, [HttpClient]), ɵmpd(4608, FrameworkVariableService, FrameworkVariableService, []), ɵmpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ɵmpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ɵmpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵmpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService, ResizeService, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService$1, FilterService$1, []), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, SolutionService, SolutionService, []), ɵmpd(4608, ErrorHandler, ɵt, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ɵmpd(4608, I18nService$2, I18nService$2, []), ɵmpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ɵmpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(135680, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService$2, FilterService$2, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$2, NavigationService$2, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UploadService, UploadService, [HttpService]), ɵmpd(4608, DownloadService, DownloadService, []), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, SolutionService$1, SolutionService$1, [NotifyService]), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$3, I18nService$3, []), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskService$1, TaskService$1, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ConvertorService$2, ConvertorService$2, []), ɵmpd(4608, SolutionService$2, SolutionService$2, []), ɵmpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ɵmpd(135680, FarrisScrollSpyService, FarrisScrollSpyService, [NgZone]), ɵmpd(4608, DiscussionListService, DiscussionListService, []), ɵmpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ɵmpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService]), ɵmpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService]]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ɵa$2, MessagerService, CloudprintService, AppService]), ɵmpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService]]), ɵmpd(4608, EditorService, EditorService, []), ɵmpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ɵmpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, WindowVariableService, WindowVariableService, []), ɵmpd(4608, TabEntityService, TabEntityService, []), ɵmpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ɵa$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ2$1, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, ɵf, ɵf, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵbe, ɵbe, []), ɵmpd(1073742336, ɵg, ɵg, []), ɵmpd(1073742336, ɵt$1, ɵt$1, []), ɵmpd(1073742336, ɵbg, ɵbg, []), ɵmpd(1073742336, ɵbh, ɵbh, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, CommonSharedModule, CommonSharedModule, []), ɵmpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ɵmpd(1073742336, WfSignModule, WfSignModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ɵmpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ɵmpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, ProgressModule, ProgressModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, TreeModule, TreeModule, []), ɵmpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ɵmpd(1073742336, NavModule, NavModule, []), ɵmpd(1073742336, TagsModule, TagsModule, []), ɵmpd(1073742336, FFileUploadModule, FFileUploadModule, []), ɵmpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, OrganizationSelectorModule, OrganizationSelectorModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, EditorModule, EditorModule, []), ɵmpd(1073742336, FrmCommonModule, FrmCommonModule, []), ɵmpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ɵmpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ɵmpd(1073742336, GoodsStockFormRoutingModule, GoodsStockFormRoutingModule, []), ɵmpd(512, TranslateStore, TranslateStore, []), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(1024, TranslateLoader, ɵ0$2, [HttpClient]), ɵmpd(512, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(512, TranslateParser, TranslateDefaultParser, []), ɵmpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(1073742336, GoodsStockFormModule, GoodsStockFormModule, [TranslateResolveService]), ɵmpd(256, LOCALE_ID, ɵ1$1, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$2 }, { name: "input-group", value: ɵc$2 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$2 }, { name: "input-group", value: ɵc$2 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$1 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, ɵb$3, { modules: defaultModules }, []), ɵmpd(256, FFileUploadAPIServiceToken, null, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ɵmpd(256, FORM_PATH_TOKEN, "/apps/hotwave/stock/web/bo-goodsstock-front/goodsstockform/", [])]); }));

        }
    };
});
