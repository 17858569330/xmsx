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
import * as i14 from "@farris/command-services";
import * as i15 from "../../viewmodels/datagridcomponentviewmodel";
import * as i16 from "../../viewmodels/handlers/loadlist1handler";
import * as i17 from "../../viewmodels/handlers/remove1handler";
import * as i18 from "../../viewmodels/handlers/loadcard1handler";
import * as i19 from "../../viewmodels/handlers/add1handler";
import * as i20 from "../../viewmodels/handlers/changepage1handler";
import * as i21 from "@gsp-wf/rtdevkit";
import * as i22 from "@gsp-wf/ui-flowchart";
import * as i23 from "@gsp-wf/wf-task-handler";
import * as i24 from "@gsp-svc/cloudprint";
import * as i25 from "@gsp-svc/formdoc-upload";
import * as i26 from "@farris/ui-sidebar";
import * as i27 from "@farris/ui-modal";
import * as i28 from "@angular/router";
import * as i29 from "@gsp-sys/rtf-common";
import * as i30 from "@gsp-cmp/querysolution";
import * as i31 from "@farris/bef";
import * as i32 from "@farris/ui-list-filter";
import * as i33 from "@farris/ui-batch-edit-dialog";
import * as i34 from "@farris/ui-locale";
import * as i35 from "@farris/ui-tooltip";
import * as i36 from "@farris/ui-feature-editor";
import * as i37 from "@farris/ui-messager";
import * as i38 from "@farris/ui-notify";
import * as i39 from "@farris/ui-lookup";
import * as i40 from "@farris/ui-combo-list";
import * as i41 from "../../viewmodels/form/datagridcomponentviewmodelform";
import * as i42 from "../../viewmodels/uistate/datagridcomponentviewmodeluistate";
import * as i43 from "@gsp-dip/data-imp-exp";
import * as i44 from "@farris/ui-loading";
import * as i45 from "../../lang/lang-pipe";
import * as i46 from "@ngx-translate/core";
import * as i47 from "../../models/goodsrepository";
import * as i48 from "./datagridcomponent";
import * as i49 from "@farris/ui-wizard";
var styles_DataGridComponent = [i0.styles];
var RenderType_DataGridComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_DataGridComponent, data: {} });
export { RenderType_DataGridComponent as RenderType_DataGridComponent };
function View_DataGridComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "farris-datagrid", [["class", "f-component-grid"], ["datagridRef", ""], ["farris-grid-end-edit", ""], ["farris-remote-summary-command", ""], ["farris-use-binding-data", ""], ["id", "dataGrid"]], [[4, "position", null], [2, "f-datagrid-full", null], [2, "f-datagrid-auto-height", null]], [[null, "pageChanged"], [null, "selectedRowChange"], [null, "pageSizeChanged"], [null, "click"], [null, "selectChanged"], [null, "unSelect"], [null, "checkedChange"], [null, "scrollYLoad"], [null, "filterChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
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
        var pd_8 = (_co.viewModel.changePage1($event) !== false);
        ad = (pd_8 && ad);
    } if (("selectedRowChange" === en)) {
        var pd_9 = (_co.viewModel.loadCard1($event) !== false);
        ad = (pd_9 && ad);
    } if (("pageSizeChanged" === en)) {
        var pd_10 = (_co.viewModel.changePage1($event) !== false);
        ad = (pd_10 && ad);
    } return ad; }, i2.View_DatagridComponent_0, i2.RenderType_DatagridComponent)), i1.ɵprd(4608, null, i3.DatagridSmartFilterService, i3.DatagridSmartFilterService, []), i1.ɵprd(512, null, i3.DatagridFacadeService, i3.DatagridFacadeService, [i4.HttpClient]), i1.ɵprd(512, null, i3.DatagridService, i3.DatagridService, []), i1.ɵdid(4, 6275072, [[1, 4], ["dataGridDataGrid", 4]], 1, i3.DatagridComponent, [i1.ChangeDetectorRef, i1.ElementRef, i1.Injector, i1.NgZone, i3.DatagridFacadeService, i3.DatagridService, i1.ApplicationRef, i5.DomSanitizer, i1.Renderer2], { id: [0, "id"], autoHeight: [1, "autoHeight"], maxHeight: [2, "maxHeight"], showBorder: [3, "showBorder"], striped: [4, "striped"], headerWrap: [5, "headerWrap"], footerHeight: [6, "footerHeight"], footerDataFrom: [7, "footerDataFrom"], footerPosition: [8, "footerPosition"], rowHeight: [9, "rowHeight"], fit: [10, "fit"], fitColumns: [11, "fitColumns"], autoFitColumns: [12, "autoFitColumns"], disabled: [13, "disabled"], scrollBarShowMode: [14, "scrollBarShowMode"], showLineNumber: [15, "showLineNumber"], lineNumberTitle: [16, "lineNumberTitle"], lineNumberWidth: [17, "lineNumberWidth"], lockPagination: [18, "lockPagination"], pagination: [19, "pagination"], pageList: [20, "pageList"], pageSize: [21, "pageSize"], showPageList: [22, "showPageList"], showGotoInput: [23, "showGotoInput"], multiSelect: [24, "multiSelect"], showCheckbox: [25, "showCheckbox"], showAllCheckbox: [26, "showAllCheckbox"], checkOnSelect: [27, "checkOnSelect"], selectOnCheck: [28, "selectOnCheck"], selectionMode: [29, "selectionMode"], keepSelect: [30, "keepSelect"], useBlankWhenDataIsEmpty: [31, "useBlankWhenDataIsEmpty"], emptyDataHeight: [32, "emptyDataHeight"], fields: [33, "fields"], nowrap: [34, "nowrap"], virtualized: [35, "virtualized"], virtualizedAsyncLoad: [36, "virtualizedAsyncLoad"], editMode: [37, "editMode"], enableEditCellStyle: [38, "enableEditCellStyle"], selectOnEditing: [39, "selectOnEditing"], enableDragColumn: [40, "enableDragColumn"], expandGroupRows: [41, "expandGroupRows"], groupSummaryPosition: [42, "groupSummaryPosition"], showGroupColumn: [43, "showGroupColumn"], showRowGroupPanel: [44, "showRowGroupPanel"], AutoColumnWidthUseDblclick: [45, "AutoColumnWidthUseDblclick"], mergeCell: [46, "mergeCell"], enableSimpleMode: [47, "enableSimpleMode"], enableScheme: [48, "enableScheme"], clearSelectionsWhenDataIsEmpty: [49, "clearSelectionsWhenDataIsEmpty"], enableContextMenu: [50, "enableContextMenu"], enableHighlightCell: [51, "enableHighlightCell"] }, { pageSizeChanged: "pageSizeChanged", pageChanged: "pageChanged", filterChanged: "filterChanged", selectChanged: "selectChanged", unSelect: "unSelect", scrollYLoad: "scrollYLoad", checkedChange: "checkedChange" }), i1.ɵqud(603979776, 9, { dgColumns: 1 }), i1.ɵpad(6, 5), i1.ɵdid(7, 737280, null, 0, i6.FarrisDatagridUseBindingDataDirective, [i7.BindingData, i7.ViewModel, i3.DatagridComponent], null, { selectedRowChange: "selectedRowChange" }), i1.ɵdid(8, 737280, null, 0, i6.EditableDirective, [i7.BindingData, i7.ViewModel, i3.DatagridComponent, i8.DateTimeHelperService, i1.Injector, i9.RuntimeStateService, i10.DialogService, i1.NgZone], { gridEditable: [0, "gridEditable"], disableGroupOnEditing: [1, "disableGroupOnEditing"] }, null), i1.ɵdid(9, 147456, null, 0, i6.FarrisDataGridEndEditDirective, [i7.AppContext, i3.DatagridComponent], null, null), i1.ɵdid(10, 16384, null, 0, i6.FarrisDataGridRemoteSummaryDirective, [i7.ViewModel, i3.DatagridComponent], { remoteSummaryCommand: [0, "remoteSummaryCommand"] }, null), i1.ɵdid(11, 212992, null, 0, i6.DatagridComponentRefDirective, [i1.Injector, i3.DatagridComponent, i1.ElementRef, i7.FrameContext], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "dataGrid"; var currVal_4 = false; var currVal_5 = 300; var currVal_6 = false; var currVal_7 = true; var currVal_8 = false; var currVal_9 = 29; var currVal_10 = "client"; var currVal_11 = "bottom"; var currVal_12 = 30; var currVal_13 = true; var currVal_14 = true; var currVal_15 = false; var currVal_16 = _co.viewModel.stateMachine["editable"]; var currVal_17 = "auto"; var currVal_18 = false; var currVal_19 = _co.dataGridlineNumberTitle; var currVal_20 = 36; var currVal_21 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_22 = true; var currVal_23 = _ck(_v, 6, 0, 10, 20, 30, 50, 100); var currVal_24 = 20; var currVal_25 = false; var currVal_26 = false; var currVal_27 = false; var currVal_28 = false; var currVal_29 = false; var currVal_30 = false; var currVal_31 = false; var currVal_32 = "default"; var currVal_33 = true; var currVal_34 = false; var currVal_35 = 36; var currVal_36 = _co.viewModel.dataGridColumns; var currVal_37 = true; var currVal_38 = false; var currVal_39 = false; var currVal_40 = "cell"; var currVal_41 = false; var currVal_42 = false; var currVal_43 = false; var currVal_44 = true; var currVal_45 = "groupFooterRow"; var currVal_46 = true; var currVal_47 = false; var currVal_48 = true; var currVal_49 = false; var currVal_50 = false; var currVal_51 = false; var currVal_52 = true; var currVal_53 = false; var currVal_54 = false; _ck(_v, 4, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54]); _ck(_v, 7, 0); var currVal_55 = (_co.viewModel.stateMachine && _co.viewModel.stateMachine["editable"]); var currVal_56 = true; _ck(_v, 8, 0, currVal_55, currVal_56); var currVal_57 = ""; _ck(_v, 10, 0, currVal_57); _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).pos; var currVal_1 = i1.ɵnov(_v, 4).hostCls; var currVal_2 = i1.ɵnov(_v, 4).autoHeightCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_DataGridComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "farris-section", [["class", "f-section-grid f-section-in-nav"], ["id", "data-grid-section"], ["sectionRef", ""]], [[2, "f-section", null], [2, "f-section-maximize", null], [2, "f-section-fill", null], [2, "f-section-accordion", null], [2, "f-state-collapse", null], [2, "f-section-custom-accordion", null]], null, null, i11.View_FarrisSectionComponent_0, i11.RenderType_FarrisSectionComponent)), i1.ɵdid(1, 245760, null, 7, i12.FarrisSectionComponent, [[2, i1.Injector]], { mainTitle: [0, "mainTitle"], subTitle: [1, "subTitle"], showHeader: [2, "showHeader"], enableMaximize: [3, "enableMaximize"], enableAccordion: [4, "enableAccordion"], fill: [5, "fill"], expandStatus: [6, "expandStatus"], index: [7, "index"] }, null), i1.ɵqud(335544320, 2, { headerDirective: 0 }), i1.ɵqud(335544320, 3, { headerTitleDirective: 0 }), i1.ɵqud(335544320, 4, { headerContentDirective: 0 }), i1.ɵqud(335544320, 5, { headerToolbarDirective: 0 }), i1.ɵqud(335544320, 6, { extendDirective: 0 }), i1.ɵqud(335544320, 7, { contentDirective: 0 }), i1.ɵqud(335544320, 8, { viewChangeDirective: 0 }), i1.ɵdid(9, 212992, null, 0, i6.SectionComponentRefDirective, [i1.Injector, i12.FarrisSectionComponent, i1.ElementRef, i7.FrameContext], null, null), (_l()(), i1.ɵeld(10, 0, null, 0, 2, "div", [["class", "f-utils-fill"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DataGridComponent_2)), i1.ɵdid(12, 16384, null, 0, i13.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.SectiondatagridsectionMainTitle; var currVal_7 = _co.SectiondatagridsectionSubTitle; var currVal_8 = false; var currVal_9 = true; var currVal_10 = "default"; var currVal_11 = false; var currVal_12 = true; var currVal_13 = _co.index; _ck(_v, 1, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); _ck(_v, 9, 0); var currVal_14 = true; _ck(_v, 12, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).baseCls; var currVal_1 = i1.ɵnov(_v, 1).maxStatus; var currVal_2 = i1.ɵnov(_v, 1).fillCls; var currVal_3 = i1.ɵnov(_v, 1).enableAccordionCls; var currVal_4 = i1.ɵnov(_v, 1).enableCollapseCls; var currVal_5 = i1.ɵnov(_v, 1).enableCustomAccordionCls; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
export function View_DataGridComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(671088640, 1, { dataGridDataGrid: 0 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_DataGridComponent_1)), i1.ɵdid(2, 16384, null, 0, i13.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = true; _ck(_v, 2, 0, currVal_0); }, null); }
export function View_DataGridComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 83, "app-datagridcomponent", [], [[8, "className", 0]], null, null, View_DataGridComponent_0, RenderType_DataGridComponent)), i1.ɵprd(4608, null, i14.NavigationEventService, i14.NavigationEventService, [i14.RuntimeFrameworkService, i14.MenuStateService, i14.QuerystringService]), i1.ɵprd(4608, null, i14.NavigationService, i14.NavigationService, [i14.RuntimeFrameworkService, i14.MenuStateService, i14.NavigationEventService, i14.QuerystringService, [2, i7.FrameContext], [2, i1.Injector], [2, i14.LanguageService]]), i1.ɵprd(4608, null, i7.ViewModel, i15.DataGridComponentViewmodel, []), i1.ɵprd(4608, null, i14.CommandService, i14.CommandService, [i7.ViewModel, i7.AppContext]), i1.ɵprd(4608, null, i14.CardDataService, i14.CardDataService, [i14.FormMessageService, i7.FrameContext, i14.FormLoadingService, i14.FormNotifyService, [2, i14.LanguageService], i14.FormErrorService, i14.RuntimeFrameworkService, i14.CommandService]), i1.ɵprd(4608, null, i14.NavigationMiddlewareService, i14.NavigationMiddlewareService, [i14.NavigationService, i7.FrameContext, i14.FormMessageService, [2, i14.LanguageService], i14.CardDataService]), i1.ɵprd(135680, null, i7.BindingData, i7.BindingData, []), i1.ɵprd(4608, null, i14.ListDataService, i14.ListDataService, [i14.FormMessageService, i7.Repository, i7.BindingData, i14.FormLoadingService, [2, i14.LanguageService], i14.FormNotifyService, i14.FormErrorService, i7.ViewModel, i14.FilterConditionService]), i1.ɵprd(4608, null, i14.DataGridService, i14.DataGridService, []), i1.ɵprd(4608, null, i14.StateMachineService, i14.StateMachineService, [i7.StateMachine]), i1.ɵprd(5120, null, i7.COMMAND_HANDLERS_TOKEN, function (p0_0, p0_1, p1_0, p1_1, p2_0, p3_0, p3_1, p4_0) { return [new i16.loadList1Handler(p0_0, p0_1), new i17.remove1Handler(p1_0, p1_1), new i18.loadCard1Handler(p2_0), new i19.add1Handler(p3_0, p3_1), new i20.changePage1Handler(p4_0)]; }, [i14.NavigationMiddlewareService, i14.ListDataService, i14.DataGridService, i14.ListDataService, i14.CardDataService, i14.ListDataService, i14.StateMachineService, i14.CommandService]), i1.ɵprd(4608, null, i7.CommandHandlerRegistry, i7.CommandHandlerRegistry, [[2, i7.COMMAND_HANDLERS_TOKEN]]), i1.ɵprd(4608, null, i7.CommandHandlerExtenderRegistry, i7.CommandHandlerExtenderRegistry, [[2, i7.COMMAND_HANDLER_EXTENDERS_TOKEN]]), i1.ɵprd(4608, null, i7.CommandHandlerFactory, i7.CommandHandlerFactory, [i7.CommandHandlerRegistry, i7.CommandHandlerExtenderRegistry, i7.FrameContext, i7.VariableParseService]), i1.ɵprd(4608, null, i7.CommandBus, i7.CommandBus, [i7.CommandHandlerFactory]), i1.ɵprd(4608, null, i14.ValidationService, i14.ValidationService, [i7.Repository, i7.FrameContext, [2, i14.FormNotifyService], [2, i14.LanguageService]]), i1.ɵprd(4608, null, i14.ChangeItemService, i14.ChangeItemService, [i7.Repository, i7.FrameContext, i14.FormNotifyService, i14.LanguageService]), i1.ɵprd(4608, null, i14.UIStateService, i14.UIStateService, []), i1.ɵprd(4608, null, i14.BindingDataService, i14.BindingDataService, [i7.BindingData, i7.AppContext]), i1.ɵprd(4608, null, i14.EntityTraversingService, i14.EntityTraversingService, [i7.FrameContext]), i1.ɵprd(4608, null, i14.EntityManipulationService, i14.EntityManipulationService, [i7.FrameContext]), i1.ɵprd(4608, null, i14.EntityAggregationService, i14.EntityAggregationService, [i7.FrameContext]), i1.ɵprd(4608, null, i14.EntityListService, i14.EntityListService, [i7.BindingData]), i1.ɵprd(4608, null, i14.EntityService, i14.EntityService, [i7.FrameContext]), i1.ɵprd(4608, null, i14.TreeDataService, i14.TreeDataService, [i7.FrameContext, i14.FormMessageService, i14.FormLoadingService, i14.FormNotifyService, i14.FormErrorService, [2, i14.LanguageService]]), i1.ɵprd(4608, null, i14.SubTreeDataService, i14.SubTreeDataService, [i7.FrameContext, i7.ViewModel, i14.FormMessageService, i14.FormLoadingService, i14.FormErrorService, i14.FormNotifyService, [2, i14.LanguageService]]), i1.ɵprd(4608, null, i14.SubListDataService, i14.SubListDataService, [i14.FormMessageService, i7.Repository, i14.FormLoadingService, i7.ViewModel, [2, i14.LanguageService], i14.FormNotifyService, i14.FormErrorService]), i1.ɵprd(4608, null, i14.RemoveDataService, i14.RemoveDataService, [i7.FrameContext]), i1.ɵprd(4608, null, i14.SaveDataService, i14.SaveDataService, [i7.FrameContext]), i1.ɵprd(4608, null, i14.EditDataService, i14.EditDataService, [i7.FrameContext]), i1.ɵprd(4608, null, i14.FilterConditionDataService, i14.FilterConditionDataService, [i7.ViewModel, i14.FilterConditionService, i14.CommandService]), i1.ɵprd(4608, null, i14.RemoteSummaryService, i14.RemoteSummaryService, [i7.ViewModel]), i1.ɵprd(4608, null, i14.BeActionService, i14.BeActionService, [i7.Repository, i14.FormLoadingService, i14.FormMessageService, i14.FormNotifyService, i14.FormErrorService, [2, i14.LanguageService]]), i1.ɵprd(4608, null, i14.ApproveService, i14.ApproveService, [i14.FormLoadingService, i14.BeActionService, i14.FormMessageService, i14.FormNotifyService, [2, i14.LanguageService], i14.FormErrorService, i7.FrameContext, [2, i21.WFSubmiteService], [2, i22.WFFlowchartService], [2, i23.WfTaskHandlerService]]), i1.ɵprd(4608, null, i14.PrintService, i14.PrintService, [i14.FormMessageService, i14.LanguageService, i24.CloudprintService, [2, i14.FormNotifyService]]), i1.ɵprd(4608, null, i14.AttachmentDataService, i14.AttachmentDataService, [i7.FrameContext, i14.FormLoadingService]), i1.ɵprd(4608, null, i14.AttachmentService, i14.AttachmentService, [i7.FrameContext, i14.AttachmentDataService, i14.FormNotifyService, i25.UploadDialogService, [2, i25.DownloadService]]), i1.ɵprd(4608, null, i14.FileService, i14.FileService, [i7.FrameContext, i14.AttachmentDataService, i14.EntityService, i14.SubListDataService, i14.FormNotifyService, i14.LanguageService, i14.ListDataService, [2, i14.FormLoadingService]]), i1.ɵprd(4608, null, i14.GridMiddlewareService, i14.GridMiddlewareService, [i7.FrameContext, i14.FormMessageService, [2, i14.LanguageService], i7.ViewModel, i14.CommandService]), i1.ɵprd(4608, null, i14.SidebarService, i14.SidebarService, [i7.FrameContext, i26.FarrisSidebarService, i14.FormMessageService, [2, i14.LanguageService]]), i1.ɵprd(4608, null, i14.FarrisFormService, i14.FarrisFormService, [[2, i14.FARRIS_FORM_COMPONENTS]]), i1.ɵprd(4608, null, i14.DialogService, i14.DialogService, [i27.BsModalService, i14.FarrisFormService, i1.ComponentFactoryResolver, i7.FrameContext, [2, i1.Injector]]), i1.ɵprd(4608, null, i14.RouterService, i14.RouterService, [i28.Router, i7.RouterParamService, i29.FrameworkService, [2, i29.AppService], [2, i14.MenuStateService], [2, i14.LanguageService]]), i1.ɵprd(4608, null, i14.AuthorityService, i14.AuthorityService, []), i1.ɵprd(4608, null, i30.QUERYSOLUTION_HANDLER_TOKEN, i14.ɵb, [i7.FrameContext, i31.FrameworkSessionService]), i1.ɵprd(4608, null, i32.LISTFILTER_HANDLER_TOKEN, i14.ɵc, [i7.FrameContext]), i1.ɵprd(4608, null, i14.EndEditService, i14.EndEditService, [i7.FrameContext]), i1.ɵprd(4608, null, i33.BatchEditDialogService, i33.BatchEditDialogService, [i1.Injector, i27.BsModalService, i1.ComponentFactoryResolver, i34.LocaleService]), i1.ɵprd(4608, null, i14.BatchEditService, i14.BatchEditService, [i1.Injector, i14.ComponentManagerService, i7.ViewModel, i7.Repository, i33.BatchEditDialogService, i8.DateTimeHelperService, i14.LanguageService, i14.FormNotifyService]), i1.ɵprd(4608, null, i14.DiscussionGroupService, i14.DiscussionGroupService, [i1.Injector, i7.FrameContext, i14.FormLoadingService, i14.RuntimeFrameworkService]), i1.ɵprd(4608, null, i14.FormAttentionService, i14.FormAttentionService, [i1.Injector, i7.FrameContext, i35.AttentionService]), i1.ɵprd(4608, null, i36.FeatureEditorService, i36.FeatureEditorService, [i1.Injector, i27.BsModalService, i1.ComponentFactoryResolver, i34.LocaleService, i36.I18nService]), i1.ɵprd(4608, null, i14.FeatureDataService, i14.FeatureDataService, [i1.Injector, i14.FeatureRepository, [2, i1.LOCALE_ID]]), i1.ɵprd(4608, null, i14.FeatureEditService, i14.FeatureEditService, [i1.Injector, i36.FeatureEditorService, i14.FeatureDataService, i14.FormLoadingService, i14.FormNotifyService, i14.LanguageService]), i1.ɵprd(4608, null, i14.ExpressionService, i14.ExpressionService, [i1.Injector, i7.ResolveService, i7.FrameContext, i7.ExpressionExecutor]), i1.ɵprd(4608, null, i14.PopUpService, i14.PopUpService, [i1.Injector, i7.FrameContext, i7.Repository, i14.LanguageService, i14.FormMessageService]), i1.ɵprd(4608, null, i14.DirtyCheckingService, i14.DirtyCheckingService, [i1.Injector, i1.ChangeDetectorRef, i1.ApplicationRef]), i1.ɵprd(4608, null, i14.FormService, i14.FormService, [i1.Injector, i7.AppContext, i7.Repository]), i1.ɵprd(4608, null, i14.ViewModelService, i14.ViewModelService, []), i1.ɵprd(4608, null, i14.PaginationService, i14.PaginationService, [i1.Injector, i7.FrameContext]), i1.ɵprd(4608, null, i7.FORM_MANIFEST_SERVICE_TOKEN, i14.FormManifestService, [i1.Injector, i7.FORM_PATH_TOKEN, i4.HttpClient]), i1.ɵprd(4608, null, i7.FORM_EXPRESSION_MANIFEST_SERVICE_TOKEN, i14.FormExpressionManifestService, [i1.Injector, i7.FrameContext, i4.HttpClient, i7.FORM_PATH_TOKEN, i7.FORM_MANIFEST_SERVICE_TOKEN]), i1.ɵprd(4608, null, i7.MESSAGE_SERVICE_TOKEN, i14.FormMessageService, [i37.MessagerService, [2, i14.LanguageService], i1.LOCALE_ID]), i1.ɵprd(4608, null, i7.NOTIFY_SERVICE_TOKEN, i14.FormNotifyService, [i38.NotifyService, [2, i14.LanguageService]]), i1.ɵprd(5120, null, i7.FRAME_COMPONENT_INIT_HANDLER_TOKEN, function (p0_0, p0_1, p0_2, p0_3) { return [new i14.WorkFlowMessageHandler(p0_0, p0_1, p0_2, p0_3)]; }, [i1.Injector, i7.FrameContext, i14.WorkFlowMessageService, i14.WorkFlowMessage]), i1.ɵprd(4608, null, i39.ServerSideToken, i31.BefLookupRestService, [i7.Repository, [2, i7.FrameContext]]), i1.ɵprd(4608, null, i40.ComboServerSideToken, i31.DefaultComboHttpService, [i7.Repository]), i1.ɵprd(4608, null, i3.GRID_SETTINGS_HTTP, i31.BefLookupRestService, [i7.Repository, [2, i7.FrameContext]]), i1.ɵprd(4608, null, i7.Form, i41.DataGridComponentViewmodelForm, []), i1.ɵprd(4608, null, i7.UIState, i42.DataGridComponentViewmodelUIState, []), i1.ɵprd(4608, null, i43.DataImportExportService, i43.DataImportExportService, [i27.BsModalService, i1.ComponentFactoryResolver, i1.Injector, i7.FrameContext, i43.ɵf, i38.NotifyService, i14.EntityListService, i43.ɵg, i43.DataieHandcraftService, i4.HttpClient, i44.LoadingService, i43.ɵc]), i1.ɵprd(512, null, i45.LangService, i45.LangService, [i46.TranslateService]), i1.ɵprd(512, null, i14.LocalizationService, i14.LocalizationService, [i1.Injector, i7.UserSettingsToken]), i1.ɵprd(2048, null, i7.Repository, null, [i47.GoodsRepository]), i1.ɵprd(131584, null, i7.FrameContext, i7.FrameContext, [i1.Injector, [3, i7.FrameContext]]), i1.ɵprd(512, null, i14.BindingPathService, i14.BindingPathService, [i1.Injector, i7.AppContext, i7.Repository]), i1.ɵprd(512, null, i14.FormControlService, i14.FormControlService, []), i1.ɵprd(512, null, i14.FrameContextService, i14.FrameContextService, [i1.Injector, i7.AppContext, i7.FrameContext, i7.Repository, i14.BindingPathService, i14.FormControlService]), i1.ɵprd(512, null, i14.FocusInvalidService, i14.FocusInvalidService, [i7.Repository, i7.FrameContext, i14.FrameContextService, i14.FormControlService]), i1.ɵdid(80, 4440064, null, 0, i48.DataGridComponent, [i49.WizardService, i14.KeybindingService, i45.LangService, i28.ActivatedRoute, i28.Router, i1.ElementRef, i14.LocalizationService, i29.FrmI18nSettingService, i14.FocusInvalidService, i9.CommonUtils, i5.DomSanitizer, i1.Injector], null, null), i1.ɵprd(256, null, i7.FRAME_ID, "data-grid-component", []), i1.ɵprd(256, null, i7.NAMESPACE, "", []), i1.ɵprd(256, null, i7.EXCEPTION_HANDLER, null, [])], function (_ck, _v) { _ck(_v, 80, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 80).cls; _ck(_v, 0, 0, currVal_0); }); }
var DataGridComponentNgFactory = i1.ɵccf("app-datagridcomponent", i48.DataGridComponent, View_DataGridComponent_Host_0, {}, {}, []);
export { DataGridComponentNgFactory as DataGridComponentNgFactory };
