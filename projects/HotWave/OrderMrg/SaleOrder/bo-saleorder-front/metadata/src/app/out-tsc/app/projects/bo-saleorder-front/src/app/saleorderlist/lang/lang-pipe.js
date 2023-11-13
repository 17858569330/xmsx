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
    return new TranslateHttpLoader(http, '/apps/hotwave/ordermrg/web/bo-saleorder-front/saleorderlist/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "query-scheme-section": "", "Section/query-scheme-section/mainTitle": "主标题", "Section/query-scheme-section/subTitle": "", "query-scheme-1": "默认筛选方案", "QueryScheme/query-scheme-1/733efd3c-f6e8-4531-9376-f75141601f7e": "主键", "QueryScheme/query-scheme-1/733efd3c-f6e8-4531-9376-f75141601f7e/placeHolder": "", "QueryScheme/query-scheme-1/2482e064-3e32-4792-b5be-9fdf4cc79af4": "版本", "QueryScheme/query-scheme-1/2482e064-3e32-4792-b5be-9fdf4cc79af4/placeHolder": "", "QueryScheme/query-scheme-1/767a620f-1ef5-4853-9790-fd32a7e95641": "订单编号", "QueryScheme/query-scheme-1/767a620f-1ef5-4853-9790-fd32a7e95641/placeHolder": "", "QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914": "商户", "QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/placeHolder": "", "QueryScheme/query-scheme-1/96976ac9-3bb4-4663-8f10-887f7a17d914/control/help/dialogTitle": "", "QueryScheme/query-scheme-1/c0169d08-558e-45b7-a8c3-29f411eb25e8": "商户名称", "QueryScheme/query-scheme-1/c0169d08-558e-45b7-a8c3-29f411eb25e8/placeHolder": "", "QueryScheme/query-scheme-1/40871ebf-bd7e-4838-8ef2-836d45e805ef": "商户编号", "QueryScheme/query-scheme-1/40871ebf-bd7e-4838-8ef2-836d45e805ef/placeHolder": "", "QueryScheme/query-scheme-1/308bc30d-b0e8-4d30-855a-b50d3ed42a63": "下单时间", "QueryScheme/query-scheme-1/308bc30d-b0e8-4d30-855a-b50d3ed42a63/placeHolder": "", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358": "支付方式", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/placeHolder": "", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/Cash": "现金", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/AliPay": "支付宝", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/WeChat": "微信支付", "QueryScheme/query-scheme-1/29a89f50-5554-4bb0-9046-03d5a5610358/control/enumValues/UPay": "银联", "QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb": "下单人", "QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/placeHolder": "", "QueryScheme/query-scheme-1/771cf8b5-c0e8-42d1-8da0-de6ac2498afb/control/help/dialogTitle": "", "QueryScheme/query-scheme-1/a2bef0a2-4eff-4d83-af88-c8ff337f808e": "编号", "QueryScheme/query-scheme-1/a2bef0a2-4eff-4d83-af88-c8ff337f808e/placeHolder": "", "QueryScheme/query-scheme-1/4481a4c2-43d1-4211-b56b-16f265165340": "名称", "QueryScheme/query-scheme-1/4481a4c2-43d1-4211-b56b-16f265165340/placeHolder": "", "QueryScheme/query-scheme-1/866d4620-a685-4388-8ce1-9be5291dc38e": "联系电话", "QueryScheme/query-scheme-1/866d4620-a685-4388-8ce1-9be5291dc38e/placeHolder": "", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d": "发货状态", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/placeHolder": "", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/UnShipped": "未发货", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/Shipped": "已发货", "QueryScheme/query-scheme-1/11e5bd1a-1487-4031-b74a-3db20379c62d/control/enumValues/Done": "已收货", "QueryScheme/query-scheme-1/743dc1bc-be9d-46e4-bd4c-36048d3b10a7": "备注", "QueryScheme/query-scheme-1/743dc1bc-be9d-46e4-bd4c-36048d3b10a7/placeHolder": "", "QueryScheme/query-scheme-1/cd60f924-00e3-49d1-b3f9-a20e437439f7": "订单金额", "QueryScheme/query-scheme-1/cd60f924-00e3-49d1-b3f9-a20e437439f7/placeHolder": "", "QueryScheme/query-scheme-1/dadf3137-4061-41b5-aed2-bbc5866de901": "折扣优惠", "QueryScheme/query-scheme-1/dadf3137-4061-41b5-aed2-bbc5866de901/placeHolder": "", "QueryScheme/query-scheme-1/6310d9f5-36da-4b43-8c21-5e32e23725ef": "合计实付", "QueryScheme/query-scheme-1/6310d9f5-36da-4b43-8c21-5e32e23725ef/placeHolder": "", "QueryScheme/query-scheme-1/070516f9-8648-4811-8500-2263aa14f150": "订单来源", "QueryScheme/query-scheme-1/070516f9-8648-4811-8500-2263aa14f150/placeHolder": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "销售订单表单", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-view": "查看", "button-delete": "删除", "toolBarItem-1ra7": "发货", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "merchant_Merchant_MerchantName_c0169d08_9r7o": "商户名称", "orderCode_767a620f_0314": "订单编号", "orderPerson_OrderPerson_name_4481a4c2_lfg9": "下单人", "orderTime_308bc30d_axsq": "下单时间", "telephone_866d4620_1gi0": "联系电话", "payMethod_29a89f50_3c87": "支付方式", "GridField/payMethod_29a89f50_3c87/enumData/Cash": "现金", "GridField/payMethod_29a89f50_3c87/enumData/AliPay": "支付宝", "GridField/payMethod_29a89f50_3c87/enumData/WeChat": "微信支付", "GridField/payMethod_29a89f50_3c87/enumData/UPay": "银联", "sendState_11e5bd1a_wmm0": "发货状态", "GridField/sendState_11e5bd1a_wmm0/enumData/UnShipped": "未发货", "GridField/sendState_11e5bd1a_wmm0/enumData/Shipped": "已发货", "GridField/sendState_11e5bd1a_wmm0/enumData/Done": "已收货", "totalPrice_cd60f924_2r7f": "订单金额", "totalDiscounts_dadf3137_toe5": "折扣优惠", "actualPay_6310d9f5_3uu8": "合计实付", "remark_743dc1bc_nr9s": "备注" } };
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
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
