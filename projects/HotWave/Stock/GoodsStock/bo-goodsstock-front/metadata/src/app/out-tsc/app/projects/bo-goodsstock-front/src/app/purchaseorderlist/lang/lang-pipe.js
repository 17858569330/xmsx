import * as tslib_1 from "tslib";
import { Pipe, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
export function createTranslateLoader(http, version) {
    var versionSuffix = "";
    if (version) {
        versionSuffix = "?v=" + version;
    }
    return new TranslateHttpLoader(http, '/apps/hotwave/stock/web/bo-goodsstock-front/purchaseorderlist/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "query-scheme-section": "", "Section/query-scheme-section/mainTitle": "主标题", "Section/query-scheme-section/subTitle": "", "query-scheme-1": "默认筛选方案", "QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0": "状态", "QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/placeHolder": "", "QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing": "制单", "QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval": "提交审批", "QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved": "审批通过", "QueryScheme/query-scheme-1/b3d11341-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed": "审批不通过", "QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc": "采购编号", "QueryScheme/query-scheme-1/173a6f07-f50e-44db-810d-6c441b941fbc/placeHolder": "", "QueryScheme/query-scheme-1/b31c76b0-ccdf-42b3-add5-ee7a7894a050": "商户名称", "QueryScheme/query-scheme-1/b31c76b0-ccdf-42b3-add5-ee7a7894a050/placeHolder": "", "QueryScheme/query-scheme-1/c296a2af-7a51-4e24-bb77-dcf4743c1848": "商户名称", "QueryScheme/query-scheme-1/c296a2af-7a51-4e24-bb77-dcf4743c1848/placeHolder": "", "QueryScheme/query-scheme-1/1bcac9ae-e281-4528-a702-5b8604dc08ab": "管理员", "QueryScheme/query-scheme-1/1bcac9ae-e281-4528-a702-5b8604dc08ab/placeHolder": "", "QueryScheme/query-scheme-1/a5f6d271-cbfe-4199-86e0-48ec73d31ac1": "预计送达时间", "QueryScheme/query-scheme-1/a5f6d271-cbfe-4199-86e0-48ec73d31ac1/placeHolder": "", "QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6": "下单时间", "QueryScheme/query-scheme-1/5fb59eb7-9663-4702-9ac9-73611f2710b6/placeHolder": "", "QueryScheme/query-scheme-1/f462f519-1918-4218-be9f-fadfa0d2031b": "下单人", "QueryScheme/query-scheme-1/f462f519-1918-4218-be9f-fadfa0d2031b/placeHolder": "", "QueryScheme/query-scheme-1/4e89a276-7aef-4598-8935-47104b273da7": "名称", "QueryScheme/query-scheme-1/4e89a276-7aef-4598-8935-47104b273da7/placeHolder": "", "QueryScheme/query-scheme-1/460dc9cc-4652-4024-8a8c-5e7eb9c01288": "采购金额", "QueryScheme/query-scheme-1/460dc9cc-4652-4024-8a8c-5e7eb9c01288/placeHolder": "", "QueryScheme/query-scheme-1/a4978aa8-6491-46fc-8c95-ef7419836f99": "备注", "QueryScheme/query-scheme-1/a4978aa8-6491-46fc-8c95-ef7419836f99/placeHolder": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "补货代购单列表", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-view": "查看", "button-delete": "删除", "button-approve": "提交审批", "button-cancel-approve": "取消提交审批", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "orderCode_173a6f07_6v9a": "采购编号", "merchant_Merchant_MerchantName_b31c76b0_ui74": "商户名称", "merchant_Merchant_ParentMerchantID_MerchantName_c296a2af_usp5": "上游商户/经销商", "expectedTime_a5f6d271_bs1j": "预计送达时间", "orderTime_5fb59eb7_5a6y": "下单时间", "orderPerson_OrderPerson_name_4e89a276_0b64": "下单人", "billStatus_BillState_b3d11341_iqfk": "单据状态", "GridField/billStatus_BillState_b3d11341_iqfk/enumData/Billing": "制单", "GridField/billStatus_BillState_b3d11341_iqfk/enumData/SubmitApproval": "提交审批", "GridField/billStatus_BillState_b3d11341_iqfk/enumData/Approved": "审批通过", "GridField/billStatus_BillState_b3d11341_iqfk/enumData/ApprovalNotPassed": "审批不通过", "totalPrice_460dc9cc_54te": "采购金额" } };
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
    LangPipe = tslib_1.__decorate([
        Pipe({ name: 'lang' }),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], LangPipe);
    return LangPipe;
}());
export { LangPipe };
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
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({ name: 'safeHtml' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
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
    LangService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService])
    ], LangService);
    return LangService;
}());
export { LangService };
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
                    var versionKey_1 = "purchaseorderlist/" + langCode + ".json";
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
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
