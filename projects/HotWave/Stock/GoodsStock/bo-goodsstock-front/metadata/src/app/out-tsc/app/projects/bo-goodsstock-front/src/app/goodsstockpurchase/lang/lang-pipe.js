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
    return new TranslateHttpLoader(http, '/apps/hotwave/stock/web/bo-goodsstock-front/goodsstockpurchase/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "merchantID_MerchantID_ParentMerchantID_MerchantName_a0fef639_6lxm": "上游商户/经销商", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_a0fef639_6lxm/editor/merchantID_MerchantID_ParentMerchantID_MerchantName_a0fef639_mocw": "文本", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_a0fef639_6lxm/editor/TextBox/merchantID_MerchantID_ParentMerchantID_MerchantName_a0fef639_mocw/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "智能补货", "page-header-toolbar": "", "button-add": "生成补货单", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "button-delete": "删除", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "merchantID_MerchantID_MerchantName_449ab777_1loy": "商户名称", "GridField/merchantID_MerchantID_MerchantName_449ab777_1loy/editor/merchantID_MerchantID_MerchantName_449ab777_04y5": "文本", "GridField/merchantID_MerchantID_MerchantName_449ab777_1loy/editor/TextBox/merchantID_MerchantID_MerchantName_449ab777_04y5/placeHolder": "", "merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_nrnh": "上游商户/经销商", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_nrnh/editor/merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_487y": "商户名称", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_nrnh/editor/TextBox/merchantID_MerchantID_ParentMerchantID_MerchantName_a0506f55_487y/placeHolder": "", "goodsID_GoodsID_GoodsName_4d203697_hjqn": "商品名称", "GridField/goodsID_GoodsID_GoodsName_4d203697_hjqn/editor/goodsID_GoodsID_GoodsName_4d203697_ofi2": "文本", "GridField/goodsID_GoodsID_GoodsName_4d203697_hjqn/editor/TextBox/goodsID_GoodsID_GoodsName_4d203697_ofi2/placeHolder": "", "goodsID_GoodsID_Specification_b1978607_m5lu": "规格型号", "GridField/goodsID_GoodsID_Specification_b1978607_m5lu/editor/goodsID_GoodsID_Specification_b1978607_zciu": "文本", "GridField/goodsID_GoodsID_Specification_b1978607_m5lu/editor/TextBox/goodsID_GoodsID_Specification_b1978607_zciu/placeHolder": "", "goodsID_GoodsID_Price_c6bb9f5c_v1zr": "单价", "GridField/goodsID_GoodsID_Price_c6bb9f5c_v1zr/editor/goodsID_GoodsID_Price_c6bb9f5c_ht84": "数值框", "GridField/goodsID_GoodsID_Price_c6bb9f5c_v1zr/editor/NumberSpinner/goodsID_GoodsID_Price_c6bb9f5c_ht84/placeHolder": "", "stockNum_a92c4fee_3qma": "当前库存量", "GridField/stockNum_a92c4fee_3qma/editor/stockNum_a92c4fee_i4zf": "数值框", "GridField/stockNum_a92c4fee_3qma/editor/NumberSpinner/stockNum_a92c4fee_i4zf/placeHolder": "", "dailySalesNum_4c701678_jvc7": "日销量", "GridField/dailySalesNum_4c701678_jvc7/editor/dailySalesNum_4c701678_se6r": "数值框", "GridField/dailySalesNum_4c701678_jvc7/editor/NumberSpinner/dailySalesNum_4c701678_se6r/placeHolder": "", "safetyStockDays_2e8b73c1_jlxv": "安全库存天数", "GridField/safetyStockDays_2e8b73c1_jlxv/editor/safetyStockDays_2e8b73c1_qaf6": "数值框", "GridField/safetyStockDays_2e8b73c1_jlxv/editor/NumberSpinner/safetyStockDays_2e8b73c1_qaf6/placeHolder": "", "safetyStockNum_b650091f_j94p": "安全库存量", "GridField/safetyStockNum_b650091f_j94p/editor/safetyStockNum_b650091f_dw29": "数值框", "GridField/safetyStockNum_b650091f_j94p/editor/NumberSpinner/safetyStockNum_b650091f_dw29/placeHolder": "", "inPurchaseNum_aad3f44b_d4kf": "采购在订量", "GridField/inPurchaseNum_aad3f44b_d4kf/editor/inPurchaseNum_aad3f44b_9taw": "数值框", "GridField/inPurchaseNum_aad3f44b_d4kf/editor/NumberSpinner/inPurchaseNum_aad3f44b_9taw/placeHolder": "", "inSalesNum_e3ff082d_onrr": "销售在订量", "GridField/inSalesNum_e3ff082d_onrr/editor/inSalesNum_e3ff082d_f00v": "数值框", "GridField/inSalesNum_e3ff082d_onrr/editor/NumberSpinner/inSalesNum_e3ff082d_f00v/placeHolder": "", "suggestPurchaseNum_5da37cfa_iizm": "建议采购量", "GridField/suggestPurchaseNum_5da37cfa_iizm/editor/suggestPurchaseNum_5da37cfa_orwk": "数值框", "GridField/suggestPurchaseNum_5da37cfa_iizm/editor/NumberSpinner/suggestPurchaseNum_5da37cfa_orwk/placeHolder": "" } };
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
                    var versionKey_1 = "goodsstockpurchase/" + langCode + ".json";
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
