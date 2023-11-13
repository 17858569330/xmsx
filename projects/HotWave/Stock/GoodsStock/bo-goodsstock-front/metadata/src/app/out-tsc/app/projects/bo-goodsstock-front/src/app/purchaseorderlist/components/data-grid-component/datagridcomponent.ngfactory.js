/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "./datagridcomponent.scss.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "../../../../../../../node_modules/@farris/ui-datagrid/farris-ui-datagrid.ngfactory";
import * as i3 from "@farris/ui-datagrid";
import * as i4 from "@angular/common/http";
import * as i5 from "@angular/platform-browser";
import * as i6 from "@farris/kendo-binding";
import * as i7 from "@farris/devkit";
import * as i8 from "@farris/ui-common/date";
import * as i9 from "@farris/ui-common";
import * as i10 from "@farris/ui-dialog";
import * as i11 from "../../../../../../../node_modules/@farris/ui-section/farris-ui-section.ngfactory";
import * as i12 from "@farris/ui-section";
import * as i13 from "@angular/common";
import * as i14 from "../../viewmodels/datagridcomponentviewmodel";
import * as i15 from "@farris/command-services";
import * as i16 from "../../viewmodels/handlers/changepage1handler";
import * as i17 from "@gsp-wf/rtdevkit";
import * as i18 from "@gsp-wf/ui-flowchart";
import * as i19 from "@gsp-wf/wf-task-handler";
import * as i20 from "@gsp-svc/cloudprint";
import * as i21 from "@gsp-svc/formdoc-upload";
import * as i22 from "@farris/ui-sidebar";
import * as i23 from "@farris/ui-modal";
import * as i24 from "@angular/router";
import * as i25 from "@gsp-sys/rtf-common";
import * as i26 from "@gsp-cmp/querysolution";
import * as i27 from "@farris/bef";
import * as i28 from "@farris/ui-list-filter";
import * as i29 from "@farris/ui-batch-edit-dialog";
import * as i30 from "@farris/ui-locale";
import * as i31 from "@farris/ui-tooltip";
import * as i32 from "@farris/ui-feature-editor";
import * as i33 from "@farris/ui-messager";
import * as i34 from "@farris/ui-notify";
import * as i35 from "@farris/ui-lookup";
import * as i36 from "@farris/ui-combo-list";
import * as i37 from "../../viewmodels/form/datagridcomponentviewmodelform";
import * as i38 from "../../viewmodels/uistate/datagridcomponentviewmodeluistate";
import * as i39 from "../../lang/lang-pipe";
import * as i40 from "@ngx-translate/core";
import * as i41 from "../../models/purchaseorderrepository";
import * as i42 from "./datagridcomponent";
import * as i43 from "@farris/ui-wizard";
var styles_DataGridComponent = [i0.styles];
var RenderType_DataGridComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_DataGridComponent, data: {} });
export { RenderType_DataGridComponent as RenderType_DataGridComponent };
function View_DataGridComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "farris-datagrid", [["class", "f-component-grid"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "pageChanged"], [null, "scrollYLoad"], [null, "pageSizeChanged"], [null, "click"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("pageChanged" === en)) {
        var pd_1 = (i1.ɵnov(_v, 7).pageChangedHandler($event) !== false);
        ad = (pd_1 && ad);
    } if (("selectChanged" === en)) {
        var pd_2 = (i1.ɵnov(_v, 7).selectedRowChanged($event) !== false);
        ad = (pd_2 && ad);
    } if (("unSelect" === en)) {
        var pd_3 = (i1.ɵnov(_v, 7).unSelected($event) !== false);
        ad = (pd_3 && ad);
    } if (("checkedChange" === en)) {
        var pd_4 = (i1.ɵnov(_v, 7).checkedChanged($event) !== false);
        ad = (pd_4 && ad);
    } if (("pageSizeChanged" === en)) {
        var pd_5 = (i1.ɵnov(_v, 7).pageSizeChanged($event) !== false);
        ad = (pd_5 && ad);
    } if (("scrollYLoad" === en)) {
        var pd_6 = (i1.ɵnov(_v, 7).scrollY($event) !== false);
        ad = (pd_6 && ad);
    } if (("filterChanged" === en)) {
        var pd_7 = (i1.ɵnov(_v, 7).filterChanged($event) !== false);
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
    } return ad; }, i2.View_DatagridComponent_0, i2.RenderType_DatagridComponent)), i1.ɵprd(4608, null, i3.DatagridSmartFilterService, i3.DatagridSmartFilterService, []), i1.ɵprd(512, null, i3.DatagridFacadeService, i3.DatagridFacadeService, [i4.HttpClient]), i1.ɵprd(512, null, i3.DatagridService, i3.DatagridService, []), i1.ɵdid(4, 6275072, [[1, 4], ["dataGridDataGrid", 4]], 1, i3.DatagridComponent, [i1.ChangeDetectorRef, i1.ElementRef, i1.Injector, i1.NgZone, i3.DatagridFacadeService, i3.DatagridService, i1.ApplicationRef, i5.DomSanitizer, i1.Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], maxHeight: [2, "maxHeight"], showBorder: [3, "showBorder"], striped: [4, "striped"], headerWrap: [5, "headerWrap"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], scrollBarShowMode: [13, "scrollBarShowMode"], showLineNumber: [14, "showLineNumber"], lineNumberTitle: [15, "lineNumberTitle"], lineNumberWidth: [16, "lineNumberWidth"], lockPagination: [17, "lockPagination"], pagination: [18, "pagination"], pageList: [19, "pageList"], pageSize: [20, "pageSize"], showPageList: [21, "showPageList"], showGotoInput: [22, "showGotoInput"], multiSelect: [23, "multiSelect"], showCheckbox: [24, "showCheckbox"], showAllCheckbox: [25, "showAllCheckbox"], checkOnSelect: [26, "checkOnSelect"], selectOnCheck: [27, "selectOnCheck"], selectionMode: [28, "selectionMode"], keepSelect: [29, "keepSelect"], useBlankWhenDataIsEmpty: [30, "useBlankWhenDataIsEmpty"], emptyDataHeight: [31, "emptyDataHeight"], fields: [32, "fields"], nowrap: [33, "nowrap"], virtualized: [34, "virtualized"], virtualizedAsyncLoad: [35, "virtualizedAsyncLoad"], editMode: [36, "editMode"], enableEditCellStyle: [37, "enableEditCellStyle"], selectOnEditing: [38, "selectOnEditing"], enableDragColumn: [39, "enableDragColumn"], expandGroupRows: [40, "expandGroupRows"], groupSummaryPosition: [41, "groupSummaryPosition"], showGroupColumn: [42, "showGroupColumn"], showRowGroupPanel: [43, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [44, "AutoColumnWidthUseDblclick"], mergeCell: [45, "mergeCell"], enableSimpleMode: [46, "enableSimpleMode"], enableScheme: [47, "enableScheme"], clearSelectionsWhenDataIsEmpty: [48, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [49, "enableContextMenu"], enableHighlightCell: [50, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), i1.ɵqud(603979776, 9, { dgColumns: 1 }), i1.ɵpad(6, 5), i1.ɵdid(7, 737280, null, 0, i6.FarrisDatagridUseBindingDataDirective, [i7.BindingData, i7.ViewModel, i3.DatagridComponent], null, null), i1.ɵdid(8, 737280, null, 0, i6.EditableDirective, [i7.BindingData, i7.ViewModel, i3.DatagridComponent, i8.DateTimeHelperService, i1.Injector, i9.RuntimeStateService, i10.DialogService, i1.NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), i1.ɵdid(9, 147456, null, 0, i6.FarrisDataGridEndEditDirective, [i7.AppContext, i3.DatagridComponent], null, null), i1.ɵdid(10, 16384, null, 0, i6.FarrisDataGridRemoteSummaryDirective, [i7.ViewModel, i3.DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), i1.ɵdid(11, 212992, null, 0, i6.DatagridComponentRefDirective, [i1.Injector, i3.DatagridComponent, i1.ElementRef, i7.FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid"; var currVal_4 = false; var currVal_5 = 300; var currVal_6 = false; var currVal_7 = true; var currVal_8 = false; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = false; var currVal_15 = false; var currVal_16 = "auto"; var currVal_17 = false; var currVal_18 = _co.dataGridlineNumberTitle; var currVal_19 = 36; var currVal_20 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_21 = true; var currVal_22 = _ck(_v, 6, 0, 10, 20, 30, 50, 100); var currVal_23 = 20; var currVal_24 = false; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; var currVal_28 = false; var currVal_29 = false; var currVal_30 = false; var currVal_31 = "default"; var currVal_32 = true; var currVal_33 = false; var currVal_34 = 36; var currVal_35 = _co.viewModel.dataGridColumns; var currVal_36 = true; var currVal_37 = false; var currVal_38 = false; var currVal_39 = "cell"; var currVal_40 = false; var currVal_41 = false; var currVal_42 = false; var currVal_43 = true; var currVal_44 = "groupFooterRow"; var currVal_45 = true; var currVal_46 = false; var currVal_47 = true; var currVal_48 = false; var currVal_49 = false; var currVal_50 = false; var currVal_51 = true; var currVal_52 = false; var currVal_53 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53]); _ck(_v, 7, 0); var currVal_54 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_55 = true; _ck(_v, 8, 0, currVal_54, currVal_55); var currVal_56 = ""; _ck(_v, 10, 0, currVal_56); _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).pos; var currVal_1 = i1.ɵnov(_v, 4).hostCls; var currVal_2 = i1.ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_DataGridComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "farris-section", [["class", "f-section-grid f-section-in-managelist"], ["id", "data-grid-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, i11.View_FarrisSectionComponent_0, i11.RenderType_FarrisSectionComponent)), i1.ɵdid(1, 245760, null, 7, i12.FarrisSectionComponent, [[2, i1.Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), i1.ɵqud(335544320, 2, { headerDirective: 0 }), i1.ɵqud(335544320, 3, { headerTitleDirective: 0 }), i1.ɵqud(335544320, 4, { headerContentDirective: 0 }), i1.ɵqud(335544320, 5, { headerToolbarDirective: 0 }), i1.ɵqud(335544320, 6, { extendDirective: 0 }), i1.ɵqud(335544320, 7, { contentDirective: 0 }), i1.ɵqud(335544320, 8, { viewChangeDirective: 0 }), i1.ɵdid(9, 212992, null, 0, i6.SectionComponentRefDirective, [i1.Injector, i12.FarrisSectionComponent, i1.ElementRef, i7.FrameContext], null, null), (_l()(), i1.ɵeld(10, 0, null, 0, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DataGridComponent_2)), i1.ɵdid(12, 16384, null, 0, i13.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondatagridsectionMainTitle; var currVal_7 = _co.SectiondatagridsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = true; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 12, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).baseCls; var currVal_1 = i1.ɵnov(_v, 1).maxStatus; var currVal_2 = i1.ɵnov(_v, 1).fillCls; var currVal_3 = i1.ɵnov(_v, 1).enableAccordionCls; var currVal_4 = i1.ɵnov(_v, 1).enableCollapseCls; var currVal_5 = i1.ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
export function View_DataGridComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(671088640, 1, { dataGridDataGrid: 0 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DataGridComponent_1)), i1.ɵdid(2, 16384, null, 0, i13.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
export function View_DataGridComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 82, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), i1.ɵprd(4608, null, i7.ViewModel, i14.DataGridComponentViewmodel, []), i1.ɵprd(4608, null, i15.CommandService, i15.CommandService, [i7.ViewModel, i7.AppContext]), i1.ɵprd(5120, null, i7.COMMAND_HANDLERS_TOKEN, function (p0_0) { return [new i16.ChangePage1Handler(p0_0)]; }, [i15.CommandService]), i1.ɵprd(4608, null, i7.CommandHandlerRegistry, i7.CommandHandlerRegistry, [[2, i7.COMMAND_HANDLERS_TOKEN]]), i1.ɵprd(4608, null, i7.CommandHandlerExtenderRegistry, i7.CommandHandlerExtenderRegistry, [[2, i7.COMMAND_HANDLER_EXTENDERS_TOKEN]]), i1.ɵprd(4608, null, i7.CommandHandlerFactory, i7.CommandHandlerFactory, [i7.CommandHandlerRegistry, i7.CommandHandlerExtenderRegistry, i7.FrameContext, i7.VariableParseService]), i1.ɵprd(4608, null, i7.CommandBus, i7.CommandBus, [i7.CommandHandlerFactory]), i1.ɵprd(4608, null, i15.ValidationService, i15.ValidationService, [i7.Repository, i7.FrameContext, [2, i15.FormNotifyService], [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.ChangeItemService, i15.ChangeItemService, [i7.Repository, i7.FrameContext, i15.FormNotifyService, i15.LanguageService]), i1.ɵprd(4608, null, i15.UIStateService, i15.UIStateService, []), i1.ɵprd(4608, null, i15.StateMachineService, i15.StateMachineService, [i7.StateMachine]), i1.ɵprd(135680, null, i7.BindingData, i7.BindingData, []), i1.ɵprd(4608, null, i15.BindingDataService, i15.BindingDataService, [i7.BindingData, i7.AppContext]), i1.ɵprd(4608, null, i15.EntityTraversingService, i15.EntityTraversingService, [i7.FrameContext]), i1.ɵprd(4608, null, i15.EntityManipulationService, i15.EntityManipulationService, [i7.FrameContext]), i1.ɵprd(4608, null, i15.EntityAggregationService, i15.EntityAggregationService, [i7.FrameContext]), i1.ɵprd(4608, null, i15.EntityListService, i15.EntityListService, [i7.BindingData]), i1.ɵprd(4608, null, i15.EntityService, i15.EntityService, [i7.FrameContext]), i1.ɵprd(4608, null, i15.ListDataService, i15.ListDataService, [i15.FormMessageService, i7.Repository, i7.BindingData, i15.FormLoadingService, [2, i15.LanguageService], i15.FormNotifyService, i15.FormErrorService, i7.ViewModel, i15.FilterConditionService]), i1.ɵprd(4608, null, i15.TreeDataService, i15.TreeDataService, [i7.FrameContext, i15.FormMessageService, i15.FormLoadingService, i15.FormNotifyService, i15.FormErrorService, [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.SubTreeDataService, i15.SubTreeDataService, [i7.FrameContext, i7.ViewModel, i15.FormMessageService, i15.FormLoadingService, i15.FormErrorService, i15.FormNotifyService, [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.CardDataService, i15.CardDataService, [i15.FormMessageService, i7.FrameContext, i15.FormLoadingService, i15.FormNotifyService, [2, i15.LanguageService], i15.FormErrorService, i15.RuntimeFrameworkService, i15.CommandService]), i1.ɵprd(4608, null, i15.SubListDataService, i15.SubListDataService, [i15.FormMessageService, i7.Repository, i15.FormLoadingService, i7.ViewModel, [2, i15.LanguageService], i15.FormNotifyService, i15.FormErrorService]), i1.ɵprd(4608, null, i15.RemoveDataService, i15.RemoveDataService, [i7.FrameContext]), i1.ɵprd(4608, null, i15.SaveDataService, i15.SaveDataService, [i7.FrameContext]), i1.ɵprd(4608, null, i15.EditDataService, i15.EditDataService, [i7.FrameContext]), i1.ɵprd(4608, null, i15.FilterConditionDataService, i15.FilterConditionDataService, [i7.ViewModel, i15.FilterConditionService, i15.CommandService]), i1.ɵprd(4608, null, i15.RemoteSummaryService, i15.RemoteSummaryService, [i7.ViewModel]), i1.ɵprd(4608, null, i15.BeActionService, i15.BeActionService, [i7.Repository, i15.FormLoadingService, i15.FormMessageService, i15.FormNotifyService, i15.FormErrorService, [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.ApproveService, i15.ApproveService, [i15.FormLoadingService, i15.BeActionService, i15.FormMessageService, i15.FormNotifyService, [2, i15.LanguageService], i15.FormErrorService, i7.FrameContext, [2, i17.WFSubmiteService], [2, i18.WFFlowchartService], [2, i19.WfTaskHandlerService]]), i1.ɵprd(4608, null, i15.PrintService, i15.PrintService, [i15.FormMessageService, i15.LanguageService, i20.CloudprintService, [2, i15.FormNotifyService]]), i1.ɵprd(4608, null, i15.AttachmentDataService, i15.AttachmentDataService, [i7.FrameContext, i15.FormLoadingService]), i1.ɵprd(4608, null, i15.AttachmentService, i15.AttachmentService, [i7.FrameContext, i15.AttachmentDataService, i15.FormNotifyService, i21.UploadDialogService, [2, i21.DownloadService]]), i1.ɵprd(4608, null, i15.FileService, i15.FileService, [i7.FrameContext, i15.AttachmentDataService, i15.EntityService, i15.SubListDataService, i15.FormNotifyService, i15.LanguageService, i15.ListDataService, [2, i15.FormLoadingService]]), i1.ɵprd(4608, null, i15.NavigationEventService, i15.NavigationEventService, [i15.RuntimeFrameworkService, i15.MenuStateService, i15.QuerystringService]), i1.ɵprd(4608, null, i15.NavigationService, i15.NavigationService, [i15.RuntimeFrameworkService, i15.MenuStateService, i15.NavigationEventService, i15.QuerystringService, [2, i7.FrameContext], [2, i1.Injector], [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.NavigationMiddlewareService, i15.NavigationMiddlewareService, [i15.NavigationService, i7.FrameContext, i15.FormMessageService, [2, i15.LanguageService], i15.CardDataService]), i1.ɵprd(4608, null, i15.GridMiddlewareService, i15.GridMiddlewareService, [i7.FrameContext, i15.FormMessageService, [2, i15.LanguageService], i7.ViewModel, i15.CommandService]), i1.ɵprd(4608, null, i15.SidebarService, i15.SidebarService, [i7.FrameContext, i22.FarrisSidebarService, i15.FormMessageService, [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.FarrisFormService, i15.FarrisFormService, [[2, i15.FARRIS_FORM_COMPONENTS]]), i1.ɵprd(4608, null, i15.DialogService, i15.DialogService, [i23.BsModalService, i15.FarrisFormService, i1.ComponentFactoryResolver, i7.FrameContext, [2, i1.Injector]]), i1.ɵprd(4608, null, i15.RouterService, i15.RouterService, [i24.Router, i7.RouterParamService, i25.FrameworkService, [2, i25.AppService], [2, i15.MenuStateService], [2, i15.LanguageService]]), i1.ɵprd(4608, null, i15.AuthorityService, i15.AuthorityService, []), i1.ɵprd(4608, null, i26.QUERYSOLUTION_HANDLER_TOKEN, i15.ɵb, [i7.FrameContext, i27.FrameworkSessionService]), i1.ɵprd(4608, null, i28.LISTFILTER_HANDLER_TOKEN, i15.ɵc, [i7.FrameContext]), i1.ɵprd(4608, null, i15.EndEditService, i15.EndEditService, [i7.FrameContext]), i1.ɵprd(4608, null, i29.BatchEditDialogService, i29.BatchEditDialogService, [i1.Injector, i23.BsModalService, i1.ComponentFactoryResolver, i30.LocaleService]), i1.ɵprd(4608, null, i15.BatchEditService, i15.BatchEditService, [i1.Injector, i15.ComponentManagerService, i7.ViewModel, i7.Repository, i29.BatchEditDialogService, i8.DateTimeHelperService, i15.LanguageService, i15.FormNotifyService]), i1.ɵprd(4608, null, i15.DiscussionGroupService, i15.DiscussionGroupService, [i1.Injector, i7.FrameContext, i15.FormLoadingService, i15.RuntimeFrameworkService]), i1.ɵprd(4608, null, i15.DataGridService, i15.DataGridService, []), i1.ɵprd(4608, null, i15.FormAttentionService, i15.FormAttentionService, [i1.Injector, i7.FrameContext, i31.AttentionService]), i1.ɵprd(4608, null, i32.FeatureEditorService, i32.FeatureEditorService, [i1.Injector, i23.BsModalService, i1.ComponentFactoryResolver, i30.LocaleService, i32.I18nService]), i1.ɵprd(4608, null, i15.FeatureDataService, i15.FeatureDataService, [i1.Injector, i15.FeatureRepository, [2, i1.LOCALE_ID]]), i1.ɵprd(4608, null, i15.FeatureEditService, i15.FeatureEditService, [i1.Injector, i32.FeatureEditorService, i15.FeatureDataService, i15.FormLoadingService, i15.FormNotifyService, i15.LanguageService]), i1.ɵprd(4608, null, i15.ExpressionService, i15.ExpressionService, [i1.Injector, i7.ResolveService, i7.FrameContext, i7.ExpressionExecutor]), i1.ɵprd(4608, null, i15.PopUpService, i15.PopUpService, [i1.Injector, i7.FrameContext, i7.Repository, i15.LanguageService, i15.FormMessageService]), i1.ɵprd(4608, null, i15.DirtyCheckingService, i15.DirtyCheckingService, [i1.Injector, i1.ChangeDetectorRef, i1.ApplicationRef]), i1.ɵprd(4608, null, i15.FormService, i15.FormService, [i1.Injector, i7.AppContext, i7.Repository]), i1.ɵprd(4608, null, i15.ViewModelService, i15.ViewModelService, []), i1.ɵprd(4608, null, i15.PaginationService, i15.PaginationService, [i1.Injector, i7.FrameContext]), i1.ɵprd(4608, null, i7.FORM_MANIFEST_SERVICE_TOKEN, i15.FormManifestService, [i1.Injector, i7.FORM_PATH_TOKEN, i4.HttpClient]), i1.ɵprd(4608, null, i7.FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, i15.FormExpressionManifestService, [i1.Injector, i7.FrameContext, i4.HttpClient, i7.FORM_PATH_TOKEN, i7.FORM_MANIFEST_SERVICE_TOKEN]), i1.ɵprd(4608, null, i7.MESSAGE_SERVICE_TOKEN, i15.FormMessageService, [i33.MessagerService, [2, i15.LanguageService], i1.LOCALE_ID]), i1.ɵprd(4608, null, i7.NOTIFY_SERVICE_TOKEN, i15.FormNotifyService, [i34.NotifyService, [2, i15.LanguageService]]), i1.ɵprd(5120, null, i7.FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new i15.WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [i1.Injector, i7.FrameContext, i15.WorkFlowMessageService, i15.WorkFlowMessage]), i1.ɵprd(4608, null, i35.ServerSideToken, i27.BefLookupRestService, [i7.Repository, [2, i7.FrameContext]]), i1.ɵprd(4608, null, i36.ComboServerSideToken, i27.DefaultComboHttpService, [i7.Repository]), i1.ɵprd(4608, null, i3.GRID_SETTINGS_HTTP, i27.BefLookupRestService, [i7.Repository, [2, i7.FrameContext]]), i1.ɵprd(4608, null, i7.Form, i37.DataGridComponentViewmodelForm, []), i1.ɵprd(4608, null, i7.UIState, i38.DataGridComponentViewmodelUIState, []), i1.ɵprd(512, null, i39.LangService, i39.LangService, [i40.TranslateService]), i1.ɵprd(512, null, i15.LocalizationService, i15.LocalizationService, [i1.Injector, i7.UserSettingsToken]), i1.ɵprd(2048, null, i7.Repository, null, [i41.PurchaseOrderRepository]), i1.ɵprd(131584, null, i7.FrameContext, i7.FrameContext, [i1.Injector, [3, i7.FrameContext]]), i1.ɵprd(512, null, i15.BindingPathService, i15.BindingPathService, [i1.Injector, i7.AppContext, i7.Repository]), i1.ɵprd(512, null, i15.FormControlService, i15.FormControlService, []), i1.ɵprd(512, null, i15.FrameContextService, i15.FrameContextService, [i1.Injector, i7.AppContext, i7.FrameContext, i7.Repository, i15.BindingPathService, i15.FormControlService]), i1.ɵprd(512, null, i15.FocusInvalidService, i15.FocusInvalidService, [i7.Repository, i7.FrameContext, i15.FrameContextService, i15.FormControlService]), i1.ɵdid(79, 4440064, null, 0, i42.DataGridComponent, [i43.WizardService, i15.KeybindingService, i39.LangService, i24.ActivatedRoute, i24.Router, i1.ElementRef, i15.LocalizationService, i25.FrmI18nSettingService, i15.FocusInvalidService, i9.CommonUtils, i5.DomSanitizer, i1.Injector], null, null), i1.ɵprd(256, null, i7.FRAME_ID, "data-grid-component", []), i1.ɵprd(256, null, i7.NAMESPACE, "", []), i1.ɵprd(256, null, i7.EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 79, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 79).cls; _ck(_v, 0, 0, currVal_0); }); }
var DataGridComponentNgFactory = i1.ɵccf("app-datagridcomponent", i42.DataGridComponent, View_DataGridComponent_Host_0, {}, {}, []);
export { DataGridComponentNgFactory as DataGridComponentNgFactory };
