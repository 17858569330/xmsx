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
    return new TranslateHttpLoader(http, '/apps/hotwave/stock/web/bo-goodsstock-front/goodsstockform/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/TextBox/merchantID_MerchantID_MerchantName_79ed0464_8y3y/placeHolder": "", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5/editor/LookupEdit/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_s77w/placeHolder": "", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5/editor/LookupEdit/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_s77w/dialogTitle": "", "merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5": "上游商户/经销商", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5/editor/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_s77w": "文本", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_1ln5/editor/TextBox/merchantID_MerchantID_ParentMerchantID_MerchantName_68b3d782_s77w/placeHolder": "", "goodsID_GoodsID_Number_7c020a3a_3vys": "上架数量", "GridField/goodsID_GoodsID_Number_7c020a3a_3vys/editor/goodsID_GoodsID_Number_7c020a3a_kdpj": "数值框", "GridField/goodsID_GoodsID_Number_7c020a3a_3vys/editor/NumberSpinner/goodsID_GoodsID_Number_7c020a3a_kdpj/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "商品库表单", "page-header-toolbar": "", "button-add": "新增", "ToolBar-cloned-lit8": "批量新增", "button-edit": "批量编辑", "button-save": "保存", "button-cancel": "取消", "button-delete": "删除", "page-main": "", "data-grid-component-ref": "", "HiddenContainer-form": "", "helpId": "商品帮助", "LookupEdit/helpId/placeHolder": "", "LookupEdit/helpId/dialogTitle": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "merchantID_MerchantID_MerchantName_79ed0464_zoer": "商户名称", "GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/merchantID_MerchantID_MerchantName_79ed0464_8y3y": "文本", "GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/LookupEdit/merchantID_MerchantID_MerchantName_79ed0464_8y3y/placeHolder": "", "GridField/merchantID_MerchantID_MerchantName_79ed0464_zoer/editor/LookupEdit/merchantID_MerchantID_MerchantName_79ed0464_8y3y/dialogTitle": "", "merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik": "上游商户/经销商", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik/editor/merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824": "商户名称", "GridField/merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_9zik/editor/TextBox/merchantID_MerchantID_ParentMerchantID_MerchantName_69737d7a_u824/placeHolder": "", "goodsID_GoodsID_GoodsName_ade04dc1_1mgy": "商品名称", "GridField/goodsID_GoodsID_GoodsName_ade04dc1_1mgy/editor/goodsID_GoodsID_GoodsName_ade04dc1_89ef": "文本", "GridField/goodsID_GoodsID_GoodsName_ade04dc1_1mgy/editor/TextBox/goodsID_GoodsID_GoodsName_ade04dc1_89ef/placeHolder": "", "goodsID_GoodsID_Specification_d208e853_2hno": "规格型号", "GridField/goodsID_GoodsID_Specification_d208e853_2hno/editor/goodsID_GoodsID_Specification_d208e853_2i8n": "文本", "GridField/goodsID_GoodsID_Specification_d208e853_2hno/editor/TextBox/goodsID_GoodsID_Specification_d208e853_2i8n/placeHolder": "", "goodsID_GoodsID_Price_bc6384c0_fjgd": "单价", "GridField/goodsID_GoodsID_Price_bc6384c0_fjgd/editor/goodsID_GoodsID_Price_bc6384c0_fq6p": "数值框", "GridField/goodsID_GoodsID_Price_bc6384c0_fjgd/editor/NumberSpinner/goodsID_GoodsID_Price_bc6384c0_fq6p/placeHolder": "", "stockNum_f152e4b2_fhhp": "当前库存量", "GridField/stockNum_f152e4b2_fhhp/editor/stockNum_f152e4b2_k1ri": "当前库存量", "GridField/stockNum_f152e4b2_fhhp/editor/NumberSpinner/stockNum_f152e4b2_k1ri/placeHolder": "" } };
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
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
