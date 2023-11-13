
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
  return new TranslateHttpLoader(http, '/apps/hotwave/database/web/bo-goods-front/goodsform/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","title":"商品表单","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","button-delete":"删除","button-data-import":"导入","button-data-export":"导出","main-container":"","content-splitter":"","content-list":"","data-grid-component-ref":"","content-main":"","detail-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","goodsName_f5c45c50_xevr":"商品名称","goodsCode_68f83985_nuka":"商品编号","detail-form-component":"","detail-form-section":"","Section/detail-form-section/mainTitle":"基本信息","Section/detail-form-section/subTitle":"","detail-form-layout":"","goodsName_f5c45c50_1xh8":"商品名称","TextBox/goodsName_f5c45c50_1xh8/placeHolder":"","goodsCode_68f83985_ou4c":"商品编号","TextBox/goodsCode_68f83985_ou4c/placeHolder":"","specification_d87a107d_kxuw":"规格型号","TextBox/specification_d87a107d_kxuw/placeHolder":"","category_54897081_hal5":"分类名称","TextBox/category_54897081_hal5/placeHolder":"","price_d0345408_4pk3":"单价","NumberSpinner/price_d0345408_4pk3/placeHolder":"","number_cff57161_7eok":"上架数量","NumberSpinner/number_cff57161_7eok/placeHolder":"","remark_1477fc42_atby":"备注","TextBox/remark_1477fc42_atby/placeHolder":""}};

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
      const httpOb = this.http.get("/apps/hotwave/database/web/bo-goods-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "goodsform/" + langCode + ".json";
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
