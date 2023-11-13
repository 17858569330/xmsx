/*! UPDATE TIME: 2023/7/11 09:23:16 */
System.register(['@angular/core', 'tslib', '@angular/common', '@angular/forms', '@farris/kendo-binding', '@progress/kendo-angular-layout', '@farris/ui-flex-layout', '@farris/ui-forms', '@farris/ui-forms/validation-message', '@farris/ui-loading', '@farris/ui-messager', '@farris/ui-notify', '@farris/ui-response-toolbar', '@farris/bef', '@ngx-translate/core', '@ngx-translate/http-loader', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@farris/devkit', '@farris/command-services', '@farris/ui-verify-detail', '@ecp-caf/caf-common', '@gsp-sys/rtf-common', '@farris/ui-tooltip', '@progress/kendo-angular-grid', '@progress/kendo-angular-dateinputs', '@farris/ui-common', '@farris/ui-common/date', '@progress/kendo-angular-dropdowns', '@progress/kendo-angular-buttons', '@progress/kendo-angular-inputs', '@progress/kendo-angular-intl', '@progress/kendo-angular-intl/locales/zh/all', '@farris/ui-lookup', '@farris/ui-treetable', '@farris/ui-field-group', '@farris/ui-tabs', '@farris/ui-tag', '@farris/ui-sidebar', '@gsp-svc/formdoc-upload', '@farris/ui-section', '@farris/ui-datepicker', '@farris/ui-time-spinner', '@farris/ui-datagrid', '@farris/ui-wizard', '@gsp-cmp/querysolution', '@farris/ui-button', '@farris/ui-list-view', '@farris/ui-time-picker', '@farris/ui-draggable', '@farris/ui-splitter', '@farris/ui-list-nav', '@farris/ui-text', '@gsp-wf/rtdevkit', '@farris/ui-multi-select', '@farris/ui-input-group', '@farris/ui-combo-list', '@farris/ui-html-editor', '@gsp-svc/cloudprint', '@farris/ui-datagrid-editors', '@farris/ui-view-change', '@farris/ui-switch', '@farris/ui-list-filter', '@farris/ui-filter', '@farris/ui-avatar', '@farris/ui-calendar', '@gsp-wf/ui-flowchart', '@farris/ui-number-spinner', '@farris/ui-combo-lookup', '@farris/ui-scrollspy', '@gsp-svc/file-viewer', '@farris/ui-language-textbox', '@farris/dynamic-control-group', '@farris/ui-batch-edit-dialog', '@farris/ui-datagrid-filter', '@farris/ui-datagrid-settings', '@farris/ui-footer', '@farris/discussion-group', '@farris/ui-nav', '@farris/tags', '@farris/ui-editor', '@farris/extend-fileupload-adapt-unifile', '@farris/extend-header-footer', '@farris/extend-page-modal', '@farris/ui-feature-editor', '@farris/extend-scroll-collapsible-area', '@qdp/query-framework', '@qdp/spread', '@qdp/echarts', '@qdp/common', '@qdp/condition-schema', '@angular/router', '@qdp/command-services', '@farris/ui-loading/farris-ui-loading.ngfactory', '@farris/ui-tooltip/farris-ui-tooltip.ngfactory', '@farris/ui-modal/farris-ui-modal.ngfactory', '@farris/ui-messager/farris-ui-messager.ngfactory', '@farris/ui-notify/farris-ui-notify.ngfactory', '@farris/ui-popover/farris-ui-popover.ngfactory', '@progress/kendo-angular-popup.ngfactory', '@gsp-svc/file-viewer/gsp-svc-file-viewer.ngfactory', '@gsp-wf/wf-approval-logs/gsp-wf-wf-approval-logs.ngfactory', '@farris/ui-time-picker/farris-ui-time-picker.ngfactory', '@farris/ui-datepicker/farris-ui-datepicker.ngfactory', '@farris/ui-context-menu/farris-ui-context-menu.ngfactory', '@farris/ui-datatable/farris-ui-datatable.ngfactory', '@farris/ui-treetable/farris-ui-treetable.ngfactory', '@farris/ui-lookup/farris-ui-lookup.ngfactory', '@farris/ui-forms/farris-ui-forms.ngfactory', '@farris/ui-filter-panel/farris-ui-filter-panel.ngfactory', '@gsp-wf/ui-flowchart/gsp-wf-ui-flowchart.ngfactory', '@farris/ui-language-textbox/farris-ui-language-textbox.ngfactory', '@farris/ui-enum-editor/farris-ui-enum-editor.ngfactory', '@farris/ui-filter-editor/farris-ui-filter-editor.ngfactory', '@farris/ui-sort-editor/farris-ui-sort-editor.ngfactory', '@farris/ui-datagrid-editors/farris-ui-datagrid-editors.ngfactory', '@gsp-wf/wf-task-handler/gsp-wf-wf-task-handler.ngfactory', '@farris/ui-verify-detail/farris-ui-verify-detail.ngfactory', '@progress/kendo-angular-grid.ngfactory', '@farris/ui-tabs/farris-ui-tabs.ngfactory', '@gsp-svc/formdoc-upload/gsp-svc-formdoc-upload.ngfactory', '@farris/component-querycondition/farris-component-querycondition.ngfactory', '@gsp-cmp/querysolution/gsp-cmp-querysolution.ngfactory', '@farris/ui-splitter/farris-ui-splitter.ngfactory', '@gsp-wf/rtdevkit/gsp-wf-rtdevkit.ngfactory', '@progress/kendo-angular-dialog.ngfactory', '@gsp-svc/cloudprint/gsp-svc-cloudprint.ngfactory', '@farris/dynamic-control-group/farris-dynamic-control-group.ngfactory', '@farris/ui-batch-edit-dialog/farris-ui-batch-edit-dialog.ngfactory', '@farris/discussion-group/farris-discussion-group.ngfactory', '@farris/extend-file-upload/farris-extend-file-upload.ngfactory', '@farris/ui-datagrid-filter/farris-ui-datagrid-filter.ngfactory', '@farris/ui-organization-selector/farris-ui-organization-selector.ngfactory', '@farris/ui-datagrid-settings/farris-ui-datagrid-settings.ngfactory', '@farris/extend-page-modal/farris-extend-page-modal.ngfactory', '@farris/ui-feature-editor/farris-ui-feature-editor.ngfactory', '@gsp-sys/rtf-ui/gsp-sys-rtf-ui.ngfactory', 'ngx-color-picker/dist/ngx-color-picker.ngfactory', '@progress/kendo-angular-treeview', '@farris/ui-modal', '@progress/kendo-angular-popup', '@progress/kendo-angular-resize-sensor', '@farris/ui-locale', '@farris/ui-modal/positioning', '@farris/ui-modal/component-loader', '@farris/ui-perfect-scrollbar', '@farris/ui-area-response', '@progress/kendo-angular-layout.ngfactory', '@progress/kendo-angular-l10n', '@progress/kendo-angular-treeview.ngfactory', '@gsp-svc/expression/gsp-svc-expression.ngfactory', '@gsp-svc/filtercondition/gsp-svc-filtercondition.ngfactory', '@farris/ui-response-toolbar/farris-ui-response-toolbar.ngfactory', '@farris/extend-scroll-collapsible-area/farris-extend-scroll-collapsible-area.ngfactory', '@farris/ui-section/farris-ui-section.ngfactory', '@farris/ui-datagrid/farris-ui-datagrid.ngfactory', '@farris/ui-dialog', '@gsp-wf/wf-task-handler', '@farris/ui-text/farris-ui-text.ngfactory', '@farris/ui-common/number', '@farris/ui-forms/validation-message/farris-ui-forms-validation-message.ngfactory', '@farris/ui-shortcuts', '@farris/ui-combo-list/farris-ui-combo-list.ngfactory', '@farris/ui-number-spinner/farris-ui-number-spinner.ngfactory', '@farris/ui-scrollspy/farris-ui-scrollspy.ngfactory', '@progress/kendo-angular-dialog', '@farris/ui-pagination', '@farris/ui-popover', '@farris/ui-common/column', '@gsp-wf/wf-approval-logs', '@farris/ui-context-menu', '@farris/ui-common/events', '@farris/ui-filter-condition', '@farris/component-querycondition', '@gsp-wf/ui-comment', '@farris/extend-file-upload', '@gsp-sys/rtf-ui', 'ngx-color-picker', '@gsp-svc/expression', '@qdp/ide-cmp', '@farris/ui-dropdown', '@gsp-svc/filtercondition', '@farris/ui-datatable', '@farris/ui-datalist', '@farris/ui-layout', '@farris/ui-filter-panel', '@gsp-wf/task-impl-api', '@gsp-wf/wf-sign', '@farris/ui-enum-editor', '@farris/ui-filter-editor', '@farris/ui-sort-editor', '@farris/ui-progress', '@farris/ui-progress-step', '@farris/ui-tree', '@farris/ui-organization-selector', '@farris/ui-panel'], function (exports, module) {
    'use strict';
    var Pipe, Injectable, Injector, HostBinding, ViewChild, Component, ElementRef, NgModule, LOCALE_ID, ɵcmf, ɵmod, ɵmpd, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, NgModuleRef, ɵcrt, ɵccf, ɵvid, ɵeld, ɵdid, ViewContainerRef, ChangeDetectorRef, Input, Output, defineInjectable, inject, Optional, EventEmitter, PLATFORM_ID, ApplicationRef, NgZone, RendererFactory2, ɵqud, ɵprd, Renderer2, ɵted, Sanitizer, ɵand, ɵinlineInterpolate, ɵnov, TemplateRef, ɵpid, IterableDiffers, KeyValueDiffers, ɵpod, ɵppd, ɵunv, ɵpad, Inject, InjectionToken, ErrorHandler, __decorate, __metadata, __extends, CommonModule, NgLocalization, NgLocaleLocalization, ɵangular_packages_common_common_a, DOCUMENT, NgIf, NgClass, NgSwitch, NgSwitchDefault, NgSwitchCase, isPlatformBrowser, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_bc, FormGroupDirective, ControlContainer, NgControlStatusGroup, DefaultValueAccessor, COMPOSITION_BUFFER_MODE, MaxLengthValidator, NG_VALIDATORS, NG_VALUE_ACCESSOR, FormControlName, ɵangular_packages_forms_forms_k, NgControl, NgControlStatus, KendoBindingModule, FarrisDatagridUseBindingDataDirective, EditableDirective, FarrisDataGridEndEditDirective, FarrisDataGridRemoteSummaryDirective, DatagridComponentRefDirective, SectionComponentRefDirective, InputEndEditDirective, LookupDataMappingDirective, LookupGridComponentRefDirective, ComboListComponentRefDirective, NumberSpinnerComponentRefDirective, ScrollspyComponentRefDirective, FarrisKendoGridFormatService, FarrisTreetableFormatService, LayoutModule, PanelBarModule, SplitterModule$1, TabStripModule, SplitterService, SplitterComponent, SplitterPaneComponent, FlexLayoutModule, FarrisFormsModule, FormMessageModule, ValidationMessageComponent, LoadingModule, LoadingService, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, MessagerModule, MessagerService, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, NotifyModule, NotifyService, FResponseToolbarModule, ResponseToolbarComponent, UriService, BefProxy, BefRepository, BefLookupRestService, DefaultComboHttpService, FrameworkSessionService, BE_SESSION_HANDLING_STRATEGY_TOKEN, BE_SERVER_URI_TOKEN, TranslateService, TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateStore, TranslateCompiler, TranslateFakeCompiler, TranslateParser, TranslateDefaultParser, USE_DEFAULT_LANG, USE_STORE, TranslateHttpLoader, of, Observable, BehaviorSubject, from, switchMap, catchError, HttpClient, HttpClientModule, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_f, HTTP_INTERCEPTORS, ɵangular_packages_common_http_http_d, XhrFactory, HttpXhrBackend, HttpBackend, HttpHandler, ɵHttpInterceptingHandler, HttpClientXsrfModule, DomSanitizer, EventManager, Declaration, NgCommand, ViewModel, NgField, NgEntity, Entity, NgObject, NgList, EntityList, NgRepository, NgValidateForm, Form, NgState, State, NgRenderState, NgAction, StateMachine, NgParam, UIState, NgCommandHandler, CommandHandler, FARRIS_DEVKIT_FRAME_PROVIDERS, FRAME_ID, BindingData, Repository, NAMESPACE, TranslateToken, FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, AppContext, PARAM_TYPE_TRANSFORM_TOKEN, FORM_ID, EXCEPTION_HANDLER, CHANGE_SET_POLICY_TOKEN, BACK_END_MESSAGE_HANDLER_TOKEN, COMMAND_HANDLERS_TOKEN, FrameComponent, NgFormControl, FARRIS_DEVKIT_APP_PROVIDERS, FORM_PATH_TOKEN, CommandHandlerRegistry, CommandHandlerExtenderRegistry, COMMAND_HANDLER_EXTENDERS_TOKEN, CommandHandlerFactory, FrameContext, VariableParseService, CommandBus, RouterParamService, ResolveService, ExpressionExecutor, FORM_MANIFEST_SERVICE_TOKEN, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, FRAME_COMPONENT_INIT_HANDLER_TOKEN, UserSettingsToken, AppContextManager, RESOLVER_TOKEN, EntityDependencyResolver, StateDependencyResolver, CommentDependencyResolver, ResolverRegistry, LISTENER_TOKEN, UIStateChangeListener, RepositoryChangeListener, BindingDataChangeListener, EFFECTOR_TOKEN, RepositoryEffector, UIStateEffector, ReadonlyEffector, DependencyEffector, RelativeEffector, ValidateEffector, RequiredEffector, VisibleEffector, ListenerRegistry, Listeners, EffectorRegistry, EffectorFactory, ExpressionRegistry, ExpressionEventEmitter, ExpressionResult, ExpressionManager, ExpressionResultFactory, EVENT_HANDLER_TOKEN, RepositoryAddEntityEventHandler, RepositoryRemoveEntityEventHandler, EntityValueChangedEventHandler, StateValueChangedEventHandler, RepositoryLoadEventHandler, EntityUpdateEventHandler, BindingDataAppendObjectEventHandler, BindingDataValueChangeEventHandler, BindingDataRemoveObjectEventHandler, BindingDataLoadEventHandler, BindingDataSelectionChangedEventHandler, EventHandlerRegistry, ExpressionEngineImpl, FrameEventBus, EventBus, Subscription, RestfulService$1, VARIABLE_PARSERS, FrameIdVariableParser, ɵa$3, EventParamVariableParser, DataVariableParser, UIStateVariableParser, StateMachineVariableParser, CommandVariableParser, NavigationMiddlewareService, CommandService, CardDataService, StateMachineService, ValidationService, EndEditService, PaginationService, ChangeItemService, FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService, ExceptionHandler, BackEndMessageHandler, KeybindingService, LocalizationService, ApplicationParamService, FocusInvalidService, SubListDataService, DataGridService, ListDataService, CommandServicesModule, FormMessageService, FormLoadingService, LanguageService, FormNotifyService, FormErrorService, FilterConditionService, UIStateService, BindingDataService, EntityTraversingService, EntityManipulationService, EntityAggregationService, EntityListService, EntityService, TreeDataService, SubTreeDataService, RuntimeFrameworkService, RemoveDataService, SaveDataService, EditDataService, FilterConditionDataService, RemoteSummaryService, BeActionService, ApproveService, PrintService, AttachmentDataService, AttachmentService, FileService, NavigationEventService, MenuStateService, QuerystringService, NavigationService$2, GridMiddlewareService, SidebarService, FarrisFormService, FARRIS_FORM_COMPONENTS, DialogService, RouterService, AuthorityService, ɵb, ɵc, BatchEditService, DiscussionGroupService, FormAttentionService, FeatureDataService, FeatureRepository, FeatureEditService, ExpressionService, PopUpService, DirtyCheckingService, FormService, ViewModelService, FormManifestService, FormExpressionManifestService, WorkFlowMessageHandler, WorkFlowMessageService, WorkFlowMessage, BindingPathService, FormControlService, FrameContextService, HideEventService, FormWizardService, CheckService, DataCheckService, EventService, FilterService$2, ParamService, UserSettingsService, VerifyDetailService, VerifyDetailModule, FrmCommonModule, CacheService, SessionService, HttpService, LanguageService$1, CacheStorageAbstract, CacheMemoryStorage, WindowVariableService, TabEntityService, FrmI18nSettingService, FrameworkService, FrameworkVariableService, AppService, FrmEventBus, FuncsService, LoadingService$1, CommonSharedModule, FarrisTooltipModule, AttentionService, FInputTipsDirective, GridModule, SharedModule, DragAndDropModule, GroupModule, BodyModule, SharedFilterModule, RowFilterModule, FilterMenuModule, ColumnMenuModule, HeaderModule, FooterModule, PagerModule, SuspendService, ResizeService, SinglePopupService, ScrollSyncService, DragAndDropService, DragHintService, DropCueService, IdService$1, BrowserSupportService, DomEventsService, LocalDataChangesService, SelectionService, GroupInfoService, GroupsService, Skip, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, ExcelService, ColumnResizingService, ColumnReorderService, ColumnInfoService, PagerContextService, ScrollRequestService, FocusRoot, NavigationService, FocusableDirective, SortService, GridComponent, DataBindingDirective, SelectionDirective, CELL_CONTEXT, EMPTY_CELL_CONTEXT, CheckboxColumnComponent, ColumnBase, ColumnComponent, DateInputsModule, DOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, WeekNamesService, EventsModule$1, DateInputModule, CalendarCommonModule, TemplatesModule, VirtualizationModule, CalendarModule$1, DatePickerModule, TOUCH_ENABLED, touchEnabled, NavigationService$3, BusViewService, DOMService$1, HoursService, MinutesService, SecondsService, DayPeriodService, MultiViewCalendarModule, CalendarsModule, TimePickerModule$1, DateRangeModule, CommonUtils, FarrisCommonModule, RuntimeStateService, IdService, OverLayHiddenService, DateHelperModule, DateTimeHelperService, DropDownsModule, SharedDirectivesModule, SharedModule$1, DropDownListModule, AutoCompleteModule, ComboBoxModule, MultiSelectModule$1, TOUCH_ENABLED$1, touchEnabled$1, ButtonsModule, ButtonModule, ButtonGroupModule, ListModule, SplitButtonModule, DropDownButtonModule, InputsModule, EventsModule, NumericTextBoxModule, TextBoxModule, DraggableModule, SliderModule, SwitchModule$1, MaskedTextBoxModule, IntlModule, IntlService, CldrIntlService, ServerSideToken, LookupGridComponent, LookupModule, PersonalConfigService, LookupDefaultMapping, LookupUtils, TreeTableModule, TreetableService, TTHotkeys, FieldGroupModule, CollapseDirective, ɵa, FarrisTabsModule, NgbDropdownConfig, NgbTooltipConfig, TabService, TabConfig, NgbDropdownModule, NgbTooltipModule, FarrisTagModule, FarrisSidebarModule, FarrisSidebarService, UploadDialogMoudle, UploadDialogService, DownloadService, UploadService, UploadModule, FarrisSectionModule, FarrisSectionComponent, FarrisDatePickerModule, FarrisTimeSpinnerModule, DatagridComponent, GRID_SETTINGS_HTTP, DatagridModule, DatagridSmartFilterService, DatagridFacadeService, DatagridService, ɵt, ValidatorMessagerService, GRID_SETTINGS_SERVICE, NgxPaginationModule, ScrollbarModule, DatagridSmartFilterModule, SCROLLBAR_CONFIG, GRID_EDITORS, GRID_FILTER_ROW, WizardService, WizardModule, QuerySolutionModule, QUERYSOLUTION_HANDLER_TOKEN, FarrisButtonModule, ListViewModule, TimePickerModule, AngularDraggableModule, SplitterModule, ListNavModule, TextModule, TextComponent, WFSubmiteService, WFRuntimeModule, I18nService$1, TaskService$1, UserService, MultiSelectModule, InputGroupModule, ComboServerSideToken, ComboListModule, ComboService, ComboListComponent, ComboLocaleService, FarrisHtmlEditorModule, ɵb$5, defaultModules, CloudprintService, CloudPrintModule, ɵa$1, ɵb$1, ɵc$1, ɵe, EditorTypes, DatagridEditorsModule, EditorProviders, DatagridTextareaComponent, DatagridTextboxComponent, ɵa$4, ɵb$4, ɵc$3, ɵd$1, ɵe$1, ɵf$1, ɵg$1, ɵh$1, ɵi, ɵj$2, ɵk, DatagridEnumEditorComponent, DatagridFilterEditorComponent, DatagridSortEditorComponent, ViewChangeModule, SwitchModule, SWITCH_OPTIONS, ListFilterModule, LISTFILTER_HANDLER_TOKEN, ConvertorService$2, SolutionService$2, QuerySolutionService$1, SimpleFilterModule, FilterService$1, ConvertorService, SolutionService, AvatarModule, CalendarModule, WFFlowchartService, UiFlowchartModule, UiFlowchartService, NumberSpinnerModule, NumberSpinnerComponent, ComboLookupModule, ScrollspyModule, FarrisScrollSpyDirective, FarrisScrollSpyService, ScrollspyComponent, FscrollSpyContainerDirective, FileListModule, FileViewerService, ɵj, ɵs, ɵn, ɵu, ɵv, ɵo, ɵz, ɵd, ɵa$2, ɵy, ɵf, ɵh, ɵbe, ɵg, ɵt$1, ɵbg, ɵbh, LanguageTextboxModule, DynamicControlGroupModule, BatchEditDialogModule, BatchEditDialogService, DatagridFilterRowModule, FilterRowComponent, DatagridSettingsModule, DatagridSettingsService, FarrisFooterModule, DiscussionGroupModule, DiscussionListService, NavModule, TagsModule, EditorModule, EditorService, TINYMCE_SCRIPT_SRC, FfileuploadAdaptUnifileModule, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigToken, FfileuploadAdaptUnifileService, FfilepreviewAdaptUnifileService, FEHeaderFooterModule, FEPageModalModule, FEPageModalService, FeatureEditorModule, FeatureEditorService, I18nService, FEScrollCollapsibleAreaModule, FECollapsibleAreaComponent, FEScrollAreaDirective, FEScrollCollapsibleAreaService, ConditionDialogComponent, QueryFrameworkLayoutComponent, QueryFrameworkModule, QdpViewComponent, SpreadModule, RenderService, EchartsModule, QdpCommonModule, Server_Host, FilterManagerService, RestfulService, ParasMappingManagerService, JointSearchManagerService, LcpService, SchemaManagerService, SchemaRenderExtendService, PrintIntegrationManagerService, ɵb$3, DataRenderExtendService, DndListModule, ConditionSchemaModule, FinishLoadService, ConditionSchemaService, ActivatedRoute, Router, RouterModule, ɵangular_packages_router_router_a, ɵEmptyOutletComponent, RouterOutlet, ChildrenOutletContexts, ROUTES, QDP_COMMAND_SERVICE_PROVIDERS, QueryIndexService, FinishEventService, LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, View_LookupGridComponent_0, RenderType_LookupGridComponent, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, SingleListComponentNgFactory, FilterPanelComponentNgFactory, UIFlowchartComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, View_GridComponent_0, RenderType_GridComponent, View_CheckboxColumnComponent_0, RenderType_CheckboxColumnComponent, View_ColumnComponent_0, RenderType_ColumnComponent, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$3, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$4, FeatureEditorComponentNgFactory, RtfAppComponentNgFactory$1, ColorPickerComponentNgFactory, TreeViewModule, CheckBoxModule, SharedModule$2, IndexBuilderService, LoadingNotificationService, ExpandStateService, NavigationService$1, NodeChildrenService, SelectionService$1, TreeViewLookupService, DataChangeNotificationService, TreeViewComponent, ExpandDirective, SelectDirective, FlatDataBindingDirective, BsModalService, ModalModule, PopupService, POPUP_CONTAINER, PopupModule, ResizeBatchService, ResizeSensorModule, LocaleService, FARRIS_LOCAL_CUSTOM_DATA, LocaleModule, PositioningService, ComponentLoaderFactory, PerfectScrollbarModule, FAreaResponseModule, View_SplitterComponent_0, RenderType_SplitterComponent, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent, L10N_PREFIX, LocalizationService$1, MessageService, RTL, View_TreeViewComponent_0, RenderType_TreeViewComponent, ɵlNgFactory$1, ɵaNgFactory$5, ExpressioneditorComponentNgFactory, FilterConditionComponentNgFactory, FilterExpressionComponentNgFactory, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent, View_FECollapsibleAreaComponent_0, RenderType_FECollapsibleAreaComponent, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent, View_DatagridComponent_0, RenderType_DatagridComponent, DialogService$1, FarrisDialogModule, WfTaskHandlerService, TaskService, I18nService$2, WfTaskHandlerModule, View_TextComponent_0, RenderType_TextComponent, NumberHelperService, NumberHelperModule, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent, ShortcutsService, View_ComboListComponent_0, RenderType_ComboListComponent, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent, View_ScrollspyComponent_0, RenderType_ScrollspyComponent, WindowService, WindowContainerService, DialogContainerService, DialogService$2, SharedModule$3, WindowModule, DialogModule, DialogsModule, PaginationService$1, PaginationModule, PopoverConfig, PopoverModule, ColumnFormatService, DataColumnModule, WfApprovalLogsService, WfApprovalLogsModule, FarrisContextMenuService, FarrisContextMenuModule, ResizeService$1, QuerySolutionService, FilterConditionModule, SolutionService$1, ConvertorService$1, QueryConditionModule, TaskCommentService, TaskCommentUIState, TaskCommentViewModel, I18nService$3, TaskCommentRepository, WFCommentModule, UploadServerService, FFileUploaderService, FFileUploadModule, FFileUploadAPIServiceToken, ɵc$2, ɵb$2, RtfAppHelpModule$1, ColorPickerService, ColorPickerModule, ɵm, ExpressionEventService, ExpressionService$1, ɵj$1, ExpressionModule, ɵn$1, ParasMappingService, JointSearchService, SchemaService, PrintIntegrationService, IdeCmpModule, FDropdownDirective, FDropdownDirectiveTypeModule, FilterService$3, FilterConditionModule$1, DataTableModule, DatalistModule, LayoutModule$1, FilterPanelModule, TaskImplApiModule, WfSignModule, EnumEditorModule, FilterModule, SorterModule, ProgressModule, ProgressStepModule, TreeModule, OrganizationSelectorModule, FarrisPanelModule;
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
            TemplateRef = module.TemplateRef;
            ɵpid = module.ɵpid;
            IterableDiffers = module.IterableDiffers;
            KeyValueDiffers = module.KeyValueDiffers;
            ɵpod = module.ɵpod;
            ɵppd = module.ɵppd;
            ɵunv = module.ɵunv;
            ɵpad = module.ɵpad;
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
            NgClass = module.NgClass;
            NgSwitch = module.NgSwitch;
            NgSwitchDefault = module.NgSwitchDefault;
            NgSwitchCase = module.NgSwitchCase;
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
            DefaultValueAccessor = module.DefaultValueAccessor;
            COMPOSITION_BUFFER_MODE = module.COMPOSITION_BUFFER_MODE;
            MaxLengthValidator = module.MaxLengthValidator;
            NG_VALIDATORS = module.NG_VALIDATORS;
            NG_VALUE_ACCESSOR = module.NG_VALUE_ACCESSOR;
            FormControlName = module.FormControlName;
            ɵangular_packages_forms_forms_k = module.ɵangular_packages_forms_forms_k;
            NgControl = module.NgControl;
            NgControlStatus = module.NgControlStatus;
        }, function (module) {
            KendoBindingModule = module.KendoBindingModule;
            FarrisDatagridUseBindingDataDirective = module.FarrisDatagridUseBindingDataDirective;
            EditableDirective = module.EditableDirective;
            FarrisDataGridEndEditDirective = module.FarrisDataGridEndEditDirective;
            FarrisDataGridRemoteSummaryDirective = module.FarrisDataGridRemoteSummaryDirective;
            DatagridComponentRefDirective = module.DatagridComponentRefDirective;
            SectionComponentRefDirective = module.SectionComponentRefDirective;
            InputEndEditDirective = module.InputEndEditDirective;
            LookupDataMappingDirective = module.LookupDataMappingDirective;
            LookupGridComponentRefDirective = module.LookupGridComponentRefDirective;
            ComboListComponentRefDirective = module.ComboListComponentRefDirective;
            NumberSpinnerComponentRefDirective = module.NumberSpinnerComponentRefDirective;
            ScrollspyComponentRefDirective = module.ScrollspyComponentRefDirective;
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
            ValidationMessageComponent = module.ValidationMessageComponent;
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
            from = module.from;
        }, function (module) {
            switchMap = module.switchMap;
            catchError = module.catchError;
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
            CommandHandlerRegistry = module.CommandHandlerRegistry;
            CommandHandlerExtenderRegistry = module.CommandHandlerExtenderRegistry;
            COMMAND_HANDLER_EXTENDERS_TOKEN = module.COMMAND_HANDLER_EXTENDERS_TOKEN;
            CommandHandlerFactory = module.CommandHandlerFactory;
            FrameContext = module.FrameContext;
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
            NavigationMiddlewareService = module.NavigationMiddlewareService;
            CommandService = module.CommandService;
            CardDataService = module.CardDataService;
            StateMachineService = module.StateMachineService;
            ValidationService = module.ValidationService;
            EndEditService = module.EndEditService;
            PaginationService = module.PaginationService;
            ChangeItemService = module.ChangeItemService;
            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS = module.FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS;
            ComponentManagerService = module.ComponentManagerService;
            ExceptionHandler = module.ExceptionHandler;
            BackEndMessageHandler = module.BackEndMessageHandler;
            KeybindingService = module.KeybindingService;
            LocalizationService = module.LocalizationService;
            ApplicationParamService = module.ApplicationParamService;
            FocusInvalidService = module.FocusInvalidService;
            SubListDataService = module.SubListDataService;
            DataGridService = module.DataGridService;
            ListDataService = module.ListDataService;
            CommandServicesModule = module.CommandServicesModule;
            FormMessageService = module.FormMessageService;
            FormLoadingService = module.FormLoadingService;
            LanguageService = module.LanguageService;
            FormNotifyService = module.FormNotifyService;
            FormErrorService = module.FormErrorService;
            FilterConditionService = module.FilterConditionService;
            UIStateService = module.UIStateService;
            BindingDataService = module.BindingDataService;
            EntityTraversingService = module.EntityTraversingService;
            EntityManipulationService = module.EntityManipulationService;
            EntityAggregationService = module.EntityAggregationService;
            EntityListService = module.EntityListService;
            EntityService = module.EntityService;
            TreeDataService = module.TreeDataService;
            SubTreeDataService = module.SubTreeDataService;
            RuntimeFrameworkService = module.RuntimeFrameworkService;
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
            NavigationService$2 = module.NavigationService;
            GridMiddlewareService = module.GridMiddlewareService;
            SidebarService = module.SidebarService;
            FarrisFormService = module.FarrisFormService;
            FARRIS_FORM_COMPONENTS = module.FARRIS_FORM_COMPONENTS;
            DialogService = module.DialogService;
            RouterService = module.RouterService;
            AuthorityService = module.AuthorityService;
            ɵb = module.ɵb;
            ɵc = module.ɵc;
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
            FInputTipsDirective = module.FInputTipsDirective;
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
            FilterService = module.FilterService;
            PDFService = module.PDFService;
            ResponsiveService = module.ResponsiveService;
            ExcelService = module.ExcelService;
            ColumnResizingService = module.ColumnResizingService;
            ColumnReorderService = module.ColumnReorderService;
            ColumnInfoService = module.ColumnInfoService;
            PagerContextService = module.PagerContextService;
            ScrollRequestService = module.ScrollRequestService;
            FocusRoot = module.FocusRoot;
            NavigationService = module.NavigationService;
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
            LookupGridComponent = module.LookupGridComponent;
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
            CollapseDirective = module.CollapseDirective;
            ɵa = module.ɵa;
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
            TextComponent = module.TextComponent;
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
            ComboService = module.ComboService;
            ComboListComponent = module.ComboListComponent;
            ComboLocaleService = module.ComboLocaleService;
        }, function (module) {
            FarrisHtmlEditorModule = module.FarrisHtmlEditorModule;
            ɵb$5 = module.ɵb;
            defaultModules = module.defaultModules;
        }, function (module) {
            CloudprintService = module.CloudprintService;
            CloudPrintModule = module.CloudPrintModule;
            ɵa$1 = module.ɵa;
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
            ɵb$4 = module.ɵb;
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
            NumberSpinnerComponent = module.NumberSpinnerComponent;
        }, function (module) {
            ComboLookupModule = module.ComboLookupModule;
        }, function (module) {
            ScrollspyModule = module.ScrollspyModule;
            FarrisScrollSpyDirective = module.FarrisScrollSpyDirective;
            FarrisScrollSpyService = module.FarrisScrollSpyService;
            ScrollspyComponent = module.ScrollspyComponent;
            FscrollSpyContainerDirective = module.FscrollSpyContainerDirective;
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
            FECollapsibleAreaComponent = module.FECollapsibleAreaComponent;
            FEScrollAreaDirective = module.FEScrollAreaDirective;
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
            ɵb$3 = module.ɵb;
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
            NavigationService$1 = module.NavigationService;
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
            View_ResponseToolbarComponent_0 = module.View_ResponseToolbarComponent_0;
            RenderType_ResponseToolbarComponent = module.RenderType_ResponseToolbarComponent;
        }, function (module) {
            View_FECollapsibleAreaComponent_0 = module.View_FECollapsibleAreaComponent_0;
            RenderType_FECollapsibleAreaComponent = module.RenderType_FECollapsibleAreaComponent;
        }, function (module) {
            View_FarrisSectionComponent_0 = module.View_FarrisSectionComponent_0;
            RenderType_FarrisSectionComponent = module.RenderType_FarrisSectionComponent;
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
            View_TextComponent_0 = module.View_TextComponent_0;
            RenderType_TextComponent = module.RenderType_TextComponent;
        }, function (module) {
            NumberHelperService = module.NumberHelperService;
            NumberHelperModule = module.NumberHelperModule;
        }, function (module) {
            View_ValidationMessageComponent_0 = module.View_ValidationMessageComponent_0;
            RenderType_ValidationMessageComponent = module.RenderType_ValidationMessageComponent;
        }, function (module) {
            ShortcutsService = module.ShortcutsService;
        }, function (module) {
            View_ComboListComponent_0 = module.View_ComboListComponent_0;
            RenderType_ComboListComponent = module.RenderType_ComboListComponent;
        }, function (module) {
            View_NumberSpinnerComponent_0 = module.View_NumberSpinnerComponent_0;
            RenderType_NumberSpinnerComponent = module.RenderType_NumberSpinnerComponent;
        }, function (module) {
            View_ScrollspyComponent_0 = module.View_ScrollspyComponent_0;
            RenderType_ScrollspyComponent = module.RenderType_ScrollspyComponent;
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
            ɵc$2 = module.ɵc;
            ɵb$2 = module.ɵb;
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
                return new TranslateHttpLoader(http, '/apps/hotwave/ordermrg/web/bo-saleorder-front/saleordercarddemo1/i18n/', '.json' + versionSuffix);
            }
            var lang = { "zh-CHS": { "orderPerson_OrderPerson_name_676aa1fa_zt2k": "名称", "TextBox/orderPerson_OrderPerson_name_676aa1fa_zt2k/placeHolder": "", "TextBox/merchant_Merchant_MerchantName_147deab4_1zy9/placeHolder": "", "TextBox/orderPerson_771cf8b5_32o4/placeHolder": "", "GridField/goods_d3829541_0hbn/editor/TextBox/goods_d3829541_zhpt/placeHolder": "", "title": "销售订单表单", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "page-header-state": "", "page-header-nav": "", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "scrollCollapsibleArea": "导航", "main-container": "", "scrollspy": "", "Scrollspy/scrollspy/items/basic-form-section": "基本信息", "Scrollspy/scrollspy/items/section-orderdetail": "订单明细", "scrollspy-container": "", "like-card-container": "", "basic-form-component-ref": "", "detail-container-orderdetail": "", "section-orderdetail": "", "Section/section-orderdetail/mainTitle": "订单明细", "Section/section-orderdetail/subTitle": "", "orderdetail-component-ref": "", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "3f39ffed-72a3-4484-a679-4c6ddb9f3913": "基本信息", "FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/collapseText": "", "FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/expandText": "", "orderCode_1d7fb675_wqcn": "订单编号", "TextBox/orderCode_1d7fb675_wqcn/placeHolder": "", "merchant_Merchant_MerchantName_147deab4_1zy9": "商户名称", "LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/placeHolder": "", "LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/dialogTitle": "", "orderPerson_771cf8b5_32o4": "下单人", "LookupEdit/orderPerson_771cf8b5_32o4/placeHolder": "", "LookupEdit/orderPerson_771cf8b5_32o4/dialogTitle": "", "orderPerson_OrderPerson_name_676aa1fa_yg9q": "下单人名称", "TextBox/orderPerson_OrderPerson_name_676aa1fa_yg9q/placeHolder": "", "orderTime_e0e86794_fc6z": "下单时间", "TextBox/orderTime_e0e86794_fc6z/placeHolder": "", "telephone_a8621f05_4hyo": "联系电话", "TextBox/telephone_a8621f05_4hyo/placeHolder": "", "59cd9ebd-1817-49ec-b9c4-cc38d330585c": "支付信息", "FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/collapseText": "", "FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/expandText": "", "payMethod_ba5f52c1_xz4x": "支付方式", "EnumField/payMethod_ba5f52c1_xz4x/placeHolder": "", "EnumField/payMethod_ba5f52c1_xz4x/enumData/Cash": "现金", "EnumField/payMethod_ba5f52c1_xz4x/enumData/AliPay": "支付宝", "EnumField/payMethod_ba5f52c1_xz4x/enumData/WeChat": "微信支付", "EnumField/payMethod_ba5f52c1_xz4x/enumData/UPay": "银联", "sendState_3584b1dc_xv9j": "发货状态", "EnumField/sendState_3584b1dc_xv9j/placeHolder": "", "EnumField/sendState_3584b1dc_xv9j/enumData/UnShipped": "未发货", "EnumField/sendState_3584b1dc_xv9j/enumData/Shipped": "已发货", "EnumField/sendState_3584b1dc_xv9j/enumData/Done": "已收货", "totalPrice_559ae1d0_tdrx": "订单金额", "NumberSpinner/totalPrice_559ae1d0_tdrx/placeHolder": "", "totalDiscounts_878ff42f_djm9": "折扣优惠", "NumberSpinner/totalDiscounts_878ff42f_djm9/placeHolder": "", "actualPay_090e17ef_mvgt": "合计实付", "NumberSpinner/actualPay_090e17ef_mvgt/placeHolder": "", "remark_71281e54_dqeo": "备注", "TextBox/remark_71281e54_dqeo/placeHolder": "", "orderdetail-component": "", "orderdetail-component-layout": "", "dataGrid_orderdetail": "", "DataGrid/dataGrid_orderdetail/lineNumberTitle": "", "DataGrid/dataGrid_orderdetail/OperateEditButton": "编辑", "DataGrid/dataGrid_orderdetail/OperateDeleteButton": "删除", "DataGrid/dataGrid_orderdetail/OperateColumn": "操作", "goods_d3829541_0hbn": "商品", "GridField/goods_d3829541_0hbn/editor/goods_d3829541_zhpt": "文本", "GridField/goods_d3829541_0hbn/editor/LookupEdit/goods_d3829541_zhpt/placeHolder": "", "GridField/goods_d3829541_0hbn/editor/LookupEdit/goods_d3829541_zhpt/dialogTitle": "", "goods_Goods_GoodsName_b110ddde_h94h": "商品名称", "GridField/goods_Goods_GoodsName_b110ddde_h94h/editor/goods_Goods_GoodsName_b110ddde_9lx1": "商品名称", "GridField/goods_Goods_GoodsName_b110ddde_h94h/editor/TextBox/goods_Goods_GoodsName_b110ddde_9lx1/placeHolder": "", "specification_63d2f314_8ks8": "规格型号", "GridField/specification_63d2f314_8ks8/editor/specification_63d2f314_or74": "文本", "GridField/specification_63d2f314_8ks8/editor/TextBox/specification_63d2f314_or74/placeHolder": "", "quality_381e93a8_lzmz": "数量", "GridField/quality_381e93a8_lzmz/editor/quality_381e93a8_f1hx": "数值框", "GridField/quality_381e93a8_lzmz/editor/NumberSpinner/quality_381e93a8_f1hx/placeHolder": "", "price_12e9f1a9_0oqq": "标准单价", "GridField/price_12e9f1a9_0oqq/editor/price_12e9f1a9_5v46": "数值框", "GridField/price_12e9f1a9_0oqq/editor/NumberSpinner/price_12e9f1a9_5v46/placeHolder": "", "amount_62e1cb4c_sk4g": "金额", "GridField/amount_62e1cb4c_sk4g/editor/amount_62e1cb4c_wdwb": "数值框", "GridField/amount_62e1cb4c_sk4g/editor/NumberSpinner/amount_62e1cb4c_wdwb/placeHolder": "", "discountType_8004a7da_qc99": "折扣类型", "GridField/discountType_8004a7da_qc99/enumData/none": "无折扣", "GridField/discountType_8004a7da_qc99/enumData/dis": "有折扣", "discount_0658848e_zq1k": "折扣金额", "GridField/discount_0658848e_zq1k/editor/discount_0658848e_3sjx": "数值框", "GridField/discount_0658848e_zq1k/editor/NumberSpinner/discount_0658848e_3sjx/placeHolder": "", "actualAmount_7136b6c1_m0aj": "实际结算金额", "GridField/actualAmount_7136b6c1_m0aj/editor/actualAmount_7136b6c1_0q3z": "数值框", "GridField/actualAmount_7136b6c1_m0aj/editor/NumberSpinner/actualAmount_7136b6c1_0q3z/placeHolder": "", "remark_f9d55622_0rpu": "备注", "GridField/remark_f9d55622_0rpu/editor/remark_f9d55622_tpbx": "文本", "GridField/remark_f9d55622_0rpu/editor/TextBox/remark_f9d55622_tpbx/placeHolder": "" } };
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
                                var versionKey_1 = "saleordercarddemo1/" + langCode + ".json";
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

            var ɵ0 = { type: 'string' }, ɵ1 = { type: 'string' }, ɵ2 = { type: 'string' }, ɵ3 = { type: 'string' };
            var RootViewmodel = /** @class */ (function (_super) {
                __extends(RootViewmodel, _super);
                function RootViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    _this.childViewModels = {
                        'BasicFormViewmodel': 'basicFormViewmodel',
                        'OrderdetailComponentViewmodel': 'orderdetailComponentViewmodel'
                    };
                    return _this;
                }
                RootViewmodel.prototype.Load1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndAdd1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndView1 = function (commandParam) { return; };
                RootViewmodel.prototype.LoadAndEdit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Add1 = function (commandParam) { return; };
                RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
                RootViewmodel.prototype.Save1 = function (commandParam) { return; };
                RootViewmodel.prototype.Cancel1 = function (commandParam) { return; };
                RootViewmodel.prototype.ChangeItem1 = function (commandParam) { return; };
                RootViewmodel.prototype.ChangeItem2 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'Load1',
                        params: {
                            action: '{UISTATE~/root-component/action}'
                        },
                        paramDescriptions: {
                            action: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Load1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndAdd1',
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
                ], RootViewmodel.prototype, "LoadAndAdd1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndView1',
                        params: {
                            id: '{UISTATE~/root-component/id}',
                            transitionAction: 'Cancel',
                            transitionActionParamName: ''
                        },
                        paramDescriptions: {
                            id: ɵ0,
                            transitionAction: { type: 'string' },
                            transitionActionParamName: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "LoadAndView1", null);
                __decorate([
                    NgCommand({
                        name: 'LoadAndEdit1',
                        params: {
                            id: '{UISTATE~/root-component/id}',
                            transitionAction: 'Edit',
                            transitionActionParamName: ''
                        },
                        paramDescriptions: {
                            id: ɵ1,
                            transitionAction: { type: 'string' },
                            transitionActionParamName: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "LoadAndEdit1", null);
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
                            transitionAction: { type: '' }
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
                            transitionAction: 'Cancel',
                            successMsg: ''
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' },
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
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "Cancel1", null);
                __decorate([
                    NgCommand({
                        name: 'ChangeItem1',
                        params: {
                            id: '{DATA~/root-component/id}',
                            type: 'prev',
                            parentId: '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}',
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            id: ɵ2,
                            type: { type: 'string' },
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "ChangeItem1", null);
                __decorate([
                    NgCommand({
                        name: 'ChangeItem2',
                        params: {
                            id: '{DATA~/root-component/id}',
                            type: 'next',
                            parentId: '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}',
                            transitionAction: 'Cancel'
                        },
                        paramDescriptions: {
                            id: ɵ3,
                            type: { type: 'string' },
                            transitionAction: { type: 'string' }
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], RootViewmodel.prototype, "ChangeItem2", null);
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
                    _this.apiUrl = 'api/hotwave/ordermrg/v1.0/saleordercarddemo1_frm';
                    _this.baseUri = uriService.extendUri(_this.apiUrl);
                    return _this;
                }
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
                    _this.paginationInfo = {};
                    _this.proxy = injector.get(SaleOrderProxy, null);
                    return _this;
                }
                SaleOrderRepository = __decorate([
                    Injectable(),
                    NgRepository({
                        apiUrl: 'api/hotwave/ordermrg/v1.0/saleordercarddemo1_frm',
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

            var ɵ0$1 = function (context) { return context.state === 'init'; }, ɵ1$1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ2$1 = function (context) { return context.state === 'init'; }, ɵ3$1 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ4 = function (context) { return context.state === 'init'; }, ɵ5 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ6 = function (context) { return context.getUIState('{UISTATE~/root-component/action}') === 'LoadAndAdd1' || context.getUIState('{UISTATE~/root-component/action}') === 'LoadAndEdit1'; }, ɵ7 = function (context) { return context.state === 'add' || context.state === 'edit'; }, ɵ8 = function (context) { return context.state === 'add' || context.state === 'edit'; };
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
                        render: ɵ1$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "editable", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ2$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canEdit", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ3$1
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canRemoveDetail", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ4
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAdd", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ5
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canSave", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ6
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "collapseForTop", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ7
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canCancel", void 0);
                __decorate([
                    NgRenderState({
                        render: ɵ8
                    }),
                    __metadata("design:type", Boolean)
                ], RootViewmodelStateMachine.prototype, "canAddDetail", void 0);
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
                    _this.action = '';
                    return _this;
                }
                __decorate([
                    NgParam({ originalDataType: "String", category: "locale" }),
                    __metadata("design:type", String)
                ], RootViewmodelUIState.prototype, "action", void 0);
                RootViewmodelUIState = __decorate([
                    Injectable()
                ], RootViewmodelUIState);
                return RootViewmodelUIState;
            }(UIState));

            var Load1Handler = /** @class */ (function (_super) {
                __extends(Load1Handler, _super);
                function Load1Handler(_NavigationMiddlewareService1, _CommandService1) {
                    var _this = _super.call(this) || this;
                    _this._NavigationMiddlewareService1 = _NavigationMiddlewareService1;
                    _this._CommandService1 = _CommandService1;
                    return _this;
                }
                Load1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onClosing', function (context) {
                        var args = [];
                        return _this.invoke(_this._NavigationMiddlewareService1, 'onClosing', args, context);
                    });
                    this.addTask('execute', function (context) {
                        var args = [
                            '{COMMAND~/params/action}'
                        ];
                        return _this.invoke(_this._CommandService1, 'execute', args, context);
                    });
                    this.addLink('onClosing', 'execute', "1==1");
                };
                Load1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Load1'
                    }),
                    __metadata("design:paramtypes", [NavigationMiddlewareService,
                        CommandService])
                ], Load1Handler);
                return Load1Handler;
            }(CommandHandler));

            var LoadAndAdd1Handler = /** @class */ (function (_super) {
                __extends(LoadAndAdd1Handler, _super);
                function LoadAndAdd1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndAdd1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'add', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('add', 'transit', "1==1");
                };
                LoadAndAdd1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndAdd1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndAdd1Handler);
                return LoadAndAdd1Handler;
            }(CommandHandler));

            var LoadAndView1Handler = /** @class */ (function (_super) {
                __extends(LoadAndView1Handler, _super);
                function LoadAndView1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndView1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onLoading', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionActionParamName}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'onLoading', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('onLoading', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                LoadAndView1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndView1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndView1Handler);
                return LoadAndView1Handler;
            }(CommandHandler));

            var LoadAndEdit1Handler = /** @class */ (function (_super) {
                __extends(LoadAndEdit1Handler, _super);
                function LoadAndEdit1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                LoadAndEdit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('onLoading', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionActionParamName}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'onLoading', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('onLoading', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                LoadAndEdit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'LoadAndEdit1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], LoadAndEdit1Handler);
                return LoadAndEdit1Handler;
            }(CommandHandler));

            var Add1Handler = /** @class */ (function (_super) {
                __extends(Add1Handler, _super);
                function Add1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Add1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'add', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('add', 'transit', "1==1");
                };
                Add1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Add1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], Add1Handler);
                return Add1Handler;
            }(CommandHandler));

            var Edit1Handler = /** @class */ (function (_super) {
                __extends(Edit1Handler, _super);
                function Edit1Handler(_CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Edit1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('checkBeforeUpdate', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'checkBeforeUpdate', args, context);
                    });
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('checkBeforeUpdate', 'update', "1==1");
                    this.addLink('update', 'transit', "1==1");
                };
                Edit1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Edit1'
                    }),
                    __metadata("design:paramtypes", [CardDataService,
                        StateMachineService])
                ], Edit1Handler);
                return Edit1Handler;
            }(CommandHandler));

            var Save1Handler = /** @class */ (function (_super) {
                __extends(Save1Handler, _super);
                function Save1Handler(_ValidationService1, _EndEditService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ValidationService1 = _ValidationService1;
                    _this._EndEditService1 = _EndEditService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Save1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('validateCurrentRow', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'validateCurrentRow', args, context);
                    });
                    this.addTask('save', function (context) {
                        var args = [
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'save', args, context);
                    });
                    this.addTask('update', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'update', args, context);
                    });
                    this.addTask('resetValidation', function (context) {
                        var args = [];
                        return _this.invoke(_this._ValidationService1, 'resetValidation', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('endEdit', 'validateCurrentRow', "1==1");
                    this.addLink('validateCurrentRow', 'save', "1==1");
                    this.addLink('save', 'update', "1==1");
                    this.addLink('update', 'resetValidation', "1==1");
                    this.addLink('resetValidation', 'transit', "1==1");
                };
                Save1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Save1'
                    }),
                    __metadata("design:paramtypes", [ValidationService,
                        EndEditService,
                        CardDataService,
                        StateMachineService])
                ], Save1Handler);
                return Save1Handler;
            }(CommandHandler));

            var Cancel1Handler = /** @class */ (function (_super) {
                __extends(Cancel1Handler, _super);
                function Cancel1Handler(_ValidationService1, _EndEditService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ValidationService1 = _ValidationService1;
                    _this._EndEditService1 = _EndEditService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                Cancel1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('endEdit', function (context) {
                        var args = [];
                        return _this.invoke(_this._EndEditService1, 'endEdit', args, context);
                    });
                    this.addTask('cancel', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'cancel', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('reload', function (context) {
                        var args = [];
                        return _this.invoke(_this._CardDataService1, 'reload', args, context);
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
                    this.addLink('endEdit', 'cancel', "1==1");
                    this.addLink('cancel', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'reload', "1==1");
                    this.addLink('reload', 'transit', "1==1");
                    this.addLink('transit', 'resetValidation', "1==1");
                };
                Cancel1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'Cancel1'
                    }),
                    __metadata("design:paramtypes", [ValidationService,
                        EndEditService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], Cancel1Handler);
                return Cancel1Handler;
            }(CommandHandler));

            var ChangeItem1Handler = /** @class */ (function (_super) {
                __extends(ChangeItem1Handler, _super);
                function ChangeItem1Handler(_ChangeItemService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                ChangeItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('changeItem', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/id}',
                            '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}'
                        ];
                        return _this.invoke(_this._ChangeItemService1, 'changeItem', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/results/changeItem}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('changeItem', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                ChangeItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangeItem1'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], ChangeItem1Handler);
                return ChangeItem1Handler;
            }(CommandHandler));

            var ChangeItem2Handler = /** @class */ (function (_super) {
                __extends(ChangeItem2Handler, _super);
                function ChangeItem2Handler(_ChangeItemService1, _PaginationService1, _CardDataService1, _StateMachineService1) {
                    var _this = _super.call(this) || this;
                    _this._ChangeItemService1 = _ChangeItemService1;
                    _this._PaginationService1 = _PaginationService1;
                    _this._CardDataService1 = _CardDataService1;
                    _this._StateMachineService1 = _StateMachineService1;
                    return _this;
                }
                ChangeItem2Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('changeItem', function (context) {
                        var args = [
                            '{COMMAND~/params/type}',
                            '{COMMAND~/params/id}',
                            '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}'
                        ];
                        return _this.invoke(_this._ChangeItemService1, 'changeItem', args, context);
                    });
                    this.addTask('resetChildrenPagination', function (context) {
                        var args = [];
                        return _this.invoke(_this._PaginationService1, 'resetChildrenPagination', args, context);
                    });
                    this.addTask('load', function (context) {
                        var args = [
                            '{COMMAND~/results/changeItem}'
                        ];
                        return _this.invoke(_this._CardDataService1, 'load', args, context);
                    });
                    this.addTask('transit', function (context) {
                        var args = [
                            '{COMMAND~/params/transitionAction}'
                        ];
                        return _this.invoke(_this._StateMachineService1, 'transit', args, context);
                    });
                    this.addLink('changeItem', 'resetChildrenPagination', "1==1");
                    this.addLink('resetChildrenPagination', 'load', "1==1");
                    this.addLink('load', 'transit', "1==1");
                };
                ChangeItem2Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'ChangeItem2'
                    }),
                    __metadata("design:paramtypes", [ChangeItemService,
                        PaginationService,
                        CardDataService,
                        StateMachineService])
                ], ChangeItem2Handler);
                return ChangeItem2Handler;
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
                        }
                    ];
                    _this.pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
                    _this.pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.sectionsToolbarStates = new BehaviorSubject({});
                    _this.sectionsToolbarVisibleStates = new BehaviorSubject({});
                    _this.toolbarOrderdetail = {
                        position: 'inHead',
                        contents: [
                            {
                                id: 'button-add-orderdetail',
                                disable: !_this.viewModel.stateMachine['canAddDetail'],
                                visible: true,
                                title: _this.langService.transform("button-add-orderdetail", _this.lang, "新增"),
                                click: function ($event) { _this.viewModel.orderdetailComponentViewmodel.orderdetailAddItem1($event); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            },
                            {
                                id: 'button-remove-orderdetail',
                                disable: !_this.viewModel.stateMachine['canRemoveDetail'],
                                visible: true,
                                title: _this.langService.transform("button-remove-orderdetail", _this.lang, "删除"),
                                click: function ($event) { _this.viewModel.orderdetailComponentViewmodel.orderdetailRemoveItem1($event); },
                                appearance: {
                                    "class": "btn btn-secondary f-btn-ml"
                                }
                            }
                        ]
                    };
                    _this.SectionsectionorderdetailMainTitle = _this.langService.transform("Section/section-orderdetail/mainTitle", _this.lang, "订单明细");
                    _this.SectionsectionorderdetailSubTitle = _this.langService.transform("Section/section-orderdetail/subTitle", _this.lang, "");
                    _this.ScrollspyItemsscrollspy = [
                        {
                            "id": "basic-form-section",
                            "visible": true,
                            "title": _this.langService.transform("Scrollspy/scrollspy/items/basic-form-section", _this.lang, "基本信息")
                        },
                        {
                            "id": "section-orderdetail",
                            "visible": true,
                            "title": _this.langService.transform("Scrollspy/scrollspy/items/section-orderdetail", _this.lang, "订单明细")
                        }
                    ];
                    _this.ScrollspyCurrentSectionscrollspy = "basic-form-section";
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
                            'button-save': !_this.viewModel.stateMachine['canSave'],
                            'button-cancel': !_this.viewModel.stateMachine['canCancel'],
                        };
                        _this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var pageHeaderToolbarToolbarItemsvisibleStates = {
                            'button-add': true,
                            'button-edit': true,
                            'button-save': true,
                            'button-cancel': true,
                        };
                        _this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
                    });
                    this.pageHeaderToolbarToolbarItems.forEach(function (toolbarItem) {
                        var transformText = _this.langService.transform(toolbarItem.resourceId, _this.lang, toolbarItem.text);
                        if (transformText) {
                            toolbarItem.text = transformText;
                        }
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var states = {
                            'button-add-orderdetail': !_this.viewModel.stateMachine['canAddDetail'],
                            'button-remove-orderdetail': !_this.viewModel.stateMachine['canRemoveDetail'],
                        };
                        _this.sectionsToolbarStates.next(states);
                    });
                    this.stateMachine.stateChange.subscribe(function () {
                        var visibleStates = {
                            'button-add-orderdetail': true,
                            'button-remove-orderdetail': true,
                        };
                        _this.sectionsToolbarVisibleStates.next(visibleStates);
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
                    this.viewModel.Load1();
                };
                RootComponent.prototype.pageHeaderToolbarClickHandler = function (args) {
                    switch (args.id) {
                        case 'button-add':
                            this.viewModel.Add1(args);
                            break;
                        case 'button-edit':
                            this.viewModel.Edit1(args);
                            break;
                        case 'button-save':
                            this.viewModel.Save1(args);
                            break;
                        case 'button-cancel':
                            this.viewModel.Cancel1(args);
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
                            { provide: FORM_ID, useValue: "71b7c83c-da25-4dcd-a5d3-27bab284178b" },
                            { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
                            { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
                            { provide: CHANGE_SET_POLICY_TOKEN, useValue: 'valid' },
                            { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndAdd1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndView1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndEdit1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Save1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: Cancel1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem2Handler, multi: true },
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
            var SaleOrderCardDemo1RoutingModule = /** @class */ (function () {
                function SaleOrderCardDemo1RoutingModule() {
                }
                SaleOrderCardDemo1RoutingModule = __decorate([
                    NgModule({
                        imports: [
                            RouterModule.forChild(routes)
                        ],
                        exports: [
                            RouterModule
                        ]
                    })
                ], SaleOrderCardDemo1RoutingModule);
                return SaleOrderCardDemo1RoutingModule;
            }());

            var BasicFormViewmodel = /** @class */ (function (_super) {
                __extends(BasicFormViewmodel, _super);
                function BasicFormViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/';
                    _this.dom = {};
                    return _this;
                }
                BasicFormViewmodel = __decorate([
                    Injectable()
                ], BasicFormViewmodel);
                return BasicFormViewmodel;
            }(ViewModel));

            var BasicFormViewmodelForm = /** @class */ (function (_super) {
                __extends(BasicFormViewmodelForm, _super);
                function BasicFormViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'orderCode_1d7fb675_wqcn',
                        name: "{{orderCode_1d7fb675_wqcn}}",
                        binding: 'orderCode',
                        updateOn: 'blur',
                        defaultI18nValue: '订单编号',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "orderCode", void 0);
                __decorate([
                    NgFormControl({
                        id: 'merchant_Merchant_MerchantName_147deab4_1zy9',
                        name: "{{merchant_Merchant_MerchantName_147deab4_1zy9}}",
                        binding: 'merchant.merchant_MerchantName',
                        updateOn: 'blur',
                        defaultI18nValue: '商户名称',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "merchant_Merchant_MerchantName", void 0);
                __decorate([
                    NgFormControl({
                        id: 'orderTime_e0e86794_fc6z',
                        name: "{{orderTime_e0e86794_fc6z}}",
                        binding: 'orderTime',
                        updateOn: 'blur',
                        defaultI18nValue: '下单时间',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "orderTime", void 0);
                __decorate([
                    NgFormControl({
                        id: 'payMethod_ba5f52c1_xz4x',
                        name: "{{payMethod_ba5f52c1_xz4x}}",
                        binding: 'payMethod',
                        updateOn: 'change',
                        defaultI18nValue: '支付方式',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "payMethod", void 0);
                __decorate([
                    NgFormControl({
                        id: 'telephone_a8621f05_4hyo',
                        name: "{{telephone_a8621f05_4hyo}}",
                        binding: 'telephone',
                        updateOn: 'blur',
                        defaultI18nValue: '联系电话',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "telephone", void 0);
                __decorate([
                    NgFormControl({
                        id: 'sendState_3584b1dc_xv9j',
                        name: "{{sendState_3584b1dc_xv9j}}",
                        binding: 'sendState',
                        updateOn: 'change',
                        defaultI18nValue: '发货状态',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "sendState", void 0);
                __decorate([
                    NgFormControl({
                        id: 'remark_71281e54_dqeo',
                        name: "{{remark_71281e54_dqeo}}",
                        binding: 'remark',
                        updateOn: 'blur',
                        defaultI18nValue: '备注',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "remark", void 0);
                __decorate([
                    NgFormControl({
                        id: 'totalPrice_559ae1d0_tdrx',
                        name: "{{totalPrice_559ae1d0_tdrx}}",
                        binding: 'totalPrice',
                        updateOn: 'blur',
                        defaultI18nValue: '订单金额',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "totalPrice", void 0);
                __decorate([
                    NgFormControl({
                        id: 'totalDiscounts_878ff42f_djm9',
                        name: "{{totalDiscounts_878ff42f_djm9}}",
                        binding: 'totalDiscounts',
                        updateOn: 'blur',
                        defaultI18nValue: '折扣优惠',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "totalDiscounts", void 0);
                __decorate([
                    NgFormControl({
                        id: 'actualPay_090e17ef_mvgt',
                        name: "{{actualPay_090e17ef_mvgt}}",
                        binding: 'actualPay',
                        updateOn: 'blur',
                        defaultI18nValue: '合计实付',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "actualPay", void 0);
                __decorate([
                    NgFormControl({
                        id: 'orderPerson_771cf8b5_32o4',
                        name: "{{orderPerson_771cf8b5_32o4}}",
                        binding: 'orderPerson.orderPerson',
                        updateOn: 'blur',
                        defaultI18nValue: '下单人',
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "orderPerson", void 0);
                __decorate([
                    NgFormControl({
                        id: 'orderPerson_OrderPerson_name_676aa1fa_yg9q',
                        name: "{{orderPerson_OrderPerson_name_676aa1fa_yg9q}}",
                        binding: 'orderPerson.orderPerson_name',
                        updateOn: 'blur',
                        defaultI18nValue: '下单人名称',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], BasicFormViewmodelForm.prototype, "orderPerson_OrderPerson_name", void 0);
                BasicFormViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '业务订单',
                        enableValidate: true
                    }),
                    Injectable()
                ], BasicFormViewmodelForm);
                return BasicFormViewmodelForm;
            }(Form));

            var BasicFormViewmodelUIState = /** @class */ (function (_super) {
                __extends(BasicFormViewmodelUIState, _super);
                function BasicFormViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                BasicFormViewmodelUIState = __decorate([
                    Injectable()
                ], BasicFormViewmodelUIState);
                return BasicFormViewmodelUIState;
            }(UIState));

            var BasicFormComponent = /** @class */ (function (_super) {
                __extends(BasicFormComponent, _super);
                function BasicFormComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, componentManagerService, sanitizer, injector) {
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
                    _this.componentManagerService = componentManagerService;
                    _this.sanitizer = sanitizer;
                    _this.injector = injector;
                    _this.cls = 'f-struct-wrapper ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.FieldSetTitle3f39ffed72a34484a6794c6ddb9f3913 = _this.langService.transform("3f39ffed-72a3-4484-a679-4c6ddb9f3913", _this.lang, "基本信息");
                    _this.FieldSetCollapseText3f39ffed72a34484a6794c6ddb9f3913 = _this.langService.transform("FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/collapseText", _this.lang, "");
                    _this.FieldSetExpandText3f39ffed72a34484a6794c6ddb9f3913 = _this.langService.transform("FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/expandText", _this.lang, "");
                    _this.FieldSetTitle59cd9ebd181749ecb9c4cc38d330585c = _this.langService.transform("59cd9ebd-1817-49ec-b9c4-cc38d330585c", _this.lang, "支付信息");
                    _this.FieldSetCollapseText59cd9ebd181749ecb9c4cc38d330585c = _this.langService.transform("FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/collapseText", _this.lang, "");
                    _this.FieldSetExpandText59cd9ebd181749ecb9c4cc38d330585c = _this.langService.transform("FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/expandText", _this.lang, "");
                    _this.SectionbasicformsectionMainTitle = _this.langService.transform("Section/basic-form-section/mainTitle", _this.lang, "基本信息");
                    _this.SectionbasicformsectionSubTitle = _this.langService.transform("Section/basic-form-section/subTitle", _this.lang, "");
                    _this.LookupEditmerchantMerchantMerchantName147deab41zy9DialogTitle = _this.langService.transform("LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/dialogTitle", _this.lang, "");
                    _this.merchant_Merchant_MerchantName_147deab4_1zy9_PlaceHolder = _this.langService.transform("LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/placeHolder", _this.lang, "");
                    _this.merchant_Merchant_MerchantName_147deab4_1zy9QuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.LookupEditorderPerson771cf8b532o4DialogTitle = _this.langService.transform("LookupEdit/orderPerson_771cf8b5_32o4/dialogTitle", _this.lang, "");
                    _this.orderPerson_771cf8b5_32o4_PlaceHolder = _this.langService.transform("LookupEdit/orderPerson_771cf8b5_32o4/placeHolder", _this.lang, "");
                    _this.orderPerson_771cf8b5_32o4QuickSelect = {
                        "enable": false,
                        "showItemsCount": 10,
                        "showMore": true
                    };
                    _this.totalPrice_559ae1d0_tdrx_PlaceHolder = _this.langService.transform("NumericBox/totalPrice_559ae1d0_tdrx/placeHolder", _this.lang, "");
                    _this.totalPrice559ae1d0TdrxTextOptions = {
                        "type": "number",
                        "useThousands": true,
                        "precision": 2,
                    };
                    _this.totalDiscounts_878ff42f_djm9_PlaceHolder = _this.langService.transform("NumericBox/totalDiscounts_878ff42f_djm9/placeHolder", _this.lang, "");
                    _this.totalDiscounts878ff42fDjm9TextOptions = {
                        "type": "number",
                        "useThousands": true,
                        "precision": 2,
                    };
                    _this.actualPay_090e17ef_mvgt_PlaceHolder = _this.langService.transform("NumericBox/actualPay_090e17ef_mvgt/placeHolder", _this.lang, "");
                    _this.actualPay090e17efMvgtTextOptions = {
                        "type": "number",
                        "useThousands": true,
                        "precision": 2,
                    };
                    _this.payMethod_ba5f52c1_xz4xEnumData = [
                        {
                            "name": _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/Cash", _this.lang, "现金"),
                            "value": "Cash"
                        },
                        {
                            "name": _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/AliPay", _this.lang, "支付宝"),
                            "value": "AliPay"
                        },
                        {
                            "name": _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/WeChat", _this.lang, "微信支付"),
                            "value": "WeChat"
                        },
                        {
                            "name": _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/enumData/UPay", _this.lang, "银联"),
                            "value": "UPay"
                        }
                    ];
                    _this.payMethod_ba5f52c1_xz4x_PlaceHolder = _this.langService.transform("EnumField/payMethod_ba5f52c1_xz4x/placeHolder", _this.lang, "");
                    _this.sendState_3584b1dc_xv9jEnumData = [
                        {
                            "name": _this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/UnShipped", _this.lang, "未发货"),
                            "value": "UnShipped"
                        },
                        {
                            "name": _this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/Shipped", _this.lang, "已发货"),
                            "value": "Shipped"
                        },
                        {
                            "name": _this.langService.transform("EnumField/sendState_3584b1dc_xv9j/enumData/Done", _this.lang, "已收货"),
                            "value": "Done"
                        }
                    ];
                    _this.sendState_3584b1dc_xv9j_PlaceHolder = _this.langService.transform("EnumField/sendState_3584b1dc_xv9j/placeHolder", _this.lang, "");
                    _this.orderCode_1d7fb675_wqcn_PlaceHolder = _this.langService.transform("TextBox/orderCode_1d7fb675_wqcn/placeHolder", _this.lang, "");
                    _this.orderPerson_OrderPerson_name_676aa1fa_yg9q_PlaceHolder = _this.langService.transform("TextBox/orderPerson_OrderPerson_name_676aa1fa_yg9q/placeHolder", _this.lang, "");
                    _this.orderTime_e0e86794_fc6z_PlaceHolder = _this.langService.transform("TextBox/orderTime_e0e86794_fc6z/placeHolder", _this.lang, "");
                    _this.telephone_a8621f05_4hyo_PlaceHolder = _this.langService.transform("TextBox/telephone_a8621f05_4hyo/placeHolder", _this.lang, "");
                    _this.remark_71281e54_dqeo_PlaceHolder = _this.langService.transform("TextBox/remark_71281e54_dqeo/placeHolder", _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusInvalidInput(verifyInformations, _this.rootElement);
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
                BasicFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.onFormLoad();
                };
                BasicFormComponent.prototype.ngAfterViewInit = function () {
                    this.componentManagerService.appendControl('merchant_Merchant_MerchantName_147deab4_1zy9', this.merchant_Merchant_MerchantName_147deab4_1zy9);
                    this.componentManagerService.appendControl('orderPerson_771cf8b5_32o4', this.orderPerson_771cf8b5_32o4);
                };
                BasicFormComponent.prototype.ngOnDestroy = function () {
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
                };
                BasicFormComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                BasicFormComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    ViewChild('merchant_Merchant_MerchantName_147deab4_1zy9'),
                    __metadata("design:type", LookupGridComponent)
                ], BasicFormComponent.prototype, "merchant_Merchant_MerchantName_147deab4_1zy9", void 0);
                __decorate([
                    ViewChild('orderPerson_771cf8b5_32o4'),
                    __metadata("design:type", LookupGridComponent)
                ], BasicFormComponent.prototype, "orderPerson_771cf8b5_32o4", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], BasicFormComponent.prototype, "cls", void 0);
                __decorate([
                    ViewChild(ConditionDialogComponent),
                    __metadata("design:type", ConditionDialogComponent)
                ], BasicFormComponent.prototype, "conditionDialog", void 0);
                __decorate([
                    ViewChild(QdpViewComponent),
                    __metadata("design:type", QdpViewComponent)
                ], BasicFormComponent.prototype, "qdpViewComponent", void 0);
                __decorate([
                    ViewChild(QueryFrameworkLayoutComponent),
                    __metadata("design:type", QueryFrameworkLayoutComponent)
                ], BasicFormComponent.prototype, "queryFrameworkLayoutComponent", void 0);
                BasicFormComponent = __decorate([
                    Component({
                        selector: 'app-basicformcomponent',
                        templateUrl: './basicformcomponent.html',
                        styleUrls: ['./basicformcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'basic-form-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: SaleOrderRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            QDP_COMMAND_SERVICE_PROVIDERS,
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: Form, useClass: BasicFormViewmodelForm },
                            { provide: UIState, useClass: BasicFormViewmodelUIState },
                            { provide: ViewModel, useClass: BasicFormViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
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
                        ComponentManagerService,
                        DomSanitizer,
                        Injector])
                ], BasicFormComponent);
                return BasicFormComponent;
            }(FrameComponent));

            var ɵ0$2 = { type: 'string' };
            var OrderdetailComponentViewmodel = /** @class */ (function (_super) {
                __extends(OrderdetailComponentViewmodel, _super);
                function OrderdetailComponentViewmodel() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bindingPath = '/orderDetails';
                    _this.dom = {
                        "dataGrid_orderdetail": {
                            "type": "DataGrid",
                            "resourceId": "dataGrid_orderdetail",
                            "visible": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": true
                            },
                            "id": "dataGrid_orderdetail",
                            "size": {},
                            "readonly": {
                                "useQuote": false,
                                "isExpression": false,
                                "value": false
                            },
                            "fields": [
                                {
                                    "type": "GridField",
                                    "resourceId": "goods_d3829541_0hbn",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "goods_d3829541_0hbn",
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
                                        "path": "goods",
                                        "fullPath": "Goods.Goods",
                                        "isExpression": false,
                                        "value": "goods"
                                    },
                                    "dataField": "goods.goods",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "商品",
                                    "editor": {
                                        "type": "LookupEdit",
                                        "isTextArea": true,
                                        "resourceId": "goods_d3829541_zhpt",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "goods_d3829541_zhpt",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "goods",
                                            "fullPath": "Goods.Goods",
                                            "isExpression": false,
                                            "value": "goods"
                                        },
                                        "disable": false,
                                        "dataSource": {
                                            "uri": "OrderDetail.goods",
                                            "displayName": "商品帮助",
                                            "idField": "id",
                                            "type": "ViewObject"
                                        },
                                        "valueField": "id",
                                        "textField": "goodsName",
                                        "multiSelect": false,
                                        "pageSize": 20,
                                        "mapFields": {
                                            "id": "goods.goods",
                                            "goodsName": "goods.goods_GoodsName",
                                            "goodsCode": "goods.goods_GoodsCode",
                                            "specification": "specification",
                                            "price": "price"
                                        },
                                        "displayType": "List",
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
                                    "resourceId": "goods_Goods_GoodsName_b110ddde_h94h",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "goods_Goods_GoodsName_b110ddde_h94h",
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
                                        "path": "goods_Goods_GoodsName",
                                        "fullPath": "Goods.Goods_GoodsName",
                                        "isExpression": false,
                                        "value": "goods_Goods_GoodsName"
                                    },
                                    "dataField": "goods.goods_GoodsName",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "商品名称",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "goods_Goods_GoodsName_b110ddde_9lx1",
                                        "defaultI18nValue": "商品名称",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "goods_Goods_GoodsName_b110ddde_9lx1",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "goods_Goods_GoodsName",
                                            "fullPath": "Goods.Goods_GoodsName",
                                            "isExpression": false,
                                            "value": "goods_Goods_GoodsName"
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
                                    "resourceId": "specification_63d2f314_8ks8",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "specification_63d2f314_8ks8",
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
                                        "path": "specification",
                                        "fullPath": "Specification",
                                        "isExpression": false,
                                        "value": "specification"
                                    },
                                    "dataField": "specification",
                                    "dataType": "string",
                                    "multiLanguage": false,
                                    "caption": "规格型号",
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "specification_63d2f314_or74",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "specification_63d2f314_or74",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "specification",
                                            "isExpression": false,
                                            "value": "specification"
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "none"
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "quality_381e93a8_lzmz",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "quality_381e93a8_lzmz",
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
                                        "path": "quality",
                                        "fullPath": "Quality",
                                        "isExpression": false,
                                        "value": "quality"
                                    },
                                    "dataField": "quality",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "数量",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "quality_381e93a8_f1hx",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "quality_381e93a8_f1hx",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "quality",
                                            "isExpression": false,
                                            "value": "quality"
                                        },
                                        "disable": false,
                                        "step": 1,
                                        "useThousands": true,
                                        "textAlign": "left",
                                        "precision": 0
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "number",
                                        "precision": 0,
                                        "thousand": ",",
                                        "decimal": "."
                                    }
                                },
                                {
                                    "type": "GridField",
                                    "resourceId": "price_12e9f1a9_0oqq",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "price_12e9f1a9_0oqq",
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
                                        "path": "price",
                                        "fullPath": "Price",
                                        "isExpression": false,
                                        "value": "price"
                                    },
                                    "dataField": "price",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "标准单价",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "price_12e9f1a9_5v46",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "price_12e9f1a9_5v46",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "price",
                                            "isExpression": false,
                                            "value": "price"
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
                                    "resourceId": "amount_62e1cb4c_sk4g",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "amount_62e1cb4c_sk4g",
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
                                        "path": "amount",
                                        "fullPath": "Amount",
                                        "isExpression": false,
                                        "value": "amount"
                                    },
                                    "dataField": "amount",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "金额",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "amount_62e1cb4c_wdwb",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "amount_62e1cb4c_wdwb",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "amount",
                                            "isExpression": false,
                                            "value": "amount"
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
                                    "resourceId": "discountType_8004a7da_qc99",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "discountType_8004a7da_qc99",
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
                                        "path": "discountType",
                                        "fullPath": "DiscountType",
                                        "isExpression": false,
                                        "value": "discountType"
                                    },
                                    "dataField": "discountType",
                                    "dataType": "enum",
                                    "multiLanguage": false,
                                    "caption": "折扣类型",
                                    "editor": {
                                        "type": "ComboList",
                                        "isTextArea": true,
                                        "resourceId": "discountType_8004a7da_mkma",
                                        "defaultI18nValue": "下拉框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "discountType_8004a7da_mkma",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "discountType",
                                            "isExpression": false,
                                            "value": "discountType"
                                        },
                                        "disable": false,
                                        "editable": false,
                                        "idField": "value",
                                        "textField": "name",
                                        "multiSelect": false,
                                        "data": [
                                            {
                                                "name": "无折扣",
                                                "value": "none"
                                            },
                                            {
                                                "name": "有折扣",
                                                "value": "dis"
                                            }
                                        ],
                                        "autoWidth": true
                                    },
                                    "draggable": false,
                                    "frozen": "none",
                                    "sortable": true,
                                    "resizeable": true,
                                    "enumData": [
                                        {
                                            "name": "无折扣",
                                            "value": "none"
                                        },
                                        {
                                            "name": "有折扣",
                                            "value": "dis"
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
                                    "resourceId": "discount_0658848e_zq1k",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "discount_0658848e_zq1k",
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
                                        "path": "discount",
                                        "fullPath": "Discount",
                                        "isExpression": false,
                                        "value": "discount"
                                    },
                                    "dataField": "discount",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "折扣金额",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "discount_0658848e_3sjx",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "discount_0658848e_3sjx",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "discount",
                                            "isExpression": false,
                                            "value": "discount"
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
                                    "resourceId": "actualAmount_7136b6c1_m0aj",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "actualAmount_7136b6c1_m0aj",
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
                                        "path": "actualAmount",
                                        "fullPath": "ActualAmount",
                                        "isExpression": false,
                                        "value": "actualAmount"
                                    },
                                    "dataField": "actualAmount",
                                    "dataType": "number",
                                    "multiLanguage": false,
                                    "caption": "实际结算金额",
                                    "editor": {
                                        "type": "FarrisNumberSpinner",
                                        "isTextArea": true,
                                        "resourceId": "actualAmount_7136b6c1_0q3z",
                                        "defaultI18nValue": "数值框",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "actualAmount_7136b6c1_0q3z",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "actualAmount",
                                            "isExpression": false,
                                            "value": "actualAmount"
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
                                    "resourceId": "remark_f9d55622_0rpu",
                                    "visible": {
                                        "useQuote": false,
                                        "isExpression": false,
                                        "value": true
                                    },
                                    "id": "remark_f9d55622_0rpu",
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
                                    "editor": {
                                        "type": "TextBox",
                                        "isTextArea": true,
                                        "resourceId": "remark_f9d55622_tpbx",
                                        "defaultI18nValue": "文本",
                                        "visible": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": true
                                        },
                                        "id": "remark_f9d55622_tpbx",
                                        "size": {},
                                        "readonly": {
                                            "useQuote": false,
                                            "isExpression": false,
                                            "value": false
                                        },
                                        "binding": {
                                            "type": "Form",
                                            "path": "remark",
                                            "isExpression": false,
                                            "value": "remark"
                                        },
                                        "disable": false,
                                        "maxLength": 100,
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
                                    "updateOn": "blur",
                                    "formatter": {
                                        "type": "none"
                                    }
                                }
                            ],
                            "multiSelect": false,
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
                OrderdetailComponentViewmodel.prototype.orderdetailAddItem1 = function (commandParam) { return; };
                OrderdetailComponentViewmodel.prototype.orderdetailRemoveItem1 = function (commandParam) { return; };
                __decorate([
                    NgCommand({
                        name: 'orderdetailAddItem1',
                        params: {}
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], OrderdetailComponentViewmodel.prototype, "orderdetailAddItem1", null);
                __decorate([
                    NgCommand({
                        name: 'orderdetailRemoveItem1',
                        params: {
                            id: '{DATA~/#{orderdetail-component}/orderDetails/id}'
                        },
                        paramDescriptions: {
                            id: ɵ0$2
                        }
                    }),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Observable)
                ], OrderdetailComponentViewmodel.prototype, "orderdetailRemoveItem1", null);
                OrderdetailComponentViewmodel = __decorate([
                    Injectable()
                ], OrderdetailComponentViewmodel);
                return OrderdetailComponentViewmodel;
            }(ViewModel));

            var OrderdetailComponentViewmodelForm = /** @class */ (function (_super) {
                __extends(OrderdetailComponentViewmodelForm, _super);
                function OrderdetailComponentViewmodelForm() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    NgFormControl({
                        id: 'goods.goods',
                        name: "{{goods_d3829541_0hbn}}",
                        binding: 'goods.goods',
                        updateOn: 'blur',
                        defaultI18nValue: '商品',
                    }),
                    __metadata("design:type", FormControl)
                ], OrderdetailComponentViewmodelForm.prototype, "goods", void 0);
                __decorate([
                    NgFormControl({
                        id: 'specification',
                        name: "{{specification_63d2f314_8ks8}}",
                        binding: 'specification',
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
                ], OrderdetailComponentViewmodelForm.prototype, "specification", void 0);
                __decorate([
                    NgFormControl({
                        id: 'quality',
                        name: "{{quality_381e93a8_lzmz}}",
                        binding: 'quality',
                        updateOn: 'blur',
                        defaultI18nValue: '数量',
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
                ], OrderdetailComponentViewmodelForm.prototype, "quality", void 0);
                __decorate([
                    NgFormControl({
                        id: 'price',
                        name: "{{price_12e9f1a9_0oqq}}",
                        binding: 'price',
                        updateOn: 'blur',
                        defaultI18nValue: '标准单价',
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
                ], OrderdetailComponentViewmodelForm.prototype, "price", void 0);
                __decorate([
                    NgFormControl({
                        id: 'amount',
                        name: "{{amount_62e1cb4c_sk4g}}",
                        binding: 'amount',
                        updateOn: 'blur',
                        defaultI18nValue: '金额',
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
                ], OrderdetailComponentViewmodelForm.prototype, "amount", void 0);
                __decorate([
                    NgFormControl({
                        id: 'discountType',
                        name: "{{discountType_8004a7da_qc99}}",
                        binding: 'discountType',
                        updateOn: 'change',
                        defaultI18nValue: '折扣类型',
                    }),
                    __metadata("design:type", FormControl)
                ], OrderdetailComponentViewmodelForm.prototype, "discountType", void 0);
                __decorate([
                    NgFormControl({
                        id: 'discount',
                        name: "{{discount_0658848e_zq1k}}",
                        binding: 'discount',
                        updateOn: 'blur',
                        defaultI18nValue: '折扣金额',
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
                ], OrderdetailComponentViewmodelForm.prototype, "discount", void 0);
                __decorate([
                    NgFormControl({
                        id: 'actualAmount',
                        name: "{{actualAmount_7136b6c1_m0aj}}",
                        binding: 'actualAmount',
                        updateOn: 'blur',
                        defaultI18nValue: '实际结算金额',
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
                ], OrderdetailComponentViewmodelForm.prototype, "actualAmount", void 0);
                __decorate([
                    NgFormControl({
                        id: 'remark',
                        name: "{{remark_f9d55622_0rpu}}",
                        binding: 'remark',
                        updateOn: 'blur',
                        defaultI18nValue: '备注',
                        validRules: [
                            {
                                type: 'matches',
                                constraints: [''],
                            }
                        ]
                    }),
                    __metadata("design:type", FormControl)
                ], OrderdetailComponentViewmodelForm.prototype, "remark", void 0);
                __decorate([
                    NgFormControl({
                        id: 'goods.goods_GoodsName',
                        name: "{{goods_Goods_GoodsName_b110ddde_h94h}}",
                        binding: 'goods.goods_GoodsName',
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
                ], OrderdetailComponentViewmodelForm.prototype, "goods_Goods_GoodsName", void 0);
                OrderdetailComponentViewmodelForm = __decorate([
                    Injectable(),
                    NgValidateForm({
                        formGroupName: '订单明细',
                        enableValidate: true
                    }),
                    Injectable()
                ], OrderdetailComponentViewmodelForm);
                return OrderdetailComponentViewmodelForm;
            }(Form));

            var OrderdetailComponentViewmodelUIState = /** @class */ (function (_super) {
                __extends(OrderdetailComponentViewmodelUIState, _super);
                function OrderdetailComponentViewmodelUIState() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                OrderdetailComponentViewmodelUIState = __decorate([
                    Injectable()
                ], OrderdetailComponentViewmodelUIState);
                return OrderdetailComponentViewmodelUIState;
            }(UIState));

            var orderdetailAddItem1Handler = /** @class */ (function (_super) {
                __extends(orderdetailAddItem1Handler, _super);
                function orderdetailAddItem1Handler(_SubListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._SubListDataService1 = _SubListDataService1;
                    return _this;
                }
                orderdetailAddItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('add', function (context) {
                        var args = [];
                        return _this.invoke(_this._SubListDataService1, 'add', args, context);
                    });
                };
                orderdetailAddItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'orderdetailAddItem1'
                    }),
                    __metadata("design:paramtypes", [SubListDataService])
                ], orderdetailAddItem1Handler);
                return orderdetailAddItem1Handler;
            }(CommandHandler));

            var orderdetailRemoveItem1Handler = /** @class */ (function (_super) {
                __extends(orderdetailRemoveItem1Handler, _super);
                function orderdetailRemoveItem1Handler(_DataGridService1, _SubListDataService1, _ListDataService1) {
                    var _this = _super.call(this) || this;
                    _this._DataGridService1 = _DataGridService1;
                    _this._SubListDataService1 = _SubListDataService1;
                    _this._ListDataService1 = _ListDataService1;
                    return _this;
                }
                orderdetailRemoveItem1Handler.prototype.schedule = function () {
                    var _this = this;
                    this.addTask('remove', function (context) {
                        var args = [
                            '{COMMAND~/params/id}',
                            '{COMMAND~/params/successMsg}'
                        ];
                        return _this.invoke(_this._SubListDataService1, 'remove', args, context);
                    });
                    this.addTask('uncheckDeletedRows', function (context) {
                        var args = [
                            '{COMMAND~/params/id}'
                        ];
                        return _this.invoke(_this._DataGridService1, 'uncheckDeletedRows', args, context);
                    });
                    this.addTask('queryChild', function (context) {
                        var args = [
                            '{COMMAND~/params/queryChild_过滤}',
                            '{COMMAND~/params/queryChild_排序}'
                        ];
                        return _this.invoke(_this._ListDataService1, 'queryChild', args, context);
                    });
                    this.addLink('remove', 'uncheckDeletedRows', "1==1");
                    this.addLink('uncheckDeletedRows', 'queryChild', "1==1");
                };
                orderdetailRemoveItem1Handler = __decorate([
                    Injectable(),
                    NgCommandHandler({
                        commandName: 'orderdetailRemoveItem1'
                    }),
                    __metadata("design:paramtypes", [DataGridService,
                        SubListDataService,
                        ListDataService])
                ], orderdetailRemoveItem1Handler);
                return orderdetailRemoveItem1Handler;
            }(CommandHandler));

            var OrderdetailComponent = /** @class */ (function (_super) {
                __extends(OrderdetailComponent, _super);
                function OrderdetailComponent(wizardSer, keybindingService, langService, route, router, rootElement, localizationService, frmI18nSettingService, focusInvalidService, farrisGridUtils, sanitizer, injector) {
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
                    _this.dataGrid_orderdetailColumns = [];
                    _this.cls = 'f-struct-is-subgrid ';
                    _this.lang = "";
                    _this.size = {};
                    _this.enabledLanguageList = [];
                    _this.tabsToolbarStates = new BehaviorSubject({});
                    _this.tabsToolbarVisibleStates = new BehaviorSubject({});
                    _this.dataGrid_orderdetaillineNumberTitle = _this.langService.transform("DataGrid/dataGrid_orderdetail/lineNumberTitle", _this.lang, "");
                    _this.lang = localStorage.getItem('languageCode') || "zh-CHS";
                    _this.viewModel.verifycationChanged.subscribe(function (verifyInformations) {
                        _this.focusInvalidService.focusGridCell(verifyInformations, _this.dataGrid_orderdetailDataGrid);
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
                OrderdetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.keybindingService) {
                        this.viewModel.keybindingMap.forEach(function (keyBinding, method) {
                            _this.keybindingService.register(keyBinding, function () {
                                return _this.viewModel[method]();
                            });
                        });
                    }
                    this.dataGrid_orderdetailColumns = [
                        [
                            {
                                id: 'goods_d3829541_0hbn',
                                field: 'goods.goods',
                                width: 120,
                                title: this.langService.transform("goods_d3829541_0hbn", this.lang, "商品"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.LOOKUP,
                                    options: {
                                        "type": 'EditorTypes.LOOKUP',
                                        "uri": 'OrderDetail.goods',
                                        "readonly": false,
                                        "idField": 'id',
                                        "singleSelect": true,
                                        "textField": 'goodsName',
                                        "valueField": 'id',
                                        "pagination": null,
                                        "pageSize": 20,
                                        "pageIndex": null,
                                        "displayType": 'List',
                                        "mapFields": { 'id': 'goods.goods', 'goodsName': 'goods.goods_GoodsName', 'goodsCode': 'goods.goods_GoodsCode', 'specification': 'specification', 'price': 'price' },
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
                                        "selectFirstInNav": false,
                                        "loadDataWhenOpen": true,
                                        "title": this.langService.transform("GridField/goods_d3829541_0hbn/editor/LookupEdit/goods_d3829541_zhpt/dialogTitle", this.lang, ""),
                                        "nosearch": false,
                                        "context": {
                                            "enableExtendLoadMethod": true
                                        },
                                        "isRecordSize": false,
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
                                id: 'goods_Goods_GoodsName_b110ddde_h94h',
                                field: 'goods.goods_GoodsName',
                                width: 120,
                                title: this.langService.transform("goods_Goods_GoodsName_b110ddde_h94h", this.lang, "商品名称"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "goods_Goods_GoodsName_b110ddde_9lx1", "title": "商品名称", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'specification_63d2f314_8ks8',
                                field: 'specification',
                                width: 120,
                                title: this.langService.transform("specification_63d2f314_8ks8", this.lang, "规格型号"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "specification_63d2f314_or74", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 36 }
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
                                id: 'quality_381e93a8_lzmz',
                                field: 'quality',
                                width: 120,
                                title: this.langService.transform("quality_381e93a8_lzmz", this.lang, "数量"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "quality_381e93a8_f1hx", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 0, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                                formatter: { "type": "number", "options": { "precision": 0, "thousand": ",", "decimal": "." } }
                            },
                            {
                                id: 'price_12e9f1a9_0oqq',
                                field: 'price',
                                width: 120,
                                title: this.langService.transform("price_12e9f1a9_0oqq", this.lang, "标准单价"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "price_12e9f1a9_5v46", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                                id: 'amount_62e1cb4c_sk4g',
                                field: 'amount',
                                width: 120,
                                title: this.langService.transform("amount_62e1cb4c_sk4g", this.lang, "金额"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "amount_62e1cb4c_wdwb", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                                id: 'discountType_8004a7da_qc99',
                                field: 'discountType',
                                width: 120,
                                title: this.langService.transform("discountType_8004a7da_qc99", this.lang, "折扣类型"),
                                dataType: 'enum',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.COMBOLIST,
                                    options: { "id": "discountType_8004a7da_mkma", "title": "下拉框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.COMBOLIST", "editable": false, "idField": "value", "enableClear": false, "textField": "name", "nosearch": false, "maxLength": null, "uri": "", "multiSelect": false, "data": [{ "value": "none", "name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/none", this.lang, "无折扣") }, { "value": "dis", "name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/dis", this.lang, "有折扣") }], "autoWidth": true }
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
                                formatter: {
                                    "type": "enum",
                                    "options": {
                                        "valueField": "value",
                                        "textField": "name",
                                        "data": [
                                            {
                                                "value": "none",
                                                "name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/none", this.lang, "无折扣")
                                            },
                                            {
                                                "value": "dis",
                                                "name": this.langService.transform("GridField/discountType_8004a7da_qc99/enumData/dis", this.lang, "有折扣")
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                id: 'discount_0658848e_zq1k',
                                field: 'discount',
                                width: 120,
                                title: this.langService.transform("discount_0658848e_zq1k", this.lang, "折扣金额"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "discount_0658848e_3sjx", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                                id: 'actualAmount_7136b6c1_m0aj',
                                field: 'actualAmount',
                                width: 120,
                                title: this.langService.transform("actualAmount_7136b6c1_m0aj", this.lang, "实际结算金额"),
                                dataType: 'number',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.NUMBERBOX,
                                    options: { "id": "actualAmount_7136b6c1_0q3z", "title": "数值框", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.NUMBERBOX", "precision": 2, "step": 1, "canNull": true, "bigNumber": false, "showButton": true, "showZero": true }
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
                                id: 'remark_f9d55622_0rpu',
                                field: 'remark',
                                width: 120,
                                title: this.langService.transform("remark_f9d55622_0rpu", this.lang, "备注"),
                                dataType: 'string',
                                align: 'left',
                                halign: 'left',
                                valign: 'middle',
                                isMultilingualField: false,
                                editor: {
                                    type: EditorTypes.TEXTBOX,
                                    options: { "id": "remark_f9d55622_tpbx", "title": "文本", "placeHolder": "", "readonly": false, "localization": null, "localizationType": null, "type": "EditorTypes.TEXTBOX", "isPassword": false, "maxLength": 100 }
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
                            }
                        ]
                    ];
                    this.viewModel.dataGrid_orderdetailColumns = this.dataGrid_orderdetailColumns;
                    this.viewModel.dataGridColumnsName = "dataGrid_orderdetailColumns";
                    this.onFormLoad();
                };
                OrderdetailComponent.prototype.ngAfterViewInit = function () {
                };
                OrderdetailComponent.prototype.ngOnDestroy = function () {
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
                OrderdetailComponent.prototype.handleSizeChange = function (size) {
                    this.size = size;
                };
                OrderdetailComponent.prototype.onFormLoad = function () {
                };
                __decorate([
                    ViewChild('dataGrid_orderdetailDataGrid'),
                    __metadata("design:type", DatagridComponent)
                ], OrderdetailComponent.prototype, "dataGrid_orderdetailDataGrid", void 0);
                __decorate([
                    HostBinding('class'),
                    __metadata("design:type", Object)
                ], OrderdetailComponent.prototype, "cls", void 0);
                __decorate([
                    ViewChild(ConditionDialogComponent),
                    __metadata("design:type", ConditionDialogComponent)
                ], OrderdetailComponent.prototype, "conditionDialog", void 0);
                __decorate([
                    ViewChild(QdpViewComponent),
                    __metadata("design:type", QdpViewComponent)
                ], OrderdetailComponent.prototype, "qdpViewComponent", void 0);
                __decorate([
                    ViewChild(QueryFrameworkLayoutComponent),
                    __metadata("design:type", QueryFrameworkLayoutComponent)
                ], OrderdetailComponent.prototype, "queryFrameworkLayoutComponent", void 0);
                OrderdetailComponent = __decorate([
                    Component({
                        selector: 'app-orderdetailcomponent',
                        templateUrl: './orderdetailcomponent.html',
                        styleUrls: ['./orderdetailcomponent.scss'],
                        providers: [
                            FARRIS_DEVKIT_FRAME_PROVIDERS,
                            FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
                            { provide: FRAME_ID, useValue: 'orderdetail-component' },
                            { provide: BindingData, useClass: BindingData },
                            { provide: Repository, useExisting: SaleOrderRepository },
                            LangService,
                            { provide: NAMESPACE, useValue: '' },
                            QDP_COMMAND_SERVICE_PROVIDERS,
                            { provide: ServerSideToken, useClass: BefLookupRestService },
                            { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
                            { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
                            { provide: Form, useClass: OrderdetailComponentViewmodelForm },
                            { provide: UIState, useClass: OrderdetailComponentViewmodelUIState },
                            { provide: ViewModel, useClass: OrderdetailComponentViewmodel },
                            { provide: EXCEPTION_HANDLER, useValue: null },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: orderdetailAddItem1Handler, multi: true },
                            { provide: COMMAND_HANDLERS_TOKEN, useClass: orderdetailRemoveItem1Handler, multi: true },
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
                ], OrderdetailComponent);
                return OrderdetailComponent;
            }(FrameComponent));

            var JitMissingTranslationHandler = /** @class */ (function () {
                function JitMissingTranslationHandler() {
                }
                JitMissingTranslationHandler.prototype.handle = function (params) {
                    return "JitI18nDefaultValue";
                };
                return JitMissingTranslationHandler;
            }());
            var ɵ0$3 = (createTranslateLoader$1), ɵ1$2 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ2$2 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; }, ɵ3$2 = function () { return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port; };
            var SaleOrderCardDemo1Module = /** @class */ (function () {
                function SaleOrderCardDemo1Module(trans) {
                    this.trans = trans;
                }
                SaleOrderCardDemo1Module = __decorate([
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
                            BasicFormComponent,
                            OrderdetailComponent
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
                                    useFactory: ɵ0$3,
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
                            SaleOrderCardDemo1RoutingModule,
                        ],
                        providers: [
                            { provide: LOCALE_ID, useValue: ɵ1$2 },
                            TranslateResolveService,
                            FARRIS_DEVKIT_APP_PROVIDERS,
                            FrameworkVariableService,
                            FrmI18nSettingService,
                            FileViewerService,
                            { provide: FORM_PATH_TOKEN, useValue: '/apps/hotwave/ordermrg/web/bo-saleorder-front/saleordercarddemo1/' },
                            FinishLoadService,
                            { provide: Server_Host, useFactory: ɵ2$2 },
                            { provide: BE_SERVER_URI_TOKEN, useFactory: ɵ3$2 }
                        ]
                    }),
                    __metadata("design:paramtypes", [TranslateResolveService])
                ], SaleOrderCardDemo1Module);
                return SaleOrderCardDemo1Module;
            }());
            function createTranslateLoader$1(http) {
                return new TranslateHttpLoader(http, '/apps/hotwave/ordermrg/web/bo-saleorder-front/saleordercarddemo1/i18n/', '.json');
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
                } return ad; }, View_ɵa_0, RenderType_ɵa)), ɵdid(18, 638976, null, 0, AppModuleTreeComponent, [], { appTreeData: [0, "appTreeData"], bizObjectId: [1, "bizObjectId"] }, { appTreeChanged: "appTreeChanged" }), (_l()(), ɵeld(19, 0, null, 0, 92, "kendo-splitter-pane", [["style", "flex:1 1 0px; order: 2;"]], [[2, "k-pane-flex", null], [2, "k-pane", null], [2, "k-pane-static", null], [2, "k-scrollable", null]], null, null, View_SplitterPaneComponent_0, RenderType_SplitterPaneComponent)), ɵdid(20, 8437760, [[2, 4]], 0, SplitterPaneComponent, [ElementRef, Renderer2, ChangeDetectorRef], null, null), (_l()(), ɵeld(21, 0, null, 0, 90, "div", [["class", "d-flex flex-column flex-fill"], ["style", "height:100%"]], null, null, null, null, null)), (_l()(), ɵeld(22, 0, null, null, 3, "div", [["class", "p-2"], ["style", "height: 35px;"]], null, null, null, null, null)), (_l()(), ɵeld(23, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), ɵted(24, null, ["", ""])), (_l()(), ɵeld(25, 0, null, null, 0, "hr", [["class", "m-0 p-0"]], null, null, null, null, null)), (_l()(), ɵeld(26, 0, null, null, 85, "div", [["class", "d-flex flex-fill"], ["style", "position:relative;"]], null, null, null, null, null)), (_l()(), ɵeld(27, 0, null, null, 84, "kendo-grid", [], [[8, "className", 0], [1, "dir", 0], [2, "k-widget", null], [2, "k-grid", null], [2, "k-grid-lockedcolumns", null], [2, "k-grid-virtual", null], [2, "k-grid-column-resizing", null], [2, "k-grid-no-scrollbar", null]], null, null, View_GridComponent_0, RenderType_GridComponent)), ɵprd(4608, null, SuspendService, SuspendService, []), ɵprd(4608, null, ResizeService, ResizeService, []), ɵprd(135680, null, SinglePopupService, SinglePopupService, [PopupService, Renderer2, NgZone, ScrollSyncService, LocalizationService$1]), ɵprd(4608, null, DragAndDropService, DragAndDropService, []), ɵprd(4608, null, DragHintService, DragHintService, [Sanitizer]), ɵprd(4608, null, DropCueService, DropCueService, []), ɵprd(4608, null, IdService$1, IdService$1, []), ɵprd(512, null, BrowserSupportService, BrowserSupportService, []), ɵprd(512, null, DomEventsService, DomEventsService, []), ɵprd(512, null, LocalDataChangesService, LocalDataChangesService, []), ɵprd(131584, null, SelectionService, SelectionService, [DomEventsService, LocalDataChangesService]), ɵprd(512, null, GroupInfoService, GroupInfoService, []), ɵprd(512, null, GroupsService, GroupsService, [[2, Skip]]), ɵprd(512, null, ChangeNotificationService, ChangeNotificationService, [NgZone]), ɵprd(512, null, DetailsService, DetailsService, []), ɵprd(512, null, EditService$1, EditService$1, [NgZone]), ɵprd(512, null, FilterService, FilterService, []), ɵprd(512, null, PDFService, PDFService, []), ɵprd(512, null, ResponsiveService, ResponsiveService, []), ɵprd(512, null, ExcelService, ExcelService, []), ɵprd(256, null, L10N_PREFIX, "kendo.grid", []), ɵprd(131584, null, LocalizationService$1, LocalizationService$1, [L10N_PREFIX, [2, MessageService], [2, RTL]]), ɵprd(512, null, ScrollSyncService, ScrollSyncService, [NgZone, LocalizationService$1]), ɵprd(512, null, ColumnResizingService, ColumnResizingService, []), ɵprd(512, null, ColumnReorderService, ColumnReorderService, []), ɵprd(512, null, ColumnInfoService, ColumnInfoService, []), ɵprd(512, null, PagerContextService, PagerContextService, []), ɵprd(512, null, ScrollRequestService, ScrollRequestService, []), ɵprd(512, null, FocusRoot, FocusRoot, []), ɵprd(131584, null, NavigationService, NavigationService, [NgZone, DomEventsService, PagerContextService, ScrollRequestService, GroupsService, DetailsService, FocusRoot, EditService$1, ChangeDetectorRef, LocalizationService$1, [2, FocusableDirective]]), ɵprd(512, null, SortService, SortService, []), ɵdid(59, 8110080, null, 6, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService, SortService, LocalizationService$1], { selectable: [0, "selectable"] }, null), ɵqud(603979776, 3, { columns: 1 }), ɵqud(603979776, 4, { detailTemplateChildren: 1 }), ɵqud(603979776, 5, { noRecordsTemplateChildren: 1 }), ɵqud(603979776, 6, { pagerTemplateChildren: 1 }), ɵqud(603979776, 7, { toolbarTemplateChildren: 1 }), ɵqud(603979776, 8, { columnMenuTemplates: 1 }), ɵdid(66, 737280, null, 0, DataBindingDirective, [GridComponent, ChangeDetectorRef, LocalDataChangesService], { data: [0, "data"] }, null), ɵdid(67, 212992, null, 0, SelectionDirective, [GridComponent, ChangeDetectorRef], { selectedKeys: [0, "selectedKeys"], selectionKey: [1, "selectionKey"] }, null), ɵprd(256, null, CELL_CONTEXT, EMPTY_CELL_CONTEXT, []), (_l()(), ɵeld(69, 0, null, null, 6, "kendo-grid-checkbox-column", [["width", "50px"]], null, null, null, View_CheckboxColumnComponent_0, RenderType_CheckboxColumnComponent)), ɵdid(70, 49152, null, 4, CheckboxColumnComponent, [[8, null]], { width: [0, "width"] }, null), ɵqud(603979776, 9, { headerTemplates: 1 }), ɵqud(335544320, 10, { footerTemplate: 0 }), ɵqud(603979776, 11, { columnMenuTemplates: 1 }), ɵqud(335544320, 12, { template: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [CheckboxColumnComponent]), (_l()(), ɵeld(76, 0, null, null, 11, "kendo-grid-column", [["field", "code"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(77, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 13, { headerTemplates: 1 }), ɵqud(335544320, 14, { footerTemplate: 0 }), ɵqud(603979776, 15, { columnMenuTemplates: 1 }), ɵqud(335544320, 16, { template: 0 }), ɵqud(335544320, 17, { groupHeaderTemplate: 0 }), ɵqud(335544320, 18, { groupFooterTemplate: 0 }), ɵqud(335544320, 19, { editTemplate: 0 }), ɵqud(335544320, 20, { filterCellTemplate: 0 }), ɵqud(335544320, 21, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵeld(88, 0, null, null, 11, "kendo-grid-column", [["field", "name"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(89, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 22, { headerTemplates: 1 }), ɵqud(335544320, 23, { footerTemplate: 0 }), ɵqud(603979776, 24, { columnMenuTemplates: 1 }), ɵqud(335544320, 25, { template: 0 }), ɵqud(335544320, 26, { groupHeaderTemplate: 0 }), ɵqud(335544320, 27, { groupFooterTemplate: 0 }), ɵqud(335544320, 28, { editTemplate: 0 }), ɵqud(335544320, 29, { filterCellTemplate: 0 }), ɵqud(335544320, 30, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵeld(100, 0, null, null, 11, "kendo-grid-column", [["field", "appEntrance"]], null, null, null, View_ColumnComponent_0, RenderType_ColumnComponent)), ɵdid(101, 49152, null, 9, ColumnComponent, [[8, null]], { title: [0, "title"], field: [1, "field"] }, null), ɵqud(603979776, 31, { headerTemplates: 1 }), ɵqud(335544320, 32, { footerTemplate: 0 }), ɵqud(603979776, 33, { columnMenuTemplates: 1 }), ɵqud(335544320, 34, { template: 0 }), ɵqud(335544320, 35, { groupHeaderTemplate: 0 }), ɵqud(335544320, 36, { groupFooterTemplate: 0 }), ɵqud(335544320, 37, { editTemplate: 0 }), ɵqud(335544320, 38, { filterCellTemplate: 0 }), ɵqud(335544320, 39, { filterMenuTemplate: 0 }), ɵprd(2048, [[3, 4]], ColumnBase, null, [ColumnComponent]), (_l()(), ɵand(0, [[1, 2], ["btnOkAndCancle", 2]], null, 0, null, View_RtfAppComponent_1))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "horizontal"; _ck(_v, 7, 0, currVal_7); var currVal_12 = "40%"; var currVal_13 = "20%"; var currVal_14 = "50%"; _ck(_v, 10, 0, currVal_12, currVal_13, currVal_14); var currVal_16 = _co.treeData; var currVal_17 = _co.bizObjectId; _ck(_v, 18, 0, currVal_16, currVal_17); var currVal_31 = _co.selectableSettings; _ck(_v, 59, 0, currVal_31); var currVal_32 = _co.gridData; _ck(_v, 66, 0, currVal_32); var currVal_33 = _co.curSelectedKeys; var currVal_34 = "id"; _ck(_v, 67, 0, currVal_33, currVal_34); var currVal_35 = "50px"; _ck(_v, 70, 0, currVal_35); var currVal_36 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Code"), ""); var currVal_37 = "code"; _ck(_v, 77, 0, currVal_36, currVal_37); var currVal_38 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Name"), ""); var currVal_39 = "name"; _ck(_v, 89, 0, currVal_38, currVal_39); var currVal_40 = ɵinlineInterpolate(1, "", _co.getResOnCurrentLangeContext("Entrance"), ""); var currVal_41 = "appEntrance"; _ck(_v, 101, 0, currVal_40, currVal_41); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ɵnov(_v, 7).hostClasses; var currVal_1 = ɵnov(_v, 7).hostClasses; var currVal_2 = ɵnov(_v, 7).hostClasses; var currVal_3 = ɵnov(_v, 7).horizontalHostClasses; var currVal_4 = ɵnov(_v, 7).verticalHostClasses; var currVal_5 = ɵnov(_v, 7).dir; var currVal_6 = ɵnov(_v, 7).ariaRole; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = ɵnov(_v, 10).styleDisplayFlex; var currVal_9 = ɵnov(_v, 10).hostClass; var currVal_10 = ɵnov(_v, 10).staticPaneClass; var currVal_11 = ɵnov(_v, 10).scrollablePaneClass; _ck(_v, 9, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_15 = _co.getResOnCurrentLangeContext("TitleName"); _ck(_v, 14, 0, currVal_15); var currVal_18 = ɵnov(_v, 20).styleDisplayFlex; var currVal_19 = ɵnov(_v, 20).hostClass; var currVal_20 = ɵnov(_v, 20).staticPaneClass; var currVal_21 = ɵnov(_v, 20).scrollablePaneClass; _ck(_v, 19, 0, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = _co.getResOnCurrentLangeContext("EntranceList"); _ck(_v, 24, 0, currVal_22); var currVal_23 = "flex-fill"; var currVal_24 = ɵnov(_v, 59).dir; var currVal_25 = ɵnov(_v, 59).hostClasses; var currVal_26 = ɵnov(_v, 59).hostClasses; var currVal_27 = ɵnov(_v, 59).lockedClasses; var currVal_28 = ɵnov(_v, 59).virtualClasses; var currVal_29 = ɵnov(_v, 59).columnResizing; var currVal_30 = ɵnov(_v, 59).noScrollbarClass; _ck(_v, 27, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); }); }
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
                } return ad; }, View_TreeViewComponent_0, RenderType_TreeViewComponent)), ɵprd(4608, null, IndexBuilderService, IndexBuilderService, []), ɵprd(4608, null, LoadingNotificationService, LoadingNotificationService, []), ɵprd(512, null, ExpandStateService, ExpandStateService, []), ɵprd(256, null, L10N_PREFIX, "kendo.treeview", []), ɵprd(131584, null, LocalizationService$1, LocalizationService$1, [L10N_PREFIX, [2, MessageService], [2, RTL]]), ɵprd(512, null, NavigationService$1, NavigationService$1, [LocalizationService$1]), ɵprd(512, null, NodeChildrenService, NodeChildrenService, []), ɵprd(512, null, SelectionService$1, SelectionService$1, []), ɵprd(512, null, TreeViewLookupService, TreeViewLookupService, []), ɵprd(512, null, DataChangeNotificationService, DataChangeNotificationService, []), ɵdid(12, 770048, null, 1, TreeViewComponent, [ExpandStateService, NavigationService$1, NodeChildrenService, SelectionService$1, TreeViewLookupService, NgZone, Renderer2, ElementRef, DataChangeNotificationService, LocalizationService$1], { nodes: [0, "nodes"], textField: [1, "textField"] }, { selectionChange: "selectionChange" }), ɵqud(335544320, 1, { nodeTemplate: 0 }), ɵdid(14, 147456, null, 0, ExpandDirective, [TreeViewComponent], { expandKey: [0, "expandKey"], expandedKeys: [1, "expandedKeys"] }, { expandedKeysChange: "expandedKeysChange" }), ɵdid(15, 147456, null, 0, SelectDirective, [TreeViewComponent], { selectKey: [0, "selectKey"], selection: [1, "selection"], selectedKeys: [2, "selectedKeys"] }, { selectedKeysChange: "selectedKeysChange" }), ɵdid(16, 606208, null, 0, FlatDataBindingDirective, [TreeViewComponent], { nodes: [0, "nodes"], parentIdField: [1, "parentIdField"], idField: [2, "idField"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.appTreeData; var currVal_7 = "name"; _ck(_v, 12, 0, currVal_6, currVal_7); var currVal_8 = "id"; var currVal_9 = _co.expandedKeys; _ck(_v, 14, 0, currVal_8, currVal_9); var currVal_10 = "id"; var currVal_11 = ""; var currVal_12 = _co.selectKeys; _ck(_v, 15, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.appTreeData; var currVal_14 = "parentId"; var currVal_15 = "id"; _ck(_v, 16, 0, currVal_13, currVal_14, currVal_15); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 12).classNames; var currVal_1 = ɵnov(_v, 12).classNames; var currVal_2 = ɵnov(_v, 12).role; var currVal_3 = ɵnov(_v, 12).direction; var currVal_4 = ɵnov(_v, 12).animate; var currVal_5 = ɵnov(_v, 15).getAriaMultiselectable; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
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
            var styles_OrderdetailComponent = [styles$1];
            var RenderType_OrderdetailComponent = ɵcrt({ encapsulation: 0, styles: styles_OrderdetailComponent, data: {} });
            function View_OrderdetailComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-datagrid", [["class", "f-component-grid f-utils-fill"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid_orderdetail"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "click"], [null, "pageChanged"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "pageSizeChanged"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
                    var pd_0 = (ɵnov(_v, 4).onClick($event) !== false);
                    ad = (pd_0 && ad);
                } if (("pageChanged" === en)) {
                    var pd_1 = (ɵnov(_v, 6).pageChangedHandler($event) !== false);
                    ad = (pd_1 && ad);
                } if (("selectChanged" === en)) {
                    var pd_2 = (ɵnov(_v, 6).selectedRowChanged($event) !== false);
                    ad = (pd_2 && ad);
                } if (("unSelect" === en)) {
                    var pd_3 = (ɵnov(_v, 6).unSelected($event) !== false);
                    ad = (pd_3 && ad);
                } if (("checkedChange" === en)) {
                    var pd_4 = (ɵnov(_v, 6).checkedChanged($event) !== false);
                    ad = (pd_4 && ad);
                } if (("pageSizeChanged" === en)) {
                    var pd_5 = (ɵnov(_v, 6).pageSizeChanged($event) !== false);
                    ad = (pd_5 && ad);
                } if (("scrollYLoad" === en)) {
                    var pd_6 = (ɵnov(_v, 6).scrollY($event) !== false);
                    ad = (pd_6 && ad);
                } if (("filterChanged" === en)) {
                    var pd_7 = (ɵnov(_v, 6).filterChanged($event) !== false);
                    ad = (pd_7 && ad);
                } return ad; }, View_DatagridComponent_0, RenderType_DatagridComponent)), ɵprd(4608, null, DatagridSmartFilterService, DatagridSmartFilterService, []), ɵprd(512, null, DatagridFacadeService, DatagridFacadeService, [HttpClient]), ɵprd(512, null, DatagridService, DatagridService, []), ɵdid(4, 6275072, [[1, 4], ["dataGrid_orderdetailDataGrid", 4]], 1, DatagridComponent, [ChangeDetectorRef, ElementRef, Injector, NgZone, DatagridFacadeService, DatagridService, ApplicationRef, DomSanitizer, Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], maxHeight: [2, "maxHeight"], showBorder: [3, "showBorder"], striped: [4, "striped"], headerWrap: [5, "headerWrap"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], showPageList: [18, "showPageList"], showGotoInput: [19, "showGotoInput"], multiSelect: [20, "multiSelect"], showCheckbox: [21, "showCheckbox"], showAllCheckbox: [22, "showAllCheckbox"], checkOnSelect: [23, "checkOnSelect"], selectOnCheck: [24, "selectOnCheck"], selectionMode: [25, "selectionMode"], keepSelect: [26, "keepSelect"], useBlankWhenDataIsEmpty: [27, "useBlankWhenDataIsEmpty"], emptyDataHeight: [28, "emptyDataHeight"], fields: [29, "fields"], nowrap: [30, "nowrap"], virtualized: [31, "virtualized"], virtualizedAsyncLoad: [32, "virtualizedAsyncLoad"], editMode: [33, "editMode"], enableEditCellStyle: [34, "enableEditCellStyle"], selectOnEditing: [35, "selectOnEditing"], enableDragColumn: [36, "enableDragColumn"], expandGroupRows: [37, "expandGroupRows"], groupSummaryPosition: [38, "groupSummaryPosition"], showGroupColumn: [39, "showGroupColumn"], showRowGroupPanel: [40, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [41, "AutoColumnWidthUseDblclick"], mergeCell: [42, "mergeCell"], enableSimpleMode: [43, "enableSimpleMode"], enableScheme: [44, "enableScheme"], clearSelectionsWhenDataIsEmpty: [45, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [46, "enableContextMenu"], enableHighlightCell: [47, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), ɵqud(603979776, 5, { dgColumns: 1 }), ɵdid(6, 737280, null, 0, FarrisDatagridUseBindingDataDirective, [BindingData, ViewModel, DatagridComponent], null, null), ɵdid(7, 737280, null, 0, EditableDirective, [BindingData, ViewModel, DatagridComponent, DateTimeHelperService, Injector, RuntimeStateService, DialogService$1, NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), ɵdid(8, 147456, null, 0, FarrisDataGridEndEditDirective, [AppContext, DatagridComponent], null, null), ɵdid(9, 16384, null, 0, FarrisDataGridRemoteSummaryDirective, [ViewModel, DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), ɵdid(10, 212992, null, 0, DatagridComponentRefDirective, [Injector, DatagridComponent, ElementRef, FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid_orderdetail"; var currVal_4 = false; var currVal_5 = 300; var currVal_6 = false; var currVal_7 = true; var currVal_8 = false; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGrid_orderdetaillineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = false; var currVal_22 = false; var currVal_23 = false; var currVal_24 = false; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; var currVal_28 = "default"; var currVal_29 = true; var currVal_30 = false; var currVal_31 = 240; var currVal_32 = _co.viewModel.dataGrid_orderdetailColumns; var currVal_33 = true; var currVal_34 = false; var currVal_35 = false; var currVal_36 = "cell"; var currVal_37 = false; var currVal_38 = false; var currVal_39 = false; var currVal_40 = true; var currVal_41 = "groupFooterRow"; var currVal_42 = true; var currVal_43 = false; var currVal_44 = true; var currVal_45 = false; var currVal_46 = false; var currVal_47 = false; var currVal_48 = true; var currVal_49 = false; var currVal_50 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50]); _ck(_v, 6, 0); var currVal_51 = _co.viewModel.stateMachine["editable"]; var currVal_52 = true; _ck(_v, 7, 0, currVal_51, currVal_52); var currVal_53 = ""; _ck(_v, 9, 0, currVal_53); _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 4).pos; var currVal_1 = ɵnov(_v, 4).hostCls; var currVal_2 = ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
            function View_OrderdetailComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, "div", [["class", "f-grid-is-sub f-utils-flex-column"], ["id", "orderdetail-component-layout"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_OrderdetailComponent_2)), ɵdid(3, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 3, 0, currVal_0); }, null); }
            function View_OrderdetailComponent_0(_l) { return ɵvid(0, [ɵqud(671088640, 1, { dataGrid_orderdetailDataGrid: 0 }), ɵqud(402653184, 2, { conditionDialog: 0 }), ɵqud(402653184, 3, { qdpViewComponent: 0 }), ɵqud(402653184, 4, { queryFrameworkLayoutComponent: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_OrderdetailComponent_1)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 5, 0, currVal_0); }, null); }
            function View_OrderdetailComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 84, "app-orderdetailcomponent", [], [[8, "className", 0]], null, null, View_OrderdetailComponent_0, RenderType_OrderdetailComponent)), ɵprd(4608, null, ViewModel, OrderdetailComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2) { return [new orderdetailAddItem1Handler(p0_0), new orderdetailRemoveItem1Handler(p1_0, p1_1, p1_2)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, OrderdetailComponentViewmodelForm, []), ɵprd(4608, null, UIState, OrderdetailComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [SaleOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(81, 4440064, null, 0, OrderdetailComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "orderdetail-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 81, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 81).cls; _ck(_v, 0, 0, currVal_0); }); }
            var OrderdetailComponentNgFactory = ɵccf("app-orderdetailcomponent", OrderdetailComponent, View_OrderdetailComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles$2 = [""];

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_BasicFormComponent = [styles$2];
            var RenderType_BasicFormComponent = ɵcrt({ encapsulation: 0, styles: styles_BasicFormComponent, data: {} });
            function View_BasicFormComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "orderCode"], ["id", "orderCode_1d7fb675_wqcn"], ["input-end-edit", ""], ["maxlength", "36"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "36"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "orderCode"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/orderCode_1d7fb675_wqcn/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "orderCode"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "orderCode"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "orderCode_1d7fb675_wqcn"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_5)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_6)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_7)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("orderCode"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "orderCode_1d7fb675_wqcn", _co.lang, "\u8BA2\u5355\u7F16\u53F7")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "orderCode_1d7fb675_wqcn", _co.lang, "\u8BA2\u5355\u7F16\u53F7")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "farris-lookup-grid", [["data-mapping", ""], ["formControlName", "merchant_Merchant_MerchantName"], ["id", "merchant_Merchant_MerchantName_147deab4_1zy9"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(5, 13352960, [[1, 4], ["merchant_Merchant_MerchantName_147deab4_1zy9", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], viewType: [10, "viewType"], displayType: [11, "displayType"], enableClear: [12, "enableClear"], singleSelect: [13, "singleSelect"], idField: [14, "idField"], uri: [15, "uri"], pagination: [16, "pagination"], pageIndex: [17, "pageIndex"], pageSize: [18, "pageSize"], pageList: [19, "pageList"], nosearch: [20, "nosearch"], treeInfo: [21, "treeInfo"], cascadeStatus: [22, "cascadeStatus"], placeholder: [23, "placeholder"], useFavorite: [24, "useFavorite"], useTip: [25, "useTip"], isRecordSize: [26, "isRecordSize"], enableToSelect: [27, "enableToSelect"], expandLevel: [28, "expandLevel"], treeTableOptions: [29, "treeTableOptions"], loadTreeDataType: [30, "loadTreeDataType"], loadDataWhenOpen: [31, "loadDataWhenOpen"], selectFirstInNav: [32, "selectFirstInNav"], enableFullTree: [33, "enableFullTree"], useExtendInfo: [34, "useExtendInfo"], quickSelect: [35, "quickSelect"], treeToList: [36, "treeToList"], navTreeToList: [37, "navTreeToList"], showNavigation: [38, "showNavigation"] }, null), ɵpod(6, { "id": 0, "merchantName": 1, "merchantCode": 2 }), ɵpod(7, { "enableExtendLoadMethod": 0 }), ɵpad(8, 5), ɵpod(9, { "onlySelectLeaf": 0 }), ɵppd(10, 3), ɵpod(11, { "enableContextMenu": 0 }), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵdid(13, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(15, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(16, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(17, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(18, 212992, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(19, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.LookupEditmerchantMerchantMerchantName147deab41zy9DialogTitle; var currVal_9 = true; var currVal_10 = true; var currVal_11 = true; var currVal_12 = false; var currVal_13 = !_co.viewModel.stateMachine["editable"]; var currVal_14 = _ck(_v, 6, 0, "merchant.merchant", "merchant.merchant_MerchantName", "merchant.merchant_MerchantCode"); var currVal_15 = "id"; var currVal_16 = "merchantName"; var currVal_17 = _ck(_v, 7, 0, true); var currVal_18 = "text"; var currVal_19 = "TreeList"; var currVal_20 = true; var currVal_21 = true; var currVal_22 = "id"; var currVal_23 = "SaleOrder.merchant_Merchant_MerchantName"; var currVal_24 = true; var currVal_25 = 1; var currVal_26 = 20; var currVal_27 = _ck(_v, 8, 0, 10, 20, 30, 50, 100); var currVal_28 = false; var currVal_29 = _ck(_v, 9, 0, "default"); var currVal_30 = "enable"; var currVal_31 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 23, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/placeHolder", _co.lang, "")), ""); var currVal_32 = true; var currVal_33 = false; var currVal_34 = false; var currVal_35 = true; var currVal_36 = (0 - 1); var currVal_37 = _ck(_v, 11, 0, false); var currVal_38 = "default"; var currVal_39 = true; var currVal_40 = false; var currVal_41 = false; var currVal_42 = false; var currVal_43 = _co.merchant_Merchant_MerchantName_147deab4_1zy9QuickSelect; var currVal_44 = false; var currVal_45 = false; var currVal_46 = true; _ck(_v, 5, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46]); var currVal_47 = "merchant_Merchant_MerchantName"; _ck(_v, 13, 0, currVal_47); _ck(_v, 16, 0); _ck(_v, 17, 0); _ck(_v, 18, 0); var currVal_48 = 0; _ck(_v, 19, 0, currVal_48); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 5).hostCls; var currVal_1 = ɵnov(_v, 15).ngClassUntouched; var currVal_2 = ɵnov(_v, 15).ngClassTouched; var currVal_3 = ɵnov(_v, 15).ngClassPristine; var currVal_4 = ɵnov(_v, 15).ngClassDirty; var currVal_5 = ɵnov(_v, 15).ngClassValid; var currVal_6 = ɵnov(_v, 15).ngClassInvalid; var currVal_7 = ɵnov(_v, 15).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "merchant_Merchant_MerchantName"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "merchant_Merchant_MerchantName"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "merchant_Merchant_MerchantName_147deab4_1zy9"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_9)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_10)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_11)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("merchant_Merchant_MerchantName"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "merchant_Merchant_MerchantName_147deab4_1zy9", _co.lang, "\u5546\u6237\u540D\u79F0")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "merchant_Merchant_MerchantName_147deab4_1zy9", _co.lang, "\u5546\u6237\u540D\u79F0")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_13(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_14(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 17, "farris-lookup-grid", [["data-mapping", ""], ["formControlName", "orderPerson"], ["id", "orderPerson_771cf8b5_32o4"], ["input-end-edit", ""], ["lookupGridRef", ""]], [[8, "className", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_LookupGridComponent_0, RenderType_LookupGridComponent)), ɵprd(4608, null, PersonalConfigService, PersonalConfigService, [IdService]), ɵprd(512, null, LookupDefaultMapping, LookupDefaultMapping, [CommonUtils]), ɵprd(131584, null, ShortcutsService, ShortcutsService, []), ɵprd(512, null, LookupUtils, LookupUtils, [CommonUtils, RuntimeStateService, NgZone]), ɵdid(5, 13352960, [[2, 4], ["orderPerson_771cf8b5_32o4", 4]], 0, LookupGridComponent, [Injector, ComponentFactoryResolver, ElementRef, CommonUtils, LookupDefaultMapping, ChangeDetectorRef, ShortcutsService, LookupUtils, NgZone, Renderer2], { title: [0, "title"], showCloseButton: [1, "showCloseButton"], showMaxButton: [2, "showMaxButton"], resizable: [3, "resizable"], editable: [4, "editable"], readonly: [5, "readonly"], mapFields: [6, "mapFields"], valueField: [7, "valueField"], textField: [8, "textField"], context: [9, "context"], viewType: [10, "viewType"], displayType: [11, "displayType"], enableClear: [12, "enableClear"], singleSelect: [13, "singleSelect"], idField: [14, "idField"], uri: [15, "uri"], pagination: [16, "pagination"], pageIndex: [17, "pageIndex"], pageSize: [18, "pageSize"], pageList: [19, "pageList"], nosearch: [20, "nosearch"], cascadeStatus: [21, "cascadeStatus"], placeholder: [22, "placeholder"], useFavorite: [23, "useFavorite"], useTip: [24, "useTip"], isRecordSize: [25, "isRecordSize"], enableToSelect: [26, "enableToSelect"], expandLevel: [27, "expandLevel"], loadTreeDataType: [28, "loadTreeDataType"], loadDataWhenOpen: [29, "loadDataWhenOpen"], selectFirstInNav: [30, "selectFirstInNav"], enableFullTree: [31, "enableFullTree"], useExtendInfo: [32, "useExtendInfo"], quickSelect: [33, "quickSelect"], treeToList: [34, "treeToList"], navTreeToList: [35, "navTreeToList"], showNavigation: [36, "showNavigation"] }, null), ɵpod(6, { "id": 0, "code": 1, "name": 2 }), ɵpod(7, { "enableExtendLoadMethod": 0 }), ɵpad(8, 5), ɵppd(9, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [LookupGridComponent]), ɵdid(11, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(13, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(14, 81920, null, 0, LookupDataMappingDirective, [[2, ViewModel], [6, LookupGridComponent]], null, null), ɵdid(15, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(16, 212992, null, 0, LookupGridComponentRefDirective, [Injector, LookupGridComponent, ElementRef, FrameContext], null, null), ɵdid(17, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.LookupEditorderPerson771cf8b532o4DialogTitle; var currVal_9 = true; var currVal_10 = true; var currVal_11 = true; var currVal_12 = false; var currVal_13 = !_co.viewModel.stateMachine["editable"]; var currVal_14 = _ck(_v, 6, 0, "orderPerson.orderPerson", "orderPerson.orderPerson_code", "orderPerson.orderPerson_name"); var currVal_15 = "id"; var currVal_16 = "name"; var currVal_17 = _ck(_v, 7, 0, true); var currVal_18 = "text"; var currVal_19 = "List"; var currVal_20 = true; var currVal_21 = true; var currVal_22 = "id"; var currVal_23 = "SaleOrder.orderPerson"; var currVal_24 = true; var currVal_25 = 1; var currVal_26 = 20; var currVal_27 = _ck(_v, 8, 0, 10, 20, 30, 50, 100); var currVal_28 = false; var currVal_29 = "enable"; var currVal_30 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 22, _ck(_v, 9, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "LookupEdit/orderPerson_771cf8b5_32o4/placeHolder", _co.lang, "")), ""); var currVal_31 = true; var currVal_32 = false; var currVal_33 = false; var currVal_34 = true; var currVal_35 = (0 - 1); var currVal_36 = "default"; var currVal_37 = true; var currVal_38 = false; var currVal_39 = false; var currVal_40 = false; var currVal_41 = _co.orderPerson_771cf8b5_32o4QuickSelect; var currVal_42 = false; var currVal_43 = false; var currVal_44 = true; _ck(_v, 5, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44]); var currVal_45 = "orderPerson"; _ck(_v, 11, 0, currVal_45); _ck(_v, 14, 0); _ck(_v, 15, 0); _ck(_v, 16, 0); var currVal_46 = 0; _ck(_v, 17, 0, currVal_46); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 5).hostCls; var currVal_1 = ɵnov(_v, 13).ngClassUntouched; var currVal_2 = ɵnov(_v, 13).ngClassTouched; var currVal_3 = ɵnov(_v, 13).ngClassPristine; var currVal_4 = ɵnov(_v, 13).ngClassDirty; var currVal_5 = ɵnov(_v, 13).ngClassValid; var currVal_6 = ɵnov(_v, 13).ngClassInvalid; var currVal_7 = ɵnov(_v, 13).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_15(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "orderPerson"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], maxHeight: [1, "maxHeight"], type: [2, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = 500; var currVal_10 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = "orderPerson"; _ck(_v, 3, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_12(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "orderPerson_771cf8b5_32o4"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_13)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_14)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_15)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("orderPerson"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "orderPerson_771cf8b5_32o4", _co.lang, "\u4E0B\u5355\u4EBA")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "orderPerson_771cf8b5_32o4", _co.lang, "\u4E0B\u5355\u4EBA")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_17(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_18(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "orderPerson_OrderPerson_name"], ["id", "orderPerson_OrderPerson_name_676aa1fa_yg9q"], ["input-end-edit", ""], ["maxlength", "120"], ["tabindex", "0"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "120"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "orderPerson_OrderPerson_name"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/orderPerson_OrderPerson_name_676aa1fa_yg9q/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_19(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "orderPerson_OrderPerson_name"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "orderPerson_OrderPerson_name"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_16(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "orderPerson_OrderPerson_name_676aa1fa_yg9q"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_17)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_18)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_19)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("orderPerson_OrderPerson_name"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "orderPerson_OrderPerson_name_676aa1fa_yg9q", _co.lang, "\u4E0B\u5355\u4EBA\u540D\u79F0")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "orderPerson_OrderPerson_name_676aa1fa_yg9q", _co.lang, "\u4E0B\u5355\u4EBA\u540D\u79F0")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_21(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_22(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "orderTime"], ["id", "orderTime_e0e86794_fc6z"], ["input-end-edit", ""], ["maxlength", "30"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "30"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "orderTime"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/orderTime_e0e86794_fc6z/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_23(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "orderTime"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "orderTime"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_20(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "orderTime_e0e86794_fc6z"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_21)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_22)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_23)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("orderTime"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "orderTime_e0e86794_fc6z", _co.lang, "\u4E0B\u5355\u65F6\u95F4")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "orderTime_e0e86794_fc6z", _co.lang, "\u4E0B\u5355\u65F6\u95F4")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_25(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_26(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "telephone"], ["id", "telephone_a8621f05_4hyo"], ["input-end-edit", ""], ["maxlength", "20"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "20"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "telephone"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/telephone_a8621f05_4hyo/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_27(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "telephone"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "telephone"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_24(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "telephone_a8621f05_4hyo"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_25)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_26)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_27)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("telephone"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "telephone_a8621f05_4hyo", _co.lang, "\u8054\u7CFB\u7535\u8BDD")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "telephone_a8621f05_4hyo", _co.lang, "\u8054\u7CFB\u7535\u8BDD")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 15, "fieldSet", [["class", " f-section-formgroup col-12 px-0"], ["id", "3f39ffed-72a3-4484-a679-4c6ddb9f3913"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "legend", [["class", "f-section-formgroup-legend"], ["farrisCollapse", ""]], null, null, null, null, null)), ɵdid(2, 4931584, null, 0, CollapseDirective, [ElementRef, Renderer2, LocaleService], { title: [0, "title"], collapse: [1, "collapse"], collapseText: [2, "collapseText"], expandText: [3, "expandText"] }, null), (_l()(), ɵeld(3, 0, null, null, 12, "div", [["class", "f-section-formgroup-inputs"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_4)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_8)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_12)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_16)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_20)), ɵdid(13, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_24)), ɵdid(15, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.FieldSetTitle3f39ffed72a34484a6794c6ddb9f3913; var currVal_1 = false; var currVal_2 = _co.FieldSetCollapseText3f39ffed72a34484a6794c6ddb9f3913; var currVal_3 = _co.FieldSetExpandText3f39ffed72a34484a6794c6ddb9f3913; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = true; _ck(_v, 5, 0, currVal_4); var currVal_5 = true; _ck(_v, 7, 0, currVal_5); var currVal_6 = true; _ck(_v, 9, 0, currVal_6); var currVal_7 = true; _ck(_v, 11, 0, currVal_7); var currVal_8 = true; _ck(_v, 13, 0, currVal_8); var currVal_9 = true; _ck(_v, 15, 0, currVal_9); }, null); }
            function View_BasicFormComponent_30(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_31(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-combo-list", [["comboListRef", ""], ["formControlName", "payMethod"], ["id", "payMethod_ba5f52c1_xz4x"], ["input-end-edit", ""]], [[2, "f-combo-list", null], [2, "f-combo-list--tag", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
                    var pd_0 = (ɵnov(_v, 2).registerKeyboardEvent($event) !== false);
                    ad = (pd_0 && ad);
                } if (("keydown.esc" === en)) {
                    var pd_1 = (ɵnov(_v, 2).escHandlerEvent($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_ComboListComponent_0, RenderType_ComboListComponent)), ɵprd(512, null, ComboService, ComboService, [HttpClient, LoadingService, Injector]), ɵdid(2, 4964352, null, 0, ComboListComponent, [ElementRef, ChangeDetectorRef, DOCUMENT, Renderer2, ComboService, Injector], { disabled: [0, "disabled"], readonly: [1, "readonly"], editable: [2, "editable"], placeholder: [3, "placeholder"], autoWidth: [4, "autoWidth"], enableClear: [5, "enableClear"], nosearch: [6, "nosearch"], data: [7, "data"], idField: [8, "idField"], valueField: [9, "valueField"], textField: [10, "textField"], multiSelect: [11, "multiSelect"], enableCancelSelected: [12, "enableCancelSelected"] }, null), ɵppd(3, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [ComboListComponent]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"], isDisabled: [1, "isDisabled"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 212992, null, 0, ComboListComponentRefDirective, [Injector, ComboListComponent, ElementRef, FrameContext], null, null), ɵdid(10, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = false; var currVal_10 = !_co.viewModel.stateMachine["editable"]; var currVal_11 = false; var currVal_12 = ɵinlineInterpolate(1, "", ɵunv(_v, 2, 3, _ck(_v, 3, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "EnumField/payMethod_ba5f52c1_xz4x/placeHolder", _co.lang, "")), ""); var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = _co.payMethod_ba5f52c1_xz4xEnumData; var currVal_17 = "value"; var currVal_18 = "value"; var currVal_19 = "name"; var currVal_20 = false; var currVal_21 = false; _ck(_v, 2, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_22 = "payMethod"; var currVal_23 = false; _ck(_v, 5, 0, currVal_22, currVal_23); _ck(_v, 8, 0); _ck(_v, 9, 0); var currVal_24 = (0 - 1); _ck(_v, 10, 0, currVal_24); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 2).cls; var currVal_1 = ɵnov(_v, 2).clsTag; var currVal_2 = ɵnov(_v, 7).ngClassUntouched; var currVal_3 = ɵnov(_v, 7).ngClassTouched; var currVal_4 = ɵnov(_v, 7).ngClassPristine; var currVal_5 = ɵnov(_v, 7).ngClassDirty; var currVal_6 = ɵnov(_v, 7).ngClassValid; var currVal_7 = ɵnov(_v, 7).ngClassInvalid; var currVal_8 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
            function View_BasicFormComponent_32(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "payMethod"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"], data: [2, "data"], textField: [3, "textField"], valueField: [4, "valueField"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = false; var currVal_9 = "enum"; var currVal_10 = _co.payMethod_ba5f52c1_xz4xEnumData; var currVal_11 = "name"; var currVal_12 = "value"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = "payMethod"; _ck(_v, 3, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_29(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "payMethod_ba5f52c1_xz4x"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_30)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_31)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_32)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("payMethod"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "payMethod_ba5f52c1_xz4x", _co.lang, "\u652F\u4ED8\u65B9\u5F0F")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "payMethod_ba5f52c1_xz4x", _co.lang, "\u652F\u4ED8\u65B9\u5F0F")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_34(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_35(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "farris-combo-list", [["comboListRef", ""], ["formControlName", "sendState"], ["id", "sendState_3584b1dc_xv9j"], ["input-end-edit", ""]], [[2, "f-combo-list", null], [2, "f-combo-list--tag", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keydown"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
                    var pd_0 = (ɵnov(_v, 2).registerKeyboardEvent($event) !== false);
                    ad = (pd_0 && ad);
                } if (("keydown.esc" === en)) {
                    var pd_1 = (ɵnov(_v, 2).escHandlerEvent($event) !== false);
                    ad = (pd_1 && ad);
                } return ad; }, View_ComboListComponent_0, RenderType_ComboListComponent)), ɵprd(512, null, ComboService, ComboService, [HttpClient, LoadingService, Injector]), ɵdid(2, 4964352, null, 0, ComboListComponent, [ElementRef, ChangeDetectorRef, DOCUMENT, Renderer2, ComboService, Injector], { disabled: [0, "disabled"], readonly: [1, "readonly"], editable: [2, "editable"], placeholder: [3, "placeholder"], autoWidth: [4, "autoWidth"], enableClear: [5, "enableClear"], nosearch: [6, "nosearch"], data: [7, "data"], idField: [8, "idField"], valueField: [9, "valueField"], textField: [10, "textField"], multiSelect: [11, "multiSelect"], enableCancelSelected: [12, "enableCancelSelected"] }, null), ɵppd(3, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [ComboListComponent]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"], isDisabled: [1, "isDisabled"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 212992, null, 0, ComboListComponentRefDirective, [Injector, ComboListComponent, ElementRef, FrameContext], null, null), ɵdid(10, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = false; var currVal_10 = !_co.viewModel.stateMachine["editable"]; var currVal_11 = false; var currVal_12 = ɵinlineInterpolate(1, "", ɵunv(_v, 2, 3, _ck(_v, 3, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "EnumField/sendState_3584b1dc_xv9j/placeHolder", _co.lang, "")), ""); var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = _co.sendState_3584b1dc_xv9jEnumData; var currVal_17 = "value"; var currVal_18 = "value"; var currVal_19 = "name"; var currVal_20 = false; var currVal_21 = false; _ck(_v, 2, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_22 = "sendState"; var currVal_23 = false; _ck(_v, 5, 0, currVal_22, currVal_23); _ck(_v, 8, 0); _ck(_v, 9, 0); var currVal_24 = (0 - 1); _ck(_v, 10, 0, currVal_24); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 2).cls; var currVal_1 = ɵnov(_v, 2).clsTag; var currVal_2 = ɵnov(_v, 7).ngClassUntouched; var currVal_3 = ɵnov(_v, 7).ngClassTouched; var currVal_4 = ɵnov(_v, 7).ngClassPristine; var currVal_5 = ɵnov(_v, 7).ngClassDirty; var currVal_6 = ɵnov(_v, 7).ngClassValid; var currVal_7 = ɵnov(_v, 7).ngClassInvalid; var currVal_8 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
            function View_BasicFormComponent_36(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "sendState"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"], data: [2, "data"], textField: [3, "textField"], valueField: [4, "valueField"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = false; var currVal_9 = "enum"; var currVal_10 = _co.sendState_3584b1dc_xv9jEnumData; var currVal_11 = "name"; var currVal_12 = "value"; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = "sendState"; _ck(_v, 3, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_33(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "sendState_3584b1dc_xv9j"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_34)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_35)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_36)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("sendState"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "sendState_3584b1dc_xv9j", _co.lang, "\u53D1\u8D27\u72B6\u6001")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "sendState_3584b1dc_xv9j", _co.lang, "\u53D1\u8D27\u72B6\u6001")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_38(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_39(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 9, "farris-number-spinner", [["formControlName", "totalPrice"], ["id", "totalPrice_559ae1d0_tdrx"], ["input-end-edit", ""], ["numberSpinnerRef", ""]], [[2, "f-cmp-number-spinner", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent)), ɵdid(1, 4964352, null, 0, NumberSpinnerComponent, [ElementRef, Renderer2, Injector], { readonly: [0, "readonly"], placeholder: [1, "placeholder"], step: [2, "step"], bigNumber: [3, "bigNumber"], showButton: [4, "showButton"], useThousands: [5, "useThousands"], textAlign: [6, "textAlign"], canNull: [7, "canNull"], precision: [8, "precision"], showZero: [9, "showZero"] }, null), ɵppd(2, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [NumberSpinnerComponent]), ɵdid(4, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(6, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(7, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(8, 4407296, null, 0, NumberSpinnerComponentRefDirective, [Injector, NumberSpinnerComponent, ElementRef, FrameContext], null, null), ɵdid(9, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = !_co.viewModel.stateMachine["editable"]; var currVal_9 = ɵinlineInterpolate(1, "", ɵunv(_v, 1, 1, _ck(_v, 2, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "NumberSpinner/totalPrice_559ae1d0_tdrx/placeHolder", _co.lang, "")), ""); var currVal_10 = 1; var currVal_11 = false; var currVal_12 = true; var currVal_13 = true; var currVal_14 = "left"; var currVal_15 = true; var currVal_16 = 2; var currVal_17 = true; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_18 = "totalPrice"; _ck(_v, 4, 0, currVal_18); _ck(_v, 7, 0); _ck(_v, 8, 0); var currVal_19 = (0 - 1); _ck(_v, 9, 0, currVal_19); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).hostClass; var currVal_1 = ɵnov(_v, 6).ngClassUntouched; var currVal_2 = ɵnov(_v, 6).ngClassTouched; var currVal_3 = ɵnov(_v, 6).ngClassPristine; var currVal_4 = ɵnov(_v, 6).ngClassDirty; var currVal_5 = ɵnov(_v, 6).ngClassValid; var currVal_6 = ɵnov(_v, 6).ngClassInvalid; var currVal_7 = ɵnov(_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_40(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "totalPrice"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"], textAlign: [2, "textAlign"], option: [3, "option"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = false; var currVal_9 = "number"; var currVal_10 = "left"; var currVal_11 = _co.totalPrice559ae1d0TdrxTextOptions; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = "totalPrice"; _ck(_v, 3, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_37(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "totalPrice_559ae1d0_tdrx"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_38)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_39)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_40)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("totalPrice"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "totalPrice_559ae1d0_tdrx", _co.lang, "\u8BA2\u5355\u91D1\u989D")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "totalPrice_559ae1d0_tdrx", _co.lang, "\u8BA2\u5355\u91D1\u989D")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_42(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_43(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 9, "farris-number-spinner", [["formControlName", "totalDiscounts"], ["id", "totalDiscounts_878ff42f_djm9"], ["input-end-edit", ""], ["numberSpinnerRef", ""]], [[2, "f-cmp-number-spinner", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent)), ɵdid(1, 4964352, null, 0, NumberSpinnerComponent, [ElementRef, Renderer2, Injector], { readonly: [0, "readonly"], placeholder: [1, "placeholder"], step: [2, "step"], bigNumber: [3, "bigNumber"], showButton: [4, "showButton"], useThousands: [5, "useThousands"], textAlign: [6, "textAlign"], canNull: [7, "canNull"], precision: [8, "precision"], showZero: [9, "showZero"] }, null), ɵppd(2, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [NumberSpinnerComponent]), ɵdid(4, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(6, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(7, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(8, 4407296, null, 0, NumberSpinnerComponentRefDirective, [Injector, NumberSpinnerComponent, ElementRef, FrameContext], null, null), ɵdid(9, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = !_co.viewModel.stateMachine["editable"]; var currVal_9 = ɵinlineInterpolate(1, "", ɵunv(_v, 1, 1, _ck(_v, 2, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "NumberSpinner/totalDiscounts_878ff42f_djm9/placeHolder", _co.lang, "")), ""); var currVal_10 = 1; var currVal_11 = false; var currVal_12 = true; var currVal_13 = true; var currVal_14 = "left"; var currVal_15 = true; var currVal_16 = 2; var currVal_17 = true; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_18 = "totalDiscounts"; _ck(_v, 4, 0, currVal_18); _ck(_v, 7, 0); _ck(_v, 8, 0); var currVal_19 = (0 - 1); _ck(_v, 9, 0, currVal_19); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).hostClass; var currVal_1 = ɵnov(_v, 6).ngClassUntouched; var currVal_2 = ɵnov(_v, 6).ngClassTouched; var currVal_3 = ɵnov(_v, 6).ngClassPristine; var currVal_4 = ɵnov(_v, 6).ngClassDirty; var currVal_5 = ɵnov(_v, 6).ngClassValid; var currVal_6 = ɵnov(_v, 6).ngClassInvalid; var currVal_7 = ɵnov(_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_44(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "totalDiscounts"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"], textAlign: [2, "textAlign"], option: [3, "option"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = false; var currVal_9 = "number"; var currVal_10 = "left"; var currVal_11 = _co.totalDiscounts878ff42fDjm9TextOptions; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = "totalDiscounts"; _ck(_v, 3, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_41(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "totalDiscounts_878ff42f_djm9"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_42)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_43)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_44)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("totalDiscounts"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "totalDiscounts_878ff42f_djm9", _co.lang, "\u6298\u6263\u4F18\u60E0")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "totalDiscounts_878ff42f_djm9", _co.lang, "\u6298\u6263\u4F18\u60E0")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_46(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_47(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 9, "farris-number-spinner", [["formControlName", "actualPay"], ["id", "actualPay_090e17ef_mvgt"], ["input-end-edit", ""], ["numberSpinnerRef", ""]], [[2, "f-cmp-number-spinner", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, View_NumberSpinnerComponent_0, RenderType_NumberSpinnerComponent)), ɵdid(1, 4964352, null, 0, NumberSpinnerComponent, [ElementRef, Renderer2, Injector], { readonly: [0, "readonly"], placeholder: [1, "placeholder"], step: [2, "step"], bigNumber: [3, "bigNumber"], showButton: [4, "showButton"], useThousands: [5, "useThousands"], textAlign: [6, "textAlign"], canNull: [7, "canNull"], precision: [8, "precision"], showZero: [9, "showZero"] }, null), ɵppd(2, 3), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [NumberSpinnerComponent]), ɵdid(4, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(6, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(7, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(8, 4407296, null, 0, NumberSpinnerComponentRefDirective, [Injector, NumberSpinnerComponent, ElementRef, FrameContext], null, null), ɵdid(9, 4276224, null, 0, ɵa, [ElementRef, Injector, Renderer2, [8, null]], { tabIndex: [0, "tabIndex"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = !_co.viewModel.stateMachine["editable"]; var currVal_9 = ɵinlineInterpolate(1, "", ɵunv(_v, 1, 1, _ck(_v, 2, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "NumberSpinner/actualPay_090e17ef_mvgt/placeHolder", _co.lang, "")), ""); var currVal_10 = 1; var currVal_11 = false; var currVal_12 = true; var currVal_13 = true; var currVal_14 = "left"; var currVal_15 = true; var currVal_16 = 2; var currVal_17 = true; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_18 = "actualPay"; _ck(_v, 4, 0, currVal_18); _ck(_v, 7, 0); _ck(_v, 8, 0); var currVal_19 = (0 - 1); _ck(_v, 9, 0, currVal_19); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).hostClass; var currVal_1 = ɵnov(_v, 6).ngClassUntouched; var currVal_2 = ɵnov(_v, 6).ngClassTouched; var currVal_3 = ɵnov(_v, 6).ngClassPristine; var currVal_4 = ɵnov(_v, 6).ngClassDirty; var currVal_5 = ɵnov(_v, 6).ngClassValid; var currVal_6 = ɵnov(_v, 6).ngClassInvalid; var currVal_7 = ɵnov(_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_48(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "actualPay"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"], textAlign: [2, "textAlign"], option: [3, "option"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = false; var currVal_9 = "number"; var currVal_10 = "left"; var currVal_11 = _co.actualPay090e17efMvgtTextOptions; _ck(_v, 1, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = "actualPay"; _ck(_v, 3, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_45(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "actualPay_090e17ef_mvgt"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_46)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_47)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_48)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("actualPay"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "actualPay_090e17ef_mvgt", _co.lang, "\u5408\u8BA1\u5B9E\u4ED8")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "actualPay_090e17ef_mvgt", _co.lang, "\u5408\u8BA1\u5B9E\u4ED8")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_50(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "farris-label-info text-danger"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["*"]))], null, null); }
            function View_BasicFormComponent_51(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 10, "input", [["class", "form-control"], ["formControlName", "remark"], ["id", "remark_71281e54_dqeo"], ["input-end-edit", ""], ["maxlength", "100"], ["tabindex", "-1"]], [[8, "readOnly", 0], [8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
                    var pd_0 = (ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                } if (("blur" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onTouched() !== false);
                    ad = (pd_1 && ad);
                } if (("compositionstart" === en)) {
                    var pd_2 = (ɵnov(_v, 1)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                } if (("compositionend" === en)) {
                    var pd_3 = (ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                } return ad; }, null, null)), ɵdid(1, 16384, null, 0, DefaultValueAccessor, [Renderer2, ElementRef, [2, COMPOSITION_BUFFER_MODE]], null, null), ɵdid(2, 540672, null, 0, MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), ɵprd(1024, null, NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [MaxLengthValidator]), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [DefaultValueAccessor]), ɵdid(5, 671744, null, 0, FormControlName, [[3, ControlContainer], [6, NG_VALIDATORS], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(7, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null), ɵdid(8, 212992, null, 0, InputEndEditDirective, [AppContext, ElementRef], null, null), ɵdid(9, 4341760, null, 0, FInputTipsDirective, [ElementRef, NgZone, Renderer2], { enableTips: [0, "enableTips"] }, null), ɵppd(10, 3)], function (_ck, _v) { var currVal_10 = "100"; _ck(_v, 2, 0, currVal_10); var currVal_11 = "remark"; _ck(_v, 5, 0, currVal_11); _ck(_v, 8, 0); var currVal_12 = true; _ck(_v, 9, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.viewModel.stateMachine["editable"]; var currVal_1 = ɵinlineInterpolate(1, "", ɵunv(_v, 0, 1, _ck(_v, 10, 0, ɵnov(_v.parent.parent.parent.parent.parent, 0), "TextBox/remark_71281e54_dqeo/placeHolder", _co.lang, "")), ""); var currVal_2 = (ɵnov(_v, 2).maxlength ? ɵnov(_v, 2).maxlength : null); var currVal_3 = ɵnov(_v, 7).ngClassUntouched; var currVal_4 = ɵnov(_v, 7).ngClassTouched; var currVal_5 = ɵnov(_v, 7).ngClassPristine; var currVal_6 = ɵnov(_v, 7).ngClassDirty; var currVal_7 = ɵnov(_v, 7).ngClassValid; var currVal_8 = ɵnov(_v, 7).ngClassInvalid; var currVal_9 = ɵnov(_v, 7).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
            function View_BasicFormComponent_52(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 5, "farris-text", [["formControlName", "remark"]], [[2, "f-component-text", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
                    var pd_0 = (ɵnov(_v, 1).changeTitle($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_TextComponent_0, RenderType_TextComponent)), ɵdid(1, 4440064, null, 0, TextComponent, [DateTimeHelperService, NumberHelperService, Injector, NgZone], { autoSize: [0, "autoSize"], type: [1, "type"] }, null), ɵprd(1024, null, NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [TextComponent]), ɵdid(3, 671744, null, 0, FormControlName, [[3, ControlContainer], [8, null], [8, null], [6, NG_VALUE_ACCESSOR], [2, ɵangular_packages_forms_forms_k]], { name: [0, "name"] }, null), ɵprd(2048, null, NgControl, null, [FormControlName]), ɵdid(5, 16384, null, 0, NgControlStatus, [[4, NgControl]], null, null)], function (_ck, _v) { var currVal_8 = false; var currVal_9 = "string"; _ck(_v, 1, 0, currVal_8, currVal_9); var currVal_10 = "remark"; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).cls; var currVal_1 = ɵnov(_v, 5).ngClassUntouched; var currVal_2 = ɵnov(_v, 5).ngClassTouched; var currVal_3 = ɵnov(_v, 5).ngClassPristine; var currVal_4 = ɵnov(_v, 5).ngClassDirty; var currVal_5 = ɵnov(_v, 5).ngClassValid; var currVal_6 = ɵnov(_v, 5).ngClassInvalid; var currVal_7 = ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_49(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 19, "div", [["class", "col-12 col-md-6 col-xl-3 col-el-2"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 18, "div", [["class", "farris-group-wrap"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 17, "div", [["class", "form-group farris-form-group"]], null, null, null, null, null)), ɵdid(3, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(4, { "form-group--has-tips": 0 }), (_l()(), ɵeld(5, 0, null, null, 6, "label", [["class", "col-form-label"], ["for", "remark_71281e54_dqeo"]], [[8, "title", 0]], null, null, null, null)), ɵppd(6, 3), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_50)), ɵdid(8, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(9, 0, null, null, 2, "span", [["class", "farris-label-text"]], null, null, null, null, null)), (_l()(), ɵted(10, null, ["", ""])), ɵppd(11, 3), (_l()(), ɵeld(12, 0, null, null, 7, "div", [["class", "farris-input-wrap"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_51)), ɵdid(14, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(15, 0, null, null, 1, "validationMessage", [], [[8, "hidden", 0]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), ɵdid(16, 573440, null, 0, ValidationMessageComponent, [ElementRef], { errors: [0, "errors"] }, null), (_l()(), ɵeld(17, 0, null, null, 0, "div", [["class", "farris-feedback"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_52)), ɵdid(19, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group farris-form-group"; var currVal_1 = _ck(_v, 4, 0, false); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = false; _ck(_v, 8, 0, currVal_3); var currVal_5 = _co.viewModel.stateMachine["editable"]; _ck(_v, 14, 0, currVal_5); var currVal_7 = _co.viewModel.form.getCardControlErrors("remark"); _ck(_v, 16, 0, currVal_7); var currVal_8 = !_co.viewModel.stateMachine["editable"]; _ck(_v, 19, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ɵinlineInterpolate(1, "", ɵunv(_v, 5, 0, _ck(_v, 6, 0, ɵnov(_v.parent.parent.parent.parent, 0), "remark_71281e54_dqeo", _co.lang, "\u5907\u6CE8")), ""); _ck(_v, 5, 0, currVal_2); var currVal_4 = ɵunv(_v, 10, 0, _ck(_v, 11, 0, ɵnov(_v.parent.parent.parent.parent, 0), "remark_71281e54_dqeo", _co.lang, "\u5907\u6CE8")); _ck(_v, 10, 0, currVal_4); var currVal_6 = !_co.viewModel.form.isShowValidationMsg; _ck(_v, 15, 0, currVal_6); }); }
            function View_BasicFormComponent_28(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 15, "fieldSet", [["class", " f-section-formgroup col-12 px-0"], ["id", "59cd9ebd-1817-49ec-b9c4-cc38d330585c"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "legend", [["class", "f-section-formgroup-legend"], ["farrisCollapse", ""]], null, null, null, null, null)), ɵdid(2, 4931584, null, 0, CollapseDirective, [ElementRef, Renderer2, LocaleService], { title: [0, "title"], collapse: [1, "collapse"], collapseText: [2, "collapseText"], expandText: [3, "expandText"] }, null), (_l()(), ɵeld(3, 0, null, null, 12, "div", [["class", "f-section-formgroup-inputs"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_29)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_33)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_37)), ɵdid(9, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_41)), ɵdid(11, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_45)), ɵdid(13, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_49)), ɵdid(15, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.FieldSetTitle59cd9ebd181749ecb9c4cc38d330585c; var currVal_1 = false; var currVal_2 = _co.FieldSetCollapseText59cd9ebd181749ecb9c4cc38d330585c; var currVal_3 = _co.FieldSetExpandText59cd9ebd181749ecb9c4cc38d330585c; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = true; _ck(_v, 5, 0, currVal_4); var currVal_5 = true; _ck(_v, 7, 0, currVal_5); var currVal_6 = true; _ck(_v, 9, 0, currVal_6); var currVal_7 = true; _ck(_v, 11, 0, currVal_7); var currVal_8 = true; _ck(_v, 13, 0, currVal_8); var currVal_9 = true; _ck(_v, 15, 0, currVal_9); }, null); }
            function View_BasicFormComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "div", [["class", "f-form-layout farris-form farris-form-controls-inline"], ["id", "basic-form-layout"]], [[2, "farris-form-controls-inline", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_3)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_28)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.viewModel.form; _ck(_v, 1, 0, currVal_8); var currVal_9 = true; _ck(_v, 5, 0, currVal_9); var currVal_10 = true; _ck(_v, 7, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.lang === "zh-CHS") || (_co.lang === "zh-CHT")); var currVal_1 = ɵnov(_v, 3).ngClassUntouched; var currVal_2 = ɵnov(_v, 3).ngClassTouched; var currVal_3 = ɵnov(_v, 3).ngClassPristine; var currVal_4 = ɵnov(_v, 3).ngClassDirty; var currVal_5 = ɵnov(_v, 3).ngClassValid; var currVal_6 = ɵnov(_v, 3).ngClassInvalid; var currVal_7 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
            function View_BasicFormComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 12, "farris-section", [["class", "f-section-form f-section-in-mainsubcard"], ["id", "basic-form-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), ɵqud(335544320, 6, { headerDirective: 0 }), ɵqud(335544320, 7, { headerTitleDirective: 0 }), ɵqud(335544320, 8, { headerContentDirective: 0 }), ɵqud(335544320, 9, { headerToolbarDirective: 0 }), ɵqud(335544320, 10, { extendDirective: 0 }), ɵqud(335544320, 11, { contentDirective: 0 }), ɵqud(335544320, 12, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), ɵdid(10, 4407296, null, 0, FarrisScrollSpyDirective, [ElementRef, FarrisScrollSpyService], { scrollId: [0, "scrollId"] }, null), (_l()(), ɵand(16777216, null, 0, 1, null, View_BasicFormComponent_2)), ɵdid(12, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectionbasicformsectionMainTitle; var currVal_7 = _co.SectionbasicformsectionSubTitle; var currVal_8 = true; var currVal_9 = false; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = "basic-form-section"; _ck(_v, 10, 0, currVal_14); var currVal_15 = true; _ck(_v, 12, 0, currVal_15); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
            function View_BasicFormComponent_0(_l) { return ɵvid(0, [ɵpid(0, LangPipe, [TranslateService, HttpClient]), ɵqud(671088640, 1, { merchant_Merchant_MerchantName_147deab4_1zy9: 0 }), ɵqud(671088640, 2, { orderPerson_771cf8b5_32o4: 0 }), ɵqud(402653184, 3, { conditionDialog: 0 }), ɵqud(402653184, 4, { qdpViewComponent: 0 }), ɵqud(402653184, 5, { queryFrameworkLayoutComponent: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_BasicFormComponent_1)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 7, 0, currVal_0); }, null); }
            function View_BasicFormComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 82, "app-basicformcomponent", [], [[8, "className", 0]], null, null, View_BasicFormComponent_0, RenderType_BasicFormComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, BasicFormViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, BasicFormViewmodelForm, []), ɵprd(4608, null, UIState, BasicFormViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [SaleOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(79, 4440064, null, 0, BasicFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, ComponentManagerService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "basic-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
            var BasicFormComponentNgFactory = ɵccf("app-basicformcomponent", BasicFormComponent, View_BasicFormComponent_Host_0, {}, {}, []);

            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */ 
            var styles_RootComponent = [styles];
            var RenderType_RootComponent = ɵcrt({ encapsulation: 0, styles: styles_RootComponent, data: {} });
            function View_RootComponent_5(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "badge badge-border-warning"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u672A\u53D1\u8D27"]))], null, null); }
            function View_RootComponent_6(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "badge badge-border-info"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u5DF2\u53D1\u8D27"]))], null, null); }
            function View_RootComponent_7(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "span", [["class", "badge badge-border-success"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u5DF2\u6536\u8D27"]))], null, null); }
            function View_RootComponent_8(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 0, "span", [], null, null, null, null, null))], null, null); }
            function View_RootComponent_4(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 23, "div", [["class", "f-title"], ["id", "header-title-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 1, "span", [["class", "f-title-icon f-text-orna-bill"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 0, "i", [["class", "f-icon f-icon-page-title-record"]], null, null, null, null, null)), (_l()(), ɵeld(3, 0, null, null, 1, "h4", [["class", "f-title-text"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u9500\u552E\u8BA2\u5355\u5236\u5355"])), (_l()(), ɵeld(5, 0, null, null, 11, "h5", [["class", "f-title-subtitle"], ["style", "min-width:162px;"]], null, null, null, null, null)), (_l()(), ɵted(6, null, [" ", " "])), (_l()(), ɵeld(7, 0, null, null, 9, null, null, null, null, null, null, null)), ɵdid(8, 16384, null, 0, NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_5)), ɵdid(10, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_6)), ɵdid(12, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_7)), ɵdid(14, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_8)), ɵdid(16, 16384, null, 0, NgSwitchDefault, [ViewContainerRef, TemplateRef, NgSwitch], null, null), (_l()(), ɵeld(17, 0, null, null, 6, "div", [["class", "f-title-pagination"]], null, null, null, null, null)), (_l()(), ɵeld(18, 0, null, null, 2, "span", [["class", "f-icon f-icon-arrow-w"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = ((_co.viewModel.stateMachine["canEdit"] && _co.viewModel.ChangeItem1()) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), ɵdid(19, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(20, { "f-state-disabled": 0 }), (_l()(), ɵeld(21, 0, null, null, 2, "span", [["class", "f-icon f-icon-arrow-e"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
                    var pd_0 = ((_co.viewModel.stateMachine["canEdit"] && _co.viewModel.ChangeItem2()) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, null, null)), ɵdid(22, 278528, null, 0, NgClass, [IterableDiffers, KeyValueDiffers, ElementRef, Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), ɵpod(23, { "f-state-disabled": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.viewModel.bindingData["sendState"]; _ck(_v, 8, 0, currVal_1); var currVal_2 = "UnShipped"; _ck(_v, 10, 0, currVal_2); var currVal_3 = "Shipped"; _ck(_v, 12, 0, currVal_3); var currVal_4 = "Done"; _ck(_v, 14, 0, currVal_4); var currVal_5 = "f-icon f-icon-arrow-w"; var currVal_6 = _ck(_v, 20, 0, !_co.viewModel.stateMachine["canEdit"]); _ck(_v, 19, 0, currVal_5, currVal_6); var currVal_7 = "f-icon f-icon-arrow-e"; var currVal_8 = _ck(_v, 23, 0, !_co.viewModel.stateMachine["canEdit"]); _ck(_v, 22, 0, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.viewModel.bindingData["orderCode"]; _ck(_v, 6, 0, currVal_0); }); }
            function View_RootComponent_9(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 1, "f-response-toolbar", [["class", "col-7 f-toolbar"], ["id", "page-header-toolbar"]], [[2, "f-response-toolbar", null], [2, "position-relative", null]], [[null, "rtClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("rtClickEvent" === en)) {
                    var pd_0 = (_co.pageHeaderToolbarClickHandler($event) !== false);
                    ad = (pd_0 && ad);
                } return ad; }, View_ResponseToolbarComponent_0, RenderType_ResponseToolbarComponent)), ɵdid(1, 13090816, [["responsebar", 4]], 0, ResponseToolbarComponent, [ElementRef, Renderer2, ChangeDetectorRef, LocaleService], { datas: [0, "datas"], btnState: [1, "btnState"], btnVisible: [2, "btnVisible"], buttonSize: [3, "buttonSize"], popDirection: [4, "popDirection"] }, { rtClickEvent: "rtClickEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.pageHeaderToolbarToolbarItems; var currVal_3 = _co.pageHeaderToolbarToolbarItemsStates; var currVal_4 = _co.pageHeaderToolbarToolbarItemsVisibleStates; var currVal_5 = "default"; var currVal_6 = "default"; _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).frtCls; var currVal_1 = ɵnov(_v, 1).prCls; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
            function View_RootComponent_3(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-page-header-base"], ["id", "header-nav"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_4)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_9)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_1 = true; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_RootComponent_10(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
            function View_RootComponent_11(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "state_icon"], ["style", "background-image: url('/apps/hotwave/ordermgr/web/assets/todo.svg');"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u73B0\u91D1"]))], null, null); }
            function View_RootComponent_12(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "state_icon"], ["style", "background-image: url('/apps/hotwave/ordermgr/web/assets/doing.svg');"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u5FAE\u4FE1"]))], null, null); }
            function View_RootComponent_13(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "state_icon"], ["style", "background-image: url('/apps/hotwave/ordermgr/web/assets/doing.svg');"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u652F\u4ED8\u5B9D"]))], null, null); }
            function View_RootComponent_14(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "state_icon"], ["style", "background-image: url('/apps/hotwave/ordermgr/web/assets/done.svg');"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u94F6\u8054"]))], null, null); }
            function View_RootComponent_15(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
            function View_RootComponent_16(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "state_icon"], ["style", "background-image: url('/apps/hotwave/ordermgr/web/assets/todo.svg');"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u672A\u53D1\u8D27"]))], null, null); }
            function View_RootComponent_17(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "state_icon"], ["style", "background-image: url('/apps/hotwave/ordermgr/web/assets/doing.svg');"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u5DF2\u53D1\u8D27"]))], null, null); }
            function View_RootComponent_18(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 0, "span", [["class", "state_icon"], ["style", "background-image: url('/apps/hotwave/ordermgr/web/assets/doing.svg');"]], null, null, null, null, null)), (_l()(), ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u5DF2\u6536\u8D27"]))], null, null); }
            function View_RootComponent_2(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 77, "div", [["class", "f-page-header"], ["id", "page-header"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_3)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵeld(3, 0, null, null, 74, "fe-collapsible-area", [["id", "scrollCollapsibleArea"]], [[2, "fe-cmp-collapsible-area", null]], null, null, View_FECollapsibleAreaComponent_0, RenderType_FECollapsibleAreaComponent)), ɵdid(4, 4308992, null, 0, FECollapsibleAreaComponent, [NgZone, ElementRef], { defaultCollapse: [0, "defaultCollapse"] }, null), (_l()(), ɵeld(5, 0, null, 0, 72, "div", [["class", "d-flex no-gutters"], ["style", "border-top: 1px dashed #D1DEE7;padding:6px 18px 18px 56px;font-size:12px;color: rgba(0,0,0,0.70);"]], null, null, null, null, null)), (_l()(), ɵeld(6, 0, null, null, 17, "div", [["class", "d-none d-lg-block col-2 pr-3"]], null, null, null, null, null)), (_l()(), ɵeld(7, 0, null, null, 1, "p", [["style", "margin:0 0 4px 0;font-size:13px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u57FA\u672C\u4FE1\u606F"])), (_l()(), ɵeld(9, 0, null, null, 4, "p", [["class", "mb-0 text-truncate"]], null, null, null, null, null)), (_l()(), ɵeld(10, 0, null, null, 1, "span", [["class", "f-text-lighter"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u8BA2\u5355\u7F16\u53F7\uFF1A"])), (_l()(), ɵeld(12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(13, null, ["", ""])), (_l()(), ɵeld(14, 0, null, null, 4, "p", [["class", "mb-0 text-truncate"]], null, null, null, null, null)), (_l()(), ɵeld(15, 0, null, null, 1, "span", [["class", "f-text-lighter"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u4E0B\u5355\u4EBA\uFF1A"])), (_l()(), ɵeld(17, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(18, null, ["", ""])), (_l()(), ɵeld(19, 0, null, null, 4, "p", [["class", "mb-0 text-truncate"]], null, null, null, null, null)), (_l()(), ɵeld(20, 0, null, null, 1, "span", [["class", "f-text-lighter"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u4E0B\u5355\u65F6\u95F4\uFF1A"])), (_l()(), ɵeld(22, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), ɵted(23, null, ["", ""])), (_l()(), ɵeld(24, 0, null, null, 30, "div", [["class", "d-none d-lg-block col-2 pr-3"]], null, null, null, null, null)), (_l()(), ɵeld(25, 0, null, null, 1, "p", [["style", "margin:0 0 4px 0;font-size:13px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u652F\u4ED8\u4FE1\u606F"])), (_l()(), ɵeld(27, 0, null, null, 14, "p", [["class", "mb-0 text-truncate"]], null, null, null, null, null)), (_l()(), ɵeld(28, 0, null, null, 1, "span", [["class", "f-text-lighter"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u652F\u4ED8\u65B9\u5F0F\uFF1A"])), (_l()(), ɵeld(30, 0, null, null, 11, null, null, null, null, null, null, null)), ɵdid(31, 16384, null, 0, NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_10)), ɵdid(33, 16384, null, 0, NgSwitchDefault, [ViewContainerRef, TemplateRef, NgSwitch], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_11)), ɵdid(35, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_12)), ɵdid(37, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_13)), ɵdid(39, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_14)), ɵdid(41, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵeld(42, 0, null, null, 12, "p", [["class", "mb-0 text-truncate"]], null, null, null, null, null)), (_l()(), ɵeld(43, 0, null, null, 1, "span", [["class", "f-text-lighter"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u53D1\u8D27\u72B6\u6001\uFF1A"])), (_l()(), ɵeld(45, 0, null, null, 9, null, null, null, null, null, null, null)), ɵdid(46, 16384, null, 0, NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_15)), ɵdid(48, 16384, null, 0, NgSwitchDefault, [ViewContainerRef, TemplateRef, NgSwitch], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_16)), ɵdid(50, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_17)), ɵdid(52, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_18)), ɵdid(54, 278528, null, 0, NgSwitchCase, [ViewContainerRef, TemplateRef, NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), ɵeld(55, 0, null, null, 22, "div", [["class", "col-12 col-lg-8 col-xl-6"], ["style", "padding:0!important;"]], null, null, null, null, null)), (_l()(), ɵeld(56, 0, null, null, 21, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), ɵeld(57, 0, null, null, 6, "div", [["class", "col-4 pr-3"]], null, null, null, null, null)), (_l()(), ɵeld(58, 0, null, null, 1, "p", [["style", "margin:0;font-size:13px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u8BA2\u5355\u91D1\u989D"])), (_l()(), ɵeld(60, 0, null, null, 3, "p", [["style", "font-size:24px;color:#FF6C29;font-weight:700;margin:0;height:38px;"]], null, null, null, null, null)), (_l()(), ɵted(61, null, [" ", " "])), (_l()(), ɵeld(62, 0, null, null, 1, "span", [["style", "font-size:15px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, [" RMB"])), (_l()(), ɵeld(64, 0, null, null, 6, "div", [["class", "col-4 pr-3"]], null, null, null, null, null)), (_l()(), ɵeld(65, 0, null, null, 1, "p", [["style", "margin:0;font-size:13px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u6298\u6263\u4F18\u60E0"])), (_l()(), ɵeld(67, 0, null, null, 3, "p", [["style", "font-size:24px;color: #51BD78;font-weight:700;margin:0;height:38px;"]], null, null, null, null, null)), (_l()(), ɵted(68, null, [" ", " "])), (_l()(), ɵeld(69, 0, null, null, 1, "span", [["style", "font-size:15px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, [" RMB"])), (_l()(), ɵeld(71, 0, null, null, 6, "div", [["class", "col-4 pr-3"]], null, null, null, null, null)), (_l()(), ɵeld(72, 0, null, null, 1, "p", [["style", "margin:0;font-size:13px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["\u5408\u8BA1\u652F\u4ED8"])), (_l()(), ɵeld(74, 0, null, null, 3, "p", [["style", "font-size:24px;color: rgba(67,80,105,0.70);font-weight:700;margin:0;height:38px;"]], null, null, null, null, null)), (_l()(), ɵted(75, null, [" ", " "])), (_l()(), ɵeld(76, 0, null, null, 1, "span", [["style", "font-size:15px;"]], null, null, null, null, null)), (_l()(), ɵted(-1, null, ["RMB"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = true; _ck(_v, 2, 0, currVal_0); var currVal_2 = !!(!!_co.viewModel.bindingData["id"] ? _co.viewModel.stateMachine["editable"] : _co.viewModel.stateMachine["collapseForTop"]); _ck(_v, 4, 0, currVal_2); var currVal_6 = _co.viewModel.bindingData.payMethod; _ck(_v, 31, 0, currVal_6); var currVal_7 = "Cash"; _ck(_v, 35, 0, currVal_7); var currVal_8 = "Wechat"; _ck(_v, 37, 0, currVal_8); var currVal_9 = "ALiPay"; _ck(_v, 39, 0, currVal_9); var currVal_10 = "UPay"; _ck(_v, 41, 0, currVal_10); var currVal_11 = _co.viewModel.bindingData.sendState; _ck(_v, 46, 0, currVal_11); var currVal_12 = "UnShipped"; _ck(_v, 50, 0, currVal_12); var currVal_13 = "Shipped"; _ck(_v, 52, 0, currVal_13); var currVal_14 = "Done"; _ck(_v, 54, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = ɵnov(_v, 4).cls; _ck(_v, 3, 0, currVal_1); var currVal_3 = _co.viewModel.bindingData.orderCode; _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.viewModel.bindingData.orderPerson.orderPerson_Name; _ck(_v, 18, 0, currVal_4); var currVal_5 = _co.viewModel.bindingData.orderTime; _ck(_v, 23, 0, currVal_5); var currVal_15 = _co.viewModel.bindingData.totalPrice; _ck(_v, 61, 0, currVal_15); var currVal_16 = _co.viewModel.bindingData.totalDiscounts; _ck(_v, 68, 0, currVal_16); var currVal_17 = _co.viewModel.bindingData.actualPay; _ck(_v, 75, 0, currVal_17); }); }
            function View_RootComponent_23(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 95, "farris-section", [["class", "f-section-in-mainsubcard"], ["id", "section-orderdetail"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, View_FarrisSectionComponent_0, RenderType_FarrisSectionComponent)), ɵdid(1, 245760, null, 7, FarrisSectionComponent, [[2, Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], fill: [4, "fill"], expandStatus: [5, "expandStatus"], index: [6, "index"], toolbar: [7, "toolbar"], btnStates: [8, "btnStates"], btnVisible: [9, "btnVisible"] }, null), ɵqud(335544320, 5, { headerDirective: 0 }), ɵqud(335544320, 6, { headerTitleDirective: 0 }), ɵqud(335544320, 7, { headerContentDirective: 0 }), ɵqud(335544320, 8, { headerToolbarDirective: 0 }), ɵqud(335544320, 9, { extendDirective: 0 }), ɵqud(335544320, 10, { contentDirective: 0 }), ɵqud(335544320, 11, { viewChangeDirective: 0 }), ɵdid(9, 212992, null, 0, SectionComponentRefDirective, [Injector, FarrisSectionComponent, ElementRef, FrameContext], null, null), ɵdid(10, 4407296, null, 0, FarrisScrollSpyDirective, [ElementRef, FarrisScrollSpyService], { scrollId: [0, "scrollId"] }, null), (_l()(), ɵeld(11, 0, null, 0, 84, "app-orderdetailcomponent", [], [[8, "className", 0]], null, null, View_OrderdetailComponent_0, RenderType_OrderdetailComponent)), ɵprd(4608, null, ViewModel, OrderdetailComponentViewmodel, []), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p1_0, p1_1, p1_2) { return [new orderdetailAddItem1Handler(p0_0), new orderdetailRemoveItem1Handler(p1_0, p1_1, p1_2)]; }, [SubListDataService, DataGridService, SubListDataService, ListDataService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, GRID_SETTINGS_HTTP, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, Form, OrderdetailComponentViewmodelForm, []), ɵprd(4608, null, UIState, OrderdetailComponentViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [SaleOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(92, 4440064, null, 0, OrderdetailComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, CommonUtils, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "orderdetail-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, [])], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectionsectionorderdetailMainTitle; var currVal_7 = _co.SectionsectionorderdetailSubTitle; var currVal_8 = true; var currVal_9 = false; var currVal_10 = false; var currVal_11 = true; var currVal_12 = _co.index; var currVal_13 = _co.toolbarOrderdetail; var currVal_14 = _co.sectionsToolbarStates; var currVal_15 = _co.sectionsToolbarVisibleStates; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); _ck(_v, 9, 0); var currVal_16 = "section-orderdetail"; _ck(_v, 10, 0, currVal_16); _ck(_v, 92, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).baseCls; var currVal_1 = ɵnov(_v, 1).maxStatus; var currVal_2 = ɵnov(_v, 1).fillCls; var currVal_3 = ɵnov(_v, 1).enableAccordionCls; var currVal_4 = ɵnov(_v, 1).enableCollapseCls; var currVal_5 = ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_17 = ɵnov(_v, 92).cls; _ck(_v, 11, 0, currVal_17); }); }
            function View_RootComponent_22(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 2, "div", [["class", "f-struct-wrapper"], ["id", "detail-container-orderdetail"]], null, null, null, null, null)), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_23)), ɵdid(2, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_RootComponent_21(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 85, "div", [["class", "f-struct-like-card"], ["id", "like-card-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 82, "app-basicformcomponent", [], [[8, "className", 0]], null, null, View_BasicFormComponent_0, RenderType_BasicFormComponent)), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, ViewModel, BasicFormViewmodel, []), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, BasicFormViewmodelForm, []), ɵprd(4608, null, UIState, BasicFormViewmodelUIState, []), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(2048, null, Repository, null, [SaleOrderRepository]), ɵprd(131584, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(512, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(512, null, FormControlService, FormControlService, []), ɵprd(512, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(512, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵdid(80, 4440064, null, 0, BasicFormComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FocusInvalidService, ComponentManagerService, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "basic-form-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, EXCEPTION_HANDLER, null, []), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_22)), ɵdid(85, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { _ck(_v, 80, 0); var currVal_1 = true; _ck(_v, 85, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 80).cls; _ck(_v, 1, 0, currVal_0); }); }
            function View_RootComponent_20(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 4, "div", [["class", "f-scrollspy-content d-block"], ["fScrollSpyContainer", ""], ["fe-scroll-area", ""], ["id", "scrollspy-container"]], [[4, "position", null]], null, null, null, null)), ɵdid(1, 4407296, null, 0, FscrollSpyContainerDirective, [ElementRef, FarrisScrollSpyService, ChangeDetectorRef], { fOffset: [0, "fOffset"], fScrollGroupId: [1, "fScrollGroupId"] }, null), ɵdid(2, 212992, null, 0, FEScrollAreaDirective, [ElementRef], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_21)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = 0; var currVal_2 = ""; _ck(_v, 1, 0, currVal_1, currVal_2); _ck(_v, 2, 0); var currVal_3 = true; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 1).position; _ck(_v, 0, 0, currVal_0); }); }
            function View_RootComponent_19(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 6, "div", [["class", "f-page-main h-100"], ["id", "main-container"]], null, null, null, null, null)), (_l()(), ɵeld(1, 0, null, null, 3, "farris-scrollspy", [["id", "scrollspy"], ["scrollspyRef", ""]], [[8, "hidden", 0]], null, null, View_ScrollspyComponent_0, RenderType_ScrollspyComponent)), ɵdid(2, 4308992, null, 1, ScrollspyComponent, [ElementRef, FarrisScrollSpyService, ChangeDetectorRef], { currentSectionId: [0, "currentSectionId"], fFollowType: [1, "fFollowType"], scrollspyData: [2, "scrollspyData"] }, null), ɵqud(335544320, 4, { scrollspyTemplate: 0 }), ɵdid(4, 212992, null, 0, ScrollspyComponentRefDirective, [Injector, ScrollspyComponent, ElementRef, FrameContext], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_20)), ɵdid(6, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.ScrollspyCurrentSectionscrollspy; var currVal_2 = ((!!_co.viewModel.bindingData["id"] ? _co.viewModel.stateMachine["editable"] : _co.viewModel.stateMachine["collapseForTop"]) ? "fixedTab" : "side"); var currVal_3 = _co.ScrollspyItemsscrollspy; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3); _ck(_v, 4, 0); var currVal_4 = true; _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = !true; _ck(_v, 1, 0, currVal_0); }); }
            function View_RootComponent_1(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 7, "div", [["class", "f-page f-page-card f-page-is-mainsubcard f-page-is-sidescrollspy"], ["id", "root-layout"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
                    var pd_0 = (ɵnov(_v, 1).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                } if (("reset" === en)) {
                    var pd_1 = (ɵnov(_v, 1).onReset() !== false);
                    ad = (pd_1 && ad);
                } return ad; }, null, null)), ɵdid(1, 540672, null, 0, FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), ɵprd(2048, null, ControlContainer, null, [FormGroupDirective]), ɵdid(3, 16384, null, 0, NgControlStatusGroup, [[4, ControlContainer]], null, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_2)), ɵdid(5, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_19)), ɵdid(7, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.viewModel.form; _ck(_v, 1, 0, currVal_7); var currVal_8 = true; _ck(_v, 5, 0, currVal_8); var currVal_9 = true; _ck(_v, 7, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 3).ngClassUntouched; var currVal_1 = ɵnov(_v, 3).ngClassTouched; var currVal_2 = ɵnov(_v, 3).ngClassPristine; var currVal_3 = ɵnov(_v, 3).ngClassDirty; var currVal_4 = ɵnov(_v, 3).ngClassValid; var currVal_5 = ɵnov(_v, 3).ngClassInvalid; var currVal_6 = ɵnov(_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
            function View_RootComponent_0(_l) { return ɵvid(0, [ɵqud(402653184, 1, { conditionDialog: 0 }), ɵqud(402653184, 2, { qdpViewComponent: 0 }), ɵqud(402653184, 3, { queryFrameworkLayoutComponent: 0 }), (_l()(), ɵand(16777216, null, null, 1, null, View_RootComponent_1)), ɵdid(4, 16384, null, 0, NgIf, [ViewContainerRef, TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 4, 0, currVal_0); }, null); }
            function View_RootComponent_Host_0(_l) { return ɵvid(0, [(_l()(), ɵeld(0, 0, null, null, 119, "app-rootcomponent", [], [[8, "className", 0]], null, null, View_RootComponent_0, RenderType_RootComponent)), ɵprd(4608, null, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵprd(135680, null, FrameContext, FrameContext, [Injector, [3, FrameContext]]), ɵprd(4608, null, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵprd(4608, null, ViewModel, RootViewmodel, []), ɵprd(135680, null, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵprd(4608, null, CommandService, CommandService, [ViewModel, AppContext]), ɵprd(4608, null, CardDataService, CardDataService, [FormMessageService, FrameContext, FormLoadingService, FormNotifyService, [2, LanguageService], FormErrorService, RuntimeFrameworkService, CommandService]), ɵprd(4608, null, NavigationMiddlewareService, NavigationMiddlewareService, [NavigationService$2, FrameContext, FormMessageService, [2, LanguageService], CardDataService]), ɵprd(4608, null, StateMachineService, StateMachineService, [StateMachine]), ɵprd(135680, null, SaleOrderRepository, SaleOrderRepository, [Injector]), ɵprd(6144, null, Repository, null, [SaleOrderRepository]), ɵprd(4608, null, ValidationService, ValidationService, [Repository, FrameContext, [2, FormNotifyService], [2, LanguageService]]), ɵprd(4608, null, EndEditService, EndEditService, [FrameContext]), ɵprd(4608, null, PaginationService, PaginationService, [Injector, FrameContext]), ɵprd(4608, null, ChangeItemService, ChangeItemService, [Repository, FrameContext, FormNotifyService, LanguageService]), ɵprd(5120, null, COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p2_1, p3_0, p3_1, p4_0, p4_1, p5_0, p5_1, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3, p7_4, p8_0, p8_1, p8_2, p8_3, p9_0, p9_1, p9_2, p9_3) { return [new Load1Handler(p0_0, p0_1), new LoadAndAdd1Handler(p1_0, p1_1), new LoadAndView1Handler(p2_0, p2_1), new LoadAndEdit1Handler(p3_0, p3_1), new Add1Handler(p4_0, p4_1), new Edit1Handler(p5_0, p5_1), new Save1Handler(p6_0, p6_1, p6_2, p6_3), new Cancel1Handler(p7_0, p7_1, p7_2, p7_3, p7_4), new ChangeItem1Handler(p8_0, p8_1, p8_2, p8_3), new ChangeItem2Handler(p9_0, p9_1, p9_2, p9_3)]; }, [NavigationMiddlewareService, CommandService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, CardDataService, StateMachineService, ValidationService, EndEditService, CardDataService, StateMachineService, ValidationService, EndEditService, PaginationService, CardDataService, StateMachineService, ChangeItemService, PaginationService, CardDataService, StateMachineService, ChangeItemService, PaginationService, CardDataService, StateMachineService]), ɵprd(4608, null, CommandHandlerRegistry, CommandHandlerRegistry, [[2, COMMAND_HANDLERS_TOKEN]]), ɵprd(4608, null, CommandHandlerExtenderRegistry, CommandHandlerExtenderRegistry, [[2, COMMAND_HANDLER_EXTENDERS_TOKEN]]), ɵprd(4608, null, CommandHandlerFactory, CommandHandlerFactory, [CommandHandlerRegistry, CommandHandlerExtenderRegistry, FrameContext, VariableParseService]), ɵprd(4608, null, CommandBus, CommandBus, [CommandHandlerFactory]), ɵprd(4608, null, BindingPathService, BindingPathService, [Injector, AppContext, Repository]), ɵprd(4608, null, FormControlService, FormControlService, []), ɵprd(4608, null, FrameContextService, FrameContextService, [Injector, AppContext, FrameContext, Repository, BindingPathService, FormControlService]), ɵprd(4608, null, FocusInvalidService, FocusInvalidService, [Repository, FrameContext, FrameContextService, FormControlService]), ɵprd(4608, null, UIStateService, UIStateService, []), ɵprd(135680, null, BindingData, BindingData, []), ɵprd(4608, null, BindingDataService, BindingDataService, [BindingData, AppContext]), ɵprd(4608, null, EntityTraversingService, EntityTraversingService, [FrameContext]), ɵprd(4608, null, EntityManipulationService, EntityManipulationService, [FrameContext]), ɵprd(4608, null, EntityAggregationService, EntityAggregationService, [FrameContext]), ɵprd(4608, null, EntityListService, EntityListService, [BindingData]), ɵprd(4608, null, EntityService, EntityService, [FrameContext]), ɵprd(4608, null, ListDataService, ListDataService, [FormMessageService, Repository, BindingData, FormLoadingService, [2, LanguageService], FormNotifyService, FormErrorService, ViewModel, FilterConditionService]), ɵprd(4608, null, TreeDataService, TreeDataService, [FrameContext, FormMessageService, FormLoadingService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, SubTreeDataService, SubTreeDataService, [FrameContext, ViewModel, FormMessageService, FormLoadingService, FormErrorService, FormNotifyService, [2, LanguageService]]), ɵprd(4608, null, SubListDataService, SubListDataService, [FormMessageService, Repository, FormLoadingService, ViewModel, [2, LanguageService], FormNotifyService, FormErrorService]), ɵprd(4608, null, RemoveDataService, RemoveDataService, [FrameContext]), ɵprd(4608, null, SaveDataService, SaveDataService, [FrameContext]), ɵprd(4608, null, EditDataService, EditDataService, [FrameContext]), ɵprd(4608, null, FilterConditionDataService, FilterConditionDataService, [ViewModel, FilterConditionService, CommandService]), ɵprd(4608, null, RemoteSummaryService, RemoteSummaryService, [ViewModel]), ɵprd(4608, null, BeActionService, BeActionService, [Repository, FormLoadingService, FormMessageService, FormNotifyService, FormErrorService, [2, LanguageService]]), ɵprd(4608, null, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵprd(4608, null, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵprd(4608, null, ApproveService, ApproveService, [FormLoadingService, BeActionService, FormMessageService, FormNotifyService, [2, LanguageService], FormErrorService, FrameContext, [2, WFSubmiteService], [2, WFFlowchartService], [2, WfTaskHandlerService]]), ɵprd(4608, null, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵprd(4608, null, PrintService, PrintService, [FormMessageService, LanguageService, CloudprintService, [2, FormNotifyService]]), ɵprd(4608, null, AttachmentDataService, AttachmentDataService, [FrameContext, FormLoadingService]), ɵprd(4608, null, AttachmentService, AttachmentService, [FrameContext, AttachmentDataService, FormNotifyService, UploadDialogService, [2, DownloadService]]), ɵprd(4608, null, FileService, FileService, [FrameContext, AttachmentDataService, EntityService, SubListDataService, FormNotifyService, LanguageService, ListDataService, [2, FormLoadingService]]), ɵprd(4608, null, GridMiddlewareService, GridMiddlewareService, [FrameContext, FormMessageService, [2, LanguageService], ViewModel, CommandService]), ɵprd(4608, null, SidebarService, SidebarService, [FrameContext, FarrisSidebarService, FormMessageService, [2, LanguageService]]), ɵprd(4608, null, FarrisFormService, FarrisFormService, [[2, FARRIS_FORM_COMPONENTS]]), ɵprd(4608, null, DialogService, DialogService, [BsModalService, FarrisFormService, ComponentFactoryResolver, FrameContext, [2, Injector]]), ɵprd(4608, null, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵprd(4608, null, AuthorityService, AuthorityService, []), ɵprd(4608, null, FrameworkSessionService, FrameworkSessionService, [[2, SessionService]]), ɵprd(4608, null, QUERYSOLUTION_HANDLER_TOKEN, ɵb, [FrameContext, FrameworkSessionService]), ɵprd(4608, null, LISTFILTER_HANDLER_TOKEN, ɵc, [FrameContext]), ɵprd(4608, null, BatchEditDialogService, BatchEditDialogService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService]), ɵprd(4608, null, ComponentManagerService, ComponentManagerService, []), ɵprd(4608, null, BatchEditService, BatchEditService, [Injector, ComponentManagerService, ViewModel, Repository, BatchEditDialogService, DateTimeHelperService, LanguageService, FormNotifyService]), ɵprd(4608, null, DiscussionGroupService, DiscussionGroupService, [Injector, FrameContext, FormLoadingService, RuntimeFrameworkService]), ɵprd(4608, null, DataGridService, DataGridService, []), ɵprd(4608, null, FormAttentionService, FormAttentionService, [Injector, FrameContext, AttentionService]), ɵprd(4608, null, FeatureEditorService, FeatureEditorService, [Injector, BsModalService, ComponentFactoryResolver, LocaleService, I18nService]), ɵprd(4608, null, FeatureDataService, FeatureDataService, [Injector, FeatureRepository, [2, LOCALE_ID]]), ɵprd(4608, null, FeatureEditService, FeatureEditService, [Injector, FeatureEditorService, FeatureDataService, FormLoadingService, FormNotifyService, LanguageService]), ɵprd(5120, null, RESOLVER_TOKEN, function (p0_0) { return [new EntityDependencyResolver(p0_0), new StateDependencyResolver(), new CommentDependencyResolver()]; }, [Repository]), ɵprd(4608, null, ResolverRegistry, ResolverRegistry, [Injector, [2, RESOLVER_TOKEN]]), ɵprd(4608, null, ResolveService, ResolveService, [Injector, ResolverRegistry]), ɵprd(4608, null, ExpressionExecutor, ExpressionExecutor, []), ɵprd(4608, null, ExpressionService, ExpressionService, [Injector, ResolveService, FrameContext, ExpressionExecutor]), ɵprd(4608, null, PopUpService, PopUpService, [Injector, FrameContext, Repository, LanguageService, FormMessageService]), ɵprd(4608, null, DirtyCheckingService, DirtyCheckingService, [Injector, ChangeDetectorRef, ApplicationRef]), ɵprd(4608, null, FormService, FormService, [Injector, AppContext, Repository]), ɵprd(4608, null, ViewModelService, ViewModelService, []), ɵprd(4608, null, FORM_MANIFEST_SERVICE_TOKEN, FormManifestService, [Injector, FORM_PATH_TOKEN, HttpClient]), ɵprd(4608, null, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, FormExpressionManifestService, [Injector, FrameContext, HttpClient, FORM_PATH_TOKEN, FORM_MANIFEST_SERVICE_TOKEN]), ɵprd(4608, null, MESSAGE_SERVICE_TOKEN, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵprd(4608, null, NOTIFY_SERVICE_TOKEN, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵprd(5120, null, FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [Injector, FrameContext, WorkFlowMessageService, WorkFlowMessage]), ɵprd(4608, null, QueryIndexService, QueryIndexService, [Repository, CacheService, Router, FrameworkService, FilterManagerService]), ɵprd(4608, null, FinishEventService, FinishEventService, [FinishLoadService]), ɵprd(4608, null, ServerSideToken, BefLookupRestService, [Repository, [2, FrameContext]]), ɵprd(4608, null, ComboServerSideToken, DefaultComboHttpService, [Repository]), ɵprd(4608, null, Form, RootViewmodelForm, []), ɵprd(4608, null, UIState, RootViewmodelUIState, []), ɵprd(4608, null, UriService, UriService, [BE_SERVER_URI_TOKEN]), ɵprd(4608, null, SaleOrderProxy, SaleOrderProxy, [HttpClient, UriService]), ɵprd(4608, null, Declaration, EventDeclaration, []), ɵprd(6144, null, TranslateToken, null, [LangService]), ɵprd(5120, null, LISTENER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2) { return [new UIStateChangeListener(p0_0, p0_1, p0_2, p0_3, p0_4), new RepositoryChangeListener(p1_0, p1_1, p1_2), new BindingDataChangeListener(p2_0, p2_1, p2_2)]; }, [Injector, UIState, NAMESPACE, FRAME_ID, BindingData, Injector, Repository, NAMESPACE, Injector, BindingData, NAMESPACE]), ɵprd(5120, null, EFFECTOR_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p1_0, p1_1, p1_2, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3, p4_0, p4_1, p4_2, p4_3, p5_0, p5_1, p5_2, p5_3, p5_4, p6_0, p6_1, p6_2, p6_3, p7_0, p7_1, p7_2, p7_3) { return [new RepositoryEffector(p0_0, p0_1, p0_2, p0_3), new UIStateEffector(p1_0, p1_1, p1_2), new ReadonlyEffector(p2_0, p2_1, p2_2), new DependencyEffector(p3_0, p3_1, p3_2, p3_3), new RelativeEffector(p4_0, p4_1, p4_2, p4_3), new ValidateEffector(p5_0, p5_1, p5_2, p5_3, p5_4), new RequiredEffector(p6_0, p6_1, p6_2, p6_3), new VisibleEffector(p7_0, p7_1, p7_2, p7_3)]; }, [Injector, Repository, NAMESPACE, BindingData, Injector, UIState, NAMESPACE, Injector, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, BindingData, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, Injector, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN, NAMESPACE, FrameContext, Injector, Repository, NAMESPACE, FrameContext, Injector, NAMESPACE, FrameContext, Repository]), ɵprd(4608, null, ListenerRegistry, ListenerRegistry, [[2, LISTENER_TOKEN], [2, Injector]]), ɵprd(4608, null, Listeners, Listeners, [[2, ListenerRegistry]]), ɵprd(4608, null, EffectorRegistry, EffectorRegistry, [Injector, [2, EFFECTOR_TOKEN]]), ɵprd(4608, null, EffectorFactory, EffectorFactory, [Injector, EffectorRegistry]), ɵprd(4608, null, ExpressionRegistry, ExpressionRegistry, [Injector, FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, [2, TranslateToken]]), ɵprd(4608, null, ExpressionEventEmitter, ExpressionEventEmitter, [Listeners]), ɵprd(4608, null, ExpressionResult, ExpressionResult, [Injector]), ɵprd(4608, null, ExpressionManager, ExpressionManager, [Injector, ResolveService, ExpressionExecutor, ExpressionRegistry, ExpressionResult, MESSAGE_SERVICE_TOKEN, NOTIFY_SERVICE_TOKEN]), ɵprd(4608, null, ExpressionResultFactory, ExpressionResultFactory, [Injector, ExpressionRegistry, ExpressionManager, ExpressionResult]), ɵprd(5120, null, EVENT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6, p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6) { return [new RepositoryAddEntityEventHandler(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6), new RepositoryRemoveEntityEventHandler(p1_0, p1_1, p1_2, p1_3, p1_4, p1_5, p1_6), new EntityValueChangedEventHandler(p2_0, p2_1, p2_2, p2_3, p2_4, p2_5, p2_6), new StateValueChangedEventHandler(p3_0, p3_1, p3_2, p3_3, p3_4, p3_5, p3_6), new RepositoryLoadEventHandler(p4_0, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6), new EntityUpdateEventHandler(p5_0, p5_1, p5_2, p5_3, p5_4, p5_5, p5_6), new BindingDataAppendObjectEventHandler(p6_0, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6), new BindingDataValueChangeEventHandler(p7_0, p7_1, p7_2, p7_3, p7_4, p7_5, p7_6), new BindingDataRemoveObjectEventHandler(p8_0, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6), new BindingDataLoadEventHandler(p9_0, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6), new BindingDataSelectionChangedEventHandler(p10_0, p10_1, p10_2, p10_3, p10_4, p10_5, p10_6)]; }, [Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult, Injector, Repository, BindingData, ExpressionRegistry, EffectorFactory, ExpressionExecutor, ExpressionResult]), ɵprd(4608, null, EventHandlerRegistry, EventHandlerRegistry, [[2, EVENT_HANDLER_TOKEN]]), ɵprd(4608, null, ExpressionEngineImpl, ExpressionEngineImpl, [Injector, ExpressionRegistry, ExpressionEventEmitter, ResolverRegistry, EventHandlerRegistry, ResolveService]), ɵprd(4608, null, EXCEPTION_HANDLER, ExceptionHandler, [FormErrorService, [2, LanguageService], AppContext]), ɵprd(4608, null, BACK_END_MESSAGE_HANDLER_TOKEN, BackEndMessageHandler, [Injector, FrameContext, TranslateToken]), ɵprd(512, null, LangService, LangService, [TranslateService]), ɵprd(512, null, LocalizationService, LocalizationService, [Injector, UserSettingsToken]), ɵprd(512, null, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵprd(512, null, StateMachine, RootViewmodelStateMachine, []), ɵdid(113, 4440064, null, 0, RootComponent, [WizardService, KeybindingService, LangService, ActivatedRoute, Router, ElementRef, LocalizationService, FrmI18nSettingService, FrameworkService, ApplicationParamService, VerifyDetailService, StateMachine, DomSanitizer, Injector], null, null), ɵprd(256, null, FRAME_ID, "root-component", []), ɵprd(256, null, NAMESPACE, "", []), ɵprd(256, null, PARAM_TYPE_TRANSFORM_TOKEN, false, []), ɵprd(256, null, FORM_ID, "71b7c83c-da25-4dcd-a5d3-27bab284178b", []), ɵprd(256, null, BE_SESSION_HANDLING_STRATEGY_TOKEN, "SeparatedSession", []), ɵprd(256, null, CHANGE_SET_POLICY_TOKEN, "valid", [])], function (_ck, _v) { _ck(_v, 113, 0); }, function (_ck, _v) { var currVal_0 = ɵnov(_v, 113).cls; _ck(_v, 0, 0, currVal_0); }); }
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
            var SaleOrderCardDemo1ModuleNgFactory = exports('SaleOrderCardDemo1ModuleNgFactory', ɵcmf(SaleOrderCardDemo1Module, [RootComponent], function (_l) { return ɵmod([ɵmpd(512, ComponentFactoryResolver, ɵCodegenComponentFactoryResolver, [[8, [LoadingComponentNgFactory, TooltipComponentNgFactory, ModalBackdropComponentNgFactory, ModalContainerComponentNgFactory, MessagerComponentNgFactory, NotifyContainerComponentNgFactory, PopoverContainerComponentNgFactory, PopupComponentNgFactory, ɵbNgFactory, ɵiNgFactory, ɵwNgFactory, ɵbfNgFactory, ɵcNgFactory, ɵeNgFactory, ɵbbNgFactory, ɵbcNgFactory, FileListComponentNgFactory, WfApprovalLogsComponentNgFactory, TimePickerPanelComponentNgFactory, CalendarComponentNgFactory, FarrisContextMenuComponentNgFactory, DataTableComponentNgFactory, TreeTableComponentNgFactory, LookupLeftComponentNgFactory, LookupTabsComponentNgFactory, LookupQuickSelectPanelComponentNgFactory, SingleListComponentNgFactory, FilterPanelComponentNgFactory, UIFlowchartComponentNgFactory, ɵEmptyOutletComponentNgFactory, LanguageTextPanelComponentNgFactory, EnumEditorComponentNgFactory, FilterEditorComponentNgFactory, SortEditorComponentNgFactory, ɵlNgFactory, DatagridTextboxComponentNgFactory, DatagridTextareaComponentNgFactory, ɵaNgFactory$1, ɵbNgFactory$1, ɵcNgFactory$1, ɵdNgFactory, ɵeNgFactory$1, ɵfNgFactory, ɵgNgFactory, ɵhNgFactory, ɵiNgFactory$1, ɵjNgFactory, ɵkNgFactory, DatagridEnumEditorComponentNgFactory, DatagridSortEditorComponentNgFactory, DatagridFilterEditorComponentNgFactory, TaskExecuteComponentNgFactory, TaskAssigninfoComponentNgFactory, ProcessSelectorComponentNgFactory, AssigneeInfoComponentNgFactory, TaskCommentComponentNgFactory, CommentManageComponentNgFactory, VerifyDetailComponentNgFactory, StringFilterCellComponentNgFactory, NumericFilterCellComponentNgFactory, BooleanFilterCellComponentNgFactory, DateFilterCellComponentNgFactory, StringFilterMenuComponentNgFactory, NumericFilterMenuComponentNgFactory, DateFilterMenuComponentNgFactory, BooleanFilterMenuComponentNgFactory, NgbTooltipWindowNgFactory, FileUploadComponentNgFactory, UploadDialogComponentNgFactory, ɵbNgFactory$2, QueryConditionComponentNgFactory, ɵcNgFactory$2, ɵeNgFactory$2, ɵaNgFactory$2, ProcessSelectorComponentNgFactory$1, WfWorkitemHandleComponentNgFactory, UserHelperComponentNgFactory, TaskAssignComponentNgFactory, TaskSignaddComponentNgFactory, TaskTransferComponentNgFactory, ɵaNgFactory$3, WindowComponentNgFactory, WindowTitleBarComponentNgFactory, DialogComponentNgFactory, DialogTitleBarComponentNgFactory, ɵdNgFactory$1, ɵfNgFactory$1, ɵgNgFactory$1, ɵhNgFactory$1, ɵbNgFactory$3, ɵcNgFactory$3, ɵdNgFactory$2, ɵeNgFactory$3, ɵfNgFactory$2, ɵgNgFactory$2, ɵhNgFactory$2, BatchEditDialogComponentNgFactory, ResultConfirmComponentNgFactory, DiscussionPersonnelComponentNgFactory, MultiDownloadInfoComponentNgFactory, FilterRowComponentNgFactory, FilterTextboxComponentNgFactory, FilterCheckboxComponentNgFactory, ConditionEditorComponentNgFactory, FilterDatalistComponentNgFactory, FilterRowPanelComponentNgFactory, FilterRowEditorComponentNgFactory, FilterSelectComponentNgFactory, OrganizationSelectorComponentNgFactory, GridOrganizationSelectorComponentNgFactory, DatagridSettingsComponentNgFactory, SimpleColumnsComponentNgFactory, NewSchemeComponentNgFactory, SchemeListComponentNgFactory, FEPageModalComponentNgFactory, FEModalBackdropComponentNgFactory, ɵaNgFactory$4, FeatureEditorComponentNgFactory, RtfAppComponentNgFactory$1, ColorPickerComponentNgFactory, RtfAppComponentNgFactory, ɵlNgFactory$1, ɵaNgFactory$5, ExpressioneditorComponentNgFactory, FilterConditionComponentNgFactory, FilterExpressionComponentNgFactory, RootComponentNgFactory]], [3, ComponentFactoryResolver], NgModuleRef]), ɵmpd(4608, NgLocalization, NgLocaleLocalization, [LOCALE_ID, [2, ɵangular_packages_common_common_a]]), ɵmpd(4608, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_j, []), ɵmpd(4608, FormBuilder, FormBuilder, []), ɵmpd(4608, CommonUtils, CommonUtils, []), ɵmpd(4608, RuntimeStateService, RuntimeStateService, [CommonUtils]), ɵmpd(4608, IdService, IdService, []), ɵmpd(4608, OverLayHiddenService, OverLayHiddenService, []), ɵmpd(4608, DialogService$1, DialogService$1, []), ɵmpd(135680, GridComponent, GridComponent, [BrowserSupportService, SelectionService, ElementRef, GroupInfoService, GroupsService, ChangeNotificationService, DetailsService, EditService$1, FilterService, PDFService, ResponsiveService, Renderer2, ExcelService, NgZone, ScrollSyncService, DomEventsService, ColumnResizingService, ChangeDetectorRef, ColumnReorderService, ColumnInfoService, NavigationService, SortService, LocalizationService$1]), ɵmpd(4608, DateTimeHelperService, DateTimeHelperService, []), ɵmpd(4608, NumberHelperService, NumberHelperService, []), ɵmpd(4608, FarrisKendoGridFormatService, FarrisKendoGridFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, FarrisTreetableFormatService, FarrisTreetableFormatService, []), ɵmpd(4608, LocaleService, LocaleService, [LOCALE_ID, CommonUtils, [2, FARRIS_LOCAL_CUSTOM_DATA]]), ɵmpd(4608, AttentionService, AttentionService, [RendererFactory2, NgZone]), ɵmpd(4608, PositioningService, PositioningService, [RendererFactory2, PLATFORM_ID]), ɵmpd(4608, ComponentLoaderFactory, ComponentLoaderFactory, [ComponentFactoryResolver, NgZone, Injector, PositioningService, ApplicationRef]), ɵmpd(4608, BsModalService, BsModalService, [RendererFactory2, ComponentLoaderFactory, NgZone]), ɵmpd(4608, NotifyService, NotifyService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, PaginationService$1, PaginationService$1, []), ɵmpd(4608, PopoverConfig, PopoverConfig, []), ɵmpd(4608, ColumnFormatService, ColumnFormatService, [DateTimeHelperService, NumberHelperService]), ɵmpd(4608, HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_g, [DOCUMENT, PLATFORM_ID, ɵangular_packages_common_http_http_e]), ɵmpd(4608, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_h, [HttpXsrfTokenExtractor, ɵangular_packages_common_http_http_f]), ɵmpd(5120, HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [ɵangular_packages_common_http_http_h]), ɵmpd(4608, LoadingService, LoadingService, [ApplicationRef, ComponentFactoryResolver, Injector]), ɵmpd(4608, ComboLocaleService, ComboLocaleService, [LocaleService]), ɵmpd(4608, PopupService, PopupService, [ApplicationRef, ComponentFactoryResolver, Injector, [2, POPUP_CONTAINER]]), ɵmpd(4608, MessagerService, MessagerService, [BsModalService, Injector]), ɵmpd(4608, ɵj, ɵj, []), ɵmpd(4608, ɵs, ɵs, []), ɵmpd(4608, ɵn, ɵn, []), ɵmpd(4608, ɵu, ɵu, []), ɵmpd(4608, ɵv, ɵv, [ɵu]), ɵmpd(4608, SessionService, SessionService, []), ɵmpd(4608, HttpService, HttpService, [HttpClient, SessionService]), ɵmpd(4608, ɵo, ɵo, []), ɵmpd(4608, ɵz, ɵz, []), ɵmpd(4608, ɵd, ɵd, [HttpService, HttpClient, ɵz]), ɵmpd(4608, ɵa$2, ɵa$2, [HttpService, HttpClient]), ɵmpd(4608, ɵy, ɵy, []), ɵmpd(4608, ɵa$1, ɵa$1, [HttpClient]), ɵmpd(4608, ɵb$1, ɵb$1, [HttpClient]), ɵmpd(4608, ɵc$1, ɵc$1, [HttpClient]), ɵmpd(4608, FrameworkVariableService, FrameworkVariableService, []), ɵmpd(4608, CookieService, CookieService, [DOCUMENT, PLATFORM_ID]), ɵmpd(4608, LanguageService$1, LanguageService$1, [CookieService]), ɵmpd(4608, FrmI18nSettingService, FrmI18nSettingService, [FrameworkVariableService, LanguageService$1, HttpService]), ɵmpd(4608, AppService, AppService, [HttpService, SessionService, [2, FrmI18nSettingService]]), ɵmpd(4608, WindowContainerService, WindowContainerService, []), ɵmpd(4608, WindowService, WindowService, [ComponentFactoryResolver, WindowContainerService]), ɵmpd(4608, CloudprintService, CloudprintService, [ɵa$1, ComponentFactoryResolver, ɵb$1, ɵc$1, Injector, ApplicationRef, NotifyService, AppService, WindowService, BsModalService]), ɵmpd(4608, WfApprovalLogsService, WfApprovalLogsService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, NgbDropdownConfig, NgbDropdownConfig, []), ɵmpd(4608, FarrisContextMenuService, FarrisContextMenuService, [ComponentFactoryResolver, Injector]), ɵmpd(4608, TreetableService, TreetableService, []), ɵmpd(4608, ResizeService$1, ResizeService$1, []), ɵmpd(4608, TTHotkeys, TTHotkeys, [EventManager]), ɵmpd(4608, QuerySolutionService, QuerySolutionService, []), ɵmpd(4608, FilterService$1, FilterService$1, []), ɵmpd(4608, ConvertorService, ConvertorService, []), ɵmpd(4608, SolutionService, SolutionService, []), ɵmpd(4608, ErrorHandler, ɵt, []), ɵmpd(4608, ValidatorMessagerService, ValidatorMessagerService, []), ɵmpd(4608, UiFlowchartService, UiFlowchartService, [HttpService]), ɵmpd(4608, WFFlowchartService, WFFlowchartService, [MessagerService, Injector, ComponentFactoryResolver, BsModalService]), ɵmpd(4608, TaskService, TaskService, [HttpService, MessagerService]), ɵmpd(4608, I18nService$2, I18nService$2, []), ɵmpd(4608, CacheStorageAbstract, CacheMemoryStorage, []), ɵmpd(4608, CacheService, CacheService, [[2, CacheStorageAbstract]]), ɵmpd(4608, FrmEventBus, FrmEventBus, []), ɵmpd(4608, FuncsService, FuncsService, [[2, FrameworkVariableService]]), ɵmpd(4608, FrameworkService, FrameworkService, [HttpService, Router, CacheService, SessionService, FrmEventBus, FuncsService, LoadingService$1, [2, AppService], [2, FrmI18nSettingService]]), ɵmpd(4608, WfTaskHandlerService, WfTaskHandlerService, [WfApprovalLogsService, WFFlowchartService, Injector, ComponentFactoryResolver, BsModalService, TaskService, NotifyService, I18nService$2, FrameworkService, ApplicationRef]), ɵmpd(4608, AppContextManager, AppContextManager, []), ɵmpd(135680, AppContext, AppContext, [[2, Injector], [2, AppContextManager], [3, AppContext]]), ɵmpd(4608, FormLoadingService, FormLoadingService, [LoadingService, [2, HideEventService], [2, AppContext]]), ɵmpd(4608, LanguageService, LanguageService, [[2, LOCALE_ID]]), ɵmpd(4608, FormMessageService, FormMessageService, [MessagerService, [2, LanguageService], LOCALE_ID]), ɵmpd(4608, FormNotifyService, FormNotifyService, [NotifyService, [2, LanguageService]]), ɵmpd(4608, FormErrorService, FormErrorService, [FormMessageService, [2, LanguageService]]), ɵmpd(4608, WizardService, WizardService, []), ɵmpd(4608, FormWizardService, FormWizardService, [WizardService]), ɵmpd(4608, CheckService, CheckService, []), ɵmpd(4608, DataCheckService, DataCheckService, [FormMessageService, FormNotifyService, [2, LanguageService]]), ɵmpd(4608, FrameEventBus, FrameEventBus, []), ɵmpd(4608, EventService, EventService, [FrameEventBus]), ɵmpd(4608, ComponentManagerService, ComponentManagerService, []), ɵmpd(4608, FilterService$2, FilterService$2, []), ɵmpd(4608, KeybindingService, KeybindingService, []), ɵmpd(4608, QuerystringService, QuerystringService, []), ɵmpd(4608, RuntimeFrameworkService, RuntimeFrameworkService, []), ɵmpd(4608, ParamService, ParamService, [QuerystringService, RuntimeFrameworkService]), ɵmpd(4608, MenuStateService, MenuStateService, []), ɵmpd(4608, NavigationEventService, NavigationEventService, [RuntimeFrameworkService, MenuStateService, QuerystringService]), ɵmpd(4608, NavigationService$2, NavigationService$2, [RuntimeFrameworkService, MenuStateService, NavigationEventService, QuerystringService, [2, FrameContext], [2, Injector], [2, LanguageService]]), ɵmpd(4608, RouterParamService, RouterParamService, []), ɵmpd(4608, RouterService, RouterService, [Router, RouterParamService, FrameworkService, [2, AppService], [2, MenuStateService], [2, LanguageService]]), ɵmpd(4608, ApplicationParamService, ApplicationParamService, [[2, ParamService], [2, RuntimeFrameworkService]]), ɵmpd(4608, FilterConditionService, FilterConditionService, []), ɵmpd(4608, UserSettingsToken, UserSettingsService, [Injector, [2, FrmI18nSettingService]]), ɵmpd(4608, VerifyDetailService, VerifyDetailService, [ComponentFactoryResolver, Injector, ApplicationRef]), ɵmpd(4608, IntlService, CldrIntlService, [LOCALE_ID]), ɵmpd(4608, DOMService, DOMService, []), ɵmpd(4608, CenturyViewService, CenturyViewService, []), ɵmpd(4608, DecadeViewService, DecadeViewService, []), ɵmpd(4608, MonthViewService, MonthViewService, [IntlService]), ɵmpd(4608, YearViewService, YearViewService, [IntlService]), ɵmpd(4608, WeekNamesService, WeekNamesService, [IntlService]), ɵmpd(135680, ResizeBatchService, ResizeBatchService, [NgZone]), ɵmpd(4608, NavigationService$3, NavigationService$3, [BusViewService]), ɵmpd(4608, DOMService$1, DOMService$1, []), ɵmpd(4608, HoursService, HoursService, [IntlService]), ɵmpd(4608, MinutesService, MinutesService, [IntlService]), ɵmpd(4608, SecondsService, SecondsService, [IntlService]), ɵmpd(4608, DayPeriodService, DayPeriodService, [IntlService]), ɵmpd(4608, NgbTooltipConfig, NgbTooltipConfig, []), ɵmpd(4608, TabService, TabService, [[2, TabConfig]]), ɵmpd(4608, UploadService, UploadService, [HttpService]), ɵmpd(4608, DownloadService, DownloadService, []), ɵmpd(4608, UploadDialogService, UploadDialogService, [BsModalService, ComponentFactoryResolver, Injector]), ɵmpd(4608, SolutionService$1, SolutionService$1, [NotifyService]), ɵmpd(4608, ConvertorService$1, ConvertorService$1, []), ɵmpd(4608, TaskCommentService, TaskCommentService, [HttpService]), ɵmpd(4608, TaskCommentUIState, TaskCommentUIState, []), ɵmpd(4608, TaskCommentViewModel, TaskCommentViewModel, [TaskCommentUIState, HttpService]), ɵmpd(4608, I18nService$3, I18nService$3, []), ɵmpd(4608, TaskCommentRepository, TaskCommentRepository, []), ɵmpd(4608, TaskService$1, TaskService$1, [HttpService]), ɵmpd(4608, UserService, UserService, [HttpClient, HttpService, SessionService]), ɵmpd(4608, I18nService$1, I18nService$1, []), ɵmpd(4608, WFSubmiteService, WFSubmiteService, [Injector, ComponentFactoryResolver, BsModalService, [2, I18nService$1]]), ɵmpd(4608, DialogContainerService, DialogContainerService, []), ɵmpd(4608, DialogService$2, DialogService$2, [ComponentFactoryResolver, DialogContainerService]), ɵmpd(4608, ɵe, ɵe, [HttpClient]), ɵmpd(4608, ConvertorService$2, ConvertorService$2, []), ɵmpd(4608, SolutionService$2, SolutionService$2, []), ɵmpd(4608, QuerySolutionService$1, QuerySolutionService$1, []), ɵmpd(135680, FarrisScrollSpyService, FarrisScrollSpyService, [NgZone]), ɵmpd(4608, DiscussionListService, DiscussionListService, []), ɵmpd(4608, FFileUploadAdaptUnifileConfigService, FFileUploadAdaptUnifileConfigService, [[2, FFileUploadAdaptUnifileConfigToken]]), ɵmpd(4608, UploadServerService, FfileuploadAdaptUnifileService, [UploadService, FFileUploadAdaptUnifileConfigService]), ɵmpd(4608, FFileUploaderService, FFileUploaderService, [[2, UploadServerService]]), ɵmpd(4608, FileViewerService, FileViewerService, [BsModalService, ComponentFactoryResolver, Injector, ɵa$2, MessagerService, CloudprintService, AppService]), ɵmpd(4608, FfilepreviewAdaptUnifileService, FfilepreviewAdaptUnifileService, [FileViewerService, FFileUploadAdaptUnifileConfigService, [2, DownloadService]]), ɵmpd(4608, EditorService, EditorService, []), ɵmpd(4608, I18nService, I18nService, [[2, LOCALE_ID]]), ɵmpd(4608, FEScrollCollapsibleAreaService, FEScrollCollapsibleAreaService, []), ɵmpd(4608, ɵc$2, ɵc$2, []), ɵmpd(4608, ɵb$2, ɵb$2, [ɵc$2, HttpClient]), ɵmpd(4608, ColorPickerService, ColorPickerService, []), ɵmpd(4608, RtfUIWebapiService, RtfUIWebapiService, []), ɵmpd(4608, RtfAppService, RtfAppService, [RtfUIWebapiService, HttpClient]), ɵmpd(4608, I18NresourceService, I18NresourceService, [RtfAppService]), ɵmpd(4608, ɵm, ɵm, []), ɵmpd(4608, ComboService, ComboService, [HttpClient, LoadingService, Injector]), ɵmpd(4608, ExpressionEventService, ExpressionEventService, []), ɵmpd(4608, RestfulService, RestfulService, [HttpClient]), ɵmpd(5120, "serverHost", ɵ2$2, []), ɵmpd(4608, ParasMappingManagerService, ParasMappingManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, ParasMappingService, ParasMappingService, [ParasMappingManagerService]), ɵmpd(4608, JointSearchManagerService, JointSearchManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, LcpService, LcpService, [RestfulService, SessionService, [2, "serverHost"], [2, "loadDataUri"], [2, "loadDataCol"]]), ɵmpd(4608, JointSearchService, JointSearchService, [JointSearchManagerService, LcpService]), ɵmpd(4608, SchemaManagerService, SchemaManagerService, [RestfulService, SessionService, "serverHost", [2, SchemaRenderExtendService]]), ɵmpd(4608, SchemaService, SchemaService, [SchemaManagerService, LcpService]), ɵmpd(4608, PrintIntegrationManagerService, PrintIntegrationManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, PrintIntegrationService, PrintIntegrationService, [PrintIntegrationManagerService]), ɵmpd(4608, ExpressionService$1, ExpressionService$1, [Injector, ApplicationRef, ComponentFactoryResolver, HttpClient]), ɵmpd(135680, FDropdownDirective, FDropdownDirective, [ElementRef, Renderer2]), ɵmpd(4608, FilterService$3, FilterService$3, [Injector, ApplicationRef, ComponentFactoryResolver, HttpClient]), ɵmpd(4608, FilterManagerService, FilterManagerService, [RestfulService, SessionService, "serverHost"]), ɵmpd(4608, ConditionSchemaService, ConditionSchemaService, [RestfulService, SessionService, "serverHost", [2, Injector]]), ɵmpd(4608, ɵb$3, ɵb$3, []), ɵmpd(4608, GRID_SETTINGS_SERVICE, DatagridSettingsService, [Injector, BsModalService, MessagerService, IdService, LocaleService]), ɵmpd(4608, WindowVariableService, WindowVariableService, []), ɵmpd(4608, TabEntityService, TabEntityService, []), ɵmpd(4608, FEPageModalService, FEPageModalService, [RendererFactory2, [2, ComponentLoaderFactory], Injector, NgZone]), ɵmpd(4608, RenderService, RenderService, [SchemaManagerService, LcpService, CacheService, LoadingService, MessagerService, [2, DataRenderExtendService], [2, Injector]]), ɵmpd(4608, EventBus, EventBus, []), ɵmpd(4608, Subscription, Subscription, []), ɵmpd(4608, RestfulService$1, RestfulService$1, [HttpClient]), ɵmpd(5120, VARIABLE_PARSERS, function () { return [new FrameIdVariableParser(), new ɵa$3(), new EventParamVariableParser(), new DataVariableParser(), new UIStateVariableParser(), new StateMachineVariableParser(), new CommandVariableParser()]; }, []), ɵmpd(4608, VariableParseService, VariableParseService, [VARIABLE_PARSERS]), ɵmpd(4608, FinishLoadService, FinishLoadService, []), ɵmpd(5120, BE_SERVER_URI_TOKEN, ɵ3$2, []), ɵmpd(1073742336, CommonModule, CommonModule, []), ɵmpd(1073742336, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bc, []), ɵmpd(1073742336, FormsModule, FormsModule, []), ɵmpd(1073742336, ReactiveFormsModule, ReactiveFormsModule, []), ɵmpd(1073742336, PanelBarModule, PanelBarModule, []), ɵmpd(1073742336, SplitterModule$1, SplitterModule$1, []), ɵmpd(1073742336, TabStripModule, TabStripModule, []), ɵmpd(1073742336, LayoutModule, LayoutModule, []), ɵmpd(1073742336, FarrisCommonModule, FarrisCommonModule, []), ɵmpd(1073742336, KendoBindingModule, KendoBindingModule, []), ɵmpd(1073742336, FlexLayoutModule, FlexLayoutModule, []), ɵmpd(1073742336, LocaleModule, LocaleModule, []), ɵmpd(1073742336, LoadingModule, LoadingModule, []), ɵmpd(1073742336, PerfectScrollbarModule, PerfectScrollbarModule, []), ɵmpd(1073742336, AngularDraggableModule, AngularDraggableModule, []), ɵmpd(1073742336, FAreaResponseModule, FAreaResponseModule, []), ɵmpd(1073742336, FarrisTooltipModule, FarrisTooltipModule, []), ɵmpd(1073742336, ModalModule, ModalModule, []), ɵmpd(1073742336, MessagerModule, MessagerModule, []), ɵmpd(1073742336, NotifyModule, NotifyModule, []), ɵmpd(1073742336, PaginationModule, PaginationModule, []), ɵmpd(1073742336, PopoverModule, PopoverModule, []), ɵmpd(1073742336, InputGroupModule, InputGroupModule, []), ɵmpd(1073742336, DateHelperModule, DateHelperModule, []), ɵmpd(1073742336, NumberHelperModule, NumberHelperModule, []), ɵmpd(1073742336, DataColumnModule, DataColumnModule, []), ɵmpd(1073742336, DataTableModule, DataTableModule, []), ɵmpd(1073742336, FarrisDialogModule, FarrisDialogModule, []), ɵmpd(1073742336, HttpClientXsrfModule, HttpClientXsrfModule, []), ɵmpd(1073742336, HttpClientModule, HttpClientModule, []), ɵmpd(1073742336, DatalistModule, DatalistModule, []), ɵmpd(1073742336, ComboListModule, ComboListModule, []), ɵmpd(1073742336, ButtonModule, ButtonModule, []), ɵmpd(1073742336, ButtonGroupModule, ButtonGroupModule, []), ɵmpd(1073742336, PopupModule, PopupModule, []), ɵmpd(1073742336, ListModule, ListModule, []), ɵmpd(1073742336, SplitButtonModule, SplitButtonModule, []), ɵmpd(1073742336, DropDownButtonModule, DropDownButtonModule, []), ɵmpd(1073742336, ButtonsModule, ButtonsModule, []), ɵmpd(1073742336, ɵf, ɵf, []), ɵmpd(1073742336, ɵh, ɵh, []), ɵmpd(1073742336, ɵbe, ɵbe, []), ɵmpd(1073742336, ɵg, ɵg, []), ɵmpd(1073742336, ɵt$1, ɵt$1, []), ɵmpd(1073742336, ɵbg, ɵbg, []), ɵmpd(1073742336, ɵbh, ɵbh, []), ɵmpd(1073742336, FileListModule, FileListModule, []), ɵmpd(1073742336, WfApprovalLogsModule, WfApprovalLogsModule, []), ɵmpd(1073742336, LayoutModule$1, LayoutModule$1, []), ɵmpd(1073742336, NgbDropdownModule, NgbDropdownModule, []), ɵmpd(1073742336, FarrisSectionModule, FarrisSectionModule, []), ɵmpd(1073742336, FDropdownDirectiveTypeModule, FDropdownDirectiveTypeModule, []), ɵmpd(1073742336, NgxPaginationModule, NgxPaginationModule, []), ɵmpd(1073742336, ScrollbarModule, ScrollbarModule, []), ɵmpd(1073742336, TimePickerModule, TimePickerModule, []), ɵmpd(1073742336, FarrisDatePickerModule, FarrisDatePickerModule, []), ɵmpd(1073742336, FarrisContextMenuModule, FarrisContextMenuModule, []), ɵmpd(1073742336, TreeTableModule, TreeTableModule, []), ɵmpd(1073742336, LookupModule, LookupModule, []), ɵmpd(1073742336, FarrisFormsModule, FarrisFormsModule, []), ɵmpd(1073742336, NumberSpinnerModule, NumberSpinnerModule, []), ɵmpd(1073742336, SwitchModule, SwitchModule, []), ɵmpd(1073742336, FilterConditionModule, FilterConditionModule, []), ɵmpd(1073742336, FilterPanelModule, FilterPanelModule, []), ɵmpd(1073742336, FarrisSidebarModule, FarrisSidebarModule, []), ɵmpd(1073742336, SimpleFilterModule, SimpleFilterModule, []), ɵmpd(1073742336, DatagridSmartFilterModule, DatagridSmartFilterModule, []), ɵmpd(1073742336, DatagridModule, DatagridModule, []), ɵmpd(1073742336, UiFlowchartModule, UiFlowchartModule, []), ɵmpd(1073742336, RouterModule, RouterModule, [[2, ɵangular_packages_router_router_a], [2, Router]]), ɵmpd(1073742336, CommonSharedModule, CommonSharedModule, []), ɵmpd(1073742336, TaskImplApiModule, TaskImplApiModule, []), ɵmpd(1073742336, WfSignModule, WfSignModule, []), ɵmpd(1073742336, AvatarModule, AvatarModule, []), ɵmpd(1073742336, ComboLookupModule, ComboLookupModule, []), ɵmpd(1073742336, LanguageTextboxModule, LanguageTextboxModule, []), ɵmpd(1073742336, EnumEditorModule, EnumEditorModule, []), ɵmpd(1073742336, FilterModule, FilterModule, []), ɵmpd(1073742336, SorterModule, SorterModule, []), ɵmpd(1073742336, DatagridEditorsModule, DatagridEditorsModule, []), ɵmpd(1073742336, WfTaskHandlerModule, WfTaskHandlerModule, []), ɵmpd(512, WorkFlowMessageService, WorkFlowMessageService, []), ɵmpd(512, WorkFlowMessage, WorkFlowMessage, [Injector, WorkFlowMessageService]), ɵmpd(1073742336, CommandServicesModule, CommandServicesModule, [WorkFlowMessage]), ɵmpd(1073742336, FResponseToolbarModule, FResponseToolbarModule, []), ɵmpd(1073742336, FormMessageModule, FormMessageModule, []), ɵmpd(1073742336, TranslateModule, TranslateModule, []), ɵmpd(1073742336, VerifyDetailModule, VerifyDetailModule, []), ɵmpd(1073742336, SharedModule, SharedModule, []), ɵmpd(1073742336, DragAndDropModule, DragAndDropModule, []), ɵmpd(1073742336, GroupModule, GroupModule, []), ɵmpd(1073742336, EventsModule, EventsModule, []), ɵmpd(1073742336, NumericTextBoxModule, NumericTextBoxModule, []), ɵmpd(1073742336, IntlModule, IntlModule, []), ɵmpd(1073742336, EventsModule$1, EventsModule$1, []), ɵmpd(1073742336, DateInputModule, DateInputModule, []), ɵmpd(1073742336, CalendarCommonModule, CalendarCommonModule, []), ɵmpd(1073742336, TemplatesModule, TemplatesModule, []), ɵmpd(1073742336, VirtualizationModule, VirtualizationModule, []), ɵmpd(1073742336, CalendarModule$1, CalendarModule$1, []), ɵmpd(1073742336, DatePickerModule, DatePickerModule, []), ɵmpd(1073742336, BodyModule, BodyModule, []), ɵmpd(1073742336, ResizeSensorModule, ResizeSensorModule, []), ɵmpd(1073742336, SharedDirectivesModule, SharedDirectivesModule, []), ɵmpd(1073742336, SharedModule$1, SharedModule$1, []), ɵmpd(1073742336, DropDownListModule, DropDownListModule, []), ɵmpd(1073742336, AutoCompleteModule, AutoCompleteModule, []), ɵmpd(1073742336, TextBoxModule, TextBoxModule, []), ɵmpd(1073742336, DraggableModule, DraggableModule, []), ɵmpd(1073742336, SliderModule, SliderModule, []), ɵmpd(1073742336, SwitchModule$1, SwitchModule$1, []), ɵmpd(1073742336, MaskedTextBoxModule, MaskedTextBoxModule, []), ɵmpd(1073742336, InputsModule, InputsModule, []), ɵmpd(1073742336, SharedFilterModule, SharedFilterModule, []), ɵmpd(1073742336, RowFilterModule, RowFilterModule, []), ɵmpd(1073742336, FilterMenuModule, FilterMenuModule, []), ɵmpd(1073742336, ColumnMenuModule, ColumnMenuModule, []), ɵmpd(1073742336, HeaderModule, HeaderModule, []), ɵmpd(1073742336, FooterModule, FooterModule, []), ɵmpd(1073742336, PagerModule, PagerModule, []), ɵmpd(1073742336, GridModule, GridModule, []), ɵmpd(1073742336, MultiViewCalendarModule, MultiViewCalendarModule, []), ɵmpd(1073742336, CalendarsModule, CalendarsModule, []), ɵmpd(1073742336, TimePickerModule$1, TimePickerModule$1, []), ɵmpd(1073742336, DateRangeModule, DateRangeModule, []), ɵmpd(1073742336, DateInputsModule, DateInputsModule, []), ɵmpd(1073742336, ComboBoxModule, ComboBoxModule, []), ɵmpd(1073742336, MultiSelectModule$1, MultiSelectModule$1, []), ɵmpd(1073742336, DropDownsModule, DropDownsModule, []), ɵmpd(1073742336, NgbTooltipModule, NgbTooltipModule, []), ɵmpd(1073742336, FarrisTabsModule, FarrisTabsModule, []), ɵmpd(1073742336, FarrisTagModule, FarrisTagModule, []), ɵmpd(1073742336, ProgressModule, ProgressModule, []), ɵmpd(1073742336, UploadModule, UploadModule, []), ɵmpd(1073742336, UploadDialogMoudle, UploadDialogMoudle, []), ɵmpd(1073742336, FieldGroupModule, FieldGroupModule, []), ɵmpd(1073742336, FarrisTimeSpinnerModule, FarrisTimeSpinnerModule, []), ɵmpd(1073742336, ProgressStepModule, ProgressStepModule, []), ɵmpd(1073742336, WizardModule, WizardModule, []), ɵmpd(1073742336, MultiSelectModule, MultiSelectModule, []), ɵmpd(1073742336, QueryConditionModule, QueryConditionModule, []), ɵmpd(1073742336, QuerySolutionModule, QuerySolutionModule, []), ɵmpd(1073742336, FarrisButtonModule, FarrisButtonModule, []), ɵmpd(1073742336, ListViewModule, ListViewModule, []), ɵmpd(1073742336, SplitterModule, SplitterModule, []), ɵmpd(1073742336, ListNavModule, ListNavModule, []), ɵmpd(1073742336, TextModule, TextModule, []), ɵmpd(1073742336, WFCommentModule, WFCommentModule, []), ɵmpd(1073742336, WFRuntimeModule, WFRuntimeModule, []), ɵmpd(1073742336, SharedModule$3, SharedModule$3, []), ɵmpd(1073742336, WindowModule, WindowModule, []), ɵmpd(1073742336, DialogModule, DialogModule, []), ɵmpd(1073742336, CloudPrintModule, CloudPrintModule, []), ɵmpd(1073742336, FarrisHtmlEditorModule, FarrisHtmlEditorModule, []), ɵmpd(1073742336, ViewChangeModule, ViewChangeModule, []), ɵmpd(1073742336, ListFilterModule, ListFilterModule, []), ɵmpd(1073742336, CalendarModule, CalendarModule, []), ɵmpd(1073742336, ScrollspyModule, ScrollspyModule, []), ɵmpd(1073742336, DynamicControlGroupModule, DynamicControlGroupModule, []), ɵmpd(1073742336, FarrisFooterModule, FarrisFooterModule, []), ɵmpd(1073742336, BatchEditDialogModule, BatchEditDialogModule, []), ɵmpd(1073742336, TreeModule, TreeModule, []), ɵmpd(1073742336, DiscussionGroupModule, DiscussionGroupModule, []), ɵmpd(1073742336, NavModule, NavModule, []), ɵmpd(1073742336, TagsModule, TagsModule, []), ɵmpd(1073742336, FFileUploadModule, FFileUploadModule, []), ɵmpd(1073742336, FfileuploadAdaptUnifileModule, FfileuploadAdaptUnifileModule, []), ɵmpd(1073742336, DatagridFilterRowModule, DatagridFilterRowModule, []), ɵmpd(1073742336, OrganizationSelectorModule, OrganizationSelectorModule, []), ɵmpd(1073742336, DatagridSettingsModule, DatagridSettingsModule, []), ɵmpd(1073742336, EditorModule, EditorModule, []), ɵmpd(1073742336, FrmCommonModule, FrmCommonModule, []), ɵmpd(1073742336, FEHeaderFooterModule, FEHeaderFooterModule, []), ɵmpd(1073742336, FEPageModalModule, FEPageModalModule, []), ɵmpd(1073742336, FeatureEditorModule, FeatureEditorModule, []), ɵmpd(1073742336, FEScrollCollapsibleAreaModule, FEScrollCollapsibleAreaModule, []), ɵmpd(1073742336, QdpCommonModule, QdpCommonModule, []), ɵmpd(1073742336, CheckBoxModule, CheckBoxModule, []), ɵmpd(1073742336, SharedModule$2, SharedModule$2, []), ɵmpd(1073742336, TreeViewModule, TreeViewModule, []), ɵmpd(1073742336, RtfAppHelpModule$1, RtfAppHelpModule$1, []), ɵmpd(1073742336, ColorPickerModule, ColorPickerModule, []), ɵmpd(1073742336, RtfAppHelpModule, RtfAppHelpModule, []), ɵmpd(1073742336, ɵj$1, ɵj$1, []), ɵmpd(1073742336, DialogsModule, DialogsModule, []), ɵmpd(1073742336, ExpressionModule, ExpressionModule, []), ɵmpd(1073742336, FarrisPanelModule, FarrisPanelModule, []), ɵmpd(1073742336, IdeCmpModule, IdeCmpModule, []), ɵmpd(1073742336, FilterConditionModule$1, FilterConditionModule$1, []), ɵmpd(1073742336, QueryFrameworkModule, QueryFrameworkModule, []), ɵmpd(1073742336, DndListModule, DndListModule, []), ɵmpd(1073742336, SpreadModule, SpreadModule, []), ɵmpd(1073742336, EchartsModule, EchartsModule, []), ɵmpd(1073742336, ConditionSchemaModule, ConditionSchemaModule, []), ɵmpd(1073742336, SaleOrderCardDemo1RoutingModule, SaleOrderCardDemo1RoutingModule, []), ɵmpd(512, TranslateStore, TranslateStore, []), ɵmpd(512, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_d, []), ɵmpd(2048, XhrFactory, null, [ɵangular_packages_common_http_http_d]), ɵmpd(512, HttpXhrBackend, HttpXhrBackend, [XhrFactory]), ɵmpd(2048, HttpBackend, null, [HttpXhrBackend]), ɵmpd(512, HttpHandler, ɵHttpInterceptingHandler, [HttpBackend, Injector]), ɵmpd(512, HttpClient, HttpClient, [HttpHandler]), ɵmpd(1024, TranslateLoader, ɵ0$3, [HttpClient]), ɵmpd(512, TranslateCompiler, TranslateFakeCompiler, []), ɵmpd(512, TranslateParser, TranslateDefaultParser, []), ɵmpd(512, MissingTranslationHandler, JitMissingTranslationHandler, []), ɵmpd(256, USE_DEFAULT_LANG, undefined, []), ɵmpd(256, USE_STORE, undefined, []), ɵmpd(512, TranslateService, TranslateService, [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE]), ɵmpd(512, TranslateResolveService, TranslateResolveService, [TranslateService, HttpClient]), ɵmpd(1073742336, SaleOrderCardDemo1Module, SaleOrderCardDemo1Module, [TranslateResolveService]), ɵmpd(256, LOCALE_ID, ɵ1$2, []), ɵmpd(256, FARRIS_LOCAL_CUSTOM_DATA, {}, []), ɵmpd(256, ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), ɵmpd(256, ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), ɵmpd(256, LOADING_DEFAULT_CONFIG, loaddingDefaultConfig, []), ɵmpd(256, MESSAGER_DEFAULT_CONFIG, MessagerDefaultConfig, []), ɵmpd(256, SWITCH_OPTIONS, {}, []), ɵmpd(256, SCROLLBAR_CONFIG, { minScrollbarLength: 20 }, []), ɵmpd(1024, GRID_EDITORS, function () { return [{ name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$4 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$4 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$4 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }, { name: "textarea", value: DatagridTextareaComponent }, { name: "textbox", value: DatagridTextboxComponent }, { name: "checkbox", value: ɵa$4 }, { name: "datepicker", value: ɵb$4 }, { name: "input-group", value: ɵc$3 }, { name: "select", value: ɵd$1 }, { name: "lookup", value: ɵe$1 }, { name: "numberbox", value: ɵf$1 }, { name: "combolist", value: ɵg$1 }, { name: "switch", value: ɵh$1 }, { name: "timepicker", value: ɵi }, { name: "combo-lookup", value: ɵj$2 }, { name: "language-textbox", value: ɵk }, { name: "enum-editor", value: DatagridEnumEditorComponent }, { name: "filter-editor", value: DatagridFilterEditorComponent }, { name: "sort-editor", value: DatagridSortEditorComponent }]; }, []), ɵmpd(256, TOUCH_ENABLED, touchEnabled, []), ɵmpd(256, TOUCH_ENABLED$1, touchEnabled$1, []), ɵmpd(256, ɵb$5, { modules: defaultModules }, []), ɵmpd(256, FFileUploadAPIServiceToken, null, []), ɵmpd(256, ɵn$1, { baseUrl: "assets", defaultOptions: { scrollBeyondLastLine: false } }, []), ɵmpd(256, GRID_FILTER_ROW, FilterRowComponent, []), ɵmpd(1024, ROUTES, function () { return [[{ path: "", component: RootComponent, children: [], resolve: { "translate": TranslateResolveService } }]]; }, []), ɵmpd(256, TINYMCE_SCRIPT_SRC, "/platform/common/web/assets/tinymce/tinymce.min.js", []), ɵmpd(256, FORM_PATH_TOKEN, "/apps/hotwave/ordermrg/web/bo-saleorder-front/saleordercarddemo1/", [])]); }));

        }
    };
});
