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
    return new TranslateHttpLoader(http, '/apps/hotwave/database/web/bo-merchant-front/merchantform/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "parentMerchantID_091777d9_m59h": "上游商户", "LookupEdit/parentMerchantID_091777d9_m59h/placeHolder": "", "LookupEdit/parentMerchantID_091777d9_m59h/dialogTitle": "", "parentMerchantID_ParentMerchantID_MerchantName_9f1377d8_4swn": "上游商户名称", "LookupEdit/parentMerchantID_ParentMerchantID_MerchantName_9f1377d8_4swn/placeHolder": "", "LookupEdit/parentMerchantID_ParentMerchantID_MerchantName_9f1377d8_4swn/dialogTitle": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "商户表单", "page-header-toolbar": "", "button-addSibling": "新增同级", "button-addChild": "新增子级", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "button-delete": "删除", "button-data-import": "导入", "button-data-export": "导出", "main-container": "", "content-splitter": "", "content-tree": "", "tree-grid-component-ref": "", "content-main": "", "detail-component-ref": "", "tree-grid-component": "", "tree-grid-section": "", "Section/tree-grid-section/mainTitle": "", "Section/tree-grid-section/subTitle": "", "treeGrid": "", "merchantName_c80a3305_atir": "商户名称", "merchantCode_decf103d_nbo2": "商户编号", "detail-form-component": "", "detail-form-section": "", "Section/detail-form-section/mainTitle": "基本信息", "Section/detail-form-section/subTitle": "", "detail-form-layout": "", "25e4424a-9608-4843-9a81-efb1caca83fc": "基本信息", "FieldSet/25e4424a-9608-4843-9a81-efb1caca83fc/collapseText": "", "FieldSet/25e4424a-9608-4843-9a81-efb1caca83fc/expandText": "", "merchantName_c80a3305_jl53": "商户名称", "TextBox/merchantName_c80a3305_jl53/placeHolder": "", "merchantCode_decf103d_sgwn": "商户编号", "TextBox/merchantCode_decf103d_sgwn/placeHolder": "", "parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh": "上游商户/经销商", "TextBox/parentMerchantID_ParentMerchantID_MerchantName_1953ca9e_l3yh/placeHolder": "", "companyType_34a5b660_aq4u": "企业类型", "EnumField/companyType_34a5b660_aq4u/placeHolder": "", "EnumField/companyType_34a5b660_aq4u/enumData/qy": "企业", "EnumField/companyType_34a5b660_aq4u/enumData/gt": "个体工商户", "EnumField/companyType_34a5b660_aq4u/enumData/gr": "个人", "merchantType_2e73fcca_2h7w": "商户类型", "EnumField/merchantType_2e73fcca_2h7w/placeHolder": "", "EnumField/merchantType_2e73fcca_2h7w/enumData/rz": "入驻商户", "EnumField/merchantType_2e73fcca_2h7w/enumData/jx": "经销商", "realName_ef543f0d_9x4a": "真实姓名", "TextBox/realName_ef543f0d_9x4a/placeHolder": "", "address_ce9be2ba_di1t": "商户地址", "TextBox/address_ce9be2ba_di1t/placeHolder": "", "remark_19c6ed5f_de82": "备注", "TextBox/remark_19c6ed5f_de82/placeHolder": "", "37f46890-a278-4ae1-8ef6-b7bd8e377cfb": "企业信息", "FieldSet/37f46890-a278-4ae1-8ef6-b7bd8e377cfb/collapseText": "", "FieldSet/37f46890-a278-4ae1-8ef6-b7bd8e377cfb/expandText": "", "fullName_1a36d5d9_rlsi": "企业全称", "TextBox/fullName_1a36d5d9_rlsi/placeHolder": "", "businessLicense_14ec2d6c_97z6": "营业执照编码", "TextBox/businessLicense_14ec2d6c_97z6/placeHolder": "", "04dee6bd-2a7b-4793-b0a2-7edea32b23dc": "管理员", "FieldSet/04dee6bd-2a7b-4793-b0a2-7edea32b23dc/collapseText": "", "FieldSet/04dee6bd-2a7b-4793-b0a2-7edea32b23dc/expandText": "", "email_5eeacb83_5dxr": "邮箱", "TextBox/email_5eeacb83_5dxr/placeHolder": "", "telephone_ab7face1_3ghr": "联系电话", "TextBox/telephone_ab7face1_3ghr/placeHolder": "" } };
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
            var httpOb = this.http.get("/apps/hotwave/database/web/bo-merchant-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                var currentVersion = null;
                if (data instanceof Array) {
                    var versionKey_1 = "merchantform/" + langCode + ".json";
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
