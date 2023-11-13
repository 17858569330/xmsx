/*! UPDATE TIME: 2023/7/11 09:23:17 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@farris/ui-common', '@farris/ui-common/date', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@qdp/query-framework', '@qdp/spread', '@qdp/echarts', '@qdp/common', '@qdp/condition-schema', '@angular/router', '@qdp/command-services', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-forms/farris-ui-forms.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-enum-editor/farris-ui-enum-editor.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-organization-selector/farris-ui-organization-selector.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@gsp-sys/rtf-ui/gsp-sys-rtf-ui.ngfactory', 'ngx-color-picker/dist/ngx-color-picker.ngfactory', '@progress/kendo-angular-treeview', '@farris/ui-modal', '@progress/kendo-angular-popup', '@progress/kendo-angular-resize-sensor', '@farris/ui-locale', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-perfect-scrollbar', '@farris/ui-area-response', '@progress/kendo-angular-layout.ngfactory', '@progress/kendo-angular-l10n', '@progress/kendo-angular-treeview.ngfactory', '@gsp-svc/expression/gsp-svc-expression.ngfactory', '@gsp-svc/filtercondition/gsp-svc-filtercondition.ngfactory', '@farris/component-querycondition', '@farris/ui-section/farris-ui-section.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@farris/ui-dialog', '@gsp-wf/wf-task-handler', '@progress/kendo-angular-dialog', '@farris/ui-common/number', '@farris/ui-pagination', '@farris/ui-popover', '@farris/ui-common/column', '@gsp-wf/wf-approval-logs', '@farris/ui-context-menu', '@farris/ui-common/events', '@farris/ui-filter-condition', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@gsp-sys/rtf-ui', 'ngx-color-picker', '@gsp-svc/expression', '@qdp/ide-cmp', '@farris/ui-dropdown', '@gsp-svc/filtercondition', '@farris/ui-datatable', '@farris/ui-datalist', '@farris/ui-layout', '@farris/ui-filter-panel', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-enum-editor', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-tree', '@farris/ui-organization-selector', '@farris/ui-panel'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, ViewChild, Component, ElementRef, NgModule, TemplateRef, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, Input, Output, defineInjectable, inject, Optional, EventEmitter, PLATFORM_ID, ApplicationRef, NgZone, RendererFactory2, ɵqud, ɵprd, Renderer2, ɵted, Sanitizer, ɵand, ɵinlineInterpolate, ɵnov, ɵpad, ɵpid, ɵppd, ɵunv, Inject, InjectionToken, ErrorHandler, __decorate, __metadata, __extends, CommonModule, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, DOCUMENT, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, isPlatformBrowser, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_bc, FormGroupDirective, ControlContainer, NgControlStatusGroup, KendoBindingModule, SectionComponentRefDirective, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, DatagridComponentRefDirective, FarrisQuerySolutionEventBindDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, SplitterService, SplitterComponent, SplitterPaneComponent, FlexLayoutModule, FarrisFormsModule, FormMessageModule, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, Uri, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, from, switchMap, catchError, tap, HttpClient, HttpClientModule, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, HttpClientXsrfModule, DomSanitizer, EventManager, Declaration, NgCommand, ViewModel, NgField, NgEntity, Entity, NgObject, NgList, EntityList, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, StateMachine, NgParam, UIState, NgCommandHandler, CommandHandler, FrameContext, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, CHANGE_SET_POLICY_TOKEN, BACK_END_MESSAGE_HANDLER_TOKEN, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService$1, VARIABLE_PARSERS, FrameIdVariableParser, ɵa$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, ChangeItemService, ListDataService, FilterService, DataGridService, NavigationMiddlewareService, NavigationService, DataCheckService, BeActionService, FormMessageService, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, CommandService, FocusInvalidService, CommandServicesModule, ValidationService, FormNotifyService, LanguageService, UIStateService, StateMachineService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, FormLoadingService, FormErrorService, FilterConditionService, TreeDataService, SubTreeDataService, CardDataService, RuntimeFrameworkService, SubListDataService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, NavigationEventService, MenuStateService, QuerystringService, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService, RouterService, AuthorityService, ɵb, ɵc, EndEditService, BatchEditService, DiscussionGroupService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, PaginationService, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, EventService, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, CacheService, SessionService, HttpService, LanguageService$1, CacheStorageAbstract, CacheMemoryStorage, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, GridModule, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, SuspendService, ResizeService, SinglePopupService, ScrollSyncService, DragAndDropService, DragHintService, DropCueService, IdService$1, BrowserSupportService, DomEventsService, LocalDataChangesService, SelectionService, GroupInfoService, GroupsService, Skip, ChangeNotificationService, DetailsService, EditService$1, FilterService$1, PDFService, ResponsiveService, ExcelService, ColumnResizingService, ColumnReorderService, ColumnInfoService, PagerContextService, ScrollRequestService, FocusRoot, NavigationService$1, FocusableDirective, SortService, GridComponent, DataBindingDirective, SelectionDirective, CELL_CONTEXT, EMPTY_CELL_CONTEXT, CheckboxColumnComponent, ColumnBase, ColumnComponent, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, TOUCH_ENABLED, touchEnabled, NavigationService$3, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, CommonUtils, FarrisCommonModule, RuntimeStateService, IdService, OverLayHiddenService, DateHelperModule, DateTimeHelperService, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupModule, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, FarrisTabsModule, NgbDropdownConfig, NgbTooltipConfig, TabService, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, FarrisTimeSpinnerModule, DatagridComponent, GRID_SETTINGS_HTTP, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ɵt, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, ɵa$1, ɵb$2, QuerySolutionComponent, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, SplitterModule, ListNavModule, TextModule, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, ComboServerSideToken, ComboListModule, ComboLocaleService, ComboService, FarrisHtmlEditorModule, ɵb$6, defaultModules, CloudprintService, CloudPrintModule, ɵa, ɵb$1, ɵc$1, ɵe, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$4, ɵb$5, ɵc$3, ɵd$1, ɵe$1, ɵf$1, ɵg$1, ɵh$1, ɵi, ɵj$2, ɵk, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, SwitchModule, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$2, ConvertorService$1, SolutionService$1, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, ComboLookupModule, ScrollspyModule, FarrisScrollSpyService, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵu, ɵv, ɵo, ɵz, ɵd, ɵa$2, ɵy, ɵf, ɵh, ɵbe, ɵg, ɵt$1, ɵbg, ɵbh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaService, ConditionDialogComponent, QueryFrameworkLayoutComponent, QueryFrameworkModule, QdpViewComponent, SpreadModule, RenderService, EchartsModule, QdpCommonModule, Server_Host, FilterManagerService, RestfulService, ParasMappingManagerService, JointSearchManagerService, LcpService, SchemaManagerService, SchemaRenderExtendService, PrintIntegrationManagerService, ɵb$4, DataRenderExtendService, DndListModule, ConditionSchemaModule, FinishLoadService, ConditionSchemaService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, QDP_COMMAND_SERVICE_PROVIDERS, QueryIndexService, FinishEventService, LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, SingleListComponentNgFactory, FilterPanelComponentNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, View_GridComponent_0, RenderType_GridComponent, View_CheckboxColumnComponent_0, RenderType_CheckboxColumnComponent, View_ColumnComponent_0, RenderType_ColumnComponent, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, View_QuerySolutionComponent_0, RenderType_QuerySolutionComponent, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$3, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$4, FeatureEditorComponentNgFactory, RtfAppComponentNgFactory$1, ColorPickerComponentNgFactory, TreeViewModule, CheckBoxModule, SharedModule$2, IndexBuilderService, LoadingNotificationService, ExpandStateService, NavigationService$2, NodeChildrenService, SelectionService$1, TreeViewLookupService, DataChangeNotificationService, TreeViewComponent, ExpandDirective, SelectDirective, FlatDataBindingDirective, BsModalService, ModalModule, PopupService, POPUP_CONTAINER, PopupModule, ResizeBatchService, ResizeSensorModule, LocaleService, FARRIS_LOCAL_CUSTOM_DATA, LocaleModule, PositioningService, ComponentLoaderFactory, PerfectScrollbarModule, FAreaResponseModule, View_SplitterComponent_0, RenderType_SplitterComponent, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent, L10N_PREFIX, LocalizationService$1, MessageService, RTL, View_TreeViewComponent_0, RenderType_TreeViewComponent, ɵlNgFactory$1, ɵaNgFactory$5, ExpressioneditorComponentNgFactory, FilterConditionComponentNgFactory, FilterExpressionComponentNgFactory, ConvertorService, SolutionService, QueryConditionModule, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, View_DatagridComponent_0, RenderType_DatagridComponent, DialogService$1, FarrisDialogModule, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$3, WindowModule, DialogModule, DialogsModule, NumberHelperService, NumberHelperModule, PaginationService$1, PaginationModule, PopoverConfig, PopoverModule, ColumnFormatService, DataColumnModule, WfApprovalLogsService, WfApprovalLogsModule, FarrisContextMenuService, FarrisContextMenuModule, ResizeService$1, QuerySolutionService, FilterConditionModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, ɵc$2, ɵb$3, RtfAppHelpModule$1, ColorPickerService, ColorPickerModule, ɵm, ExpressionEventService, ExpressionService$1, ɵj$1, ExpressionModule, ɵn$1, ParasMappingService, JointSearchService, SchemaService, PrintIntegrationService, IdeCmpModule, FDropdownDirective, FDropdownDirectiveTypeModule, FilterService$3, FilterConditionModule$1, DataTableModule, DatalistModule, LayoutModule$1, FilterPanelModule, TaskImplApiModule, WfSignModule, EnumEditorModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, TreeModule, OrganizationSelectorModule, FarrisPanelModule;
    return {
        setters: [function (module) {
            Pipe = module.Pipe;
            Injectable = module.Injectable;
            Injector = module.Injector;
            HostBinding = module.HostBinding;
            ViewChild = module.ViewChild;
            Component = module.Component;
            ElementRef = module.ElementRef;
            NgModule = module.NgModule;
            TemplateRef = module.TemplateRef;
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
            Input = module.Input;
            Output = module.Output;
            defineInjectable = module.defineInjectable;
            inject = module.inject;
            Optional = module.Optional;
            EventEmitter = module.EventEmitter;
            PLATFORM_ID = module.PLATFORM_ID;
            ApplicationRef = module.ApplicationRef;
            NgZone = module.NgZone;
            RendererFactory2 = module.RendererFactory2;
            ɵqud = module.ɵqud;
            ɵprd = module.ɵprd;
            Renderer2 = module.Renderer2;
            ɵted = module.ɵted;
            Sanitizer = module.Sanitizer;
            ɵand = module.ɵand;
            ɵinlineInterpolate = module.ɵinlineInterpolate;
            ɵnov = module.ɵnov;
            ɵpad = module.ɵpad;
            ɵpid = module.ɵpid;
            ɵppd = module.ɵppd;
            ɵunv = module.ɵunv;
            Inject = module.Inject;
            InjectionToken = module.InjectionToken;
            ErrorHandler = module.ErrorHandler;
        }, function (module) {
            __decorate = module.__decorate;
            __metadata = module.__metadata;
            __extends = module.__extends;
        }, function (module) {
            CommonModule = module.CommonModule;
            NgLocalization = module.NgLocalization;
            NgLocaleLocalization = module.NgLocaleLocalization;
            ɵangular_packages_common_common_a = module.ɵangular_packages_common_common_a;
            DOCUMENT = module.DOCUMENT;
            NgIf = module.NgIf;
            NgSwitch = module.NgSwitch;
            NgSwitchCase = module.NgSwitchCase;
            NgSwitchDefault = module.NgSwitchDefault;
            isPlatformBrowser = module.isPlatformBrowser;
        }, function (module) {
            FormControl = module.FormControl;
            FormsModule = module.FormsModule;
            ReactiveFormsModule = module.ReactiveFormsModule;
            FormBuilder = module.FormBuilder;
            ɵangular_packages_forms_forms_j = module.ɵangular_packages_forms_forms_j;
            ɵangular_packages_forms_forms_bc = module.ɵangular_packages_forms_forms_bc;
            FormGroupDirective = module.FormGroupDirective;
            ControlContainer = module.ControlContainer;
            NgControlStatusGroup = module.NgControlStatusGroup;
        }, function (module) {
            KendoBindingModule = module.KendoBindingModule;
            SectionComponentRefDirective = module.SectionComponentRefDirective;
            FarrisDatagridUseBindingDataDirective = module.FarrisDatagridUseBindingDataDirective;
            EditableDirective = module.EditableDirective;
            FarrisDataGridEndEditDirective = module.FarrisDataGridEndEditDirective;
            FarrisDataGridRemoteSummaryDirective = module.FarrisDataGridRemoteSummaryDirective;
            DatagridComponentRefDirective = module.DatagridComponentRefDirective;
            FarrisQuerySolutionEventBindDirective = module.FarrisQuerySolutionEventBindDirective;
            FarrisKendoGridFormatService = module.FarrisKendoGridFormatService;
            FarrisTreetableFormatService = module.FarrisTreetableFormatService;
        }, function (module) {
            LayoutModule = module.LayoutModule;
            PanelBarModule = module.PanelBarModule;
            SplitterModule$1 = module.SplitterModule;
            TabStripModule = module.TabStripModule;
            SplitterService = module.SplitterService;
            SplitterComponent = module.SplitterComponent;
            SplitterPaneComponent = module.SplitterPaneComponent;
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
            Uri = module.Uri;
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
            from = module.from;
        }, function (module) {
            switchMap = module.switchMap;
            catchError = module.catchError;
            tap = module.tap;
        }, function (module) {
            HttpClient = module.HttpClient;
            HttpClientModule = module.HttpClientModule;
            HttpXsrfTokenExtractor = module.HttpXsrfTokenExtractor;
            ɵangular_packages_common_http_http_g = module.ɵangular_packages_common_http_http_g;
            ɵangular_packages_common_http_http_e = module.ɵangular_packages_common_http_http_e;
            ɵangular_packages_common_http_http_h = module.ɵangular_packages_common_http_http_h;
            ɵangular_packages_common_http_http_f = module.ɵangular_packages_common_http_http_f;
            HTTP_INTERCEPTORS = module.HTTP_INTERCEPTORS;
            ɵangular_packages_common_http_http_d = module.ɵangular_packages_common_http_http_d;
            XhrFactory = module.XhrFactory;
            HttpXhrBackend = module.HttpXhrBackend;
            HttpBackend = module.HttpBackend;
            HttpHandler = module.HttpHandler;
            ɵHttpInterceptingHandler = module.ɵHttpInterceptingHandler;
            HttpClientXsrfModule = module.HttpClientXsrfModule;
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
            NgList = module.NgList;
            EntityList = module.EntityList;
            NgRepository = module.NgRepository;
            NgValidateForm = module.NgValidateForm;
            Form = module.Form;
            NgState = module.NgState;
            State = module.State;
            NgRenderState = module.NgRenderState;
            StateMachine = module.StateMachine;
            NgParam = module.NgParam;
            UIState = module.UIState;
            NgCommandHandler = module.NgCommandHandler;
            CommandHandler = module.CommandHandler;
            FrameContext = module.FrameContext;
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
            RestfulService$1 = module.RestfulService;
            VARIABLE_PARSERS = module.VARIABLE_PARSERS;
            FrameIdVariableParser = module.FrameIdVariableParser;
            ɵa$3 = module.ɵa;
            EventParamVariableParser = module.EventParamVariableParser;
            DataVariableParser = module.DataVariableParser;
            UIStateVariableParser = module.UIStateVariableParser;
            StateMachineVariableParser = module.StateMachineVariableParser;
            CommandVariableParser = module.CommandVariableParser;
        }, function (module) {
            ChangeItemService = module.ChangeItemService;
            ListDataService = module.ListDataService;
            FilterService = module.FilterService;
            DataGridService = module.DataGridService;
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            NavigationService = module.NavigationService;
            DataCheckService = module.DataCheckService;
            BeActionService = module.BeActionService;
            FormMessageService = module.FormMessageService;
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ComponentManagerService = module.ComponentManagerService;
            ExceptionHandler = module.ExceptionHandler;
            BackEndMessageHandler = module.BackEndMessageHandler;
            KeybindingService = module.KeybindingService;
            LocalizationService = module.LocalizationService;
            ApplicationParamService = module.ApplicationParamService;
            CommandService = module.CommandService;
            FocusInvalidService = module.FocusInvalidService;
            CommandServicesModule = module.CommandServicesModule;
            ValidationService = module.ValidationService;
            FormNotifyService = module.FormNotifyService;
            LanguageService = module.LanguageService;
            UIStateService = module.UIStateService;
            StateMachineService = module.StateMachineService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            FormLoadingService = module.FormLoadingService;
            FormErrorService = module.FormErrorService;
            FilterConditionService = module.FilterConditionService;
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
            ApproveService = module.ApproveService;
            PrintService = module.PrintService;
            AttachmentDataService = module.AttachmentDataService;
            AttachmentService = module.AttachmentService;
            FileService = module.FileService;
            NavigationEventService = module.NavigationEventService;
            MenuStateService = module.MenuStateService;
            QuerystringService = module.QuerystringService;
            GridMiddlewareService = module.GridMiddlewareService;
            SidebarService = module.SidebarService;
            FarrisFormService = module.FarrisFormService;
            FARRIS_FORM_COMPONENTS = module.FARRIS_FORM_COMPONENTS;
            DialogService = module.DialogService;
            RouterService = module.RouterService;
            AuthorityService = module.AuthorityService;
            ɵb = module.ɵb;
            ɵc = module.ɵc;
            EndEditService = module.EndEditService;
            BatchEditService = module.BatchEditService;
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
            EventService = module.EventService;
            ParamService = module.ParamService;
            UserSettingsService = module.UserSettingsService;
        }, function (module) {
            VerifyDetailService = module.VerifyDetailService;
            VerifyDetailModule = module.VerifyDetailModule;
        }, function (module) {
            FrmCommonModule = module.FrmCommonModule;
            CacheService = module.CacheService;
            SessionService = module.SessionService;
            HttpService = module.HttpService;
            LanguageService$1 = module.LanguageService;
            CacheStorageAbstract = module.CacheStorageAbstract;
            CacheMemoryStorage = module.CacheMemoryStorage;
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
            SuspendService = module.SuspendService;
            ResizeService = module.ResizeService;
            SinglePopupService = module.SinglePopupService;
            ScrollSyncService = module.ScrollSyncService;
            DragAndDropService = module.DragAndDropService;
            DragHintService = module.DragHintService;
            DropCueService = module.DropCueService;
            IdService$1 = module.IdService;
            BrowserSupportService = module.BrowserSupportService;
            DomEventsService = module.DomEventsService;
            LocalDataChangesService = module.LocalDataChangesService;
            SelectionService = module.SelectionService;
            GroupInfoService = module.GroupInfoService;
            GroupsService = module.GroupsService;
            Skip = module.Skip;
            ChangeNotificationService = module.ChangeNotificationService;
            DetailsService = module.DetailsService;
            EditService$1 = module.EditService$1;
            FilterService$1 = module.FilterService;
            PDFService = module.PDFService;
            ResponsiveService = module.ResponsiveService;
            ExcelService = module.ExcelService;
            ColumnResizingService = module.ColumnResizingService;
            ColumnReorderService = module.ColumnReorderService;
            ColumnInfoService = module.ColumnInfoService;
            PagerContextService = module.PagerContextService;
            ScrollRequestService = module.ScrollRequestService;
            FocusRoot = module.FocusRoot;
            NavigationService$1 = module.NavigationService;
            FocusableDirective = module.FocusableDirective;
            SortService = module.SortService;
            GridComponent = module.GridComponent;
            DataBindingDirective = module.DataBindingDirective;
            SelectionDirective = module.SelectionDirective;
            CELL_CONTEXT = module.CELL_CONTEXT;
            EMPTY_CELL_CONTEXT = module.EMPTY_CELL_CONTEXT;
            CheckboxColumnComponent = module.CheckboxColumnComponent;
            ColumnBase = module.ColumnBase;
            ColumnComponent = module.ColumnComponent;
        }, function (module) {
            DateInputsModule = module.DateInputsModule;
            DOMService = module.DOMService;
            CenturyViewService = module.CenturyViewService;
            DecadeViewService = module.DecadeViewService;
            MonthViewService = module.MonthViewService;
            YearViewService = module.YearViewService;
            WeekNamesService = module.WeekNamesService;
            EventsModule$1 = module.EventsModule;
            DateInputModule = module.DateInputModule;
            CalendarCommonModule = module.CalendarCommonModule;
            TemplatesModule = module.TemplatesModule;
            VirtualizationModule = module.VirtualizationModule;
            CalendarModule$1 = module.CalendarModule;
            DatePickerModule = module.DatePickerModule;
            TOUCH_ENABLED = module.TOUCH_ENABLED;
            touchEnabled = module.touchEnabled;
            NavigationService$3 = module.NavigationService;
            BusViewService = module.BusViewService;
            DOMService$1 = module.DOMService$1;
            HoursService = module.HoursService;
            MinutesService = module.MinutesService;
            SecondsService = module.SecondsService;
            DayPeriodService = module.DayPeriodService;
            MultiViewCalendarModule = module.MultiViewCalendarModule;
            CalendarsModule = module.CalendarsModule;
            TimePickerModule$1 = module.TimePickerModule;
            DateRangeModule = module.DateRangeModule;
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
            ServerSideToken = module.ServerSideToken;
            LookupModule = module.LookupModule;
        }, function (module) {
            TreeTableModule = module.TreeTableModule;
            TreetableService = module.TreetableService;
            TTHotkeys = module.TTHotkeys;
        }, function (module) {
            FieldGroupModule = module.FieldGroupModule;
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
            ɵa$1 = module.ɵa;
            ɵb$2 = module.ɵb;
            QuerySolutionComponent = module.QuerySolutionComponent;
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
            ComboService = module.ComboService;
        }, function (module) {
            FarrisHtmlEditorModule = module.FarrisHtmlEditorModule;
            ɵb$6 = module.ɵb;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ɵa = module.ɵa;
            ɵb$1 = module.ɵb;
            ɵc$1 = module.ɵc;
            ɵe = module.ɵe;
        }, function (module) {
            DatagridEditorsModule = module.DatagridEditorsModule;
            EditorProviders = module.EditorProviders;
            DatagridTextareaComponent = module.DatagridTextareaComponent;
            DatagridTextboxComponent = module.DatagridTextboxComponent;
            ɵa$4 = module.ɵa;
            ɵb$5 = module.ɵb;
            ɵc$3 = module.ɵc;
            ɵd$1 = module.ɵd;
            ɵe$1 = module.ɵe;
            ɵf$1 = module.ɵf;
            ɵg$1 = module.ɵg;
            ɵh$1 = module.ɵh;
            ɵi = module.ɵi;
            ɵj$2 = module.ɵj;
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
            FilterService$2 = module.FilterService;
            ConvertorService$1 = module.ConvertorService;
            SolutionService$1 = module.SolutionService;
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
            ConditionDialogComponent = module.ConditionDialogComponent;
            QueryFrameworkLayoutComponent = module.QueryFrameworkLayoutComponent;
            QueryFrameworkModule = module.QueryFrameworkModule;
        }, function (module) {
            QdpViewComponent = module.QdpViewComponent;
            SpreadModule = module.SpreadModule;
            RenderService = module.RenderService;
        }, function (module) {
            EchartsModule = module.EchartsModule;
        }, function (module) {
            QdpCommonModule = module.QdpCommonModule;
            Server_Host = module.Server_Host;
            FilterManagerService = module.FilterManagerService;
            RestfulService = module.RestfulService;
            ParasMappingManagerService = module.ParasMappingManagerService;
            JointSearchManagerService = module.JointSearchManagerService;
            LcpService = module.LcpService;
            SchemaManagerService = module.SchemaManagerService;
            SchemaRenderExtendService = module.SchemaRenderExtendService;
            PrintIntegrationManagerService = module.PrintIntegrationManagerService;
            ɵb$4 = module.ɵb;
            DataRenderExtendService = module.DataRenderExtendService;
            DndListModule = module.DndListModule;
        }, function (module) {
            ConditionSchemaModule = module.ConditionSchemaModule;
            FinishLoadService = module.FinishLoadService;
            ConditionSchemaService = module.ConditionSchemaService;
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
            QDP_COMMAND_SERVICE_PROVIDERS = module.QDP_COMMAND_SERVICE_PROVIDERS;
            QueryIndexService = module.QueryIndexService;
            FinishEventService = module.FinishEventService;
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
            ɵaNgFactory$1 = module.ɵaNgFactory;
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
            View_GridComponent_0 = module.View_GridComponent_0;
            RenderType_GridComponent = module.RenderType_GridComponent;
            View_CheckboxColumnComponent_0 = module.View_CheckboxColumnComponent_0;
            RenderType_CheckboxColumnComponent = module.RenderType_CheckboxColumnComponent;
            View_ColumnComponent_0 = module.View_ColumnComponent_0;
            RenderType_ColumnComponent = module.RenderType_ColumnComponent;
        }, function (module) {
            NgbTooltipWindowNgFactory = module.NgbTooltipWindowNgFactory;
        }, function (module) {
            FileUploadComponentNgFactory = module.FileUploadComponentNgFactory;
            UploadDialogComponentNgFactory = module.UploadDialogComponentNgFactory;
        }, function (module) {
            ɵbNgFactory$2 = module.ɵbNgFactory;
            QueryConditionComponentNgFactory = module.QueryConditionComponentNgFactory;
        }, function (module) {
            View_QuerySolutionComponent_0 = module.View_QuerySolutionComponent_0;
            RenderType_QuerySolutionComponent = module.RenderType_QuerySolutionComponent;
            ɵcNgFactory$2 = module.ɵcNgFactory;
            ɵeNgFactory$2 = module.ɵeNgFactory;
        }, function (module) {
            ɵaNgFactory$2 = module.ɵaNgFactory;
        }, function (module) {
            ProcessSelectorComponentNgFactory$1 = module.ProcessSelectorComponentNgFactory;
            WfWorkitemHandleComponentNgFactory = module.WfWorkitemHandleComponentNgFactory;
            UserHelperComponentNgFactory = module.UserHelperComponentNgFactory;
            TaskAssignComponentNgFactory = module.TaskAssignComponentNgFactory;
            TaskSignaddComponentNgFactory = module.TaskSignaddComponentNgFactory;
            TaskTransferComponentNgFactory = module.TaskTransferComponentNgFactory;
            ɵaNgFactory$3 = module.ɵaNgFactory;
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
            ɵaNgFactory$4 = module.ɵaNgFactory;
        }, function (module) {
            FeatureEditorComponentNgFactory = module.FeatureEditorComponentNgFactory;
        }, function (module) {
            RtfAppComponentNgFactory$1 = module.RtfAppComponentNgFactory;
        }, function (module) {
            ColorPickerComponentNgFactory = module.ColorPickerComponentNgFactory;
        }, function (module) {
            TreeViewModule = module.TreeViewModule;
            CheckBoxModule = module.CheckBoxModule;
            SharedModule$2 = module.SharedModule;
            IndexBuilderService = module.IndexBuilderService;
            LoadingNotificationService = module.LoadingNotificationService;
            ExpandStateService = module.ExpandStateService;
            NavigationService$2 = module.NavigationService;
            NodeChildrenService = module.NodeChildrenService;
            SelectionService$1 = module.SelectionService;
            TreeViewLookupService = module.TreeViewLookupService;
            DataChangeNotificationService = module.DataChangeNotificationService;
            TreeViewComponent = module.TreeViewComponent;
            ExpandDirective = module.ExpandDirective;
            SelectDirective = module.SelectDirective;
            FlatDataBindingDirective = module.FlatDataBindingDirective;
        }, function (module) {
            BsModalService = module.BsModalService;
            ModalModule = module.ModalModule;
        }, function (module) {
            PopupService = module.PopupService;
            POPUP_CONTAINER = module.POPUP_CONTAINER;
            PopupModule = module.PopupModule;
        }, function (module) {
            ResizeBatchService = module.ResizeBatchService;
            ResizeSensorModule = module.ResizeSensorModule;
        }, function (module) {
            LocaleService = module.LocaleService;
            FARRIS_LOCAL_CUSTOM_DATA = module.FARRIS_LOCAL_CUSTOM_DATA;
            LocaleModule = module.LocaleModule;
        }, function (module) {
            PositioningService = module.PositioningService;
        }, function (module) {
            ComponentLoaderFactory = module.ComponentLoaderFactory;
        }, function (module) {
            PerfectScrollbarModule = module.PerfectScrollbarModule;
        }, function (module) {
            FAreaResponseModule = module.FAreaResponseModule;
        }, function (module) {
            View_SplitterComponent_0 = module.View_SplitterComponent_0;
            RenderType_SplitterComponent = module.RenderType_SplitterComponent;
            View_SplitterPaneComponent_0 = module.View_SplitterPaneComponent_0;
            RenderType_SplitterPaneComponent = module.RenderType_SplitterPaneComponent;
        }, function (module) {
            L10N_PREFIX = module.L10N_PREFIX;
            LocalizationService$1 = module.LocalizationService;
            MessageService = module.MessageService;
            RTL = module.RTL;
        }, function (module) {
            View_TreeViewComponent_0 = module.View_TreeViewComponent_0;
            RenderType_TreeViewComponent = module.RenderType_TreeViewComponent;
        }, function (module) {
            ɵlNgFactory$1 = module.ɵlNgFactory;
            ɵaNgFactory$5 = module.ɵaNgFactory;
            ExpressioneditorComponentNgFactory = module.ExpressioneditorComponentNgFactory;
        }, function (module) {
            FilterConditionComponentNgFactory = module.FilterConditionComponentNgFactory;
            FilterExpressionComponentNgFactory = module.FilterExpressionComponentNgFactory;
        }, function (module) {
            ConvertorService = module.ConvertorService;
            SolutionService = module.SolutionService;
            QueryConditionModule = module.QueryConditionModule;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
        }, function (module) {
            View_ResponseToolbarComponent_0 = module.View_ResponseToolbarComponent_0;
            RenderType_ResponseToolbarComponent = module.RenderType_ResponseToolbarComponent;
        }, function (module) {
            View_DatagridComponent_0 = module.View_DatagridComponent_0;
            RenderType_DatagridComponent = module.RenderType_DatagridComponent;
        }, function (module) {
            DialogService$1 = module.DialogService;
            FarrisDialogModule = module.FarrisDialogModule;
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
            SharedModule$3 = module.SharedModule;
            WindowModule = module.WindowModule;
            DialogModule = module.DialogModule;
            DialogsModule = module.DialogsModule;
        }, function (module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
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
            WfApprovalLogsService = module.WfApprovalLogsService;
            WfApprovalLogsModule = module.WfApprovalLogsModule;
        }, function (module) {
            FarrisContextMenuService = module.FarrisContextMenuService;
            FarrisContextMenuModule = module.FarrisContextMenuModule;
        }, function (module) {
            ResizeService$1 = module.ResizeService;
        }, function (module) {
            QuerySolutionService = module.QuerySolutionService;
            FilterConditionModule = module.FilterConditionModule;
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
            ɵc$2 = module.ɵc;
            ɵb$3 = module.ɵb;
            RtfAppHelpModule$1 = module.RtfAppHelpModule;
        }, function (module) {
            ColorPickerService = module.ColorPickerService;
            ColorPickerModule = module.ColorPickerModule;
        }, function (module) {
            ɵm = module.ɵm;
            ExpressionEventService = module.ExpressionEventService;
            ExpressionService$1 = module.ExpressionService;
            ɵj$1 = module.ɵj;
            ExpressionModule = module.ExpressionModule;
            ɵn$1 = module.ɵn;
        }, function (module) {
            ParasMappingService = module.ParasMappingService;
            JointSearchService = module.JointSearchService;
            SchemaService = module.SchemaService;
            PrintIntegrationService = module.PrintIntegrationService;
            IdeCmpModule = module.IdeCmpModule;
        }, function (module) {
            FDropdownDirective = module.FDropdownDirective;
            FDropdownDirectiveTypeModule = module.FDropdownDirectiveTypeModule;
        }, function (module) {
            FilterService$3 = module.FilterService;
            FilterConditionModule$1 = module.FilterConditionModule;
        }, function (module) {
            DataTableModule = module.DataTableModule;
        }, function (module) {
            DatalistModule = module.DatalistModule;
        }, function (module) {
            LayoutModule$1 = module.LayoutModule;
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
        }, function (module) {
            FarrisPanelModule = module.FarrisPanelModule;
        }],
        execute: function () {

            function createTranslateLoader(http, version) {
                var versionSuffix = "";
                if (version) {
                    versionSuffix = "?v=" + version;
                }
                return new TranslateHttpLoader(http, '/apps/hotwave/ordermrg/web/bo-saleorder-front/saleorderlist/i18n/', '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "query-scheme-section": "", "Section/query-scheme-section/mainTitle": "主标题", "Section/query-scheme-section/subTitle": "", "query-scheme-1": "默认筛选方案", "QueryScheme/query-scheme-1/733efd3c-f6e8-4531-9376-f75141601f7e": "主键", "QueryScheme/query-scheme-1/733efd3c-f6e8-4531-9376-f75141601f7e/placeHolder": "", "QueryScheme/query-scheme-1/2482e064-3e32-4792-b5be-9fdf4cc79af4": "版本", "QueryScheme/query-scheme-1/2482e064-3e32-4792-b5be-9fdf4cc79af4/placeHolder": "", "QueryScheme/query-scheme-1/767a620f-1ef5-4853-9790-fd32a7e95641": "订单编号", "QueryScheme/query-scheme-1/767a620f-1ef5-4853-9790-fd32a7e95641/placeHolder": "", "QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914": "商户", "QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/placeHolder": "", "QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/control/help/dialogTitle": "", "QueryScheme/query-scheme-1/c0169d08-558e-45b7-a8c3-29f411eb25e8": "商户名称", "QueryScheme/query-scheme-1/c0169d08-558e-45b7-a8c3-29f411eb25e8/placeHolder": "", "QueryScheme/query-scheme-1/40871ebf-bd7e-4838-8ef2-836d45e805ef": "商户编号", "QueryScheme/query-scheme-1/40871ebf-bd7e-4838-8ef2-836d45e805ef/placeHolder": "", "QueryScheme/query-scheme-1/308bc30d-b0e8-4d30-855a-b50d3ed42a63": "下单时间", "QueryScheme/query-scheme-1/308bc30d-b0e8-4d30-855a-b50d3ed42a63/placeHolder": "", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358": "支付方式", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/placeHolder": "", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/Cash": "现金", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/AliPay": "支付宝", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/WeChat": "微信支付", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/UPay": "银联", "QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb": "下单人", "QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/placeHolder": "", "QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/control/help/dialogTitle": "", "QueryScheme/query-scheme-1/a2bef0a2-4eff-4d83-af88-c8ff337f808e": "编号", "QueryScheme/query-scheme-1/a2bef0a2-4eff-4d83-af88-c8ff337f808e/placeHolder": "", "QueryScheme/query-scheme-1/4481a4c2-43d1-4211-b56b-16f265165340": "名称", "QueryScheme/query-scheme-1/4481a4c2-43d1-4211-b56b-16f265165340/placeHolder": "", "QueryScheme/query-scheme-1/866d4620-a685-4388-8ce1-9be5291dc38e": "联系电话", "QueryScheme/query-scheme-1/866d4620-a685-4388-8ce1-9be5291dc38e/placeHolder": "", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d": "发货状态", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/placeHolder": "", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/UnShipped": "未发货", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/Shipped": "已发货", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/Done": "已收货", "QueryScheme/query-scheme-1/743dc1bc-be9d-46e4-bd4c-36048d3b10a7": "备注", "QueryScheme/query-scheme-1/743dc1bc-be9d-46e4-bd4c-36048d3b10a7/placeHolder": "", "QueryScheme/query-scheme-1/cd60f924-00e3-49d1-b3f9-a20e437439f7": "订单金额", "QueryScheme/query-scheme-1/cd60f924-00e3-49d1-b3f9-a20e437439f7/placeHolder": "", "QueryScheme/query-scheme-1/dadf3137-4061-41b5-aed2-bbc5866de901": "折扣优惠", "QueryScheme/query-scheme-1/dadf3137-4061-41b5-aed2-bbc5866de901/placeHolder": "", "QueryScheme/query-scheme-1/6310d9f5-36da-4b43-8c21-5e32e23725ef": "合计实付", "QueryScheme/query-scheme-1/6310d9f5-36da-4b43-8c21-5e32e23725ef/placeHolder": "", "QueryScheme/query-scheme-1/070516f9-8648-4811-8500-2263aa14f150": "订单来源", "QueryScheme/query-scheme-1/070516f9-8648-4811-8500-2263aa14f150/placeHolder": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "销售订单表单", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-view": "查看", "button-delete": "删除", "toolBarItem-1ra7": "发货", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "merchant_Merchant_MerchantName_c0169d08_9r7o": "商户名称", "orderCode_767a620f_0314": "订单编号", "orderPerson_OrderPerson_name_4481a4c2_lfg9": "下单人", "orderTime_308bc30d_axsq": "下单时间", "telephone_866d4620_1gi0": "联系电话", "payMethod_29a89f50_3c87": "支付方式", "GridField/payMethod_29a89f50_3c87/enumData/Cash": "现金", "GridField/payMethod_29a89f50_3c87/enumData/AliPay": "支付宝", "GridField/payMethod_29a89f50_3c87/enumData/WeChat": "微信支付", "GridField/payMethod_29a89f50_3c87/enumData/UPay": "银联", "sendState_11e5bd1a_wmm0": "发货状态", "GridField/sendState_11e5bd1a_wmm0/enumData/UnShipped": "未发货", "GridField/sendState_11e5bd1a_wmm0/enumData/Shipped": "已发货", "GridField/sendState_11e5bd1a_wmm0/enumData/Done": "已收货", "totalPrice_cd60f924_2r7f": "订单金额", "totalDiscounts_dadf3137_toe5": "折扣优惠", "actualPay_6310d9f5_3uu8": "合计实付", "remark_743dc1bc_nr9s": "备注" } };
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
                        var httpOb = this.http.get("/apps/hotwave/ordermrg/web/bo-saleorder-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                            var currentVersion = null;
                            if (data instanceof Array) {
                                var versionKey_1 = "saleorderlist/" + langCode + ".json";
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

            var ɵ0 = { type: 'string' }, ɵ1 = { type: 'any' };
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
                RootViewmodel.prototype.Search1 = function (commandParam) { return; };
                RootViewmodel.prototype.RemoveRows1 = function (commandParam) { return; };
                RootViewmodel.prototype.Add1 = function (commandParam) { return; };
                RootViewmodel.prototype.View1 = function (commandParam) { return; };
                RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Remove1 = function (commandParam) { return; };
                RootViewmodel.prototype.Filter1 = function (commandParam) { return; };
                RootViewmodel.prototype.rootviewmodelsendGoods1 = function (commandParam) { return; };
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
                        name: 'Search1',
                        params: {
                            filter: '',
                            sort: '',
                            pageSize: '',
                            pageIndex: ''
                        },
                        paramDescriptions: {
                            filter: { type: 'string' },
                            sort: { type: 'string' },
                            pageSize: { type: 'int' },
                            pageIndex: { type: 'int' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Search1", null);
                __decorate([
                    NgCommand({
                        name: 'RemoveRows1',
                        params: {
                            ids: '{UISTATE~/data-grid-component/ids}'
                        },
                        paramDescriptions: {
                            ids: { type: 'decimal' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "RemoveRows1", null);
                __decorate([
                    NgCommand({
                        name: 'Add1',
                        params: {
                            url: '9389af85-4208-4e39-9c97-24cb316d19c9',
                            params: '{"action":"LoadAndAdd1"}',
                            enableRefresh: '',
                            tabName: '',
                            destructuring: ''
                        },
                        paramDescriptions: {
                            url: { type: 'string' },
                            params: { type: 'string' },
                            enableRefresh: { type: 'string' },
                            tabName: { type: 'string' },
                            destructuring: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Add1", null);
                __decorate([
                    NgCommand({
                        name: 'View1',
                        params: {
                            url: '9389af85-4208-4e39-9c97-24cb316d19c9',
                            params: '{"action":"LoadAndView1","id":"{DATA~/data-grid-component/id}"}',
                            idToView: '{DATA~/data-grid-component/id}{DATA~/data-grid-component/id}',
                            enableRefresh: '',
                            tabName: '',
                            destructuring: ''
                        },
                        paramDescriptions: {
                            url: { type: 'string' },
                            params: { type: 'string' },
                            idToView: { type: 'string' },
                            enableRefresh: { type: 'string' },
                            tabName: { type: 'string' },
                            destructuring: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "View1", null);
                __decorate([
                    NgCommand({
                        name: 'Edit1',
                        params: {
                            url: '9389af85-4208-4e39-9c97-24cb316d19c9',
                            params: '{"action":"LoadAndEdit1","id":"{DATA~/data-grid-component/id}"}',
                            idToEdit: '{DATA~/data-grid-component/id}{DATA~/data-grid-component/id}',
                            enableRefresh: '',
                            tabName: '',
                            destructuring: ''
                        },
                        paramDescriptions: {
                            url: { type: 'string' },
                            params: { type: 'string' },
                            idToEdit: { type: 'string' },
                            enableRefresh: { type: 'string' },
                            tabName: { type: 'string' },
                            destructuring: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Edit1", null);
                __decorate([
                    NgCommand({
                        name: 'Remove1',
                        params: {
                            id: '{DATA~/data-grid-component/id}'
                        },
                        paramDescriptions: {
                            id: ɵ0
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Remove1", null);
                __decorate([
                    NgCommand({
                        name: 'Filter1',
                        params: {
                            filter: '{UISTATE~/root-component/originalFilterConditionList}',
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
                ], RootViewmodel.prototype, "Filter1", null);
                __decorate([
                    NgCommand({
                        name: 'rootviewmodelsendGoods1',
                        params: {
                            id: '{DATA~/data-grid-component/id}',
                            sendstate: 'Shipped',
                            loadCmdName: 'Load1',
                            loadCmdFrameId: '#{root-component}'
                        },
                        paramDescriptions: {
                            id: ɵ1,
                            sendstate: { type: 'any' },
                            loadCmdName: { type: 'string' },
                            loadCmdFrameId: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "rootviewmodelsendGoods1", null);
                RootViewmodel = __decorate([
                    Injectable()
                ], RootViewmodel);
                return RootViewmodel;
            }(ViewModel));

            var GoodsD382Entity = /** @class */ (function (_super) {
                __extends(GoodsD382Entity, _super);
                function GoodsD382Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'Goods',
                        dataField: 'goods',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Goods.Goods',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GoodsD382Entity.prototype, "goods", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'GoodsName',
                        dataField: 'goods_GoodsName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Goods.Goods_GoodsName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GoodsD382Entity.prototype, "goods_GoodsName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'GoodsCode',
                        dataField: 'goods_GoodsCode',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Goods.Goods_GoodsCode',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GoodsD382Entity.prototype, "goods_GoodsCode", void 0);
                GoodsD382Entity = __decorate([
                    NgEntity({
                        originalCode: "Goods",
                        nodeCode: "goods"
                    })
                ], GoodsD382Entity);
                return GoodsD382Entity;
            }(Entity));

            var OrderDetailEntity = /** @class */ (function (_super) {
                __extends(OrderDetailEntity, _super);
                function OrderDetailEntity() {
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
                ], OrderDetailEntity.prototype, "id", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ParentID',
                        dataField: 'parentID',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'ParentID',
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
                ], OrderDetailEntity.prototype, "parentID", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Specification',
                        dataField: 'specification',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Specification',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], OrderDetailEntity.prototype, "specification", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Quality',
                        dataField: 'quality',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'Quality',
                    }),
                    __metadata("design:type", Object)
                ], OrderDetailEntity.prototype, "quality", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Price',
                        dataField: 'price',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'Price',
                    }),
                    __metadata("design:type", Object)
                ], OrderDetailEntity.prototype, "price", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Amount',
                        dataField: 'amount',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'Amount',
                    }),
                    __metadata("design:type", Object)
                ], OrderDetailEntity.prototype, "amount", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'DiscountType',
                        dataField: 'discountType',
                        originalDataFieldType: 'Enum',
                        defaultValue: '',
                        initValue: 'none',
                        path: 'DiscountType',
                    }),
                    __metadata("design:type", Object)
                ], OrderDetailEntity.prototype, "discountType", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Discount',
                        dataField: 'discount',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'Discount',
                    }),
                    __metadata("design:type", Object)
                ], OrderDetailEntity.prototype, "discount", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ActualAmount',
                        dataField: 'actualAmount',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'ActualAmount',
                    }),
                    __metadata("design:type", Object)
                ], OrderDetailEntity.prototype, "actualAmount", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Remark',
                        dataField: 'remark',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Remark',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [100],
                                message: '最大长度为100',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], OrderDetailEntity.prototype, "remark", void 0);
                __decorate([
                    NgObject({
                        dataField: 'goods',
                        originalDataField: 'Goods',
                        type: GoodsD382Entity
                    }),
                    __metadata("design:type", GoodsD382Entity)
                ], OrderDetailEntity.prototype, "goods", void 0);
                OrderDetailEntity = __decorate([
                    NgEntity({
                        originalCode: "OrderDetail",
                        nodeCode: "orderDetails"
                    })
                ], OrderDetailEntity);
                return OrderDetailEntity;
            }(Entity));

            var MerChant9697Entity = /** @class */ (function (_super) {
                __extends(MerChant9697Entity, _super);
                function MerChant9697Entity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'Merchant',
                        dataField: 'merchant',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Merchant.Merchant',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MerChant9697Entity.prototype, "merchant", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'MerchantName',
                        dataField: 'merchant_MerchantName',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Merchant.Merchant_MerchantName',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MerChant9697Entity.prototype, "merchant_MerchantName", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'MerchantCode',
                        dataField: 'merchant_MerchantCode',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Merchant.Merchant_MerchantCode',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], MerChant9697Entity.prototype, "merchant_MerchantCode", void 0);
                MerChant9697Entity = __decorate([
                    NgEntity({
                        originalCode: "Merchant",
                        nodeCode: "merchant"
                    })
                ], MerChant9697Entity);
                return MerChant9697Entity;
            }(Entity));

            var GspUserWithOrgName771cEntity = /** @class */ (function (_super) {
                __extends(GspUserWithOrgName771cEntity, _super);
                function GspUserWithOrgName771cEntity() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgField({
                        originalDataField: 'OrderPerson',
                        dataField: 'orderPerson',
                        primary: true,
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'OrderPerson.OrderPerson',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserWithOrgName771cEntity.prototype, "orderPerson", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'code',
                        dataField: 'orderPerson_code',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'OrderPerson.OrderPerson_code',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [120],
                                message: '最大长度为120',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserWithOrgName771cEntity.prototype, "orderPerson_code", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'name',
                        dataField: 'orderPerson_name',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'OrderPerson.OrderPerson_name',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [120],
                                message: '最大长度为120',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], GspUserWithOrgName771cEntity.prototype, "orderPerson_name", void 0);
                GspUserWithOrgName771cEntity = __decorate([
                    NgEntity({
                        originalCode: "OrderPerson",
                        nodeCode: "orderPerson"
                    })
                ], GspUserWithOrgName771cEntity);
                return GspUserWithOrgName771cEntity;
            }(Entity));

            var SaleOrderEntity = /** @class */ (function (_super) {
                __extends(SaleOrderEntity, _super);
                function SaleOrderEntity() {
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
                ], SaleOrderEntity.prototype, "id", void 0);
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
                ], SaleOrderEntity.prototype, "version", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'OrderCode',
                        dataField: 'orderCode',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'OrderCode',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [36],
                                message: '最大长度为36',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SaleOrderEntity.prototype, "orderCode", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'OrderTime',
                        dataField: 'orderTime',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'OrderTime',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [30],
                                message: '最大长度为30',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SaleOrderEntity.prototype, "orderTime", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'PayMethod',
                        dataField: 'payMethod',
                        originalDataFieldType: 'Enum',
                        defaultValue: '',
                        initValue: 'Cash',
                        path: 'PayMethod',
                    }),
                    __metadata("design:type", Object)
                ], SaleOrderEntity.prototype, "payMethod", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Telephone',
                        dataField: 'telephone',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Telephone',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [20],
                                message: '最大长度为20',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SaleOrderEntity.prototype, "telephone", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'SendState',
                        dataField: 'sendState',
                        originalDataFieldType: 'Enum',
                        defaultValue: '',
                        initValue: 'UnShipped',
                        path: 'SendState',
                    }),
                    __metadata("design:type", Object)
                ], SaleOrderEntity.prototype, "sendState", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'Remark',
                        dataField: 'remark',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'Remark',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [100],
                                message: '最大长度为100',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SaleOrderEntity.prototype, "remark", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'TotalPrice',
                        dataField: 'totalPrice',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'TotalPrice',
                    }),
                    __metadata("design:type", Object)
                ], SaleOrderEntity.prototype, "totalPrice", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'TotalDiscounts',
                        dataField: 'totalDiscounts',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'TotalDiscounts',
                    }),
                    __metadata("design:type", Object)
                ], SaleOrderEntity.prototype, "totalDiscounts", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'ActualPay',
                        dataField: 'actualPay',
                        originalDataFieldType: 'Number',
                        initValue: 0,
                        path: 'ActualPay',
                    }),
                    __metadata("design:type", Object)
                ], SaleOrderEntity.prototype, "actualPay", void 0);
                __decorate([
                    NgField({
                        originalDataField: 'OrderSource',
                        dataField: 'orderSource',
                        originalDataFieldType: 'String',
                        initValue: '',
                        path: 'OrderSource',
                        validRules: [
                            {
                                type: 'maxLength',
                                constraints: [20],
                                message: '最大长度为20',
                            }
                        ]
                    }),
                    __metadata("design:type", String)
                ], SaleOrderEntity.prototype, "orderSource", void 0);
                __decorate([
                    NgList({
                        dataField: 'orderDetails',
                        originalDataField: '',
                        type: OrderDetailEntity
                    }),
                    __metadata("design:type", EntityList)
                ], SaleOrderEntity.prototype, "orderDetails", void 0);
                __decorate([
                    NgObject({
                        dataField: 'merchant',
                        originalDataField: 'Merchant',
                        type: MerChant9697Entity
                    }),
                    __metadata("design:type", MerChant9697Entity)
                ], SaleOrderEntity.prototype, "merchant", void 0);
                __decorate([
                    NgObject({
                        dataField: 'orderPerson',
                        originalDataField: 'OrderPerson',
                        type: GspUserWithOrgName771cEntity
                    }),
                    __metadata("design:type", GspUserWithOrgName771cEntity)
                ], SaleOrderEntity.prototype, "orderPerson", void 0);
                SaleOrderEntity = __decorate([
                    NgEntity({
                        originalCode: "SaleOrder",
                        nodeCode: "saleOrders"
                    })
                ], SaleOrderEntity);
                return SaleOrderEntity;
            }(Entity));

            var SaleOrderProxy = /** @class */ (function (_super) {
                __extends(SaleOrderProxy, _super);
                function SaleOrderProxy(httpClient, uriService) {
                    var _this = _super.call(this, httpClient, uriService) || this;
                    _this.apiUrl = 'api/hotwave/ordermrg/v1.0/saleorderlist_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
                SaleOrderProxy.prototype.SendGoods = function (id, sendstate) {
                    var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/sendgoods', {});
                    var url = uri.toString();
                    var method = 'PUT';
                    var options = {
                        params: {},
                        headers: {},
                        body: {
                            requestInfo: null,
                            id: id,
                            sendstate: sendstate,
                        }
                    };
                    return this.invoke(url, method, options);
                };
                SaleOrderProxy = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [HttpClient,
                        UriService])
                ], SaleOrderProxy);
                return SaleOrderProxy;
            }(BefProxy));

            var SaleOrderRepository = /** @class */ (function (_super) {
                __extends(SaleOrderRepository, _super);
                function SaleOrderRepository(injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.name = 'SaleOrderRepository';
                    _this.paginationInfo = {
                        SaleOrderEntity: {
                            pageSize: 20,
                        }
                    };
                    _this.proxy = injector.get(SaleOrderProxy, null);
                    return _this;
                }
                SaleOrderRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/hotwave/ordermrg/v1.0/saleorderlist_frm',
                        entityType: SaleOrderEntity
                    }),
                    __metadata("design:paramtypes", [Injector])
                ], SaleOrderRepository);
                return SaleOrderRepository;
            }(BefRepository));

            var RootViewmodelForm = /** @class */ (function (_super) {
                __extends(RootViewmodelForm, _super);
                function RootViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RootViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '业务订单',
                        enableValidate: false
                    }),
                    Injectable()
                ], RootViewmodelForm);
                return RootViewmodelForm;
            }(Form));

            var ɵ0$1 = function (context) { return context.state === 'init'; }, ɵ1$1 = function (context) { return context.state === 'init'; }, ɵ2 = function (context) { return context.state === 'init'; }, ɵ3 = function (context) { return context.state === 'init'; };
            var RootViewmodelStateMachine = /** @class */ (function (_super) {
                __extends(RootViewmodelStateMachine, _super);
                function RootViewmodelStateMachine() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgState({
                        initialState: true,
                        name: "初始"
                    }),
                    __metadata("design:type", State)
                ], RootViewmodelStateMachine.prototype, "init", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ0$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canView", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ1$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemove", void 0);
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
                RootViewmodelStateMachine = __decorate([
                    Injectable()
                ], RootViewmodelStateMachine);
                return RootViewmodelStateMachine;
            }(StateMachine));

            var RootViewmodelUIState = /** @class */ (function (_super) {
                __extends(RootViewmodelUIState, _super);
                function RootViewmodelUIState() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.originalFilterConditionList = '';
                    return _this;
                }
                __decorate([
                    NgParam({ originalDataType: "String", category: "locale" }),
                    __metadata("design:type", String)
                ], RootViewmodelUIState.prototype, "originalFilterConditionList", void 0);
                RootViewmodelUIState = __decorate([
                    Injectable()
                ], RootViewmodelUIState);
                return RootViewmodelUIState;
            }(UIState));

            var Load1Handler = /** @class */ (function (_super) {
                __extends(Load1Handler, _super);
                function Load1Handler(_ChangeItemService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                Load1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/sort}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'load', args, context);
                    });
                    this.addTask('setRepository', function (context) {
                        var args = [];
                        return _this.invoke(_this._ChangeItemService1, 'setRepository', args, context);
                    });
                    this.addLink('load', 'setRepository', "1==1");
                };
                Load1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Load1'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        ListDataService])
                ], Load1Handler);
                return Load1Handler;
            }(CommandHandler));

            var Search1Handler = /** @class */ (function (_super) {
                __extends(Search1Handler, _super);
                function Search1Handler(_ListDataService1, _FilterService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    _this._FilterService1 = _FilterService1;
                    return _this;
                }
                Search1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('stripFiltersWithSpecialValue', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/specialFilterValues}'
                        ];
                        return _this.invoke(_this._FilterService1, 'stripFiltersWithSpecialValue', args, context);
                    });
                    this.addTask('query', function (context) {
                        var args = [
                            '{COMMAND~/results/stripFiltersWithSpecialValue}',
                            '{COMMAND~/params/sort}',
                            '{COMMAND~/params/pageSize}',
                            '{COMMAND~/params/pageIndex}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'query', args, context);
                    });
                    this.addLink('stripFiltersWithSpecialValue', 'query', "1==1");
                };
                Search1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Search1'
                    }),
                    __metadata("design:paramtypes", [ListDataService,
                        FilterService])
                ], Search1Handler);
                return Search1Handler;
            }(CommandHandler));

            var RemoveRows1Handler = /** @class */ (function (_super) {
                __extends(RemoveRows1Handler, _super);
                function RemoveRows1Handler(_DataGridService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                RemoveRows1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('removeRows', function (context) {
                        var args = [
                            '{COMMAND~/params/ids}',
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'removeRows', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/ids}'
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
                    this.addLink('removeRows', 'uncheckDeletedRows', "1==1");
                    this.addLink('uncheckDeletedRows', 'refreshAfterRemoving', "1==1");
                };
                RemoveRows1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'RemoveRows1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        ListDataService])
                ], RemoveRows1Handler);
                return RemoveRows1Handler;
            }(CommandHandler));

            var Add1Handler = /** @class */ (function (_super) {
                __extends(Add1Handler, _super);
                function Add1Handler(_NavigationMiddlewareService1, _NavigationService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._NavigationService1 = _NavigationService1;
                    return _this;
                }
                Add1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('getTabId', function (context) {
                        var args = [
                            '{COMMAND~/params/params}',
                            ''
                        ];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'getTabId', args, context);
                    });
                    this.addTask('openMenu', function (context) {
                        var args = [
                            '{COMMAND~/results/getTabId}',
                            '{COMMAND~/params/url}',
                            '{COMMAND~/params/params}',
                            '',
                            '{COMMAND~/params/enableRefresh}',
                            '{COMMAND~/params/tabName}',
                            '{COMMAND~/params/destructuring}'
                        ];
                        return _this.invoke(_this._NavigationService1, 'openMenu', args, context);
                    });
                    this.addLink('getTabId', 'openMenu', "1==1");
                };
                Add1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Add1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        NavigationService])
                ], Add1Handler);
                return Add1Handler;
            }(CommandHandler));

            var View1Handler = /** @class */ (function (_super) {
                __extends(View1Handler, _super);
                function View1Handler(_NavigationMiddlewareService1, _DataCheckService1, _NavigationService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._DataCheckService1 = _DataCheckService1;
                    _this._NavigationService1 = _NavigationService1;
                    return _this;
                }
                View1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('checkBeforeView', function (context) {
                        var args = [
                            '{COMMAND~/params/idToView}'
                        ];
                        return _this.invoke(_this._DataCheckService1, 'checkBeforeView', args, context);
                    });
                    this.addTask('getTabId', function (context) {
                        var args = [
                            '{COMMAND~/params/params}',
                            '{COMMAND~/params/idToView}'
                        ];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'getTabId', args, context);
                    });
                    this.addTask('openMenu', function (context) {
                        var args = [
                            '{COMMAND~/results/getTabId}',
                            '{COMMAND~/params/url}',
                            '{COMMAND~/params/params}',
                            '',
                            '{COMMAND~/params/enableRefresh}',
                            '{COMMAND~/params/tabName}',
                            '{COMMAND~/params/destructuring}'
                        ];
                        return _this.invoke(_this._NavigationService1, 'openMenu', args, context);
                    });
                    this.addLink('checkBeforeView', 'getTabId', "1==1");
                    this.addLink('getTabId', 'openMenu', "1==1");
                };
                View1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'View1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        DataCheckService,
                        NavigationService])
                ], View1Handler);
                return View1Handler;
            }(CommandHandler));

            var Edit1Handler = /** @class */ (function (_super) {
                __extends(Edit1Handler, _super);
                function Edit1Handler(_NavigationMiddlewareService1, _DataCheckService1, _NavigationService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._DataCheckService1 = _DataCheckService1;
                    _this._NavigationService1 = _NavigationService1;
                    return _this;
                }
                Edit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('checkBeforeEdit', function (context) {
                        var args = [
                            '{COMMAND~/params/idToEdit}'
                        ];
                        return _this.invoke(_this._DataCheckService1, 'checkBeforeEdit', args, context);
                    });
                    this.addTask('getTabId', function (context) {
                        var args = [
                            '{COMMAND~/params/params}',
                            '{COMMAND~/params/idToEdit}'
                        ];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'getTabId', args, context);
                    });
                    this.addTask('openMenu', function (context) {
                        var args = [
                            '{COMMAND~/results/getTabId}',
                            '{COMMAND~/params/url}',
                            '{COMMAND~/params/params}',
                            '',
                            '{COMMAND~/params/enableRefresh}',
                            '{COMMAND~/params/tabName}',
                            '{COMMAND~/params/destructuring}'
                        ];
                        return _this.invoke(_this._NavigationService1, 'openMenu', args, context);
                    });
                    this.addLink('checkBeforeEdit', 'getTabId', "1==1");
                    this.addLink('getTabId', 'openMenu', "1==1");
                };
                Edit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Edit1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        DataCheckService,
                        NavigationService])
                ], Edit1Handler);
                return Edit1Handler;
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
                            'true',
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

            var Filter1Handler = /** @class */ (function (_super) {
                __extends(Filter1Handler, _super);
                function Filter1Handler(_ChangeItemService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                Filter1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('filter', function (context) {
                        var args = [
                            '{COMMAND~/params/filter}',
                            '{COMMAND~/params/sort}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'filter', args, context);
                    });
                    this.addTask('setRepository', function (context) {
                        var args = [];
                        return _this.invoke(_this._ChangeItemService1, 'setRepository', args, context);
                    });
                    this.addLink('filter', 'setRepository', "1==1");
                };
                Filter1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Filter1'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        ListDataService])
                ], Filter1Handler);
                return Filter1Handler;
            }(CommandHandler));

            var SaleOrderListFrmControllerService = /** @class */ (function () {
                function SaleOrderListFrmControllerService(frameContext, beActionService, messageService) {
                    this.frameContext = frameContext;
                    this.beActionService = beActionService;
                    this.messageService = messageService;
                }
                /**
                 * sendGoods
                 * @param id 单据ID
                 * @param sendstate 单据状态
                 * @remarks
                 * @returns
                 */
                SaleOrderListFrmControllerService.prototype.sendGoods = function (id, sendstate) {
                    var _this = this;
                    var repository = this.frameContext.repository;
                    var requestInfo = repository.restService.buildRequestInfo();
                    var actionUri = 'sendgoods';
                    //此处actionUri为报销单列表Eapi中发货操作URI尾部字段
                    var body = {
                        id: id,
                        sendstate: sendstate,
                        requestInfo: requestInfo
                    };
                    var action$ = this.beActionService.invokeAction(actionUri, 'PUT', null, null, body);
                    return action$.pipe(tap(function (responseInfo) {
                        _this.messageService.info("发货成功!");
                    }));
                };
                SaleOrderListFrmControllerService = __decorate([
                    Injectable(),
                    __metadata("design:paramtypes", [FrameContext,
                        BeActionService,
                        FormMessageService])
                ], SaleOrderListFrmControllerService);
                return SaleOrderListFrmControllerService;
            }());

            var rootviewmodelsendGoods1Handler = /** @class */ (function (_super) {
                __extends(rootviewmodelsendGoods1Handler, _super);
                function rootviewmodelsendGoods1Handler(_ListDataService1, _SaleOrderListFrmControllerService1) {
                    var _this = _super.call(this) || this;
                    _this._ListDataService1 = _ListDataService1;
                    _this._SaleOrderListFrmControllerService1 = _SaleOrderListFrmControllerService1;
                    return _this;
                }
                rootviewmodelsendGoods1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('sendGoods', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            '{COMMAND~/params/sendstate}'
                        ];
                        return _this.invoke(_this._SaleOrderListFrmControllerService1, 'sendGoods', args, context);
                    });
                    this.addTask('refresh', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCmdName}',
                            '{COMMAND~/params/loadCmdFrameId}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'refresh', args, context);
                    });
                    this.addLink('sendGoods', 'refresh', "1==1");
                };
                rootviewmodelsendGoods1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'rootviewmodelsendGoods1'
                    }),
                    __metadata("design:paramtypes", [ListDataService,
                        SaleOrderListFrmControllerService])
                ], rootviewmodelsendGoods1Handler);
                return rootviewmodelsendGoods1Handler;
            }(CommandHandler));

            var RootComponent = /** @class */ (function (_super) {
                __extends(RootComponent, _super);
                function RootComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, frameworkService, applicationParamsService, verifyService, stateMachine, sanitizer, injector) {
                    var _this = _super.call(this, injector) || this;
                    _this.wizardSer = wizardSer;
                    _this.keybindingService = keybindingService;
                    _this.langService = langService;
                    _this.route = route;
                    _this.router = router;
                    _this.rootElement = rootElement;
                    _this.localizationService = localizationService;
                    _this.frmI18nSettingService = frmI18nSettingService;
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
                            "id": "button-edit",
                            "text": _this.langService.transform("button-edit", _this.lang, "编辑"),
                            "resourceId": "button-edit",
                            "isDP": false,
                            "tipsEnable": false,
                            "icon": "",
                            "children": []
                        }, {
                            "id": "button-view",
                            "text": _this.langService.transform("button-view", _this.lang, "查看"),
                            "resourceId": "button-view",
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
                        }, {
                            "id": "toolBarItem-1ra7",
                            "text": _this.langService.transform("toolBarItem-1ra7", _this.lang, "发货"),
                            "resourceId": "toolBarItem-1ra7",
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
                    _this.sectionsToolbarStates = new BehaviorSubject({});
                    _this.sectionsToolbarVisibleStates = new BehaviorSubject({});
                    _this.querySchemeSection = {
                        position: 'inHead',
                        contents: []
                    };
                    _this.SectionqueryschemesectionMainTitle = _this.langService.transform("Section/query-scheme-section/mainTitle", _this.lang, "主标题");
                    _this.SectionqueryschemesectionSubTitle = _this.langService.transform("Section/query-scheme-section/subTitle", _this.lang, "");
                    _this.QuerySolutionqueryscheme1 = _this.langService.transform("query-scheme-1", _this.lang, "默认筛选方案");
                    _this.fieldConfigsqueryscheme1 = [
                        {
                            "id": "733efd3c-f6e8-4531-9376-f75141601f7e",
                            "labelCode": "ID",
                            "code": "ID",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/733efd3c-f6e8-4531-9376-f75141601f7e", _this.lang, "主键"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/733efd3c-f6e8-4531-9376-f75141601f7e/placeHolder", _this.lang, ""),
                            "control": { "id": "733efd3c-f6e8-4531-9376-f75141601f7e", "controltype": "text", "require": false, "className": "", "modalConfig": { "modalCmp": null, "mapFields": null, "showHeader": true, "title": "", "showCloseButton": true, "showMaxButton": true, "width": 800, "height": 600, "showFooterButtons": true, "footerButtons": [] } }
                        },
                        {
                            "id": "2482e064-3e32-4792-b5be-9fdf4cc79af4",
                            "labelCode": "Version",
                            "code": "Version",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/2482e064-3e32-4792-b5be-9fdf4cc79af4", _this.lang, "版本"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/2482e064-3e32-4792-b5be-9fdf4cc79af4/placeHolder", _this.lang, ""),
                            "control": { "id": "2482e064-3e32-4792-b5be-9fdf4cc79af4", "controltype": "date", "require": false, "format": "yyyy-MM-dd", "weekSelect": false }
                        },
                        {
                            "id": "767a620f-1ef5-4853-9790-fd32a7e95641",
                            "labelCode": "OrderCode",
                            "code": "OrderCode",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/767a620f-1ef5-4853-9790-fd32a7e95641", _this.lang, "订单编号"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/767a620f-1ef5-4853-9790-fd32a7e95641/placeHolder", _this.lang, ""),
                            "control": { "id": "767a620f-1ef5-4853-9790-fd32a7e95641", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "96976ac9-3bb4-4663-8f10-887f7a17d914",
                            "labelCode": "Merchant.Merchant",
                            "code": "Merchant",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914", _this.lang, "商户"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/placeHolder", _this.lang, ""),
                            "control": {
                                "controltype": "help",
                                "require": false,
                                "uri": "SaleOrder.merchant",
                                "textField": "merchantName",
                                "valueField": "id",
                                "idField": "id",
                                "helpId": "b610c446-71ea-4aed-bb9b-f46ccc45a556",
                                "displayType": "TreeList",
                                "loadTreeDataType": 'default',
                                "enableFullTree": false,
                                "editable": false,
                                "dialogTitle": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/control/help/dialogTitle", _this.lang, ""),
                                "singleSelect": true,
                                "enableCascade": false,
                                "cascadeStatus": "enable",
                                "pageSize": 20,
                                "pageList": "10,20,30,50,100",
                                "nosearch": false,
                                "expandLevel": -1,
                                "context": {
                                    "enableExtendLoadMethod": false
                                },
                                "quickSelect": {
                                    "enable": false,
                                    "showMore": true,
                                    "showItemsCount": 10
                                }
                            }
                        },
                        {
                            "id": "c0169d08-558e-45b7-a8c3-29f411eb25e8",
                            "labelCode": "Merchant.Merchant_MerchantName",
                            "code": "MerchantName",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/c0169d08-558e-45b7-a8c3-29f411eb25e8", _this.lang, "商户名称"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/c0169d08-558e-45b7-a8c3-29f411eb25e8/placeHolder", _this.lang, ""),
                            "control": { "id": "c0169d08-558e-45b7-a8c3-29f411eb25e8", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "40871ebf-bd7e-4838-8ef2-836d45e805ef",
                            "labelCode": "Merchant.Merchant_MerchantCode",
                            "code": "MerchantCode",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/40871ebf-bd7e-4838-8ef2-836d45e805ef", _this.lang, "商户编号"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/40871ebf-bd7e-4838-8ef2-836d45e805ef/placeHolder", _this.lang, ""),
                            "control": { "id": "40871ebf-bd7e-4838-8ef2-836d45e805ef", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "308bc30d-b0e8-4d30-855a-b50d3ed42a63",
                            "labelCode": "OrderTime",
                            "code": "OrderTime",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/308bc30d-b0e8-4d30-855a-b50d3ed42a63", _this.lang, "下单时间"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/308bc30d-b0e8-4d30-855a-b50d3ed42a63/placeHolder", _this.lang, ""),
                            "control": { "id": "308bc30d-b0e8-4d30-855a-b50d3ed42a63", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "29a89f50-5554-4bb0-9046-03d5a5610358",
                            "labelCode": "PayMethod",
                            "code": "PayMethod",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358", _this.lang, "支付方式"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/placeHolder", _this.lang, ""),
                            "control": {
                                "controltype": "dropdown",
                                "require": false,
                                "valueType": "1",
                                "multiSelect": false,
                                "enumValues": [
                                    {
                                        "value": "Cash",
                                        "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/Cash", _this.lang, "现金")
                                    },
                                    {
                                        "value": "AliPay",
                                        "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/AliPay", _this.lang, "支付宝")
                                    },
                                    {
                                        "value": "WeChat",
                                        "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/WeChat", _this.lang, "微信支付")
                                    },
                                    {
                                        "value": "UPay",
                                        "name": _this.langService.transform("QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/UPay", _this.lang, "银联")
                                    }
                                ]
                            }
                        },
                        {
                            "id": "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                            "labelCode": "OrderPerson.OrderPerson",
                            "code": "OrderPerson",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb", _this.lang, "下单人"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/placeHolder", _this.lang, ""),
                            "control": {
                                "controltype": "help",
                                "require": false,
                                "uri": "SaleOrder.orderPerson",
                                "textField": "name",
                                "valueField": "id",
                                "idField": "id",
                                "helpId": "99891fee-285e-420d-841a-93e522af0c5a",
                                "displayType": "List",
                                "loadTreeDataType": 'default',
                                "enableFullTree": false,
                                "editable": false,
                                "dialogTitle": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/control/help/dialogTitle", _this.lang, ""),
                                "singleSelect": true,
                                "enableCascade": false,
                                "cascadeStatus": "enable",
                                "pageSize": 20,
                                "pageList": "10,20,30,50,100",
                                "nosearch": false,
                                "expandLevel": -1,
                                "context": {
                                    "enableExtendLoadMethod": false
                                },
                                "quickSelect": {
                                    "enable": false,
                                    "showMore": true,
                                    "showItemsCount": 10
                                }
                            }
                        },
                        {
                            "id": "a2bef0a2-4eff-4d83-af88-c8ff337f808e",
                            "labelCode": "OrderPerson.OrderPerson_code",
                            "code": "code",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/a2bef0a2-4eff-4d83-af88-c8ff337f808e", _this.lang, "编号"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/a2bef0a2-4eff-4d83-af88-c8ff337f808e/placeHolder", _this.lang, ""),
                            "control": { "id": "a2bef0a2-4eff-4d83-af88-c8ff337f808e", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "4481a4c2-43d1-4211-b56b-16f265165340",
                            "labelCode": "OrderPerson.OrderPerson_name",
                            "code": "name",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/4481a4c2-43d1-4211-b56b-16f265165340", _this.lang, "名称"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/4481a4c2-43d1-4211-b56b-16f265165340/placeHolder", _this.lang, ""),
                            "control": { "id": "4481a4c2-43d1-4211-b56b-16f265165340", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "866d4620-a685-4388-8ce1-9be5291dc38e",
                            "labelCode": "Telephone",
                            "code": "Telephone",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/866d4620-a685-4388-8ce1-9be5291dc38e", _this.lang, "联系电话"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/866d4620-a685-4388-8ce1-9be5291dc38e/placeHolder", _this.lang, ""),
                            "control": { "id": "866d4620-a685-4388-8ce1-9be5291dc38e", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "11e5bd1a-1487-4031-b74a-3db20379c62d",
                            "labelCode": "SendState",
                            "code": "SendState",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d", _this.lang, "发货状态"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/placeHolder", _this.lang, ""),
                            "control": {
                                "controltype": "dropdown",
                                "require": false,
                                "valueType": "1",
                                "multiSelect": false,
                                "enumValues": [
                                    {
                                        "value": "UnShipped",
                                        "name": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/UnShipped", _this.lang, "未发货")
                                    },
                                    {
                                        "value": "Shipped",
                                        "name": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/Shipped", _this.lang, "已发货")
                                    },
                                    {
                                        "value": "Done",
                                        "name": _this.langService.transform("QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/Done", _this.lang, "已收货")
                                    }
                                ]
                            }
                        },
                        {
                            "id": "743dc1bc-be9d-46e4-bd4c-36048d3b10a7",
                            "labelCode": "Remark",
                            "code": "Remark",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/743dc1bc-be9d-46e4-bd4c-36048d3b10a7", _this.lang, "备注"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/743dc1bc-be9d-46e4-bd4c-36048d3b10a7/placeHolder", _this.lang, ""),
                            "control": { "id": "743dc1bc-be9d-46e4-bd4c-36048d3b10a7", "controltype": "text", "require": false, "className": "" }
                        },
                        {
                            "id": "cd60f924-00e3-49d1-b3f9-a20e437439f7",
                            "labelCode": "TotalPrice",
                            "code": "TotalPrice",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/cd60f924-00e3-49d1-b3f9-a20e437439f7", _this.lang, "订单金额"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/cd60f924-00e3-49d1-b3f9-a20e437439f7/placeHolder", _this.lang, ""),
                            "control": { "id": "cd60f924-00e3-49d1-b3f9-a20e437439f7", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
                        },
                        {
                            "id": "dadf3137-4061-41b5-aed2-bbc5866de901",
                            "labelCode": "TotalDiscounts",
                            "code": "TotalDiscounts",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/dadf3137-4061-41b5-aed2-bbc5866de901", _this.lang, "折扣优惠"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/dadf3137-4061-41b5-aed2-bbc5866de901/placeHolder", _this.lang, ""),
                            "control": { "id": "dadf3137-4061-41b5-aed2-bbc5866de901", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
                        },
                        {
                            "id": "6310d9f5-36da-4b43-8c21-5e32e23725ef",
                            "labelCode": "ActualPay",
                            "code": "ActualPay",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/6310d9f5-36da-4b43-8c21-5e32e23725ef", _this.lang, "合计实付"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/6310d9f5-36da-4b43-8c21-5e32e23725ef/placeHolder", _this.lang, ""),
                            "control": { "id": "6310d9f5-36da-4b43-8c21-5e32e23725ef", "controltype": "number", "require": false, "className": "", "textAlign": "left", "precision": 2, "isBigNumber": false }
                        },
                        {
                            "id": "070516f9-8648-4811-8500-2263aa14f150",
                            "labelCode": "OrderSource",
                            "code": "OrderSource",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/070516f9-8648-4811-8500-2263aa14f150", _this.lang, "订单来源"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/070516f9-8648-4811-8500-2263aa14f150/placeHolder", _this.lang, ""),
                            "control": { "id": "070516f9-8648-4811-8500-2263aa14f150", "controltype": "text", "require": false, "className": "" }
                        }
                    ];
                    _this.presetFieldConfigsqueryscheme1 = [
                        {
                            "id": "96976ac9-3bb4-4663-8f10-887f7a17d914",
                            "labelCode": "Merchant.Merchant",
                            "code": "Merchant",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914", _this.lang, "商户"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/placeHolder", _this.lang, ""),
                            "control": {
                                "controltype": "help",
                                "require": false,
                                "uri": "SaleOrder.merchant",
                                "textField": "merchantName",
                                "valueField": "id",
                                "idField": "id",
                                "helpId": "b610c446-71ea-4aed-bb9b-f46ccc45a556",
                                "displayType": "TreeList",
                                "loadTreeDataType": 'default',
                                "enableFullTree": false,
                                "editable": false,
                                "dialogTitle": _this.langService.transform("QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/control/help/dialogTitle", _this.lang, ""),
                                "singleSelect": true,
                                "enableCascade": false,
                                "cascadeStatus": "enable",
                                "pageSize": 20,
                                "pageList": "10,20,30,50,100",
                                "nosearch": false,
                                "expandLevel": -1,
                                "context": {
                                    "enableExtendLoadMethod": false
                                },
                                "quickSelect": {
                                    "enable": false,
                                    "showMore": true,
                                    "showItemsCount": 10
                                }
                            }
                        },
                        {
                            "id": "771cf8b5-c0e8-42d1-8da0-de6ac2498afb",
                            "labelCode": "OrderPerson.OrderPerson",
                            "code": "OrderPerson",
                            "name": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb", _this.lang, "下单人"),
                            "placeHolder": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/placeHolder", _this.lang, ""),
                            "control": {
                                "controltype": "help",
                                "require": false,
                                "uri": "SaleOrder.orderPerson",
                                "textField": "name",
                                "valueField": "id",
                                "idField": "id",
                                "helpId": "99891fee-285e-420d-841a-93e522af0c5a",
                                "displayType": "List",
                                "loadTreeDataType": 'default',
                                "enableFullTree": false,
                                "editable": false,
                                "dialogTitle": _this.langService.transform("QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/control/help/dialogTitle", _this.lang, ""),
                                "singleSelect": true,
                                "enableCascade": false,
                                "cascadeStatus": "enable",
                                "pageSize": 20,
                                "pageList": "10,20,30,50,100",
                                "nosearch": false,
                                "expandLevel": -1,
                                "context": {
                                    "enableExtendLoadMethod": false
                                },
                                "quickSelect": {
                                    "enable": false,
                                    "showMore": true,
                                    "showItemsCount": 10
                                }
                            }
                        }
                    ];
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
                            'button-edit': !_this.viewModel.stateMachine['canEdit'],
                            'button-view': !_this.viewModel.stateMachine['canView'],
                            'button-delete': !_this.viewModel.stateMachine['canRemove'],
                            'toolBarItem-1ra7': false,
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-add': true,
                            'button-edit': true,
                            'button-view': true,
                            'button-delete': true,
                            'toolBarItem-1ra7': true,
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
                    this.viewModel.Filter1();
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
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
                        case 'toolBarItem-1ra7':
                            this.viewModel.rootviewmodelsendGoods1(args);
                            break;
                    }
                };
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], RootComponent.prototype, "cls", void 0);
                __decorate([
                    ViewChild(ConditionDialogComponent),
                    __metadata("design:type", ConditionDialogComponent)
                ], RootComponent.prototype, "conditionDialog", void 0);
                __decorate([
                    ViewChild(QdpViewComponent),
                    __metadata("design:type", QdpViewComponent)
                ], RootComponent.prototype, "qdpViewComponent", void 0);
                __decorate([
                    ViewChild(QueryFrameworkLayoutComponent),
                    __metadata("design:type", QueryFrameworkLayoutComponent)
                ], RootComponent.prototype, "queryFrameworkLayoutComponent", void 0);
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
                            { provide: Repository, useExisting: SaleOrderRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            QDP_COMMAND_SERVICE_PROVIDERS,
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: RootViewmodelForm },
                            { provide: StateMachine, useClass: RootViewmodelStateMachine },
                            { provide: UIState, useClass: RootViewmodelUIState },
                            SaleOrderListFrmControllerService,
                            FrameworkSessionService,
                            UriService,
                            SaleOrderProxy,
                            SaleOrderRepository,
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
                            { provide: FORM_ID, useValue: "ce692bc1-d105-47a6-a1d0-719863e2a602" },
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
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelsendGoods1Handler, multi: true },
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
            var SaleOrderListRoutingModule = /** @class */ (function () {
                function SaleOrderListRoutingModule() {
                }
                SaleOrderListRoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], SaleOrderListRoutingModule);
                return SaleOrderListRoutingModule;
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
                                    "resourceId": "merchant_Merchant_MerchantName_c0169d08_9r7o",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "merchant_Merchant_MerchantName_c0169d08_9r7o",
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
                                        "path": "merchant_Merchant_MerchantName",
                                        "fullPath": "Merchant.Merchant_MerchantName",
                                        "isExpression": false,
                                        "value": "merchant_Merchant_MerchantName"
                                    },
                                    "dataField": "merchant.merchant_MerchantName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "商户名称",
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
                                    "resourceId": "orderCode_767a620f_0314",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "orderCode_767a620f_0314",
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
                                        "path": "orderCode",
                                        "fullPath": "OrderCode",
                                        "isExpression": false,
                                        "value": "orderCode"
                                    },
                                    "dataField": "orderCode",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "订单编号",
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "orderPerson_OrderPerson_name_4481a4c2_lfg9",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "orderPerson_OrderPerson_name_4481a4c2_lfg9",
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
                                        "path": "orderPerson_OrderPerson_name",
                                        "fullPath": "OrderPerson.OrderPerson_name",
                                        "isExpression": false,
                                        "value": "orderPerson_OrderPerson_name"
                                    },
                                    "dataField": "orderPerson.orderPerson_name",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "下单人",
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
                                    "resourceId": "orderTime_308bc30d_axsq",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "orderTime_308bc30d_axsq",
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
                                        "path": "orderTime",
                                        "fullPath": "OrderTime",
                                        "isExpression": false,
                                        "value": "orderTime"
                                    },
                                    "dataField": "orderTime",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "下单时间",
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "telephone_866d4620_1gi0",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "telephone_866d4620_1gi0",
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
                                        "path": "telephone",
                                        "fullPath": "Telephone",
                                        "isExpression": false,
                                        "value": "telephone"
                                    },
                                    "dataField": "telephone",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "联系电话",
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "payMethod_29a89f50_3c87",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "payMethod_29a89f50_3c87",
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
                                        "path": "payMethod",
                                        "fullPath": "PayMethod",
                                        "isExpression": false,
                                        "value": "payMethod"
                                    },
                                    "dataField": "payMethod",
                                    "dataType": "enum",
                                    "multiLanguage": false,
                                    "caption": "支付方式",
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "enumData": [
                                        {
                                            "name": "现金",
                                            "value": "Cash"
                                        },
                                        {
                                            "name": "支付宝",
                                            "value": "AliPay"
                                        },
                                        {
                                            "name": "微信支付",
                                            "value": "WeChat"
                                        },
                                        {
                                            "name": "银联",
                                            "value": "UPay"
                                        }
                                    ],
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
                                    "updateOn": "change",
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "sendState_11e5bd1a_wmm0",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "sendState_11e5bd1a_wmm0",
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
                                        "path": "sendState",
                                        "fullPath": "SendState",
                                        "isExpression": false,
                                        "value": "sendState"
                                    },
                                    "dataField": "sendState",
                                    "dataType": "enum",
                                    "multiLanguage": false,
                                    "caption": "发货状态",
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "enumData": [
                                        {
                                            "name": "未发货",
                                            "value": "UnShipped"
                                        },
                                        {
                                            "name": "已发货",
                                            "value": "Shipped"
                                        },
                                        {
                                            "name": "已收货",
                                            "value": "Done"
                                        }
                                    ],
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
                                    "updateOn": "change",
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "totalPrice_cd60f924_2r7f",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "totalPrice_cd60f924_2r7f",
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
                                        "path": "totalPrice",
                                        "fullPath": "TotalPrice",
                                        "isExpression": false,
                                        "value": "totalPrice"
                                    },
                                    "dataField": "totalPrice",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "订单金额",
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "number",
                                        "precision": 2,
                                        "thousand": ",",
                                        "decimal": "."
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "totalDiscounts_dadf3137_toe5",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "totalDiscounts_dadf3137_toe5",
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
                                        "path": "totalDiscounts",
                                        "fullPath": "TotalDiscounts",
                                        "isExpression": false,
                                        "value": "totalDiscounts"
                                    },
                                    "dataField": "totalDiscounts",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "折扣优惠",
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "number",
                                        "precision": 2,
                                        "thousand": ",",
                                        "decimal": "."
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "actualPay_6310d9f5_3uu8",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "actualPay_6310d9f5_3uu8",
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
                                        "path": "actualPay",
                                        "fullPath": "ActualPay",
                                        "isExpression": false,
                                        "value": "actualPay"
                                    },
                                    "dataField": "actualPay",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "合计实付",
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "number",
                                        "precision": 2,
                                        "thousand": ",",
                                        "decimal": "."
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "remark_743dc1bc_nr9s",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "remark_743dc1bc_nr9s",
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
                                        "path": "remark",
                                        "fullPath": "Remark",
                                        "isExpression": false,
                                        "value": "remark"
                                    },
                                    "dataField": "remark",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "备注",
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "none"
                                    }
                                }
                            ],
                            "multiSelect": false,
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
                __decorate([
                    NgCommand({
                        name: 'ChangePage1',
                        params: {
                            loadCommandName: 'Filter1',
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
                        id: 'orderCode',
                        name: "{{orderCode_767a620f_0314}}",
                        binding: 'orderCode',
                        updateOn: 'blur',
                        defaultI18nValue: '订单编号',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "orderCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'merchant.merchant_MerchantName',
                        name: "{{merchant_Merchant_MerchantName_c0169d08_9r7o}}",
                        binding: 'merchant.merchant_MerchantName',
                        updateOn: 'blur',
                        defaultI18nValue: '商户名称',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "merchant_Merchant_MerchantName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'orderTime',
                        name: "{{orderTime_308bc30d_axsq}}",
                        binding: 'orderTime',
                        updateOn: 'blur',
                        defaultI18nValue: '下单时间',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "orderTime", void 0);
                __decorate([
                    NgFormControl({
                        id: 'payMethod',
                        name: "{{payMethod_29a89f50_3c87}}",
                        binding: 'payMethod',
                        updateOn: 'change',
                        defaultI18nValue: '支付方式',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "payMethod", void 0);
                __decorate([
                    NgFormControl({
                        id: 'orderPerson.orderPerson_name',
                        name: "{{orderPerson_OrderPerson_name_4481a4c2_lfg9}}",
                        binding: 'orderPerson.orderPerson_name',
                        updateOn: 'blur',
                        defaultI18nValue: '下单人',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "orderPerson_OrderPerson_name", void 0);
                __decorate([
                    NgFormControl({
                        id: 'telephone',
                        name: "{{telephone_866d4620_1gi0}}",
                        binding: 'telephone',
                        updateOn: 'blur',
                        defaultI18nValue: '联系电话',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "telephone", void 0);
                __decorate([
                    NgFormControl({
                        id: 'sendState',
                        name: "{{sendState_11e5bd1a_wmm0}}",
                        binding: 'sendState',
                        updateOn: 'change',
                        defaultI18nValue: '发货状态',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "sendState", void 0);
                __decorate([
                    NgFormControl({
                        id: 'remark',
                        name: "{{remark_743dc1bc_nr9s}}",
                        binding: 'remark',
                        updateOn: 'blur',
                        defaultI18nValue: '备注',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "remark", void 0);
                __decorate([
                    NgFormControl({
                        id: 'totalPrice',
                        name: "{{totalPrice_cd60f924_2r7f}}",
                        binding: 'totalPrice',
                        updateOn: 'blur',
                        defaultI18nValue: '订单金额',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "totalPrice", void 0);
                __decorate([
                    NgFormControl({
                        id: 'totalDiscounts',
                        name: "{{totalDiscounts_dadf3137_toe5}}",
                        binding: 'totalDiscounts',
                        updateOn: 'blur',
                        defaultI18nValue: '折扣优惠',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "totalDiscounts", void 0);
                __decorate([
                    NgFormControl({
                        id: 'actualPay',
                        name: "{{actualPay_6310d9f5_3uu8}}",
                        binding: 'actualPay',
                        updateOn: 'blur',
                        defaultI18nValue: '合计实付',
                    }),
                    __metadata("design:type", FormControl)
                ], DataGridComponentViewmodelForm.prototype, "actualPay", void 0);
                DataGridComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '业务订单',
                        enableValidate: false
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
                function ChangePage1Handler(_CommandService1) {
                    var _this = _super.call(this) || this;
                    _this._CommandService1 = _CommandService1;
                    return _this;
                }
                ChangePage1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/loadCommandName}',
                            '{COMMAND~/params/loadCommandFrameId}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                };
                ChangePage1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangePage1'
                    }),
                    __metadata("design:paramtypes", [CommandService])
                ], ChangePage1Handler);
                return ChangePage1Handler;
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
                    _this.dataGridtotalDiscountsCellStyle = function (value, rowData, rowIndex) {
                        return {
                            style: {
                                color: 'red',
                                fontWeight: 600
                            }
                        };
                    };
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
                                id: 'merchant_Merchant_MerchantName_c0169d08_9r7o',
                                field: 'merchant.merchant_MerchantName',
                                width: 120,
                                title: this.langService.transform("merchant_Merchant_MerchantName_c0169d08_9r7o", this.lang, "商户名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'orderCode_767a620f_0314',
                                field: 'orderCode',
                                width: 120,
                                title: this.langService.transform("orderCode_767a620f_0314", this.lang, "订单编号"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'orderPerson_OrderPerson_name_4481a4c2_lfg9',
                                field: 'orderPerson.orderPerson_name',
                                width: 120,
                                title: this.langService.transform("orderPerson_OrderPerson_name_4481a4c2_lfg9", this.lang, "下单人"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'orderTime_308bc30d_axsq',
                                field: 'orderTime',
                                width: 120,
                                title: this.langService.transform("orderTime_308bc30d_axsq", this.lang, "下单时间"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'telephone_866d4620_1gi0',
                                field: 'telephone',
                                width: 120,
                                title: this.langService.transform("telephone_866d4620_1gi0", this.lang, "联系电话"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'payMethod_29a89f50_3c87',
                                field: 'payMethod',
                                width: 120,
                                title: this.langService.transform("payMethod_29a89f50_3c87", this.lang, "支付方式"),
                                dataType: 'enum',
                                template: this.dataGridpayMethodTemplate,
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                formatter: {
                                    "type": "enum",
                                    "options": {
                                        "valueField": "value",
                                        "textField": "name",
                                        "data": [
                                            {
                                                "value": "Cash",
                                                "name": this.langService.transform("GridField/payMethod_29a89f50_3c87/enumData/Cash", this.lang, "现金")
                                            },
                                            {
                                                "value": "AliPay",
                                                "name": this.langService.transform("GridField/payMethod_29a89f50_3c87/enumData/AliPay", this.lang, "支付宝")
                                            },
                                            {
                                                "value": "WeChat",
                                                "name": this.langService.transform("GridField/payMethod_29a89f50_3c87/enumData/WeChat", this.lang, "微信支付")
                                            },
                                            {
                                                "value": "UPay",
                                                "name": this.langService.transform("GridField/payMethod_29a89f50_3c87/enumData/UPay", this.lang, "银联")
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                id: 'sendState_11e5bd1a_wmm0',
                                field: 'sendState',
                                width: 120,
                                title: this.langService.transform("sendState_11e5bd1a_wmm0", this.lang, "发货状态"),
                                dataType: 'enum',
                                template: this.dataGridsendStateTemplate,
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                formatter: {
                                    "type": "enum",
                                    "options": {
                                        "valueField": "value",
                                        "textField": "name",
                                        "data": [
                                            {
                                                "value": "UnShipped",
                                                "name": this.langService.transform("GridField/sendState_11e5bd1a_wmm0/enumData/UnShipped", this.lang, "未发货")
                                            },
                                            {
                                                "value": "Shipped",
                                                "name": this.langService.transform("GridField/sendState_11e5bd1a_wmm0/enumData/Shipped", this.lang, "已发货")
                                            },
                                            {
                                                "value": "Done",
                                                "name": this.langService.transform("GridField/sendState_11e5bd1a_wmm0/enumData/Done", this.lang, "已收货")
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                id: 'totalPrice_cd60f924_2r7f',
                                field: 'totalPrice',
                                width: 120,
                                title: this.langService.transform("totalPrice_cd60f924_2r7f", this.lang, "订单金额"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'totalDiscounts_dadf3137_toe5',
                                field: 'totalDiscounts',
                                width: 120,
                                title: this.langService.transform("totalDiscounts_dadf3137_toe5", this.lang, "折扣优惠"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                styler: this.dataGridtotalDiscountsCellStyle,
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
                                id: 'actualPay_6310d9f5_3uu8',
                                field: 'actualPay',
                                width: 120,
                                title: this.langService.transform("actualPay_6310d9f5_3uu8", this.lang, "合计实付"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                                id: 'remark_743dc1bc_nr9s',
                                field: 'remark',
                                width: 120,
                                title: this.langService.transform("remark_743dc1bc_nr9s", this.lang, "备注"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
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
                    ViewChild('dataGridpayMethodTemplate'),
                    __metadata("design:type", TemplateRef)
                ], DataGridComponent.prototype, "dataGridpayMethodTemplate", void 0);
                __decorate([
                    ViewChild('dataGridsendStateTemplate'),
                    __metadata("design:type", TemplateRef)
                ], DataGridComponent.prototype, "dataGridsendStateTemplate", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], DataGridComponent.prototype, "cls", void 0);
                __decorate([
                    ViewChild(ConditionDialogComponent),
                    __metadata("design:type", ConditionDialogComponent)
                ], DataGridComponent.prototype, "conditionDialog", void 0);
                __decorate([
                    ViewChild(QdpViewComponent),
                    __metadata("design:type", QdpViewComponent)
                ], DataGridComponent.prototype, "qdpViewComponent", void 0);
                __decorate([
                    ViewChild(QueryFrameworkLayoutComponent),
                    __metadata("design:type", QueryFrameworkLayoutComponent)
                ], DataGridComponent.prototype, "queryFrameworkLayoutComponent", void 0);
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
                            { provide: Repository, useExisting: SaleOrderRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            QDP_COMMAND_SERVICE_PROVIDERS,
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                            { provide: Form, useClass: DataGridComponentViewmodelForm },
                            { provide: UIState, useClass: DataGridComponentViewmodelUIState },
                            { provide: ViewModel, useClass: DataGridComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangePage1Handler, multi: true },
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
            var ɵ0$2 = (createTranslateLoader$1), ɵ1$2 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$1 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; }, ɵ3$1 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var SaleOrderListModule = /** @class */ (function () {
                function SaleOrderListModule(trans) {
                    this.trans = trans;
                }
                SaleOrderListModule = __decorate([
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
                            QdpCommonModule.forRoot(),
                            QueryFrameworkModule,
                            SpreadModule.forRoot(),
                            EchartsModule,
                            ConditionSchemaModule,
                            SaleOrderListRoutingModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$2 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/hotwave/ordermrg/web/bo-saleorder-front/saleorderlist/' },
                            FinishLoadService,
                            { provide: Server_Host, useFactory: ɵ2$1 },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ3$1 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], SaleOrderListModule);
                return SaleOrderListModule;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/hotwave/ordermrg/web/bo-saleorder-front/saleorderlist/i18n/', '.json');
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
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // tslint:disable
            var AppModuleTreeComponent = /** @class */ (function () {
                function AppModuleTreeComponent() {
                    /**
                     * 菜单明细类
                     */
                    this.appTreeData = [];
                    this.selectKeys = [];
                    /**
                     * 功能菜单模块变化后后
                     */
                    this.appTreeChanged = new EventEmitter();
                    /**
                     * 树控件展开的节点值
                     */
                    this.expandedKeys = [];
                }
                /**
                 * 变化情况
                 * @param changes 变化
                 */
                /**
                 * 变化情况
                 * @param {?} changes 变化
                 * @return {?}
                 */
                AppModuleTreeComponent.prototype.ngOnChanges = /**
                 * 变化情况
                 * @param {?} changes 变化
                 * @return {?}
                 */
                function (changes) {
                    var _this = this;
                    // 初始化变化取消
                    // 未包含appTreeData的变化
                    if (!changes['appTreeData']) {
                        return;
                    }
                    // 无效的值不予处理
                    if (!changes['appTreeData'].currentValue ||
                        changes['appTreeData'].currentValue.length === 0) {
                        return;
                    }
                    // 获取到菜单数据
                    from(this.appTreeData).subscribe((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        if (!item.parentId || item.parentId === '0') {
                            item.parentId = undefined;
                            if (item.layer === 1) {
                                _this.expandedKeys.push(item.id);
                            }
                        }
                    }));
                    /*
                     // 默认业务对象的处理
                     if (!isNullOrUndefined(this.bizObjectId) && this.bizObjectId !== '') {
                        // 树焦点行
                        let curBizObjectId = this.bizObjectId;
                        while (!isNullOrUndefined(curBizObjectId)) {
                            this.expandedKeys.push(curBizObjectId);
                            // 找到当前节点的付家店
                            curBizObjectId = this.data.find(item => item['id'] === curBizObjectId)['parentID'];
                        }
                        // 右侧操作变化
                        this.selectKeys = [this.bizObjectId];
                        setTimeout(() => {
                            this.bizObjectChanged.emit(this.bizObjectId);
                        }, 80);
                    }
                    */
                };
                /**
                 * @return {?}
                 */
                AppModuleTreeComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () {
                };
                /**选中行改变后触发事件 */
                /**
                 * 选中行改变后触发事件
                 * @param {?} args
                 * @return {?}
                 */
                AppModuleTreeComponent.prototype.selectChange = /**
                 * 选中行改变后触发事件
                 * @param {?} args
                 * @return {?}
                 */
                function (args) {
                    /** @type {?} */
                    var curApp = args.dataItem;
                    // 首次触发
                    if (this.selectKeys == null || this.selectKeys.length === 0) {
                        this.appTreeChanged.emit(curApp);
                    }
                    else {
                        // 这个事件里还不会对selectedkeys数组赋值，是上一个状态的
                        /** @type {?} */
                        var lastAppId = this.selectKeys[0];
                        /** @type {?} */
                        var curAppId = curApp.id;
                        // 变化的情况下触发
                        if (lastAppId !== curAppId) {
                            this.appTreeChanged.emit(curApp);
                        }
                    }
                };
                AppModuleTreeComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'app-module-tree',
                                template: "<div class=\"d-flex flex-column flex-fill pt-2 pb-2\" style=\"height: 100%\">\r\n    <kendo-treeview [nodes]=\"appTreeData\" textField=\"name\" kendoTreeViewExpandable kendoTreeViewFlatDataBinding\r\n        idField=\"id\" parentIdField=\"parentId\" kendoTreeViewSelectable [selectBy]=\"'id'\"\r\n        [(selectedKeys)]=\"this.selectKeys\" [(expandedKeys)]=\"expandedKeys\" [expandBy]=\"'id'\"\r\n        (selectionChange)=\"selectChange($event)\">\r\n    </kendo-treeview>\r\n</div>",
                                styles: [""]
                            }] }
                ];
                /** @nocollapse */
                AppModuleTreeComponent.ctorParameters = function () { return []; };
                AppModuleTreeComponent.propDecorators = {
                    appTreeData: [{ type: Input }],
                    bizObjectId: [{ type: Input }],
                    appTreeChanged: [{ type: Output }]
                };
                return AppModuleTreeComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var RtfUIWebapiService = /** @class */ (function () {
                function RtfUIWebapiService() {
                }
                Object.defineProperty(RtfUIWebapiService.prototype, "functionsApi", {
                    /**
                     * 菜单api地址
                     */
                    get: /**
                     * 菜单api地址
                     * @return {?}
                     */
                    function () {
                        return '/api/runtime/sys/v1.0/gspapp/all';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RtfUIWebapiService.prototype, "appsWithBOApi", {
                    /**
                     * 带有BO数据的应用 访问地址
                     */
                    get: /**
                     * 带有BO数据的应用 访问地址
                     * @return {?}
                     */
                    function () {
                        return '/api/runtime/sys/v1.0/gspapp/allAppsBO';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RtfUIWebapiService.prototype, "bizObjectApi", {
                    /**
                     * 业务对象api地址
                     */
                    get: /**
                     * 业务对象api地址
                     * @return {?}
                     */
                    function () {
                        return '/api/dev/main/v1.0/business-objects';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RtfUIWebapiService.prototype, "httpHeader", {
                    /**
                     * Http头信息
                     */
                    get: /**
                     * Http头信息
                     * @return {?}
                     */
                    function () {
                        /** @type {?} */
                        var options = {
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                SessionId: this.sessionId
                            },
                            responseType: 'json'
                        };
                        return options;
                    },
                    enumerable: true,
                    configurable: true
                });
                RtfUIWebapiService.decorators = [
                    { type: Injectable }
                ];
                /** @nocollapse */
                RtfUIWebapiService.ctorParameters = function () { return []; };
                return RtfUIWebapiService;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var RtfAppService = /** @class */ (function () {
                function RtfAppService(rtfCommon, httpClient) {
                    this.rtfCommon = rtfCommon;
                    this.httpClient = httpClient;
                }
                /**
                 * 获取功能菜单操作
                 */
                /**
                 * 获取功能菜单操作
                 * @return {?}
                 */
                RtfAppService.prototype.getAppList = /**
                 * 获取功能菜单操作
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var url = this.rtfCommon.functionsApi;
                    /** @type {?} */
                    var header = this.rtfCommon.httpHeader;
                    return this.httpClient.get(url, header);
                };
                /**
                 * 获取包含BO数据的应用数据
                 */
                /**
                 * 获取包含BO数据的应用数据
                 * @return {?}
                 */
                RtfAppService.prototype.getAppListWithBizObjectData = /**
                 * 获取包含BO数据的应用数据
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var url = this.rtfCommon.appsWithBOApi;
                    /** @type {?} */
                    var header = this.rtfCommon.httpHeader;
                    return this.httpClient.get(url, header);
                };
                /**
                 * 获取多语资源文件
                 */
                /**
                 * 获取多语资源文件
                 * @param {?} url
                 * @return {?}
                 */
                RtfAppService.prototype.getI18nJson = /**
                 * 获取多语资源文件
                 * @param {?} url
                 * @return {?}
                 */
                function (url) {
                    /** @type {?} */
                    var header = this.rtfCommon.httpHeader;
                    return this.httpClient.get(url, header);
                };
                RtfAppService.decorators = [
                    { type: Injectable }
                ];
                /** @nocollapse */
                RtfAppService.ctorParameters = function () { return [
                    { type: RtfUIWebapiService },
                    { type: HttpClient }
                ]; };
                return RtfAppService;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // WARNING: interface has both a type and a value, skipping emit
            var I18NresourceService = /** @class */ (function () {
                function I18NresourceService(rtfAppService) {
                    this.rtfAppService = rtfAppService;
                }
                /**
                 * @return {?}
                 */
                I18NresourceService.prototype.getI18nJson = /**
                 * @return {?}
                 */
                function () {
                    if (this.i18nObj) {
                        return of(this.i18nObj);
                    }
                    /** @type {?} */
                    var url = this.getI18nJsonApi(null);
                    return this.rtfAppService.getI18nJson(url);
                };
                /**
                 * @param {?} lang
                 * @return {?}
                 */
                I18NresourceService.prototype.getI18nJsonApi = /**
                 * @param {?} lang
                 * @return {?}
                 */
                function (lang) {
                    // const curLang = lang || 'zh-CHS';
                    /** @type {?} */
                    var curLang = 'zh-CHS';
                    return "/platform/runtime/sys/web/assets/i18n/apphelp/" + curLang + ".json";
                };
                I18NresourceService.decorators = [
                    { type: Injectable, args: [{
                                providedIn: 'root'
                            },] }
                ];
                /** @nocollapse */
                I18NresourceService.ctorParameters = function () { return [
                    { type: RtfAppService }
                ]; };
                /** @nocollapse */ I18NresourceService.ngInjectableDef = defineInjectable({ factory: function I18NresourceService_Factory() { return new I18NresourceService(inject(RtfAppService)); }, token: I18NresourceService, providedIn: "root" });
                return I18NresourceService;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var i18nAppHelpInfo = {
                'zh-CHS': {
                    TitleName: '应用帮助',
                    EntranceList: '入口列表',
                    Code: '编号',
                    Name: '名称',
                    Entrance: '入口',
                    Confirm: '确认',
                    Cancel: '取消'
                },
                'zh-CHT': {
                    TitleName: '應用幫助',
                    EntranceList: '入口列表',
                    Code: '編號',
                    Name: '名稱',
                    Entrance: '入口',
                    Confirm: '確認',
                    Cancel: '取消'
                },
                en: {
                    TitleName: 'Application Help',
                    EntranceList: 'EntranceList',
                    Code: 'Code',
                    Name: 'Name',
                    Entrance: 'Entrance',
                    Confirm: 'Confirm',
                    Cancel: 'Cancel'
                }
            };

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * 系统管理：功能操作左树有、右列表展示
             */
            // tslint:disable
            var RtfAppComponent = /** @class */ (function () {
                function RtfAppComponent(rtfAppService, i18nService, farrisMsg) {
                    this.rtfAppService = rtfAppService;
                    this.i18nService = i18nService;
                    this.farrisMsg = farrisMsg;
                    /**
                     * 确认事件
                     */
                    this.afterConfirm = new EventEmitter();
                    /**
                     * 关闭事件
                     */
                    this.afterCancle = new EventEmitter();
                    this.dataarray = [];
                    /**
                     * 当前选中数据
                     */
                    this.curSelectedKeys = [];
                    this.title = '';
                    this.i18nEntity = {};
                    if (!i18nService) {
                        this.i18nService = new I18NresourceService(rtfAppService);
                    }
                    // this.i18nEntityInit();
                }
                /**
                 * @return {?}
                 */
                RtfAppComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    this.selectableSettings = {
                        checkboxOnly: true,
                        // 默认单选
                        mode: !this.gridSelectMode ? 'single' : this.gridSelectMode,
                        enabled: true
                    };
                    /*this.rtfAppService.getAppList().subscribe(
                        res => {
                            // 左侧树
                            this.treeData = res;
                            // 菜单明细数据
                            const info = res.filter(item => item.layer === '4');
                            info.forEach(element => {
                                this.dataarray = this.dataarray.concat(element.appInvoks);
                            });
                            // this.gridData = this.dataarray;
                        },
                        error => {
                            console.log('获取失败');
                        }
                    );*/
                    // 获取所有应用数据
                    this.rtfAppService.getAppListWithBizObjectData().subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        _this.treeData = res;
                        /** @type {?} */
                        var appDetails = res.filter((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) { return item.layer === '4' || (item.layer === '5'); }));
                        appDetails.forEach((/**
                         * @param {?} ele
                         * @return {?}
                         */
                        function (ele) {
                            _this.dataarray = _this.dataarray.concat(ele.appInvoks);
                        }));
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        _this.farrisMsg.error("获取应用数据失败");
                    }));
                };
                /**
                 * 搜索
                 * @param filterValue 查询条件
                 */
                /**
                 * 搜索
                 * @param {?} filterValue 查询条件
                 * @return {?}
                 */
                RtfAppComponent.prototype.searchData = /**
                 * 搜索
                 * @param {?} filterValue 查询条件
                 * @return {?}
                 */
                function (filterValue) {
                    // 空的搜索是全部数据
                    if (filterValue === null || filterValue === '') {
                        this.gridData = this.data.concat();
                        return;
                    }
                    /** @type {?} */
                    var filter = filterValue.toLowerCase();
                    // 搜索到上级时
                    this.gridData = this.data.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return item.code.toLowerCase().includes(filter) ||
                            item.name.toLowerCase().includes(filter);
                    }));
                };
                /**
                 * 左侧树切换
                 * @param arg 对象参数
                 */
                /**
                 * 左侧树切换
                 * @param {?} arg 对象参数
                 * @return {?}
                 */
                RtfAppComponent.prototype.leftAppTreeChanged = /**
                 * 左侧树切换
                 * @param {?} arg 对象参数
                 * @return {?}
                 */
                function (arg) {
                    this.selectedTreeNode = arg;
                    if (!('4' === arg.layer || '5' === arg.layer)) {
                        this.gridData = [];
                        return;
                    }
                    /** @type {?} */
                    var selectedId = arg && arg.id;
                    // 根据父子关系过滤当前界面数据，包含上下级
                    this.gridData = this.dataarray.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return selectedId && item.appId === selectedId; }));
                };
                /**
                 * 获取选中数据
                 */
                /**
                 * 获取选中数据
                 * @return {?}
                 */
                RtfAppComponent.prototype.getSelectedObject = /**
                 * 获取选中数据
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    /** @type {?} */
                    var result = this.dataarray.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return _this.curSelectedKeys && _this.curSelectedKeys.findIndex((/**
                     * @param {?} select
                     * @return {?}
                     */
                    function (select) { return select === item.id; })) >= 0; }));
                    return result;
                };
                /**
                 * 确认
                 */
                /**
                 * 确认
                 * @return {?}
                 */
                RtfAppComponent.prototype.confirm = /**
                 * 确认
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    /** @type {?} */
                    var result = this.getSelectedObject();
                    if (this.selectedTreeNode && result && result.length > 0) {
                        this.selectedTreeNode.selectedInvok = result.filter((/**
                         * @param {?} inv
                         * @return {?}
                         */
                        function (inv) { return inv && inv.appId === _this.selectedTreeNode.id; }));
                    }
                    this.afterConfirm.next(this.selectedTreeNode);
                    // 取消-目的是在这里让模态框消失
                    this.cancle();
                };
                /**
                 * 取消
                 */
                /**
                 * 取消
                 * @return {?}
                 */
                RtfAppComponent.prototype.cancle = /**
                 * 取消
                 * @return {?}
                 */
                function () {
                    this.afterCancle.next();
                };
                /**
                 * @return {?}
                 */
                RtfAppComponent.prototype.i18nEntityInitBak = /**
                 * @return {?}
                 */
                function () {
                    var _this = this;
                    this.i18nService.getI18nJson().subscribe((/**
                     * @param {?} entity
                     * @return {?}
                     */
                    function (entity) {
                        if (entity) {
                            _this.title = entity.TitleName;
                            _this.i18nEntity = entity;
                            _this.i18nService.i18nObj = entity;
                        }
                    }));
                };
                /**
                 * @param {?} langCode
                 * @return {?}
                 */
                RtfAppComponent.prototype.setCurrentLangCode = /**
                 * @param {?} langCode
                 * @return {?}
                 */
                function (langCode) {
                    this.currentLangCode = langCode;
                    this.title = this.getResOnCurrentLangeContext('TitleName');
                };
                /**
                 * @param {?} resKey
                 * @return {?}
                 */
                RtfAppComponent.prototype.getResOnCurrentLangeContext = /**
                 * @param {?} resKey
                 * @return {?}
                 */
                function (resKey) {
                    /** @type {?} */
                    var resValue = i18nAppHelpInfo[this.currentLangCode][resKey];
                    return resValue;
                };
                RtfAppComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'app-rtf-app',
                                template: "<div class=\"d-flex flex-row\" style=\"\r\nwidth: 800px; \r\nborder:2px;\r\nposition:absolute;\r\ntop:0px;\r\nbottom: 0px;\r\nright:0px;\r\nleft:0px;\r\noverflow: hidden;\r\nheight: 100%;\">\r\n    <div class=\"flex-fill\">\r\n        <kendo-splitter style=\"height:100%\" orientation=\"horizontal\">\r\n            <kendo-splitter-pane size=\"40%\" min=\"20%\" max=\"50%\">\r\n                <div class=\"d-flex flex-column flex-fill\" style=\"height:100%\">\r\n                    <div class=\"p-2\" style=\"height: 35px;\">\r\n                        <h5>{{this.getResOnCurrentLangeContext('TitleName')}}</h5>\r\n                        <hr class=\"m-0 p-0\" />\r\n                    </div>\r\n                    <div class=\"flex-fill\" style=\"overflow: auto;\">\r\n                        <app-module-tree [appTreeData]=\"this.treeData\" [bizObjectId]=\"bizObjectId\"\r\n                            (appTreeChanged)=\"leftAppTreeChanged($event)\"></app-module-tree>\r\n                    </div>\r\n                </div>\r\n            </kendo-splitter-pane>\r\n            <kendo-splitter-pane style=\"flex:1 1 0px; order: 2;\">\r\n                <div class=\"d-flex flex-column flex-fill\" style=\"height:100%\">\r\n                    <div class=\"p-2\" style=\"height: 35px;\">\r\n                        <h5>{{this.getResOnCurrentLangeContext('EntranceList')}}</h5>\r\n                        <hr class=\"m-0 p-0\" />\r\n                    </div>\r\n                    \r\n                    <!-- <div class=\"clearfix mt-1 mb-1 ml-1\">\r\n            <input #filter placeholder=\"\u8F93\u5165\u7F16\u53F7\u6216\u540D\u79F0\u67E5\u627E\" type=\"text\" />\r\n            <button class=\"btn btn-sm btn-default\" (click)=\"searchData(filter.value)\">\u67E5\u627E</button>\r\n          </div> -->\r\n                    <div class=\"d-flex flex-fill\" style=\"position:relative;\">\r\n                        <kendo-grid [class]=\"'flex-fill'\" [selectable]=\"selectableSettings\"\r\n                            [kendoGridBinding]=\"gridData\" [kendoGridSelectBy]=\"'id'\" [selectedKeys]=\"curSelectedKeys\">\r\n                            <kendo-grid-checkbox-column width=\"50px\"></kendo-grid-checkbox-column>\r\n                            <kendo-grid-column field=\"code\" title=\"{{this.getResOnCurrentLangeContext( 'Code')}}\">\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column field=\"name\" title=\"{{this.getResOnCurrentLangeContext( 'Name')}}\">\r\n                            </kendo-grid-column>\r\n                            <kendo-grid-column field=\"appEntrance\"\r\n                                title=\"{{this.getResOnCurrentLangeContext( 'Entrance')}}\"></kendo-grid-column>\r\n                        </kendo-grid>\r\n                    </div>\r\n                </div>\r\n            </kendo-splitter-pane>\r\n        </kendo-splitter>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #btnOkAndCancle>\r\n    <button class=\"btn btn-sm btn-primary\" (click)=\"confirm()\">{{this.getResOnCurrentLangeContext('Confirm')}}</button>\r\n    <button class=\"btn btn-sm btn-default\" (click)=\"cancle()\">{{this.getResOnCurrentLangeContext('Cancel')}}</button>\r\n</ng-template>",
                                styles: [""]
                            }] }
                ];
                /** @nocollapse */
                RtfAppComponent.ctorParameters = function () { return [
                    { type: RtfAppService },
                    { type: I18NresourceService, decorators: [{ type: Optional }] },
                    { type: MessagerService }
                ]; };
                RtfAppComponent.propDecorators = {
                    bizObjectId: [{ type: Input }],
                    gridSelectMode: [{ type: Input }],
                    afterConfirm: [{ type: Output }],
                    afterCancle: [{ type: Output }],
                    btnOkAndCancleRef: [{ type: ViewChild, args: ['btnOkAndCancle',] }]
                };
                return RtfAppComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // tslint:disable
            var RtfAppHelpComponent = /** @class */ (function () {
                function RtfAppHelpComponent(rtfCommon, modalService, farrisMsg, injector, cfr) {
                    this.rtfCommon = rtfCommon;
                    this.modalService = modalService;
                    this.farrisMsg = farrisMsg;
                    this.injector = injector;
                    this.cfr = cfr;
                    /**
                     * 初始选中的权限对象内码
                     */
                    this.initSelectKeys = [];
                    this.languageCode = 'zh-CHS';
                    /**
                     * 输出事件
                     */
                    this.afterHelpConfirm = new EventEmitter();
                }
                /**
                 * @return {?}
                 */
                RtfAppHelpComponent.prototype.ngOnInit = /**
                 * @return {?}
                 */
                function () {
                };
                /**
                 * 弹出Farris模态框帮助
                 */
                /**
                 * 弹出Farris模态框帮助
                 * @param {?=} sessionId
                 * @return {?}
                 */
                RtfAppHelpComponent.prototype.showHelp = /**
                 * 弹出Farris模态框帮助
                 * @param {?=} sessionId
                 * @return {?}
                 */
                function (sessionId) {
                    var _this = this;
                    this.rtfCommon.sessionId = ' ';
                    /** @type {?} */
                    var compFactory = this.cfr.resolveComponentFactory(RtfAppComponent);
                    this.funcOpComp = compFactory.create(this.injector);
                    // 向组件绑定语言代码
                    this.funcOpComp.instance.setCurrentLangCode(this.languageCode);
                    // 获取功能菜单的实例组件
                    if (this.initSelectKeys != null && this.initSelectKeys.length > 0) {
                        /*this.initSelectKeys
                            .forEach(key => this.funcOpComp.instance.curSelectedKeys.push(key));*/
                        this.funcOpComp.instance.curSelectedKeys.push(this.initSelectKeys[0]);
                    }
                    // 初始化选择的业务对象
                    if (this.bizObjectId && this.bizObjectId !== '') {
                        this.funcOpComp.instance.bizObjectId = this.bizObjectId;
                    }
                    /** @type {?} */
                    var modalConfig = {
                        title: this.funcOpComp.instance.title,
                        width: 800,
                        height: 550,
                        buttons: this.funcOpComp.instance.btnOkAndCancleRef,
                        showButtons: true,
                        showMaxButton: false,
                        resizable: false
                    };
                    // 弹出帮助框
                    this.funcOpDialog = this.modalService.show(this.funcOpComp, modalConfig);
                    // 取消后
                    this.funcOpComp.instance.afterCancle.subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        // 消失模态框
                        _this.funcOpDialog.close();
                    }));
                    // 确认后
                    this.funcOpComp.instance.afterConfirm.subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        _this.afterHelpConfirm.next(res);
                    }));
                };
                RtfAppHelpComponent.decorators = [
                    { type: Component, args: [{
                                selector: 'app-rtf-application-help',
                                template: "",
                                styles: [""]
                            }] }
                ];
                /** @nocollapse */
                RtfAppHelpComponent.ctorParameters = function () { return [
                    { type: RtfUIWebapiService },
                    { type: BsModalService },
                    { type: MessagerService },
                    { type: Injector },
                    { type: ComponentFactoryResolver }
                ]; };
                RtfAppHelpComponent.propDecorators = {
                    bizObjectId: [{ type: Input }],
                    initSelectKeys: [{ type: Input }],
                    languageCode: [{ type: Input }],
                    afterHelpConfirm: [{ type: Output }]
                };
                return RtfAppHelpComponent;
            }());

            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var RtfAppHelpModule = /** @class */ (function () {
                function RtfAppHelpModule() {
                }
                RtfAppHelpModule.decorators = [
                    { type: NgModule, args: [{
                                imports: [
                                    CommonModule,
                                    HttpClientModule,
                                    // kendo
                                    GridModule,
                                    LayoutModule,
                                    TreeViewModule,
                                    // farris
                                    ModalModule.forRoot(),
                                    MessagerModule.forRoot(),
                                ],
                                declarations: [
                                    AppModuleTreeComponent,
                                    RtfAppComponent,
                                    RtfAppHelpComponent,
                                ],
                                entryComponents: [
                                    RtfAppComponent
                                ],
                                providers: [
                                    RtfUIWebapiService,
                                    RtfAppService,
                                    I18NresourceService
                                ],
                                exports: [
                                    RtfAppComponent,
                                    RtfAppHelpComponent
                                ]
                            },] }
                ];
                return RtfAppHelpModule;
            }());

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var RtfAppHelpModuleNgFactory = ɵcmf(RtfAppHelpModule, [], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [PopupComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, RtfAppComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(6144, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(4608, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(6144, HttpBackend, null, [HttpXhrBackend]), ɵmpd(4608, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(4608, HttpClient, HttpClient, [HttpHandler]), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, OverLayHiddenService, OverLayHiddenService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, RtfUIWebapiService, RtfUIWebapiService, []), ɵmpd(4608, RtfAppService, RtfAppService, [RtfUIWebapiService, HttpClient]), ɵmpd(4608, I18NresourceService, I18NresourceService, [RtfAppService]), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, CheckBoxModule, CheckBoxModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, TreeViewModule, TreeViewModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, RtfAppHelpModule, RtfAppHelpModule, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, [])]); });
            var styles_RtfAppHelpComponent = [""];
            var RenderType_RtfAppHelpComponent = ɵcrt({ encapsulation: 0, styles: styles_RtfAppHelpComponent, data: {} });
            function View_RtfAppHelpComponent_0(_l) { return ɵvid(0, [], null, null); }
            function View_RtfAppHelpComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "app-rtf-application-help", [], null, null, null, View_RtfAppHelpComponent_0, RenderType_RtfAppHelpComponent)), ɵdid(1, 114688, null, 0, RtfAppHelpComponent, [RtfUIWebapiService, BsModalService, MessagerService, Injector, ComponentFactoryResolver], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var RtfAppHelpComponentNgFactory = ɵccf("app-rtf-application-help", RtfAppHelpComponent, View_RtfAppHelpComponent_Host_0, { bizObjectId: "bizObjectId", initSelectKeys: "initSelectKeys", languageCode: "languageCode" }, { afterHelpConfirm: "afterHelpConfirm" }, []);
            var styles_RtfAppComponent = [""];
            var RenderType_RtfAppComponent = ɵcrt({ encapsulation: 0, styles: styles_RtfAppComponent, data: {} });
            function View_RtfAppComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "button", [["class", "btn btn-sm btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.confirm() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵted(1, null, ["", ""])), (_l()(), ɵeld(2, 0, null, null, 1, "button", [["class", "btn btn-sm btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = (_co.cancle() !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), (_l()(), ɵted(3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getResOnCurrentLangeContext("Confirm"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.getResOnCurrentLangeContext("Cancel"); _ck(_v, 3, 0, currVal_1); }); }
            function View_RtfAppComponent_0(_l) { return ɵvid(0, [ɵqud(402653184, 1, { btnOkAndCancleRef: 0 }), (_l()(), ɵeld(1, 0, null, null, 110, "div", [["class", "d-flex flex-row"], ["style", "\nwidth: 800px; \nborder:2px;\nposition:absolute;\ntop:0px;\nbottom: 0px;\nright:0px;\nleft:0px;\noverflow: hidden;\nheight: 100%;"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 109, "div", [["class", "flex-fill"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 108, "kendo-splitter", [["orientation", "horizontal"], ["style", "height:100%"]], [[2, "k-widget", null], [2, "k-splitter", null], [2, "k-splitter-flex", null], [2, "k-splitter-horizontal", null], [2, "k-splitter-vertical", null], [1, "dir", 0], [1, "role", 0]], null, null, View_SplitterComponent_0, RenderType_SplitterComponent)), ɵprd(512, null, SplitterService, SplitterService, [NgZone]), ɵprd(256, null, L10N_PREFIX, "kendo.spliter", []), ɵprd(131584, null, LocalizationService$1, LocalizationService$1, [L10N_PREFIX, [2, MessageService], [2, RTL]]), ɵdid(7, 1753088, null, 1, SplitterComponent, [ElementRef, SplitterService, LocalizationService$1, [8, null]], { orientation: [0, "orientation"] }, null), ɵqud(603979776, 2, { panes: 1 }), (_l()(), ɵeld(9, 0, null, 0, 9, "kendo-splitter-pane", [["max", "50%"], ["min", "20%"], ["size", "40%"]], [[2, "k-pane-flex", null], [2, "k-pane", null], [2, "k-pane-static", null], [2, "k-scrollable", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(10, 8437760, [[2, 4]], 0, SplitterPaneComponent, [ElementRef, Renderer2, ChangeDetectorRef], { size: [0, "size"], min: [1, "min"], max: [2, "max"] }, null), (_l()(), ɵeld(11, 0, null, 0, 7, "div", [["class", "d-flex flex-column flex-fill"], ["style", "height:100%"]], null, null, null, null, null)), (_l()(), ɵeld(12, 0, null, null, 3, "div", [["class", "p-2"], ["style", "height: 35px;"]], null, null, null, null, null)), (_l()(), ɵeld(13, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), ɵted(14, null, ["", ""])), (_l()(), ɵeld(15, 0, null, null, 0, "hr", [["class", "m-0 p-0"]], null, null, null, null, null)), (_l()(), ɵeld(16, 0, null, null, 2, "div", [["class", "flex-fill"], ["style", "overflow: auto;"]], null, null, null, null, null)), (_l()(), ɵeld(17, 0, null, null, 1, "app-module-tree", [], null, [[null, "appTreeChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("appTreeChanged" === en)) {
                    var pd_0 = (_co.leftAppTreeChanged($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ɵa_0, RenderType_ɵa)), ɵdid(18, 638976, null, 0, AppModuleTreeComponent, [], { appTreeData: [0, "appTreeData"], bizObjectId: [1, "bizObjectId"] }, { appTreeChanged: "appTreeChanged" }), (_l()(), ɵeld(19, 0, null, 0, 92, "kendo-splitter-pane", [["style", "flex:1 1 0px; order: 2;"]], [[2, "k-pane-flex", null], [2, "k-pane", null], [2, "k-pane-static", null], [2, "k-scrollable", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(20, 8437760, [[2, 4]], 0, SplitterPaneComponent, [ElementRef, Renderer2, ChangeDetectorRef], null, null), (_l()(), ɵeld(21, 0, null, 0, 90, "div", [["class", "d-flex flex-column flex-fill"], ["style", "height:100%"]], null, null, null, null, null)), (_l()(), ɵeld(22, 0, null, null, 3, "div", [["class", "p-2"], ["style", "height: 35px;"]], null, null, null, null, null)), (_l()(), ɵeld(23, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), ɵted(24, null, ["", ""])), (_l()(), ɵeld(25, 0, null, null, 0, "hr", [["class", "m-0 p-0"]], null, null, null, null, null)), (_l()(), ɵeld(26, 0, null, null, 85, "div", [["class", "d-flex flex-fill"], ["style", "position:relative;"]], null, null, null, null, null)), (_l()(), ɵeld(27, 0, null, null, 84, "kendo-grid", [], [[8, "className", 0], [1, "dir", 0], [2, "k-widget", null], [2, "k-grid", null], [2, "k-grid-lockedcolumns", null], [2, "k-grid-virtual", null], [2, "k-grid-column-resizing", null], [2, "k-grid-no-scrollbar", null]], null, null, View_GridComponent_0, RenderType_GridComponent)), ɵprd(4608, null, SuspendService, SuspendService, []), ɵprd(4608, null, ResizeService, ResizeService, []), ɵprd(135680, null, SinglePopupService, SinglePopupService, [PopupService, Renderer2, NgZone, ScrollSyncService, LocalizationService$1]), ɵprd(4608, null, DragAndDropService, DragAndDropService, []), ɵprd(4608, null, DragHintService, DragHintService, [Sanitizer]), ɵprd(4608, null, DropCueService, DropCueService, []), ɵprd(4608, null, IdService$1, IdService$1, []), ɵprd(512, null, BrowserSupportService, BrowserSupportService, []), ɵprd(512, null, DomEventsService, DomEventsService, []), ɵprd(512, null, LocalDataChangesService, LocalDataChangesService, []), ɵprd(131584, null, SelectionService, SelectionService, [DomEventsService, LocalDataChangesService]), ɵprd(512, null, GroupInfoService, GroupInfoService, []), ɵprd(512, null, GroupsService, GroupsService, [[2, Skip]]), ɵprd(512, null, ChangeNotificationService, ChangeNotificationService, [NgZone]), ɵprd(512, null, DetailsService, DetailsService, []), ɵprd(512, null, EditService$1, EditService$1, [NgZone]), ɵprd(512, null, FilterService$1, FilterService$1, []), ɵprd(512, null, PDFService, PDFService, []), ɵprd(512, null, ResponsiveService, ResponsiveService, []), ɵprd(512, null, ExcelService, ExcelService, []), ɵprd(256, null, L10N_PREFIX, "kendo.grid", []), ɵprd(131584, null, LocalizationService$1, LocalizationService$1, [L10N_PREFIX, [2, MessageService], [2, RTL]]), ɵprd(512, null, ScrollSyncService, ScrollSyncService, [NgZone, LocalizationService$1]), ɵprd(512, null, ColumnResizingService, ColumnResizingService, []), ɵprd(512, null, ColumnReorderService, ColumnReorderService, []), ɵprd(512, null, ColumnInfoService, ColumnInfoService, []), ɵprd(512, null, PagerContextService, PagerContextService, []), ɵprd(512, null, ScrollRequestService, ScrollRequestService, []), ɵprd(512, null, FocusRoot, FocusRoot, []), ɵprd(131584, null, NavigationService$1, NavigationService$1, [NgZone, DomEventsService, PagerContextService, ScrollRequestService, GroupsService, DetailsService, FocusRoot, EditService$1, ChangeDetectorRef, LocalizationService$1, [2, FocusableDirective]]), ɵprd(512, null, SortService, SortService, []), ɵdid(59, 8110080, null, 6, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService$1, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService$1], { selectable: [0, "selectable"] }, null), ɵqud(603979776, 3, { columns: 1 }), ɵqud(603979776, 4, { detailTemplateChildren: 1 }), ɵqud(603979776, 5, { noRecordsTemplateChildren: 1 }), ɵqud(603979776, 6, { pagerTemplateChildren: 1 }), ɵqud(603979776, 7, { toolbarTemplateChildren: 1 }), ɵqud(603979776, 8, { columnMenuTemplates: 1 }), ɵdid(66, 737280, null, 0, DataBindingDirective, [GridComponent, ChangeDetectorRef, LocalDataChangesService], { data: [0, "data"] }, null), ɵdid(67, 212992, null, 0, SelectionDirective, [GridComponent, ChangeDetectorRef], { selectedKeys: [0, "selectedKeys"], selectionKey: [1, "selectionKey"] }, null), ɵprd(256, null, CELL_CONTEXT, EMPTY_CELL_CONTEXT, []), (_l()(), ɵeld(69, 0, null, null, 6, "kendo-grid-checkbox-column", [["width", "50px"]], null, null, null, View_CheckboxColumnComponent_0, RenderType_CheckboxColumnComponent)), ɵdid(70, 49152, null, 4, CheckboxColumnComponent, [[8, null]], { width: [0, "width"] }, null), ɵqud(603979776, 9, { headerTemplates: 1 }), ɵqud(335544320, 10, { footerTemplate: 0 }), ɵqud(603979776, 11, { columnMenuTemplates: 1 }), ɵqud(335544320, 12, { template: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [CheckboxColumnComponent]), (_l()(), ɵeld(76, 0, null, null, 11, "kendo-grid-column", [["field", "code"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(77, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 13, { headerTemplates: 1 }), ɵqud(335544320, 14, { footerTemplate: 0 }), ɵqud(603979776, 15, { columnMenuTemplates: 1 }), ɵqud(335544320, 16, { template: 0 }), ɵqud(335544320, 17, { groupHeaderTemplate: 0 }), ɵqud(335544320, 18, { groupFooterTemplate: 0 }), ɵqud(335544320, 19, { editTemplate: 0 }), ɵqud(335544320, 20, { filterCellTemplate: 0 }), ɵqud(335544320, 21, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵeld(88, 0, null, null, 11, "kendo-grid-column", [["field", "name"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(89, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 22, { headerTemplates: 1 }), ɵqud(335544320, 23, { footerTemplate: 0 }), ɵqud(603979776, 24, { columnMenuTemplates: 1 }), ɵqud(335544320, 25, { template: 0 }), ɵqud(335544320, 26, { groupHeaderTemplate: 0 }), ɵqud(335544320, 27, { groupFooterTemplate: 0 }), ɵqud(335544320, 28, { editTemplate: 0 }), ɵqud(335544320, 29, { filterCellTemplate: 0 }), ɵqud(335544320, 30, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵeld(100, 0, null, null, 11, "kendo-grid-column", [["field", "appEntrance"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(101, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 31, { headerTemplates: 1 }), ɵqud(335544320, 32, { footerTemplate: 0 }), ɵqud(603979776, 33, { columnMenuTemplates: 1 }), ɵqud(335544320, 34, { template: 0 }), ɵqud(335544320, 35, { groupHeaderTemplate: 0 }), ɵqud(335544320, 36, { groupFooterTemplate: 0 }), ɵqud(335544320, 37, { editTemplate: 0 }), ɵqud(335544320, 38, { filterCellTemplate: 0 }), ɵqud(335544320, 39, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵand(0, [[1, 2], ["btnOkAndCancle", 2]], null, 0, null, View_RtfAppComponent_1))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "horizontal"; _ck(_v, 7, 0, currVal_7); var currVal_12 = "40%"; var currVal_13 = "20%"; var currVal_14 = "50%"; _ck(_v, 10, 0, currVal_12, currVal_13, currVal_14); var currVal_16 = _co.treeData; var currVal_17 = _co.bizObjectId; _ck(_v, 18, 0, currVal_16, currVal_17); var currVal_31 = _co.selectableSettings; _ck(_v, 59, 0, currVal_31); var currVal_32 = _co.gridData; _ck(_v, 66, 0, currVal_32); var currVal_33 = _co.curSelectedKeys; var currVal_34 = "id"; _ck(_v, 67, 0, currVal_33, currVal_34); var currVal_35 = "50px"; _ck(_v, 70, 0, currVal_35); var currVal_36 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Code"), ""); var currVal_37 = "code"; _ck(_v, 77, 0, currVal_36, currVal_37); var currVal_38 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Name"), ""); var currVal_39 = "name"; _ck(_v, 89, 0, currVal_38, currVal_39); var currVal_40 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Entrance"), ""); var currVal_41 = "appEntrance"; _ck(_v, 101, 0, currVal_40, currVal_41); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵnov(_v, 7).hostClasses; var currVal_1 = ɵnov(_v, 7).hostClasses; var currVal_2 = ɵnov(_v, 7).hostClasses; var currVal_3 = ɵnov(_v, 7).horizontalHostClasses; var currVal_4 = ɵnov(_v, 7).verticalHostClasses; var currVal_5 = ɵnov(_v, 7).dir; var currVal_6 = ɵnov(_v, 7).ariaRole; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = ɵnov(_v, 10).styleDisplayFlex; var currVal_9 = ɵnov(_v, 10).hostClass; var currVal_10 = ɵnov(_v, 10).staticPaneClass; var currVal_11 = ɵnov(_v, 10).scrollablePaneClass; _ck(_v, 9, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_15 = _co.getResOnCurrentLangeContext("TitleName"); _ck(_v, 14, 0, currVal_15); var currVal_18 = ɵnov(_v, 20).styleDisplayFlex; var currVal_19 = ɵnov(_v, 20).hostClass; var currVal_20 = ɵnov(_v, 20).staticPaneClass; var currVal_21 = ɵnov(_v, 20).scrollablePaneClass; _ck(_v, 19, 0, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = _co.getResOnCurrentLangeContext("EntranceList"); _ck(_v, 24, 0, currVal_22); var currVal_23 = "flex-fill"; var currVal_24 = ɵnov(_v, 59).dir; var currVal_25 = ɵnov(_v, 59).hostClasses; var currVal_26 = ɵnov(_v, 59).hostClasses; var currVal_27 = ɵnov(_v, 59).lockedClasses; var currVal_28 = ɵnov(_v, 59).virtualClasses; var currVal_29 = ɵnov(_v, 59).columnResizing; var currVal_30 = ɵnov(_v, 59).noScrollbarClass; _ck(_v, 27, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); }); }
            function View_RtfAppComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "app-rtf-app", [], null, null, null, View_RtfAppComponent_0, RenderType_RtfAppComponent)), ɵdid(1, 114688, null, 0, RtfAppComponent, [RtfAppService, [2, I18NresourceService], MessagerService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var RtfAppComponentNgFactory = ɵccf("app-rtf-app", RtfAppComponent, View_RtfAppComponent_Host_0, { bizObjectId: "bizObjectId", gridSelectMode: "gridSelectMode" }, { afterConfirm: "afterConfirm", afterCancle: "afterCancle" }, []);
            var styles_ɵa = [""];
            var RenderType_ɵa = ɵcrt({ encapsulation: 0, styles: styles_ɵa, data: {} });
            function View_ɵa_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 16, "div", [["class", "d-flex flex-column flex-fill pt-2 pb-2"], ["style", "height: 100%"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 15, "kendo-treeview", [["idField", "id"], ["kendoTreeViewExpandable", ""], ["kendoTreeViewFlatDataBinding", ""], ["kendoTreeViewSelectable", ""], ["parentIdField", "parentId"], ["textField", "name"]], [[2, "k-widget", null], [2, "k-treeview", null], [1, "role", 0], [1, "dir", 0], [40, "@.disabled", 0], [1, "aria-multiselectable", 0]], [[null, "selectedKeysChange"], [null, "expandedKeysChange"], [null, "selectionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedKeysChange" === en)) {
                    var pd_0 = ((_co.selectKeys = $event) !== false);
                    ad = (pd_0 && ad);
                } if (("expandedKeysChange" === en)) {
                    var pd_1 = ((_co.expandedKeys = $event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectionChange" === en)) {
                    var pd_2 = (_co.selectChange($event) !== false);
                    ad = (pd_2 && ad);
                } return ad; }, View_TreeViewComponent_0, RenderType_TreeViewComponent)), ɵprd(4608, null, IndexBuilderService, IndexBuilderService, []), ɵprd(4608, null, LoadingNotificationService, LoadingNotificationService, []), ɵprd(512, null, ExpandStateService, ExpandStateService, []), ɵprd(256, null, L10N_PREFIX, "kendo.treeview", []), ɵprd(131584, null, LocalizationService$1, LocalizationService$1, [L10N_PREFIX, [2, MessageService], [2, RTL]]), ɵprd(512, null, NavigationService$2, NavigationService$2, [LocalizationService$1]), ɵprd(512, null, NodeChildrenService, NodeChildrenService, []), ɵprd(512, null, SelectionService$1, SelectionService$1, []), ɵprd(512, null, TreeViewLookupService, TreeViewLookupService, []), ɵprd(512, null, DataChangeNotificationService, DataChangeNotificationService, []), ɵdid(12, 770048, null, 1, TreeViewComponent, [ExpandStateService, NavigationService$2, NodeChildrenService, SelectionService$1, TreeViewLookupService, NgZone, Renderer2, ElementRef, DataChangeNotificationService, LocalizationService$1], { nodes: [0, "nodes"], textField: [1, "textField"] }, { selectionChange: "selectionChange" }), ɵqud(335544320, 1, { nodeTemplate: 0 }), ɵdid(14, 147456, null, 0, ExpandDirective, [TreeViewComponent], { expandKey: [0, "expandKey"], expandedKeys: [1, "expandedKeys"] }, { expandedKeysChange: "expandedKeysChange" }), ɵdid(15, 147456, null, 0, SelectDirective, [TreeViewComponent], { selectKey: [0, "selectKey"], selection: [1, "selection"], selectedKeys: [2, "selectedKeys"] }, { selectedKeysChange: "selectedKeysChange" }), ɵdid(16, 606208, null, 0, FlatDataBindingDirective, [TreeViewComponent], { nodes: [0, "nodes"], parentIdField: [1, "parentIdField"], idField: [2, "idField"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.appTreeData; var currVal_7 = "name"; _ck(_v, 12, 0, currVal_6, currVal_7); var currVal_8 = "id"; var currVal_9 = _co.expandedKeys; _ck(_v, 14, 0, currVal_8, currVal_9); var currVal_10 = "id"; var currVal_11 = ""; var currVal_12 = _co.selectKeys; _ck(_v, 15, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.appTreeData; var currVal_14 = "parentId"; var currVal_15 = "id"; _ck(_v, 16, 0, currVal_13, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 12).classNames; var currVal_1 = ɵnov(_v, 12).classNames; var currVal_2 = ɵnov(_v, 12).role; var currVal_3 = ɵnov(_v, 12).direction; var currVal_4 = ɵnov(_v, 12).animate; var currVal_5 = ɵnov(_v, 15).getAriaMultiselectable; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_ɵa_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "app-module-tree", [], null, null, null, View_ɵa_0, RenderType_ɵa)), ɵdid(1, 638976, null, 0, AppModuleTreeComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var ɵaNgFactory = ɵccf("app-module-tree", AppModuleTreeComponent, View_ɵa_Host_0, { appTreeData: "appTreeData", bizObjectId: "bizObjectId" }, { appTreeChanged: "appTreeChanged" }, []);

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
            function View_DataGridComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-datagrid", [["class", "f-component-grid"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "pageChanged"], [null, "scrollYLoad"], [null, "pageSizeChanged"], [null, "click"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
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
                } if (("scrollYLoad" === en)) {
                    var pd_9 = (_co.viewModel.ChangePage1($event) !== false);
                    ad = (pd_9 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_10 = (_co.viewModel.ChangePage1($event) !== false);
                    ad = (pd_10 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(4, 6275072, [[1, 4], ["dataGridDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], maxHeight: [2, "maxHeight"], showBorder: [3, "showBorder"], striped: [4, "striped"], headerWrap: [5, "headerWrap"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], pagination: [18, "pagination"], pageList: [19, "pageList"], pageSize: [20, "pageSize"], showPageList: [21, "showPageList"], showGotoInput: [22, "showGotoInput"], multiSelect: [23, "multiSelect"], showCheckbox: [24, "showCheckbox"], showAllCheckbox: [25, "showAllCheckbox"], checkOnSelect: [26, "checkOnSelect"], selectOnCheck: [27, "selectOnCheck"], selectionMode: [28, "selectionMode"], keepSelect: [29, "keepSelect"], useBlankWhenDataIsEmpty: [30, "useBlankWhenDataIsEmpty"], emptyDataHeight: [31, "emptyDataHeight"], fields: [32, "fields"], nowrap: [33, "nowrap"], virtualized: [34, "virtualized"], virtualizedAsyncLoad: [35, "virtualizedAsyncLoad"], editMode: [36, "editMode"], enableEditCellStyle: [37, "enableEditCellStyle"], selectOnEditing: [38, "selectOnEditing"], enableDragColumn: [39, "enableDragColumn"], expandGroupRows: [40, "expandGroupRows"], groupSummaryPosition: [41, "groupSummaryPosition"], showGroupColumn: [42, "showGroupColumn"], showRowGroupPanel: [43, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [44, "AutoColumnWidthUseDblclick"], mergeCell: [45, "mergeCell"], enableSimpleMode: [46, "enableSimpleMode"], enableScheme: [47, "enableScheme"], clearSelectionsWhenDataIsEmpty: [48, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [49, "enableContextMenu"], enableHighlightCell: [50, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 14, { dgColumns: 1 }), ɵpad(6, 5), ɵdid(7, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, null), ɵdid(8, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService$1, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ɵdid(9, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(10, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), ɵdid(11, 212992, null, 0, DatagridComponentRefDirective, [Injector, DatagridComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid"; var currVal_4 = false; var currVal_5 = 300; var currVal_6 = false; var currVal_7 = true; var currVal_8 = false; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGridlineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = true; var currVal_22 = _ck(_v, 6, 0, 10, 20, 30, 50, 100); var currVal_23 = 20; var currVal_24 = false; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; var currVal_28 = false; var currVal_29 = false; var currVal_30 = false; var currVal_31 = "default"; var currVal_32 = true; var currVal_33 = false; var currVal_34 = 36; var currVal_35 = _co.viewModel.dataGridColumns; var currVal_36 = true; var currVal_37 = false; var currVal_38 = false; var currVal_39 = "cell"; var currVal_40 = false; var currVal_41 = false; var currVal_42 = false; var currVal_43 = true; var currVal_44 = "groupFooterRow"; var currVal_45 = true; var currVal_46 = false; var currVal_47 = true; var currVal_48 = false; var currVal_49 = false; var currVal_50 = false; var currVal_51 = true; var currVal_52 = false; var currVal_53 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53]); _ck(_v, 7, 0); var currVal_54 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_55 = true; _ck(_v, 8, 0, currVal_54, currVal_55); var currVal_56 = ""; _ck(_v, 10, 0, currVal_56); _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).pos; var currVal_1 = ɵnov(_v, 4).hostCls; var currVal_2 = ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_DataGridComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "farris-section", [["class", "f-section-grid f-section-in-managelist"], ["id", "data-grid-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 7, { headerDirective: 0 }), ɵqud(335544320, 8, { headerTitleDirective: 0 }), ɵqud(335544320, 9, { headerContentDirective: 0 }), ɵqud(335544320, 10, { headerToolbarDirective: 0 }), ɵqud(335544320, 11, { extendDirective: 0 }), ɵqud(335544320, 12, { contentDirective: 0 }), ɵqud(335544320, 13, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵeld(10, 0, null, 0, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_2)), ɵdid(12, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondatagridsectionMainTitle; var currVal_7 = _co.SectiondatagridsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = true; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 12, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_DataGridComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "badge badge-round-info"], ["style", "margin-right: 5px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, [" \u73B0\u91D1 "]))], null, null); }
            function View_DataGridComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "badge badge-round-warning"], ["style", "margin-right: 5px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, [" \u5FAE\u4FE1 "]))], null, null); }
            function View_DataGridComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "badge badge-round-success"], ["style", "margin-right: 5px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, [" \u652F\u4ED8\u5B9D "]))], null, null); }
            function View_DataGridComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "badge badge-round-danger"], ["style", "margin-right: 5px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, [" \u94F6\u8054 "]))], null, null); }
            function View_DataGridComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
            function View_DataGridComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "div", [["style", "display: flex;flex-direction: row;align-items: center;"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 11, null, null, null, null, null, null, null)), ɵdid(2, 16384, null, 0, NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_4)), ɵdid(4, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_5)), ɵdid(6, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_6)), ɵdid(8, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_7)), ɵdid(10, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_8)), ɵdid(12, 16384, null, 0, NgSwitchDefault, [ViewContainerRef, TemplateRef, NgSwitch], null, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.rowData["payMethod"]; _ck(_v, 2, 0, currVal_0); var currVal_1 = "Cash"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "Wechat"; _ck(_v, 6, 0, currVal_2); var currVal_3 = "ALipay"; _ck(_v, 8, 0, currVal_3); var currVal_4 = "UPay"; _ck(_v, 10, 0, currVal_4); }, null); }
            function View_DataGridComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "badge badge-border-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u672A\u53D1\u8D27"]))], null, null); }
            function View_DataGridComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "badge badge-border-info"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u5DF2\u53D1\u8D27"]))], null, null); }
            function View_DataGridComponent_12(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "badge badge-border-success"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u5DF2\u6536\u8D27"]))], null, null); }
            function View_DataGridComponent_13(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 0, "span", [], null, null, null, null, null))], null, null); }
            function View_DataGridComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "div", [["class", "f-datagrid-cell-content"], ["style", "display: flex;flex-direction: row;align-items: center;"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 9, null, null, null, null, null, null, null)), ɵdid(2, 16384, null, 0, NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_10)), ɵdid(4, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_11)), ɵdid(6, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_12)), ɵdid(8, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_13)), ɵdid(10, 16384, null, 0, NgSwitchDefault, [ViewContainerRef, TemplateRef, NgSwitch], null, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.rowData["sendState"]; _ck(_v, 2, 0, currVal_0); var currVal_1 = "UnShipped"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "Shipped"; _ck(_v, 6, 0, currVal_2); var currVal_3 = "Done"; _ck(_v, 8, 0, currVal_3); }, null); }
            function View_DataGridComponent_0(_l) { return ɵvid(0, [ɵqud(671088640, 1, { dataGridDataGrid: 0 }), ɵqud(402653184, 2, { dataGridpayMethodTemplate: 0 }), ɵqud(402653184, 3, { dataGridsendStateTemplate: 0 }), ɵqud(402653184, 4, { conditionDialog: 0 }), ɵqud(402653184, 5, { qdpViewComponent: 0 }), ɵqud(402653184, 6, { queryFrameworkLayoutComponent: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_DataGridComponent_1)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(0, [[2, 2], ["dataGridpayMethodTemplate", 2]], null, 0, null, View_DataGridComponent_3)), (_l()(), ɵand(0, [[3, 2], ["dataGridsendStateTemplate", 2]], null, 0, null, View_DataGridComponent_9))], function (_ck, _v) { var currVal_0 = true; _ck(_v, 7, 0, currVal_0); }, null); }
            function View_DataGridComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 84, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ɵprd(4608, null, ViewModel, DataGridComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0) { return [new ChangePage1Handler(p0_0)]; }, [CommandService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, DataGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [SaleOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(81, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "data-grid-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 81, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 81).cls; _ck(_v, 0, 0, currVal_0); }); }
            var DataGridComponentNgFactory = ɵccf("app-datagridcomponent", DataGridComponent, View_DataGridComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-querysolution", [["farris-querysolution-event-bind", ""], ["id", "query-scheme-1"]], [[8, "className", 0]], [[null, "queryEmitter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("queryEmitter" === en)) {
                    var pd_0 = (ɵnov(_v, 5).onQuery() !== false);
                    ad = (pd_0 && ad);
                } if (("queryEmitter" === en)) {
                    var pd_1 = (_co.viewModel.Filter1($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_QuerySolutionComponent_0, RenderType_QuerySolutionComponent)), ɵprd(512, null, ConvertorService, ConvertorService, []), ɵprd(512, null, ɵa$1, ɵa$1, [HttpClient]), ɵprd(512, null, ɵb$2, ɵb$2, []), ɵdid(4, 770048, null, 0, QuerySolutionComponent, [NotifyService, ComponentFactoryResolver, Injector, BsModalService, ConvertorService, SolutionService, ɵa$1, ɵb$2, LocaleService], { fieldConfigs: [0, "fieldConfigs"], presetQuerySolutionName: [1, "presetQuerySolutionName"], presetFieldConfigs: [2, "presetFieldConfigs"], isDisabled: [3, "isDisabled"], formId: [4, "formId"], isFold: [5, "isFold"], isControlInline: [6, "isControlInline"], showCompleteLabel: [7, "showCompleteLabel"], enableInitQuery: [8, "enableInitQuery"], enableHistory: [9, "enableHistory"] }, { queryEmitter: "queryEmitter" }), ɵdid(5, 16384, null, 0, FarrisQuerySolutionEventBindDirective, [Injector, QuerySolutionComponent, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.fieldConfigsqueryscheme1; var currVal_2 = _co.QuerySolutionqueryscheme1; var currVal_3 = _co.presetFieldConfigsqueryscheme1; var currVal_4 = false; var currVal_5 = "SaleOrderList"; var currVal_6 = !true; var currVal_7 = true; var currVal_8 = false; var currVal_9 = false; var currVal_10 = false; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).cls; _ck(_v, 0, 0, currVal_0); }); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 11, "farris-section", [["class", "f-section-scheme f-section-in-managelist"], ["id", "query-scheme-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 4, { headerDirective: 0 }), ɵqud(335544320, 5, { headerTitleDirective: 0 }), ɵqud(335544320, 6, { headerContentDirective: 0 }), ɵqud(335544320, 7, { headerToolbarDirective: 0 }), ɵqud(335544320, 8, { extendDirective: 0 }), ɵqud(335544320, 9, { contentDirective: 0 }), ɵqud(335544320, 10, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_RootComponent_3)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectionqueryschemesectionMainTitle; var currVal_7 = _co.SectionqueryschemesectionSubTitle; var currVal_8 = false; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 11, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-manage"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-administer"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 2, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(4, null, ["", ""])), ɵppd(5, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵunv(_v, 4, 0, _ck(_v, 5, 0, ɵnov(_v.parent.parent.parent.parent, 0), "title", _co.lang, "\u9500\u552E\u8BA2\u5355\u8868\u5355")); _ck(_v, 4, 0, currVal_0); }); }
            function View_RootComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"], buttonSize: [3, "buttonSize"], popDirection: [4, "popDirection"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; var currVal_5 = "default"; var currVal_6 = "default"; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_7)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 85, "div", [["class", "f-page-main"], ["id", "page-main"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 84, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), ɵprd(4608, null, ViewModel, DataGridComponentViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0) { return [new ChangePage1Handler(p0_0)]; }, [CommandService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, DataGridComponentViewmodelForm, []), ɵprd(4608, null, UIState, DataGridComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [SaleOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(82, 4440064, null, 0, DataGridComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "data-grid-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 82, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 82).cls; _ck(_v, 1, 0, currVal_0); }); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 9, "div", [["class", "f-page f-page-is-managelist f-page-has-scheme"], ["id", "root-layout"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_8)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.viewModel.form; _ck(_v, 1, 0, currVal_7); var currVal_8 = true; _ck(_v, 5, 0, currVal_8); var currVal_9 = true; _ck(_v, 7, 0, currVal_9); var currVal_10 = true; _ck(_v, 9, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 3).ngClassUntouched; var currVal_1 = ɵnov(_v, 3).ngClassTouched; var currVal_2 = ɵnov(_v, 3).ngClassPristine; var currVal_3 = ɵnov(_v, 3).ngClassDirty; var currVal_4 = ɵnov(_v, 3).ngClassValid; var currVal_5 = ɵnov(_v, 3).ngClassInvalid; var currVal_6 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
            function View_RootComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(402653184, 1, { conditionDialog: 0 }), ɵqud(402653184, 2, { qdpViewComponent: 0 }), ɵqud(402653184, 3, { queryFrameworkLayoutComponent: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 5, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 120, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(135680, null, SaleOrderRepository, SaleOrderRepository, [Injector]), ɵprd(6144, null, Repository, null, [SaleOrderRepository]), ɵprd(135680, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(135680, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SaleOrderListFrmControllerService, SaleOrderListFrmControllerService, [FrameContext, BeActionService, FormMessageService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p2_1, p3_0, p3_1, p4_0, p4_1, p4_2, p5_0, p5_1, p5_2, p6_0, p6_1, p7_0, p7_1, p8_0, p8_1) { return [new Load1Handler(p0_0, p0_1), new Search1Handler(p1_0, p1_1), new RemoveRows1Handler(p2_0, p2_1), new Add1Handler(p3_0, p3_1), new View1Handler(p4_0, p4_1, p4_2), new Edit1Handler(p5_0, p5_1, p5_2), new Remove1Handler(p6_0, p6_1), new Filter1Handler(p7_0, p7_1), new rootviewmodelsendGoods1Handler(p8_0, p8_1)]; }, [ChangeItemService, ListDataService, ListDataService, FilterService, DataGridService, ListDataService, NavigationMiddlewareService, NavigationService, NavigationMiddlewareService, DataCheckService, NavigationService, NavigationMiddlewareService, DataCheckService, NavigationService, DataGridService, ListDataService, ChangeItemService, ListDataService, ListDataService, SaleOrderListFrmControllerService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(4608, null, FormControlService, FormControlService, []), ɵprd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, ComponentManagerService, ComponentManagerService, []), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ɵprd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ɵprd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ɵprd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, SaleOrderProxy, SaleOrderProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ɵprd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ɵprd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ɵprd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ɵprd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ɵprd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ɵprd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ɵprd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ɵprd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ɵprd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ɵprd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ɵprd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ɵprd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ɵprd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(114, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ɵprd(256, null, FORM_ID, "ce692bc1-d105-47a6-a1d0-719863e2a602", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", []), ɵprd(256, null, CHANGE_SET_POLICY_TOKEN, "valid", [])], function (_ck, _v) { _ck(_v, 114, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 114).cls; _ck(_v, 0, 0, currVal_0); }); }
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
            var SaleOrderListModuleNgFactory = exports('SaleOrderListModuleNgFactory', ɵcmf(SaleOrderListModule, [RootComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, SingleListComponentNgFactory, FilterPanelComponentNgFactory, UIFlowchartComponentNgFactory, ɵEmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$3, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$4, FeatureEditorComponentNgFactory, RtfAppComponentNgFactory$1, ColorPickerComponentNgFactory, RtfAppComponentNgFactory, ɵlNgFactory$1, ɵaNgFactory$5, ExpressioneditorComponentNgFactory, FilterConditionComponentNgFactory, FilterExpressionComponentNgFactory, RootComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, OverLayHiddenService, OverLayHiddenService, []), ɵmpd(4608, DialogService$1, DialogService$1, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService$1, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService$1, SortService, LocalizationService$1]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(4608, ɵu, ɵu, []), ɵmpd(4608, ɵv, ɵv, [ɵu]), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵz, ɵz, []), ɵmpd(4608, ɵd, ɵd, [HttpService, HttpClient, ɵz]), ɵmpd(4608, ɵa$2, ɵa$2, [HttpService, HttpClient]), ɵmpd(4608, ɵy, ɵy, []), ɵmpd(4608, ɵa, ɵa, [HttpClient]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc$1, ɵc$1, [HttpClient]), ɵmpd(4608, FrameworkVariableService, FrameworkVariableService, []), ɵmpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ɵmpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ɵmpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵmpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService$1, ResizeService$1, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService$2, FilterService$2, []), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, SolutionService$1, SolutionService$1, []), ɵmpd(4608, ErrorHandler, ɵt, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ɵmpd(4608, I18nService$2, I18nService$2, []), ɵmpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ɵmpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(135680, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService, FilterService, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService, NavigationService, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$3, NavigationService$3, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UploadService, UploadService, [HttpService]), ɵmpd(4608, DownloadService, DownloadService, []), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, SolutionService, SolutionService, [NotifyService]), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$3, I18nService$3, []), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskService$1, TaskService$1, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ConvertorService$2, ConvertorService$2, []), ɵmpd(4608, SolutionService$2, SolutionService$2, []), ɵmpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ɵmpd(135680, FarrisScrollSpyService, FarrisScrollSpyService, [NgZone]), ɵmpd(4608, DiscussionListService, DiscussionListService, []), ɵmpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ɵmpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService]), ɵmpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService]]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ɵa$2, MessagerService, CloudprintService, AppService]), ɵmpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService]]), ɵmpd(4608, EditorService, EditorService, []), ɵmpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ɵmpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ɵmpd(4608, ɵc$2, ɵc$2, []), ɵmpd(4608, ɵb$3, ɵb$3, [ɵc$2, HttpClient]), ɵmpd(4608, ColorPickerService, ColorPickerService, []), ɵmpd(4608, RtfUIWebapiService, RtfUIWebapiService, []), ɵmpd(4608, RtfAppService, RtfAppService, [RtfUIWebapiService, HttpClient]), ɵmpd(4608, I18NresourceService, I18NresourceService, [RtfAppService]), ɵmpd(4608, ɵm, ɵm, []), ɵmpd(4608, ComboService, ComboService, [HttpClient, LoadingService, Injector]), ɵmpd(4608, ExpressionEventService, ExpressionEventService, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, "serverHost", ɵ2$1, []), ɵmpd(4608, ParasMappingManagerService, ParasMappingManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, ParasMappingService, ParasMappingService, [ParasMappingManagerService]), ɵmpd(4608, JointSearchManagerService, JointSearchManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, LcpService, LcpService, [RestfulService, SessionService, [2, "serverHost"], [2, "loadDataUri"], [2, "loadDataCol"]]), ɵmpd(4608, JointSearchService, JointSearchService, [JointSearchManagerService, LcpService]), ɵmpd(4608, SchemaManagerService, SchemaManagerService, [RestfulService, SessionService, "serverHost", [2, SchemaRenderExtendService]]), ɵmpd(4608, SchemaService, SchemaService, [SchemaManagerService, LcpService]), ɵmpd(4608, PrintIntegrationManagerService, PrintIntegrationManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, PrintIntegrationService, PrintIntegrationService, [PrintIntegrationManagerService]), ɵmpd(4608, ExpressionService$1, ExpressionService$1, [Injector, ApplicationRef, ComponentFactoryResolver, HttpClient]), ɵmpd(135680, FDropdownDirective, FDropdownDirective, [ElementRef, Renderer2]), ɵmpd(4608, FilterService$3, FilterService$3, [Injector, ApplicationRef, ComponentFactoryResolver, HttpClient]), ɵmpd(4608, FilterManagerService, FilterManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, ConditionSchemaService, ConditionSchemaService, [RestfulService, SessionService, "serverHost", [2, Injector]]), ɵmpd(4608, ɵb$4, ɵb$4, []), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, WindowVariableService, WindowVariableService, []), ɵmpd(4608, TabEntityService, TabEntityService, []), ɵmpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ɵmpd(4608, RenderService, RenderService, [SchemaManagerService, LcpService, CacheService, LoadingService, MessagerService, [2, DataRenderExtendService], [2, Injector]]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService$1, RestfulService$1, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ɵa$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(4608, FinishLoadService, FinishLoadService, []), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ3$1, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, ɵf, ɵf, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵbe, ɵbe, []), ɵmpd(1073742336, ɵg, ɵg, []), ɵmpd(1073742336, ɵt$1, ɵt$1, []), ɵmpd(1073742336, ɵbg, ɵbg, []), ɵmpd(1073742336, ɵbh, ɵbh, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, CommonSharedModule, CommonSharedModule, []), ɵmpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ɵmpd(1073742336, WfSignModule, WfSignModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ɵmpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ɵmpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, ProgressModule, ProgressModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$3, SharedModule$3, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, TreeModule, TreeModule, []), ɵmpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ɵmpd(1073742336, NavModule, NavModule, []), ɵmpd(1073742336, TagsModule, TagsModule, []), ɵmpd(1073742336, FFileUploadModule, FFileUploadModule, []), ɵmpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, OrganizationSelectorModule, OrganizationSelectorModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, EditorModule, EditorModule, []), ɵmpd(1073742336, FrmCommonModule, FrmCommonModule, []), ɵmpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ɵmpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ɵmpd(1073742336, QdpCommonModule, QdpCommonModule, []), ɵmpd(1073742336, CheckBoxModule, CheckBoxModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, TreeViewModule, TreeViewModule, []), ɵmpd(1073742336, RtfAppHelpModule$1, RtfAppHelpModule$1, []), ɵmpd(1073742336, ColorPickerModule, ColorPickerModule, []), ɵmpd(1073742336, RtfAppHelpModule, RtfAppHelpModule, []), ɵmpd(1073742336, ɵj$1, ɵj$1, []), ɵmpd(1073742336, DialogsModule, DialogsModule, []), ɵmpd(1073742336, ExpressionModule, ExpressionModule, []), ɵmpd(1073742336, FarrisPanelModule, FarrisPanelModule, []), ɵmpd(1073742336, IdeCmpModule, IdeCmpModule, []), ɵmpd(1073742336, FilterConditionModule$1, FilterConditionModule$1, []), ɵmpd(1073742336, QueryFrameworkModule, QueryFrameworkModule, []), ɵmpd(1073742336, DndListModule, DndListModule, []), ɵmpd(1073742336, SpreadModule, SpreadModule, []), ɵmpd(1073742336, EchartsModule, EchartsModule, []), ɵmpd(1073742336, ConditionSchemaModule, ConditionSchemaModule, []), ɵmpd(1073742336, SaleOrderListRoutingModule, SaleOrderListRoutingModule, []), ɵmpd(512, TranslateStore, TranslateStore, []), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(1024, TranslateLoader, ɵ0$2, [HttpClient]), ɵmpd(512, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(512, TranslateParser, TranslateDefaultParser, []), ɵmpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(1073742336, SaleOrderListModule, SaleOrderListModule, [TranslateResolveService]), ɵmpd(256, LOCALE_ID, ɵ1$2, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$5 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$5 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$5 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$5 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, ɵb$6, { modules: defaultModules }, []), ɵmpd(256, FFileUploadAPIServiceToken, null, []), ɵmpd(256, ɵn$1, { baseUrl: "assets", defaultOptions: { scrollBeyondLastLine: false } }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ɵmpd(256, FORM_PATH_TOKEN, "/apps/hotwave/ordermrg/web/bo-saleorder-front/saleorderlist/", [])]); }));

        }
    };
});
