
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
export function createTranslateLoader(http: HttpClient,version:string) {
  let versionSuffix = "";
  if (version) {
    versionSuffix = "?v=" + version;
  }
  return new TranslateHttpLoader(http, '/apps/hotwave/stock/web/bo-goodsstock-front/purchaseorder/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"orderCode_eb2b6329_0e6a":"采购编号","TextBox/orderCode_eb2b6329_0e6a/placeHolder":"","merchant_Merchant_ParentMerchantID_MerchantName_8f6c5085_dg8d":"商户名称","TextBox/merchant_Merchant_ParentMerchantID_MerchantName_8f6c5085_dg8d/placeHolder":"","merchant_Merchant_ParentMerchantID_MerchantName_36298a52_nll4":"上游商户/经销商","TextBox/merchant_Merchant_ParentMerchantID_MerchantName_36298a52_nll4/placeHolder":"","TextBox/merchant_Merchant_MerchantName_63a09429_qmzw/placeHolder":"","merchant_Merchant_ParentMerchantID_MerchantName_bb51c324_bllr":"上游商户/经销商","TextBox/merchant_Merchant_ParentMerchantID_MerchantName_bb51c324_bllr/placeHolder":"","root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"补货采购单","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","button-approve":"提交审批","button-cancel-approve":"取消提交审批","main-container":"","like-card-container":"","basic-form-component-ref":"","detail-container":"","detail-section":"","Section/detail-section/mainTitle":"","Section/detail-section/subTitle":"","detail-tab":"","purchasedetail-tab-page":"补货采购细节","purchasedetail-component-ref":"","purchasedetail-tab-toolbar":"","purchasedetailAddButton":"添加补货商品","purchasedetailRemoveButton":"删除","HiddenContainer-form":"","helpId":"商品库帮助","LookupEdit/helpId/placeHolder":"","LookupEdit/helpId/dialogTitle":"","basic-form-component":"","basic-form-section":"","Section/basic-form-section/mainTitle":"基本信息","Section/basic-form-section/subTitle":"","basic-form-layout":"","merchant_Merchant_MerchantName_63a09429_qmzw":"商户","LookupEdit/merchant_Merchant_MerchantName_63a09429_qmzw/placeHolder":"","LookupEdit/merchant_Merchant_MerchantName_63a09429_qmzw/dialogTitle":"","merchant_Merchant_ParentMerchantID_MerchantName_36298a52_yx1o":"上游商户/经销商","TextBox/merchant_Merchant_ParentMerchantID_MerchantName_36298a52_yx1o/placeHolder":"","expectedTime_56dc23aa_uy5z":"预计送达时间","DateBox/expectedTime_56dc23aa_uy5z/placeHolder":"","orderTime_c4d1b237_c7mc":"下单时间","DateBox/orderTime_c4d1b237_c7mc/placeHolder":"","orderPerson_OrderPerson_name_c00ee193_ix0g":"下单人","TextBox/orderPerson_OrderPerson_name_c00ee193_ix0g/placeHolder":"","totalPrice_6ec93dfd_x09n":"采购金额","NumberSpinner/totalPrice_6ec93dfd_x09n/placeHolder":"","remark_d7c25e3d_8pj7":"备注","TextBox/remark_d7c25e3d_8pj7/placeHolder":"","purchasedetail-component":"","purchasedetail-component-layout":"","dataGrid_purchasedetail":"","DataGrid/dataGrid_purchasedetail/lineNumberTitle":"","DataGrid/dataGrid_purchasedetail/OperateEditButton":"编辑","DataGrid/dataGrid_purchasedetail/OperateDeleteButton":"删除","DataGrid/dataGrid_purchasedetail/OperateColumn":"操作","goods_Goods_GoodsName_053fe342_cike":"商品名称","GridField/goods_Goods_GoodsName_053fe342_cike/editor/goods_Goods_GoodsName_053fe342_88dg":"文本","GridField/goods_Goods_GoodsName_053fe342_cike/editor/TextBox/goods_Goods_GoodsName_053fe342_88dg/placeHolder":"","goods_Goods_Specification_7a80c1a7_p7jl":"规格型号","GridField/goods_Goods_Specification_7a80c1a7_p7jl/editor/goods_Goods_Specification_7a80c1a7_09tw":"文本","GridField/goods_Goods_Specification_7a80c1a7_p7jl/editor/TextBox/goods_Goods_Specification_7a80c1a7_09tw/placeHolder":"","quality_b81a8d03_d8r9":"采购数量","GridField/quality_b81a8d03_d8r9/editor/quality_b81a8d03_4uk1":"数值框","GridField/quality_b81a8d03_d8r9/editor/NumberSpinner/quality_b81a8d03_4uk1/placeHolder":"","price_9ca3c686_362q":"采购单价","GridField/price_9ca3c686_362q/editor/price_9ca3c686_bmjk":"数值框","GridField/price_9ca3c686_362q/editor/NumberSpinner/price_9ca3c686_bmjk/placeHolder":"","amount_95e56af1_2k0y":"采购小计","GridField/amount_95e56af1_2k0y/editor/amount_95e56af1_mesz":"数值框","GridField/amount_95e56af1_2k0y/editor/NumberSpinner/amount_95e56af1_mesz/placeHolder":"","remark_668d79eb_fyk9":"备注","GridField/remark_668d79eb_fyk9/editor/remark_668d79eb_3slt":"文本","GridField/remark_668d79eb_fyk9/editor/TextBox/remark_668d79eb_3slt/placeHolder":""}};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) { }
  transform(key: string, langCode: string, defaultValue?: string) {
      
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }
}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    if (!url) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Injectable()
export class LangService {
  constructor(private translate: TranslateService) { }
  transform(key: string, langCode: string, defaultValue?: string) {
    
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

}

@Injectable()
export class TranslateResolveService implements Resolve<any>{

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.defaultLang = 'zh-CHS';
    translate.setTranslation('zh-CHS', lang['zh-CHS']);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let langCode = localStorage.getItem('languageCode');
    if (!langCode) {
      langCode = "zh-CHS";
    }
    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http,null))) {
      this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
      return of(this.translate[langCode]);
    } else {
      const httpOb = this.http.get("/apps/hotwave/stock/web/bo-goodsstock-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "purchaseorder/" + langCode + ".json";
          data.forEach((item) => {
            if (item.category == "i18n" && item.key == versionKey) {
              currentVersion = item.value;
            }
          });
        }

        this.translate.defaultLang = langCode;
        this.translate.currentLang = langCode;
        this.translate.currentLoader = createTranslateLoader(this.http, currentVersion);

    let tran = this.translate.getTranslation(langCode).pipe(catchError(err => {
      console.error("read resource file failed,please check!!! "+ err);
      return of(err);
    }));
    return tran;
      }));
      return httpOb;
    }
  }
}
