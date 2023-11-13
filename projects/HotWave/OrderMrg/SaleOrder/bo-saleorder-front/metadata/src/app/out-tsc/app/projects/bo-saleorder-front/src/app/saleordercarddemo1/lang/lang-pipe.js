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
    return new TranslateHttpLoader(http, '/apps/hotwave/ordermrg/web/bo-saleorder-front/saleordercarddemo1/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "orderPerson_OrderPerson_name_676aa1fa_zt2k": "名称", "TextBox/orderPerson_OrderPerson_name_676aa1fa_zt2k/placeHolder": "", "TextBox/merchant_Merchant_MerchantName_147deab4_1zy9/placeHolder": "", "TextBox/orderPerson_771cf8b5_32o4/placeHolder": "", "GridField/goods_d3829541_0hbn/editor/TextBox/goods_d3829541_zhpt/placeHolder": "", "title": "销售订单表单", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "page-header-state": "", "page-header-nav": "", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "scrollCollapsibleArea": "导航", "main-container": "", "scrollspy": "", "Scrollspy/scrollspy/items/basic-form-section": "基本信息", "Scrollspy/scrollspy/items/section-orderdetail": "订单明细", "scrollspy-container": "", "like-card-container": "", "basic-form-component-ref": "", "detail-container-orderdetail": "", "section-orderdetail": "", "Section/section-orderdetail/mainTitle": "订单明细", "Section/section-orderdetail/subTitle": "", "orderdetail-component-ref": "", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "3f39ffed-72a3-4484-a679-4c6ddb9f3913": "基本信息", "FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/collapseText": "", "FieldSet/3f39ffed-72a3-4484-a679-4c6ddb9f3913/expandText": "", "orderCode_1d7fb675_wqcn": "订单编号", "TextBox/orderCode_1d7fb675_wqcn/placeHolder": "", "merchant_Merchant_MerchantName_147deab4_1zy9": "商户名称", "LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/placeHolder": "", "LookupEdit/merchant_Merchant_MerchantName_147deab4_1zy9/dialogTitle": "", "orderPerson_771cf8b5_32o4": "下单人", "LookupEdit/orderPerson_771cf8b5_32o4/placeHolder": "", "LookupEdit/orderPerson_771cf8b5_32o4/dialogTitle": "", "orderPerson_OrderPerson_name_676aa1fa_yg9q": "下单人名称", "TextBox/orderPerson_OrderPerson_name_676aa1fa_yg9q/placeHolder": "", "orderTime_e0e86794_fc6z": "下单时间", "TextBox/orderTime_e0e86794_fc6z/placeHolder": "", "telephone_a8621f05_4hyo": "联系电话", "TextBox/telephone_a8621f05_4hyo/placeHolder": "", "59cd9ebd-1817-49ec-b9c4-cc38d330585c": "支付信息", "FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/collapseText": "", "FieldSet/59cd9ebd-1817-49ec-b9c4-cc38d330585c/expandText": "", "payMethod_ba5f52c1_xz4x": "支付方式", "EnumField/payMethod_ba5f52c1_xz4x/placeHolder": "", "EnumField/payMethod_ba5f52c1_xz4x/enumData/Cash": "现金", "EnumField/payMethod_ba5f52c1_xz4x/enumData/AliPay": "支付宝", "EnumField/payMethod_ba5f52c1_xz4x/enumData/WeChat": "微信支付", "EnumField/payMethod_ba5f52c1_xz4x/enumData/UPay": "银联", "sendState_3584b1dc_xv9j": "发货状态", "EnumField/sendState_3584b1dc_xv9j/placeHolder": "", "EnumField/sendState_3584b1dc_xv9j/enumData/UnShipped": "未发货", "EnumField/sendState_3584b1dc_xv9j/enumData/Shipped": "已发货", "EnumField/sendState_3584b1dc_xv9j/enumData/Done": "已收货", "totalPrice_559ae1d0_tdrx": "订单金额", "NumberSpinner/totalPrice_559ae1d0_tdrx/placeHolder": "", "totalDiscounts_878ff42f_djm9": "折扣优惠", "NumberSpinner/totalDiscounts_878ff42f_djm9/placeHolder": "", "actualPay_090e17ef_mvgt": "合计实付", "NumberSpinner/actualPay_090e17ef_mvgt/placeHolder": "", "remark_71281e54_dqeo": "备注", "TextBox/remark_71281e54_dqeo/placeHolder": "", "orderdetail-component": "", "orderdetail-component-layout": "", "dataGrid_orderdetail": "", "DataGrid/dataGrid_orderdetail/lineNumberTitle": "", "DataGrid/dataGrid_orderdetail/OperateEditButton": "编辑", "DataGrid/dataGrid_orderdetail/OperateDeleteButton": "删除", "DataGrid/dataGrid_orderdetail/OperateColumn": "操作", "goods_d3829541_0hbn": "商品", "GridField/goods_d3829541_0hbn/editor/goods_d3829541_zhpt": "文本", "GridField/goods_d3829541_0hbn/editor/LookupEdit/goods_d3829541_zhpt/placeHolder": "", "GridField/goods_d3829541_0hbn/editor/LookupEdit/goods_d3829541_zhpt/dialogTitle": "", "goods_Goods_GoodsName_b110ddde_h94h": "商品名称", "GridField/goods_Goods_GoodsName_b110ddde_h94h/editor/goods_Goods_GoodsName_b110ddde_9lx1": "商品名称", "GridField/goods_Goods_GoodsName_b110ddde_h94h/editor/TextBox/goods_Goods_GoodsName_b110ddde_9lx1/placeHolder": "", "specification_63d2f314_8ks8": "规格型号", "GridField/specification_63d2f314_8ks8/editor/specification_63d2f314_or74": "文本", "GridField/specification_63d2f314_8ks8/editor/TextBox/specification_63d2f314_or74/placeHolder": "", "quality_381e93a8_lzmz": "数量", "GridField/quality_381e93a8_lzmz/editor/quality_381e93a8_f1hx": "数值框", "GridField/quality_381e93a8_lzmz/editor/NumberSpinner/quality_381e93a8_f1hx/placeHolder": "", "price_12e9f1a9_0oqq": "标准单价", "GridField/price_12e9f1a9_0oqq/editor/price_12e9f1a9_5v46": "数值框", "GridField/price_12e9f1a9_0oqq/editor/NumberSpinner/price_12e9f1a9_5v46/placeHolder": "", "amount_62e1cb4c_sk4g": "金额", "GridField/amount_62e1cb4c_sk4g/editor/amount_62e1cb4c_wdwb": "数值框", "GridField/amount_62e1cb4c_sk4g/editor/NumberSpinner/amount_62e1cb4c_wdwb/placeHolder": "", "discountType_8004a7da_qc99": "折扣类型", "GridField/discountType_8004a7da_qc99/enumData/none": "无折扣", "GridField/discountType_8004a7da_qc99/enumData/dis": "有折扣", "discount_0658848e_zq1k": "折扣金额", "GridField/discount_0658848e_zq1k/editor/discount_0658848e_3sjx": "数值框", "GridField/discount_0658848e_zq1k/editor/NumberSpinner/discount_0658848e_3sjx/placeHolder": "", "actualAmount_7136b6c1_m0aj": "实际结算金额", "GridField/actualAmount_7136b6c1_m0aj/editor/actualAmount_7136b6c1_0q3z": "数值框", "GridField/actualAmount_7136b6c1_m0aj/editor/NumberSpinner/actualAmount_7136b6c1_0q3z/placeHolder": "", "remark_f9d55622_0rpu": "备注", "GridField/remark_f9d55622_0rpu/editor/remark_f9d55622_tpbx": "文本", "GridField/remark_f9d55622_0rpu/editor/TextBox/remark_f9d55622_tpbx/placeHolder": "" } };
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
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
